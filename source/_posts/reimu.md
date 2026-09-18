---
title: Reimu
date: 2026-09-18 00:00:00
updated: 2026-09-18 00:00:00
tags:
  - 东方Project
  - SVG
  - 对比
categories:
  - illustration
cover: false
---

<div class="reimu-page">
  <div class="reimu-hero">
    <p class="reimu-kicker">幻想乡 · 灵梦的观测记录</p>
    <h1>博丽灵梦：原作气质 vs. SVG 工程事故</h1>
    <p class="reimu-lead">同一个角色，两种完全不同的美术预算。</p>
  </div>

  <div class="reimu-comparison">
    <section class="reimu-panel reimu-real">
      <div class="reimu-panel-tag">REFERENCE / 真实照片</div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Touhou_Project_-_Hakurei_Reimu_Cosplay.jpg" alt="博丽灵梦 Cosplay 照片" loading="lazy">
      <h2>这才像是有认真准备过的灵梦</h2>
      <p>来自 Wikimedia Commons 的博丽灵梦 Cosplay 照片。人物、服装和动作至少都在同一个次元里。</p>
      <small>Photo by Kyon via Wikimedia Commons · <a href="https://commons.wikimedia.org/wiki/File:Touhou_Project_-_Hakurei_Reimu_Cosplay.jpg" target="_blank" rel="noopener">CC BY-SA 3.0 / 来源</a></small>
    </section>

    <section class="reimu-panel reimu-svg">
      <div class="reimu-panel-tag">LEGACY / 原 SVG</div>
      <img src="/img/reimu.svg" alt="原始的 Reimu SVG" loading="lazy">
      <h2>它努力了，但努力得像一份作业</h2>
      <p>请不要删除它——这是本页面的历史遗迹。它用最朴素的几何图形告诉我们：会写 SVG，不代表会画灵梦。</p>
      <a class="reimu-link" href="/img/reimu.svg" target="_blank" rel="noopener">查看原始 SVG →</a>
    </section>
  </div>

  <div class="reimu-verdict">
    <strong>最终判决：</strong>左边负责拯救审美，右边负责提醒我们要尊重美术设计师。两者都保留，因为黑历史也是版本控制的一部分。
  </div>
</div>

<style>
.reimu-page { max-width: 1040px; margin: 0 auto; padding: 2rem 1rem 4rem; color: #351d27; }
.reimu-hero { padding: 2.5rem 0 2rem; text-align: center; }
.reimu-kicker { margin: 0 0 .8rem; color: #c1273f; letter-spacing: .16em; font-size: .8rem; }
.reimu-hero h1 { margin: 0; color: #a91632; font-size: clamp(2rem, 6vw, 4rem); letter-spacing: .04em; line-height: 1.2; }
.reimu-lead { margin: 1rem 0 0; color: #7b5962; font-size: 1.05rem; }
.reimu-comparison { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.reimu-panel { overflow: hidden; border-radius: 24px; background: #fff; box-shadow: 0 18px 50px rgba(80, 22, 32, .13); }
.reimu-panel-tag { padding: 1rem 1.25rem; color: #fff; background: #9f2039; font: 700 .72rem/1 monospace; letter-spacing: .14em; }
.reimu-panel img { display: block; width: 100%; height: 420px; object-fit: contain; background: #fbe1e4; }
.reimu-real img { object-fit: cover; }
.reimu-panel h2, .reimu-panel p, .reimu-panel small, .reimu-panel .reimu-link { margin-left: 1.5rem; margin-right: 1.5rem; }
.reimu-panel h2 { margin-top: 1.4rem; color: #4b202a; font-size: 1.35rem; }
.reimu-panel p { color: #765963; line-height: 1.8; }
.reimu-panel small { display: block; padding-bottom: 1.5rem; color: #8b7077; line-height: 1.6; }
.reimu-panel a { color: #b51f3a; }
.reimu-link { display: inline-block; margin-top: .5rem; margin-bottom: 1.5rem; font-weight: 700; text-decoration: none; }
.reimu-link:hover { text-decoration: underline; }
.reimu-svg { background: linear-gradient(135deg, #fff9f7, #fff0f2); border: 1px dashed #e3a9b2; transform: rotate(1deg); }
.reimu-svg img { padding: 2rem; box-sizing: border-box; }
.reimu-verdict { margin: 2rem auto 0; max-width: 760px; padding: 1.25rem 1.5rem; border-left: 4px solid #c1273f; background: #fff5f5; color: #765963; line-height: 1.8; }
@media (max-width: 680px) { .reimu-comparison { grid-template-columns: 1fr; } .reimu-panel img { height: 340px; } }
</style>
