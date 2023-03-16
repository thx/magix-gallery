import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@icon.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
指标数组，格式如下：
[{
    default: '是否默认选择'
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
            key: 'selected',
            desc: '当前选中值',
            type: 'string | array',
            def: '选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
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
            def: 'true'
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
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构代替传入list + parents + selected，数据格式如下：
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
        }];

        let events = [{
            type: 'change',
            desc: '指标有变化时触发，<br/>包括切换自定义和默认指标',
            params: [{
                key: 'selected',
                desc: '当前选中值，初始化为什么类型就保持什么类型，默认string',
                type: 'string | array'
            }, {
                key: 'items',
                desc: '当前选中值完整对象数组',
                type: 'array'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events,
        });
    }
});
