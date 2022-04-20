let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let viewId = that.id;
        let options = [{
            key: 'content',
            desc: '按钮显示文案',
            type: 'string',
            def: ''
        }, {
            key: 'mode',
            desc: '按钮模式<br/>primary：主要品牌按钮<br/>secondary：次要跟随按钮（默认）<br/>white：白色<br/>hollow：空心按钮',
            type: 'string',
            def: 'secondary'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled-tip',
            desc: '禁用时hover显示禁用原因',
            type: 'string',
            def: ''
        }, {
            key: 'disabled-width',
            desc: '禁用时hover显示禁用原因浮层宽度',
            type: 'number',
            def: '200'
        }, {
            key: 'disabled-placement',
            desc: '禁用时hover提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'size',
            desc: '展示尺寸<br/>small：小号<br/>normal：正常尺寸<br/>large：大号尺寸',
            type: 'string',
            def: 'normal'
        }, {
            key: 'loading',
            desc: '是否loading中',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'color',
            desc: '按钮背景颜色',
            type: '合法色值',
            def: ''
        }, {
            key: 'color-hover',
            desc: 'hover按钮背景颜色',
            type: '合法色值',
            def: '配置了color才生效<br/>默认=color'
        }, {
            key: 'color-text',
            desc: '按钮文字颜色',
            type: '合法色值',
            def: '配置了color才生效<br/>默认=#ffffff'
        }, {
            key: 'color-hover-text',
            desc: 'hover按钮文案颜色',
            type: '合法色值',
            def: '配置了color才生效<br/>默认=color-text'
        }, {
            key: 'tag-content',
            desc: '打标文案',
            type: 'string',
            def: ''
        }, {
            key: 'tag-color',
            desc: '打标颜色，品牌色按钮默认红色，禁用按钮默认灰色，其他默认品牌色',
            type: '合法色值',
            def: ''
        }, {
            key: 'link-href',
            desc: '规定链接指向的页面的 URL',
            type: 'URL',
            def: ''
        }, {
            key: 'link-target',
            desc: `<pre>规定在何处打开链接文档，可选值同a标签target：
_blank
_parent
_self
_top
framename</pre>`,
            type: 'string',
            def: '_blank',
        }, {
            key: 'icon',
            desc: '图标配置',
            type: '',
            def: ''
        }]

        that.updater.digest({
            viewId,
            options
        });
    }
});