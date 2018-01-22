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
        me['@{show.timing}'] = extra.timing || 'ease-in-out';
        me['@{show.duration}'] = extra.duration || '.5s';
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
        let data = me.updater.get();
        let style = {
            transform: `translate3d(${data.sv ? `0,-${panel * me['@{height.current}']}px` : `-${panel * me['@{width.current}']}px,0`},0)`,
            transition: `transform ${me['@{show.duration}']} ${me['@{show.timing}']}`
        };
        if (immediate) {
            delete style.transition;
        }
        me['@{panels.cnt}'].css(style);
        let active = data.sv ? '@index.less:v-active' : '@index.less:active';
        me['@{dots.node}'].removeClass(active).eq(panel).addClass(active);
    },
    '@{update.stage.size}'() {
        let me = this;
        let node = me['@{owner.node}'];
        let w = node.width();
        let h = node.height();
        let data = me.updater.get();
        me['@{width.current}'] = w;
        me['@{height.current}'] = h;
        me['@{panels.node}'].width(w).height(h);
        if (data.sv) {
            me['@{panels.cnt}'].height(me['@{panels.node}'].length * h);
        } else {
            me['@{panels.cnt}'].width(me['@{panels.node}'].length * w);
        }
    },
    render() {
        let me = this;
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.addClass('@index.less:carousel');
        me.updater.digest({
            dn: node.children().length,
            html: node.html(),
            sv: me['@{show.vertical}'],
            sd: me['@{show.dots}']
        });
        let panelsCnt = node.find('>.@scoped.style:hp100');
        let dots = node.find(me['@{show.vertical}'] ? '.@index.less:v-dot' : '.@index.less:dot');
        me['@{dots.node}'] = dots;
        me['@{panels.cnt}'] = panelsCnt;
        me['@{panels.node}'] = panelsCnt.find('.@scoped.style:hp100').removeClass('@scoped.style:none');
        me['@{update.stage.size}']();
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
        me['@{update.stage.size}']();
        me['@{to.panel}'](me['@{panel.current}'], 1);
    }
});