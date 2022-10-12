let Magix = require('magix');
let Base = require('./bd');

module.exports = Base.extend({
    tmpl: '@bd-multi.html',
    init() {
        this.updater.set({
            isMulti: true,
        })
    },
});