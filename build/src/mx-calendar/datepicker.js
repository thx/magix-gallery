/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/datepicker",["magix","$","../mx-monitor/index","mx-calendar/util","./index"],(require,exports,module)=>{
/*Magix,$,Monitor,Util*/
require("./index");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Util = require("mx-calendar/util");
var GetDefaultDate = Util.getDefaultDate;
Magix.applyStyle("_zs_gallerym","._zs_gallerybY{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_gallery_{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_gallery_{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_gallerya{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_gallerya{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryb{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryb{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryc{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryc{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryd{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryd{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}[mx-view*=\"mx-calendar/datepicker\"],[mx-view*=\"mx-calendar/rangepicker\"]{display:inline-block;position:relative;vertical-align:middle}[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallerybZ,[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallerybZ{display:none;position:absolute;z-index:1000;min-width:100%}[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallerybZ._zs_galleryc_,[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallerybZ._zs_galleryc_{display:block;-webkit-animation:_zs_gallery_ .25s ease-out;animation:_zs_gallery_ .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}[mx-view*=\"mx-calendar/datepicker\"] ._zs_galleryca,[mx-view*=\"mx-calendar/rangepicker\"] ._zs_galleryca{width:100%}._zs_galleryaO{position:relative}._zs_galleryaO._zs_gallerycb ._zs_gallerycc{padding:0 5px}._zs_galleryaO._zs_gallerycd ._zs_gallerycc{position:absolute;top:0;left:50%;width:36px;height:30px;margin-left:-18px;line-height:30px;text-align:center}._zs_galleryaO._zs_gallerycd ._zs_galleryce{display:inline-block;width:50%;text-align:center}._zs_galleryaO._zs_gallerycd ._zs_galleryaQ{padding-right:18px}._zs_galleryaO._zs_gallerycd ._zs_galleryaR{padding-left:18px}._zs_galleryaO._zs_galleryaP ._zs_galleryaQ{color:#4d7fff}._zs_galleryaO._zs_galleryaP ._zs_galleryaR{color:#14c9ce}");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, dateInfo = $$.dateInfo, show = $$.show, left = $$.left, top = $$.top; $p += '<div class="input _zs_galleryca" id="input_' + $e(viewId) + '" mx-click="' + $viewId + '__o()" mx-change="' + $viewId + '__l()"><div mxa="_zs_gallery&:_" class="_zs_galleryaO">'; if (dateInfo.prefix) {
    ;
    $p += '<span mxa="_zs_gallery&:a" class="color-9 mr5">' + $e(dateInfo.prefix) + '：</span>';
} ; $p += ' ' + $e(dateInfo.selected) + '</div></div><div mxv="dateInfo" class="_zs_gallerybZ '; if (show) {
    ;
    $p += '_zs_galleryc_';
} ; $p += '" id="dpcnt_' + $e(viewId) + '" style="left: ' + $e(left) + 'px; top: ' + $e(top) + 'px;" mx-view="mx-calendar/index?configs=' + $i($$ref, dateInfo) + '" mx-change="' + $viewId + '__q()" mx-cancel="' + $viewId + '__m()"></div>'; return $p; },
    init: function (extra) {
        var that = this;
        Monitor['__f']();
        that.on('destroy', function () {
            Monitor['__g'](that);
            Monitor['__h']();
        });
        that['__i'] = $.extend(true, {}, extra);
    },
    render: function () {
        var that = this;
        var dateInfo = that['__i'];
        dateInfo.hasBtn = 1;
        if (!dateInfo.selected) {
            dateInfo.selected = GetDefaultDate(dateInfo.min, dateInfo.max, dateInfo.formatter);
        }
        that.updater.digest({
            viewId: that.id,
            dateInfo: dateInfo
        });
        that['__j'] = $('#' + that.id);
    },
    '__k': function (node) {
        var that = this;
        return Magix.inside(node, that.id) || Magix.inside(node, that['__j'][0]);
    },
    '__l<change,focusin,focusout>': function (e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },
    '__o<click>': function (e) {
        e.preventDefault();
        var show = this.updater.get('show');
        if (show) {
            this['__m']();
        }
        else {
            this['__n']();
        }
    },
    '__n': function () {
        var that = this;
        var show = that.updater.get('show');
        if (!show) {
            that.updater.digest({
                show: true
            });
            var inputNode = $('#input_' + that.id), calNode = $('#dpcnt_' + that.id);
            var dateInfo = that.updater.get('dateInfo');
            var gap = 10;
            var left = 0, top = inputNode.outerHeight() + gap;
            if (dateInfo.align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }
            that.updater.digest({
                top: top,
                left: left
            });
            Monitor['__p'](that);
        }
    },
    '__m': function () {
        var that = this;
        var show = that.updater.get('show');
        if (show) {
            that.updater.digest({
                show: false
            });
            Monitor['__g'](that);
        }
    },
    '__q<change>': function (e) {
        var that = this;
        e.stopPropagation();
        var dateInfo = that.updater.get('dateInfo');
        dateInfo.selected = e.date + (e.time ? ' ' + e.time : '');
        that.updater.digest({
            dateInfo: dateInfo
        });
        that['__m']();
        // 通知外层数据更新
        that['__j'].val(dateInfo.selected).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
    },
    '__m<cancel>': function () {
        this['__m']();
    }
});

});