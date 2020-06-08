let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@full.html',
    render() {
        let { mode = '', products = '', width = '', bizCode = '', colorBrand } = Magix.Router.parse().params;
        this.updater.digest({
            colorBrand,
            mode,
            products,
            width,
            bizCode
        });
    }
});