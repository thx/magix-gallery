let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@menu.less');

module.exports = Base.extend({
    tmpl: '@menu-custom1.html',
    init(extra){
        this.updater.set({
            parentId: extra.parentId
        })
    },
    render() {
        this.updater.digest();
    },
    'to<click>'(e) {
        let id = e.params.id;
        let node = $('#' + id);
        $(window).scrollTop(node.offset().top);
    }
});