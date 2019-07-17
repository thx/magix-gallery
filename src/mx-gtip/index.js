let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let Duration = 200;

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        that.extra = extra;

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].on('@{add}', (e) => {
            that.extra = {
                msg: e.msg,
                timeout: e.timeout
            }
            that['@{show}']();
        })
        that.on('destroy', () => {
            that.owner.unmountVframe();
            that['@{owner.node}'].remove();
        });
    },
    render() {
        let that = this;
        that.updater.digest({});
        that['@{show}']();
    },
    '@{show}'(e) {
        let that = this;
        clearTimeout(that['@{custom.hide.timer}']);
        clearTimeout(that['@{dealy.hide.timer}']);
        clearTimeout(that['@{dealy.show.timer}']);

        let extra = that.extra;
        let timeout = extra.timeout;
        that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(() => {
            that.updater.digest({
                msg: extra.msg,
                timeout,
                top: 0
            });
        }), Duration);

        if (timeout) {
            that['@{custom.hide.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{close}<click>']();
            }), timeout);
        }
    },
    '@{close}<click>'(e) {
        let that = this;
        clearTimeout(that['@{custom.hide.timer}']);
        clearTimeout(that['@{dealy.hide.timer}']);
        clearTimeout(that['@{dealy.show.timer}']);

        that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(() => {
            that.updater.digest({
                top: '-50px'
            });
        }), Duration);
    }
}, {
    gtip(msg, timeout) {
        let id = this.id + '_guid';
        let node = $('#' + id);
        if(!node.length){
            $('body').append(`<div id="${id}" />`);
            this.owner.mountVframe(id, '@moduleId', {
                msg,
                timeout
            });
        }else{
            node.trigger({
                type: '@{add}',
                msg,
                timeout
            });
        }
    }
});