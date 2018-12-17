let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: '列表数组<br>支持简单数组如[1,2,3]<br>支持对象数组，如[{value:1,text:"a"}]，可自定义text-key和value-key',
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值，多个值逗号分隔',
            type: 'string',
            def: ''
        }, {
            key: 'items',
            desc: '当前选中对象，<br>格式：[{value:1,text:"a"}]，同时配置了items和selected，以items为准',
            type: 'array[object]',
            def: '[]'
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
            key: 'placeholder',
            desc: '空状态提示文案',
            type: 'string',
            def: '请选择'
        }, {
            key: 'dynamic-list',
            desc: '动态单个选择',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mx-disabled',
            desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-taginput mx-disabled&gt;&lt;/mx-taginput&gt;',
            type: '',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '选择某个标签或者删除某个标签时触发',
            params: [{
                key: 'items',
                desc: '当前选中的所有标签完成对象',
                type: 'array[object]'
            }, {
                key: 'selected',
                desc: '当前选中的所有标签的value值，逗号分隔',
                type: 'string'
            }]
        }, {
            type: 'show',
            desc: '出现提示框的时候触发，常用于动态更新可选项',
            params: [{
                key: 'keyword',
                desc: '当前输入的关键词',
                type: 'string'
            }]
        }]

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});