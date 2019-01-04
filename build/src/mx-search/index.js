/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/index",["magix","$","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryar","._zs_gallerykR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryA{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryA{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryB{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryB{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryC{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryC{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryD{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryD{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryE{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryE{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerykS,._zs_gallerykT{position:relative;height:32px}._zs_gallerykS ._zs_gallerykU,._zs_gallerykT ._zs_gallerykU{display:none;position:absolute;top:100%;min-width:100%;z-index:99;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykS ._zs_gallerykU ._zs_gallerykV,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerykS ._zs_gallerykU ._zs_gallerykV:hover,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV:hover{background-color:#f0f0f0}._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW,._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:active,._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:focus,._zs_gallerykS ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:hover,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:active,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:focus,._zs_gallerykT ._zs_gallerykU ._zs_gallerykV._zs_gallerykW:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerykS ._zs_gallerykU._zs_gallerykX,._zs_gallerykT ._zs_gallerykU._zs_gallerykX{display:block;-webkit-animation:_zs_galleryA .25s ease-out;animation:_zs_galleryA .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_gallerykT ._zs_gallerykU{right:0}._zs_gallerykS ._zs_gallerykU{left:0}");
var Monitor = require("../mx-monitor/index");
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
} ; var $g = '', $_temp, $p = '', align = $$.align, placeholder = $$.placeholder, searchValue = $$.searchValue, list = $$.list, show = $$.show, searchKey = $$.searchKey; $p += '<div mxv class="search-box '; if (align == 'right') {
    ;
    $p += ' _zs_gallerykT ';
}
else {
    ;
    $p += ' _zs_gallerykS ';
} ; $p += '"><i mxs="_zs_galleryc$:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="' + $e(placeholder) + '" value="' + $e(searchValue) + '" mx-keyup="' + $viewId + '__e()" mx-paste="' + $viewId + '__e()" mx-focusin="' + $viewId + '__e()" mx-focusout="' + $viewId + '__l()" mx-change="' + $viewId + '__l()"/><ul class="_zs_gallerykU '; if ((list.length > 1) && searchValue && show) {
    ;
    $p += ' _zs_gallerykX ';
} ; $p += '">'; for (var $art_idmnjfxfg$art_i = 0, $art_chxxbrnlfo$art_c = list.length; $art_idmnjfxfg$art_i < $art_chxxbrnlfo$art_c; $art_idmnjfxfg$art_i++) {
    var item = list[$art_idmnjfxfg$art_i];
    $p += '<li class="_zs_gallerykV ';
    if (searchKey == item.value) {
        ;
        $p += ' _zs_gallerykW ';
    }
    ;
    $p += '" mx-click="' + $viewId + '__aa({item:\'' + $i($$ref, item) + '\'})">' + $e(item.prefix) + '' + $e(searchValue) + '' + $e(item.suffix) + '</li>';
} ; $p += '</ul></div>'; return $p; },
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        Monitor['__f']();
        that.on('destroy', function () {
            Monitor['__g'](that);
            Monitor['__h']();
            if (that['__bK']) {
                clearTimeout(that['__bK']);
            }
        });
    },
    assign: function (data) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        that['__cM'] = data.searchKey || ''; //当前选中的key值
        // 上下键切换缓存
        that['__cN'] = that['__cM'];
        that['__cO'] = data.searchValue || ''; //当前填入的搜索内容
        that['__cP'] = data.placeholder || '';
        that['__cQ'] = data.align || 'left';
        // 多种类型搜索的时候
        var list = [];
        if (data.list) {
            var listText_1 = data.listText || 'text';
            var listValue_1 = data.listValue || 'value';
            try {
                list = (new Function('return ' + data.list))();
            }
            catch (e) {
                list = data.list;
            }
            list = list.map(function (item) {
                var tpls = (item.tmpl || ('搜索含有“${content}”的' + item[listText_1])).split('${content}');
                return {
                    prefix: tpls[0],
                    suffix: tpls[1],
                    text: item[listText_1],
                    value: item[listValue_1]
                };
            });
            if (!that['__cP']) {
                var ts = list.map(function (item) {
                    return item.text;
                });
                that['__cP'] = $.unique(ts).join('/');
            }
        }
        else {
            if (!that['__cP']) {
                that['__cP'] = '搜索';
            }
        }
        that['__cR'] = list;
        that['__j'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: that['__cR'],
            searchValue: that['__cO'],
            searchKey: that['__cM'],
            placeholder: that['__cP'],
            align: that['__cQ']
        });
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }
        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render: function () {
        this.updater.digest();
    },
    '__e<focusin,keyup,paste>': function (e) {
        e.stopPropagation();
        var that = this;
        if (that['__bK']) {
            clearTimeout(that['__bK']);
        }
        var show = that.updater.get('show'), list = that['__cR'];
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (show) {
                var idx = -1, searchKey = that['__cM'];
                for (var index = 0; index < list.length; index++) {
                    if (list[index].value == searchKey) {
                        idx = index;
                        break;
                    }
                }
                if (e.keyCode == 40) {
                    // 下移
                    idx += 1;
                    if (idx >= list.length) {
                        idx = 0;
                    }
                }
                if (e.keyCode == 38) {
                    // 下移
                    idx -= 1;
                    if (idx < 0) {
                        idx = list.length - 1;
                    }
                }
                that.updater.digest({
                    searchKey: that['__cM'] = list[idx].value
                });
            }
        }
        else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (!that['__cM'] && list && list.length > 0) {
                that['__cM'] = list[0].value;
            }
            that['__cN'] = that['__cM'];
            that['__cO'] = $.trim(e.eventTarget.value);
            that['__m']();
            that['__cd']();
        }
        else {
            that['__bK'] = setTimeout(that.wrapAsync(function () {
                that['__cO'] = $.trim(e.eventTarget.value);
                that['__n']();
            }), 300);
        }
    },
    '__m': function () {
        var that = this;
        if (that['__cM'] != that['__cN']) {
            // 上下键切换未选择
            that['__cM'] = that['__cN'];
        }
        that.updater.digest({
            searchKey: that['__cM'],
            searchValue: that['__cO'],
            show: false
        });
        Monitor['__g'](that);
    },
    '__n': function () {
        var that = this;
        that.updater.digest({
            searchKey: that['__cM'],
            searchValue: that['__cO'],
            show: true
        });
        Monitor['__p'](that);
    },
    '__k': function (node) {
        return Magix.inside(node, this.id);
    },
    '__l<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '__aa<click>': function (e) {
        e.stopPropagation();
        var that = this;
        var item = e.params.item;
        that.updater.digest({
            searchKey: that['__cM'] = that['__cN'] = item.value,
            show: false
        });
        that['__cd']();
    },
    '__cd': function () {
        var that = this;
        that['__j'].trigger({
            type: 'search',
            searchKey: that['__cM'],
            searchValue: that['__cO']
        });
    }
});

});