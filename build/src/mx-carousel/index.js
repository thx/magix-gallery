/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/index",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("_zs_galleryy","._zs_gallerycY{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerycZ{position:relative;width:100%;overflow:hidden}._zs_gallerycZ ._zs_galleryd_{position:relative;z-index:3}._zs_galleryda{display:inline-block;vertical-align:top}._zs_galleryda ._zs_gallerydb{cursor:pointer;background-color:#fff;opacity:.5;display:block;border-radius:1px;transition:all .5s}._zs_galleryda ._zs_gallerydb:hover{opacity:.8}._zs_gallerydc{position:absolute;left:0;bottom:12px;z-index:4;height:5px;width:100%;text-align:center}._zs_gallerydc ._zs_galleryda{margin:0 2px}._zs_gallerydc ._zs_galleryda ._zs_gallerydb{width:20px;height:5px}._zs_gallerydc ._zs_galleryda ._zs_gallerydb._zs_gallerydd{opacity:1;width:28px}._zs_galleryde{position:absolute;top:50%;right:12px;z-index:4;width:5px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}._zs_galleryde ._zs_galleryda{margin:2px 0}._zs_galleryde ._zs_galleryda ._zs_gallerydb{width:5px;height:20px}._zs_galleryde ._zs_galleryda ._zs_gallerydb._zs_gallerydd{opacity:1;height:28px}");
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
} ; var $g = '', $_temp, $p = '', height = $$.height, content = $$.content, dots = $$.dots, vertical = $$.vertical, len = $$.len, dotClass = $$.dotClass; $p += '<div class="_zs_gallerycZ" style="height: ' + $e(height) + 'px;"><div mxa="_zs_gallery,:_" class="_zs_galleryd_" mx-mouseover="' + $viewId + '__l()" mx-mouseout="' + $viewId + '__Z()">' + $n(content) + '</div>'; if (dots) {
    ;
    $p += '<ul class="';
    if (vertical) {
        ;
        $p += ' _zs_galleryde ';
    }
    else {
        ;
        $p += ' _zs_gallerydc ';
    }
    ;
    $p += '" mx-mouseover="' + $viewId + '__l()" mx-mouseout="' + $viewId + '__Z()">';
    for (var i = 0; i < len; i += 1) {
        ;
        $p += '<li mxa="_zs_gallery,:a" class="_zs_galleryda"><i class="_zs_gallerydb ' + $e(dotClass) + '" mx-click="' + $viewId + '__Y({idx:' + $e(i) + '})"></i></li>';
    }
    ;
    $p += '</ul>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        var that = this;
        var node = $('#' + that.id);
        that['__j'] = node;
        that['__N'] = extra;
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
            duration: extra.duration || '.5s',
            dotClass: extra.dotClass || ''
        });
        if (extra.prevTrigger) {
            $('#' + extra.prevTrigger).on('click', function () {
                that['__O'](-1);
            });
        }
        if (extra.nextTrigger) {
            $('#' + extra.nextTrigger).on('click', function () {
                that['__O'](1);
            });
        }
        that.on('destroy', function () {
            that['__P']();
            if (that['__Q']) {
                clearTimeout(that['__Q']);
            }
        });
    },
    render: function () {
        var that = this;
        var data = that.updater.get();
        var node = that['__j'];
        var children = node.children();
        that.updater.digest({
            len: children.length,
            content: node.html()
        });
        that['__R'] = node.find('._zs_gallerydb');
        var panelsCnt = node.find('._zs_galleryd_');
        that['__S'] = panelsCnt;
        that['__T'] = panelsCnt.find('[data-carousel="true"]');
        that['__U']();
        that['__V'](data.active, 1);
        if (data.autoplay) {
            that['__W']();
        }
    },
    '__U': function () {
        var that = this;
        var node = that['__j'];
        var data = that.updater.get();
        var w = data.width, h = data.height, mode = data.mode;
        var panelNodes = that['__T'];
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
            that['__S'].height(panelNodes.length * h).width(w);
        }
        else {
            that['__S'].width(panelNodes.length * w).height(h);
        }
    },
    '__V': function (active, immediate) {
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
                that['__S'].css(style);
                break;
            case 'fade':
                var panelNodes = that['__T'];
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
        var cName = '_zs_gallerydd';
        that['__R'].removeClass(cName).eq(active).addClass(cName);
    },
    '__W': function () {
        var that = this;
        var data = that.updater.get();
        if (data.autoplay) {
            var active_1 = data.active;
            that['__X'] = setInterval(function () {
                var n = ++active_1;
                if (n >= that['__T'].length) {
                    active_1 = n = 0;
                }
                that['__V'](n);
            }, data.interval);
        }
    },
    '__P': function () {
        var that = this;
        if (that['__X']) {
            clearInterval(that['__X']);
        }
    },
    '__O': function (offset) {
        var active = this.updater.get('active'), len = this.updater.get('len');
        active = +active + offset;
        if (active >= len) {
            active = 0;
        }
        if (active < 0) {
            active = (len - 1);
        }
        this['__V'](active);
    },
    '__Y<click>': function (e) {
        this['__V'](e.params.idx);
    },
    '__Z<mouseout>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            that['__Q'] = setTimeout(that.wrapAsync(that['__W'], that), 50);
        }
    },
    '__l<mouseover>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, that.id)) {
            if (that['__Q']) {
                clearTimeout(that['__Q']);
            }
            that['__P']();
        }
    },
    '$win<resize>': function () {
        var that = this;
        var data = that.updater.get();
        var extra = that['__N'];
        var node = that['__j'];
        that.updater.set({
            width: extra.width || $(node).width() || 400
        });
        that['__U']();
        that['__V'](data.active, 1);
    }
});

});