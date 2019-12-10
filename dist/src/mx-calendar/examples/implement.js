let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@implement.less');

module.exports = Magix.View.extend({
    tmpl: '@implement.html',
    render() {
        this.updater.digest();
        
    }
});