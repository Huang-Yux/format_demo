---
title: format-demo-markdownlint-config
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: 黄宇轩
  link: https://github.com/Huang-Yux/format_demo
---

# format-demo-markdownlint-config

:::tip
文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install format-demo-markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "format-demo-markdownlint-config"
}
```
