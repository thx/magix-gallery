let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@anim.html',
    render() {
        this.updater.digest({});
    }
});