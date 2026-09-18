---
title: Reimu
 date: 2026-09-18 00:00:00
updated: 2026-09-18 00:00:00
tags:
  - 东方Project
  - SVG
categories:
  - illustration
cover: false
---

<div class="reimu-page">
  <div class="reimu-hero">
    <p class="reimu-kicker">幻想乡 · 灵梦的观测记录</p>
    <h1>博丽灵梦</h1>
    <p class="reimu-lead">一张用 SVG 绘制的灵梦小像。</p>
  </div>

  <div class="reimu-card">
    <div class="reimu-art">
      <img src="/img/reimu.svg" alt="用 SVG 绘制的博丽灵梦" loading="eager">
    </div>
    <div class="reimu-info">
      <span class="reimu-label">SVG / 01</span>
      <h2>红白巫女，今日也在神社待机</h2>
      <p>这是一个简单、轻量的 SVG 角色页面。红色蝴蝶结、御币和阴阳玉都被保留在这幅小小的立绘里。</p>
      <a class="reimu-link" href="/img/reimu.svg" target="_blank" rel="noopener">查看原始 SVG →</a>
    </div>
  </div>
</div>

<style>
.reimu-page { max-width: 920px; margin: 0 auto; padding: 2rem 1rem 4rem; color: #351d27; }
.reimu-hero { padding: 2.5rem 0 2rem; text-align: center; }
.reimu-kicker { margin: 0 0 .8rem; color: #c1273f; letter-spacing: .16em; font-size: .8rem; }
.reimu-hero h1 { margin: 0; color: #a91632; font-size: clamp(2.2rem, 8vw, 4.5rem); letter-spacing: .08em; }
.reimu-lead { margin: 1rem 0 0; color: #7b5962; font-size: 1.05rem; }
.reimu-card { display: grid; grid-template-columns: minmax(220px, 1fr) minmax(260px, 1fr); align-items: center; overflow: hidden; border: 1px solid #f0c7cc; border-radius: 24px; background: linear-gradient(135deg, #fff9f7, #fff0f2); box-shadow: 0 18px 50px rgba(157, 35, 58, .12); }
.reimu-art { min-height: 360px; display: grid; place-items: center; padding: 2.5rem; background: radial-gradient(circle, #fff 0 35%, transparent 36%), #fbe1e4; }
.reimu-art img { width: min(200px, 70%); height: auto; filter: drop-shadow(0 12px 8px rgba(80, 22, 32, .18)); }
.reimu-info { padding: 2.5rem; }
.reimu-label { color: #c1273f; font: 700 .75rem/1 monospace; letter-spacing: .16em; }
.reimu-info h2 { margin: 1rem 0; color: #4b202a; font-size: clamp(1.4rem, 3vw, 2rem); line-height: 1.35; }
.reimu-info p { color: #765963; line-height: 1.9; }
.reimu-link { display: inline-block; margin-top: 1rem; color: #b51f3a; font-weight: 700; text-decoration: none; }
.reimu-link:hover { text-decoration: underline; }
@media (max-width: 680px) { .reimu-card { grid-template-columns: 1fr; } .reimu-art { min-height: 300px; } .reimu-info { padding: 2rem; } }
</style>
