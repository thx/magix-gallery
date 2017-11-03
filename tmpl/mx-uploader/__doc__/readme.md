## 上传组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-uploader/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-uploader/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| name    | 服务器端接收文件时的名称 | string | file |
| action     | 上传地址 | string |  |
| multiple     | 是否允许多文件上传 | boolean | false |
| accept | 选择文件时的类型，参考input[type=file]的accept | string | &nbsp; |



#### event
#### start 开始上传前触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| files | array | 上传的文件 |


#### success 上传成功时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| response | obejct | 成功时服务器端返回的内容 |


#### error 上传失败时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| error | obejct | 错误对象 |

#### progress 上传进度变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| percent | number | 上传进度 0-1 之间的小数 |

