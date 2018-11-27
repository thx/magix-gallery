let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest();
    }
});