import Magix from 'magix';
let $ = require('$');

export default Magix.View.extend({
    tmpl: '@api.html',
    init(options) {
        let type = options.type || 'api';
        this.updater.set({
            ...options,
            type,
        });
    },
    render() {
        this.updater.digest();
    },
    'to<click>'(e) {
        let node = $('#' + e.params.id);
        $(window).scrollTop(node.offset().top);
    }
});