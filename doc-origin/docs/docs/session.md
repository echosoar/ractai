# 会话网关

会话网关提供了将 Ract 的能力暴露给其他应用的能力，类似于 OpenClaw，可以在飞书等第三方应用中集成 Ract。

## 飞书集成

1. 进入到飞书开放平台（https://open.feishu.cn/app），创建一个新的应用。
![](/doc-static/session/feishu-app-select.png)

2. 填写一些基本信息
![](/doc-static/session/feishu-app-create.png)

3. 授予权限

![](/doc-static/session/feishu-grunt.png)

4. 发布应用

5. 在飞书开放平台，点击 `基础信息` - `凭证与基础信息`，复制应用的 `App ID` 和 `App Secret`，并在 Ract 的 `设置` - `会话网关` 中进行配置。

![](/doc-static/session/feishu-add.png)