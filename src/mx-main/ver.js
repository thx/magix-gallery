let Magix = require('magix');
let Base = require('@./steps');
Magix.applyStyle('@ver.less');

module.exports = Base.extend({
    tmpl: '@ver.html'
});