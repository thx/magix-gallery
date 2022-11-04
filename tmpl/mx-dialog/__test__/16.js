let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@16.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./demo4', {
            content: '只使用默认头部'
        }, {
            width: 480,
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示',
                // feedbackId: 5478,
            }
        });
    },
    'open2<click>'(e) {
        this.mxDialog('@./demo4', {
            content: '只使用默认尾部'
        }, {
            width: 480,
            height: 320,
            closable: false,
            footer: {
                enter: true,
                cancel: true
            }
        });
    },
    'open3<click>'(e) {
        this.mxDialog('@./demo4', {
            content: '使用默认头部+尾部'
        }, {
            width: 480,
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示'
            },
            footer: {
                enter: true,
                cancel: true
            }
        });
    },
    'open4<click>'(e) {
        this.mxDialog('@./demo4', {
            content: '使用默认头部+尾部'
        }, {
            width: 480,
            height: 320,
            header: {
                title: '浮层标题',
                tip: '标题旁提示'
            },
            footer: {
                enter: true,
                enterError: true,
                cancel: true
            }
        });
    }
});