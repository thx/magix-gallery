let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;
        let options = [{
            key: 'content',
            desc: '提示内容 ',
            type: 'string'
        }, {
            key: 'width',
            desc: '提示框宽度',
            type: 'number',
            def: 200
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
            key: 'align-text',
            desc: '文字对齐方式，left，right，center',
            type: 'string',
            def: 'left'
        }]

        let events = [{
            type: 'popconfirm',
            desc: '点击确认按钮时触发',
            params: [{
                key: '-',
                desc: '-',
                type: '-'
            }]
        }]

        that.updater.digest({
            viewId: that.id,
            options,
            events
        });
    }
});