## 拖动排序组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-dragsort/index" target="_blank">在线示例</a>
```html
<ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false">
    <li ds-draggable="false"><span>move</span>123</li>
    <li ds-draggable="false"><span>move</span>456</li>
    <li><span>move</span>123</li>
    <li><span>move</span>456</li>
    <li><span>move</span>123</li>
    <li><span>move</span>456</li>
    <li><span>move</span>123</li>
    <li ds-draggable="false"><span>move</span>456</li>
</ul>
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| selector | 用于拖动的元素选择器，默认子节点 | string |
| drops    | 放置拖动内容的容器id，逗号分割的字符串 | string |  |
| horizonal     | 是否可以水平拖动 | boolean | false  |
| vertical     | 是否可以垂直拖动 | boolean | true |
| sort     | 是否可以拖动排序 | boolean | true |

#### event
#### dragbegin 开始拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| dragNode | HTMLElement | 拖动节点 |
| dragZone | HTMLElement | 拖动节点所在的容器 |

#### enterzone 鼠标进入某个拖或放区域时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| zone | HTMLElement | 拖或放的区域 |
| changePointer | function | 改变鼠标状态的函数 |


#### dragfinish 结束拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| moved | boolean | 是否是移动状态 |
| outZone | boolean | 是否是在拖或放区域的外边 |
| dragNode | HTMLElement | 拖动节点 |
| dragZone | HTMLElement | 拖动节点所在的容器 |
| dropNode | HTMLElement | 放置节点 |
| dropZone | HTMLElement | 放置节点所在的容器 |



