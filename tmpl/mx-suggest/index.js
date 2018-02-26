/*
ver:2.0.5
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{data.list}'] = extra.list || [];
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            me['@{owner.node}'].off('keyup paste input', me['@{fn.watch}'])
                .off('focus', me['@{fn.show}']);
        });
        me.updater.set({
            viewId: me.id,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me['@{ui.select.index}'] = -1;
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id) ||
            Magix.inside(node, this['@{owner.node}'][0]);
    },
    update(list, ignore) {
        let me = this;
        clearTimeout(me['@{delay.updater.timer}']);
        me['@{delay.updater.timer}'] = setTimeout(me.wrapAsync(() => {
            if (!ignore) {
                me['@{data.list}'] = list;
            }
            me['@{ui.select.index}'] = -1;
            me.updater.digest({
                list: me['@{data.source.list}'] = list
            });
        }), 20);
    },
    render() {
        let me = this;
        let oNode = $('#' + me.id);
        let id = me.id;
        oNode = oNode.prev('input');
        me['@{owner.node}'] = oNode;
        oNode.on('focus', me['@{fn.show}'] = $.proxy(me['@{show}'], me))
            .on('keyup paste input', me['@{fn.watch}'] = $.proxy(me['@{filter}'], me));
        oNode.prop('vframe', me.owner);
        me.updater.set({
            width: oNode.outerWidth()
        });
        me.update(me['@{data.list}']);
        me['@{relate.node}'] = $('#' + id);
        me['@{relate.list.node}'] = $('#' + id + ' ul');
    },
    '@{filter}'(e) {
        let me = this;
        if (!me['@{ui.show}']) me['@{show}']();
        let slist = me['@{data.source.list}'];
        if (e.keyCode == 40) {
            me['@{normal}']();
            me['@{ui.select.index}']++;
            if (me['@{ui.select.index}'] >= slist.length) {
                me['@{ui.select.index}'] = 0;
            }
            me['@{highlight}']();
        } else if (e.keyCode == 38) {
            me['@{normal}']();
            me['@{ui.select.index}']--;
            if (me['@{ui.select.index}'] < 0) {
                me['@{ui.select.index}'] = slist.length - 1;
            }
            me['@{highlight}']();
        } else if (e.keyCode == 13) {
            if (me['@{ui.select.index}'] > -1 && me['@{ui.select.index}'] < me['@{data.source.list}'].length) {
                let item = me['@{data.source.list}'][me['@{ui.select.index}']];
                me['@{owner.node}'].trigger({
                    type: 'pick',
                    item: item
                });
                let textKey = me.updater.get('textKey');
                if (textKey) {
                    item = item[textKey];
                }
                me['@{owner.node}'].val(item).trigger('change');
                me['@{filter}']({
                    target: me['@{owner.node}'][0]
                });
                me['@{normal}']();
                me['@{ui.select.index}'] = -1;
                me['@{hide}']();
            }
        } else {
            let val = $.trim(e.target.value);
            if (val != me['@{temp.value}']) {
                me['@{temp.value}'] = val;
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
                    me.update(arr, true);
                } else {
                    me.update(me['@{data.list}'], true);
                }
            }
        }
    },
    '@{show}'() {
        let me = this;
        let updater = me.updater;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            let rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor['@{add}'](me);
            let offset = me['@{owner.node}'].position();
            me['@{relate.node}'].css({
                display: 'block',
                left: offset.left,
                top: offset.top + me['@{owner.node}'].outerHeight() + 5
            });
            me['@{owner.node}'].trigger('showlist');
        }
    },
    '@{normal}'() {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.select.index}']);
        node.removeClass('@index.less:active');
    },
    '@{highlight}'(ignore) {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.select.index}']);
        node.addClass('@index.less:active');
        if (!ignore && node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            let height = node.outerHeight();
            let scrolled = (me['@{ui.select.index}'] + 1) * height;
            let rNode = me['@{relate.list.node}'];
            let vHeight = rNode.height();
            let sTop = rNode.prop('scrollTop');
            let items = Math.ceil(vHeight / height);

            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            } else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['@{ui.select.index}'] + 2 - items) * height);
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
        me['@{owner.node}'].trigger({
            type: 'pick',
            item: item
        });
        let textKey = me.updater.get('textKey');
        if (textKey) {
            item = item[textKey];
        }
        me['@{owner.node}'].val(item).trigger('change');
        me['@{filter}']({
            target: me['@{owner.node}'][0]
        });
        me['@{hide}']();
    },
    '@{out}<mouseout>'(e) {
        let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            let me = this;
            me['@{normal}']();
            me['@{ui.select.index}'] = -1;
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
            if (idx != me['@{ui.select.index}']) {
                me['@{normal}']();
                me['@{ui.select.index}'] = idx;
                me['@{highlight}'](true);
            }
        }
    },
    '@{stop}<contextmenu>'(e) {
        e.preventDefault();
    }
});