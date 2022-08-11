import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
Magix.applyStyle('@menu.less');
const ShowDelay = 100;
const HideDelay = 250;

export default View.extend({
    tmpl: '@menu.html',
    init(extra) {
        Monitor['@{setup}']();
        this.assign(extra);

        this.on('destroy', () => {
            $('#mx_output_' + this.id).remove();
            Monitor['@{remove}'](this);
            Monitor['@{teardown}']();

            ['@{dealy.show.timer}', '@{dealy.hide.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },
    assign(e) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        let textKey = e.textKey || 'text',
            valueKey = e.valueKey || 'value';

        let list = [];
        let originList;
        try {
            originList = (new Function('return ' + e.list))();
        } catch (err) {
            originList = e.list || [];
        }
        if (e.adcList && e.adcList.length > 0) {
            // adc树结构
            // {
            //     code: "对应value",
            //     name: "对应text",
            //     properties: {
            //         tag: "打标",
            //         icon: '标题旁小问号提示'
            //     }
            // }
            list = e.adcList.map(item => {
                return {
                    ...item,
                    value: item.code,
                    text: item.name,
                    tag: item.properties?.tag,
                    subs: (item.subComponentList || []).map(sub => {
                        return {
                            ...sub,
                            value: sub.code,
                            text: sub.name,
                            tag: item.properties?.tag,
                        }
                    })
                }
            })
        } else {
            // list = [{
            //     value: 1,
            //     text: '选项1',
            //     icon: '前面icon',
            //     tagContent: '打标html',
            //     tag: '打标文案',
            //     subs: [{
            //         value: 1,
            //         text: '选项1',
            //         tagContent: '打标html',
            //         tag: '打标文案',
            //     }]
            // }]
            list = (originList || []).map(item => {
                return {
                    ...item,
                    text: item[textKey],
                    value: item[valueKey],
                    subs: (item.subs || []).map(sub => {
                        return {
                            ...sub,
                            text: sub[textKey],
                            value: sub[valueKey],
                        }
                    })
                }
            });
        }

        // 选中值，包含0的情况
        let selected = (e.selected === null || e.selected === undefined) ? (list[0]?.value || '') : e.selected,
            selectedItem = {};

        // 菜单是否展开（默认展开）
        let expand = e.expand + '' !== 'false';

        // 菜单型
        list.forEach((item, i) => {
            if (item.subs && item.subs.length) {
                // 有子项
                let selectedSubIndex = -1;
                for (let j = 0; j < item.subs.length; j++) {
                    if (item.subs[j].value == selected) {
                        selectedSubIndex = j;
                        selectedItem = item.subs[j];
                        break;
                    }
                }

                Magix.mix(item, {
                    parentSelected: selectedSubIndex >= 0,
                    expand: selectedSubIndex >= 0,
                })
            } else {
                if (item.value == selected) {
                    selectedItem = item;
                }

                // 无子项
                Magix.mix(item, {
                    expand: false
                })
            }
        })
        this.updater.set({
            expand,
            selected,
            selectedItem,
            list,
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
        let { selectedItem } = this.updater.get();
        this['@{owner.node}'].val(selectedItem.value);
        if (fire) {
            this['@{owner.node}'].trigger({
                type: 'change',
                item: selectedItem,
                value: selectedItem.value,
                text: selectedItem.text,
                selected: selectedItem.value,
            });
        }
    },

    '@{expand.parent}<click>'(e) {
        let that = this;
        let { list } = that.updater.get();
        let index = +e.params.index;
        list.forEach((item, i) => {
            Magix.mix(item, {
                expand: (i === index) ? !item.expand : false,
            })
        })
        this.updater.digest({
            list
        })
    },

    '@{select.parent}<click>'(e) {
        let that = this;
        let { list, selected } = that.updater.get();
        let index = +e.params.index;
        let selectedItem = list[index];
        if (selected == selectedItem.value) {
            return;
        }

        list.forEach(item => {
            Magix.mix(item, {
                parentSelected: false,
            })
        })
        that.updater.digest({
            selected: selectedItem.value,
            selectedItem,
            list,
        })
        that['@{val}'](true);
        that['@{hide}']();
    },

    '@{select.child}<click>'(e) {
        let that = this;
        let { list, selected } = that.updater.get();
        let index = +e.params.index,
            subIndex = +e.params.subIndex;
        let parent = list[index];
        let selectedItem = parent.subs[subIndex];
        if (selected == selectedItem.value) {
            return;
        }

        list.forEach((item, i) => {
            Magix.mix(item, {
                parentSelected: i == index,
            })
        })
        that.updater.digest({
            selected: selectedItem.value,
            selectedItem,
            list,
        })
        that['@{val}'](true);
        that['@{hide}']();
    },

    '@{hover}<mouseover,mouseout>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }

        let that = this;
        clearTimeout(that['@{dealy.show.timer}']);
        clearTimeout(that['@{dealy.hide.timer}']);
        if (e.type == 'mouseout') {
            that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{hide}']();
            }), HideDelay);
        } else {
            that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(() => {
                that['@{show}'](+e.params.index);
            }), ShowDelay);
        }
    },

    '@{init}'(index) {
        let that = this;
        let vId = that.id;

        let ddId = `mx_output_${vId}`;
        let ddNode = $(`#${ddId}`);
        if (!ddNode.length) {
            ddNode = $(`<div mx-view class="mx-output" id="${ddId}"
                style="${[
                    'width: auto',
                    'min-width: 0',
                    'max-width: none',
                    'padding: var(--mx-trigger-v-gap, 8px) var(--mx-trigger-h-gap, 8px)',
                    'transition: top var(--duration)',
                    '--mx-tabs-menu-selected-color: var(--color-brand)',
                    '--mx-tabs-menu-selected-bg: var(--color-brand-opacity)',
                    '--mx-tabs-menu-selected-shadow: none',
                ].join(';')}"></div>`);
            $(document.body).append(ddNode);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = that.owner.mountVframe(ddId, '');
        vf.on('created', () => {
            let ddNode = that['@{set.pos}'](index);
            ddNode.hover(() => {
                clearTimeout(that['@{dealy.hide.timer}']);
            }, () => {
                clearTimeout(that['@{dealy.show.timer}']);
                clearTimeout(that['@{dealy.hide.timer}']);
                that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(() => {
                    that['@{hide}']();
                }), HideDelay);
            });
        });
        that['@{content.vf}'] = vf;
    },

    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'mx_output_' + this.id);
    },

    '@{show}'(index) {
        let that = this;
        if (!that['@{pos.init}']) {
            that['@{pos.init}'] = true;
            that['@{init}'](index);
        }

        let { list, selected } = that.updater.get();
        that['@{content.vf}'].mountView('@./menu-pop', {
            data: {
                index,
                item: list[index],
                selected,
            },
            prepare: () => {
                // 每次show时都重新定位
                let ddNode = that['@{set.pos}'](index);
                that['@{mx.output.show}'](ddNode);
                Monitor['@{add}'](that);
            },
            submit: (params) => {
                if (params.hasOwnProperty('subIndex')) {
                    that['@{select.child}<click>']({
                        params
                    });
                } else {
                    that['@{select.parent}<click>']({
                        params
                    });
                }
            },
        });

        that['@{menu.show}'] = true;
    },

    '@{hide}'() {
        if (this['@{menu.show}']) {
            this['@{menu.show}'] = false;
            let ddNode = $('#mx_output_' + this.id);
            this['@{mx.output.hide}'](ddNode);
            Monitor['@{remove}'](this);
        }
    },

    '@{set.pos}'(index) {
        let oNode = this['@{owner.node}'].find(`[data-index="menu_${index}"]`);
        let ddNode = $('#mx_output_' + this.id);
        let width = oNode.outerWidth(),
            offset = oNode.offset();
        ddNode.css({
            left: `calc(${offset.left + width}px + var(--mx-tabs-menu-gap, 8px) + var(--mx-trigger-output-gap, 10px))`,
            top: `calc(${offset.top}px - var(--mx-trigger-output-gap, 10px))`,
        });
        return ddNode;
    },

});