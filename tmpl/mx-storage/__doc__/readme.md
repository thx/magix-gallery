## 本地存储组件

### API

#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| get | 获取值 | string| any | &nbsp; |
| set | 设置值 | string,any | void | &nbsp; |
| del | 删除值 | string | void | &nbsp; |

#### event
#### change 如果同一个浏览器开多个tab,同时使用该组件，则某一个tab页设置值时，其它tab页可通过该事件监听到相应的变化

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |   |
| key    | string  | 哪个值发生的变化 |
| from   | any     | 变化的原始值 |
| to     | any     | 变化后的新值 |



