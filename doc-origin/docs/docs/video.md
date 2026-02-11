# 视频生成

在 Ract 中可以通过发送消息的方式，调用 `视频生成模型` 来生成视频，视频会在生成完成后自动保存到 `当前会话目录`，也可以在会话消息列表中直接进行播放。

![](/doc-static/usage/video.png)

## 添加视频生成模型

在 Ract 中可以通过`设置` - `模型管理` - `添加自定义模型` 来配置和管理 AI 视频生成模型。

由于视频生成分为两个步骤：第一个是输入消息触发视频生成，视频生成模型会返回一个 `id`，然后需要通过这个 `id` 去获取生成的视频的资源地址，因此需要填写两个 API：

![](/doc-static/usage/video-model.png)

在任务状态查询地址中，支持 `${a.b.c}` 这种格式的 json 取值方法，例如字节跳动的 seedance 视频生成模型返回的数据中包含 id 字段：

```bash
# API 地址
https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks

# 任务状态查询地址
https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks/${id}
```

## 视频文件

在会话目录中可以查看生成的视频文件：

![](/doc-static/usage/video-dir.png)