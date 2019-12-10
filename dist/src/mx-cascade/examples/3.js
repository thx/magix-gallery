let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    }
});