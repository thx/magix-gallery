let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@4.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            content: 200.22,
            replaceFn: (str) => {
                let arr = ((str || '') + '').split('.');
                return `<span class="fontsize-20 bold">${arr[0]}</span>${arr[1] ? ('<span class="fontsize-14 bold">.' + arr[1] + '</span>') : ''}<img class="ml4 pr" style="top: -2px;" width="12" src="https://img.alicdn.com/imgextra/i2/O1CN014Tqfav1kV9WwsKZzJ_!!6000000004688-2-tps-24-28.png" />`;
            }
        });
    }
});