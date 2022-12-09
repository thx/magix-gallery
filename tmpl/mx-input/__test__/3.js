let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            test: '123',
            value: '123'
        });
    },
    'change<change>'(e) {
        // console.error('out', e.type, e.value, e.target.value)
    },
    '@{suggest}<keyup,paste,focusin>'(e) {
    },
    '@{stop}<focusout,change>'(e) {
    }
});