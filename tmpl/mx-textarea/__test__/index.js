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
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'cols',
            desc: '文本域的可视宽度，必须为正整数，同textarea的cols定义，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea" target="_blank" class="color-brand">查看详情</a>',
            type: 'number',
            def: '20'
        }, {
            key: 'rows',
            desc: '元素的输入文本的行数（显示的高度）同textarea的rows定义，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea" target="_blank" class="color-brand">查看详情</a>',
            type: 'number',
            def: '4'
        }, {
            key: 'minlength',
            desc: 'value 的最小长度',
            type: 'number',
            def: ''
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
            desc: '同textarea的autocomplete定义，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea" target="_blank" class="color-brand">查看详情</a>',
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
        }];
        events.forEach(e => {
            Magix.mix(e, {
                params: [{
                    key: 'value',
                    desc: '当前选中value',
                    type: 'string'
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