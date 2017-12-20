/*
ver:1.3.9
*/
let Magix = require('magix');
let $ = require('$');
let Panel = '@scroll.html';
Magix.applyStyle('@scroll.less');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me.assign(extra);
    },
    assign(ops) {
        let me = this;
        me['@{value}'] = ops.value;
        return true;
    },
    '@{add}'() {
        let me = this;
        $('<div class="@scroll.less:wrapper"/>').append(Panel).appendTo(me['@{owner.node}']);
    },
    '@{scroll}'(exists, values) {
        let lh = parseInt(exists.css('line-height'), 10);
        for (let i = values.length; i--;) {
            let v = values[i];
            if (v == '-') v = 10;
            else if (v == '.') v = 11;
            exists.eq(i).css({
                transform: `translateY(-${v * lh}px)`
            });
        }
    },
    render() {
        let me = this;
        let exists = me['@{owner.node}'].find('>div');
        let values = (me['@{value}'] + '').split('');
        if (exists.length > values.length) {
            for (let i = exists.length - 1; i >= values.length; i--) {
                exists.eq(i).remove();
            }
        } else {
            for (let i = exists.length; i < values.length; i++) {
                me['@{add}']();
            }
        }
        exists = me['@{owner.node}'].find('>div>div');
        me['@{scroll}'](exists, values);
    }
});