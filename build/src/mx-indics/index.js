/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-indics_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-indics_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-indics_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-indics_index_-header,\n._zs_gallery_mx-indics_index_-footer {\n  position: relative;\n  height: 60px;\n  padding: 0 18px;\n  background-color: #fff;\n}\n._zs_gallery_mx-indics_index_-header {\n  line-height: 60px;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-footer {\n  padding-top: 14px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 32%;\n}\n._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 32%;\n  height: 100%;\n  padding-left: 18px;\n}\n._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line {\n  padding: 26px 18px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: #fafafa;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  width: 33%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-left {\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right {\n  background-color: #fafafa;\n  padding-top: 56px;\n  padding-bottom: 18px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-oper {\n  position: absolute;\n  top: 18px;\n  left: 18px;\n  right: 18px;\n  text-align: right;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper {\n  height: 100%;\n  overflow-y: scroll;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-right: 18px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-btn {\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting-btn:hover,\n._zs_gallery_mx-indics_index_-setting-btn:focus,\n._zs_gallery_mx-indics_index_-setting-btn:active,\n._zs_gallery_mx-indics_index_-setting-btn:visited {\n  color: #666;\n  border-color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting-switch-icon {\n  margin-left: 4px;\n  font-size: 12px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, isDefault = $$.isDefault; var $expr, $art, $line; try {
    $p += '<a mxs="_zs_gallerya;:_" href="javascript:;" class="input _zs_gallery_mx-indics_index_-setting-btn mr10" mx-click="' + $viewId + 'show()"><i class="iconfont displacement-2">&#xe731;</i></a><a href="javascript:;" class="input _zs_gallery_mx-indics_index_-setting-btn" mx-click="' + $viewId + 'toggleDefault({isDefault:';
    $line = 4;
    $art = '=isDefault';
    ;
    $p += '' + ($expr = '<%=isDefault%>', $e(isDefault)) + '})">';
    $line = 5;
    $art = '=isDefault?\'默认数据\':\'自定义数据\'';
    ;
    $p += '' + ($expr = '<%=isDefault?\'默认数据\':\'自定义数据\'%>', $e(isDefault ? '默认数据' : '自定义数据')) + '<i mxs="_zs_gallerya;:a" class="iconfont _zs_gallery_mx-indics_index_-setting-switch-icon">&#xe658;</i></a>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/index.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.updater.set({
            selectedKeys: e.selected,
            isDefault: this.isDefault(e.selected || [])
        });
        this.viewOptions = e;
    },
    render: function () {
        this.updater.digest();
    },
    isDefault: function (selectedKeys) {
        var defaults = Fields.getDefaults();
        var isDefault = (selectedKeys.length == defaults.length);
        if (isDefault) {
            isDefault = defaults.some(function (item) {
                return $.inArray(item.key, selectedKeys) > -1;
            });
        }
        return isDefault;
    },
    'toggleDefault<click>': function (e) {
        var that = this;
        var isDefault = e.params.isDefault;
        var pageKey = that.viewOptions.pageKey;
        var selectedKeys = [];
        if (isDefault) {
            // 切换为自定义
            selectedKeys = Fields.getMemberConfig(pageKey);
        }
        else {
            // 切换为默认值
            selectedKeys = Fields.getDefaultKeys();
        }
        // 保存用户设置
        if (pageKey) {
            Fields.setMemberConfig(pageKey, selectedKeys);
        }
        $('#' + that.id).trigger({
            type: 'change',
            selected: selectedKeys
        });
        that.updater.set({
            selectedKeys: selectedKeys,
            isDefault: !isDefault
        }).digest();
    },
    'show<click>': function (e) {
        e.preventDefault();
        var that = this;
        var selectedKeys = that.updater.get('selectedKeys');
        var viewOptions = this.viewOptions;
        var sortable = (/^true$/i).test(viewOptions.sortable);
        var gap = sortable ? 3 : 2;
        var dialogOptions = {
            width: 220 * gap,
            height: 612,
            closable: false,
            modal: true
        };
        that.mxDialog('report/setting-dialog', {
            selected: selectedKeys,
            pageKey: viewOptions.pageKey,
            limit: viewOptions.limit || 0,
            sortable: sortable,
            callback: function (newSelectedKeys) {
                that.updater.set({
                    selectedKeys: newSelectedKeys,
                    isDefault: that.isDefault(newSelectedKeys)
                }).digest();
                $('#' + that.id).trigger({
                    type: 'change',
                    selected: newSelectedKeys
                });
            }
        }, dialogOptions);
    }
});

});