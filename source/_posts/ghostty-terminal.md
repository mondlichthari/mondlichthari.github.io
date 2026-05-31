---
title: Ghostty — 比 Apple Terminal 更好的终端？
date: 2026-05-31 20:00:00
tags:
  - terminal
  - macOS
  - 工具
categories:
  - 技术
---

最近试了一下 [Ghostty](https://ghostty.org)，这个新出的终端模拟器，确实比 macOS 自带的 Terminal.app 好用不少。

## 最直观的提升：渲染

Terminal.app 是 CPU 渲染的，滚大段日志会卡。Ghostty 走 GPU，滚 `dmesg` 或者 `git log` 很丝滑。尤其是用 Claude Code 的时候，长对话输出量大，差别很明显。

## 自动字体检测

装好之后自动用了 JetBrains Mono Nerd Font，不用手动调。Nerd Font 带了各种图标，CLI 工具（lazygit、starship）的图标都能正常显示，不会有方框。

## 分屏

原生支持水平/垂直分屏，一边跑编译一边看输出很方便。不用装 tmux 了。

## 配置

纯文本配置文件，放在 `~/.config/ghostty/config` 里，可以放 dotfiles 里版本化管理。比 Terminal.app 那个 GUI 偏好面板好用。

## 总结

Ghostty 现在还是个年轻项目，但基础体验已经比 Apple Terminal 高一个档次了。日常用原来的 Terminal.app，跑 Claude Code 的时候用 Ghostty，搭配挺好的。
