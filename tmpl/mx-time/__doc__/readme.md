## 时间组件

> 该组件包含“时间组件、时间选择组件”两个功能。


### 时间组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-time/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-time/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| time    | hh:mm:ss格式的时间 | string | 当前时间 |
| types     | 可操作的类型 | string | 只能从"all,hour,minute,second"中选择，可多选   |


#### event
#### change 时间变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| time | string | hh:mm:ss格式的时间字符串 |

----

### 时间选择组件

<div style="position:relative" id="mx_2">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-time/picker?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-time/picker" target="_blank">新窗口查看示例</a>


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| time    | hh:mm:ss格式的时间 | string | 当前时间 |
| types     | 可操作的类型 | string | 只能从"all,hour,minute,second"中选择，可多选   |
| placement | 弹出框在目标的方位，仅top与bottom | string | bottom |
| align | 弹出框与目标的对齐方式，仅left与right | string | left |

