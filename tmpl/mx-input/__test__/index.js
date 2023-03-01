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
            key: 'prefix',
            desc: '输入框前缀，前缀仅做内容类型表意提示，无交互行为，组件提供一些默认预留字<br/>search：搜索框<br/>money：金额输入<br/>user：用户输入<br/>其余内容：原样输出',
            type: 'string',
            def: ''
        }, {
            key: 'suffix',
            desc: '输入框后缀，后缀可放置一些有交互行为的操作icon，或者纯提示类的语义表达<br/>组件提供一些默认预留字<br/>search：强调搜索框<br/>delete：一键移除，操作点<br/>password：密码框，可操作切换是否显示<br/>其余情况：原样输出，纯展示',
            type: 'string',
            def: ''
        }, {
            key: 'size',
            desc: '展示尺寸<br/>small：小号<br/>normal：正常尺寸<br/>large：大号尺寸',
            type: 'string',
            def: 'normal'
        }, {
            key: 'search-list',
            desc: `<pre>搜索类型列表
{
    text: "类型",
    value: "类型value",
} </pre>`,
            type: 'object',
            def: '[]'
        }, {
            key: 'search-value',
            desc: '当前选中搜索类型',
            type: 'string',
            def: 'search-list[0].value'
        }, {
            key: 'search-width',
            desc: '搜索框宽度，默认预留两个字符宽度，可配置 100px 或者 50%',
            type: 'string',
            def: '两个字符宽度'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'maxlength',
            desc: 'value 的最大长度',
            type: 'number',
            def: ''
        }, {
            key: 'placeholder',
            desc: '为空时控件中显示的内容',
            type: 'string',
            def: ''
        }, {
            key: 'autocomplete',
            desc: '同input的autocomplete定义，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input" target="_blank" class="color-brand">查看详情</a>',
            type: 'string',
            def: ''
        }, {
            key: 'mode',
            desc: '展示模式，配置mode="white"时显示反白模式',
            type: 'string',
            def: ''
        }];

        let events = [{
            type: 'change',
            desc: '输入框value变化，或者有类型筛选变化时触发',
        }, {
            type: 'focusout',
            desc: '输入框失去焦点时触发',
        }, {
            type: 'search',
            desc: '强调搜索框点击搜索按钮时触发',
        }, {
            type: 'clear',
            desc: '显示一键清空按钮时，清空输入框内容触发',
        }];
        events.forEach(e => {
            Magix.mix(e, {
                params: [{
                    key: 'value',
                    desc: '当前选中value',
                    type: 'string'
                }, {
                    key: 'searchValue',
                    desc: '多类型输入下，当前选中类型value',
                    type: 'string'
                }, {
                    key: 'selectedObj',
                    desc: `<pre>双向绑定时，数据对象回显
    
例如入参为
value="{{:value1}}"
search-value="{{:value2}}"

则返回
selectedObj={ 
    value1: 'xx',
    value2: 'xx',
}</pre>`,
                    type: 'object'
                }]
            })
        })

        this.updater.digest({
            viewId: this.id,
            options,
            events,
        });
    }
});