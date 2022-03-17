let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'value',
            desc: '值',
            type: 'string',
            def: ''
        }, {
            key: 'placeholder',
            desc: '为空时控件中显示的内容',
            type: 'string',
            def: ''
        },
        // {
        //     key: 'type',
        //     desc: '类型可选值<br/>输入框：text<br/>密码：password',
        //     type: 'string',
        //     def: 'text'
        // }, {
        //     key: 'maxlength',
        //     desc: 'value 的最大长度',
        //     type: 'number',
        //     def: ''
        // }, 
        {
            key: 'width',
            desc: '宽度',
            type: 'number',
            def: ''
        }, {
            key: 'small',
            desc: '是否展示位小尺寸',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'search',
            desc: '是否带有搜索icon',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'show-delete',
            desc: '是否显示一键清除icon',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'autocomplete',
            desc: '同input的autocomplete定义，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input" target="_blank" class="color-brand">查看详情</a>',
            type: 'string',
            def: ''
        }];

        let events = [{
            type: 'change',
            desc: '输入框value变化，或者有类型筛选变化时触发',
            params: [{
                key: 'value',
                desc: '当前选中value',
                type: 'string'
            }]
        }, {
            type: 'clear',
            desc: '显示一键清空按钮时，清空输入框内容触发',
            params: [{
                key: 'value',
                desc: '当前value，空字符串',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events,
        });
    }
});