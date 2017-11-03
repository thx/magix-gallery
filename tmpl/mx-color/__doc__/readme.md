## 颜色组件

> 该组件包含“颜色组件、颜色选择组件”两个功能。


### 颜色组件

<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-color/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-color/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| color    | #ffffff格式的颜色 | string | #ffffff |


#### event
#### change 颜色选择时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| color | string | hh:mm:ss格式的时间字符串 |

----

### 颜色选择组件

<div style="position:relative" id="mx_2">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-color/picker?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-color/picker" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| color    | #ffffff格式的颜色 | string | #ffffff |
| placement | 弹出框在目标的方位，仅top与bottom | string | bottom |
| align | 弹出框与目标的对齐方式，仅left与right | string | left |


#### event
#### change 选择的日期改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| color | string | 以#开头的16进制的颜色值 |
