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
            },{
                key: 'defaults',
                desc: '默认指标value值的数组，必填',
                type: 'array',
                def: ''
            },{
                key: 'custom',
                desc: '当前是否为自定义指标，false（默认指标），true（自定义指标）',
                type: 'boolean',
                def: 'false'
            },{
                key: 'customs',
                desc: '自定义指标value值的数组，例如["cost"]',
                type: 'array',
                def: ''
            },{
                key: 'limit',
                desc: '指标选中上限，不传不限制选择个数',
                type: 'number',
                def: ''
            },{
                key: 'sortable',
                desc: '是否需要排序',
                type: 'boolean',
                def: 'false'
            }]
        });
    }
});
