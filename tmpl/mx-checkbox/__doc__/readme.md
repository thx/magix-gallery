## checbox操作组件
> 该组件包含“checkbox联动，checkbox状态保持”两个mixin组件。mixin组件的使用只需要在html中做标记(根据组件要求)，且在js代码中放到mixins数组属性中即可

### checkbox联动
#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-checkbox/linkage" target="_blank">在线示例</a>

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
#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-checkbox/storestate" target="_blank">在线示例</a>

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


