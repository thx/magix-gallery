let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@box.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value:1,
    text:"选项1",
    tag:"打标标签",
    tips:"提示信息"
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '不传默认取list第一个'
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
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'tag',
            desc: '打标内容',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            viewId: this.id,
            options
        });
    },
    'changeTab<change>'(e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.set({
            selectedId: e.value
        }).digest()
    }
});