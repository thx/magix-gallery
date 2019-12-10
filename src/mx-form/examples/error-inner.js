let Magix = require('magix');
let $ = require('$');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Magix.View.extend({
    tmpl: '@error-inner.html',
    mixins: [Form, Validator],
    render() {
        let that = this;
        that.updater.digest({
            viewId: that.id,
            list: [{
                text: '10~20岁',
                value: 1
            }, {
                text: '20~30岁',
                value: 2
            }, {
                text: '30~40岁',
                value: 3
            }],
            info: {
                age: 2
            }
        });
    }
});