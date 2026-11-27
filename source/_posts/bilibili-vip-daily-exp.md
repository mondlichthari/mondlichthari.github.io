---
title: 自动领取 B 站大会员每日 10 经验
date: 2026-11-27 10:40:00
tags:
  - bilibili
  - python
  - 自动化
categories:
  - 技术
---

大会员每天可以点开「会员页」领 10 点经验用来升级，但我老是忘记，干脆写个脚本每天自动领。

## 接口在哪

网上搜一圈，很多教程都指向 `x/vip/privilege/receive`，那个其实是**兑换卡券**的接口，不是每日经验。真正的接口记录在 [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) 的「大会员操作」文档里，原文如下：

> 接口：`POST https://api.bilibili.com/x/vip/experience/add`，鉴权 Cookie（`SESSDATA`）。请求体 `application/x-www-form-urlencoded`，参数 `csrf`（CSRF Token，位于 cookie）。
>
> 返回码：`0` 成功；`-101` 账号未登录；`-111` csrf 校验失败；`69198` 用户经验已经领取；`6034007` 请求频繁，请稍后再试。

> 节选自 [SocialSisterYi/bilibili-API-collect · docs/vip/action](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/vip/action.md)，CC-BY-NC-4.0。

## 一条 curl 搞定

`csrf` 的值就是 cookie 里的 `bili_jct`：

```bash
curl 'https://api.bilibili.com/x/vip/experience/add' \
  -b 'SESSDATA=你的值; bili_jct=你的值' \
  --data-urlencode 'csrf=你的bili_jct'
```

看到 `"code":0` 就是领到了；`"code":69198` 说明今天已经领过，重复跑也不怕。

## 包成 Python 定时跑

cookie 怎么拿：登录后 F12 → Application → Cookies，复制 `SESSDATA` 和 `bili_jct`。

用标准库就能写，不用装 requests：

```python
#!/usr/bin/env python3
import json, urllib.request, urllib.parse

SESSDATA = "你的值"
bili_jct = "你的值"

url = "https://api.bilibili.com/x/vip/experience/add"
data = urllib.parse.urlencode({"csrf": bili_jct}).encode()
req = urllib.request.Request(url, data=data, method="POST", headers={
    "Cookie": f"SESSDATA={SESSDATA}; bili_jct={bili_jct}",
    "User-Agent": "Mozilla/5.0",
    "Referer": "https://account.bilibili.com/big",
})
print(json.loads(urllib.request.urlopen(req).read()))
```

macOS 上塞进 launchd 每天 09:00 跑一次，或者 cron 一行：

```bash
0 9 * * * /usr/bin/python3 ~/bili-vip-claim/bili_vip_claim.py
```

`SESSDATA` 一两个月会过期，脚本提示「未登录」的时候重新拿一次填进去就行。核心就这一个接口，剩下都是套壳。

## 参考

- [SocialSisterYi/bilibili-API-collect · docs/vip/action（大会员操作）](https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/vip/action.md)
- [镜像：sessionhu.github.io/bilibili-API-collect](https://sessionhu.github.io/bilibili-API-collect/)

本文接口信息引用自上述项目，原作者 SocialSisterYi 等，遵循 CC-BY-NC-4.0 协议。
