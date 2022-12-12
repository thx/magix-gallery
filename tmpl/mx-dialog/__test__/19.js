let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@19.html',
    render() {
        this.updater.digest({
            list: [{
                text: 'xlarge',
                value: 1200,
            }, {
                text: 'large',
                value: 960,
            }, {
                text: 'normal',
                value: 720,
            }, {
                text: 'small',
                value: 480,
            }, {
                text: 'xsmall',
                value: 320,
            }]
        });
    },
    'open<click>'(e) {
        let item = e.params.item;
        this.mxDialog('@./demo4', {
            content: `当前浮层ladder.width = '${item.text}'，宽度${item.value}px`,
        }, {
            height: 400,
            ladder: {
                width: item.text,
            },
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
            },
        });
    },
});