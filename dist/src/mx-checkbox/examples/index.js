let Magix = require('magix');
let $ = require('$');

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
            },{
                key: 'disabled',
                desc: '是否禁用',
                type: 'boolean',
                def: 'false'
            },{
                key: 'indeterminate',
                desc: '是否部分选中，只控制样式，不控制属性',
                type: 'boolean',
                def: 'false'
            },{
                key: 'name',
                desc: 'checkbox 的名称',
                type: 'string',
                def: ''
            },{
                key: 'value',
                desc: 'checkbox 的 value 属性的值',
                type: 'string',
                def: ''
            }]
        });
    }
});