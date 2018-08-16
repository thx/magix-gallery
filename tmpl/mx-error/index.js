let Magix = require('magix');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest();
    },
    'back<click>' (e) {
        e.preventDefault();
        history.back();
    }
});