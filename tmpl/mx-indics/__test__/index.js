let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'fields',
            desc: `<pre>
指标数组，格式如下：
[{
    text: '指标文案',
    value: '跟后台交互的指标字段',
    pValue: '可选，需要分组时配置parents对应的value', 
    tip: '指标提示文案',
    tag: '指标打标',
    disabled: '是否禁用'
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'parents',
            desc: `<pre>
分组数组，格式如下：
[{
    text: '组文案',
    value: '分组值，对应fields的pValue'
}]
</pre>`,
            type: 'array',
            def: ''
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
            key: 'parent-key',
            desc: '表示父节点value的字段',
            type: 'string',
            def: 'pValue'
        }, {
            key: 'custom',
            desc: '当前是否为自定义指标，false（默认指标），true（自定义指标）<br/>可能存在customs=defaults的情况，因此需要明确指定当前是自定义还是默认',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'customs',
            desc: '自定义指标value值的数组，例如["cost"]<br/>为[]的时候，默认=defaults，确保每次切换都有选中的指标',
            type: 'array',
            def: ''
        }, {
            key: 'defaults',
            desc: '默认指标value值的数组，必填',
            type: 'array',
            def: ''
        }, {
            key: 'max',
            desc: '指标选中上限，不传不限制选择个数',
            type: 'number',
            def: ''
        }, {
            key: 'min',
            desc: '指标选中下限',
            type: 'number',
            def: 1
        }, {
            key: 'line-number',
            desc: '每行展现指标个数',
            type: 'number',
            def: '可排序：默认每行4个<br/>不可排序：默认每行5个'
        }, {
            key: 'sortable',
            desc: '是否需要排序',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'sortable-group',
            desc: 'sortable=true且包含分组时，是否仅支持分组情况下可排序',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'tip',
            desc: '浮层内标题旁提示文案',
            type: 'string',
            def: ''
        }, {
            key: 'mode',
            desc: `<pre>组件使用模式
1. mode=all：支持自定义和默认值切换
2. mode=custom：只支持自定义
    display=icon：展示为icon，默认样式
    display=text：展示为文字链样式，可配置display-text展示文案
    display=flat：指标平铺展示，可配置display-text展示文案
</pre>`,
            type: 'string',
            def: 'all'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构代替传入fields + parents + defaults，数据格式如下：
[{
    code: "对应value",
    name: "对应text",
    description: "提示信息，对应tip",
    properties: {
        disabled: "是否禁用",
        tag: "打标",
        parent: "基础指标", // 所属父组名称
        unit: "元", // 单位
    }
}]</pre>`,
            type: 'array'
        }]

        let events = [{
            type: 'change',
            desc: '指标有变化时触发，<br/>包括切换自定义和默认指标',
            params: [{
                key: 'triggerType',
                desc: '触发类型：<br/>btn-switch（快捷切换自定义和默认）<br/>dialog-setting（开浮层编辑自定义指标）',
                type: 'string'
            }, {
                key: 'defaults',
                desc: '默认指标，固定值',
                type: 'array'
            }, {
                key: 'custom',
                desc: '是否是自定义',
                type: 'boolean'
            }, {
                key: 'customs',
                desc: '自定义指标',
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
