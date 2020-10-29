let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@event.html',
    init(options){
        this.updater.digest(options);
    },
    render() {
        this.updater.digest();
    },
    'to<click>'(e) {
        let node  = $('#' + e.params.id);
        $(window).scrollTop(node.offset().top);
    }
});