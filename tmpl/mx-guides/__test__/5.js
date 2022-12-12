let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            viewId: this.id,
        });
    },
    'open<click>'(e) {
        this.mxModal('@./6', {}, {
            width: 1000,
            header: {
                title: '全屏右出浮层'
            },
            footer: {
                enter: false,
                cancel: false
            }
        });
    }
});