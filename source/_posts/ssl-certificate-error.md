---
title: 一个 SSL 报错
date: 2026-11-27 11:10:00
tags:
  - python
  - macOS
  - Claude Code
categories:
  - 技术
---

给大会员每天自动领经验写了个脚本，第一次跑就报：

```
[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate
```

我还以为 cookie 填错了，重跑一遍还是这句。就把终端输出整个丢给 Claude Code。

它没急着让我改代码，先问清楚我用的是哪个 python。python.org 装的 3.14，在 macOS 上默认找不到根证书，`ssl.get_default_verify_paths()` 里 cafile 是空的；系统里其实有 `/etc/ssl/cert.pem`，只是 Python 没去用。

于是让脚本自己去找证书包，改几行就通了，再跑返回 200。

这种环境问题，不熟的话自己查能查一下午。它帮我从「是不是代码错了」直接跳到「是环境少了根证书」，省的是定位的时间——改代码反而是最快的一步。
