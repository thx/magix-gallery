## 弹框组件

> 该组件包含“alert，confirm，弹出普通view”三个功能。推荐`mixins`的形式进行使用，示例代码如下


### alert

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-dialog/index" target="_blank">在线示例</a>
```js
let Magix = require('magix');
let Dialog = require('app/gallery/mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>' () {
        this.alert('xxx', () => {
            console.log('确定被点击');
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| content    | 提示内容 | string |  |
| enterCallback     | 确定按钮被点击时调用 | function |  |
| title     | 弹出框标题 | string | 提示 |

----

### confirm

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-dialog/index" target="_blank">在线示例</a>
```js
let Magix = require('magix');
let Dialog = require('app/gallery/mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'confirm<click>' () {
        this.confirm('xxx', () => {
            console.log('确定被点击');
        }, () => {
            console.log('取消被点击');
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| content    | 提示内容 | string |  |
| enterCallback     | 确定按钮被点击时调用 | function |  |
| cancelCallback     | 取消按钮被点击时调用 | function |  |
| title     | 弹出框标题 | string | 提示 |

----

### 显示普通view

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-dialog/index" target="_blank">在线示例</a>
```js
let Magix = require('magix');
let Dialog = require('app/gallery/mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'view<click>' () {
        this.mxDialog('path/to/view', {
            width: 900
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| view    | view路径，如`app/views/agreement` | string |  |
| width     | 弹出框宽度 | number | 500 |
| left     | 弹出框居左侧位置 | number | 默认水平居中，动态计算left的位置 |
| top     | 弹出框居顶部位置 | number | 100 |
| closable | 右上角是否有关闭按钮 | boolean | true |



