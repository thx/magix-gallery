import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@icon.html',
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
        }];

//         let options = [{
//             key: 'multiple',
//             desc: '是否为多选',
//             type: 'boolean',
//             def: 'false',
//             isMulti: true
//         }, {
//             key: 'need-all',
//             desc: '多选下拉框是否需要全选功能，默认true',
//             type: 'boolean',
//             def: 'true',
//             isMulti: true
//         }, {
//             key: 'need-group',
//             desc: '多选下拉框是否需要分组全选功能，默认false',
//             type: 'boolean',
//             def: 'false',
//             isMulti: true
//         }, {
//             key: 'list',
//             desc: `<pre>列表数组
// 1. 简单数组[1,2,3]
// 2. 对象数组，如[{
//     value:1,
//     text: "a",
//     tip: "选项提示信息", 
//     tag: "打标",
//     tagTip: "打标提示信息",
//     disabled: true/false,  //该选项是否禁用
//     disabledTip: '禁用原因，没有可不配',
//     pValue: '', // 可选，父节点value值
//     opers: ['edit', 'delete'], // 支持操作项的下拉框
// }]</pre>`,
//             type: 'array'
//         }, {
//             key: 'adc-list',
//             desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
// [{
//     code: "对应value",
//     name: "对应text",
//     description: "对应tip",
//     properties: {
//         tag: "打标",
//         tagTip: "打标提示信息",
//         disabled: "是否禁用",
//         disabledTip: "禁用原因",
//         parentCode: "父节点code",
//         oper: ['edit', 'delete'], // 支持操作项的下拉框
//     }
// }]</pre>`,
//             type: 'array'
//         }, {
//             key: 'selected',
//             desc: '当前选中值',
//             type: 'string | array',
//             def: '单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
//         }, {
//             key: 'trigger-type',
//             desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
//             type: 'string',
//             def: 'click'
//         }, {
//             key: 'text-key',
//             desc: '渲染text时读取的key',
//             type: 'string',
//             def: 'text'
//         }, {
//             key: 'value-key',
//             desc: '渲染value时读取的key',
//             type: 'string',
//             def: 'value'
//         }, {
//             key: 'parents',
//             desc: `<pre>
// 分组数组，格式如下：
// [{
//     text: '组文案',
//     value: '分组值，对应list的pValue'
// }]
// </pre>`,
//             type: 'array',
//             def: ''
//         }, {
//             key: 'parent-key',
//             desc: '表示父节点value的字段',
//             type: 'string',
//             def: 'pValue'
//         }, {
//             key: 'searchbox',
//             desc: '是否开启搜索框',
//             type: 'boolean',
//             def: 'false'
//         }, {
//             key: 'height',
//             desc: '下拉框最大高度',
//             type: 'number',
//             def: '280'
//         }, {
//             key: 'empty-text',
//             desc: '没有选择时的提示文案<br/>单选：配置该值时，会对应添加一个value=\'\'的选项<br/>多选：当没有选中项时显示该文案',
//             type: 'string',
//             def: ''
//         }, {
//             key: 'name',
//             desc: '下拉框名称，展示为name：selected',
//             type: 'string',
//             def: ''
//         }, {
//             key: 'disabled',
//             desc: '是否禁用',
//             type: 'boolean',
//             def: 'false'
//         }, {
//             key: 'pagination',
//             desc: `<pre>翻页器配置，可配参数定义详情可参见<a href="#!/pagination/index?highlightId=mx_12_api" class="color-brand">mx-pagination</a>
// pagination={
//     total,
//     page,
//     offset,
//     size
// }</pre>`,
//             type: 'object',
//             def: '{}',
//             isSingle: true,
//         }, {
//             key: 'mode',
//             desc: '显示模式，可选值：<br/>text：纯文案<br/>tag：可操作标签',
//             type: 'string',
//             def: 'text',
//             isMulti: true,
//         }, {
//             key: 'submit-checker',
//             type: 'function',
//             desc: `<pre>自定义提交校验函数
// (selected) => {
//     // selected 当前选中值
//     return new Promise(resolve => {
//         // 错误提示信息，无错误信息才继续提交
//         let errorMsg = '';
//         resolve(errorMsg);
//     })
// }
// </pre>`,
//             isMulti: true,
//         }, {
//             key: 'min',
//             desc: '选择个数下限，min > 0时，点击确定时若len < min，不允许提交',
//             type: 'number',
//             def: '',
//             isMulti: true,
//         }, {
//             key: 'max',
//             desc: '选择个数上限，len >= max时不允许再选择',
//             type: 'number',
//             def: '',
//             isMulti: true,
//         }, {
//             key: 'continuous',
//             desc: '是否要求选择连续的数据<br/>continuous = true时，点击确定时若选择不是连续数据，不允许提交<br/>提示请选择连续的(${name} || 数据)',
//             type: 'boolean',
//             def: 'false',
//             isMulti: true,
//         }, {
//             key: 'size',
//             desc: '展示尺寸<br/>small：小号<br/>normal：正常尺寸<br/>large：大号尺寸',
//             type: 'string',
//             def: 'normal'
//         }, {
//             key: 'over',
//             desc: '数据量超过20个时，是否一行显示4个，默认true，若希望一行显示一个指定over=false即可',
//             type: 'boolean',
//             def: 'true',
//             isMulti: true,
//         }, {
//             key: 'placement',
//             desc: '可选内容展示方向，bottom（下方），top（上方）',
//             type: 'string',
//             def: 'bottom'
//         }, {
//             key: 'tip',
//             desc: '额外的提示信息',
//             type: 'string',
//             def: ''
//         }];

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
