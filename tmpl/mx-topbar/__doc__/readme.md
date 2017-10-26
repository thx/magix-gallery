## 顶部进度条组件
> 这是一个扩展组件，推荐直接在`Magix.boot`时放在扩展中

### 使用


```js
let Magix = require('magix');

Magix.boot({
    //...
    exts:['app/gallery/mx-topbar/index']
});
```


## 与路由绑定

> 可以与路由及某个`vframe`绑定，只有`path`变化时才显示进度条

### 使用

```html
<div class="app-body-detail" mx-view="<%=mainView%>" id="main">
    <div class="loading"><span class="loading-anim"></span></div>
</div>

<div mx-view="app/gallery/mx-topbar/router?id=main"></div>
```

