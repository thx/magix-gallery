import { wrap } from 'module';

let Magix = require('magix');
let Vframe = Magix.Vframe;
let $ = require('$');
Magix.applyStyle('@../mx-popover/index.less');
let ShowDalay = 100;

let ClassNames = {
    bl: '@../mx-popover/index.less:bottom-left',
    br: '@../mx-popover/index.less:bottom-right',
    bc: '@../mx-popover/index.less:bottom-center',
    tl: '@../mx-popover/index.less:top-left',
    tr: '@../mx-popover/index.less:top-right',
    tc: '@../mx-popover/index.less:top-center',
    lt: '@../mx-popover/index.less:left-top',
    lb: '@../mx-popover/index.less:left-bottom',
    lc: '@../mx-popover/index.less:left-center',
    rt: '@../mx-popover/index.less:right-top',
    rb: '@../mx-popover/index.less:right-bottom',
    rc: '@../mx-popover/index.less:right-center'
}
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        let place = extra.place || 'bc';
        me['@{pos.class}'] = ClassNames[place];
        me['@{pos.class}'] += ' @../mx-popover/index.less:popover';
        me['@{pos.place}'] = place;
        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        me['@{content}'] = extra.content || '';
        me['@{width}'] = extra.width || 200;
        me['@{text.align}'] = (extra.alignText || 'left');
        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            $('#popover_' + me.id).remove();
        });
        let oNode = $('#' + me.id);
        me['@{trigger.content}'] = oNode.html();
        me['@{owner.node}'] = oNode;
        oNode.on('click', () => {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), ShowDalay);
        })

        me.bindScroll();
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
    },

    '@{init}'() {
        let me = this;

        let posClass = me['@{pos.class}'],
            posWidth = me['@{width}'],
            vId = me.id,
            view = '@./content',
            viewData = {
                content: me['@{content}']
            }

        let popNode = `<div class="@../mx-popover/index.less:popover-hide ${posClass}" id="popover_${vId}"
                style="width: ${posWidth}px;"></div>`;
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', () => {
            let popNode = me['@{setPos}']();
            popNode.removeClass('@../mx-popover/index.less:popover-hide');
        });
        vf.mountView(view, {
            data: viewData,
            submit: () => {
                me['@{hide}']();
                me['@{owner.node}'].trigger({
                    type: 'popconfirm'
                });
            },
            cancel: () => {
                me['@{hide}']();
            }
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

        let place = me['@{pos.place}']
        switch (place) {
            case 'tl':
                top = offset.top - rHeight - 10;
                left = offset.left;
                break;
            case 'tc':
                top = offset.top - rHeight - 10;
                left = offset.left - (rWidth - width) / 2
                break;
            case 'tr':
                top = offset.top - rHeight - 10;
                left = offset.left + width - rWidth;
                break;
            case 'bl':
                top = offset.top + height + 10;
                left = offset.left;
                break;
            case 'bc':
                top = offset.top + height + 10;
                left = offset.left - (rWidth - width) / 2
                break;
            case 'br':
                top = offset.top + height + 10;
                left = offset.left + width - rWidth;
                break;
            case 'lt':
                top = offset.top;
                left = offset.left - rWidth - 10;
                break;
            case 'lc':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left - rWidth - 10;
                break;
            case 'lb':
                top = offset.top - (rHeight - height);
                left = offset.left - rWidth - 10;
                break;
            case 'rt':
                top = offset.top;
                left = offset.left + width + 10;
                break;
            case 'rc':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left + width + 10;
                break;
            case 'rb':
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
        popNode.addClass('@../mx-popover/index.less:show-out');
    },
    '@{hide}'() {
        let me = this;
        if (!me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = false;
        let popNode = $('#popover_' + me.id);
        popNode.removeClass('@../mx-popover/index.less:show-out');
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