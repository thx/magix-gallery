## 时间组件

> 该组件仅基础功能，需要二次开发


#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-tree/index" target="_blank">在线示例</a>
```html
<div mx-view="mx-tree/index"
    view-list="<%@list%>"
></div>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                id: 0,
                pId: '',
                text: 'abc'
            }, {
                id: '0-0',
                pId: '',
                text: 'abc-abc'
            }, {
                id: 1,
                pId: 0,
                text: 'def'
            }, {
                id: 2,
                pId: 1,
                text: 'aaa'
            }, {
                id: 3,
                pId: 2,
                text: 'bbb'
            }]
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 树形菜单数据 | array |  |
| textKey     | 显示节点文本内容的key | string |    |
| valueKey     | 节点值的key | string |    |
| parentKey     | 关联父子节点的key | string |    |

