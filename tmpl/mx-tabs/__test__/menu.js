let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@menu.html',
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
        }];

        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
list = [{
    value: 1,
    text: '选项1',
    icon: '前面icon',
    tagContent: '打标html',
    tag: '打标文案',
    subs: [{
        value: 1,
        text: '选项1',
        tagContent: '打标html',
        tag: '打标文案',
    }]
}]</pre>`, type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: "对应value",
    name: "对应text",
    properties: {
        tag: "打标",
    },
    subComponentList: [{
        code: "对应value",
        name: "对应text",
        properties: {
            tag: "打标",
        },
    }]
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
            key: 'gap',
            desc: '收起状态下右位移',
            type: 'string',
            def: '8px'
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