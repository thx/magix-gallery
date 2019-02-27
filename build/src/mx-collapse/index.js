/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-collapse/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-collapse_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-collapse_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-collapse_index_-collapse {\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n  overflow: hidden;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item {\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title {\n  cursor: pointer;\n  position: relative;\n  padding: 10px 24px;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-arrow > * {\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  margin-top: -10px;\n  transition: all 0.25s;\n  color: #999;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-text {\n  margin-left: 20px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content {\n  display: none;\n  border-top: 1px solid #e6e6e6;\n  overflow: hidden;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content ._zs_gallery_mx-collapse_index_-inner {\n  padding: 10px 24px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content ._zs_gallery_mx-collapse_index_-text {\n  line-height: 22px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item:last-child {\n  border-bottom: 0 none;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item._zs_gallery_mx-collapse_index_-disabled ._zs_gallery_mx-collapse_index_-title {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item._zs_gallery_mx-collapse_index_-expand ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-arrow > * {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryai:_" class="_zs_gallery_mx-collapse_index_-collapse">';
    $line = 2;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_czmigqsyj$art_c = list.length; index < $art_czmigqsyj$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_czmigqsyj$art_c = list.length; index < $art_czmigqsyj$art_c; index++) {
        var item = list[index];
        $p += '<div mxv class="_zs_gallery_mx-collapse_index_-item ';
        $line = 3;
        $art = 'if item.expand';
        ;
        $expr = '<%if (item.expand) {%>';
        if (item.expand) {
            ;
            $p += ' _zs_gallery_mx-collapse_index_-expand ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 3;
        $art = 'if item.disabled';
        ;
        $expr = '<%if (item.disabled) {%>';
        if (item.disabled) {
            ;
            $p += ' _zs_gallery_mx-collapse_index_-disabled ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"><div class="_zs_gallery_mx-collapse_index_-title" ';
        $line = 4;
        $art = 'if !item.disabled';
        ;
        $expr = '<%if (!item.disabled) {%>';
        if (!item.disabled) {
            ;
            $p += ' mx-click="' + $viewId + 'toggle({index: ';
            $line = 4;
            $art = '=index';
            ;
            $p += ($expr = '<%=index%>', $e(index)) + '})" ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '><span mxa="_zs_galleryai:a" class="_zs_gallery_mx-collapse_index_-arrow">';
        $line = 5;
        $art = '!item.arrow';
        ;
        $p += ($expr = '<%!item.arrow%>', $n(item.arrow)) + '</span><span mxa="_zs_galleryai:b" class="_zs_gallery_mx-collapse_index_-text">';
        $line = 6;
        $art = '=item.title';
        ;
        $p += ($expr = '<%=item.title%>', $e(item.title)) + '</span></div>';
        $line = 8;
        $art = 'if !item.disabled';
        ;
        $expr = '<%if (!item.disabled) {%>';
        if (!item.disabled) {
            ;
            $p += '<div mxv class="_zs_gallery_mx-collapse_index_-content" id="';
            $line = 9;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_content_';
            $line = 9;
            $art = '=index';
            ;
            $p += ($expr = '<%=index%>', $e(index)) + '" style="';
            $line = 10;
            $art = 'if item.height';
            ;
            $expr = '<%if (item.height) {%>';
            if (item.height) {
                ;
                $p += ' display: block; opacity: 0; height: 0; ';
                $line = 10;
                $art = 'if item.inited && item.expand';
                ;
                $expr = '<%if (item.inited && item.expand) {%>';
                if (item.inited && item.expand) {
                    ;
                    $p += ' opacity: 1; height: ';
                    $line = 10;
                    $art = '=item.height';
                    ;
                    $p += ($expr = '<%=item.height%>', $e(item.height)) + 'px; ';
                    $line = 10;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '  ';
                $line = 10;
                $art = 'if item.inited && !item.expand';
                ;
                $expr = '<%if (item.inited && !item.expand) {%>';
                if (item.inited && !item.expand) {
                    ;
                    $p += ' opacity: 0; height: 0; ';
                    $line = 10;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 10;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"><div mxv="list" class="_zs_gallery_mx-collapse_index_-inner" mx-view="';
            $line = 11;
            $art = '=item.view';
            ;
            $p += ($expr = '<%=item.view%>', $e(item.view)) + '?data=';
            $line = 11;
            $art = '@item';
            ;
            $p += ($expr = '<%@item%>', $i($$ref, item)) + '"></div></div>';
            $line = 13;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 15;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-collapse/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        // 是否只展示一个：默认为true
        var onlyOne = (extra.onlyOne + '' !== 'false');
        // 展示列表
        var list = extra.list || [];
        var hasExpand = false;
        list.forEach(function (item, index) {
            if (!item.arrow) {
                item.arrow = '<span class="mc-iconfont" style="font-size: 14px;">&#xe602;</span>';
            }
            if (!item.view) {
                item.view = 'mx-collapse/content';
            }
            item.expand = item.expand || false;
            if (item.disabled) {
                // 禁用的不展开
                item.expand = false;
            }
            hasExpand = hasExpand || item.expand;
        });
        if (!hasExpand) {
            // 默认展开非禁用第一个
            for (var i = 0; i < list.length; i++) {
                if (!list[i].disabled) {
                    list[i].expand = true;
                    break;
                }
            }
        }
        that.updater.set({
            viewId: that.id,
            onlyOne: onlyOne,
            list: list
        });
        that.owner.oncreated = function () {
            // 所有子view加载完成后
            if (!that.$init) {
                that.$init = 1;
                // 计算实际高度
                var viewId_1 = that.id;
                var list_1 = that.updater.get('list');
                list_1.forEach(function (item, index) {
                    var content = $('#' + viewId_1 + '_content_' + index);
                    item.height = content.outerHeight();
                });
                that.updater.digest({
                    list: list_1
                });
                // 加载展开动画
                list_1.forEach(function (item, index) {
                    item.inited = true;
                });
                that.updater.digest({
                    list: list_1
                });
            }
        };
    },
    render: function () {
        this.updater.digest({});
    },
    'toggle<click>': function (event) {
        var cur = event.params.index;
        var list = this.updater.get('list'), onlyOne = this.updater.get('onlyOne');
        list.forEach(function (item, index) {
            if (index == cur) {
                item.expand = !item.expand;
            }
            else {
                if (onlyOne) {
                    item.expand = false;
                }
            }
        });
        this.updater.digest({
            list: list
        });
    }
});

});