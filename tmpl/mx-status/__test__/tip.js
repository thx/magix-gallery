let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@tip.html',
    init(extra){
        this.updater.digest(extra.data);
    },
    render() {
        this.updater.digest();
    }
});