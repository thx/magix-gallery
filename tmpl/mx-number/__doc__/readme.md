## number组件

### 使用

<a href="https://thx.github.io/magix-gallery/#!/mx-number/index" target="_blank">在线示例</a>
```html
<mx-view
    path="mx-number/index"
    max="10"
    min="-10"
    step="0.5"
    value="8.5"
    mx-change="show()" />
```


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 当前值 | number | 0 |
| min     | 最小值 | number | 0 |
| max     | 最大值 | number | 100 |
| step     | 步长 | number | 1 |
| ratio     | 放大比率，按shift键时按ratio倍操作step | number | 10 |
| disabled     | 是否禁用 | boolean | false |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取值 | number | number | &nbsp; |

> method调用方法： $('#id').invokeView('val',[20]);

#### event
#### change 数字变化且焦点离开时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | number | value |


#### input 数字实时变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | number | value |