/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/index",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("_zs_gallery_mx-carousel_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-carousel_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-carousel_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-carousel_index_-carousel {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n._zs_gallery_mx-carousel_index_-carousel ._zs_gallery_mx-carousel_index_-inner {\n  position: relative;\n  z-index: 3;\n}\n._zs_gallery_mx-carousel_index_-dot-cnt {\n  display: inline-block;\n  vertical-align: top;\n}\n._zs_gallery_mx-carousel_index_-dot-cnt ._zs_gallery_mx-carousel_index_-dot {\n  cursor: pointer;\n  background: #fff;\n  opacity: 0.5;\n  display: block;\n  border-radius: 1px;\n  transition: all 0.5s;\n}\n._zs_gallery_mx-carousel_index_-dot-cnt ._zs_gallery_mx-carousel_index_-dot:hover {\n  opacity: 0.8;\n}\n._zs_gallery_mx-carousel_index_-dots {\n  position: absolute;\n  left: 0;\n  bottom: 12px;\n  z-index: 4;\n  height: 5px;\n  width: 100%;\n  text-align: center;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot-cnt {\n  margin: 0 2px;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot-cnt ._zs_gallery_mx-carousel_index_-dot {\n  width: 20px;\n  height: 5px;\n}\n._zs_gallery_mx-carousel_index_-dots ._zs_gallery_mx-carousel_index_-dot-cnt ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n  width: 28px;\n}\n._zs_gallery_mx-carousel_index_-v-dots {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  z-index: 4;\n  width: 5px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot-cnt {\n  margin: 2px 0;\n}\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot-cnt ._zs_gallery_mx-carousel_index_-dot {\n  width: 5px;\n  height: 20px;\n}\n._zs_gallery_mx-carousel_index_-v-dots ._zs_gallery_mx-carousel_index_-dot-cnt ._zs_gallery_mx-carousel_index_-dot._zs_gallery_mx-carousel_index_-active {\n  opacity: 1;\n  height: 28px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', height = $$.height, content = $$.content, dots = $$.dots, vertical = $$.vertical, len = $$.len; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-carousel_index_-carousel" style="height: ';
    $line = 1;
    $art = '=height';
    ;
    $p += '' + ($expr = '<%=height%>', $e(height)) + 'px;"><div mxa="_zs_gallery\\:_" class="_zs_gallery_mx-carousel_index_-inner" mx-mouseover="' + $viewId + '@{stop}()" mx-mouseout="' + $viewId + '@{start}()">';
    $line = 5;
    $art = '!content';
    ;
    $p += '' + ($expr = '<%!content%>', $n(content)) + '</div>';
    $line = 7;
    $art = 'if dots';
    ;
    $p += '';
    $expr = '<%if (dots) {%>';
    if (dots) {
        ;
        $p += '<ul class="';
        $line = 8;
        $art = 'if vertical';
        ;
        $p += '';
        $expr = '<%if (vertical) {%>';
        if (vertical) {
            ;
            $p += ' _zs_gallery_mx-carousel_index_-v-dots ';
            $line = 8;
            $art = 'else';
            ;
            $p += '';
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' _zs_gallery_mx-carousel_index_-dots ';
            $line = 8;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-mouseover="' + $viewId + '@{stop}()" mx-mouseout="' + $viewId + '@{start}()">';
        $line = 11;
        $art = 'for (let i=0;i<len;i+=1)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < len; i += 1) {%>';
        for (var i = 0; i < len; i += 1) {
            ;
            $p += '<li mxa="_zs_gallery\\:a" class="_zs_gallery_mx-carousel_index_-dot-cnt"><i class="_zs_gallery_mx-carousel_index_-dot" mx-click="' + $viewId + '@{active}({idx:';
            $line = 13;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '})"></i></li>';
            $line = 15;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 17;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
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
        var that = this;
        var node = $('#' + that.id);
        that['@{owner.node}'] = node;
        that['@{extra.info}'] = extra;
        that.updater.set({
            mode: extra.mode || 'carousel',
            width: extra.width || $(node).width() || 400,
            height: extra.height || $(node).height() || 200,
            active: extra.active || 0,
            interval: (extra.interval | 0) || 3000,
            autoplay: (extra.autoplay + '') === 'true',
            dots: (extra.dots + '') !== 'false',
            vertical: (extra.vertical + '') === 'true',
            timing: extra.timing || 'ease-in-out',
            duration: extra.duration || '.5s' // 动画持续时间
        });
        that.on('destroy', function () {
            that['@{stop.auto.play}']();
            if (that['@{over.timer}']) {
                clearTimeout(that['@{over.timer}']);
            }
        });
    },
    render: function () {
        var that = this;
        var data = that.updater.get();
        var node = that['@{owner.node}'];
        var children = node.children();
        that.updater.digest({
            len: children.length,
            content: node.html()
        });
        that['@{dots.node}'] = node.find('._zs_gallery_mx-carousel_index_-dot');
        var panelsCnt = node.find('._zs_gallery_mx-carousel_index_-inner');
        that['@{panels.cnt}'] = panelsCnt;
        that['@{panels.node}'] = panelsCnt.find('[data-carousel="true"]');
        that['@{update.stage.size}']();
        that['@{to.panel}'](data.active, 1);
        if (data.autoplay) {
            that['@{start.auto.play}']();
        }
    },
    '@{update.stage.size}': function () {
        var that = this;
        var node = that['@{owner.node}'];
        var data = that.updater.get();
        var w = data.width, h = data.height, mode = data.mode;
        var panelNodes = that['@{panels.node}'];
        switch (mode) {
            case 'carousel':
                for (var index = 0; index < panelNodes.length; index++) {
                    var panelNode = $(panelNodes[index]);
                    if (data.vertical) {
                        panelNode.css({
                            position: 'absolute',
                            top: h * index,
                            left: 0,
                            width: w,
                            height: h
                        });
                    }
                    else {
                        panelNode.css({
                            position: 'absolute',
                            top: 0,
                            left: w * index,
                            width: w,
                            height: h
                        });
                    }
                }
                break;
            case 'fade':
                for (var index = 0; index < panelNodes.length; index++) {
                    var panelNode = $(panelNodes[index]);
                    panelNode.css({
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        left: 0,
                        width: w,
                        height: h
                    });
                }
                break;
        }
        if (data.vertical) {
            that['@{panels.cnt}'].height(panelNodes.length * h).width(w);
        }
        else {
            that['@{panels.cnt}'].width(panelNodes.length * w).height(h);
        }
    },
    '@{to.panel}': function (active, immediate) {
        var that = this;
        var updater = that.updater;
        var data = updater.get();
        var mode = data.mode, duration = data.duration, timing = data.timing;
        switch (mode) {
            case 'carousel':
                updater.set({
                    active: active
                });
                var width = data.width, height = data.height, vertical = data.vertical;
                var style = {
                    transform: "translate3d(" + (vertical ? "0,-" + active * height + "px" : "-" + active * width + "px,0") + ",0)",
                    transition: "transform " + duration + " " + timing
                };
                if (immediate) {
                    delete style.transition;
                }
                that['@{panels.cnt}'].css(style);
                break;
            case 'fade':
                var panelNodes = that['@{panels.node}'];
                panelNodes.css({
                    opacity: 0
                });
                var style = {
                    opacity: 1,
                    transition: "opacity " + duration + " " + timing
                };
                panelNodes.eq(active).css(style);
                updater.set({
                    active: active
                });
                break;
        }
        var cName = '_zs_gallery_mx-carousel_index_-active';
        that['@{dots.node}'].removeClass(cName).eq(active).addClass(cName);
    },
    '@{start.auto.play}': function () {
        var that = this;
        var data = that.updater.get();
        if (data.autoplay) {
            var active_1 = data.active;
            that['@{play.task}'] = setInterval(function () {
                var n = ++active_1;
                if (n >= that['@{panels.node}'].length) {
                    active_1 = n = 0;
                }
                that['@{to.panel}'](n);
            }, data.interval);
        }
    },
    '@{stop.auto.play}': function () {
        var that = this;
        if (that['@{play.task}']) {
            clearInterval(that['@{play.task}']);
        }
    },
    '@{active}<click>': function (e) {
        this['@{to.panel}'](e.params.idx);
    },
    '@{start}<mouseout>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            that['@{over.timer}'] = setTimeout(that.wrapAsync(that['@{start.auto.play}'], that), 50);
        }
    },
    '@{stop}<mouseover>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            if (that['@{over.timer}']) {
                clearTimeout(that['@{over.timer}']);
            }
            that['@{stop.auto.play}']();
        }
    },
    '$win<resize>': function () {
        var that = this;
        var data = that.updater.get();
        var extra = that['@{extra.info}'];
        var node = that['@{owner.node}'];
        that.updater.set({
            width: extra.width || $(node).width() || 400
        });
        that['@{update.stage.size}']();
        that['@{to.panel}'](data.active, 1);
    }
});

});