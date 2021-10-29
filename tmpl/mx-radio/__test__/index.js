let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options1 = [{
            key: 'name',
            desc: 'radio的name值',
            type: 'string',
            def: ''
        }, {
            key: 'value',
            desc: 'radio的value值',
            type: 'string',
            def: ''
        }, {
            key: 'text',
            desc: '显示的文案值',
            type: 'string',
            def: ''
        }, {
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
        }];

        this.updater.digest({
            viewId: this.id,
            options1
        });
    }
});