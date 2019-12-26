let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@full.html',
    render() {
        let { textAlign = '', dark = '', products = '' } = Magix.Router.parse().params;
        this.updater.digest({
            textAlign,
            dark,
            products
        });
    }
});