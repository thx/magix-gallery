## 弹出菜单组件

> 该组件仅控制行为，不提供html代码。


#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-popmenu/index" target="_blank">在线示例</a>
```html
<button type="button" class="btn btn-brand" mx-view="app/gallery/mx-popmenu/index" view-related="#menu_<%=viewId%>">显示更多菜单</button>
<ul class="none menu" id="menu_<%=viewId%>">
    <li class="menu-item" mx-click="hide()">示例菜单1</li>
    <li class="menu-item" mx-click="hide()">示例菜单2</li>
    <li class="menu-item" mx-click="hide()">示例菜单3</li>
    <li class="menu-item" mx-click="hide()">示例菜单4</li>
    <li class="menu-item" mx-click="hide()">示例菜单5</li>
    <li class="menu-item" mx-click="hide()">示例菜单6</li>
</ul>
```

```js
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.css');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>' () {
        $('#' + this.id + ' button').invokeView('@{hide}');
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| related    | 关联的节点id，包含#号 | string |  |
| placement | 弹出菜单在目标的方位，仅top与bottom | string | bottom |
| align | 弹出菜单与目标的对齐方式，仅left与right | string | left |

#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| @{show} | 显示菜单 |  |  |  |
| @{hide} | 隐藏菜单 |  |  | &nbsp; |

> method调用方法： $('#id').invokeView('@{hide}');