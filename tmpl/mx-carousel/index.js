/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Runner = require('../mx-runner/index');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me['@{panel.current}'] = extra.active || 0;
        me['@{auto.play.interval}'] = (extra.interval | 0) || 3000;
        me['@{auto.play}'] = (extra.autoplay + '') === 'true';
        me['@{show.dots}'] = (extra.dots + '') !== 'false';
        me['@{show.vertical}'] = (extra.vertical + '') === 'true';
        me.on('destroy', () => {
            me['@{stop.auto.play}']();
        });
    },
    '@{start.auto.play}'() {
        let me = this;
        if (!me['@{play.task}'] && me['@{auto.play}']) {
            me['@{play.task}'] = () => {
                let n = ++me['@{panel.current}'];
                if (n >= me['@{panels.node}'].length) {
                    me['@{panel.current}'] = n = 0;
                }
                me['@{to.panel}'](n);
            };
            Runner['@{task.add}'](me['@{auto.play.interval}'], me['@{play.task}']);
        }
    },
    '@{stop.auto.play}'() {
        let me = this;
        if (me['@{play.task}']) {
            Runner['@{task.remove}'](me['@{play.task}']);
            delete me['@{play.task}'];
        }
    },
    '@{to.panel}'(panel, immediate) {
        let me = this;
        me['@{panel.current}'] = panel;
        me.updater.digest({
            an: panel,
            w: me['@{width.current}'],
            h: me['@{height.current}'],
            im: immediate
        });
    },
    render() {
        let me = this;
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        let children = node.children();
        let w = node.width();
        let h = node.height();
        me['@{width.current}'] = w;
        me['@{height.current}'] = h;
        node.addClass('@index.less:carousel');
        me.updater.digest({
            dn: children.length,
            w,
            h,
            im: 1,
            sv: me['@{show.vertical}'],
            sd: me['@{show.dots}'],
            an: me['@{panel.current}']
        });
        let panelsCnt = node.find('.@scoped.style:hp100');
        panelsCnt.append(children);
        me['@{panels.node}'] = panelsCnt.find('.@scoped.style:hp100').removeClass('@scoped.style:none').width(w).height(h);
        me['@{to.panel}'](me['@{panel.current}'], 1);
        if (me['@{auto.play}']) {
            me['@{start.auto.play}']();
        }
    },
    '@{active}<click>'(e) {
        this['@{to.panel}'](e.params.idx);
    },
    '@{start}<mouseout>'(e) {
        let me = this;
        if (!Magix.inside(e.relatedTarget, me.id)) {
            me['@{over.timer}'] = setTimeout(me.wrapAsync(me['@{start.auto.play}'], me), 50);
        }
    },
    '@{stop}<mouseover>'(e) {
        let me = this;
        if (!Magix.inside(e.relatedTarget, me.id)) {
            clearTimeout(me['@{start.timer}']);
            me['@{stop.auto.play}']();
        }
    },
    '$win<resize>'() {
        let me = this;
        let node = me['@{owner.node}'];
        let w = node.width();
        let h = node.height();
        me['@{width.current}'] = w;
        me['@{height.current}'] = h;
        me['@{panels.node}'].width(w).height(h);
        me['@{to.panel}'](me['@{panel.current}'], 1);
    }
});