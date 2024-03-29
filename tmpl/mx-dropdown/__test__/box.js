let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@box.html',
    render() {
        let options = [{
            key: 'mode',
            desc: '显示模式，可选值：<br/>single：单选<br/>multiple：多选<br/>combine：单选多选混合',
            type: 'string',
            def: 'single'
        }, {
            key: 'list',
            desc: `<pre>[{
    value: 'value值',
    text: '显示文案',
    multiple: true or false，默认false，mode=combine下多选项的配置
    disabled: false,
    disabledTip: '禁用提示信息',
    tag: '打标',
    color: '打标颜色',
    tip: '小问号提示信息',
    detail: '底部单独显示的提示文案'
}]</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: '必选，对应value',
    name: '必选，对应text',
    description: '对应tip',
    properties: {
        tag: '对应list的tag',
        tagColor: '对应list的color',
        multiple: '对应list的multiple'
        disabled: '对应list的disabled'
        disabledTip: '对应list的disabledTip'
        tip: '对应list的detail'
    }
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string | array',
            def: '选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
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
            key: 'min-width',
            desc: '单个选项最小宽度',
            type: 'number',
            def: 'var(--font-size) * 8'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: '点击下拉框中“确定”按钮时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value值，初始化selected是数组则返回数组，否则为逗号分隔',
                type: 'array or string'
            }, {
                key: 'items',
                desc: '当前选中的数据完整对象',
                type: 'array'
            }, {
                key: 'values',
                desc: '当前选中所有value的数组',
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