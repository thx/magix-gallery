## 全局提示组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-gtip/index" target="_blank">在线示例</a>
```js
let Magix = require('magix');
let GTip = require('app/gallery/mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'rt<click>' () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>' () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>' () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>' () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>' (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});
```

### API
#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| gtipRT | 右上角提示 | msg,timeout | void | &nbsp; |
| gtipRB | 右下角提示 | msg,timeout | void | &nbsp; |
| gtipLT | 左上角提示 | msg,timeout | void | &nbsp; |
| gtipLB | 左下角提示 | msg,timeout | void | &nbsp; |

> method调用方法： this.gtipRT('msg',1000);

