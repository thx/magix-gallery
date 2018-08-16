let Magix = require('magix');
let $ = require('$');
let CopyText = '复制代码';
Magix.applyStyle('@custom.less');

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
            desc: '展现样式，默认白底，需要黑底时配置type="dark"',
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
        }]
        that.updater.digest({
            viewId: that.id,
            options,
            text1: CopyText,
            text2: CopyText,
            text3: CopyText,
            text4: CopyText,
            text5: CopyText,
            text6: CopyText,
            text7: CopyText,
            text8: CopyText,
            text9: CopyText,
            text10: CopyText,
            text11: CopyText
        });
    }
});