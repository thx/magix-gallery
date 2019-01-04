/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryS","._zs_gallerygA{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygB{position:fixed;top:-50px;left:0;z-index:100;width:100%;height:50px;padding:0 46px;line-height:50px;background-color:rgba(33,33,33,.72)}._zs_gallerygB,._zs_gallerygB ._zs_gallerygC{color:#fff;transition:all .25s;text-align:center}._zs_gallerygB ._zs_gallerygC{opacity:.5;position:absolute;top:50%;right:20px;width:26px;height:26px;margin-top:-13px;line-height:26px;font-size:20px;font-weight:700;border-radius:50%;cursor:pointer}._zs_gallerygB ._zs_gallerygC:hover{opacity:1}");
var Duration = 200;
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
} ; var $g = '', $_temp, $p = '', top = $$.top, msg = $$.msg, timeout = $$.timeout; $p += '<div class="_zs_gallerygB" style="top: ' + $e(top) + ';"><span>' + $n(msg) + '</span>'; if (!timeout) {
    ;
    $p += '<i mxs="_zs_gallerybY:_" class="mc-iconfont _zs_gallerygC" mx-click="' + $viewId + '__ap()">&#xe603;</i>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        var that = this;
        that.extra = extra;
        that['__j'] = $('#' + that.id);
        that['__j'].on('__p', function (e) {
            that.extra = {
                msg: e.msg,
                timeout: e.timeout
            };
            that['__n']();
        });
        that.on('destroy', function () {
            that.owner.unmountVframe();
            that['__j'].remove();
        });
    },
    render: function () {
        var that = this;
        that.updater.digest({});
        that['__n']();
    },
    '__n': function (e) {
        var that = this;
        clearTimeout(that['__cb']);
        clearTimeout(that['__bu']);
        clearTimeout(that['__bt']);
        var extra = that.extra;
        var timeout = extra.timeout;
        that['__bt'] = setTimeout(that.wrapAsync(function () {
            that.updater.digest({
                msg: extra.msg,
                timeout: timeout,
                top: 0
            });
        }), Duration);
        if (timeout) {
            that['__cb'] = setTimeout(that.wrapAsync(function () {
                that['__ap<click>']();
            }), timeout);
        }
    },
    '__ap<click>': function (e) {
        var that = this;
        clearTimeout(that['__cb']);
        clearTimeout(that['__bu']);
        clearTimeout(that['__bt']);
        that['__bu'] = setTimeout(that.wrapAsync(function () {
            that.updater.digest({
                top: '-50px'
            });
        }), Duration);
    }
}, {
    gtip: function (msg, timeout) {
        var id = this.id + '_guid';
        var node = $('#' + id);
        if (!node.length) {
            $('body').append("<div id=\"" + id + "\" />");
            this.owner.mountVframe(id, 'mx-gtip/index', {
                msg: msg,
                timeout: timeout
            });
        }
        else {
            node.trigger({
                type: '__p',
                msg: msg,
                timeout: timeout
            });
        }
    }
});

});