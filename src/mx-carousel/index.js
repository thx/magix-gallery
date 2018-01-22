/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/index",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("_j","._bz{width:100%;position:relative;overflow:hidden}._bA{bottom:12px;height:5px;width:100%;text-align:center}._bA,._bB{position:absolute}._bB{right:12px;width:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}._bC{margin:0 2px}._bC,._bD{display:inline-block;vertical-align:top}._bD{margin:2px 0}._bE{width:20px;height:5px}._bE,._bF{cursor:pointer;background:#fff;opacity:.3;display:block;border-radius:1px;-webkit-transition:all .5s;transition:all .5s}._bF{height:20px;width:5px}._bE:hover,._bF:hover{opacity:.75}._bG{opacity:1;width:28px}._bH{opacity:1;height:28px}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_X\" mx-mouseover=\"\u001f\u001e__as()\" mx-mouseout=\"\u001f\u001e__aq()\"><%!$$.html%></div><%if($$.sd){%><ul class=\"<%if($$.sv){%>_bB<%}else{%>_bA<%}%>\" mx-mouseover=\"\u001f\u001e__as()\" mx-mouseout=\"\u001f\u001e__aq()\"><%for(var _=0;_<$$.dn;_++){%><li class=\"<%if($$.sv){%>_bD<%}else{%>_bC<%}%>\"><i class=\"<%if($$.sv){%>_bF<%}else{%>_bE<%}%>\" mx-click=\"\u001f\u001e__ao({idx:<%!_%>})\"></i></li><%}%></ul><%}%>"},
    init: function (extra) {
        var me = this;
        me['__W'] = extra.active || 0;
        me['__X'] = (extra.interval | 0) || 3000;
        me['__Y'] = (extra.autoplay + '') === 'true';
        me['__Z'] = (extra.dots + '') !== 'false';
        me['__a_'] = (extra.vertical + '') === 'true';
        me['__aa'] = extra.timing || 'ease-in-out';
        me['__ab'] = extra.duration || '.5s';
        me.on('destroy', function () {
            me['__ac']();
        });
    },
    '__ah': function () {
        var me = this;
        if (!me['__ad'] && me['__Y']) {
            me['__ad'] = function () {
                var n = ++me['__W'];
                if (n >= me['__ae'].length) {
                    me['__W'] = n = 0;
                }
                me['__af'](n);
            };
            Runner['__ag'](me['__X'], me['__ad']);
        }
    },
    '__ac': function () {
        var me = this;
        if (me['__ad']) {
            Runner['__ai'](me['__ad']);
            delete me['__ad'];
        }
    },
    '__af': function (panel, immediate) {
        var me = this;
        me['__W'] = panel;
        var data = me.updater.get();
        var style = {
            transform: "translate3d(" + (data.sv ? "0,-" + panel * me['__aj'] + "px" : "-" + panel * me['__ak'] + "px,0") + ",0)",
            transition: "transform " + me['__ab'] + " " + me['__aa']
        };
        if (immediate) {
            delete style.transition;
        }
        me['__al'].css(style);
        var active = data.sv ? '_bH' : '_bG';
        me['__am'].removeClass(active).eq(panel).addClass(active);
    },
    '__an': function () {
        var me = this;
        var node = me['__i'];
        var w = node.width();
        var h = node.height();
        var data = me.updater.get();
        me['__ak'] = w;
        me['__aj'] = h;
        me['__ae'].width(w).height(h);
        if (data.sv) {
            me['__al'].height(me['__ae'].length * h);
        }
        else {
            me['__al'].width(me['__ae'].length * w);
        }
    },
    render: function () {
        var me = this;
        var node = $('#' + me.id);
        me['__i'] = node;
        node.addClass('_bz');
        me.updater.digest({
            dn: node.children().length,
            html: node.html(),
            sv: me['__a_'],
            sd: me['__Z']
        });
        var panelsCnt = node.find('>._X');
        var dots = node.find(me['__a_'] ? '._bF' : '._bE');
        me['__am'] = dots;
        me['__al'] = panelsCnt;
        me['__ae'] = panelsCnt.find('._X').removeClass('_ah');
        me['__an']();
        me['__af'](me['__W'], 1);
        if (me['__Y']) {
            me['__ah']();
        }
    },
    '__ao<click>': function (e) {
        this['__af'](e.params.idx);
    },
    '__aq<mouseout>': function (e) {
        var me = this;
        if (!Magix.inside(e.relatedTarget, me.id)) {
            me['__ap'] = setTimeout(me.wrapAsync(me['__ah'], me), 50);
        }
    },
    '__as<mouseover>': function (e) {
        var me = this;
        if (!Magix.inside(e.relatedTarget, me.id)) {
            clearTimeout(me['__ar']);
            me['__ac']();
        }
    },
    '$win<resize>': function () {
        var me = this;
        me['__an']();
        me['__af'](me['__W'], 1);
    }
});

});