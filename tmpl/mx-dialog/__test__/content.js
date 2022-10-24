let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@content.html',
    init(extra){
        this.updater.set(extra.data);
    },
    render() {
        this.updater.digest();
    }
});