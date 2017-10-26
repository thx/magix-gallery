## 样式组件
> 该样式组件是`magix-components`组件及项目的基础样式，在项目中您应该把此样式组件做为基础样式，然后再开发自己的需求。

### 做为基础样式

> 假设您已经把该样式同步到项目的`tmpl/app/gallery/mx-style/`目录


```js
// 配置magix-combine的 config选项
magixCombine.config({
    scopedCss: [
        './tmpl/app/gallery/mx-style/index.less'
    ]
});
```

### 主题定制

> 所有可变的颜色、字体、高度等均定义在`mx-style/_vars.less`文件中，您在项目中把该`_vars.less`做为基础变量文件`import`到自己的`less`文件中来使用类似品牌色等变量。在需要改变品牌色时，修改`_vars.less`中定义的变量重新编译即可

### 预定义样式

> 本着最少使用的原则，`mx-style`内置了下面常见的样式，您可以在项目中直接使用。其它样式则需要您在项目中自己定义。
> mx-style使用了cube这个库，您可以<a href="https://github.com/thx/cube" target="_blank">点击这里了解详情</a>

| 样式 | 说明 |
| -------- | -------- |
| `.btn`  `.btn-brand`    | 按钮，只定义了btn普通按钮及btn-brand带品牌色的按钮 |
| `.dialog-header`  `.dialog-body` `.dialog-footer`    | 对话框样式 |
| `.input`  `.textarea` `.checkbox` `.radio` `.switch` `.form-item` `.form-label` `.form-required` `.form-content` `.form-footer`     | 输入框样式及表单样式 |
| `.loading`  `.loading-anim`     | 加载动画 |
| `.table`  `.table-strip`     | 表格样式 |
| `.mt5` `.mt10` `.mt15` `.mt20` `.mt25` `.mt30` `.mr5` `.mr10` `.mr15` `.mr20` `.mr25` `.mr30`  `.mb5` `.mb10` `.mb15` `.mb20` `.mb25` `.mb30` `.ml5` `.ml10` `.ml15` `.ml20` `.ml25` `.ml30` `.pt5` `.pt10` `.pt15` `.pt20` `.pt25` `.pt30` `.pr5` `.pr10` `.pr15` `.pr20` `.pr25` `.pr30` `.pb5` `.pb10` `.pb15` `.pb20` `.pb25` `.pb30` `.pl5` `.pl10` `.pl15` `.pl20` `.pl25` `.pl30` `.tl` `.tc` `.tr`  `.fl` `.fr` `.ib` `.cp` `.cm` `.none` `.clearfix` `.unselectable` `.scrollable` `.ellipsis` `.disabled`| 通用样式，mt5表示margin-top:5px;其它类推。mr5表示margin-right:5px;其它类推。mb5表示margin-bottom:5px;其它类推。ml5表示margin-left:5px;其它类推。 pt5表示padding-top:5px;其它类推。pr5表示padding-right:5px;其它类推。pb5表示padding-bottom:5px;其它类推。pl5表示padding-left:5px;其它类推。tl表示text-align:left fl表示float:left ib表示display:inline-block  cp表示cursor:pointer  cm表示cursor:move pa表示position:absolite; pr表示position:relative  none表示display:none |
