## 复制组件

> 该组件引入了第三方 https://zenorocha.github.io/clipboard.js 代码

#### 使用


<a href="https://thx.github.io/magix-gallery/#!/mx-copy/index" target="_blank">在线示例</a>

```html
<div id="text_<%=viewId%>">这里是要复制的<span style="font-weight:bold">内容</span>的节点</div>
<mx-copy copy-node="text_<%=viewId%>" tag="button" type="button" class="btn btn-brand mr20" mx-success="done()" mx-error="bad()">复制</mx-copy>
```


```js
let Magix = require('magix');
let GTip = require('app/gallery/mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>'() {
        this.gtipRT('复制成功～');
    },
    'bad<error>'() {
        this.gtipRT('复制失败～');
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| copyNode    | 复制内容的节点 | string | &nbsp; |


#### event
#### success 复制成功时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| 无 | &nbsp;  | &nbsp; |

#### error 复制失败时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| 无 | &nbsp;  | &nbsp; |
