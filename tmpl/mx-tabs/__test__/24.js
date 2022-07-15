let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Dialog = require('@../../mx-dialog/index');

module.exports = Base.extend({
    tmpl: '@24.html',
    mixins: [Form, Validator, Dialog],
    render() {
        let list = [];
        for (let i = 0; i < 20; i++) {
            list.push({
                value: i,
                text: `模块${i}`
            })
        }

        this.updater.digest({
            list,
            selected: 18
        });
    },
    'open<click>'(e) {
        this.mxModal('@./24-inner', {}, {
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