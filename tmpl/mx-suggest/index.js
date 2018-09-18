let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let Monitor = require('../mx-monitor/index');


module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
            if (that['@{suggest.delay.timer}']) {
                clearTimeout(that['@{suggest.delay.timer}']);
            }
        });
    },
    assign: function (data) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var placeholder = data.placeholder || '';
        if (!placeholder) {
            placeholder = '搜索';
        }
        var align = data.align || 'left';
        // 多种类型搜索的时候
        var list = that['@{wrap}'](data.list);
        //当前选中的value值
        var selectedValue = data.selected || '';
        var selectText = '';
        if (selectedValue) {
            for (var index = 0; index < list.length; index++) {
                if (list[index].value == selectedValue) {
                    selectText = list[index].text;
                    break;
                }
            }
        }
        // 上下键切换缓存
        that['@{value.bak}'] = selectedValue;
        that['@{list.bak}'] = list;
        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: list,
            selectedValue: selectedValue,
            selectText: selectText,
            placeholder: placeholder,
            align: align,
            show: false
        });
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }
        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    '@{wrap}': function (origin) {
        var list = [];
        if (origin && (origin.length > 0)) {
            if (typeof origin[0] === 'object') {
                // 本身是个对象
                list = origin.map(function (item) {
                    return {
                        text: item.text,
                        value: item.value
                    };
                });
            }
            else {
                // 直接value列表
                list = origin.map(function (value) {
                    return {
                        text: value,
                        value: value
                    };
                });
            }
        }
        return list;
    },
    render: function () {
        this.updater.digest();
    },
    '@{suggest}<focusin,keyup,paste>': function (e) {
        e.stopPropagation();
        var that = this;
        if (that['@{suggest.delay.timer}']) {
            clearTimeout(that['@{suggest.delay.timer}']);
        }
        var data = that.updater.get();
        var list = data.list, selectedValue = data.selectedValue;
        var idx = -1;
        for (var index = 0; index < list.length; index++) {
            if (list[index].value == selectedValue) {
                idx = index;
                break;
            }
        }
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (e.keyCode == 40) {
                // 下移
                idx += 1;
                if (idx >= list.length) {
                    idx = 0;
                }
            }
            if (e.keyCode == 38) {
                // 下移
                idx -= 1;
                if (idx < 0) {
                    idx = list.length - 1;
                }
            }
            that.updater.digest({
                selectedValue: list[idx].value
            });
        }
        else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            that['@{value.bak}'] = list[idx].value;
            that['@{hide}']();
            that['@{fire}']();
        }
        else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 300);
        }
    },
    '@{hide}': function () {
        var that = this;
        var data = that.updater.get();
        var list = data.list, selectedValue = that['@{value.bak}'] + '', selectText = '';
        // 上下键切换未选择
        for (var index = 0; index < list.length; index++) {
            var item = list[index];
            if ((item.value + '') === selectedValue) {
                selectText = item.text;
                break;
            }
        }
        that.updater.digest({
            selectedValue: selectedValue,
            selectText: selectText,
            show: false
        });
        Monitor['@{remove}'](that);
    },
    /**
     * 外部更新list可选项
     */
    update: function (list) {
        var that = this;
        that['@{list.bak}'] = that['@{wrap}'](list);
        that['@{show}'](true);
    },
    '@{show}': function (ignore) {
        var that = this;
        var source = that['@{list.bak}'];
        var selectText = $('#' + that.id + '_input').val();
        var lowerText = (selectText + '').toLowerCase();
        var list = [];
        source.forEach(function (item) {
            if ((item.text + '').toLowerCase().indexOf(lowerText) > -1) {
                list.push(item);
            }
        });
        that.updater.digest({
            list: list,
            selectText: selectText,
            show: true
        });
        Monitor['@{add}'](that);
        if (!ignore) {
            that['@{owner.node}'].trigger({
                type: 'showList'
            });
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        var that = this;
        var item = e.params.item;
        that.updater.digest({
            selectText: item.text,
            selectedValue: that['@{value.bak}'] = item.value,
            show: false
        });
        that['@{fire}']();
    },
    '@{fire}': function () {
        var that = this;
        var suggestValue = that.updater.get('suggestValue');
        that['@{owner.node}'].val(suggestValue).trigger({
            type: 'suggest',
            selected: suggestValue
        });
    }
});