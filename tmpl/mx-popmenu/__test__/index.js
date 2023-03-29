let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let options = [{
            key: 'list',
            desc: `<pre>菜单选项，格式如下：
[{
    text: "菜单选项文案",
    value: "菜单选项值",
    tag: "打标",
    tagTip: "打标提示信息",
}]
</pre>`,
            type: 'array'
        }, {
            key: 'adc-list',
            desc: `<pre>联动adc，直接传入adc组件树结构即可，数据格式如下：
[{
    code: 对应value,
    name: 对应text,
    properties: {
        tag: "打标",
        tagTip: "打标提示信息",
    }
}]</pre>`,
            type: 'array'
        }, {
            key: 'width',
            desc: '下拉菜单宽度',
            type: 'number',
            def: '自适应'
        }, {
            key: 'trigger-type',
            desc: '菜单唤起方式，可选点击（click），鼠标悬浮展开（hover）',
            type: 'string',
            def: 'hover'
        }, {
            key: 'place',
            desc: [
                '提示框在目标的方位',
                'lt：左上对齐 ',
                'lc：左中对齐 ',
                'lb：左下对齐 ',
                'tl：上左对齐 ',
                'tc：上中对齐 ',
                'tr：上右对齐 ',
                'bl：下左对齐 ',
                'bc：下中对齐 ',
                'br：下右对齐 ',
                'rt：右上对齐 ',
                'rc：右中对齐 ',
                'rb：右下对齐 '
            ].join('<br>'),
            type: 'string',
            def: 'bc'
        }, {
            key: 'mode',
            desc: '配置content使用按钮样式时，对应的按钮模式<br/>primary：主要品牌按钮<br/>secondary：次要跟随按钮（默认）<br/>white：白色<br/>hollow：空心按钮<br/>primary-error：主要品牌按钮红色警告场景<br/>secondary-error：次要跟随按钮红色警告场景<br/>white-error：白色按钮红色警告场景<br/>hollow-error：空心按钮红色警告场景',
            type: 'string',
            def: 'secondary'
        }, {
            key: 'tag-content',
            desc: '配置content使用按钮样式时，按钮打标文案',
            type: 'string',
            def: ''
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
        }]

        let events = [{
            type: 'change',
            desc: '选中某个菜单选项时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value值',
                type: 'string'
            }, {
                key: 'item',
                desc: '当前选中值完整对象',
                type: 'object'
            }]
        }]

        that.updater.digest({
            viewId: that.id,
            options,
            events
        });
    }
});