import Magix, { Router } from 'magix';

export default Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'mode',
            desc: '显示默认，可选<br/>brand：品牌色<br/>common：默认#666 hover #999',
            type: 'string',
            def: 'brand'
        }, {
            key: 'content',
            desc: '显示内容',
            type: 'string',
            def: ''
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
            key: 'color',
            desc: '文案颜色',
            type: '合法色值',
            def: ''
        }, {
            key: 'color-hover',
            desc: 'hover文案颜色',
            type: '合法色值',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});