## 小时选取组件

> 该组件包含“小时选取，天范围内的小时选取，周范围内的小时选取”三个子组件

### 小时选取基础组件


#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-hour/index" target="_blank">在线示例</a>
```
<div mx-view="app/gallery/mx-hour/index" view-range="00001111011"></div>
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| range    | 24个0或1组成的字符串，1表示选中的小时 | string | &nbsp; |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取选中的小时 | string | string | 24个0或1组成的字符串，1表示选中的小时 |

> method调用方法： $('#id').invokeView('val',['0011']);


#### event
#### change 选择的小时改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| range | string | 24个0或1组成的字符串，1表示选中的小时 |


-----

### 天小时选择组件


#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-hour/index" target="_blank">在线示例</a>
```
<div mx-view="app/gallery/mx-hour/day" view-hours="00001111011"></div>
```

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


-----

### 周小时选取组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-hour/index" target="_blank">在线示例</a>
```
<div mx-view="mx-hour/week" view-days="<%@['','001111','','','00000000111111001']%>"></div>
```

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
