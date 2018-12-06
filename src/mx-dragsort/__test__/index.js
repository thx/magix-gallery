/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("__mx-dragsort___test___index_",".__mx-dragsort___test___index_-left {\n  width: 300px;\n  cursor: default;\n}\n.__mx-dragsort___test___index_-left li {\n  line-height: 30px;\n  padding: 10px;\n}\n.__mx-dragsort___test___index_-left li:nth-child(odd) {\n  background-color: rgba(172, 236, 182, 0.5);\n}\n.__mx-dragsort___test___index_-left span {\n  cursor: move;\n  margin-right: 10px;\n  display: inline-block;\n  height: 100%;\n}\n.__mx-dragsort___test___index_-left1 {\n  background: #F8F6F6;\n  cursor: default;\n  height: 120px;\n  overflow: auto;\n  width: 200px;\n}\n.__mx-dragsort___test___index_-hor {\n  width: 100%;\n  cursor: default;\n}\n.__mx-dragsort___test___index_-hor li {\n  width: 100px;\n  height: 60px;\n  text-align: center;\n  float: left;\n  line-height: 60px;\n  background: #F8F6F6;\n  border-right: 1px solid #fff;\n}\n.__mx-dragsort___test___index_-hor li[ds-draggable=\"false\"] {\n  background: #ccc;\n}\n");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_S:_">mx-dragsort</h2><h3 mxs="_S:a">默认示例</h3><div mxv mxa="_S:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mxs="_S:b" mx-view="mx-dragsort/index?selector=span" class="__mx-dragsort___test___index_-left __mx-style_index_-fl"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div mxv mxa="_S:a" class="__mx-style_index_-fr"><table mxv mxa="_S:b" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_S:c" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 3; i++) {%>';
    for (var i = 0; i < 3; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv mxa="_S:c" mx-view="mx-dragsort/index">';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 3; j++) {%>';
        for (var j = 0; j < 3; j++) {
            ;
            $p += '<td>' + ($expr = '<%=i%>', $e(i)) + '示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_S:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left fl" view-selector="span"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class="fr"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view="app/gallery/mx-dragsort/index"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 mxs="_S:e" class="__mx-style_index_-mt30">水平拖动</h3><div mxs="_S:f" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=false" class="__mx-dragsort___test___index_-hor __mx-style_index_-fl"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div mxs="_S:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 mxs="_S:h" class="__mx-style_index_-mt30">四个方向</h3><div mxs="_S:i" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=true" class="__mx-dragsort___test___index_-hor __mx-style_index_-fl"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div mxs="_S:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="true"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 mxs="_S:k" class="__mx-style_index_-mt30">滚动容器和窗口</h3><h4 mxs="_S:l">拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div mxs="_S:m" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?selector=span" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 mxs="_S:n" class="__mx-style_index_-mt30">跨容器拖动</h3><div mxs="_S:o" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?drops=_def&selector=span" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable" id="_abc"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view="mx-dragsort/index?selector=span&drops=_abc" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable __mx-style_index_-ml30" id="_def"></ul></div><div mxs="_S:p" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left left1 fl scrollable" view-drops="_def" view-selector="span" id="_abc"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view="mx-dragsort/index" class="left left1 fl scrollable ml30" id="_def" view-selector="span" view-drops="_abc"&gt;\n&lt;/ul&gt;</pre></div><h3 mxs="_S:q" class="__mx-style_index_-mt30">拖出容器删除</h3><div mxs="_S:r" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?sort=false" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable" mx-enterzone="' + $viewId + 'stop()" mx-leavezone="' + $viewId + 'ok()" mx-dragfinish="' + $viewId + 'del()"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div mxs="_S:s" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left left1 fl scrollable" mx-enterzone="stop()" mx-leavezone="ok()" mx-dragfinish="del()" view-sort="false"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.less\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'stop&lt;enterzone&gt;\'(e) {\n        e.changePointer(false);\n    },\n    \'ok&lt;leavezone&gt;\'(e) {\n        e.changePointer(true);\n    },\n    \'del&lt;dragfinish&gt;\'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 mxs="_S:t" class="__mx-style_index_-mt30">部分不能拖动及排序</h3><div mxs="_S:u" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=false" class="__mx-dragsort___test___index_-hor __mx-style_index_-fl"><li ds-draggable="false"><span>move</span>123</li><li ds-draggable="false"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable="false"><span>move</span>456</li></ul></div><div mxs="_S:v" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false"&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragsort/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'stop<enterzone>': function (e) {
        e.changePointer(false);
    },
    'ok<leavezone>': function (e) {
        e.changePointer(true);
    },
    'del<dragfinish>': function (e) {
        if (e.moved && e.outZone) { //moved and outside zone
            $(e.dragNode).slideUp();
            setTimeout(function () {
                e.dragZone.removeChild(e.dragNode);
            }, 500);
        }
    },
    'start<dragstart>': function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'none';
        e.originalEvent.dataTransfer.setDragImage(e.target, -10, -18);
    },
    'drop<drop>': function (e) {
        console.log(e);
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    'enter<dragenter>': function (e) {
        $(e.eventTarget).css({
            borderColor: 'red'
        });
    },
    'leave<dragleave>': function (e) {
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    '$doc<dragover>': function (e) {
        e.preventDefault();
    }
});

});