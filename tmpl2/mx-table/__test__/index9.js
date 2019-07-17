let Magix = require('magix');
let $ = require('$');
let Sub = require('@../sub');

module.exports = Magix.View.extend({
    tmpl: '@index9.html',
    mixins: [Sub],
    render() {
        this.updater.digest();
    }
});