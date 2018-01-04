/*
ver:2.0.1
*/
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});