let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            options: [{
                key: 'checked',
                desc: '是否选中',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'disabled',
                desc: '是否禁用',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'indeterminate',
                desc: '是否部分选中，只控制样式，不控制属性',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'name',
                desc: 'checkbox 的名称',
                type: 'string',
                def: ''
            }, {
                key: 'value',
                desc: 'checkbox 的 value 属性的值',
                type: 'string',
                def: ''
            }, {
                key: 'text',
                desc: '显示的文案值',
                type: 'string',
                def: ''
            }, {
                key: 'tip',
                desc: '小问号提示',
                type: 'string',
                def: ''
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
            }],
        });
    }
});