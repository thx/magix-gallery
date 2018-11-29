let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: '列表数组<br/>可为简单数组[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '未配置selected的时候<br/>配置了empty-text显示empty-text<br/>否则默认取list第一个显示'
        }, {
            key: 'trigger-type',
            desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
            type: 'string',
            def: 'click'
        }, {
            key: 'empty-text',
            desc: '空值',
            type: 'string',
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
            key: 'searchbox',
            desc: '是否开启搜索框',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'height',
            desc: '下拉框最大高度',
            type: 'number',
            def: '250'
        }, {
            key: 'name',
            desc: '下拉框名称，展示位name：selected',
            type: 'string',
            def: ''
        }, {
            key: 'mx-disabled',
            desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
            type: '',
            def: ''
        }, {
            key: 'placement',
            desc: '可选内容展示方向，bottom（下方），top（上方）',
            type: 'string',
            def: 'bottom'
        }, {
            key: 'keyword',
            desc: '搜索关键词',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'change',
            params: [{
                key: 'value',
                desc: '当前选中value',
                type: 'string'
            }, {
                key: 'text',
                desc: '当前选中text',
                type: 'string'
            }, {
                key: 'item',
                desc: '当前选中完整对象',
                type: 'object'
            }, {
                key: 'selected',
                desc: '当前选中value，同value',
                type: 'string'
            }, {
                key: 'keyword',
                desc: '当前搜索关键词',
                type: 'string'
            }]
        }]
        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});