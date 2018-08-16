/**
 * 盒状分组
 */
let Magix = require('magix');
let Base = require('@./base');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@box.html',
    render() {
        this.updater.digest();
    }
});