let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@18.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./full', {

        }, {
            width: 800,
            header: {
                title: '标题旁带Feedback',
                feedbackId: 5478,
            }
        });
    }
});