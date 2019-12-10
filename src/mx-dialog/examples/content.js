let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(extra){
        this.updater.set(extra.data);
    },
    render() {
        this.updater.digest();
    }
});