import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
import * as I18n from '../mx-medusa/util';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init: function (extra) {
        let that = this;
        that.updater.snapshot();
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
        let altered = that.updater.altered();

        let placeholder = data.placeholder || '';
        if (!placeholder) {
            placeholder = I18n['search'];
        }

        //动态数据时，是否回车默认选中第一个，默认为true
        that['@{dynamic.enter}'] = data.dynamicEnter + '' === 'true';

        // text，value的key值
        that['@{key.value}'] = data.listValue || 'value';
        that['@{key.text}'] = data.listText || 'text';

        let list = that['@{wrap}']((data.list || that['@{list.bak}']));
        that['@{list.bak}'] = list;

        // selectedValue：当前选中的value值
        // item：完整selected对象
        // 优先级item > selectedValue
        let item = data.item || {};
        let selectedValue = item.value || data.selected || '';
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
            list: list,
            selectedValue: selectedValue,
            selectedText: selectedText,
            placeholder: placeholder,
            show: false,
            emptyText: I18n['empty.text']
        });
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selectedValue);

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    '@{wrap}': function (origin) {
        let listValue = this['@{key.value}'],
            listText = this['@{key.text}']
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
        let { list, selectedValue } = that.updater.get();
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
            // 回车
            if (that['@{dynamic.enter}']) {
                // 回车选中当前输入值
                let selectedText = $('#' + that.id + '_input').val();
                that['@{select}']({
                    value: selectedText,
                    text: selectedText
                });
            } else {
                // 回车默认选中第一个
                that['@{enter}'](idx);
            }
        } else {
            that['@{suggest.delay.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{show}']();
            }), 400);
        }
    },
    '@{clear}<click>'() {
        let that = this;
        // 清空选中项
        that.updater.digest({
            selectedText: ''
        });
        that['@{select}']({
            value: '',
            text: ''
        });
    },
    '@{show}'(ignore) {
        let that = this;
        let selectedText = $('#' + that.id + '_input').val();
        let source = that['@{list.bak}'];
        let list = [];
        if (that['@{dynamic.list}']) {
            // 动态更新数据
            if (!selectedText) {
                // 未输入内容不响应：清空选项
                that.updater.set({
                    list: that['@{list.bak}'] = []
                });
                that['@{hide}']();

                // 不显示下拉框
                return;
            } else {
                // 动态情况下不需要过滤，直接显示动态更新的list
                list = source;
            }
        } else {
            // 静态数据根据关键词过滤
            let lowerText = (selectedText + '').toLowerCase();
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
        }
        that.updater.digest({
            list,
            selectedText: selectedText,
            show: true
        });
        Monitor['@{add}'](that);
        if (!ignore) {
            // 从不展开到展开状态，是否需要通知外部展开下拉框了
            that['@{owner.node}'].trigger({
                type: 'show',
                keyword: selectedText
            });
        }
    },
    '@{hide}'(item) {
        let that = this;
        if (that['@{suggest.delay.timer}']) {
            clearTimeout(that['@{suggest.delay.timer}']);
        }
        item = item || {
            text: $('#' + that.id + '_input').val()  //保留用户输入
        };

        let selectedValue = item.value || '',
            selectedText = item.text || '';
        that.updater.digest({
            selectedValue,
            selectedText,
            show: false,
            loading: false
        });
        Monitor['@{remove}'](that);

        // 双向绑定
        that['@{owner.node}'].trigger({
            type: 'focusout',
            keyword: selectedText
        });
    },
    /**
     * 回车处理
     */
    '@{enter}'(idx) {
        let that = this;
        let selectedText = $('#' + that.id + '_input').val();
        if (!selectedText && that['@{dynamic.list}']) {
            // 动态数据，输入框内容为空时
            // 清空选项
            that['@{select}']({
                value: '',
                text: ''
            });
        } else {
            let { list } = that.updater.get();
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            if (list[idx]) {
                that['@{select}'](list[idx]);
            }
        }
    },
    '@{select}<click>'(e) {
        e.stopPropagation();
        let item = e.params.item;
        this['@{select}'](item);
    },
    '@{select}'(item) {
        let that = this;
        let notice = !(item.value == that['@{value.bak}']);
        let selectedValue = that['@{value.bak}'] = item.value;
        that['@{hide}'](item);
        if (notice) {
            // 双向绑定
            that['@{owner.node}'].val(selectedValue).trigger({
                type: 'change',
                selected: selectedValue,
                item: item
            });

            // 兼容老的事件处理
            that['@{owner.node}'].trigger({
                type: 'suggest',
                selected: {
                    value: selectedValue,
                    text: item.text
                }
            });
        }
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{stop}<change,focusout>': function (e) {
        e.stopPropagation();
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
        let { show } = this.updater.get();
        if (show) {
            // 展开的情况下才去更新list，如果已关闭，则不更新
            this['@{list.bak}'] = this['@{wrap}'](list);
            this['@{show}'](true);
        }
    }
});