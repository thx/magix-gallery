let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@pipeline.html',
    render() {
        let options1 = [{
            key: 'list',
            desc: `<pre>
list = [{
    title: '第一行描述信息',
    subTitle: '第二行描述信息',
    tip: '标题旁小问号提示',
    icon: '标题旁小图标',
    startTime, '时间区间开始时间',
    endTime: '时间区间结束时间'
}]
</pre>`,
            type: 'array',
            def: '数据格式'
        }, {
            key: 'selected',
            desc: '当前一级菜单选中项',
            type: 'number',
            def: '选中态的index索引，0开始'
        }, {
            key: 'selected-sub',
            desc: '当前二级菜单选中项',
            type: 'number',
            def: '选中态的index索引，0开始'
        }, {
            key: 'img',
            desc: '图片地址',
            type: 'string',
            def: ''
        }, {
            key: 'color',
            desc: '主色',
            type: 'string',
            def: '#FF0036'
        }];

        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value: 1,
    text: '选项1',
    icon: '打标图片地址',
    iconTip: '标题旁小问题提示',
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