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
用现成的脚本第一次试了下结果belike：

```
[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate
```

我还以为 cookie 填错了，重跑一遍还是一模一样。就把终端输出整个丢给 Claude Code（再这样下去，绝对要成废人了，还是要学会自己排查（是吗，不是吧，是吧。。））

python.org 装的 3.14，默认找不到根证书，`ssl.get_default_verify_paths()` 里 cafile 是空的；系统里其实有 `/etc/ssl/cert.pem`，只是 Python 没去用。

于是让脚本自己去找证书包，改几行就通了，再跑返回 200。

这种环境问题，不熟的话自己查能查一下午。但是拿ai跑呢，又是操作黑盒，哎，希望自己少点依赖吧，要成废人了qwq