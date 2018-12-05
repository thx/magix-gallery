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
                key: 'ids',
                desc: '当前选中的所有标签的value值',
                type: 'array[string]'
            }]
        }, {
            type: 'focusin',
            desc: '组件获取焦点时触发',
            params: [{
                key: '-',
                desc: '-',
                type: '-'
            }]
        }, {
            type: 'focusout',
            desc: '组件失去焦点时触发',
            params: [{
                key: '-',
                desc: '-',
                type: '-'
            }]
        }]

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});