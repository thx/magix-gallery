let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@chartpark.less');

module.exports = Magix.View.extend({
    tmpl: '@chartpark-custom.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});