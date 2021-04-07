/**
 * 为了保证dropdown.item每次更新，不实现assign
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(ops) {
        let me = this;

        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();

            if (me['@{search.delay.timer}']) {
                clearTimeout(me['@{search.delay.timer}']);
            }
        });

        me['@{owner.node}'] = $('#' + me.id);

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        // 展开方向：向上向下
        let placement = ops.placement || 'bottom';
        let placementClass = `mx-output-${placement}`;

        // trigger方式，click，hover，默认click
        let triggerType = ops.triggerType || 'click';

        let textKey = ops.textKey || 'text',
            valueKey = ops.valueKey || 'value';

        let groups = [],
            originList = []; // 保留原始数组
        if (!ops.list) {
            // mx-dropdown.item 可分组
            let nodes = me['@{owner.node}'].children();
            nodes.each((idx, node) => {
                node = $(node);
                let group = node.attr('group') == 'true';
                if (group) {
                    groups.push({
                        text: node.text(),
                        value: Magix.guid(),
                        list: []
                    })
                } else {
                    let len = groups.length;
                    if (len == 0) {
                        // 第一个节点非父节点
                        groups[0] = {
                            list: [{
                                text: node.text(),
                                value: node.attr('value')
                            }]
                        }
                    } else {
                        groups[len - 1].list.push({
                            text: node.text(),
                            value: node.attr('value')
                        });
                    }
                }
            });
            if (groups && groups.length) {
                groups.forEach(group => {
                    originList = originList.concat(group.list);
                })
            }
        } else {
            // 直接配数据不支持分组
            try {
                originList = JSON.parse(ops.list);
            } catch (e) {
                originList = ops.list;
            }
            if (typeof originList[0] === 'object') {
                // 本身是个对象
            } else {
                // 直接value列表
                originList = originList.map(value => {
                    return {
                        [textKey]: value,
                        [valueKey]: value
                    };
                })
            }

            groups = [{
                list: originList.map(item => {
                    return {
                        text: item[textKey],
                        value: item[valueKey],
                        tip: item.tip
                    };
                })
            }];

            // 如果有空提示文案，默认补上一个选项
            // 可能存在有emptyText且textKey=valueKey的情况，避免数据被覆盖后添加空的情况
            if (ops.emptyText) {
                groups[0].list.unshift({
                    text: ops.emptyText,
                    value: ''
                })
            }
        }
        let map = Magix.toMap(originList, valueKey);
        let selected = ops.selected,
            selectedText = '';
        if (selected && map[selected]) {
            // 历史选中态
            selectedText = map[selected][textKey];
        } else {
            // 默认选中第一个
            let firstItem = (groups[0] && groups[0].list) ? (groups[0].list[0] || {}) : {};
            selected = firstItem.value || '';
            selectedText = firstItem.text || '';
        }

        me.updater.set({
            originList,
            groups,
            textKey,
            valueKey,
            selected,
            selectedText,
            searchbox: (ops.searchbox + '') === 'true', // 是否有搜索框
            keyword: me['@{last.value}'] = (ops.keyword || ''),  // 搜索关键词
            expand: false, // 列表是否展开
            disabled,  //是否禁用
            triggerType, //展开方式
            height: (ops.height || 250),
            name: ops.name || '', // 前缀
            placementClass,
            text: {
                search: I18n['dropdown.search'],
                empty: I18n['empty.text']
            }
        });
        me['@{owner.node}'].val(selected);
    },
    render() {
        let me = this;
        let { searchbox, keyword, disabled, triggerType } = me.updater.get();

        // 有搜索框时复原历史搜索内容
        me['@{fn.search}']((searchbox ? keyword : ''), results => {
            me.updater.digest(results);
            let triggerNode = $('#toggle_' + me.id);
            switch (triggerType) {
                case 'click':
                    triggerNode.on('click', () => {
                        let { expand } = me.updater.get();
                        if (expand) {
                            me['@{hide}']();
                        } else if (!disabled) {
                            me['@{show}']();
                        }
                    })
                    break;
                case 'hover':
                    triggerNode.hover(() => {
                        clearTimeout(me['@{dealy.hide.timer}']);
                        if (!disabled) {
                            me['@{show}']();
                        }
                    }, () => {
                        me['@{delay.hide}']();
                    });

                    let wrapper = $('#menu_' + me.id);
                    wrapper.hover(() => {
                        clearTimeout(me['@{dealy.hide.timer}']);
                    }, () => {
                        me['@{delay.hide}']();
                    });
                    break;
            }
        });

    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id);
    },
    '@{delay.hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), 250);
    },
    '@{hide}'() {
        let me = this;
        let { expand } = me.updater.get();
        if (expand) {
            me.updater.digest({
                expand: false
            });
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);
        }
    },
    '@{show}'() {
        let me = this;
        let { expand } = me.updater.get();
        if (!expand) {
            let d = {
                expand: true
            }
            let { rList } = me.updater.get();
            if (!rList) {
                d.rList = true;
            }
            me.updater.digest(d);
            me['@{owner.node}'].trigger('focusin');

            // 选中值滚动到可视范围内
            let listNode = $('#list_' + me.id);
            let active = listNode.find('[data-active="true"]');
            let pos = active.position();
            let height = listNode.height();
            let stop = listNode.prop('scrollTop');
            if (pos && (pos.top < 0 || pos.top > height)) {
                let top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['@{add}'](me);
        }
    },

    '@{fn.search}'(val, callback) {
        let me = this;
        let { groups } = me.updater.get();
        let allHide;
        if (!val) {
            allHide = false;
            groups.forEach(group => {
                group.hide = false;
                group.list.forEach(item => {
                    item.hide = false;
                })
            })
        } else {
            val = val + '';
            allHide = true;
            let lowVal = (val + '').toLocaleLowerCase();
            groups.forEach(group => {
                let groupHide = true;
                group.list.forEach(item => {
                    let text = item.text + '',
                        value = item.value + '';

                    // text的匹配不区分大小写
                    // value区分
                    item.hide = (text.toLocaleLowerCase().indexOf(lowVal) < 0) && (value.indexOf(val) < 0);
                    groupHide = groupHide && item.hide;
                })
                group.hide = groupHide;
                allHide = allHide && groupHide;
            })
        }

        callback({
            groups,
            allHide
        });
    },

    '@{search}<keyup,paste>'(e) {
        let me = this;
        let { originList } = me.updater.get();

        if (originList.length < 50) {
            // 数量少时立即生效
            let val = $.trim(e.eventTarget.value);
            me.updater.set({
                keyword: val
            });
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, (result) => {
                    me.updater.digest(result);
                });
            }
        } else {
            clearTimeout(me['@{search.delay.timer}']);
            let val = $.trim(e.eventTarget.value);
            me.updater.set({
                keyword: val
            });
            me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
                if (val != me['@{last.value}']) {
                    me['@{fn.search}'](me['@{last.value}'] = val, (result) => {
                        me.updater.digest(result);
                    });
                }
            }), 250);
        }
    },

    '@{select}<click>'(e) {
        let me = this;
        let { value: selected, text: selectedText } = e.params.item;
        let { selected: lastSelected, keyword, textKey, valueKey, originList } = me.updater.get();

        let item = {};
        for (let i = 0; i < originList.length; i++) {
            if (originList[i][valueKey] == selected) {
                item = originList[i];
                break;
            }
        }
        if ((lastSelected + '') !== (selected + '')) {
            let event = $.Event('change', {
                item,
                keyword,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: selected,
                text: selectedText,
                selected: selected
            });

            me.updater.digest({
                selected,
                selectedText
            });
            me['@{owner.node}'].val(selected).trigger(event);
        }

        me['@{hide}']();
    },
    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    }
});

