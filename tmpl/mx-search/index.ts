import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        Monitor['@{setup}']();
        this.assign(extra);

        this.on('destroy', () => {
            $('#mx_output_' + this.id).remove();
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();

            ['@{search.delay.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },
    assign(data) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        // 对齐方式
        let align = data.align || 'left';

        // 空状态文案
        let placeholder = data.placeholder || '';

        // 多种类型搜索的时候
        let list = [];
        if (data.list) {
            let listText = data.listText || 'text';
            let listValue = data.listValue || 'value';
            try {
                list = (new Function('return ' + data.list))();
            } catch (e) {
                list = data.list;
            }
            list = list.map((item) => {
                let tpls = (item.tmpl || ('搜索含有 “${content}” 的' + item[listText])).split('${content}');
                return {
                    prefix: tpls[0],
                    suffix: tpls[1],
                    text: item[listText],
                    value: item[listValue],
                }
            })
            if (!placeholder) {
                let ts = list.map(item => {
                    return item.text;
                });
                placeholder = ts.join('/');
            }
        } else {
            if (!placeholder) {
                placeholder = '搜索';
            }
        }


        //当前选中的key值
        let searchKey = data.searchKey || '';
        this['@{search.key}'] = searchKey;

        //当前填入的搜索内容
        let searchValue = data.searchValue || '';
        this['@{search.value}'] = searchValue;

        this.updater.set({
            list,
            searchKey,
            searchValue,
            placeholder,
            align,
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{val}']();
    },

    '@{val}'(fire) {
        let { searchValue, searchKey } = this.updater.get();
        this['@{owner.node}'].val(searchValue);
        if (fire) {
            // 双向绑定，多key值直接从event上取
            // 组件入参search-key：event上为驼峰searchKey
            // 取值时注意转换
            this['@{owner.node}'].val(searchValue).trigger({
                type: 'change',
                searchKey,
                searchValue,
                selected: searchValue,
            });

            // 兼容老的事件处理
            this['@{owner.node}'].trigger({
                type: 'search',
                searchKey,
                searchValue,
            })
        }
    },

    '@{init}'() {
        let that = this;

        let toggleNode = $('#toggle_' + that.id);
        let minWidth = toggleNode.outerWidth(),
            vId = that.id;
        let maxWidth = (minWidth * 2.5);

        let ddId = `mx_output_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="mx-output" id="${ddId}"
                style="min-width: ${minWidth}px; max-width: ${maxWidth}px;"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = that.owner.mountVframe(ddId, '');
        vf.on('created', () => {
            that['@{set.pos}']();
        });
        that['@{content.vf}'] = vf;
    },

    '@{set.pos}'() {
        let oNode = this['@{owner.node}'];
        let ddNode = $('#mx_output_' + this.id);
        let width = oNode.outerWidth(),
            height = oNode.outerHeight(),
            offset = oNode.offset();

        let { align } = this.updater.get();
        if (align == 'right') {
            ddNode.css({
                top: offset.top + height,
                left: 'auto',
                right: document.documentElement.clientWidth - offset.left - width,
            });
        } else {
            ddNode.css({
                top: offset.top + height,
                left: offset.left,
                right: 'auto',
            });
        }
        return ddNode;
    },

    '@{show}'() {
        // this['@{search.value}']可能会变，每次变更需要重新渲染
        let { list } = this.updater.get();
        if (list.length > 0 && this['@{search.value}']) {
            if (!this['@{pos.init}']) {
                this['@{pos.init}'] = true;
                this['@{init}']();
            }

            this.updater.digest({
                expand: true
            })
            this['@{content.vf}'].mountView('@./content', {
                data: {
                    list,
                    searchValue: this['@{search.value}'],
                    searchKey: this['@{search.key}'],
                },
                prepare: () => {
                    // 每次show时都重新定位
                    let ddNode = this['@{set.pos}']();
                    this['@{mx.output.show}'](ddNode);
                    Monitor['@{add}'](this);
                },
                submit: (result) => {
                    this.updater.digest(result);
                    this['@{hide}']();
                    this['@{val}'](true);
                },
            })
        }
    },

    '@{hide}'() {
        if (this.updater.get('expand')) {
            // 防止上下键切换未选中
            let { searchKey, searchValue } = this.updater.get();
            this['@{search.key}'] = searchKey;
            this['@{search.value}'] = searchValue;

            this.updater.digest({
                expand: false
            })
            let ddNode = $('#mx_output_' + this.id);
            this['@{mx.output.hide}'](ddNode);
            Monitor['@{remove}'](this);
        }
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'mx_output_' + this.id);
    },

    '@{search}<focusin,keyup,paste>'(e) {
        e.stopPropagation();
        let that = this;
        if (that['@{search.delay.timer}']) {
            clearTimeout(that['@{search.delay.timer}']);
        }

        let { expand, list } = that.updater.get();
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (expand) {
                let idx = -1;
                for (let index = 0; index < list.length; index++) {
                    if (list[index].value == this['@{search.key}']) {
                        idx = index;
                        break;
                    }
                }
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
                that['@{search.key}'] = list[idx].value;
                that['@{show}']();
            }
        } else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (!that['@{search.key}'] && list && list.length > 0) {
                that['@{search.key}'] = list[0].value;
            }
            that.updater.digest({
                searchKey: that['@{search.key}'],
                searchValue: that['@{search.value}'] = $.trim(e.eventTarget.value),
            });
            that['@{hide}']();
            that['@{val}'](true);
        } else {
            that['@{search.delay.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{search.value}'] = $.trim(e.eventTarget.value);
                that['@{show}']();
            }), 250);
        }
    },

    '@{stop}<change,focusout>'(e) {
        e.stopPropagation();
    },
});

