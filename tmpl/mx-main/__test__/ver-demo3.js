let Magix = require('magix');
let Base = require('./ver-demo1');
Magix.applyStyle('@ver.less');

module.exports = Base.extend({
    tmpl: '@ver-demo3.html'
});