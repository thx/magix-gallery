let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let options = [{
            key: 'content',
            desc: '提示内容 ',
            type: 'string'
        }, {
            key: 'width',
            desc: '提示框宽度',
            type: 'number',
            def: 200
        }, {
            key: 'placement',
            desc: '提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'align',
            desc: '提示框与目标的对齐方式，top，bottom，left，right，center',
            type: 'string',
            def: 'center'
        }, {
            key: 'left',
            desc: '最终定位相对于屏幕左侧，配置 left + top 时忽略 placement + align',
            type: 'number',
            def: ''
        }, {
            key: 'top',
            desc: '最终定位相对于屏幕高侧，配置 left + top 时忽略 placement + align',
            type: 'number',
            def: ''
        }, {
            key: 'offset',
            desc: `<pre>在placement + align / left + top 基础上微量偏移
offset: {
    left: -10,
    top: 10
}</pre>`,
            type: 'object',
            def: ''
        }, {
            key: 'auto',
            desc: '默认自动展开提示框',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'view',
            desc: '自定义提示内容view，配置的view以view为准，绝对路径',
            type: 'string'
        }, {
            key: 'data',
            desc: '自定义提示内容view需要传入的数据',
            type: 'object&nbsp;&nbsp;|&nbsp;&nbsp;array',
            def: ''
        }, {
            key: 'type',
            desc: `
<div>展现样式，默认白底，需要黑底时配置type="dark"</div>
<div class="color-brand">异常情况说明：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div>
<div class="color-brand">可以使用view-type与原生属性type区分来解决该问题</div>
            `,
            type: 'string',
            def: ''
        }, {
            key: 'align-text',
            desc: '文字对齐方式，left，right，center',
            type: 'string',
            def: 'left'
        }, {
            key: 'scroll-wrapper',
            desc: '相对滚动父元素，支持格式#id，.class，id，$(node)',
            type: 'string',
            def: ''
        }, {
            key: 'z-index',
            desc: '自定义z-index',
            type: 'number',
            def: '9999'
        }]
        that.updater.digest({
            viewId: that.id,
            options
        });
    }
});