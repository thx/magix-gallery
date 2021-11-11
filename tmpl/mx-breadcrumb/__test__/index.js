let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>数据列表
{
    text: "展示文案",
    value: "id",
    link: "直接跳转的链接"
} </pre>`,
            type: 'object',
            def: '[]'
        }, {
            key: 'selected',
            desc: '已选中的value值',
            type: 'string',
            def: ''
        }, {
            key: 'value-key',
            desc: 'value取值字段',
            type: 'string',
            def: 'value'
        }, {
            key: 'text-key',
            desc: 'text取值字段',
            type: 'string',
            def: 'text'
        }, {
            key: 'link-key',
            desc: 'link取值字段',
            type: 'string',
            def: 'link'
        }, {
            key: 'show-home-icon',
            desc: '是否显示第一个选项的icon',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'home-icon',
            desc: '第一个选项的icon',
            type: 'html',
            def: '<i class="mc-iconfont">&#xe624;</i>'
        }, {
            key: 'gap-icon',
            desc: '间隔icon',
            type: 'html',
            def: '<i class="mc-iconfont">&#xe602;</i>'
        }];

        let events = [{
            type: 'change',
            desc: '切换tab时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value，同value',
                type: 'string'
            }, {
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
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events,
        });
    }
});