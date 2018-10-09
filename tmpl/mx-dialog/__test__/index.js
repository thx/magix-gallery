let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let options = [{
            key: 'width',
            desc: '浮层宽度',
            type: 'number',
            def: '400'
        }, {
            key: 'height',
            desc: '浮层高度',
            type: 'number',
            def: '400'
        }, {
            key: 'modal',
            desc: '打开浮层时是否禁止滚动',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mask',
            desc: `打开浮层时是否有深色透明度遮罩，不需要请手动false关闭
<div class="color-brand">注意 mask=false 情况下，点击空白处自动关闭浮层</div>`,
            type: 'boolean',
            def: 'true'
        }, {
            key: 'closable',
            desc: '浮层是否有右上角默认的关闭按钮',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'left',
            desc: '最终定位相对于屏幕左侧',
            type: 'number',
            def: '默认居中'
        }, {
            key: 'top',
            desc: `最终定位相对于屏幕高侧
<div class="color-brand">如果想相对于trigger定位，请减去 $(window).scrollTop()</div>`,
            type: 'number',
            def: '默认居中，若高度超过屏幕高度则为0'
        }]
        that.updater.digest({
            options,
            viewId: that.id
        });
    }
});