## 颜色组件

> 该组件包含“颜色组件、颜色选择组件”两个功能。


### 颜色组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-color/index" target="_blank">在线示例</a>
```html
<mx-view path="app/gallery/mx-color/index"/>
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| color    | #ffffff格式的颜色 | string | #ffffff |


#### event
#### change 颜色选择时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| color | string | hh:mm:ss格式的时间字符串 |

----

### 颜色选择组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-color/picker" target="_blank">在线示例</a>
```html
<mx-view tag="input" path="app/gallery/mx-color/picker" class="input" />
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| color    | #ffffff格式的颜色 | string | #ffffff |
| placement | 弹出框在目标的方位，仅top与bottom | string | bottom |
| align | 弹出框与目标的对齐方式，仅left与right | string | left |

