
(function() {
  const META = window.__WORKSAI_META__ || {};
  const INITIAL_STATE = window.__WORKSAI_INITIAL__ || {};
  let sessionToken = localStorage.getItem('worksai_token_' + META.slug) || '';
  let currentAuth = INITIAL_STATE.identity || { authenticated: false, mode: 'demo', tenantId: 'demo-sandbox', userId: 'demo-visitor' };
  let activeProjectId = (INITIAL_STATE.initialItem && INITIAL_STATE.initialItem.id) || ('seed-' + META.slug + '-1');
  let activeProjectTitle = (INITIAL_STATE.initialItem && INITIAL_STATE.initialItem.title) || (META.name + ' Starter Project');

  // Product-specific interactive state
  let canvasState = {
    layout: 'layered',
    highlightSpof: true,
    selectedNodeId: null,
    history: [],
    nodes: [],
    edges: []
  };
  let ledgerTransactions = [];
  let ledgerBudgets = { infrastructure: 1500, compute: 5000, software: 1200, operations: 2000 };
  let waveCutChapters = [
    { id: 'ch-1', timeSec: 0.0, title: '00:00 — Episode Intro & Hook', state: 'Keep' },
    { id: 'ch-2', timeSec: 4.5, title: '00:04 — Architecture Deep Dive', state: 'Keep' },
    { id: 'ch-3', timeSec: 9.5, title: '00:09 — Production Benchmarks', state: 'Keep' }
  ];
  let omniTickets = [
    {
      id: 'TKT-901',
      subject: 'Production SSO SAML assertion clock-skew timeout',
      customer: 'acme-bank.example',
      tier: 'enterprise',
      status: 'open',
      priority: 'P1',
      ageMinutes: 52,
      slaMinutes: 45,
      messages: [
        { author: 'secops@acme-bank.example', type: 'customer', text: 'IdP initiated login fails with SAML NotOnOrAfter clock skew error across EU edge pops.' },
        { author: 'OmniDesk SLA Engine', type: 'internal', text: 'Auto-Triaged as Enterprise P1 (SLA breached by +7m). Recommended KB: KB-101.' }
      ]
    },
    {
      id: 'TKT-902',
      subject: 'Webhook HMAC signature retry backoff configuration',
      customer: 'fintech-ops.example',
      tier: 'pro',
      status: 'in_progress',
      priority: 'P2',
      ageMinutes: 65,
      slaMinutes: 120,
      messages: [
        { author: 'dev@fintech-ops.example', type: 'customer', text: 'How do we configure exponential backoff when our webhook receiver returns HTTP 503?' }
      ]
    },
    {
      id: 'TKT-903',
      subject: 'Custom domain TLS certificate provisioning status',
      customer: 'studio-media.example',
      tier: 'pro',
      status: 'resolved',
      priority: 'P3',
      ageMinutes: 30,
      slaMinutes: 240,
      messages: [
        { author: 'admin@studio-media.example', type: 'customer', text: 'Attached Worker custom domain and verified HTTP 200.' }
      ]
    }
  ];
  let activeTicketId = 'TKT-901';

  function setStatus(msg, isError) {
    const el = document.getElementById('statusBanner');
    if (!el) return;
    el.textContent = msg;
    el.style.borderColor = isError ? '#DC2626' : '#1E293B';
    el.style.color = isError ? '#FCA5A5' : '#38BDF8';
  }

  function authHeaders() {
    const h = { 'Content-Type': 'application/json' };
    if (sessionToken) h['Authorization'] = 'Bearer ' + sessionToken;
    return h;
  }

  function updateAuthBadge() {
    const badge = document.getElementById('authModeBadge');
    const btn = document.getElementById('authActionBtn');
    if (!badge) return;
    if (currentAuth && currentAuth.authenticated && currentAuth.mode === 'production') {
      badge.className = 'badge-pill badge-prod';
      badge.textContent = 'AUTH: ' + currentAuth.tenantId + ' / ' + currentAuth.userId;
      if (btn) btn.textContent = 'Switch / Sign Out';
    } else {
      badge.className = 'badge-pill badge-demo';
      badge.textContent = 'DEMO SANDBOX (' + (currentAuth.tenantId || 'demo-sandbox') + ')';
      if (btn) btn.textContent = 'Sign In to Workspace';
    }
  }

  async function ensureDemoOrAuthSession() {
    const res = await fetch('/api/auth/me', { headers: authHeaders() });
    if (res.ok) {
      const data = await res.json();
      if (data.authenticated) {
        currentAuth = data.identity;
        updateAuthBadge();
        return;
      }
    }
    // Issue a server-signed isolated demo session token automatically so demo CRUD works cleanly without spoofing headers
    const demoRes = await fetch('/api/auth/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
    if (demoRes.ok) {
      const d = await demoRes.json();
      sessionToken = d.token || '';
      localStorage.setItem('worksai_token_' + META.slug, sessionToken);
      currentAuth = d.identity || currentAuth;
      updateAuthBadge();
    }
  }

  async function submitSignIn(ev) {
    if (ev) ev.preventDefault();
    const email = (document.getElementById('authEmailInput').value || '').trim();
    const workspaceSlug = (document.getElementById('authTenantInput').value || '').trim();
    const passcode = (document.getElementById('authPasscodeInput').value || '').trim();
    if (!email || !workspaceSlug || passcode.length < 6) {
      setStatus('Sign-in validation error: Enter valid email, workspace tenant slug, and 6+ char passcode.', true);
      return false;
    }
    const res = await fetch('/api/auth/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, workspaceSlug, passcode })
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus('Sign-in failed: ' + (data.error || res.status), true);
      return false;
    }
    sessionToken = data.token;
    localStorage.setItem('worksai_token_' + META.slug, sessionToken);
    currentAuth = data.identity;
    updateAuthBadge();
    closeAuthModal();
    setStatus('Signed in to isolated workspace ' + currentAuth.tenantId + ' as ' + currentAuth.userId);
    await refreshProjectList();
    return false;
  }

  async function startDemoSession() {
    const res = await fetch('/api/auth/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
    const data = await res.json();
    if (res.ok) {
      sessionToken = data.token;
      localStorage.setItem('worksai_token_' + META.slug, sessionToken);
      currentAuth = data.identity;
      updateAuthBadge();
      closeAuthModal();
      setStatus('Switched to isolated Demo Sandbox session (' + currentAuth.userId + ')');
      await refreshProjectList();
    }
  }

  function openAuthModal() {
    const m = document.getElementById('authModalBackdrop');
    if (m) m.classList.add('open');
  }
  function closeAuthModal() {
    const m = document.getElementById('authModalBackdrop');
    if (m) m.classList.remove('open');
  }

  // --- Shared R2 Project CRUD ---
  async function refreshProjectList() {
    const ul = document.getElementById('projectList');
    if (!ul) return;
    const res = await fetch('/api/workspace/items', { headers: authHeaders() });
    if (!res.ok) return;
    const data = await res.json();
    const items = data.items || [];
    ul.innerHTML = items.map(function(item) {
      return '<li data-id="' + item.id + '" style="background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.5rem;">' +
        '<div style="font-weight:600;font-size:0.81rem;color:#F8FAFC;">' + item.title + '</div>' +
        '<div style="font-size:0.68rem;color:#64748B;font-family:monospace;margin:0.15rem 0 0.4rem;">' + item.id + ' • v' + (item.version || 1) + '</div>' +
        '<div style="display:flex;gap:0.3rem;flex-wrap:wrap;">' +
          '<button type="button" class="btn btn-ghost" style="padding:0.18rem 0.45rem;font-size:0.71rem;" onclick="window.WAI.openProject(\'' + item.id + '\')">Open</button>' +
          '<button type="button" class="btn btn-ghost" style="padding:0.18rem 0.45rem;font-size:0.71rem;" onclick="window.WAI.renameProject(\'' + item.id + '\')">Rename</button>' +
          '<button type="button" class="btn btn-danger" style="padding:0.18rem 0.45rem;font-size:0.71rem;" onclick="window.WAI.deleteProject(\'' + item.id + '\')">Delete</button>' +
        '</div>' +
      '</li>';
    }).join('');
  }

  async function openProject(id) {
    const res = await fetch('/api/workspace/items/' + encodeURIComponent(id), { headers: authHeaders() });
    const data = await res.json();
    if (!res.ok) {
      setStatus('Cannot open project: ' + (data.error || res.status), true);
      return;
    }
    activeProjectId = data.item.id;
    activeProjectTitle = data.item.title;
    const titleEl = document.getElementById('projectTitleInput');
    if (titleEl) titleEl.value = activeProjectTitle;
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) inputEl.value = data.item.input || '';
    hydrateDomainStateFromInput(data.item.input || '');
    setStatus('Opened project "' + activeProjectTitle + '" (v' + data.item.version + ')');
  }

  async function saveCurrentProject() {
    const titleEl = document.getElementById('projectTitleInput');
    if (titleEl && titleEl.value.trim()) activeProjectTitle = titleEl.value.trim();
    const inputEl = document.getElementById('workspaceInput');
    const payloadStr = inputEl ? inputEl.value : META.defaultInput;
    const res = await fetch('/api/workspace/items', {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ id: activeProjectId, title: activeProjectTitle, input: payloadStr })
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus('Save failed: ' + (data.error || res.status), true);
      return null;
    }
    activeProjectId = data.item.id;
    setStatus('Saved "' + data.item.title + '" (v' + data.item.version + ') to R2 [' + currentAuth.tenantId + '/' + currentAuth.userId + ']');
    await refreshProjectList();
    return data.item;
  }

  async function renameProject(id) {
    const nextTitle = prompt('Enter new project title:', activeProjectTitle);
    if (!nextTitle || !nextTitle.trim()) return;
    const res = await fetch('/api/workspace/items/' + encodeURIComponent(id), {
      method: 'PATCH',
      headers: authHeaders(),
      body: JSON.stringify({ title: nextTitle.trim() })
    });
    if (res.ok) {
      activeProjectTitle = nextTitle.trim();
      const titleEl = document.getElementById('projectTitleInput');
      if (titleEl) titleEl.value = activeProjectTitle;
      setStatus('Renamed project ' + id + ' to "' + activeProjectTitle + '"');
      await refreshProjectList();
    }
  }

  async function deleteProject(id) {
    const res = await fetch('/api/workspace/items/' + encodeURIComponent(id), {
      method: 'DELETE',
      headers: authHeaders()
    });
    if (res.ok) {
      setStatus('Deleted project ' + id + ' from R2 workspace');
      await refreshProjectList();
    }
  }

  function newProject() {
    activeProjectId = 'proj-' + Date.now().toString(36);
    activeProjectTitle = META.name + ' Draft ' + activeProjectId.slice(-4);
    const titleEl = document.getElementById('projectTitleInput');
    if (titleEl) titleEl.value = activeProjectTitle;
    setStatus('Initialized new project "' + activeProjectTitle + '" — click Save to persist to R2.');
  }

  async function exportActiveProject(fmt) {
    await saveCurrentProject();
    const url = '/api/workspace/export/' + encodeURIComponent(activeProjectId) + '?format=' + encodeURIComponent(fmt);
    const res = await fetch(url, { headers: authHeaders() });
    if (!res.ok) {
      setStatus('Export failed (' + res.status + ')', true);
      return;
    }
    const blob = await res.blob();
    const dlUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = dlUrl;
    a.download = META.slug + '-' + activeProjectId + '.' + fmt;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setStatus('Exported ' + a.download + ' (' + blob.size + ' bytes)');
  }

  function loadPreset(idx) {
    const presets = META.samplePresets || [];
    const p = presets[Number(idx)] || presets[0];
    if (!p) return;
    activeProjectTitle = p.title;
    const titleEl = document.getElementById('projectTitleInput');
    if (titleEl) titleEl.value = p.title;
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) inputEl.value = p.input;
    hydrateDomainStateFromInput(p.input);
    setStatus('Loaded sample preset: ' + p.title);
  }

  function importFile(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function() {
      const content = String(reader.result || '');
      const inputEl = document.getElementById('workspaceInput');
      if (inputEl) inputEl.value = content;
      hydrateDomainStateFromInput(content);
      setStatus('Imported ' + file.name + ' (' + file.size + ' bytes)');
    };
    reader.readAsText(file);
  }

  async function runWithAiCopilot() {
    const inputEl = document.getElementById('workspaceInput');
    const box = document.getElementById('aiCopilotBox');
    if (box) box.textContent = 'Running Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct-fp8)...';
    const res = await fetch('/api/execute', {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ input: inputEl ? inputEl.value : META.defaultInput, enableAi: true })
    });
    const data = await res.json();
    if (box) {
      box.textContent = data.aiCopilotNote || (data.result && data.result.summary) || 'Analysis complete.';
    }
    setStatus('Completed AI Copilot review (genuineAiInvoked=' + Boolean(data.genuineAiInvoked) + ')');
  }

  // ============================================================================
  // 1. CANVASARCH INTERACTIVE DIAGRAMMING ENGINE
  // ============================================================================
  function parseCanvasSpecToGraph(specText) {
    const lines = String(specText || '').split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('//'));
    const nodeMap = new Map();
    const edges = [];
    function ensureNode(label) {
      const clean = label.trim();
      if (!nodeMap.has(clean)) {
        const idx = nodeMap.size;
        const role = /db|postgres|sql|r2|bucket/i.test(clean) ? 'database'
          : /gateway|edge|cdn|client|browser/i.test(clean) ? 'gateway'
          : /cache|redis|kv/i.test(clean) ? 'cache' : 'service';
        nodeMap.set(clean, { id: 'n-' + idx, label: clean, role, fanIn: 0, fanOut: 0, x: 0, y: 0 });
      }
      return nodeMap.get(clean);
    }
    lines.forEach(function(line) {
      const parts = line.split(/-->|->/);
      if (parts.length >= 2) {
        for (let i = 0; i < parts.length - 1; i++) {
          const src = ensureNode(parts[i]);
          const dst = ensureNode(parts[i + 1]);
          src.fanOut += 1;
          dst.fanIn += 1;
          edges.push({ from: src.id, to: dst.id, fromLabel: src.label, toLabel: dst.label });
        }
      } else {
        ensureNode(line);
      }
    });
    const nodes = Array.from(nodeMap.values());
    layoutCanvasNodes(nodes, canvasState.layout);
    canvasState.nodes = nodes;
    canvasState.edges = edges;
  }

  function layoutCanvasNodes(nodes, mode) {
    const count = nodes.length || 1;
    nodes.forEach(function(n, idx) {
      if (mode === 'grid') {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        n.x = 60 + col * 240;
        n.y = 60 + row * 120;
      } else if (mode === 'radial') {
        const angle = (2 * Math.PI * idx) / count;
        n.x = Math.round(330 + 210 * Math.cos(angle));
        n.y = Math.round(165 + 115 * Math.sin(angle));
      } else {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        n.x = 70 + col * 340;
        n.y = 50 + row * 110;
      }
    });
  }

  function renderCanvasArchDom() {
    const stage = document.getElementById('archCanvasStage');
    if (!stage) return;
    const nodes = canvasState.nodes;
    const edges = canvasState.edges;
    const spofs = nodes.filter(n => (n.fanIn + n.fanOut) >= 2);

    const nc = document.getElementById('caNodeCount'); if (nc) nc.textContent = String(nodes.length);
    const ec = document.getElementById('caEdgeCount'); if (ec) ec.textContent = String(edges.length);
    const sc = document.getElementById('caSpofCount'); if (sc) sc.textContent = String(spofs.length);
    const ll = document.getElementById('caLayoutLabel'); if (ll) ll.textContent = canvasState.layout.toUpperCase();

    const nodeById = {};
    nodes.forEach(n => { nodeById[n.id] = n; });

    let svgEdges = '';
    edges.forEach(function(e) {
      const a = nodeById[e.from];
      const b = nodeById[e.to];
      if (!a || !b) return;
      const x1 = a.x + 95, y1 = a.y + 32;
      const x2 = b.x + 95, y2 = b.y + 32;
      svgEdges += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#38BDF8" stroke-width="2.2" marker-end="url(#arrowHead)"/>';
    });

    let svgNodes = '';
    nodes.forEach(function(n) {
      const isSpof = canvasState.highlightSpof && (n.fanIn + n.fanOut) >= 2;
      const isSelected = canvasState.selectedNodeId === n.id;
      const stroke = isSelected ? '#F8FAFC' : (isSpof ? '#F59E0B' : '#0284C7');
      const fill = n.role === 'database' ? '#064E3B' : (n.role === 'gateway' ? '#1E1B4B' : '#0F172A');
      svgNodes += '<g class="canvas-node" data-id="' + n.id + '" transform="translate(' + n.x + ',' + n.y + ')" style="cursor:grab;" onclick="window.WAI.selectCanvasNode(\'' + n.id + '\')">' +
        '<rect width="190" height="64" rx="10" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + (isSelected ? '3' : '2') + '"/>' +
        '<text x="14" y="26" fill="#F8FAFC" font-size="12" font-weight="bold" font-family="sans-serif">' + n.label.slice(0, 22) + '</text>' +
        '<text x="14" y="46" fill="#94A3B8" font-size="10" font-family="monospace">' + n.role.toUpperCase() + ' • in:' + n.fanIn + ' out:' + n.fanOut + (isSpof ? ' [SPOF]' : '') + '</text>' +
      '</g>';
    });

    stage.innerHTML = '<svg id="archSvgCanvas" viewBox="0 0 760 370" style="width:100%;height:360px;user-select:none;">' +
      '<defs><marker id="arrowHead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#38BDF8"/></marker></defs>' +
      svgEdges + svgNodes + '</svg>';

    // Populate SPOF list
    const spofList = document.getElementById('caSpofList');
    if (spofList) {
      spofList.innerHTML = spofs.length ? spofs.map(function(s) {
        return '<div style="background:#1E293B;border-left:3px solid #F59E0B;padding:0.45rem 0.6rem;border-radius:4px;">' +
          '<strong>' + s.label + '</strong> (fan-in ' + s.fanIn + ', fan-out ' + s.fanOut + ') — Recommend multi-AZ replica or queue buffer.' +
        '</div>';
      }).join('') : '<div>No single-point-of-failure bottlenecks detected.</div>';
    }

    enableSvgNodeDragging();
  }

  function enableSvgNodeDragging() {
    const svg = document.getElementById('archSvgCanvas');
    if (!svg) return;
    let draggingNode = null;
    let startX = 0, startY = 0;

    svg.addEventListener('pointerdown', function(ev) {
      const g = ev.target.closest('.canvas-node');
      if (!g) return;
      const id = g.getAttribute('data-id');
      draggingNode = canvasState.nodes.find(n => n.id === id);
      if (!draggingNode) return;
      startX = ev.clientX - draggingNode.x;
      startY = ev.clientY - draggingNode.y;
    });
    window.addEventListener('pointermove', function(ev) {
      if (!draggingNode) return;
      draggingNode.x = Math.max(10, Math.min(550, Math.round(ev.clientX - startX)));
      draggingNode.y = Math.max(10, Math.min(295, Math.round(ev.clientY - startY)));
      renderCanvasArchDom();
    });
    window.addEventListener('pointerup', function() {
      draggingNode = null;
    });
  }

  function selectCanvasNode(nodeId) {
    canvasState.selectedNodeId = nodeId;
    const node = canvasState.nodes.find(n => n.id === nodeId);
    const box = document.getElementById('caNodeInspector');
    if (node && box) {
      box.innerHTML = '<div style="font-weight:700;color:#38BDF8;margin-bottom:0.35rem;">' + node.label + '</div>' +
        '<div style="font-size:0.76rem;color:#94A3B8;margin-bottom:0.5rem;">Role: ' + node.role + ' • Coords: (' + node.x + ', ' + node.y + ')</div>' +
        '<div style="display:flex;gap:0.4rem;">' +
          '<button type="button" class="btn btn-danger" style="font-size:0.74rem;padding:0.25rem 0.55rem;" onclick="window.WAI.deleteCanvasNode(\'' + node.id + '\')">Remove Node</button>' +
        '</div>';
    }
    renderCanvasArchDom();
  }

  function deleteCanvasNode(nodeId) {
    const node = canvasState.nodes.find(n => n.id === nodeId);
    if (!node) return;
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) {
      const lines = inputEl.value.split(/\r?\n/).filter(l => !l.includes(node.label));
      inputEl.value = lines.join('\n');
      syncCanvasFromText();
    }
  }

  function canvasAddNode(ev) {
    if (ev) ev.preventDefault();
    const nameEl = document.getElementById('caNewNodeName');
    const targetEl = document.getElementById('caConnectTarget');
    const label = (nameEl && nameEl.value || '').trim();
    if (!label) return false;
    const target = (targetEl && targetEl.value || '').trim() || (canvasState.nodes[0] && canvasState.nodes[0].label) || 'Cloudflare Edge Worker';
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) {
      canvasState.history.push(inputEl.value);
      inputEl.value = (inputEl.value.trim() + '\n' + target + ' -> ' + label).trim();
      syncCanvasFromText();
    }
    if (nameEl) nameEl.value = '';
    setStatus('Added node "' + label + '" connected to "' + target + '"');
    return false;
  }

  function setCanvasLayout(mode) {
    canvasState.layout = mode;
    layoutCanvasNodes(canvasState.nodes, mode);
    renderCanvasArchDom();
    setStatus('Applied ' + mode + ' auto-layout to architecture graph.');
  }

  function toggleSpofOverlay() {
    canvasState.highlightSpof = !canvasState.highlightSpof;
    renderCanvasArchDom();
  }

  function canvasUndo() {
    if (!canvasState.history.length) return;
    const prev = canvasState.history.pop();
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) {
      inputEl.value = prev;
      syncCanvasFromText();
    }
  }

  function syncCanvasFromText() {
    const inputEl = document.getElementById('workspaceInput');
    if (!inputEl) return;
    parseCanvasSpecToGraph(inputEl.value);
    renderCanvasArchDom();
  }

  // ============================================================================
  // 2. LEDGERFLOW INTERACTIVE FINANCE & BUDGET ENGINE
  // ============================================================================
  function parseLedgerCsvToRows(csvText) {
    const lines = String(csvText || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    ledgerTransactions = lines.map(function(line, idx) {
      const parts = line.split(',').map(p => p.trim());
      const amount = parseFloat(parts[2] || '0') || 0;
      return {
        id: 'tx-' + idx,
        date: parts[0] || '2026-03-01',
        desc: parts[1] || 'Transaction',
        amount: amount,
        category: parts[3] || (amount >= 0 ? 'revenue' : 'infrastructure'),
        reviewed: false
      };
    });
  }

  function syncLedgerToText() {
    const inputEl = document.getElementById('workspaceInput');
    if (!inputEl) return;
    inputEl.value = ledgerTransactions.map(t => [t.date, t.desc, t.amount.toFixed(2), t.category].join(',')).join('\n');
  }

  function renderLedgerView() {
    const tbody = document.getElementById('lfTxTableBody');
    if (!tbody) return;
    const q = (document.getElementById('lfSearchFilter') && document.getElementById('lfSearchFilter').value || '').toLowerCase();
    const catF = (document.getElementById('lfCatFilter') && document.getElementById('lfCatFilter').value) || 'all';
    const stF = (document.getElementById('lfStatusFilter') && document.getElementById('lfStatusFilter').value) || 'all';

    let inflow = 0, outflow = 0, anomalies = 0;
    const catSpend = { infrastructure: 0, compute: 0, software: 0, operations: 0 };

    ledgerTransactions.forEach(function(t) {
      if (t.amount >= 0) inflow += t.amount;
      else {
        const abs = Math.abs(t.amount);
        outflow += abs;
        if (catSpend[t.category] !== undefined) catSpend[t.category] += abs;
      }
      t.isAnomaly = !t.reviewed && Math.abs(t.amount) >= 2500 && t.amount < 0;
      if (t.isAnomaly) anomalies += 1;
    });

    const net = inflow - outflow;
    const infEl = document.getElementById('lfInflow'); if (infEl) infEl.textContent = '$' + inflow.toLocaleString('en-US', { minimumFractionDigits: 2 });
    const outEl = document.getElementById('lfOutflow'); if (outEl) outEl.textContent = '$' + outflow.toLocaleString('en-US', { minimumFractionDigits: 2 });
    const netEl = document.getElementById('lfNet'); if (netEl) netEl.textContent = (net >= 0 ? '+$' : '-$') + Math.abs(net).toLocaleString('en-US', { minimumFractionDigits: 2 });
    const anEl = document.getElementById('lfAnomalyCount'); if (anEl) anEl.textContent = String(anomalies);

    const filtered = ledgerTransactions.filter(function(t) {
      if (q && !t.desc.toLowerCase().includes(q) && !t.category.toLowerCase().includes(q)) return false;
      if (catF !== 'all' && t.category !== catF) return false;
      if (stF === 'anomaly' && !t.isAnomaly) return false;
      if (stF === 'cleared' && t.isAnomaly) return false;
      return true;
    });

    tbody.innerHTML = filtered.map(function(t) {
      const badge = t.isAnomaly
        ? '<span class="badge-pill" style="background:#7F1D1D;color:#FECACA;">ANOMALY SPIKE</span>'
        : '<span class="badge-pill" style="background:#064E3B;color:#A7F3D0;">CLEARED</span>';
      return '<tr>' +
        '<td style="font-family:monospace;">' + t.date + '</td>' +
        '<td><strong>' + t.desc + '</strong></td>' +
        '<td><span class="badge-pill" style="background:#1E293B;color:#CBD5E1;">' + t.category + '</span></td>' +
        '<td style="font-family:monospace;color:' + (t.amount >= 0 ? '#10B981' : '#F87171') + ';">' + (t.amount >= 0 ? '+' : '') + '$' + t.amount.toFixed(2) + '</td>' +
        '<td>' + badge + '</td>' +
        '<td>' +
          (t.isAnomaly ? '<button type="button" class="btn btn-ghost" style="padding:0.15rem 0.45rem;font-size:0.72rem;margin-right:0.25rem;" onclick="window.WAI.ledgerClearAnomaly(\'' + t.id + '\')">Mark Reviewed</button>' : '') +
          '<button type="button" class="btn btn-danger" style="padding:0.15rem 0.45rem;font-size:0.72rem;" onclick="window.WAI.ledgerDeleteTx(\'' + t.id + '\')">Delete</button>' +
        '</td>' +
      '</tr>';
    }).join('');

    const bBox = document.getElementById('lfBudgetBars');
    if (bBox) {
      bBox.innerHTML = Object.keys(ledgerBudgets).map(function(cat) {
        const spent = catSpend[cat] || 0;
        const cap = ledgerBudgets[cat] || 1000;
        const pct = Math.min(100, Math.round((spent / cap) * 100));
        const barColor = pct >= 95 ? '#EF4444' : (pct >= 75 ? '#F59E0B' : '#10B981');
        return '<div style="background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.55rem;">' +
          '<div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.25rem;">' +
            '<strong style="text-transform:capitalize;">' + cat + '</strong>' +
            '<span style="font-family:monospace;">$' + spent.toFixed(0) + ' / $' + cap + ' (' + pct + '%)</span>' +
          '</div>' +
          '<div style="background:#1E293B;height:7px;border-radius:999px;overflow:hidden;">' +
            '<div style="width:' + pct + '%;height:100%;background:' + barColor + ';"></div>' +
          '</div>' +
        '</div>';
      }).join('');
    }
  }

  function ledgerAddTransaction(ev) {
    if (ev) ev.preventDefault();
    const date = document.getElementById('lfTxDate').value;
    const desc = document.getElementById('lfTxDesc').value.trim();
    const amount = parseFloat(document.getElementById('lfTxAmount').value);
    const cat = document.getElementById('lfTxCat').value;
    if (!date || !desc || isNaN(amount)) {
      setStatus('Validation error: Please enter valid date, payee, and numeric amount.', true);
      return false;
    }
    ledgerTransactions.unshift({
      id: 'tx-' + Date.now().toString(36),
      date: date,
      desc: desc,
      amount: amount,
      category: cat,
      reviewed: false
    });
    document.getElementById('lfTxDesc').value = '';
    document.getElementById('lfTxAmount').value = '';
    syncLedgerToText();
    renderLedgerView();
    setStatus('Recorded transaction "' + desc + '" ($' + amount.toFixed(2) + ')');
    return false;
  }

  function ledgerClearAnomaly(txId) {
    const tx = ledgerTransactions.find(t => t.id === txId);
    if (tx) tx.reviewed = true;
    renderLedgerView();
    setStatus('Marked transaction ' + txId + ' as reviewed.');
  }

  function ledgerDeleteTx(txId) {
    ledgerTransactions = ledgerTransactions.filter(t => t.id !== txId);
    syncLedgerToText();
    renderLedgerView();
  }

  // ============================================================================
  // 3. WAVECUT INTERACTIVE AUDIO WAVEFORM & PCM WAV STUDIO
  // ============================================================================
  function buildClientWavBlob(envelope) {
    const sampleRate = 8000;
    const durationSec = Math.max(2, Math.min(16, envelope.length));
    const numSamples = sampleRate * durationSec;
    const dataSize = numSamples * 2;
    const buf = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buf);
    function wStr(off, s) { for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i)); }
    wStr(0, 'RIFF'); view.setUint32(4, 36 + dataSize, true); wStr(8, 'WAVE');
    wStr(12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true); view.setUint16(34, 16, true);
    wStr(36, 'data'); view.setUint32(40, dataSize, true);
    for (let i = 0; i < numSamples; i++) {
      const secIdx = Math.floor((i / numSamples) * envelope.length);
      const amp = Number(envelope[secIdx] || 0.2);
      const freq = secIdx % 2 === 0 ? 440 : 554.37;
      const sample = Math.max(-1, Math.min(1, Math.sin((2 * Math.PI * freq * i) / sampleRate) * amp));
      view.setInt16(44 + i * 2, Math.floor(sample * 32767), true);
    }
    return new Blob([buf], { type: 'audio/wav' });
  }

  function getWaveCutEnvelope() {
    const inputEl = document.getElementById('workspaceInput');
    const raw = (inputEl && inputEl.value) || '0.18, 0.42, 0.76, 0.81, 0.01, 0.00, 0.01, 0.64, 0.88, 0.53, 0.01, 0.02, 0.71, 0.79';
    return raw.split(/[,\s]+/).map(v => parseFloat(v)).filter(v => !isNaN(v));
  }

  function updateWaveCutDsp() {
    const box = document.getElementById('wcWaveformBox');
    if (!box) return;
    const env = getWaveCutEnvelope();
    const threshSlider = Number((document.getElementById('wcThresholdRange') && document.getElementById('wcThresholdRange').value) || 5);
    const threshRms = threshSlider / 100;
    const trimIn = Number((document.getElementById('wcTrimIn') && document.getElementById('wcTrimIn').value) || 0);
    const trimOut = Number((document.getElementById('wcTrimOut') && document.getElementById('wcTrimOut').value) || env.length);

    const tv = document.getElementById('wcThreshVal'); if (tv) tv.textContent = '-' + Math.round(60 - threshSlider * 1.4) + ' dB';
    const ti = document.getElementById('wcTrimInVal'); if (ti) ti.textContent = trimIn.toFixed(1) + 's';
    const to = document.getElementById('wcTrimOutVal'); if (to) to.textContent = trimOut.toFixed(1) + 's';

    let silenceCount = 0;
    const barW = Math.floor(680 / Math.max(1, env.length));
    let barsSvg = '';
    env.forEach(function(amp, idx) {
      const isSilent = amp <= threshRms;
      if (isSilent) silenceCount += 1;
      const inTrim = idx >= trimIn && idx <= trimOut;
      const h = Math.max(8, Math.round(amp * 130));
      const y = 75 - Math.round(h / 2);
      const x = 30 + idx * barW;
      const color = !inTrim ? '#334155' : (isSilent ? '#EF4444' : '#38BDF8');
      barsSvg += '<rect x="' + x + '" y="' + y + '" width="' + Math.max(6, barW - 4) + '" height="' + h + '" rx="3" fill="' + color + '"/>';
    });

    box.innerHTML = '<svg viewBox="0 0 740 155" style="width:100%;height:155px;" role="img" aria-label="Interactive Audio Waveform Timeline">' +
      '<line x1="20" y1="75" x2="720" y2="75" stroke="#1E293B" stroke-width="1"/>' +
      barsSvg +
      '<text x="24" y="145" fill="#94A3B8" font-size="11" font-family="monospace">Cyan: Active Voice Signal • Red: Gate-Detected Dead Air (' + silenceCount + '.0s) • Slate: Trimmed Out</text>' +
    '</svg>';

    const dEl = document.getElementById('wcDuration'); if (dEl) dEl.textContent = env.length.toFixed(1) + 's';
    const sEl = document.getElementById('wcSilenceSec'); if (sEl) sEl.textContent = silenceCount.toFixed(1) + 's';
    const wEl = document.getElementById('wcTrimWindow'); if (wEl) wEl.textContent = trimIn.toFixed(1) + 's – ' + trimOut.toFixed(1) + 's';
    const cEl = document.getElementById('wcChapterCount'); if (cEl) cEl.textContent = String(waveCutChapters.length);

    const audioEl = document.getElementById('wcAudioElement');
    if (audioEl && !audioEl.src) {
      const wavBlob = buildClientWavBlob(env);
      audioEl.src = URL.createObjectURL(wavBlob);
    }

    const chBody = document.getElementById('wcChapterTableBody');
    if (chBody) {
      chBody.innerHTML = waveCutChapters.map(function(ch) {
        return '<tr>' +
          '<td style="font-family:monospace;">' + ch.timeSec.toFixed(1) + 's</td>' +
          '<td><strong>' + ch.title + '</strong></td>' +
          '<td><span class="badge-pill" style="background:#064E3B;color:#A7F3D0;">' + ch.state + '</span></td>' +
          '<td><button type="button" class="btn btn-ghost" style="padding:0.15rem 0.45rem;font-size:0.72rem;" onclick="window.WAI.seekWaveCut(' + ch.timeSec + ')">Seek</button></td>' +
        '</tr>';
      }).join('');
    }
  }

  function waveCutStripSilence() {
    const env = getWaveCutEnvelope();
    const threshSlider = Number((document.getElementById('wcThresholdRange') && document.getElementById('wcThresholdRange').value) || 5);
    const stripped = env.filter(v => v > (threshSlider / 100));
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl && stripped.length) {
      inputEl.value = stripped.map(v => v.toFixed(2)).join(', ');
      const audioEl = document.getElementById('wcAudioElement');
      if (audioEl) audioEl.src = URL.createObjectURL(buildClientWavBlob(stripped));
      updateWaveCutDsp();
      setStatus('Stripped dead-air silence segments (' + (env.length - stripped.length) + 's removed).');
    }
  }

  function waveCutNormalize() {
    const env = getWaveCutEnvelope();
    const maxVal = Math.max.apply(null, env.concat([0.1]));
    const norm = env.map(v => Math.min(0.98, Number((v / maxVal * 0.92).toFixed(2))));
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) {
      inputEl.value = norm.join(', ');
      updateWaveCutDsp();
      setStatus('Normalized peak audio envelope to -0.7 dBFS.');
    }
  }

  function addWaveCutChapter() {
    const titleEl = document.getElementById('wcNewChapterTitle');
    const title = (titleEl && titleEl.value || '').trim();
    if (!title) return;
    const audioEl = document.getElementById('wcAudioElement');
    const t = audioEl ? Number(audioEl.currentTime || 0) : 2.5;
    waveCutChapters.push({ id: 'ch-' + Date.now().toString(36), timeSec: t, title: title, state: 'Keep' });
    if (titleEl) titleEl.value = '';
    updateWaveCutDsp();
    setStatus('Added chapter marker "' + title + '" at ' + t.toFixed(1) + 's');
  }

  function seekWaveCut(sec) {
    const audioEl = document.getElementById('wcAudioElement');
    if (audioEl) {
      audioEl.currentTime = Number(sec) || 0;
      setStatus('Seeked playhead to ' + Number(sec).toFixed(1) + 's');
    }
  }

  function toggleAudioPlayback() {
    const audioEl = document.getElementById('wcAudioElement');
    if (!audioEl) return;
    if (audioEl.paused) {
      audioEl.play().catch(function() {});
      setStatus('Playing synthesized 16-bit PCM WAV track...');
    } else {
      audioEl.pause();
      setStatus('Paused audio playback.');
    }
  }

  function stopAudioPlayback() {
    const audioEl = document.getElementById('wcAudioElement');
    if (!audioEl) return;
    audioEl.pause();
    audioEl.currentTime = 0;
    setStatus('Stopped playback and reset playhead to 00:00.0.');
  }

  function setPlaybackSpeed(rate) {
    const audioEl = document.getElementById('wcAudioElement');
    if (audioEl) audioEl.playbackRate = Number(rate) || 1.0;
    setStatus('Set playback speed to ' + rate + 'x');
  }

  // ============================================================================
  // 4. GROWTHPULSE INTERACTIVE SAAS ANALYTICS & COHORT ENGINE
  // ============================================================================
  function recalcGrowthPulse() {
    const chartBox = document.getElementById('gpMrrChartContainer');
    if (!chartBox) return;
    const startMrr = Number((document.getElementById('gpStartMrr') && document.getElementById('gpStartMrr').value) || 48000);
    const newMrr = Number((document.getElementById('gpNewMrr') && document.getElementById('gpNewMrr').value) || 6500);
    const expPct = Number((document.getElementById('gpExpPct') && document.getElementById('gpExpPct').value) || 3.8);
    const churnPct = Number((document.getElementById('gpChurnPct') && document.getElementById('gpChurnPct').value) || 1.9);
    const months = Number((document.getElementById('gpHorizon') && document.getElementById('gpHorizon').value) || 12);
    const seg = (document.getElementById('gpSegmentFilter') && document.getElementById('gpSegmentFilter').value) || 'all';
    const mult = seg === 'enterprise' ? 1.35 : (seg === 'selfserve' ? 0.75 : 1.0);

    let curr = Math.round(startMrr * mult);
    const rows = [];
    for (let m = 1; m <= months; m++) {
      const added = Math.round(newMrr * mult);
      const exp = Math.round(curr * (expPct / 100));
      const churn = Math.round(curr * (churnPct / 100));
      const end = curr + added + exp - churn;
      const retPct = Math.round(((curr + exp - churn) / Math.max(1, curr)) * 1000) / 10;
      rows.push({ month: 'M' + m, start: curr, added, exp, churn, end, retPct });
      curr = end;
    }

    const endingArr = curr * 12;
    const nrr = Math.round((1 + ((expPct - churnPct) / 100) * 12) * 1000) / 10;
    const arrEl = document.getElementById('gpArrVal'); if (arrEl) arrEl.textContent = '$' + endingArr.toLocaleString('en-US');
    const nrrEl = document.getElementById('gpNrrVal'); if (nrrEl) nrrEl.textContent = nrr.toFixed(1) + '%';

    const maxEnd = Math.max.apply(null, rows.map(r => r.end).concat([1000]));
    const barW = Math.floor(640 / rows.length);
    let barsSvg = '';
    rows.forEach(function(r, idx) {
      const h = Math.max(12, Math.round((r.end / maxEnd) * 120));
      const x = 35 + idx * barW;
      const y = 140 - h;
      barsSvg += '<g><rect x="' + x + '" y="' + y + '" width="' + Math.max(14, barW - 10) + '" height="' + h + '" rx="4" fill="#0284C7"/>' +
        '<text x="' + (x + 6) + '" y="156" fill="#94A3B8" font-size="10" font-family="monospace">' + r.month + '</text></g>';
    });
    chartBox.innerHTML = '<svg viewBox="0 0 720 168" style="width:100%;height:165px;" role="img" aria-label="MRR Trajectory Bar Chart">' + barsSvg + '</svg>';

    const tbody = document.getElementById('gpCohortTableBody');
    if (tbody) {
      tbody.innerHTML = rows.map(function(r) {
        return '<tr>' +
          '<td style="font-family:monospace;font-weight:700;">' + r.month + '</td>' +
          '<td style="font-family:monospace;">$' + r.start.toLocaleString('en-US') + '</td>' +
          '<td style="font-family:monospace;color:#38BDF8;">+$' + r.added.toLocaleString('en-US') + '</td>' +
          '<td style="font-family:monospace;color:#10B981;">+$' + r.exp.toLocaleString('en-US') + '</td>' +
          '<td style="font-family:monospace;color:#F87171;">-$' + r.churn.toLocaleString('en-US') + '</td>' +
          '<td style="font-family:monospace;font-weight:700;">$' + r.end.toLocaleString('en-US') + '</td>' +
          '<td><span class="badge-pill" style="background:#064E3B;color:#A7F3D0;">' + r.retPct + '%</span></td>' +
        '</tr>';
      }).join('');
    }

    const fBox = document.getElementById('gpFunnelVisual');
    if (fBox) {
      const stages = [
        { label: '1. Unique Site Visitors', count: Math.round(24000 * mult), pct: 100 },
        { label: '2. Workspace Signups', count: Math.round(3120 * mult), pct: 13.0 },
        { label: '3. Activated Project (D7)', count: Math.round(1840 * mult), pct: 59.0 },
        { label: '4. Paid Pro Conversion', count: Math.round(410 * mult), pct: 22.3 }
      ];
      fBox.innerHTML = stages.map(function(s) {
        return '<div style="background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.55rem;">' +
          '<div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.25rem;">' +
            '<strong>' + s.label + '</strong><span style="font-family:monospace;color:#38BDF8;">' + s.count.toLocaleString('en-US') + ' (' + s.pct + '%)</span>' +
          '</div>' +
          '<div style="background:#1E293B;height:7px;border-radius:999px;"><div style="width:' + Math.min(100, s.pct) + '%;height:100%;background:#38BDF8;border-radius:999px;"></div></div>' +
        '</div>';
      }).join('');
    }

    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) {
      inputEl.value = 'startingMrr=' + startMrr + '\nnewMrrPerMonth=' + newMrr + '\nexpansionRatePct=' + expPct + '\nlogoChurnPct=' + churnPct + '\nmonths=' + months;
    }
  }

  // ============================================================================
  // 5. APISYNC INTERACTIVE OPENAPI CONTRACT DIFF & ASSERTION RUNNER
  // ============================================================================
  function renderApiSyncView() {
    const tbody = document.getElementById('asDiffTableBody');
    if (!tbody) return;
    const sevFilter = (document.getElementById('asSeverityFilter') && document.getElementById('asSeverityFilter').value) || 'all';
    const diffs = [
      { method: 'POST', path: '/v1/orders', field: 'param.tenantId', v1: 'optional (string)', v2: 'required (integer)', breaking: true },
      { method: 'DELETE', path: '/v1/orders/{id}', field: 'response.200', v1: '200 OK (OrderDeleted)', v2: 'Removed endpoint', breaking: true },
      { method: 'GET', path: '/v1/orders/{id}', field: 'response.200.traceId', v1: 'not present', v2: 'optional (string)', breaking: false }
    ];
    const filtered = diffs.filter(d => sevFilter === 'all' || (sevFilter === 'breaking' ? d.breaking : !d.breaking));

    const epList = document.getElementById('asEndpointList');
    if (epList) {
      epList.innerHTML = diffs.map(function(d) {
        const color = d.breaking ? '#EF4444' : '#10B981';
        return '<li style="background:#090E1A;border:1px solid #1E293B;border-left:3px solid ' + color + ';border-radius:6px;padding:0.45rem 0.6rem;font-size:0.79rem;">' +
          '<strong style="font-family:monospace;color:#38BDF8;">' + d.method + '</strong> <code>' + d.path + '</code>' +
          '<div style="font-size:0.71rem;color:#94A3B8;">Field: ' + d.field + '</div>' +
        '</li>';
      }).join('');
    }

    tbody.innerHTML = filtered.map(function(d) {
      const badge = d.breaking
        ? '<span class="badge-pill" style="background:#7F1D1D;color:#FECACA;">BREAKING</span>'
        : '<span class="badge-pill" style="background:#064E3B;color:#A7F3D0;">NON-BREAKING</span>';
      return '<tr>' +
        '<td style="font-family:monospace;"><strong>' + d.method + '</strong> ' + d.path + '</td>' +
        '<td style="font-family:monospace;">' + d.field + '</td>' +
        '<td style="font-family:monospace;color:#94A3B8;">' + d.v1 + '</td>' +
        '<td style="font-family:monospace;color:#F8FAFC;">' + d.v2 + '</td>' +
        '<td>' + badge + '</td>' +
      '</tr>';
    }).join('');
  }

  function runApiContractAssertions() {
    const raw = (document.getElementById('asTestPayload') && document.getElementById('asTestPayload').value) || '{}';
    const box = document.getElementById('asAssertionList');
    if (!box) return;
    let parsed = null;
    try { parsed = JSON.parse(raw); } catch (e) {
      box.innerHTML = '<div style="color:#EF4444;">JSON Syntax Error: ' + e.message + '</div>';
      return;
    }
    const checks = [
      { name: 'Valid JSON request body', pass: Boolean(parsed && typeof parsed === 'object') },
      { name: 'v2 Required integer tenantId present', pass: typeof parsed.tenantId === 'number' && Number.isInteger(parsed.tenantId) },
      { name: 'Line items array non-empty', pass: Array.isArray(parsed.items) && parsed.items.length > 0 }
    ];
    const passCount = checks.filter(c => c.pass).length;
    const stEl = document.getElementById('asTestStatus');
    if (stEl) stEl.textContent = (passCount === checks.length ? 'PASS (' : 'FAIL (') + passCount + '/' + checks.length + ')';
    box.innerHTML = checks.map(function(c) {
      return '<div style="background:#090E1A;border:1px solid ' + (c.pass ? '#059669' : '#DC2626') + ';border-radius:6px;padding:0.4rem 0.6rem;">' +
        '<strong style="color:' + (c.pass ? '#10B981' : '#F87171') + ';">' + (c.pass ? 'PASS' : 'FAIL') + ':</strong> ' + c.name +
      '</div>';
    }).join('');
    setStatus('Executed OpenAPI contract assertions (' + passCount + '/' + checks.length + ' passed).');
  }

  // ============================================================================
  // 6. OMNIDESK INTERACTIVE SUPPORT QUEUE, SLA TRIAGE & KB ENGINE
  // ============================================================================
  function renderOmniDeskView() {
    const listEl = document.getElementById('odTicketList');
    if (!listEl) return;
    const stF = (document.getElementById('odStatusFilter') && document.getElementById('odStatusFilter').value) || 'all';
    const tierF = (document.getElementById('odTierFilter') && document.getElementById('odTierFilter').value) || 'all';

    const breachedCount = omniTickets.filter(t => t.ageMinutes > t.slaMinutes && t.status !== 'resolved').length;
    const resCount = omniTickets.filter(t => t.status === 'resolved').length;
    const totEl = document.getElementById('odTotalTickets'); if (totEl) totEl.textContent = String(omniTickets.length);
    const brEl = document.getElementById('odBreachedCount'); if (brEl) brEl.textContent = String(breachedCount);
    const rsEl = document.getElementById('odResolvedCount'); if (rsEl) rsEl.textContent = String(resCount);

    const visible = omniTickets.filter(function(t) {
      if (stF !== 'all' && t.status !== stF) return false;
      if (tierF !== 'all' && t.tier !== tierF) return false;
      return true;
    });

    listEl.innerHTML = visible.map(function(t) {
      const breached = t.ageMinutes > t.slaMinutes && t.status !== 'resolved';
      const active = t.id === activeTicketId;
      return '<li style="background:' + (active ? '#1E293B' : '#090E1A') + ';border:1px solid ' + (breached ? '#DC2626' : '#334155') + ';border-radius:8px;padding:0.55rem;cursor:pointer;" onclick="window.WAI.omniDeskSelectTicket(\'' + t.id + '\')">' +
        '<div style="display:flex;justify-content:space-between;font-size:0.75rem;font-family:monospace;">' +
          '<strong>' + t.id + ' • ' + t.priority + '</strong>' +
          '<span style="color:' + (breached ? '#FCA5A5' : '#A7F3D0') + ';">' + (breached ? 'SLA BREACHED' : t.status.toUpperCase()) + '</span>' +
        '</div>' +
        '<div style="font-weight:600;font-size:0.83rem;margin:0.2rem 0;">' + t.subject + '</div>' +
        '<div style="font-size:0.72rem;color:#94A3B8;">' + t.customer + ' (' + t.tier + ')</div>' +
      '</li>';
    }).join('');

    const activeTicket = omniTickets.find(t => t.id === activeTicketId) || omniTickets[0];
    if (activeTicket) {
      const hdr = document.getElementById('odTicketHeader');
      if (hdr) {
        hdr.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;">' +
          '<h2 style="margin:0;font-size:1.05rem;">' + activeTicket.id + ': ' + activeTicket.subject + '</h2>' +
          '<span class="badge-pill" style="background:#1E293B;color:#38BDF8;">Status: ' + activeTicket.status.toUpperCase() + '</span>' +
        '</div>' +
        '<div style="font-size:0.78rem;color:#94A3B8;margin-top:0.25rem;">Customer: ' + activeTicket.customer + ' • Tier: ' + activeTicket.tier.toUpperCase() + ' • Age: ' + activeTicket.ageMinutes + 'm / SLA: ' + activeTicket.slaMinutes + 'm</div>';
      }
      const msgBox = document.getElementById('odThreadMessages');
      if (msgBox) {
        msgBox.innerHTML = activeTicket.messages.map(function(m) {
          const isInternal = m.type === 'internal';
          return '<div style="background:' + (isInternal ? '#1E1B4B' : '#0F172A') + ';border:1px solid #334155;border-radius:8px;padding:0.55rem;">' +
            '<div style="font-size:0.72rem;color:#38BDF8;font-weight:700;margin-bottom:0.2rem;">' + m.author + (isInternal ? ' [INTERNAL NOTE]' : '') + '</div>' +
            '<div style="font-size:0.82rem;">' + m.text + '</div>' +
          '</div>';
        }).join('');
      }
    }

    const kbBox = document.getElementById('odKbCards');
    if (kbBox && !kbBox.innerHTML) {
      const kbs = [
        { code: 'KB-101', title: 'SAML Clock-Skew Tolerance (+/- 180s)', snippet: 'Applied 180-second clock-skew tolerance on Edge SAML verifier per KB-101.' },
        { code: 'KB-204', title: 'Webhook Exponential Backoff Schedule', snippet: 'Configured 5-attempt exponential retry schedule (2s, 8s, 32s, 128s, 512s) per KB-204.' }
      ];
      kbBox.innerHTML = kbs.map(function(k) {
        return '<div style="background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.55rem;font-size:0.79rem;">' +
          '<div style="font-weight:700;color:#38BDF8;">' + k.code + ': ' + k.title + '</div>' +
          '<button type="button" class="btn btn-ghost" style="margin-top:0.35rem;padding:0.18rem 0.5rem;font-size:0.72rem;" onclick="window.WAI.omniDeskCiteKb(\'' + k.snippet + '\')">Cite in Reply</button>' +
        '</div>';
      }).join('');
    }
  }

  function omniDeskSelectTicket(id) {
    activeTicketId = id;
    renderOmniDeskView();
  }

  function omniDeskSetStatus(nextStatus) {
    const t = omniTickets.find(x => x.id === activeTicketId);
    if (!t) return;
    t.status = nextStatus;
    renderOmniDeskView();
    setStatus('Updated ticket ' + t.id + ' status to ' + nextStatus.toUpperCase());
  }

  function omniDeskSendReply(ev) {
    if (ev) ev.preventDefault();
    const box = document.getElementById('odReplyBox');
    const rType = document.getElementById('odReplyType').value;
    const text = (box && box.value || '').trim();
    if (!text) return false;
    const t = omniTickets.find(x => x.id === activeTicketId);
    if (t) {
      t.messages.push({ author: currentAuth.email || 'agent@worksai.org', type: rType, text: text });
      if (rType === 'public') t.status = 'in_progress';
    }
    if (box) box.value = '';
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl) inputEl.value = JSON.stringify(omniTickets);
    renderOmniDeskView();
    setStatus('Appended ' + rType + ' response to ticket ' + activeTicketId);
    return false;
  }

  function omniDeskInsertDraft() {
    const box = document.getElementById('odReplyBox');
    if (box) {
      box.value = 'We have identified the root cause and applied the verified edge configuration remediation (KB-101). Please confirm if assertions succeed from your tenant.';
    }
  }

  function omniDeskCiteKb(snippet) {
    const box = document.getElementById('odReplyBox');
    if (box) box.value = (box.value ? box.value + ' ' : '') + snippet;
  }

  function omniDeskCreateTicket(ev) {
    if (ev) ev.preventDefault();
    const subj = (document.getElementById('odNewSubject').value || '').trim();
    const tier = document.getElementById('odNewTier').value;
    const sla = Number(document.getElementById('odNewSla').value || 45);
    if (!subj) return false;
    const newId = 'TKT-' + Math.floor(910 + Math.random() * 89);
    omniTickets.unshift({
      id: newId,
      subject: subj,
      customer: 'new-tenant.example',
      tier: tier,
      status: 'open',
      priority: tier === 'enterprise' ? 'P1' : 'P2',
      ageMinutes: 1,
      slaMinutes: sla,
      messages: [{ author: 'customer@new-tenant.example', type: 'customer', text: subj }]
    });
    activeTicketId = newId;
    document.getElementById('odNewSubject').value = '';
    renderOmniDeskView();
    setStatus('Created ticket ' + newId + ' (' + subj + ')');
    return false;
  }

  // ============================================================================
  // 7. COMPANION WORKBENCH RENDERER FOR CATEGORY C & D INSTALLABLE PRODUCTS
  // ============================================================================
  async function renderCompanionView() {
    const tbody = document.getElementById('companionTableBody');
    if (!tbody) return;
    const inputEl = document.getElementById('workspaceInput');
    const raw = (inputEl && inputEl.value) || META.defaultInput || '';
    const res = await fetch('/api/execute', {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ input: raw, enableAi: false })
    });
    const data = await res.json();
    const r = data.result || {};
    const artBox = document.getElementById('companionArtifactBox');
    if (artBox) artBox.textContent = JSON.stringify(r, null, 2);

    if (META.slug === 'graphmind') {
      const notes = r.nodes || [{ id: 'System Architecture', outCount: 3, inCount: 1, orphan: false }, { id: 'Orphan Note', outCount: 0, inCount: 0, orphan: true }];
      tbody.innerHTML = notes.map(n => '<tr><td><strong>' + (n.id || n.title || 'Note') + '</strong></td><td>' + (n.outCount ?? 2) + ' links</td><td>' + (n.inCount ?? 1) + ' backlinks</td><td><span class="badge-pill" style="background:' + (n.orphan ? '#7F1D1D' : '#064E3B') + ';color:#FFF;">' + (n.orphan ? 'ORPHAN' : 'CONNECTED') + '</span></td></tr>').join('');
    } else if (META.slug === 'clipguard') {
      const rules = [
        { name: 'AWS Access Key ID', cls: 'AKIA[0-9A-Z]{16}', status: 'Active', tok: '[REDACTED_AWS_KEY]' },
        { name: 'GitHub PAT Token', cls: 'ghp_[A-Za-z0-9]{36}', status: 'Active', tok: '[REDACTED_GITHUB_TOKEN]' },
        { name: 'Email Address PII', cls: 'RFC 5322 Email', status: 'Active', tok: '[REDACTED_EMAIL]' }
      ];
      tbody.innerHTML = rules.map(x => '<tr><td><strong>' + x.name + '</strong></td><td style="font-family:monospace;">' + x.cls + '</td><td><span class="badge-pill badge-prod">' + x.status + '</span></td><td style="font-family:monospace;">' + x.tok + '</td></tr>').join('');
    } else if (META.slug === 'commandbar') {
      tbody.innerHTML = '<tr><td style="font-family:monospace;">' + raw.slice(0, 56) + '</td><td>Shell AST / Launcher</td><td><span class="badge-pill badge-demo">AUDITED</span></td><td style="font-family:monospace;">Create backup ref before destructive flags</td></tr>';
    } else if (META.slug === 'linkengine') {
      tbody.innerHTML = '<tr><td style="font-family:monospace;">/cloudflare-workers-r2-crud</td><td>/edge-ai-inference-guide</td><td><span class="badge-pill badge-prod">TF-IDF MATCH 0.89</span></td><td><code>utm_source=wp_internal</code></td></tr>';
    } else if (META.slug === 'commercecatalog') {
      tbody.innerHTML = '<tr><td style="font-family:monospace;">WAI-EDGE-001</td><td>WorksAI Enterprise Edge Gateway</td><td><span class="badge-pill badge-prod">GTIN-13 VALID</span></td><td style="font-family:monospace;">$499.00 (Margin 57.9%)</td></tr>';
    } else {
      tbody.innerHTML = '<tr><td style="font-family:monospace;">POST-401</td><td>Solved: Worker Custom Domain TLS handshake</td><td><span class="badge-pill badge-prod">0.02 SAFE</span></td><td>Extract to FAQPage JSON-LD</td></tr>' +
        '<tr><td style="font-family:monospace;">POST-402</td><td>Promo bot crypto spam link velocity</td><td><span class="badge-pill" style="background:#7F1D1D;color:#FECACA;">0.94 QUARANTINE</span></td><td>Hold in Moderation Queue</td></tr>';
    }
  }

  function hydrateDomainStateFromInput(text) {
    if (META.slug === 'canvasarch') {
      parseCanvasSpecToGraph(text);
      renderCanvasArchDom();
    } else if (META.slug === 'ledgerflow') {
      parseLedgerCsvToRows(text);
      renderLedgerView();
    } else if (META.slug === 'wavecut') {
      updateWaveCutDsp();
    } else if (META.slug === 'growthpulse') {
      recalcGrowthPulse();
    } else if (META.slug === 'apisync') {
      renderApiSyncView();
      runApiContractAssertions();
    } else if (META.slug === 'omnidesk') {
      renderOmniDeskView();
    } else {
      renderCompanionView();
    }
  }

  // Expose public controller methods on window.WAI
  window.WAI = {
    openAuthModal,
    closeAuthModal,
    submitSignIn,
    startDemoSession,
    newProject,
    openProject,
    saveCurrentProject,
    renameProject,
    deleteProject,
    exportActiveProject,
    loadPreset,
    importFile,
    runWithAiCopilot,
    // CanvasArch
    canvasAddNode,
    selectCanvasNode,
    deleteCanvasNode,
    setCanvasLayout,
    toggleSpofOverlay,
    canvasUndo,
    syncCanvasFromText,
    // LedgerFlow
    ledgerAddTransaction,
    ledgerClearAnomaly,
    ledgerDeleteTx,
    renderLedgerView,
    // WaveCut
    updateWaveCutDsp,
    waveCutStripSilence,
    waveCutNormalize,
    addWaveCutChapter,
    seekWaveCut,
    toggleAudioPlayback,
    stopAudioPlayback,
    setPlaybackSpeed,
    // GrowthPulse
    recalcGrowthPulse,
    // ApiSync
    renderApiSyncView,
    runApiContractAssertions,
    // OmniDesk
    renderOmniDeskView,
    omniDeskSelectTicket,
    omniDeskSetStatus,
    omniDeskSendReply,
    omniDeskInsertDraft,
    omniDeskCiteKb,
    omniDeskCreateTicket,
    // Companion C/D
    renderCompanionView
  };

  window.addEventListener('DOMContentLoaded', async function() {
    const presetSel = document.getElementById('presetSelect');
    if (presetSel && Array.isArray(META.samplePresets)) {
      presetSel.innerHTML = META.samplePresets.map((p, i) => '<option value="' + i + '">' + p.title + '</option>').join('');
    }
    const inputEl = document.getElementById('workspaceInput');
    if (inputEl && !inputEl.value) {
      inputEl.value = (INITIAL_STATE.initialItem && INITIAL_STATE.initialItem.input) || META.defaultInput || '';
    }
    hydrateDomainStateFromInput(inputEl ? inputEl.value : META.defaultInput);
    await ensureDemoOrAuthSession();
    await refreshProjectList();
  });
})();
