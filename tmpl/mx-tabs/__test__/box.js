let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@box.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value:1,
    text: '选项1',
    tag: '打标标签',
    color: '打标自定义颜色，默认红色，禁选时灰色',
    tips: '提示信息',
    img: '竖版右侧图片，正方形'
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
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
            key: 'disabled',
            desc: '是否禁用',
            type: '',
            def: 'false'
        }, {
            key: 'mode',
            desc: `样式版本：<br/>
空心（mode=hollow）<br/>
可选实心（mode=solid）<br/>
分割线（mode=spliter）<br/>
竖版（mode=vertical）`,
            type: 'string',
            def: 'hollow'
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