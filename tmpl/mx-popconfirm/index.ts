import Magix, { Vframe } from 'magix';
import * as $ from '$'
import Base from '../mx-popover/base';
import * as Monitor from '../mx-util/monitor';
Magix.applyStyle('@../mx-popover/index.less');

export default Base.extend({
    assign(extra) {
        let me = this;
        Monitor['@{setup}']();

        let { showDelay, classNames } = me.updater.get('constants');
        let map = {
            t: 'top',
            l: 'left',
            r: 'right',
            b: 'bottom',
            c: 'center'
        }
        let place = extra.place || 'bc';
        let places = place.split('');
        let placement = map[places[0]],
            align = map[places[1]]
        me['@{pos.placement}'] = placement;
        me['@{pos.align}'] = align;
        me['@{pos.class}'] = classNames[[placement, align].join('-')] + ' @../mx-popover/index.less:popover mx-shadow';

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

            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        let oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;

        oNode.on('click', () => {
            me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{show}'](); //等待内容显示
            }), showDelay);
        })

        // 固定刷新
        return true;
    },
    render() {
        this.updater.digest();
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

        let popId = `popover_${vId}`;
        let popBd = $(`#${popId}`);
        if (!popBd.length) {
            $(document.body).append(`<div mx-view class="@../mx-popover/index.less:popover-hide ${posClass}" id="${popId}"
                style="width: ${posWidth}px;"></div>`);
        }

        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe(popId, '');
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
    '@{inside}'(node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'popover_' + this.id);
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
        Monitor['@{add}'](me);
    },
    '@{hide}'() {
        let me = this;
        if (!me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = false;
        let popNode = $('#popover_' + me.id);
        popNode.removeClass('@../mx-popover/index.less:show-out');
        Monitor['@{remove}'](me);
    }
});