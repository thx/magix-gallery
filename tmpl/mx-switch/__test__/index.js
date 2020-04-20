let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

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
            type: '',
            def: 'false'
        }, {
            key: 'tip',
            desc: '禁止操作时的补充说明',
            type: 'string',
            def: ''
        }, {
            key: 'confirmToTrue',
            desc: `<pre>从false切换为true的二次确认
{
    title: '标题',
    content: '提示内容'
}</pre>`,
            type: 'object',
            def: '{}'
        }, {
            key: 'confirmToFalse',
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