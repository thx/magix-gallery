## 拖动排序组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-dragsort/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-dragsort/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| selector | 用于拖动的元素选择器，默认子节点 | string |
| drops    | 放置拖动内容的容器id，逗号分割的字符串 | string |  |
| horizonal     | 是否可以水平拖动 | boolean | false  |
| vertical     | 是否可以垂直拖动 | boolean | true |
| sort     | 是否可以拖动排序 | boolean | true |

#### event
#### dragbegin 开始拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| dragNode | HTMLElement | 拖动节点 |
| dragZone | HTMLElement | 拖动节点所在的容器 |

#### enterzone 鼠标进入某个拖或放区域时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| zone | HTMLElement | 拖或放的区域 |
| changePointer | function | 改变鼠标状态的函数 |


#### dragfinish 结束拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| moved | boolean | 是否是移动状态 |
| outZone | boolean | 是否是在拖或放区域的外边 |
| dragNode | HTMLElement | 拖动节点 |
| dragZone | HTMLElement | 拖动节点所在的容器 |
| dropNode | HTMLElement | 放置节点 |
| dropZone | HTMLElement | 放置节点所在的容器 |



