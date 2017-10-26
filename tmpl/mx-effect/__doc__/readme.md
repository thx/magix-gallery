## 效果组件
> 该组件提供css无法完成的动画效果

### count

<a href="https://thx.github.io/magix-gallery/#!/mx-effect/index" target="_blank">在线示例</a>
```html
<input value="20" class="input" mx-view="mx-effect/count" view-to="<%@toNumber%>">
<div mx-view="mx-effect/count" view-to="<%@toNumber%>" view-duration="2000" view-fixed="2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px;">20.00</div>
<button class="btn btn-brand ml5" type="button" mx-click="changeNumber({i:true})">increase number</button>
<button class="btn btn-brand ml5" type="button" mx-click="changeNumber()">decrease number</button>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            toNumber: 20
        });
    },
    'changeNumber<click>'(e) {
        let me = this;
        let to = me.updater.get('toNumber');
        let diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});
```


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| to    | 改变到的值 | number |  |
| duration     | 持续时间，毫秒 | number | 500 |
| fixed     | 小数位 | number | 0 |



---


### dance

<a href="https://thx.github.io/magix-gallery/#!/mx-effect/index" target="_blank">在线示例</a>
```html
<mx-effect-dance value="<%=content%>" duration="<%=duration%>" dance="<%=dance%>"  />
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            content: '你从远处聆听我，我的声音却无法触及你。',
            dance: 'd1',
            duration: '60'
        });
    }
});
```


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 显示的内容 | string |  |
| duration     | 单字效果间隔时间，毫秒 | number | 60 |
| dance     | 效果，目前只能从d1-d11之间选取 | string | d1 |
