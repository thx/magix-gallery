let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'state',
            desc: '当前状态是开还是关，默认关闭',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'loading',
            desc: '是否loading，loading时禁用',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'tip',
            desc: '禁止操作时的补充说明',
            type: 'string',
            def: ''
        }, {
            key: 'value-map',
            desc: `<pre>自定义value映射对象：
{
    true: xx,
    false: xx
}</pre>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'border-radius',
            desc: '自定义圆角，4px 或者 50% 均可',
            type: 'string',
            def: ''
        }, {
            key: 'icon',
            desc: '提示文案',
            type: 'string',
            def: `<pre>组件内提供一些保留字：
icon=text：显示开关
icon=hook：显示钩叉
icon=其他值：原样显示</pre>`
        }, {
            key: 'confirm-to-true',
            desc: `<pre>从false切换为true的二次确认
{
    title: '标题',
    content: '提示内容'
}</pre>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'confirm-to-false',
            desc: `<pre>从true切换为false的二次确认
{
    title: '标题',
    content: '提示内容'
}</pre>`,
            type: 'object',
            def: '{}'
        }]

        let events = [{
            type: 'change',
            desc: '切换开关时触发',
            params: [{
                key: 'state',
                desc: '当前是开或者关',
                type: 'boolean'
            }]
        }]

        this.updater.digest({
            options,
            events,
            viewId: this.id
        });
    }
});