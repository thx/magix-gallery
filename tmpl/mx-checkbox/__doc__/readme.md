## checbox操作组件
> 该组件包含“checkbox联动，checkbox状态保持”两个mixin组件。mixin组件的使用只需要在html中做标记(根据组件要求)，且在js代码中放到mixins数组属性中即可

### checkbox联动

<div style="position:relative" id="mx_1">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-checkbox/linkage?inline=true&id=mx_1" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-checkbox/linkage" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| linkage    | 控制全选\取消的checkbox名称 | string |  |
| linkage-parent     | 需要联动的子checkbox | string | &nbsp; |

#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| getSelectedIds | 获取选中的id | name | array | &nbsp; |

> method调用方法： this.getSelectedIds('example1');


---

### checkbox保存状态
<div style="position:relative" id="mx_2">
    <iframe src="https://thx.github.io/magix-gallery/?#!/mx-checkbox/storestate?inline=true&id=mx_2" frameborder="no" style="width:100%;height:200px;" scrolling="no"></iframe>
    <div style="position:absolute;width:100%;height:200px;background-color:#f9f9f9;text-align:center;line-height:200px;font-size:32px;top:0;right:0;left:0;bottom:0">示例加载中...</div>
</div>
<a href="https://thx.github.io/magix-gallery/#!/mx-checkbox/storestate" target="_blank">新窗口查看示例</a>

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| linkage    | 控制全选\取消的checkbox名称 | string |  |
| linkage-parent     | 需要联动的子checkbox | string | &nbsp; |

#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| getStoreState | 获取选中的id | name | array | &nbsp; |

> method调用方法： this.getStoreState('example1');


