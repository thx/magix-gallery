let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'value',
            desc: '值',
            type: 'string',
            def: ''
        }, {
            key: 'type',
            desc: '类型可选值<br/>输入框：text<br/>，密码：password',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'placeholder',
            desc: '为空时控件中显示的内容',
            type: 'string',
            def: ''
        }, {
            key: 'maxlength',
            desc: 'value 的最大长度',
            type: 'number',
            def: ''
        }, {
            key: 'width',
            desc: '宽度',
            type: 'number',
            def: ''
        }, {
            key: 'small',
            desc: '小尺寸',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'autocomplete',
            desc: '同input的autocomplete定义，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input" target="_blank" class="color-brand">查看详情</a>',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '选择项发生变化时触发',
            params: [{
                key: 'selected',
                desc: '当前选中项完整对象',
                type: 'array'
            }, {
                key: 'values',
                desc: '当前选中项的id',
                type: 'array'
            }]
        }, {
            type: 'clear',
            desc: '选择项发生变化时触发',
            params: [{
                key: 'selected',
                desc: '当前选中项完整对象',
                type: 'array'
            }, {
                key: 'values',
                desc: '当前选中项的id',
                type: 'array'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});