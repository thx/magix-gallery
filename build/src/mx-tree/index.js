/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/index",["magix","mx-tree/util","../mx-medusa/util","./branch"],(require,exports,module)=>{
/*Magix,Util,I18n*/
require("./branch");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var Util = require("mx-tree/util");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_galleryaH","._zs_gallerymX{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymY{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerymY ._zs_gallerymZ{float:left;height:20px;margin-right:5px;line-height:20px;color:#ccc;transition:color .25s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerymY ._zs_galleryn_{cursor:pointer;font-size:14px}._zs_gallerymY ._zs_galleryn_:hover{color:#666}._zs_galleryna ._zs_gallerymY{height:0;padding-bottom:0}._zs_gallerynb{position:relative}._zs_gallerync{padding-left:20px}._zs_gallerynd,._zs_gallerynd ._zs_gallerynb{position:relative}._zs_gallerynd ._zs_gallerynb:after{content:\"\";position:absolute;top:22px;left:7px;bottom:2px;width:1px;background-color:#e6e6e6}._zs_gallerynd ._zs_gallerynb:last-child:after{content:none}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, hasLine = $$.hasLine, readOnly = $$.readOnly, needExpand = $$.needExpand, textKey = $$.textKey, valueKey = $$.valueKey, list = $$.list; $p += '<div mxv="readOnly,needExpand,list" id="tree_' + $e(viewId) + '" class="'; if (hasLine) {
    ;
    $p += ' _zs_gallerynd ';
} ; $p += '" mx-view="mx-tree/branch?readOnly=' + $i($$ref, readOnly) + '&needExpand=' + $i($$ref, needExpand) + '&textKey=' + $eu(textKey) + '&valueKey=' + $eu(valueKey) + '&list=' + $i($$ref, list) + '&fromTop=' + $i($$ref, true) + '"></div>'; return $p; },
    init: function (extra) {
        this['__i'] = extra;
    },
    render: function () {
        var me = this;
        var ops = me['__i'];
        var readOnly = (ops.readOnly + '') === 'true';
        var hasLine = (ops.hasLine + '') === 'true';
        var valueKey = ops.valueKey || 'value';
        var textKey = ops.textKey || 'text';
        var parentKey = ops.parentKey || 'pValue';
        // 是否需要全选功能，默认关闭
        var needAll = (ops.needAll + '') === 'true';
        // 是否可展开收起，默认false
        var needExpand = (ops.needExpand + '') === 'true';
        // 可展开收起的时候，默认false
        var close = (ops.close + '') === 'true';
        var info = Util.listToTree(ops.list, valueKey, parentKey, close);
        var list;
        if (needAll) {
            var all = {};
            all[valueKey] = 'all';
            all[textKey] = I18n['select.all'];
            all.isAll = true;
            all.children = info.list;
            all.close = close;
            list = [all];
        }
        else {
            list = info.list;
        }
        me.updater.digest({
            viewId: me.id,
            valueKey: valueKey,
            textKey: textKey,
            list: list,
            readOnly: readOnly,
            hasLine: hasLine,
            needExpand: needExpand
        });
        var bottomValues = ops.bottomValues || [];
        if (bottomValues.length > 0) {
            me.setBottomValues(bottomValues);
        }
    },
    setBottomValues: function (bottomValues) {
        this.loop(function (vf) {
            vf.invoke('setValues', [bottomValues]);
        });
    },
    getBottomValues: function () {
        var bottomValues = [];
        this.loop(function (vf) {
            var result = vf.invoke('getValues');
            bottomValues = bottomValues.concat(result);
        });
        return bottomValues;
    },
    getBottomItems: function () {
        var bottomItems = [];
        this.loop(function (vf) {
            var result = vf.invoke('getItems');
            bottomItems = bottomItems.concat(result);
        });
        return bottomItems;
    },
    loop: function (fn) {
        var me = this;
        var children = me.owner.children();
        var _loop = function (children) {
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                var vf = Vframe.get(c);
                fn(vf);
                var cc = vf.children();
                if (cc && (cc.length > 0)) {
                    _loop(cc);
                }
            }
        };
        _loop(children);
    }
});

});