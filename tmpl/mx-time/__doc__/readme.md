## 时间组件

> 该组件包含“时间组件、时间选择组件”两个功能。


### 时间组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-time/index" target="_blank">在线示例</a>
```html
<div mx-view="mx-time/index"
    view-time="00:12:13"
    view-type="minute,second" mx-change="test()"
></div>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>' (e) {
        console.log(e, e.time);
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| time    | hh:mm:ss格式的时间 | string | 当前时间 |
| type     | 可操作的类型 | string | 只能从"all,hour,minute,second"中选择，可多选   |


#### event
#### change 时间变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| time | string | hh:mm:ss格式的时间字符串 |

----

### 时间选择组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-time/picker" target="_blank">在线示例</a>
```html
<input mx-view="app/gallery/mx-time/picker"
    value="18:26:00"
    class="input"
    view-type="hour,minute" />
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| time    | hh:mm:ss格式的时间 | string | 当前时间 |
| type     | 可操作的类型 | string | 只能从"all,hour,minute,second"中选择，可多选   |
| placement | 弹出框在目标的方位，仅top与bottom | string | bottom |
| align | 弹出框与目标的对齐方式，仅left与right | string | left |

