/*
ver:2.0.6
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@suggest.less');
module.exports = Magix.View.extend({
    tmpl: '@suggest.html',
    init(extra) {
        let me = this;
        me['@{scroll.top}'] = extra.scrollTop || 0;
        me['@{data.list}'] = extra.list || [];
        me['@{offset.left}'] = (extra.offsetLeft || 0) | 0;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            me['@{owner.node}'].off('keyup paste input', me['@{fn.watch}'])
                .off('focus', me['@{fn.show}']);
        });
        me.updater.set({
            viewId: me.id,
            width: extra.width || 340,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['@{ui.index}'] = -1;
        me['@{relate.ids}'] = [me.id].concat(extra.relateIds.split(','));
    },
    '@{inside}'(node) {
        let me = this;
        let ids = me['@{relate.ids}'];
        for (let i = 0; i < ids.length; i++) {
            if (Magix.inside(node, ids[i])) {
                return true;
            }
        }
        return false;
    },
    '@{list.update}'(list, ignore) {
        let me = this;
        if (!ignore) {
            me['@{data.list}'] = list;
        }
        me['@{ui.index}'] = -1;
        me.updater.digest({
            list: me['@{source.list}'] = list
        });
    },
    render() {
        let me = this;
        let oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        me['@{owner.node}'] = oNode;
        oNode.on('focus', me['@{fn.show}'] = $.proxy(me['@{show}'], me))
            .on('keyup paste input', me['@{fn.watch}'] = $.proxy(me['@{filter}'], me));
        me['@{list.update}'](me['@{data.list}']);
        me['@{relate.list.node}'] = $('#' + me.id + ' ul');
        setTimeout(me.wrapAsync(() => {
            me['@{relate.list.node}'].prop('scrollTop', me['@{scroll.top}']);
        }), 0);
    },
    '@{filter}'(e) {
        let me = this;
        if (!me['@{ui.show}']) me['@{show}']();
        let slist = me['@{source.list}'];
        if (e.keyCode == 40) {
            me['@{normal}']();
            me['@{ui.index}']++;
            if (me['@{ui.index}'] >= slist.length) {
                me['@{ui.index}'] = 0;
            }
            me['@{highlight}']();
        } else if (e.keyCode == 38) {
            me['@{normal}']();
            me['@{ui.index}']--;
            if (me['@{ui.index}'] < 0) {
                me['@{ui.index}'] = slist.length - 1;
            }
            me['@{highlight}']();
        } else if (e.keyCode == 13) {
            if (me['@{ui.index}'] > -1 && me['@{ui.index}'] < me['@{source.list}'].length) {
                let item = me['@{source.list}'][me['@{ui.index}']];
                me['@{normal}']();
                me['@{ui.index}'] = -1;
                me['@{hide}']();
                me['@{owner.node}'].trigger({
                    type: 'pick',
                    item: item
                });
            }
        } else {
            let val = $.trim(e.target.value);
            if (val != me['@{value}']) {
                me['@{value}'] = val;
                if (val) {
                    let arr = [];
                    let list = me['@{data.list}'].slice();
                    let key = me.updater.get('textKey');
                    let text;
                    for (let i = 0, one; i < list.length; i++) {
                        one = list[i];
                        text = key ? one[key] : one;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me['@{list.update}'](arr, true);
                } else {
                    me['@{list.update}'](me['@{data.list}'], true);
                }
            }
        }
    },
    '@{show}'() {
        let me = this;
        let updater = me.updater;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = 'from show ';
            let rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['@{add}'](me);
            let offset = me['@{owner.node}'].position();
            me['@{relate.node}'].show().css({
                display: 'block',
                left: offset.left + me['@{offset.left}'],
                top: offset.top + me['@{owner.node}'].outerHeight() + 10
            });
            me['@{owner.node}'].trigger('showlist');
        }
    },
    '@{normal}'() {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.removeClass('@suggest.less:active');
    },
    '@{highlight}'(ignore) {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.addClass('@suggest.less:active');
        if (!ignore && node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            let height = node.outerHeight();
            let scrolled = (me['@{ui.index}'] + 1) * height;
            let rNode = me['@{relate.list.node}'];
            let vHeight = rNode.height();
            let sTop = rNode.prop('scrollTop');
            let items = Math.ceil(vHeight / height);

            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            } else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['@{ui.index}'] + 2 - items) * height);
            }
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            me['@{relate.node}'].hide();
            me['@{owner.node}'].trigger('hidelist');
        }
    },
    '@{pick}<click>'(e) {
        e.preventDefault();
        let me = this;
        let item = e.params.item;
        me['@{hide}']();
        me['@{owner.node}'].trigger({
            type: 'pick',
            item: item,
            scrollTop: me['@{relate.list.node}'].prop('scrollTop')
        });
    },
    '@{out}<mouseout>'(e) {
        let flag = !Magix.inside(e.relateTarget, e.eventTarget);
        if (flag) {
            let me = this;
            me['@{normal}']();
            me['@{ui.index}'] = -1;
        }
    },
    '@{move}<mousemove>'(e) {
        let me = this;
        if (me['@{temp.ignore}']) {
            delete me['@{temp.ignore}'];
            return;
        }
        let target = $(e.target);
        if (target.is('li')) {
            let idx = target.data('idx');
            if (idx != me['@{ui.index}']) {
                me['@{normal}']();
                me['@{ui.index}'] = idx;
                me['@{highlight}'](true);
            }
        }
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});