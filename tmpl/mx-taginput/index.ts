import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@index.less');
let MxTagInputMinWidth = 10;

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;

        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value',
            max = extra.max | 0;

        me['@{dynamic.list}'] = (extra.dynamicList + '' === 'true');
        me.updater.set({
            textKey,
            valueKey
        });
        let list = me.rebuildList(extra.list);

        let selected = extra.selected || '';
        selected = (selected + '').split(',');

        // 当前已选中的
        let items = [];
        let selectedItems = me.rebuildList(extra.items);
        if (selectedItems && selectedItems.length) {
            items = selectedItems;
        } else {
            let map = Magix.toMap(list, 'value');
            selected.forEach(v => {
                if (map[v]) {
                    items.push(map[v]);
                }
            })
        }

        me['@{data.list}'] = me['@{dynamic.list}'] ? [] : list;
        me['@{owner.node}'] = $('#' + me.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        me.updater.set({
            viewId: me.id,
            disabled,
            placeholder: extra.placeholder || I18n['choose'],
            emptyText: I18n['empty.text'],
            inputWidth: MxTagInputMinWidth,
            items,
            max
        });

        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    rebuildList(list) {
        list = list || [];
        let { textKey, valueKey } = this.updater.get();
        if (typeof list[0] === 'object') {
            // 本身是个对象
            list = list.map(item => {
                item.text = item[textKey];
                item.value = item[valueKey];
                return item;
            })
        } else {
            // 直接value列表
            list = list.map(value => {
                return {
                    text: value,
                    value: value
                };
            })
        }
        return list;
    },
    render() {
        this.updater.digest();

        this['@{ui.update}']();
        this['@{val}']();
    },

    '@{val}'() {
        let me = this;
        let items = me.updater.get('items');
        let selected = items.map(item => {
            return item.value;
        })

        me['@{owner.node}'].val(selected.join(','));
    },

    /**
     * 更新input的宽度，提示框位置，提示框数据
     */
    '@{ui.update}'() {
        let me = this;
        me['@{ui.index}'] = -1;

        let list = me['@{data.list}'];
        let items = me.updater.get('items');

        // 输入框内容
        let iv = me['@{last.value}'] || '';
        let suggest = [];
        if (me['@{dynamic.list}']) {
            suggest = list;
        } else {

            let selected = items.map(item => {
                return item.value + '';
            })
            for (let i = 0, one; i < list.length; i++) {
                one = list[i];
                if ((selected.indexOf(one.value + '') < 0) && ((one.value + '').indexOf(iv) > -1 || (one.text + '').indexOf(iv) > -1)) {
                    suggest.push(one);
                }
            }
        }

        let tNode = me['@{owner.node}'].find('input');
        tNode.width(MxTagInputMinWidth);
        let offset = tNode.position();
        let inputWidth = $('#ipt_' + me.id).width() - offset.left;
        me.updater.digest({
            iv,
            suggest,
            inputWidth: inputWidth >= MxTagInputMinWidth ? inputWidth : MxTagInputMinWidth,
            suggestLeft: offset.left - 6
        });
    },

    /**
     * 输入框获取焦点
     */
    '@{focus}<click>'() {
        let me = this;
        let disabled = me.updater.get('disabled')
        if (!disabled) {
            me['@{owner.node}'].find('input').focus();
        }
    },

    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    },

    '@{stop}<change,focusout>'(e) {
        e.stopPropagation();
    },

    '@{check}<focusin,paste,keyup,keydown>'(e) {
        e.stopPropagation();
        let me = this;
        if (me['@{suggest.delay.timer}']) {
            clearTimeout(me['@{suggest.delay.timer}']);
        }

        let val = e.eventTarget.value;
        if (me['@{last.value}'] !== val) {
            me['@{last.value}'] = val;
            let holder = me['@{owner.node}'].find('.@index.less:placeholder');
            if (val) {
                holder.hide();
            } else {
                holder.show();
            }
        }
        if (e.type != 'keydown') {
            let suggest = me.updater.get('suggest');
            if (e.keyCode == 40) {
                me['@{normal}']();
                me['@{ui.index}']++;
                if (me['@{ui.index}'] >= suggest.length) {
                    me['@{ui.index}'] = 0;
                }
                me['@{highlight}']();
            } else if (e.keyCode == 38) {
                me['@{normal}']();
                me['@{ui.index}']--;
                if (me['@{ui.index}'] < 0) {
                    me['@{ui.index}'] = suggest.length - 1;
                }
                me['@{highlight}']();
            } else if (e.keyCode == 13) {
                // 回车
                if (me['@{ui.index}'] > -1 && me['@{ui.index}'] < suggest.length) {
                    let item = suggest[me['@{ui.index}']];
                    me['@{normal}']();
                    me['@{add}'](item);
                }
            } else {
                me['@{suggest.delay.timer}'] = setTimeout(me.wrapAsync(function () {
                    let items = me.updater.get('items');
                    let max = me.updater.get('max');
                    if (max <= 0 || items.length < max) {
                        me['@{ui.update}']();
                        me['@{show}']();
                    }
                }), 250);
            }
        }

        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            // 删除
            let items = me.updater.get('items');
            let idx = items.length - 1;
            if (idx > -1) {
                me['@{delete}<click>']({
                    params: {
                        idx
                    }
                });
                if (me['@{dynamic.list}']) {
                    me['@{hide}']();
                }
            }
        }
    },

    '@{fire.event}'() {
        let me = this;
        let selected = [];
        let { items, valueKey } = me.updater.get();
        for (let i = 0, one; i < items.length; i++) {
            one = items[i];
            selected.push(valueKey ? one[valueKey] : one);
        }
        let val = selected.join(',');
        me['@{owner.node}'].val(val).trigger({
            type: 'change',
            selected: val,
            items
        });
    },

    '@{add}<click>'(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        this['@{add}'](e.params.item);
    },

    '@{add}'(item) {
        let me = this;
        let updater = me.updater;
        let { items, max } = updater.get();

        items.push(item);
        updater.digest({
            items
        });

        me['@{last.value}'] = '';
        me['@{val}']();
        me['@{ui.update}']();
        me['@{fire.event}']();

        if (max > 0 && items.length >= max) {
            me['@{hide}']();
        } else {
            me['@{ui.focus}']();
            if (me['@{dynamic.list}']) {
                me['@{hide}']();
            }
        }
    },

    '@{delete}<click>'(event) {
        let me = this;
        let data = me.updater.get();
        if (data.disabled) {
            return;
        }

        let items = data.items;
        let idx = event.params.idx;
        items.splice(idx, 1);

        me.updater.digest({
            items
        });

        me['@{last.value}'] = '';
        me['@{val}']();
        me['@{ui.update}']();
        me['@{fire.event}']();
        me['@{ui.focus}']();
    },

    '@{ui.focus}'() {
        let me = this;

        if (me['@{dynamic.list}']) {
            me['@{owner.node}'].find('input').focus();
        } else {
            let suggest = me.updater.get('suggest');
            if (suggest && suggest.length) {
                me['@{owner.node}'].find('input').focus();
            } else {
                me['@{hide}']();
            }
        }
    },

    '@{normal}'() {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.removeClass('@index.less:item-hover');
    },

    '@{highlight}'() {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me['@{ui.index}']);
        node.addClass('@index.less:item-hover');
        if (node.length) {
            me['@{temp.ignore}'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            let height = node.outerHeight();
            let scrolled = (me['@{ui.index}'] + 1) * height;
            let rNode = $('#ul_' + me.id);
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
            me.updater.digest({
                show: false
            })
            Monitor['@{remove}'](me);
            if (me['@{dynamic.list}']) {
                me['@{data.list}'] = [];
            }
        }
    },

    '@{show}'() {
        let me = this;

        // 外部需要动态更新时
        me['@{owner.node}'].trigger({
            type: 'show',
            keyword: me['@{last.value}']
        });

        let suggest = me.updater.get('suggest');
        if (!me['@{ui.show}'] && suggest && suggest.length) {
            me['@{ui.show}'] = true;
            me.updater.digest({
                show: true
            })
            Monitor['@{add}'](me);
        }
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },

    '@{out}<mouseout>'(e) {
        let flag = !Magix.inside(e.relateTarget, e.eventTarget);
        if (flag) {
            let me = this;
            me['@{normal}']();
            me['@{ui.index}'] = -1;
        }
    },

    showLoading() {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            me.updater.digest({
                show: true,
                loading: true,
                iv: me['@{last.value}']
            })
            Monitor['@{add}'](me);
        }
    },

    hideLoading() {
        this.updater.digest({
            loading: false
        })
    },
    /**
     * 外部更新可选项
     */
    update: function (suggest) {
        let me = this;
        suggest = this.rebuildList(suggest);
        this['@{data.list}'] = suggest;
        me.updater.digest({
            iv: me['@{last.value}'],
            suggest
        })
    }
});