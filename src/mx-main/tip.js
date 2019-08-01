let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@tip.html',
    init(extra){
        let data = extra.data || {};
        this.updater.set(data);
    },
    render() {
        this.updater.digest();
    }
});