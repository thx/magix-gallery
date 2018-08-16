let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra){
        
    },
    render() {
        this.updater.digest();
    }
});