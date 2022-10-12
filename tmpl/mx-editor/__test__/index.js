let Magix = require('magix');

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
            desc: '编辑内容不是纯文本，需要有html片段的，配置展示模板，<br/>使用${content}当占位符显示编辑内容',
            type: 'string',
            def: '${content}'
        }, {
            key: 'rules',
            desc: '校验规则',
            type: 'object',
            def: '支持form所支持的所有类型校验'
        }, {
            key: 'size',
            desc: '展示input的尺寸<br/>small：小号<br/>normal：正常尺寸',
            type: 'string',
            def: 'normal'
        }, {
            key: 'width',
            desc: 'input的宽度',
            type: 'number',
            def: 120
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'fixed-icon',
            desc: '是否固定显示编辑小笔',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'replace-fn',
            desc: `<pre>自定义格式化函数
(editText) => {
    return newEditText;
}
</pre>`,
            type: 'function',
        }]

        let events = [{
            type: 'change',
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