## 快速日期选取组件

#### 使用

<a href="https://thx.github.io/magix-gallery/#!/mx-day/index" target="_blank">在线示例</a>

```html
<mx-day
    years="<%@years%>"
    selected-year="2002"
    selected-days="0011,,0011,1100"
    style="width:800px"
></mx-day>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        let years = [];
        for (let i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            years
        });
    }
});
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| years    | 年列表 | array |  |
| selectedYear     | 选中的年 | number |  |
| selectedDays     | 选中的日期 | string |  |

#### event
#### change 菜单点击时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| days | array | 选中的日期 |

