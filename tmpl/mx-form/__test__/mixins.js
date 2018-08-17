let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@mixins.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    },
    'to<click>'(e) {
        let node = $('#' + this.id + '_rules');
        $(window).scrollTop(node.offset().top);
    }
});