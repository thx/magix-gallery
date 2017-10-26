## 拖动选取组件

#### 使用

<a href="https://thx.github.io/magix-gallery/#!/mx-dragselect/index" target="_blank">在线示例</a>
```html
<ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()" view-selector="li[select!=false]">
    <li>123</li>
    <li>456</li>
    <li>123</li>
    <li>456</li>
    <li>123</li>
    <li>456</li>
    <li select="false">123</li>
    <li select="false">456</li>
</ul>
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| selector | 参于选取的子节点选择器，默认全部子节点 | string |

#### event
#### dragbegin 开始拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |

#### change 鼠标进入某个拖或放区域时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| action | string | add或remove，指示节点被添加到或移除选区 |
| node | HTMLElement | 当前被添加或移除的节点 |


#### dragfinish 结束拖动时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |



