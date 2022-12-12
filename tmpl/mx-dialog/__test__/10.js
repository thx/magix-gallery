let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@10.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./full', {
            readonly: true
        }, {
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