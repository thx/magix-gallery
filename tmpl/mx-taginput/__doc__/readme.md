## 标签选择组件

<div style="position:relative" id="mx_1">
    <iframe src="http://localhost/magix-gallery/test.html#!/mx-taginput/index?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-taginput/index" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 选择的标签列表 | array | 必填 |
| disabled     | 是否禁用 | boolean | false |
| textKey     | 当list是对象数组时，从哪个字段读取text值 | string | 当list是对象数组时必填 |
| valueKey | 当list是对象数组时，从哪个字段读取value值 | string | 当list是对象数组时必填 |
| placeholder  | 提示内容 | string | '' |


#### method

| 方法名 | 说明 | 入参 | 返回值 |
| -------- | -------- | -------- | -------- |
| val | 设置或获取选中的ids值 | array | array |

> method调用方法： $('#id').invokeView('val',[['分类1','分类2']]);


#### event
#### change 选择的标签改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| ids | array | 选中的ids数组 |
| items | array | 选中的对象，方便开发者获取其它信息 |

