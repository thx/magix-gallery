import Magix, { Vframe } from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
import * as Monitor from '../mx-util/monitor';
Magix.applyStyle('@../mx-popover/index.less');
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.updater.set({
            constants: {
                showDelay: extra.showDelay || 100,
                hideDelay: extra.hideDelay || 200,
                classNames: 'names@../mx-popover/index.less[bottom-left,bottom-right,bottom-center,top-left,top-right,top-center,left-top,left-bottom,left-center,right-top,right-bottom,right-center]',
            }
        });

        this.assign(extra);
    },
    assign(extra, configs) {
        let me = this;
        let { showDelay, classNames } = me.updater.get('constants');
        Monitor['@{setup}']();

        // 展示内容（配置content的场景加上icon）
        // 配置content：使用组件内置的节点样式，追加箭头
        // <mx-popmenu></mx-popmenu>：标签包裹的content，给用户纯自定义，维持老的使用方式

        let disabled = extra.disabled + '' === 'true';
        this.updater.set({
            disabled,
            disabledTip: extra.disabledTip,
            size: extra.size || '',
            mode: extra.mode || '',
            tagContent: extra.tagContent || '',
            custom: !!extra.content,
        })
        if (configs && configs.node) {
            // attr change
            // 此时取owner.innerHTML为button
            this.updater.set({
                content: extra.content ? extra.content : (configs.node.innerHTML || ''),
            })
        } else {
            // 首次渲染
            let owner = document.getElementById(me.id);
            this.updater.set({
                content: extra.content ? extra.content : (owner.innerHTML || ''),
            })
        }

        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;

        if (!disabled) {
            let showFn = () => {
                if (me.updater.get('disabled')) {
                    return;
                }
                clearTimeout(me['@{dealy.hide.timer}']);
                me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                    me['@{show}'](); //等待内容显示
                }), showDelay);
            }

            // trigger方式，click，hover，默认click
            me['@{trigger.type}'] = extra.triggerType || 'hover';
            switch (me['@{trigger.type}']) {
                case 'click':
                    oNode.click(showFn);
                    break;

                case 'hover':
                    oNode.hover(showFn, () => {
                        me['@{delay.hide}']();
                    });
                    break;

                case 'contextmenu':
                    // 右键显示的位置固定
                    me['@{pos.offset}'] = {
                        top: 0 - oNode.height() / 2 - 8,
                        left: oNode.width() / 2,
                    }
                    oNode.contextmenu((e) => {
                        e.preventDefault();
                        showFn();
                    });
                    break;
            }
        }

        // 展示位置 右键显示的位置固定bl
        let place = (extra.triggerType == 'contextmenu') ? 'bl' : (extra.place || 'bc');

        let map = {
            t: 'top',
            l: 'left',
            r: 'right',
            b: 'bottom',
            c: 'center'
        }
        let places = place.split('');
        let placement = map[places[0]],
            align = map[places[1]];
        me['@{pos.place}'] = place;
        me['@{pos.class}'] = classNames[[placement, align].join('-')] + ' @../mx-popover/index.less:popover @../mx-popover/index.less:with-transform';
        me['@{text.align}'] = (extra.textAlign || extra.alignText || 'left');

        me['@{pos.init}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        if (extra.adcList && extra.adcList.length > 0) {
            me['@{list}'] = extra.adcList.map(item => {
                return {
                    ...item,
                    text: item.name,
                    value: item.code,
                    tag: item.properties?.tag,
                    tagTip: item.properties?.tagTip,
                    confirmTitle: item.properties?.confirmTitle,
                    confirmContent: item.properties?.confirmContent,
                    disabled: item.properties?.disabled,
                    disabledTip: item.properties?.disabledTip,
                }
            })
        } else {
            let textKey = extra.textKey || 'text',
                valueKey = extra.valueKey || 'value';

            // extra.list  统一入参
            // extra.menus 老参数兼容
            me['@{list}'] = (extra.list || extra.menus || []).map(item => {
                return {
                    ...item,
                    text: item[textKey],
                    value: item[valueKey],
                };
            })
        }

        let reg = /^[0-9]*$/;
        me['@{width}'] = reg.test(extra.width) ? (extra.width + 'px') : (extra.width || 'auto');

        me.on('destroy', () => {
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#popmenu_' + me.id).remove();

            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });

        // 固定刷新
        return true;
    },
    render() {
        this.updater.digest();
    },
    '@{init}'() {
        let me = this;
        let { spm } = me.updater.get();
        let posClass = me['@{pos.class}'],
            posWidth = me['@{width}'],
            view = '@./content',
            viewData = {
                list: me['@{list}'],
                spm
            };

        let popId = `popmenu_${me.id}`;
        let popBd = $(`#${popId}`);
        if (!popBd.length) {
            $(document.body).append(`<div mx-view id="${popId}" style="min-width: ${posWidth};"></div>`);
        }

        // 每次都重新初始化样式class
        document.getElementById(popId).className = `@../mx-popover/index.less:popover-hide ${posClass}`;

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(popId, '');
        vf.on('created', () => {
            let popNode = me['@{set.pos}']();
            popNode.removeClass('@../mx-popover/index.less:popover-hide');

            if (me['@{trigger.type}'] == 'hover') {
                popNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, () => {
                    me['@{delay.hide}']();
                });
            }
        });
        vf.mountView(view, {
            data: viewData,
            submit: (selected) => {
                me['@{hide}']();

                let item = {};
                for (let i = 0; i < me['@{list}'].length; i++) {
                    if (me['@{list}'][i].value == selected) {
                        item = me['@{list}'][i];
                        break;
                    }
                }
                me['@{owner.node}'].trigger({
                    type: 'change',
                    selected,
                    item,
                });
            }
        })
    },
    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'popmenu_' + this.id);
    },
    '@{show}'() {
        let me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }
        if (me['@{pos.show}']) {
            return;
        }

        me['@{pos.show}'] = true;
        if (me.updater.get('custom')) {
            me.updater.digest({ show: me['@{pos.show}'] });
        }

        // 每次show时都重新定位
        let popNode = me['@{set.pos}']();
        popNode.addClass('@../mx-popover/index.less:show-out');
        Monitor['@{add}'](me);
    },
    '@{delay.hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        let { hideDelay } = me.updater.get('constants');
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{hide}']();
        }), hideDelay);
        Monitor['@{remove}'](me);
    },
    '@{hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        if (!me['@{pos.show}']) {
            return;
        }

        me['@{pos.show}'] = false;
        if (me.updater.get('custom')) {
            me.updater.digest({ show: me['@{pos.show}'] });
        }

        let popNode = $('#popmenu_' + me.id);
        popNode.removeClass('@../mx-popover/index.less:show-out');
        Monitor['@{remove}'](me);
    },

    '@{set.pos}'() {
        let me = this;
        let popNode = $('#popmenu_' + me.id);
        if (!popNode || !popNode.length) {
            return;
        };

        let oNode = me['@{owner.node}'];
        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        let offset = oNode.offset();
        let rWidth = popNode.outerWidth();
        let rHeight = popNode.outerHeight();

        let arrowGap = 0;
        let gap = 10;

        // 默认下方居中
        let top = offset.top + gap,
            left = offset.left - (rWidth - width) / 2;

        let customTop = +me['@{pos.top}'],
            customLeft = +me['@{pos.left}'];
        if (isNaN(customTop) || isNaN(customLeft)) {
            // 可选组合：
            //     下：右中左
            //     上：右中左
            //     右：上中下
            //     左：上中下
            let place = me['@{pos.place}'];
            switch (place) {
                case 'tl':
                    top = offset.top - rHeight - gap;
                    left = offset.left - arrowGap;
                    break;

                case 'tc':
                    top = offset.top - rHeight - gap;
                    left = offset.left - (rWidth - width) / 2
                    break;

                case 'tr':
                    top = offset.top - rHeight - gap;
                    left = offset.left + width - rWidth + arrowGap;
                    break;

                case 'bl':
                    top = offset.top + height + gap;
                    left = offset.left - arrowGap;
                    break;

                case 'bc':
                    top = offset.top + height + gap;
                    left = offset.left - (rWidth - width) / 2
                    break;

                case 'br':
                    top = offset.top + height + gap;
                    left = offset.left + width - rWidth + arrowGap;
                    break;

                case 'lt':
                    top = offset.top - arrowGap;
                    left = offset.left - rWidth - gap;
                    break;

                case 'lc':
                    top = offset.top - (rHeight - height) / 2;
                    left = offset.left - rWidth - gap;
                    break;

                case 'lb':
                    top = offset.top - (rHeight - height) + arrowGap;
                    left = offset.left - rWidth - gap;
                    break;

                case 'rt':
                    top = offset.top - arrowGap;
                    left = offset.left + width + gap;
                    break;

                case 'rc':
                    top = offset.top - (rHeight - height) / 2;
                    left = offset.left + width + gap;
                    break;

                case 'rb':
                    top = offset.top - (rHeight - height) + arrowGap;
                    left = offset.left + width + gap;
                    break;
            }
        } else {
            top = customTop;
            left = customLeft;
        }

        let customOffset = me['@{pos.offset}'] || {};
        if (!$.isEmptyObject(customOffset)) {
            left += (customOffset.left || 0);
            top += (customOffset.top || 0);
        }

        let winWidth = $(window).width();
        if (left < 0) {
            left = 0;
        } else if (left + rWidth > winWidth) {
            left = winWidth - rWidth;
        }

        popNode.css({
            textAlign: me['@{text.align}'],
            left: left,
            top: top
        });

        return popNode;
    },

    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScoll>'(e) {
        if (this['@{pos.show}']) {
            this['@{set.pos}']();
        }
    }
});