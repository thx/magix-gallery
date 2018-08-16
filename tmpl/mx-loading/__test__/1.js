let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../index');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'show<click>'(e){
        Loading.showLoading();

        setTimeout(() => {
            Loading.hideLoading();
        }, 3000);
    }
});