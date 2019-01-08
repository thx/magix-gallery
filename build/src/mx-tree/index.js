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
Magix.applyStyle("_zs_gallery_mx-tree_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tree_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-tree_index_-name {\n  position: relative;\n  height: 32px;\n  line-height: 20px;\n  padding-bottom: 12px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: height 0.2s;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-icon {\n  float: left;\n  height: 20px;\n  margin-right: 5px;\n  line-height: 20px;\n  color: #ccc;\n  transition: color 0.25s;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper {\n  cursor: pointer;\n  font-size: 14px;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-tree_index_-close ._zs_gallery_mx-tree_index_-name {\n  height: 0;\n  padding-bottom: 0;\n}\n._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-indent {\n  padding-left: 20px;\n}\n._zs_gallery_mx-tree_index_-line {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:after {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: 7px;\n  bottom: 2px;\n  width: 1px;\n  background-color: #e6e6e6;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:last-child:after {\n  content: none;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, hasLine = $$.hasLine, readOnly = $$.readOnly, needExpand = $$.needExpand, textKey = $$.textKey, valueKey = $$.valueKey, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxv="readOnly,needExpand,list" id="tree_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" class="';
    $line = 2;
    $art = 'if hasLine';
    ;
    $expr = '<%if (hasLine) {%>';
    if (hasLine) {
        ;
        $p += ' _zs_gallery_mx-tree_index_-line ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-view="mx-tree/branch?readOnly=';
    $line = 3;
    $art = '@readOnly';
    ;
    $p += ($expr = '<%@readOnly%>', $i($$ref, readOnly)) + '&needExpand=';
    $line = 4;
    $art = '@needExpand';
    ;
    $p += ($expr = '<%@needExpand%>', $i($$ref, needExpand)) + '&textKey=';
    $line = 5;
    $art = '=textKey';
    ;
    $p += ($expr = '<%!$eu(textKey)%>', $eu(textKey)) + '&valueKey=';
    $line = 6;
    $art = '=valueKey';
    ;
    $p += ($expr = '<%!$eu(valueKey)%>', $eu(valueKey)) + '&list=';
    $line = 7;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&fromTop=';
    $line = 8;
    $art = '@true';
    ;
    $p += ($expr = '<%@true%>', $i($$ref, true)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this['@{extra}'] = extra;
    },
    render: function () {
        var me = this;
        var ops = me['@{extra}'];
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