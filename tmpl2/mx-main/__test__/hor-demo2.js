let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@hor-demo2.html',
    render() {
        this.updater.digest({});
    }
});