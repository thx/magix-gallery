let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
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
        let that = this;
        that.updater.digest();

        let locParams = Router.parse().params;
        if(!that.$init && locParams.highlightId){
            setTimeout(() => {
                that.to(locParams.highlightId);
            }, 500)
            that.$init = 1;
        }
    },
    'to<click>'(e) {
        let key = e.params.key;
        Router.to({
            highlightId: key
        })
        this.to(key);
    },
    to(key){
        let node = $('#' + key);
        let cName = '@scoped.style:example',
            hlName = '@scoped.style:example-highlight';
        let examples = $('.' + cName);
        examples.removeClass(hlName);
        if(node.hasClass(cName)){
            node.addClass(hlName);
        }else{
            node.find('.' + cName).addClass(hlName);
        }
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