## 下拉框组件

> 该组件包含“单选、多选”两个子组件。


### 单选下拉框
<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-dropdown/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-dropdown/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 当列表中的项为对象时，渲染text时读取的key | string |  |
| valueKey     | 当列表中的项为对象时，渲染value时读取的key | string |  |
| searchbox     | 是否包含搜索框 | boolean | false |
| disabled     | 是否禁用 | boolean | false |
| emptyText     | 空值 | string | &nbsp; |
| selected     | 选中的值 | string | &nbsp; |

#### event
#### change 下拉框选项变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| item | any | 选中的数据对象 |
| keys | object | 包含textKey和valueKey的对象 |
| value | any | 选中值 |
| text | string | 选中文本 |

-----

### 多选下拉框

<div style="position:relative" id="mx_2">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-dropdown/multiple?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-dropdown/multiple" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 当列表中的项为对象时，渲染text时读取的key | string |  |
| valueKey     | 当列表中的项为对象时，渲染value时读取的key | string |  |
| searchbox     | 是否包含搜索框 | boolean | false |
| disabled     | 是否禁用 | boolean | false |
| emptyText     | 空值 | string | &nbsp; |
| selected     | 逗号分割的选中的值 | string | &nbsp; |

#### event
#### change 下拉框选项变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| keys | object | 包含textKey和valueKey的对象 |
| values | array | 选中值集合 |




