/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/index",["magix","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-popmenu___test___index_",".__mx-popmenu___test___index_-menu{\n    box-shadow: 0 3px 3px #eee;\n    list-style: none;\n    margin: 0;\n    border: 1px solid #e6e6e6;\n    border-radius: 4px;\n    position: relative;\n    background-color: #fff;\n}\n.__mx-popmenu___test___index_-menu-item {\n    color: #666;\n    display: block;\n    padding: 0 7px;\n    margin: 6px 10px;\n    height: 26px;\n    line-height: 26px;\n    border-radius: 4px;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.__mx-popmenu___test___index_-menu-item:hover {\n    color: #fff;\n    background-color: #8383eb;\n}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<h2 mxs="_T:_">mx-popmenu</h2><div mxa="_T:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-view="mx-popmenu/index?related=%23menu_' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '">显示更多菜单</button><ul class="__mx-style_index_-none __mx-popmenu___test___index_-menu" id="menu_' + ($expr = '<%=viewId%>', $e(viewId)) + '"><li mxs="_T:a" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单1</li><li mxs="_T:b" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单2</li><li mxs="_T:c" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单3</li><li mxs="_T:d" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单4</li><li mxs="_T:e" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单5</li><li mxs="_T:f" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单6</li></ul></div><div mxs="_T:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand" mx-view="app/gallery/mx-popmenu/index" view-related="#menu_&lt;%=viewId%&gt;"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class="none menu" id="menu_&lt;%=viewId%&gt;"&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    \'hide&lt;click&gt;\' () {\n        $(\'#\' + this.id + \' button\').invokeView(\'&#x40;{hide}\');\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>': function () {
        $('#' + this.id + ' button').invokeView('@{hide}');
    }
});

});