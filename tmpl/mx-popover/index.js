import { wrap } from 'module';

let Magix = require('magix');
let Vframe = Magix.Vframe;
let $ = require('$');
Magix.applyStyle('@index.less');
let ShowDalay = 100;
let HideDalay = 200;

let ClassNames = {
    bottomLeft: '@index.less:bottom-left',
    bottomRight: '@index.less:bottom-right',
    bottomCenter: '@index.less:bottom-center',
    topLeft: '@index.less:top-left',
    topRight: '@index.less:top-right',
    topCenter: '@index.less:top-center',
    leftTop: '@index.less:left-top',
    leftBottom: '@index.less:left-bottom',
    leftCenter: '@index.less:left-center',
    rightTop: '@index.less:right-top',
    rightBottom: '@index.less:right-bottom',
    rightCenter: '@index.less:right-center'
}
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        let placement = extra.placement || 'bottom',
            align = extra.align || 'center';
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;
        me['@{pos.class}'] = ClassNames[placement + align[0].toUpperCase() + align.slice(1)];
        if (extra.type == 'dark') {
            me['@{pos.class}'] += ' @index.less:popover-dark';
        } else {
            me['@{pos.class}'] += ' @index.less:popover';
        }
        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width || 200;
        me['@{auto}'] = (/^true$/i).test(extra.auto) || false;
        me['@{custom.view}'] = extra.view || '';
        me['@{custom.view.data}'] = extra.data || {};
        me['@{text.align}'] = (extra.alignText || 'left');
        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#popover_' + me.id).remove();
        });
        let oNode = $('#' + me.id);
        me['@{trigger.content}'] = oNode.html();
        me['@{owner.node}'] = oNode;
        oNode.hover(() => {
            clearTimeout(me['@{dealy.hide.timer}']);

            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), ShowDalay);
        }, () => {
            me['@{hide}']();
        });
    },
    bindScroll() {
        let me = this;
        let scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }

        let wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        } else {
            wrapper = $(scrollWrapper);
        }

        wrapper.scroll(() => {
            if (me['@{pos.show}']) {
                me['@{setPos}']();
            }
        });
    },
    render() {
        let me = this;
        me.updater.digest({
            trigger: me['@{trigger.content}']
        })

        if (me['@{auto}']) {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), ShowDalay);
        }

        me.bindScroll();
    },

    '@{init}'() {
        let me = this;

        let posClass = me['@{pos.class}'],
            posWidth = me['@{width}'],
            view = me['@{custom.view}'],
            viewData = me['@{custom.view.data}'],
            vId = me.id;
        if (!view) {
            view = '@./content';
            viewData = {
                content: me['@{content}']
            }
        }

        let popNode = `<div class="@index.less:popover-hide ${posClass}" id="popover_${vId}"
                style="width: ${posWidth}px;"></div>`;
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', () => {
            let popNode = me['@{setPos}']();
            popNode.removeClass('@index.less:popover-hide');

            popNode.hover(() => {
                clearTimeout(me['@{dealy.hide.timer}']);
            }, () => {
                me['@{hide}']();
            });
        });
        vf.mountView(view, {
            data: viewData
        })
    },
    '@{setPos}'() {
        let me = this;
        let oNode = me['@{owner.node}'];
        let popNode = $('#popover_' + me.id);

        if (!popNode || !popNode.length) {
            return;
        }

        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        let offset = oNode.offset();
        let rWidth = popNode.outerWidth();
        let rHeight = popNode.outerHeight();

        // 默认下方居中
        let top = offset.top + 10,
            left = offset.left - (rWidth - width) / 2;
        // 可选组合：
        //     下右中左
        //     上右中左
        //     右上中下
        //     左上中下
        let placement = me['@{pos.placement}'],
            align = me['@{pos.align}'];
        let place = placement + '_' + align;
        switch (place) {
            case 'top_left':
                top = offset.top - rHeight - 10;
                left = offset.left;
                break;
            case 'top_center':
                top = offset.top - rHeight - 10;
                left = offset.left - (rWidth - width) / 2
                break;
            case 'top_right':
                top = offset.top - rHeight - 10;
                left = offset.left + width - rWidth;
                break;
            case 'bottom_left':
                top = offset.top + height + 10;
                left = offset.left;
                break;
            case 'bottom_center':
                top = offset.top + height + 10;
                left = offset.left - (rWidth - width) / 2
                break;
            case 'bottom_right':
                top = offset.top + height + 10;
                left = offset.left + width - rWidth;
                break;
            case 'left_top':
                top = offset.top;
                left = offset.left - rWidth - 10;
                break;
            case 'left_center':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left - rWidth - 10;
                break;
            case 'left_bottom':
                top = offset.top - (rHeight - height);
                left = offset.left - rWidth - 10;
                break;
            case 'right_top':
                top = offset.top;
                left = offset.left + width + 10;
                break;
            case 'right_center':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left + width + 10;
                break;
            case 'right_bottom':
                top = offset.top - (rHeight - height);
                left = offset.left + width + 10;
                break;
        }

        popNode.css({
            textAlign: me['@{text.align}'],
            left: left,
            top: top
        });

        return popNode;
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
        // 每次show时都重新定位
        let popNode = me['@{setPos}']();
        popNode.addClass('@index.less:show-out');
    },
    '@{hide}'() {
        let me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            if (!me['@{pos.show}']) {
                return;
            }
            me['@{pos.show}'] = false;
            let popNode = $('#popover_' + me.id);
            popNode.removeClass('@index.less:show-out');
        }), HideDalay);
    },
    /**
     * 页面滚动的时候
     * 如果popover展开则重新定位popover
     */
    '$win<scroll>'(e) {
        let me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>'(e) {
        let me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    }
});