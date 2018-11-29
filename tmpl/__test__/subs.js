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
        let examples = $('.@scoped.style:example');
        examples.css({
            border: '1px solid #e6e6e6'
        })
        node.find('.@scoped.style:example').css({
            border: '1px solid #4d7fff'
        })
        $(window).scrollTop(node.offset().top);
    },
    '$win<scroll>'(e) {
        let that = this;

        let mainNode = $('#' + that.id);
        let scrollTop = $(window).scrollTop();
        let mainTop = mainNode.offset().top;
        if (scrollTop >= mainTop) {
            if (that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: true
            })
        } else {
            if (!that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: false
            })
        }
    }
});