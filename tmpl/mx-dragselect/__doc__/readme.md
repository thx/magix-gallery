## 拖动选取组件

<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-dragselect/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-dragselect/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| selector | 参于选取的子节点选择器，默认全部子节点 | string |

#### event
#### dragbegin 开始拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |

#### change 鼠标进入某个拖或放区域时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| action | string | add或remove，指示节点被添加到或移除选区 |
| node | HTMLElement | 当前被添加或移除的节点 |


#### dragfinish 结束拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |



