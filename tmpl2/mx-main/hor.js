let Magix = require('magix');
let Base = require('@./steps');
Magix.applyStyle('@hor.less');

module.exports = Base.extend({
    tmpl: '@hor.html'
});