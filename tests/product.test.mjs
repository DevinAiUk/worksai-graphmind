import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  PRODUCT_METADATA,
  WorksAiSecurityGuard,
  WorksAiStore,
  parseArchitectureSpec,
  renderArchitectureSvg,
  normalizeAndBudgetTransactions,
  analyzeWaveformAndBuildChapters,
  evaluateFunnelAndAnomalies,
  auditOpenApiDrift,
  triageAndDraftSupportReply,
  analyzeMarkdownGraph,
  scrubClipboardSecrets,
  executeCommandBarQuery,
  resolveSmartShortlink,
  enrichSkuAndBuildProductJsonLd,
  moderateThreadAndBuildFaqJsonLd
} from "../src/index.mjs";

test("Gate 1 — MIT License, Upstream Attribution & Notice Verification", () => {
  assert.equal(PRODUCT_METADATA.id, "worksai-03");
  assert.equal(PRODUCT_METADATA.upstream.license, "MIT");
  const licenseText = fs.readFileSync(path.resolve("LICENSE"), "utf8");
  assert.match(licenseText, /Permission is hereby granted, free of charge/);
  assert.ok(licenseText.includes(PRODUCT_METADATA.upstream.copyright));
  assert.ok(licenseText.includes("WorksAi.org"));
  const noticeText = fs.readFileSync(path.resolve("NOTICE.md"), "utf8");
  assert.ok(noticeText.includes(PRODUCT_METADATA.upstream.repositoryUrl));
  assert.ok(noticeText.includes(PRODUCT_METADATA.upstream.commitSha));
});

test("Gate 2 — Tenant Persistence, Input Sanitization & Rate Limit Guard", () => {
  const store = new WorksAiStore();
  store.put("tenant_alpha", "cfg", { enabled: true });
  assert.deepEqual(store.get("tenant_alpha", "cfg"), { enabled: true });
  assert.equal(store.get("tenant_beta", "cfg"), null);

  const guard = new WorksAiSecurityGuard({ maxRequestsPerWindow: 2, windowMs: 60000 });
  assert.equal(guard.checkRateLimit("user_1", 1000).allowed, true);
  assert.equal(guard.checkRateLimit("user_1", 1001).allowed, true);
  assert.equal(guard.checkRateLimit("user_1", 1002).allowed, false);

  const dirty = '<script>alert(1)</script><a href="javascript:evil()">link</a>';
  const clean = WorksAiSecurityGuard.sanitizeHtml(dirty);
  assert.ok(!clean.includes("<script>"));
  assert.ok(!clean.includes("javascript:"));
  assert.equal(WorksAiSecurityGuard.isSafeExternalUrl("http://169.254.169.254/latest/meta-data"), false);
  assert.equal(WorksAiSecurityGuard.isSafeExternalUrl("https://worksai.org/tools"), true);
});

test("Gate 3 — Core Product Workflow & Acceptance Criteria (AC-01 through AC-04)", () => {
  // 01 CanvasArch
  const graph = parseArchitectureSpec("Cloudflare Gateway -> API Service -> Neon Postgres\nAPI Service -> Redis Queue");
  assert.equal(graph.nodes.length, 4);
  assert.equal(graph.edges.length, 3);
  assert.ok(graph.spofNodes.some((n) => n.label === "API Service"));
  const svg = renderArchitectureSvg(graph, "System Flow");
  assert.ok(svg.startsWith("<svg") && svg.includes("Neon Postgres"));

  // 02 LedgerFlow
  const budget = normalizeAndBudgetTransactions([
    { date: "2026-10-01", payee: "YNAB Subscription", amount: -12.99 },
    { date: "2026-11-01", payee: "YNAB Subscription", amount: -14.99 },
    { date: "2026-11-02", payee: "Publix Groceries", amount: -85.50 }
  ], 400000);
  assert.equal(budget.priceCreepAlerts.length, 1);
  assert.equal(budget.priceCreepAlerts[0].payee, "YNAB Subscription");
  assert.ok(budget.toBeBudgetedCents > 0);

  // 03 WaveCut Studio
  const samples = [0.5, -0.4, 0.3, ...Array(300).fill(0.001), 0.6, -0.5];
  const wave = analyzeWaveformAndBuildChapters(samples, 1000, [{ startSec: 0, title: "Intro" }]);
  assert.ok(wave.wavHeaderHex.startsWith("RIFF") && wave.wavHeaderHex.endsWith("WAVE"));
  assert.ok(wave.silenceIntervals.length >= 1);
  assert.ok(wave.chaptersMarkdown.includes("00:00"));

  // 04 GrowthPulse
  const funnel = evaluateFunnelAndAnomalies([
    { siteId: "site_1", ip: "1.1.1.1", userAgent: "Mozilla", step: "landing" },
    { siteId: "site_1", ip: "1.1.1.2", userAgent: "Mozilla", step: "landing" },
    { siteId: "site_1", ip: "1.1.1.1", userAgent: "Mozilla", step: "pricing" },
    { siteId: "site_1", ip: "1.1.1.1", userAgent: "Mozilla", step: "signup" }
  ]);
  assert.equal(funnel.cookieFreeCompliance, true);
  assert.equal(funnel.counts.landing, 2);

  // 05 APISync Studio
  const drift = auditOpenApiDrift(
    [{ method: "POST", path: "/v1/orders", expectedStatus: 201, requiredFields: ["sku", "qty"] }],
    [{ method: "POST", path: "/v1/orders", bodyFields: ["sku"] }]
  );
  assert.equal(drift.inSync, false);
  assert.equal(drift.breakingChanges[0].missingRequiredField, "qty");

  // 06 OmniDesk
  const triage = triageAndDraftSupportReply(
    { inboxId: "inbox_main", customerName: "Alex", message: "Urgent production outage on checkout!" },
    [{ id: "KB-101", title: "Status & Failover", keywords: ["outage"], answerSummary: "Switch to fallback edge route." }]
  );
  assert.equal(triage.urgency, "critical");
  assert.equal(triage.citedArticleId, "KB-101");
  assert.equal(triage.mitCleanEnterpriseStripped, true);

  // 07 GraphMind
  const gm = analyzeMarkdownGraph([
    { id: "index", path: "docs/index.md", content: "See [[architecture]] and [[missing-doc]]" },
    { id: "architecture", path: "docs/architecture.md", content: "Core spec" },
    { id: "isolated", path: "docs/isolated.md", content: "No links here" }
  ]);
  assert.deepEqual(gm.backlinks.architecture, ["index"]);
  assert.equal(gm.brokenLinks.length, 1);
  assert.deepEqual(gm.orphanNotes, ["isolated"]);

  // 08 ClipGuard
  const clip = scrubClipboardSecrets("Token sk-proj-1234567890abcdefghijkl and devon@example.com");
  assert.ok(clip.scrubbedText.includes("[REDACTED_OPENAI_KEY]"));
  assert.ok(clip.scrubbedText.includes("[REDACTED_EMAIL]"));

  // 09 CommandBar
  const calc = executeCommandBarQuery("200 + 45 * 2");
  assert.equal(calc.mode, "calculator");
  const search = executeCommandBarQuery("canvas", [{ id: "1", title: "Open WorksAi CanvasArch" }]);
  assert.equal(search.results.length, 1);

  // 10 LinkEngine
  const link = resolveSmartShortlink(
    { targetUrl: "https://worksai.org/offer", fallbackUrl: "https://worksai.org/backup", healthy: false, utmSource: "newsletter" },
    { userAgent: "Mozilla/5.0 (Macintosh)" }
  );
  assert.equal(link.usedFallback, true);
  assert.ok(link.resolvedUrl.includes("utm_source=newsletter"));

  // 11 CommerceCatalog
  const sku = enrichSkuAndBuildProductJsonLd({ sku: "WAI-PRO-01", title: "WorksAi Pass", costCents: 4000, priceCents: 6000, discountPct: 50 }, 25);
  assert.equal(sku.marginFloorEnforced, true);
  assert.ok(sku.jsonLdString.includes('"@type":"Product"'));

  // 12 ForumPulse
  const mod = moderateThreadAndBuildFaqJsonLd({
    title: "How do I configure WorksAi LinkEngine?",
    questionBody: "Where do I set the REST webhook key?",
    acceptedAnswer: "Add your API key in Settings -> WorksAi LinkEngine."
  });
  assert.equal(mod.quarantined, false);
  assert.ok(mod.faqJsonLdString.includes('"@type":"FAQPage"'));
});
