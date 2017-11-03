## 分页组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-pagination/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-pagination/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| total    | 总数 | number |  |
| page     | 当前第几页 | number | 1 |
| size     | 每页多少条 | number | 20 |
| step | 页码过多时，中间显示多少条页码 | number | 7 |



#### event
#### change 页码或每页多少条改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| page | number | 当前第几页 |
| size | number | 每页多少条 |

