let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@subs.less');

module.exports = Magix.View.extend({
    tmpl: '@subs.html',
    init(e){
        let list = e.list || [];
        this.updater.set({
            list
        })
    },
    render() {
        this.updater.digest();
    },
    'to<click>'(e) {
        let key = e.params.key;
        let node = $('#' + key);
        $(window).scrollTop(node.offset().top);
    }
});