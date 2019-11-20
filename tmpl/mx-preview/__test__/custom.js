let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@custom.html',
    init(options){
        this.updater.set(options);
    },
    render() {
        this.updater.digest();
    }
});