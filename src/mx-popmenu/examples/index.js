let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let options = [{
            key: 'list',
            desc: `<pre>菜单选项，格式如下：
[{
    text: '菜单选项文案',
    value: '菜单选项值'
}]
</pre>`,
            type: 'array'
        }, {
            key: 'width',
            desc: '菜单宽度',
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
            key: 'scroll-wrapper',
            desc: '相对滚动父元素，支持格式#id，.class，id，$(node)',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '选中某个菜单选项时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value值',
                type: 'string'
            }]
        }]

        that.updater.digest({
            viewId: that.id,
            options,
            events
        });
    }
});