let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Base = require('examples/example');

module.exports = Base.extend({
    tmpl: '@hor-demo1.html',
    render() {
        this.updater.digest();
    }
});