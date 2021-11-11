let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@anchor.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value: "对应区块的id",
    text: "导航上显示的文案",
    tag: "打标标签",
    color: '打标自定义颜色，默认红色，禁选时灰色',
    tip:"提示信息"
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中的导航项',
            type: 'string',
            def: '不传默认取list第一个'
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
            key: 'anchor-width',
            desc: '锚点导航宽度',
            type: 'number',
            def: 'window.width'
        }, {
            key: 'anchor-right-view',
            desc: '锚点导航右侧自定义view地址',
            type: 'viewpath',
            def: ''
        }]

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
            events
        });
    }
});