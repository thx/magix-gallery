let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@multiple.html',
    render() {
        let options = [{
            key: 'list',
            desc: '列表数组<br/>可为简单数组或[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string | array',
            def: '选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
        }, {
            key: 'trigger-type',
            desc: '浮层唤起方式，可选值：<br/>点击（click）<br/>鼠标悬浮展开（hover）',
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
            key: 'min',
            desc: '选择个数下限，min > 0时，点击确定时若len < min，不允许提交',
            type: 'number',
            def: ''
        }, {
            key: 'max',
            desc: '选择个数上限，len >= max时不允许再选择',
            type: 'number',
            def: ''
        }, {
            key: 'submit-checker',
            desc: '自定义提交校验函数',
            type: 'function',
            def: `<pre>
(selected) => {
    // selected 当前选中值
    return new Promise(resolve => {
        // 错误提示信息，无错误信息才继续提交
        let errorMsg = '';
        resolve(errorMsg);
    })
}
</pre>`
        }, {
            key: 'searchbox',
            desc: '是否开启搜索框',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'need-all',
            desc: '多选下拉框是否需要全选功能，默认true',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'height',
            desc: '下拉框最大高度',
            type: 'number',
            def: '400'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'name',
            desc: '全选时候的提示文案，比如“全部XX”',
            type: 'string',
            def: ''
        }, {
            key: 'empty-text',
            desc: '没有选择时的提示文案',
            type: 'string',
            def: ''
        }, {
            key: 'placement',
            desc: '可选内容展示方向，bottom（下方），top（上方）',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'continuous',
            desc: '是否要求选择连续的数据<br/>continuous = true时，点击确定时若选择不是连续数据，不允许提交<br/>提示请选择连续的(${name} || 数据)',
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
                key: 'values',
                desc: '当前选中value',
                type: 'array'
            }, {
                key: 'texts',
                desc: '当前选中text，顺序同values',
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