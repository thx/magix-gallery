/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let TipHeight = 65; //写死
let SpaceVertical = 5;
let SpaceHorizontal = 10;
let Docks = {
    lt(tip, index) {
        tip.css({
            top: TipHeight * index + SpaceVertical * (index + 1),
            left: SpaceHorizontal
        });
    },
    rt(tip, index) {
        tip.css({
            top: TipHeight * index + SpaceVertical * (index + 1),
            right: SpaceHorizontal
        });
    },
    lb(tip, index) {
        tip.css({
            bottom: TipHeight * index + SpaceVertical * (index + 1),
            left: SpaceHorizontal
        });
    },
    rb(tip, index) {
        tip.css({
            bottom: TipHeight * index + SpaceVertical * (index + 1),
            right: SpaceHorizontal
        });
    }
};
Magix.applyStyle('@index.less');
let GTipManager = {
    '@{calc.pos}'(dock) {
        let me = this;
        let list = me['$' + dock];
        if (list && list.length) {
            for (let i = 0, tip; i < list.length; i++) {
                tip = list[i];
                let fn = Docks[dock];
                fn(tip, i);
            }
        }
    },
    '@{add}'(tip, dock) {
        if (!dock) {
            dock = 'rt';
        }
        let me = this;
        if (!Docks[dock]) {
            throw new Error('mx-gip unsupport dock:' + dock);
        }
        let list = me['$' + dock] || (me['$' + dock] = []);
        list.push(tip);
        tip.on('@{tipremoved}', () => {
            me['@{remove}'](tip, dock);
        });
        me['@{calc.pos}'](dock);
    },
    '@{remove}'(tip, dock) {
        tip.off('close');
        let me = this;
        let list = me['$' + dock];
        for (let i = list.length - 1; i >= 0; i--) {
            let t = list[i];
            if (t == tip) {
                list.splice(i, 1);
                break;
            }
        }
        me['@{calc.pos}'](dock);
    }
};
module.exports = Magix.View.extend({
    tmpl: '@index.html:const[tip]',
    init(extra) {
        let me = this;
        me['@{extra}'] = extra;
        me.on('destroy', () => {
            me['@{owner.node}'].trigger('@{tipremoved}').remove();
        });
    },
    render() {
        let me = this;
        let oNode = $('#' + me.id);
        oNode.addClass('@index.less:gtip');
        me['@{owner.node}'] = oNode;
        me.updater.digest({
            tip: me['@{extra}']
        });
        if (me['@{extra}'].timeout) {
            setTimeout(me.wrapAsync(() => {
                me['@{close}']();
            }), me['@{extra}'].timeout);
        }
        setTimeout(me.wrapAsync(() => {
            oNode.addClass('@index.less:fadein');
        }), 20);
    },
    '@{close}'() {
        let me = this;
        me['@{owner.node}'].addClass('@index.less:fadeout');
        setTimeout(me.wrapAsync(() => {
            me.owner.unmountVframe();
        }), 300);
    }
}, {
        '@{gtipShow}'(ops) {
            let id = Magix.guid('gtip-');
            $('body').append(`<div id="${id}" />`);
            this.owner.mountVframe(id, '@moduleId', ops);
            GTipManager['@{add}']($('#' + id), ops.dock);
        },
        gtipRT(msg, timeout) {
            this['@{gtipShow}']({
                msg: msg,
                dock: 'rt',
                timeout: timeout || 3000
            });
        },
        gtipRB(msg, timeout) {
            this['@{gtipShow}']({
                msg: msg,
                dock: 'rb',
                timeout: timeout || 3000
            });
        },
        gtipLT(msg, timeout) {
            this['@{gtipShow}']({
                msg: msg,
                dock: 'lt',
                timeout: timeout || 3000
            });
        },
        gtipLB(msg, timeout) {
            this['@{gtipShow}']({
                msg: msg,
                dock: 'lb',
                timeout: timeout || 3000
            });
        }
    });