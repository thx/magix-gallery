/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-gtip_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-gtip_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-gtip_index_-gtip {\n  position: fixed;\n  top: -50px;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  height: 50px;\n  padding: 0 46px;\n  line-height: 50px;\n  color: #fff;\n  background-color: rgba(33, 33, 33, 0.72);\n  transition: all 0.25s;\n  text-align: center;\n}\n._zs_gallery_mx-gtip_index_-gtip ._zs_gallery_mx-gtip_index_-gtip-close {\n  opacity: 0.5;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  width: 26px;\n  height: 26px;\n  margin-top: -13px;\n  line-height: 26px;\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 50%;\n  transition: all 0.25s;\n  cursor: pointer;\n}\n._zs_gallery_mx-gtip_index_-gtip ._zs_gallery_mx-gtip_index_-gtip-close:hover {\n  opacity: 1;\n}\n");
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
} ; var $g = '', $_temp, $p = '', top = $$.top, msg = $$.msg, timeout = $$.timeout; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-gtip_index_-gtip" style="top: ';
    $line = 1;
    $art = '=top';
    ;
    $p += ($expr = '<%=top%>', $e(top)) + ';"><span>';
    $line = 2;
    $art = '!msg';
    ;
    $p += ($expr = '<%!msg%>', $n(msg)) + '</span>';
    $line = 4;
    $art = 'if !timeout';
    ;
    $expr = '<%if (!timeout) {%>';
    if (!timeout) {
        ;
        $p += '<i mxs="_zs_galleryb2:_" class="mc-iconfont _zs_gallery_mx-gtip_index_-gtip-close" mx-click="' + $viewId + '@{close}()">&#xe603;</i>';
        $line = 6;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg_1 = 'render view error:' + (ex.message || ex);
    if ($art)
        msg_1 += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg_1 += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg_1 += $expr + '\r\n\tat file:mx-gtip/index.html';
    throw msg_1;
} return $p; },
    init: function (extra) {
        var that = this;
        that.extra = extra;
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].on('@{add}', function (e) {
            that.extra = {
                msg: e.msg,
                timeout: e.timeout
            };
            that['@{show}']();
        });
        that.on('destroy', function () {
            that.owner.unmountVframe();
            that['@{owner.node}'].remove();
        });
    },
    render: function () {
        var that = this;
        that.updater.digest({});
        that['@{show}']();
    },
    '@{show}': function (e) {
        var that = this;
        clearTimeout(that['@{custom.hide.timer}']);
        clearTimeout(that['@{dealy.hide.timer}']);
        clearTimeout(that['@{dealy.show.timer}']);
        var extra = that.extra;
        var timeout = extra.timeout;
        that['@{dealy.show.timer}'] = setTimeout(that.wrapAsync(function () {
            that.updater.digest({
                msg: extra.msg,
                timeout: timeout,
                top: 0
            });
        }), Duration);
        if (timeout) {
            that['@{custom.hide.timer}'] = setTimeout(that.wrapAsync(function () {
                that['@{close}<click>']();
            }), timeout);
        }
    },
    '@{close}<click>': function (e) {
        var that = this;
        clearTimeout(that['@{custom.hide.timer}']);
        clearTimeout(that['@{dealy.hide.timer}']);
        clearTimeout(that['@{dealy.show.timer}']);
        that['@{dealy.hide.timer}'] = setTimeout(that.wrapAsync(function () {
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
                type: '@{add}',
                msg: msg,
                timeout: timeout
            });
        }
    }
});

});