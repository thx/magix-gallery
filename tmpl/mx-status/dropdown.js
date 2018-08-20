let Magix = require('magix');
let Base = require('@./base');
Magix.applyStyle('@./base.less');

module.exports = Base.extend({
    tmpl: '@dropdown.html'
});