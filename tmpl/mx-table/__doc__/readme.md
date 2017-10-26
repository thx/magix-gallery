## 表格组件
> 该组件包含“表头固定，列和表头固定,旧版列翻页”三个组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-table/index" target="_blank">在线示例</a>


### 表头固定

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| zIndex    | z轴 | array | 1 |


---

### 列和表头固定

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| rwdRange    | 固定的列 | string | 2,-1 |
| sticky    | 固定头 | boolean | false |

---


### 旧版列翻页

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| rwdRange    | 固定的列 | string | 2,-1 |
| rwdLimit    | 几列一页 | number | 4 |
| rwdCurrent  | 当前显示第几页 | number | 1 |