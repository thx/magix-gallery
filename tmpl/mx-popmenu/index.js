let Magix = require('magix');
let Vframe = Magix.Vframe;
let Monitor = require('../mx-monitor/index');
let Base = require('@../mx-popover/base');
let $ = require('$');
Magix.applyStyle('@../mx-popover/index.less');

module.exports = Base.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        Monitor['@{setup}']();

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
        me['@{pos.class}'] = me.constants.classNames[placement + align[0].toUpperCase() + align.slice(1)] + ' @../mx-popover/index.less:popover';

        me['@{pos.init}'] = false;
        me['@{pos.cal}'] = false;
        me['@{pos.show}'] = false;
        me['@{scroll.wrapper}'] = extra.scrollWrapper;

        me['@{menus}'] = extra.menus || [];
        me['@{width}'] = extra.width ? (extra.width + 'px') : 'auto';

        // 复用popover，左对齐
        me['@{text.align}'] = 'left';

        me.on('destroy', () => {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#popover_' + me.id).remove();

            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        let oNode = $('#' + me.id);
        me['@{trigger.content}'] = oNode.html();
        me['@{owner.node}'] = oNode;

        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = extra.triggerType || 'hover';
        switch (me['@{trigger.type}']) {
            case 'click':
                oNode.on('click', () => {
                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                        me['@{show}'](); //等待内容显示
                    }), me.constants.showDelay);
                })
                break;
            case 'hover':
                oNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);

                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(() => {
                        me['@{show}'](); //等待内容显示
                    }), me.constants.showDelay);
                }, () => {
                    me['@{hide}']();
                });
                break;
        }

        me.bindScroll();
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
                menus: me['@{menus}']
            }

        let popNode = `<div class="@../mx-popover/index.less:popover-hide ${posClass}" id="popover_${vId}"
                style="width: ${posWidth};"></div>`;
        $(document.body).append(popNode);
        // 先实例化，绑定事件，再加载对应的view
        let vf = me.owner.mountVframe('popover_' + vId, '');
        vf.on('created', () => {
            let popNode = me['@{setPos}']();
            popNode.removeClass('@../mx-popover/index.less:popover-hide');

            let triggerType = me['@{trigger.type}'];
            if(triggerType == 'hover'){
                popNode.hover(() => {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, () => {
                    me['@{hide}']();
                });
            }
        });
        vf.mountView(view, {
            data: viewData,
            submit: (selected) => {
                me['@{immediate.hide}']();
                me['@{owner.node}'].trigger({
                    type: 'change',
                    selected: selected
                });
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

        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{immediate.hide}']();
        }), me.constants.hideDelay);
        Monitor['@{remove}'](me);
    },
    '@{immediate.hide}'() {
        let me = this;

        clearTimeout(me['@{dealy.hide.timer}']);
        if (!me['@{pos.show}']) {
            return;
        }
        me['@{pos.show}'] = false;
        let popNode = $('#popover_' + me.id);
        popNode.removeClass('@../mx-popover/index.less:show-out');
        Monitor['@{remove}'](me);
    }
});