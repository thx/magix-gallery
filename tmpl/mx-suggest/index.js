let Magix = require('magix');
let $ = require('$');
let I18n = require('../mx-medusa/util');
let Monitor = require('../mx-util/monitor');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init: function (extra) {
        let that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);

        // 初始化列表为空默认为动态刷新列表
        let list = extra.list || [];
        that['@{dynamic.list}'] = (list.length == 0);

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
        let list = that['@{wrap}']((data.list || that['@{list.bak}']));
        that['@{list.bak}'] = list;

        // selectedValue：当前选中的value值
        // item：完整selected对象
        // 优先级selectedValue > item
        let item = data.item || {};
        let selectedValue = data.selected || item.value || '';
        let selectedText = item.text || '';
        if (selectedValue) {
            for (let index = 0; index < list.length; index++) {
                if (list[index].value == selectedValue) {
                    selectedText = list[index].text;
                    break;
                }
            }
        }

        // 上下键切换缓存
        that['@{value.bak}'] = selectedValue;

        // 在哪些值中搜索关键词
        let type = (data.type || 'text') + '';
        if (type == 'all') {
            type = 'text,value';
        }
        that['@{search.type}'] = type.split(',');
        that.updater.set({
            viewId: that.id,
            list: list,
            selectedValue: selectedValue,
            selectedText: selectedText,
            placeholder: placeholder,
            show: false,
            emptyText: I18n['empty.text']
        });
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selectedValue)

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
            } else {
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
        } else if (e.keyCode == 13) {
            // 回车逻辑
            that['@{enter}'](idx);
        } else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 300);
        }
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
        this['@{list.bak}'] = this['@{wrap}'](list);
        this['@{show}'](true);
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{show}': function (ignore) {
        let that = this;
        let selectedText = $('#' + that.id + '_input').val();
        if(that['@{dynamic.list}']){
            // 动态更新数据
            if(!selectedText){
                // 未输入内容不响应：清空选项
                that.updater.set({
                    list: that['@{list.bak}'] = []
                });
                that['@{hide}']();
            }else{
                that.updater.digest({
                    list: that['@{list.bak}'],
                    selectedText: selectedText,
                    show: true
                });
                Monitor['@{add}'](that);
                if(!ignore){
                    that['@{owner.node}'].trigger({
                        type: 'show',
                        keyword: selectedText
                    });
                }
            }
        }else{
            let source = that['@{list.bak}'];
            let lowerText = (selectedText + '').toLowerCase();
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
                selectedText: selectedText,
                show: true
            });
            Monitor['@{add}'](that);
            if(!ignore){
                that['@{owner.node}'].trigger({
                    type: 'show',
                    keyword: selectedText
                });
            }
        }
    },
    '@{hide}': function () {
        let that = this;
        let data = that.updater.get();
        let list = data.list, selectedValue = that['@{value.bak}'] + '', selectedText = '';
        // 上下键切换未选择
        for (let index = 0; index < list.length; index++) {
            let item = list[index];
            if ((item.value + '') === selectedValue) {
                selectedText = item.text;
                break;
            }
        }
        that.updater.digest({
            selectedValue: selectedValue,
            selectedText: selectedText,
            show: false
        });
        Monitor['@{remove}'](that);

        // 双向绑定
        that['@{owner.node}'].trigger('focusout');
    },
    '@{enter}': function (idx) {
        let that = this;
        let selectedText = $('#' + that.id + '_input').val();
        let item = {};
        if(!selectedText && that['@{dynamic.list}']){
            // 动态更新数据的时候，当前输入框为空，清空选中项
            item = {
                value: '',
                text: ''
            }
        }else{
            let { list } = that.updater.get();
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            item = list[idx];
        }
        this['@{select}'](item);
    },
    '@{select}<click>': function (e) {
        e.stopPropagation();
        let item = e.params.item;
        this['@{select}'](item);
    },
    '@{select}'(item){
        let that = this;
        let notice = !(item.value == that['@{value.bak}']);
        let selectedValue = that['@{value.bak}'] = item.value;
        that['@{hide}']();
        if(notice){
            // 双向绑定
            that['@{owner.node}'].val(selectedValue).trigger({
                type: 'suggest',
                selected: {
                    value: selectedValue,
                    text: item.text
                }
            });
            debugger
            // 触发双向绑定
            that['@{owner.node}'].trigger('change');
        }
    }
});