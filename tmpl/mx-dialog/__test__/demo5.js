let Magix = require('magix');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@demo5.html',
    mixins: [Form, Validator],
    init(e) {
        this.viewOptions = e;

        this.updater.set({
            content: e.content,
            name: ''
        })
    },
    render() {
        this.updater.digest();
    },
    check() {
        return new Promise((resolve) => {
            resolve({
                ok: true,
            })
        })
    }

});
