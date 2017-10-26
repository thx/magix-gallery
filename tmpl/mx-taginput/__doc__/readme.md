## 标签选择组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-taginput/index" target="_blank">在线示例</a>
```
<div mx-view="app/gallery/mx-taginput/index"
    view-list="<%@ list %>"
    view-placeholder="请选择分类"
></div>
```

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

