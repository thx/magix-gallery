let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@box.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value: 1,
    text: '选项1',
    tag: '打标标签',
    color: '打标自定义颜色，默认红色，禁用时灰色',
    tip: '提示信息',
    img: '竖版右侧图片，正方形',
    disabled: false // 当前选项禁用
    disabledTip: '禁用原因' // disabled = true时显示，当前选项禁用提示信息
}]</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: "对应value",
    name: "对应text",
    description: "提示信息，对应tip",
    properties: {
        disabled: "是否禁用",
        tag: "打标",
        tagColor: "打标颜色",
    }
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
            type: 'boolean',
            def: 'false'
        }, {
            key: 'mode',
            desc: `样式版本：<br/>
阴影版（mode=shadow）<br/>
分割线（mode=spliter）<br/>
离散点样式（mode=discrete）<br/>
竖版（mode=vertical）`,
            type: 'string',
            def: 'shadow'
        }, {
            key: 'size',
            desc: '展示尺寸<br/>small：小号<br/>normal：正常尺寸<br/>large：大号尺寸',
            type: 'string',
            def: 'normal'
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