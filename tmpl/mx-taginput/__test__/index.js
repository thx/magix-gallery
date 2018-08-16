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

        this.updater.digest({
            options
        });
    }
});