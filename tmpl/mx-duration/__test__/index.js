let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'box-width',
            desc: '单格宽度',
            type: 'number',
            def: `<pre>
1. 选择一小时的场景默认 32px
2. 选择半小时的场景默认 18px
</pre>`
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'
        }, {
            key: 'half',
            desc: '是否以半小时为选择间隔',
            type: 'boolean',
            def: 'false，默认一小时为间隔'
        }, {
            key: 'custom',
            desc: '是否支持自定义投放折扣，=false时只可选择无折扣或者不投放',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'biz-code',
            desc: '特殊产品线的定制配色展示需求，目前已有定制如下：<br/>1. 直通车（ subway ）',
            type: 'string',
            def: ''
        }, {
            key: 'readonly',
            desc: '只读模式',
            type: 'boolean',
            def: 'false'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});