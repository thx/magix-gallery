let Magix = require('magix');
Magix.applyStyle('@inner.less');

module.exports = Magix.View.extend({
    tmpl: '@inner.html',
    init(options){
        this.updater.set(options.data);
    },
    render() {
        this.updater.digest();
    }
});