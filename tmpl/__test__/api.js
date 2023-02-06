let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@api.html',
    init(options) {
        this.updater.set(options);
    },
    render() {
        this.updater.digest();
    },
    'to<click>'(e) {
        let node = $('#' + e.params.id);
        $(window).scrollTop(node.offset().top);
    }
});