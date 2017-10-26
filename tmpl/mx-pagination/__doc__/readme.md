## 分页组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-pagination/index" target="_blank">在线示例</a>
```html
<div mx-view="mx-pagination/index"
    view-total="2000"
    view-step="5"
    view-page="15"  mx-change="show()" class="fl">
</div>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>' (e) {
        console.log(e.page, e.size);
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| total    | 总数 | number |  |
| page     | 当前第几页 | number | 1 |
| size     | 每页多少条 | number | 20 |
| step | 页码过多时，中间显示多少条页码 | number | 7 |



#### event
#### change 页码或每页多少条改变时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| page | number | 当前第几页 |
| size | number | 每页多少条 |

