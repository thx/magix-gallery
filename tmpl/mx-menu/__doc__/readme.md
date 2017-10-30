## 菜单组件

#### 使用

<a href="https://thx.github.io/magix-gallery/#!/mx-menu/index" target="_blank">在线示例</a>

```html
<mx-menu.index
    list="<%@list%>"
    width="200"
></mx-menu.index>
```

```js
let Magix = require('magix');
let Menu = require('../index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                id: 0,
                pId: '',
                text: '新建'
            }, {
                id: '0-0',
                pId: '',
                text: '复制'
            }, {
                id: '0-1',
                pId: '',
                text: '删除'
            }, {
                id: 1,
                pId: 0,
                text: '新建word文件'
            }, {
                id: 2,
                pId: 0,
                text: '新建excel文件'
            }, {
                id: 3,
                pId: 0,
                text: '新建ppt文件'
            }]
        });
    },
    'showcm<contextmenu>'(e) {
        e.preventDefault();
        Menu.show(this, e, {
            list: this.updater.get('list'),
            picked(item) {
                console.log(item);
            },
            width: 220
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| list    | 列表数组，对象数组，如[{id:1,text:'a'}] | array |  |
| textKey     | 渲染text时读取的key | string |  |
| valueKey     | 渲染value时读取的key | string |  |
| parentKey     | 数据关联时的父key | string |  |
| width     | 菜单宽度 | number | 340 |

#### event
#### picked 菜单点击时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| item | any | 选中的数据对象 |

