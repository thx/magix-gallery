/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/index",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("__mx-carousel_index_","/* @dependent: ./index.less */\n.__mx-carousel_index_-carousel {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.__mx-carousel_index_-dots {\n  position: absolute;\n  bottom: 12px;\n  height: 5px;\n  width: 100%;\n  text-align: center;\n}\n.__mx-carousel_index_-v-dots {\n  position: absolute;\n  right: 12px;\n  width: 5px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.__mx-carousel_index_-dot-cnt {\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 2px;\n}\n.__mx-carousel_index_-v-dot-cnt {\n  display: inline-block;\n  vertical-align: top;\n  margin: 2px 0;\n}\n.__mx-carousel_index_-dot {\n  cursor: pointer;\n  background: #fff;\n  opacity: 0.3;\n  display: block;\n  width: 20px;\n  height: 5px;\n  border-radius: 1px;\n  transition: all 0.5s;\n}\n.__mx-carousel_index_-v-dot {\n  cursor: pointer;\n  background: #fff;\n  opacity: 0.3;\n  display: block;\n  height: 20px;\n  width: 5px;\n  border-radius: 1px;\n  transition: all 0.5s;\n}\n.__mx-carousel_index_-v-dot:hover,\n.__mx-carousel_index_-dot:hover {\n  opacity: 0.75;\n}\n.__mx-carousel_index_-active {\n  opacity: 1;\n  width: 28px;\n}\n.__mx-carousel_index_-v-active {\n  opacity: 1;\n  height: 28px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', html = $$.html, sd = $$.sd, sv = $$.sv, dn = $$.dn; var $expr, $art, $line; try {
    $p += '<div mxa="_1:_" class="__mx-style_index_-hp100" mx-mouseover="' + $viewId + '@{stop}()" mx-mouseout="' + $viewId + '@{start}()">' + ($expr = '<%!html%>', $n(html)) + '</div>';
    $expr = '<%if (sd) {%>';
    if (sd) {
        ;
        $p += '<ul class="';
        $expr = '<%if (sv) {%>';
        if (sv) {
            ;
            $p += '__mx-carousel_index_-v-dots';
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '__mx-carousel_index_-dots';
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-mouseover="' + $viewId + '@{stop}()" mx-mouseout="' + $viewId + '@{start}()">';
        $expr = '<%for (var i = 0; i < dn; i++) {%>';
        for (var i = 0; i < dn; i++) {
            ;
            $p += '<li class="';
            $expr = '<%if (sv) {%>';
            if (sv) {
                ;
                $p += '__mx-carousel_index_-v-dot-cnt';
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += '__mx-carousel_index_-dot-cnt';
                $expr = '<%}%>';
            }
            ;
            $p += '"><i class="';
            $expr = '<%if (sv) {%>';
            if (sv) {
                ;
                $p += '__mx-carousel_index_-v-dot';
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += '__mx-carousel_index_-dot';
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + '@{active}({idx:' + ($expr = '<%!i%>', $n(i)) + '})"></i></li>';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{panel.current}'] = extra.active || 0;
        me['@{auto.play.interval}'] = (extra.interval | 0) || 3000;
        me['@{auto.play}'] = (extra.autoplay + '') === 'true';
        me['@{show.dots}'] = (extra.dots + '') !== 'false';
        me['@{show.vertical}'] = (extra.vertical + '') === 'true';
        me['@{show.timing}'] = extra.timing || 'ease-in-out';
        me['@{show.duration}'] = extra.duration || '.5s';
        me.on('destroy', function () {
            me['@{stop.auto.play}']();
        });
    },
    '@{start.auto.play}': function () {
        var me = this;
        if (!me['@{play.task}'] && me['@{auto.play}']) {
            me['@{play.task}'] = function () {
                var n = ++me['@{panel.current}'];
                if (n >= me['@{panels.node}'].length) {
                    me['@{panel.current}'] = n = 0;
                }
                me['@{to.panel}'](n);
            };
            Runner['@{task.add}'](me['@{auto.play.interval}'], me['@{play.task}']);
        }
    },
    '@{stop.auto.play}': function () {
        var me = this;
        if (me['@{play.task}']) {
            Runner['@{task.remove}'](me['@{play.task}']);
            delete me['@{play.task}'];
        }
    },
    '@{to.panel}': function (panel, immediate) {
        var me = this;
        me['@{panel.current}'] = panel;
        var data = me.updater.get();
        var style = {
            transform: "translate3d(" + (data.sv ? "0,-" + panel * me['@{height.current}'] + "px" : "-" + panel * me['@{width.current}'] + "px,0") + ",0)",
            transition: "transform " + me['@{show.duration}'] + " " + me['@{show.timing}']
        };
        if (immediate) {
            delete style.transition;
        }
        me['@{panels.cnt}'].css(style);
        var active = data.sv ? '__mx-carousel_index_-v-active' : '__mx-carousel_index_-active';
        me['@{dots.node}'].removeClass(active).eq(panel).addClass(active);
    },
    '@{update.stage.size}': function () {
        var me = this;
        var node = me['@{owner.node}'];
        var w = node.width();
        var h = node.height();
        var data = me.updater.get();
        me['@{width.current}'] = w;
        me['@{height.current}'] = h;
        me['@{panels.node}'].width(w).height(h);
        if (data.sv) {
            me['@{panels.cnt}'].height(me['@{panels.node}'].length * h);
        }
        else {
            me['@{panels.cnt}'].width(me['@{panels.node}'].length * w);
        }
    },
    render: function () {
        var me = this;
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
        node.addClass('__mx-carousel_index_-carousel');
        me.updater.digest({
            dn: node.children().length,
            html: node.html(),
            sv: me['@{show.vertical}'],
            sd: me['@{show.dots}']
        });
        var panelsCnt = node.find('>.__mx-style_index_-hp100');
        var dots = node.find(me['@{show.vertical}'] ? '.__mx-carousel_index_-v-dot' : '.__mx-carousel_index_-dot');
        me['@{dots.node}'] = dots;
        me['@{panels.cnt}'] = panelsCnt;
        me['@{panels.node}'] = panelsCnt.find('.__mx-style_index_-hp100').removeClass('__mx-style_index_-none');
        me['@{update.stage.size}']();
        me['@{to.panel}'](me['@{panel.current}'], 1);
        if (me['@{auto.play}']) {
            me['@{start.auto.play}']();
        }
    },
    '@{active}<click>': function (e) {
        this['@{to.panel}'](e.params.idx);
    },
    '@{start}<mouseout>': function (e) {
        var me = this;
        if (!Magix.inside(e.relatedTarget, me.id)) {
            me['@{over.timer}'] = setTimeout(me.wrapAsync(me['@{start.auto.play}'], me), 50);
        }
    },
    '@{stop}<mouseover>': function (e) {
        var me = this;
        if (!Magix.inside(e.relatedTarget, me.id)) {
            clearTimeout(me['@{start.timer}']);
            me['@{stop.auto.play}']();
        }
    },
    '$win<resize>': function () {
        var me = this;
        me['@{update.stage.size}']();
        me['@{to.panel}'](me['@{panel.current}'], 1);
    }
});

});