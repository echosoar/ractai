# MCP

## 介绍

Ract 支持通过 MCP（Model Context Protocol）协议来扩展应用的工具能力，例如可以通过麦当劳 MCP 来实现自动领取优惠券、通过 Figma MCP 来获取设计稿内容、通过高德地图 MCP 来获取位置信息等。

## 添加 MCP

在 Ract 的 `设置` - `MCP 服务` 中，点击 `添加 MCP 服务` 按钮，也可以通过 `JSON 模式` 来批量编辑 MCP 服务。

![](/doc-static/usage/mcp.png)

## 开启 MCP 服务

在 MCP 服务列表中，点击 `连接` 按钮来启用 MCP 服务，启用后就可以在会话中选择使用了。

![](/doc-static/usage/mcp-connected.png)

## 会话中选择使用

在聊天窗口下单的 `工具` 选择中，可以选择已经链接的 MCP 服务来使用，也可以点击分组进行全选。

![](/doc-static/usage/mcp-select.png)