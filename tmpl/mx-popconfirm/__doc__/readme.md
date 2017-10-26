## 确认弹出组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-popconfirm/index" target="_blank">在线示例</a>
```html
<a href="#" mx-enter="del({id:<%=i%>})" mx-view="app/gallery/mx-popconfirm/index">删除</a>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'del<enter>' (e) {
        this.gtipRT('delete:' + e.params.id);
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| content    | 提示内容 | string | 确认执行该操作？ |
| enterText     | 确定按钮内容 | string | 确定  |
| cancelText     | 取消按钮内容 | string | 取消  |
| placement | 提示框在目标的方位，top,bottom,left,right | string | left |
| align | 提示框与目标的对齐方式，top,bottom,left,right | string | &nbsp; |


