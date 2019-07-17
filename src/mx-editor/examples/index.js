let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'content',
            desc: '需要编辑的文案',
            type: 'string',
            def: ''
        }, {
            key: 'tmpl',
            desc: '编辑内容不是纯文本，需要有html片段的，配置展示模板，使用${content}当占位符显示编辑内容',
            type: 'string',
            def: '${content}'
        }, {
            key: 'rules',
            desc: '校验规则',
            type: 'object',
            def: '支持form所支持的所有类型校验'
        }, {
            key: 'small',
            desc: '是否是缩小尺寸的input',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'width',
            desc: 'input的宽度',
            type: 'number',
            def: 140
        }]

        let events = [{
            type: 'edit',
            desc: '回车或者失去焦点触发，只调用一次',
            params: [{
                key: 'editText',
                desc: '编辑完成的内容',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});