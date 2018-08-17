let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@mixins.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    },
    'to<click>'(e) {
        let key = e.params.key;
        let node = $('#' + this.id + '_' + key);
        $(window).scrollTop(node.offset().top);
    }
});