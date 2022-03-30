let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>列表数组
1. 简单数组[1,2,3]
2. 对象数组，如[{
    value:1,
    text: "a",
    tip: "选项提示信息", 
    disabled: true/false,  //该选项是否禁用
    disabledTip: '禁用原因，没有可不配',
    pValue: '', //可选个，父节点value值
    opers: ['edit', 'delete'], // 支持操作项的下拉框
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string|array',
            def: '单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
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
            key: 'parents',
            desc: `<pre>
分组数组，格式如下：
[{
    text: '组文案',
    value: '分组值，对应list的pValue'
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'parent-key',
            desc: '表示父节点value的字段',
            type: 'string',
            def: 'pValue'
        }, {
            key: 'dynamic-list',
            desc: '是否为动态选择列表',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'items',
            desc: '动态选择时，历史选中不一定在可选列表中，输入完整历史选中对象，<br>格式：[{value:1,text:"a"}]，同时配置了items和selected，以items为准',
            type: 'array[object]',
            def: '[]'
        }, {
            key: 'need-all',
            desc: '多选下拉框是否需要全选功能，默认true',
            type: 'boolean',
            def: 'true',
        }, {
            key: 'need-group',
            desc: '多选下拉框是否需要分组全选功能，默认false',
            type: 'boolean',
            def: 'false',
        }, {
            key: 'placeholder',
            desc: '空状态提示文案',
            type: 'string',
            def: '请输入'
        }, {
            key: 'empty-text',
            desc: '没有选择时的提示文案，当没有选中项时显示该文案',
            type: 'string',
            def: ''
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'min',
            desc: '选择个数下限，min > 0时，点击确定时若len < min，不允许提交',
            type: 'number',
            def: '',
        }, {
            key: 'max',
            desc: '选择个数上限，len >= max时不允许再选择',
            type: 'number',
            def: '',
        }, {
            key: 'over',
            desc: '数据量超过20个时，是否一行显示4个，默认true，若希望一行显示一个指定over=false即可',
            type: 'boolean',
            def: 'true',
        }];

        let events = [{
            type: 'show',
            desc: '出现提示框的时候触发，常用于动态更新可选项',
            params: [{
                key: 'keyword',
                desc: '当前输入的关键词',
                type: 'string'
            }]
        }, {
            type: 'change',
            desc: '选中值改变时触发',
            params: [{
                key: 'selected',
                desc: '当前选中值，初始化为什么类型就保持什么类型，默认string',
                type: 'string|array'
            }, {
                key: 'items',
                desc: '当前选中完整对象',
                type: 'array'
            }, {
                key: 'values',
                desc: '当前选中value数组',
                type: 'array'
            }, {
                key: 'texts',
                desc: '当前选中text数组',
                type: 'array'
            }]
        }];

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});