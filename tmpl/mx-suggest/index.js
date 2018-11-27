let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let I18n = require('@../../mx-medusa/util');
let Monitor = require('../mx-monitor/index');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init: function (extra) {
        let that = this;
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
        let that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        let placeholder = data.placeholder || '';
        if (!placeholder) {
            placeholder = I18n['search'];
        }

        that['key.value'] = data.listValue || 'value';
        that['key.text'] = data.listText || 'text';

        // 多种类型搜索的时候
        let list = that['@{wrap}'](data.list);
        //当前选中的value值
        let selectedValue = data.selected || '';
        let selectText = '';
        if (selectedValue) {
            for (let index = 0; index < list.length; index++) {
                if (list[index].value == selectedValue) {
                    selectText = list[index].text;
                    break;
                }
            }
        }
        // 上下键切换缓存
        that['@{value.bak}'] = selectedValue;
        that['@{list.bak}'] = list;

        // 在哪些值中搜索关键词
        let type = (data.type || 'text') + '';
        if (type == 'all') {
            type = 'text,value';
        }
        that['@{search.type}'] = type.split(',');

        that['@{owner.node}'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: list,
            selectedValue: selectedValue,
            selectText: selectText,
            placeholder: placeholder,
            align: data.align || 'left',
            show: false,
            emptyText: I18n['empty.text']
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
        let listValue = this['key.value'],
            listText = this['key.text']
        let list = [];
        if (origin && (origin.length > 0)) {
            if (typeof origin[0] === 'object') {
                // 本身是个对象
                list = origin.map(function (item) {
                    return {
                        value: item[listValue],
                        text: item[listText]
                    };
                });
            }
            else {
                // 直接value列表
                list = origin.map(function (value) {
                    return {
                        value: value,
                        text: value
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
        let that = this;
        if (that['@{suggest.delay.timer}']) {
            clearTimeout(that['@{suggest.delay.timer}']);
        }
        let data = that.updater.get();
        let list = data.list, selectedValue = data.selectedValue;
        let idx = -1;
        for (let index = 0; index < list.length; index++) {
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
        let that = this;
        let data = that.updater.get();
        let list = data.list, selectedValue = that['@{value.bak}'] + '', selectText = '';
        // 上下键切换未选择
        for (let index = 0; index < list.length; index++) {
            let item = list[index];
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
    showLoading() {
        this.updater.digest({
            loading: true
        })
    },
    hideLoading() {
        this.updater.digest({
            loading: false
        })
    },
    /**
     * 外部更新list可选项
     */
    update: function (list) {
        let that = this;
        that['@{list.bak}'] = that['@{wrap}'](list);

        // 不需要再过来，直接返回什么，展示什么
        let selectText = $('#' + that.id + '_input').val();
        that.updater.digest({
            list: that['@{list.bak}'],
            selectText: selectText,
            show: true
        });
        Monitor['@{add}'](that);
    },
    '@{show}': function (ignore) {
        let that = this;
        let source = that['@{list.bak}'];
        let selectText = $('#' + that.id + '_input').val();
        let lowerText = (selectText + '').toLowerCase();
        let list = [];

        let types = that['@{search.type}'];
        source.forEach(function (item) {
            let has = false;
            types.forEach(type => {
                if ((item[type] + '').toLowerCase().indexOf(lowerText) > -1) {
                    has = true;
                }
            })
            if (has) {
                list.push(item);
            }
        });
        that.updater.digest({
            list: list,
            selectText: selectText,
            show: true
        });
        Monitor['@{add}'](that);
        that['@{owner.node}'].trigger({
            type: 'show',
            keyword: selectText
        });
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        let that = this;
        let item = e.params.item;
        that.updater.digest({
            selectText: item.text,
            selectedValue: that['@{value.bak}'] = item.value,
            show: false
        });
        that['@{fire}']();
    },
    '@{fire}': function () {
        let that = this;
        let selectedValue = that.updater.get('selectedValue'),
            selectText = that.updater.get('selectText');
        that['@{owner.node}'].val(selectedValue).trigger({
            type: 'suggest',
            selected: {
                value: selectedValue,
                text: selectText
            }
        });
    }
});