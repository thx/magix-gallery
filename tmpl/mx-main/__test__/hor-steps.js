let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@hor-steps.html',
    render() {
        this.updater.digest();
    }
});