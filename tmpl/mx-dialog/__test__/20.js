let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@20.html',
    render() {
        // {
        //     text: 'xsmall',
        //     value: 368,
        // }
        this.updater.digest({
            list: [{
                text: 'xlarge',
                value: 1248,
            }, {
                text: 'large',
                value: 1008,
            }, {
                text: 'normal',
                value: 768,
            }, {
                text: 'small',
                value: 528,
            }]
        });
    },
    'open<click>'(e) {
        let item = e.params.item;
        this.mxModal('@./demo5', {
            content: `当前浮层ladder.width = '${item.text}'，宽度${item.value}px`,
        }, {
            ladder: {
                width: item.text,
            },
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
        });
    }
});