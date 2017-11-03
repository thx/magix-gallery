## 日期组件

> 该组件包含“日历组件，日期选择，范围选择”三个子组件

### 日历组件

<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-calendar/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-calendar/index" target="_blank">新窗口查看示例</a>


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| selected    | 默认选中的日期，yyyy-MM-dd格式的日期 | string | 今天 |
| weekStart     | 从周几开始，0-6，0表示周日 | number | 0 |
| max     | 最大可选的日期，yyyy-MM-dd格式的日期 | string |  |
| min | 最小可选的日期，yyyy-MM-dd格式的日期 | string | &nbsp;  |
| timeType | 时间类型，设置该值后会自动出现时间选择组件 | string | 只能从"all,hour,minute,second"中选择，可多选  |
| dateType | 日期类型,比如只能选择年，只能选择年月 | string | 只能从"all,year,month,day"中选择 |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| update | 更新日历 | object |  | 入参对象即是前面的options对象 |

> method调用方法： $('#id').invokeView('update',[{max:'2019-01-01'}]);


#### event
#### change 选择的日期改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| date | string | 选中的yyyy-MM-dd格式的日期 |
| time | string | 如果启用时间选择，则是选择的hh:mm:ss格式的时间 |


-----

### 日期选择组件


<div style="position:relative" id="mx_2">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-calendar/datepicker?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-calendar/datepicker" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| selected    | 默认选中的日期，yyyy-MM-dd格式的日期 | string | 今天 |
| weekStart     | 从周几开始，0-6，0表示周日 | number | 0 |
| max     | 最大可选的日期，yyyy-MM-dd格式的日期 | string |  |
| min | 最小可选的日期，yyyy-MM-dd格式的日期 | string | &nbsp;  |
| timeType | 时间类型，设置该值后会自动出现时间选择组件 | string | 只能从"all,hour,minute,second"中选择，可多选  |
| placement | 日历在目标的方位，仅top与bottom | string | bottom |
| align | 日历与目标的对齐方式，仅left与right | string | left |


#### event
#### change 选择的日期改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| date | string | 选中的yyyy-MM-dd格式的日期 |
| time | string | 如果启用时间选择，则是选择的hh:mm:ss格式的时间 |


-----

### 日期范围选择组件

<div style="position:relative" id="mx_3">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-calendar/rangepicker?inline=true&id=mx_3" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-calendar/rangepicker" target="_blank">新窗口查看示例</a>


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| start    | 开始日期，yyyy-MM-dd格式的日期 | string | 今天 |
| end     | 结束日期，yyyy-MM-dd格式的日期 | string | 今天 |
| shortcuts     | 是否显示快捷日期 | boolean | true |
| max     | 最大可选的日期，yyyy-MM-dd格式的日期 | string |  |
| min | 最小可选的日期，yyyy-MM-dd格式的日期 | string | &nbsp;  |
| timeType | 时间类型，设置该值后会自动出现时间选择组件 | string | 只能从"all,hour,minute,second"中选择，可多选  |
| placement | 日历在目标的方位，仅top与bottom | string | bottom |
| align | 日历与目标的对齐方式，仅left与right | string | left |


#### event
#### change 选择的日期改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| dates | object | 日期范围对象 |

