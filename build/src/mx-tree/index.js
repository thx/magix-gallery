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
Magix.applyStyle("_zs_gallery_mx-tree_index_","._zs_gallery_mx-tree_index_-name {\n  position: relative;\n  height: 32px;\n  line-height: 20px;\n  padding-bottom: 12px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: height 0.2s;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-icon {\n  float: left;\n  height: 20px;\n  margin-right: 5px;\n  line-height: 20px;\n  color: #ccc;\n  transition: color var(--duration);\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper {\n  cursor: pointer;\n  font-size: 14px;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-tree_index_-close ._zs_gallery_mx-tree_index_-name {\n  height: 0;\n  padding-bottom: 0;\n}\n._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-indent {\n  padding-left: 20px;\n}\n._zs_gallery_mx-tree_index_-line {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:after {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: 7px;\n  bottom: 2px;\n  width: 1px;\n  background-color: var(--color-border);\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:last-child:after {\n  content: none;\n}\n");
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
} ; var $g = '', $_temp, $p = '', hasLine = $$.hasLine, viewId = $$.viewId, readOnly = $$.readOnly, needExpand = $$.needExpand, textKey = $$.textKey, valueKey = $$.valueKey, closeMap = $$.closeMap, list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxv="readOnly,needExpand,closeMap,list" class="';
    $line = 1;
    $art = 'if hasLine';
    ;
    $expr = '<%if (hasLine) {%>';
    if (hasLine) {
        ;
        $p += ' _zs_gallery_mx-tree_index_-line ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" id="tree_';
    $line = 2;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" mx-change="' + $viewId + '@{change}()" mx-view="mx-tree/branch?fromTop=';
    $line = 3;
    $art = '@true';
    ;
    $p += ($expr = '<%@true%>', $i($$ref, true)) + '&readOnly=';
    $line = 4;
    $art = '@readOnly';
    ;
    $p += ($expr = '<%@readOnly%>', $i($$ref, readOnly)) + '&needExpand=';
    $line = 5;
    $art = '@needExpand';
    ;
    $p += ($expr = '<%@needExpand%>', $i($$ref, needExpand)) + '&textKey=';
    $line = 6;
    $art = '=textKey';
    ;
    $p += ($expr = '<%!$eu(textKey)%>', $eu(textKey)) + '&valueKey=';
    $line = 7;
    $art = '=valueKey';
    ;
    $p += ($expr = '<%!$eu(valueKey)%>', $eu(valueKey)) + '&closeMap=';
    $line = 8;
    $art = '@closeMap';
    ;
    $p += ($expr = '<%@closeMap%>', $i($$ref, closeMap)) + '&list=';
    $line = 10;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/index.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        // 保留历史展开收起状态
        me['@{close.map}'] = {};
        me['@{bottom.values}'] = [];
        me['@{owner.node}'] = $('#' + me.id);
        me.updater.snapshot();
        me.assign(ops);
    },
    assign: function (ops) {
        var me = this;
        var altered = me.updater.altered();
        var readOnly = (ops.readOnly + '') === 'true';
        var hasLine = (ops.hasLine + '') === 'true';
        var valueKey = ops.valueKey || 'value';
        var textKey = ops.textKey || 'text';
        var parentKey = ops.parentKey || 'pValue';
        // 是否需要全选功能，默认关闭
        var needAll = (ops.needAll + '') === 'true';
        // 是否可展开收起，默认false
        var needExpand = (ops.needExpand + '') === 'true';
        // 组织树状结构
        var info = Util.listToTree(ops.list, valueKey, parentKey);
        var list;
        if (needAll) {
            var all = {};
            all[valueKey] = me.id + '_all';
            all[textKey] = I18n['select.all'];
            all.isAll = true;
            all.children = info.list;
            list = [all];
        }
        else {
            list = info.list;
        }
        // 展开收起状态，默认false
        // 切换数据时保留历史展开收起状态
        var close = (ops.close + '') === 'true';
        var map = {};
        var _lp1 = function (arr) {
            arr.forEach(function (item) {
                map[item[valueKey]] = close;
                if (item.children && item.children.length > 0) {
                    _lp1(item.children);
                }
            });
        };
        _lp1(list);
        me['@{close.map}'] = Magix.mix(map, me['@{close.map}']);
        var _lp2 = function (arr) {
            arr.forEach(function (item) {
                item.close = me['@{close.map}'][item[valueKey]];
                if (item.children && item.children.length > 0) {
                    _lp2(item.children);
                }
            });
        };
        _lp2(list);
        // 历史选中保留
        me['@{bottom.values}'] = me['@{bottom.values}'].map(function (val) { return (val + ''); });
        (ops.bottomValues || []).forEach(function (val) {
            val = val + '';
            if (me['@{bottom.values}'].indexOf(val) < 0) {
                me['@{bottom.values}'].push(val);
            }
        });
        me.updater.set({
            viewId: me.id,
            valueKey: valueKey,
            textKey: textKey,
            list: list,
            readOnly: readOnly,
            hasLine: hasLine,
            needExpand: needExpand,
            closeMap: me['@{close.map}'],
            bottomValues: me['@{bottom.values}']
        });
        me['@{owner.node}'].val(me['@{bottom.values}']);
        if (!altered) {
            altered = me.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            me.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
        var bottomValues = this.updater.get('bottomValues');
        if (bottomValues.length > 0) {
            this.setBottomValues(bottomValues);
        }
    },
    '@{change}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var bottomValues = me.getBottomValues();
        me['@{owner.node}'].val(me['@{bottom.values}'] = bottomValues).trigger($.Event('change', {
            bottomValues: bottomValues
        }));
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