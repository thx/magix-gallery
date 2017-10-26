## suggest组件

### 使用

<a href="https://thx.github.io/magix-gallery/#!/mx-suggest/index" target="_blank">在线示例</a>
```html
<mx-view
    path="mx-suggest/index"
    tag="input"
    class="input"
    list="<%@list%>"/>
```

```js
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 当列表中的项为对象时，渲染text时读取的key | string |  |
| valueKey     | 当列表中的项为对象时，渲染value时读取的key | string |  |


