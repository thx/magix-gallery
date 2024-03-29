let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@step.html',
    render() {
        let options1 = [{
            key: 'list',
            desc: `<pre>
list = [{
    title: '主标题',
    subTitle: '子标题描述',
    tip: '标题旁小问号提示',
    icon: '自定义icon',
    error: '步骤是否异常',
    gap: '垂直间距，默认48'
}]
</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'selected',
            desc: '选中态的index索引，0开始，-1表示所有都为开始，> list.length 表示所有都选中',
            type: 'number',
            def: ''
        }, {
            key: 'show-finish',
            desc: '完成是否显示打钩',
            type: 'boolean',
            def: 'false'
        }];

        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value: 1,
    text: '选项1',
    icon: '自定义icon',
    iconTip: '标题旁小问号提示',
    tip: '提示信息',
    disabled: false  // 单选项禁用
}]</pre>`, type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: "对应value",
    name: "对应text",
    description: "提示信息，对应tip",
    properties: {
        disabled: "是否禁用",
        tag: '打标图片地址',
        tip: '标题旁小问号提示',
        highlight: '是否高亮'
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
            options1,
            options,
            events,
        });
    }
});