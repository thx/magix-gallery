## 小时选取组件

> 该组件包含“天范围内的小时选取，周范围内的小时选取”两个子组件

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-hour/day?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-hour/day" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| hours    | 24个0或1组成的字符串，1表示选中的小时 | string | &nbsp; |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取选中的小时 | string | string | 24个0或1组成的字符串，1表示选中的小时 |

> method调用方法： $('#id').invokeView('val',['0011']);


#### event
#### change 选择的小时改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| hours | string | 24个0或1组成的字符串，1表示选中的小时 |

-----


<div style="position:relative" id="mx_2">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-hour/week?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-hour/week" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| days    | 7个字符串组成的数组，每个字符串由24个0或1组成 | array | &nbsp; |



#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取选中的小时 | array | array | 7 个 24个0或1组成的字符串，1表示选中的小时 |

> method调用方法： $('#id').invokeView('val');

#### event
#### change 选择的小时改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| days | array | 7个 24个0或1组成的字符串，1表示选中的小时 |