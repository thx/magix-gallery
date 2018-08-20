/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/group",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-dialog_group_","/* @dependent: ./index.less */\n._zs_gallery_mx-dialog_group_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dialog_group_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-dialog_group_-help {\n  position: relative;\n  padding-left: 192px;\n  border-radius: 4px;\n}\n._zs_gallery_mx-dialog_group_-help ._zs_gallery_mx-dialog_group_-help-navs {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  width: 192px;\n  background-color: #fafafa;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  overflow-y: auto;\n}\n._zs_gallery_mx-dialog_group_-help ._zs_gallery_mx-dialog_group_-help-navs ._zs_gallery_mx-dialog_group_-help-nav {\n  display: block;\n  height: 44px;\n  padding: 0 16px;\n  line-height: 44px;\n  border-left: 4px solid #fafafa;\n  color: #999;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.25s ease-out;\n}\n._zs_gallery_mx-dialog_group_-help ._zs_gallery_mx-dialog_group_-help-navs ._zs_gallery_mx-dialog_group_-help-nav._zs_gallery_mx-dialog_group_-hover {\n  color: #333;\n  background-color: #f6f9ff;\n  border-left: 4px solid #4d7fff;\n}\n._zs_gallery_mx-dialog_group_-help ._zs_gallery_mx-dialog_group_-help-navs ._zs_gallery_mx-dialog_group_-help-nav._zs_gallery_mx-dialog_group_-cur {\n  color: #4d7fff;\n}\n._zs_gallery_mx-dialog_group_-help ._zs_gallery_mx-dialog_group_-help-content {\n  padding: 20px;\n  overflow-y: auto;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, list = $$.list, curIndex = $$.curIndex, hoverIndex = $$.hoverIndex, textKey = $$.textKey, height = $$.height, contentView = $$.contentView; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery|:_" class="_zs_gallery_mx-dialog_group_-help"><div mxa="_zs_gallery|:a" class="_zs_gallery_mx-dialog_group_-help-navs">';
    $line = 3;
    $art = 'each list as item index';
    ;
    $p += '';
    $expr = '<%for(var index=0;index<list.length;index++){var item=list[index]%>';
    for (var index = 0; index < list.length; index++) {
        var item = list[index];
        $p += '<a href="javascript:;" class="_zs_gallery_mx-dialog_group_-help-nav ';
        $line = 5;
        $art = 'if index == curIndex';
        ;
        $p += '';
        $expr = '<%if(index==curIndex){%>';
        if (index == curIndex) {
            ;
            $p += ' _zs_gallery_mx-dialog_group_-cur ';
            $line = 5;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 5;
        $art = 'if index == hoverIndex';
        ;
        $p += '';
        $expr = '<%if(index==hoverIndex){%>';
        if (index == hoverIndex) {
            ;
            $p += ' _zs_gallery_mx-dialog_group_-hover ';
            $line = 5;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-mouseover="' + $viewId + 'over({index:\'';
        $line = 6;
        $art = '=index';
        ;
        $p += '' + ($expr = '<%=$eq(index)%>', $e($eq(index))) + '\'})" mx-mouseout="' + $viewId + 'out()" mx-click="' + $viewId + 'select({index:\'';
        $line = 8;
        $art = '=index';
        ;
        $p += '' + ($expr = '<%=$eq(index)%>', $e($eq(index))) + '\'})">';
        $line = 8;
        $art = '=item[textKey]';
        ;
        $p += '' + ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</a>';
        $line = 9;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv class="_zs_gallery_mx-dialog_group_-help-content" style="height: ';
    $line = 11;
    $art = '=height';
    ;
    $p += '' + ($expr = '<%=height%>', $e(height)) + 'px;"><div mxv="list" mx-view="';
    $line = 12;
    $art = '=contentView';
    ;
    $p += '' + ($expr = '<%=contentView%>', $e(contentView)) + '?data=';
    $line = 12;
    $art = '@list[curIndex]';
    ;
    $p += '' + ($expr = '<%@list[curIndex]%>', $i(list[curIndex])) + '"></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/group.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var textKey = extra.textKey || 'text';
        var list = extra.list || [];
        var curIndex = 0, hoverIndex = 0;
        this.updater.set({
            contentView: extra.contentView || '',
            list: list,
            textKey: textKey,
            curIndex: curIndex,
            hoverIndex: hoverIndex,
            height: extra.height
        });
    },
    render: function () {
        this.updater.digest();
    },
    'select<click>': function (e) {
        var index = e.params.index;
        this.updater.digest({
            curIndex: index,
            hoverIndex: index
        });
    },
    'over<mouseover>': function (e) {
        var index = e.params.index;
        this.updater.digest({
            hoverIndex: index
        });
    },
    'out<mouseout>': function (e) {
        var that = this;
        var curIndex = that.updater.get('curIndex');
        that.updater.digest({
            hoverIndex: curIndex
        });
    }
});

});