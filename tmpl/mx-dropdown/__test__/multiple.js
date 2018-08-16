let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@multiple.html',
    render() {
        let options = [{
            key: 'list',
            desc: '列表数组，可为简单数组或[1,2,3]或对象数组，如[{id:1,text:"a"}]',
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '选中值，支持：<br>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br>不传默认为空'
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
            key: 'mx-disabled',
            desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
            type: '',
            def: ''
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
        },]
        this.updater.digest({
            options
        });
    }
});