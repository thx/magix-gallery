let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let I18n = require('../mx-medusa/util');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@multiple.html',
    init(ops) {
        let me = this;
        Monitor['@{setup}']();
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id,
        });

        let node = $('#' + me.id);
        me['@{owner.node}'] = node;

        let disabledNode = $('#' + me.id + '[mx-disabled]')
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);

        // 展开方向
        let placementMap = {
            top: '@index.less:top',
            bottom: '@index.less:bottom'
        }
        me['@{ui.placement}'] = placementMap[ops.placement || 'bottom'];

        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';

        let expand = false;
        let emptyText = ops.emptyText || I18n['choose'];
        let name = ops.name || '';
        let needAll = (ops.needAll + '') === 'false'; //禁用全选功能
        let searchbox = (ops.searchbox + '') === 'true';
        let textKey = ops.textKey || 'text';
        let valueKey = ops.valueKey || 'value';

        let hasGroups = false;
        let groups = [];
        if (!ops.list) {
            let node = me['@{owner.node}'].children();
            let hasGroup = $(node[0]).attr('group') == 'true';
            if (hasGroup) {
                hasGroups = true;
                node.each((idx, item) => {
                    item = $(item);
                    let group = item.attr('group') == 'true';
                    if (group) {
                        groups.push({
                            all: (item.attr('all') == 'true'),
                            text: item.text(),
                            value: Magix.guid(),
                            list: []
                        })
                    } else {
                        let len = groups.length;
                        groups[len - 1].list.push({
                            text: item.text(),
                            value: item.attr('value')
                        })
                    }
                });
            } else {
                let list = [];
                node.each((idx, item) => {
                    item = $(item);
                    list.push({
                        text: item.text(),
                        value: item.attr('value')
                    })
                })
                groups = [{
                    list: list
                }];
            }

        } else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            } catch (e) {
                list = ops.list || [];
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
                list = list.map(item => {
                    return {
                        text: item[textKey],
                        value: item[valueKey]
                    }
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
            groups = [{
                list: list
            }];
        }

        let count = 0,
            map = {};
        let selected;
        if (!ops.selected) {
            // 默认情况下逗号分隔
            selected = [];
        } else {
            if ($.isArray(ops.selected)) {
                me['@{bak.type}'] = 'array';
                // 后续做indexOf
                selected = ops.selected.map(v => {
                    return '' + v;
                });
            } else {
                selected = (ops.selected + '').split(',');
            }
        }

        groups.forEach(group => {
            let checkes = [];
            group.list.forEach(item => {
                count++;
                item.checked = (selected.indexOf(item.value + '') > -1);
                map[item.value] = item;

                if (item.checked) {
                    checkes.push(item.value);
                }
            })  

            // type: 
            // 1：全不选
            // 2：部分
            // 3：全选
            group.type = (checkes.length > 0) ? ((checkes.length == group.list.length) ? 3 : 2) : 1;
        })

        // 选择上限及下限
        let min = +ops.min || 0,
            max = +ops.max || 0;
        if((max > 0) && (min > max)){
            min = max;
        }
        me.updater.set({
            hasGroups,
            viewId: me.id,
            expand,
            emptyText,
            name,
            needAll,
            searchbox,
            map,
            selected,
            imme: selected, // 选中立即反馈
            min,
            max,
            continuous: (ops.continuous + '' === 'true'), //是否要求连续选择
            over: (count > 20), //选项大于20样式处理下
            groups,
            height: ops.height || 400,
            spm: me['@{owner.node}'].attr('data-spm-click') || '',
            placementClass: me['@{ui.placement}'],
            text: {
                search: I18n['dropdown.search'],
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel']
            }
        })
    },
    render() {
        let me = this;
        let selected = me.updater.get('selected');
        me.updater.digest({
            selectedText: me['@{getText}'](selected),
        });

        me['@{val}']();

        let triggerType = me['@{trigger.type}'];
        let triggerNode = $('#' + me.id + ' .@index.less:dropdown-toggle');
        let menuWrapper = $('#' + me.id + ' .@index.less:dropdown-menu-wrapper');
        switch (triggerType) {
            case 'click':
                triggerNode.on('click', () => {
                    let expand = me.updater.get('expand');
                    if (expand) {
                        me['@{hide}']();
                    } else if (!me['@{ui.disabled}']) {
                        me['@{show}']();
                    }
                })
                break;
            case 'hover':
                triggerNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);
                    me['@{show}']();
                }, () => {
                    me['@{delay.hide}']();
                });

                menuWrapper.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, () => {
                    me['@{delay.hide}']();
                });
                break;
        }
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id);
    },
    '@{delay.hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), 250);
    },
    '@{val}'() {
        let me = this;
        let selected = me.updater.get('selected');
        if (me['@{bak.type}'] == 'array') {
            me['@{owner.node}'].val(selected);
        } else {
            me['@{owner.node}'].val(selected.join(','));
        }
    },
    '@{hide}'() {
        let me = this;
        let data = me.updater.get();
        if (data.expand) {
            me.updater.digest({
                expand: false
            });
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);

            let selected = data.selected,
                groups = data.groups;
            groups.forEach(group => {
                let checkes = [];
                group.list.forEach(item => {
                    item.checked = (selected.indexOf(item.value + '') > -1);

                    if (item.checked) {
                        checkes.push(item.value);
                    }
                })

                group.type = (checkes.length > 0) ? ((checkes.length == group.list.length) ? 3 : 2) : 1;
            })

            me.updater.digest({
                groups,
                selected,
                imme: selected,
                selectedText: me['@{getText}'](selected)
            })

            me['@{val}']();
        }
    },
    '@{show}'() {
        let me = this;
        let data = me.updater.get();
        if (!data.expand) {
            let d = {
                expand: true
            }
            let r = data.rList;
            if (!r) {
                d.rList = true;
            }

            // 对浮层位置进行修正
            let menuWrapper = $('#' + me.id + ' .@index.less:dropdown-menu-wrapper');
            let win = $(window);
            let winWidth = win.width(),
                menuOffset = me['@{owner.node}'].offset(),
                menuWidth = menuWrapper.outerWidth();
            let menuLeft;
            if (menuOffset.left + menuWidth > winWidth) {
                menuLeft = Math.min(
                    (menuOffset.left + menuWidth - winWidth),
                    menuOffset.left
                )
            }
            if (menuLeft > 0) {
                d.menuStyles = 'left:' + (0 - menuLeft) + 'px';
            }

            me.updater.digest(d);
            me['@{owner.node}'].trigger('focusin');

            let listNode = $('#list_' + me.id);
            let active = listNode.find('.@index.less:active');
            let pos = active.position();
            if (pos) {
                // 当前已选项在可是范围之内
                let height = listNode.height();
                let stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    let top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['@{add}'](me);
        }
    },
    '@{getText}'(selected) {
        let me = this;
        let data = me.updater.get();
        let emptyText = data.emptyText;
        if (selected.length == 0) {
            return emptyText;
        }

        let map = data.map,
            text = [];
        for (let value of selected) {
            let entity = map[value] || {};
            text.push(entity.text);
        }

        let name = data.name;
        if (text.length == Object.keys(map).length) {
            if (name) {
                return I18n['dropdown.all.custom'] + name;
            } else {
                return I18n['dropdown.all.default'];
            }
        } else {
            return text.join(',');
        }

    },

    '@{fn.search}'(val, callback) {
        let me = this;
        let data = me.updater.get();
        let groups = data.groups;

        if (!val) {
            groups.forEach(group => {
                group.hide = false;
                group.list.forEach(item => {
                    item.hide = false;
                })
            })
            callback(groups);
            return;
        }

        let lowVal = (val + '').toLocaleLowerCase();
        groups.forEach(group => {
            let allHide = true;
            group.list.forEach(item => {
                let lowText = (item.text + '').toLocaleLowerCase();
                item.hide = (lowText.indexOf(lowVal) < 0);
                allHide = allHide && item.hide;
            })
            group.hide = allHide;
        })
        callback(groups);
    },
    '@{search}<keyup,paste>'(e) {
        let me = this;
        clearTimeout(me['@{search.delay.timer}']);
        let val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, (groups) => {
                    me.updater.digest({
                        groups
                    });
                });
            }
        }), 300);
    },

    '@{checkItem}<change>'(e) {
        e.stopPropagation();
        let me = this;
        let value = e.params.value,
            groupIndex = e.params.groupIndex,
            checked = e.target.checked;
        me['@{checkGroup}'](groupIndex, value, checked);
    },

    /**
     * 全选的时候注意限制上限
     */
    '@{checkAll}<click>'(e) {
        let me = this;
        let checked = e.params.checked;
        me['@{checkGroup}']('all', 'all', checked);
    },

    '@{checkGroup}<change>'(e) {
        e.stopPropagation();

        let me = this;
        let groupIndex = e.params.groupIndex,
            checked = e.target.checked;
        me['@{checkGroup}'](groupIndex, 'all', checked);
    },

    /**
     * 全选的时候注意限制上限
     */
    '@{checkGroup}'(groupIndex, value, checked) {
        let me = this;
        let data = me.updater.get();
        let groups = data.groups;

        let groups = me.updater.get('groups');

        let max = me.updater.get('max'),
            imme = me.updater.get('imme');

        let last = 0;
        if (max > 0) {
            last = max - imme.length;
        }

        let newImme = [];
        groups.forEach((group, gi) => {
            let checkes = [];
            group.list.forEach(item => {
                if ((groupIndex === 'all' || (groupIndex == gi)) &&
                    (value == 'all' || value == item.value)) {
                    // 重新设置
                    if (checked) {
                        // 选中
                        if (max > 0) {
                            // 有上限
                            if (last > 0 && !item.checked) {
                                item.checked = true;
                                last -= 1;
                            } else {
                                // 选择top max
                                // 其他保持原来的状态
                            }
                        } else {
                            item.checked = true;
                        }
                    } else {
                        // 取消选择
                        item.checked = false;
                    }
                }

                if (item.checked) {
                    checkes.push(item.value);
                }
            })
            group.type = (checkes.length > 0) ? ((checkes.length == group.list.length) ? 3 : 2) : 1;
            newImme = newImme.concat(checkes);
        })

        me.updater.digest({
            groups,
            imme: newImme
        })
    },

    '@{stop}<change,focusin,focusout>'(e) {
        e.stopPropagation();
    },
    '@{submit}<click>'(e) {
        let me = this;

        let data = me.updater.get();
        let groups = data.groups;
        let selected = [];
        let selectedIndexes = []; //用于判断选择是否连续
        let index = 0;
        groups.forEach(group => {
            group.list.forEach(item => {
                index += 1;
                if (item.checked) {
                    // 字符串方便判断
                    selected.push(item.value + '');

                    let len = selectedIndexes.length;
                    if(len == 0){
                        selectedIndexes.push(index);
                    }else{
                        if(selectedIndexes[len - 1] + 1 == index){
                            selectedIndexes[len - 1] = index;
                        }else{
                            selectedIndexes.push(index);
                        }
                    }
                }
            })
        })
        let min = me.updater.get('min');
        if((min > 0) && (selected.length < min)){
            me.updater.digest({
                errMsg: `请至少选择${min}个`
            })
            return;
        }
        let continuous = me.updater.get('continuous');
        if(continuous && (selected.length > 0)){
            let name = me.updater.get('name') || '数据';
            if(selectedIndexes.length > 1){
                // 连续选择
                me.updater.digest({
                    errMsg: `请选择连续的${name}`
                })
                return;
            }
        }

        me.updater.set({
            errMsg: '',
            selected
        })

        me['@{hide}']();

        let map = data.map;
        let texts = selected.map(value => {
            return map[value].text;
        })
        // 确定的时候才更新
        me['@{owner.node}'].trigger({
            type: 'change',
            texts,
            values: selected,
            selected: $('#' + me.id).val()
        });
    },
    '@{hide}<click>'(e) {
        this['@{hide}']();
    }

});