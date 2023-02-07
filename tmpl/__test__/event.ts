import Magix from 'magix';
let $ = require('$');

export default Magix.View.extend({
    tmpl: '@event.html',
    init(options) {
        this.updater.digest(options);
    },
    render() {
        this.updater.digest({
            viewId: this.id,
        });
    },
    'to<click>'(e) {
        let node = $('#' + e.params.id);
        $(window).scrollTop(node.offset().top);
    }
});