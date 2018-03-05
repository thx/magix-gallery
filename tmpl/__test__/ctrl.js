/*
ver:2.0.6
*/
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: '@ctrl.html',
    ctor(extra) {
        console.log(extra);
    },
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(data) {
        let me = this;
        let altered = me.updater.altered();
        me.updater.set(data);
        if (!altered) altered = me.updater.altered();
        if (altered) {
            me.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        console.log('render');
        this.updater.digest();
    },
    '@{change}<input>'(e) {
        this.updater.digest({
            value: e.eventTarget.value
        });
    }
});