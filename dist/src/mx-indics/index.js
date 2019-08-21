/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/index",["magix","$","mx-dialog/index"],(require,exports,module)=>{
/*Magix,$,Dialog*/

var Magix = require("magix");
var $ = require("$");
var Dialog = require("mx-dialog/index"); //mixins dialog
Magix.applyStyle("_zs_gallery_mx-indics_index_","._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n  height: 100%;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-header {\n  width: 100%;\n  height: 60px;\n  padding: 0 24px;\n  background-color: #fff;\n  line-height: 60px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content {\n  position: absolute;\n  top: 60px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: auto;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line {\n  position: relative;\n  padding: 16px 24px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-name {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  width: 90px;\n  padding: 8px 0;\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  padding: 8px 0;\n  white-space: nowrap;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-item ._zs_gallery_mx-indics_index_-field-tip {\n  position: relative;\n  top: 1px;\n  left: 1px;\n  font-size: 14px;\n  color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent ._zs_gallery_mx-indics_index_-line {\n  padding-left: 122px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 240px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-content {\n  right: 240px;\n  border-right: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 240px;\n  height: 98px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-title {\n  height: 60px;\n  line-height: 60px;\n  font-size: 16px;\n  padding-left: 24px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-oper {\n  height: 38px;\n  padding: 0 24px;\n  line-height: 38px;\n  text-align: right;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper {\n  position: absolute;\n  top: 98px;\n  right: 0;\n  bottom: 0;\n  width: 240px;\n  padding: 0 24px 16px 24px;\n  overflow-y: scroll;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn {\n  display: inline-block;\n  width: 40px;\n  padding-right: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn ._zs_gallery_mx-indics_index_-setting-show-icon {\n  position: relative;\n  top: 2px;\n  font-size: 18px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn {\n  display: inline-block;\n  width: auto;\n}\n[mx-view*=\"mx-indics/index\"] {\n  display: inline-block;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-show-btn {\n  border-color: var(--border-highlight-hover);\n  color: #333;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-switch-btn {\n  border-color: var(--border-highlight-hover);\n  color: #333;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-switch-btn ._zs_gallery_mx-indics_index_-setting-switch-icon {\n  color: var(--border-highlight-hover);\n}\n");
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
} ; var $g = '', $_temp, $p = '', data = $$.data; var $expr, $art, $line; try {
    $p += '<a mxs="_zs_galleryc0:_" href="javascript:;" class="mx-trigger _zs_gallery_mx-indics_index_-setting-show-btn" mx-click="' + $viewId + 'show()"><i class="mc-iconfont _zs_gallery_mx-indics_index_-setting-show-icon">&#xe731;</i></a><a mxa="_zs_galleryc0:_" href="javascript:;" class="mx-trigger _zs_gallery_mx-indics_index_-setting-switch-btn" mx-click="' + $viewId + 'toggleDefault()">';
    $line = 5;
    $art = '=data.map[data.type][\'label\']';
    ;
    $p += ($expr = '<%=data.map[data.type][\'label\']%>', $e(data.map[data.type]['label'])) + '<i mxs="_zs_galleryc0:a" class="mc-iconfont mx-trigger-arrow _zs_gallery_mx-indics_index_-setting-switch-icon">&#xe692;</i></a>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/index.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (e) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        this.assign(e);
    },
    assign: function (e) {
        var that = this;
        var altered = that.updater.altered();
        var textKey = e.textKey || 'text', valueKey = e.valueKey || 'value', parentKey = e.parentKey || 'pValue';
        var fields = [];
        (e.fields || []).forEach(function (item) {
            fields.push({
                text: item[textKey],
                value: item[valueKey],
                pValue: item[parentKey],
                tip: item.tip || ''
            });
        });
        var parents = [];
        (e.parents || []).forEach(function (item) {
            parents.push({
                text: item[textKey],
                value: item[valueKey]
            });
        });
        var customs = (e.customs || []).map(function (v) {
            return '' + v;
        });
        var defaults = (e.defaults || []).map(function (v) {
            return '' + v;
        });
        // 当自定义为空时，默认为defaults
        if (customs.length == 0) {
            customs = defaults;
        }
        // 可选指标上限
        var limit = +e.limit || 0;
        // 是否可排序
        var sortable = (e.sortable + '' === 'true');
        // lineNumber：每行个数，默认情况下
        // 可排序：一行四个
        // 不可排序：一行五个
        var lineNumber = e.lineNumber || (sortable ? 4 : 5);
        // 1 默认
        // 2 自定义
        var type = (e.custom + '' === 'true') ? 2 : 1;
        var map = {
            1: {
                label: '默认数据',
                list: defaults
            },
            2: {
                label: '自定义数据',
                list: customs
            }
        };
        this.updater.set({
            data: {
                parents: parents,
                fields: fields,
                sortable: sortable,
                lineNumber: lineNumber,
                limit: limit,
                map: map,
                type: type
            }
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
    },
    'toggleDefault<click>': function (e) {
        var that = this;
        var data = that.updater.get('data');
        if (data.type == 1) {
            data.type = 2;
        }
        else {
            data.type = 1;
        }
        that.updater.digest({
            data: data
        });
        that['@{fire}']('btn-switch');
    },
    '@{fire}': function (triggerType) {
        var that = this;
        var data = that.updater.get('data');
        var type = data.type, map = data.map;
        $('#' + that.id).trigger({
            type: 'change',
            triggerType: triggerType,
            defaults: map[1].list,
            custom: (type == 2),
            customs: map[2].list
        });
    },
    /**
     * 开浮层编辑了就是自定义数据了
     */
    'show<click>': function (e) {
        e.preventDefault();
        var that = this;
        var data = that.updater.get('data');
        var viewOptions = $.extend(true, {}, data);
        viewOptions.selected = viewOptions.map[viewOptions.type].list;
        viewOptions.callback = function (d) {
            // 自定义数据
            data.type = 2;
            data.map[data.type]['list'] = d.selected;
            that.updater.digest({
                data: data
            });
            that['@{fire}']('dialog-setting');
        };
        that.mxModal('mx-indics/dialog', viewOptions, {
            width: 1000,
            closable: false,
            card: false
        });
    }
});

});