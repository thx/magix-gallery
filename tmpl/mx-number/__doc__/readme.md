## number组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-number/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-number/index" target="_blank">新窗口查看示例</a>


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 当前值 | number | 0 |
| min     | 最小值 | number | 0 |
| max     | 最大值 | number | 100 |
| step     | 步长 | number | 1 |
| ratio     | 放大比率，按shift键时按ratio倍操作step | number | 10 |
| disabled     | 是否禁用 | boolean | false |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取值 | number | number | &nbsp; |

> method调用方法： $('#id').invokeView('val',[20]);

#### event
#### change 数字变化且焦点离开时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | number | value |


#### input 数字实时变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | number | value |