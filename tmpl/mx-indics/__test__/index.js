let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            options: [{
                key: 'fields',
                desc: `<pre>
指标数组，格式如下：
[{
    text: '指标文案',
    value: '跟后台交互的指标字段',
    tip: '指标提示文案'
}]
</pre>`,
                type: 'array',
                def: ''
            }, {
                key: 'text-key',
                desc: '渲染text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'custom',
                desc: '当前是否为自定义指标，false（默认指标），true（自定义指标）<br/>可能存在customs=defaults的情况，因此需要明确指定当前是自定义还是默认',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'customs',
                desc: '自定义指标value值的数组，例如["cost"]<br/>为[]的时候，默认=defaults，确保每次切换都有选中的指标',
                type: 'array',
                def: ''
            }, {
                key: 'defaults',
                desc: '默认指标value值的数组，必填',
                type: 'array',
                def: ''
            }, {
                key: 'limit',
                desc: '指标选中上限，不传不限制选择个数',
                type: 'number',
                def: ''
            }, {
                key: 'sortable',
                desc: '是否需要排序',
                type: 'boolean',
                def: 'false'
            }]
        });
    }
});
