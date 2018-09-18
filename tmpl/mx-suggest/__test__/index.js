let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc:  `<pre>可搜素类型列表
支持简单数组，例如：
[1, 2, 3, 4]

或者对象数组，例如：[{
    text: '文案',
    value: '跟后端交互字段'
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'list-text',
            desc: '可搜索类型展示文案',
            type: 'string',
            def: 'text'
        }, {
            key: 'list-value',
            desc: '可搜索类型对应的key值',
            type: 'string',
            def: 'value'
        }, {
            key: 'placeholder',
            desc: '空状态提示文案',
            type: 'string',
            def: '搜素'
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});