let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@bd.html',
    init() {
        this.updater.set({
            isSingle: true,
        })
    },
    render() {
        let options = [{
            key: 'multiple',
            desc: '是否为多选',
            type: 'boolean',
            def: 'false',
            isMulti: true
        }, {
            key: 'need-all',
            desc: '多选下拉框是否需要全选功能，默认true',
            type: 'boolean',
            def: 'true',
            isMulti: true
        }, {
            key: 'need-group',
            desc: '多选下拉框是否需要分组全选功能，默认false',
            type: 'boolean',
            def: 'false',
            isMulti: true
        }, {
            key: 'list',
            desc: `<pre>列表数组
1. 简单数组[1,2,3]
2. 对象数组，如[{
    value:1,
    text: "a",
    tip: "选项提示信息", 
    tag: "打标",
    tagTip: "打标提示信息",
    disabled: true/false,  //该选项是否禁用
    disabledTip: '禁用原因，没有可不配',
    pValue: '', // 可选，父节点value值
    opers: ['edit', 'delete'], // 支持操作项的下拉框
}]</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: "对应value",
    name: "对应text",
    description: "对应tip",
    properties: {
        tag: "打标",
        tagTip: "打标提示信息",
        disabled: "是否禁用",
        disabledTip: "禁用原因",
        parentCode: "父节点code",
        oper: ['edit', 'delete'], // 支持操作项的下拉框
        alias: '缩略文案'
    }
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string | array',
            def: '单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
        }, {
            key: 'trigger-type',
            desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
            type: 'string',
            def: 'click'
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
            key: 'searchbox',
            desc: '是否开启搜索框',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'height',
            desc: '下拉框最大高度',
            type: 'number',
            def: '280'
        }, {
            key: 'empty-text',
            desc: '没有选择时的提示文案<br/>单选：配置该值时，会对应添加一个value=\'\'的选项<br/>多选：当没有选中项时显示该文案',
            type: 'string',
            def: ''
        }, {
            key: 'all-text',
            desc: '选中全部节点的缩略文案',
            type: 'string',
            def: '',
            isMulti: true,
        }, {
            key: 'name',
            desc: '下拉框名称，展示为name：selected',
            type: 'string',
            def: ''
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'pagination',
            desc: `<pre>翻页器配置，可配参数定义详情可参见<a href="#!/pagination/index?highlightId=mx_12_api" class="color-brand">mx-pagination</a>
pagination={
    total,
    page,
    offset,
    size
}</pre>`,
            type: 'object',
            def: '{}',
            isSingle: true,
        }, {
            key: 'mode',
            desc: '显示模式，可选值：<br/>white：反白模式<br/>transparent-highlight：反白品牌色强调模式',
            type: 'string',
            def: '',
            isSingle: true,
        }, {
            key: 'mode',
            desc: '显示模式，可选值：<br/>white：反白模式<br/>transparent-highlight：反白品牌色强调模式<br/>text：纯文案<br/>tag：可操作标签',
            type: 'string',
            def: 'text',
            isMulti: true,
        }, {
            key: 'submit-checker',
            type: 'function',
            desc: `<pre>自定义提交校验函数
(selected) => {
    // selected 当前选中值
    return new Promise(resolve => {
        // 错误提示信息，无错误信息才继续提交
        let errorMsg = '';
        resolve(errorMsg);
    })
}
</pre>`,
            isMulti: true,
        }, {
            key: 'min',
            desc: '选择个数下限，min > 0时，点击确定时若len < min，不允许提交',
            type: 'number',
            def: '',
            isMulti: true,
        }, {
            key: 'max',
            desc: '选择个数上限，len >= max时不允许再选择',
            type: 'number',
            def: '',
            isMulti: true,
        }, {
            key: 'continuous',
            desc: '是否要求选择连续的数据<br/>continuous = true时，点击确定时若选择不是连续数据，不允许提交<br/>提示请选择连续的(${name} || 数据)',
            type: 'boolean',
            def: 'false',
            isMulti: true,
        }, {
            key: 'size',
            desc: '展示尺寸<br/>small：小号<br/>normal：正常尺寸<br/>large：大号尺寸',
            type: 'string',
            def: 'normal'
        }, {
            key: 'over',
            desc: '数据量超过20个时，是否一行显示4个，默认true，若希望一行显示一个指定over=false即可',
            type: 'boolean',
            def: 'true',
            isMulti: true,
        }, {
            key: 'placement',
            desc: '可选内容展示方向，bottom（下方），top（上方）',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'keyword',
            desc: '搜索关键词，需要保留搜素场景时可传入',
            type: 'string',
            def: ''
        }, {
            key: 'tip',
            desc: '额外的提示信息',
            type: 'string',
            def: ''
        }];

        // 多选，单选参数区分
        let { isMulti, isSingle } = this.updater.get();
        for (let i = 0; i < options.length; i++) {
            if (options[i].isMulti && !isMulti) {
                options.splice(i--, 1);
            } else if (options[i].isSingle && !isSingle) {
                options.splice(i--, 1);
            };
        }

        let events = [{
            type: 'change',
            desc: '选中项改变时触发',
            params: [{
                key: 'values',
                desc: '当前选中value数组',
                type: 'array'
            }, {
                key: 'texts',
                desc: '当前选中text数组',
                type: 'array'
            }, {
                key: 'value',
                desc: '当前选中value值，等于values.join(",")',
                type: 'string'
            }, {
                key: 'text',
                desc: '当前选中text值，等于texts.join(",")',
                type: 'string'
            }, {
                key: 'selected',
                desc: '当前选中值，初始化为什么类型就保持什么类型，默认string',
                type: 'string | array'
            }, {
                key: 'selectedObj',
                desc: `<pre>双向绑定时，数据对象回显

例如入参为
selected="{{:test}}"

则返回
selectedObj={ 
    test: 'value' 
}</pre>`,
                type: 'object'
            }, isMulti ? {
                key: 'items',
                desc: '当前选中值完整对象数组',
                type: 'array'
            } : {
                key: 'item',
                desc: '当前选中值完整对象',
                type: 'object'
            }, {
                key: 'operationType',
                desc: '当选项包含操作项时，返回的操作项类型，当前支持的类型 edit || delete',
                type: 'string'
            }, {
                key: 'operationItem',
                desc: '当选项包含操作项时，返回的当前操作项。<br/>如果为编辑，则为编辑的对象（当前选中 = 当前编辑）；<br/>如果为移除，则为被移除的对象（当前选中 != 当前编辑）；',
                type: 'object'
            }]
        }, {
            type: 'search',
            desc: '配置dynamic-search=true时，搜索关键词变化触发',
            params: [{
                key: 'keyword',
                desc: '当前搜索关键词',
                type: 'string'
            }, {
                key: 'sizzleId',
                desc: '当前展开下拉框id，方便加loading',
                type: ''
            }]
        }, {
            type: 'focusin',
            desc: '浮层打开时触发',
        }, {
            type: 'focusout',
            desc: '浮层关闭时触发',
        }];

        if (isSingle) {
            events.push({
                type: 'pagechange',
                desc: '配置pagination时，切换翻页触发',
                params: [{
                    key: 'page',
                    desc: '当前页码',
                    type: 'number'
                }, {
                    key: 'size',
                    desc: '每页条数',
                    type: 'number'
                }, {
                    key: 'offset',
                    desc: '偏移量：offset = (page - 1) * size',
                    type: 'number'
                }]
            })
        }
        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});