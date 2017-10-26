/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dragsort/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
Magix.applyStyle("d",".aK{width:300px;cursor:default}.aK li{line-height:30px;padding:10px}.aK li:nth-child(odd){background-color:rgba(172,236,182,.5)}.aK span{cursor:move;margin-right:10px;display:inline-block;height:100%}.aL{background:#f8f6f6;height:120px;overflow:auto;width:500px}.aM,.aL{cursor:default}.aM{width:100%}.aM li{width:100px;height:60px;text-align:center;float:left;line-height:60px;background:#f8f6f6;border-right:1px solid #fff}.aM li[ds-draggable=false]{background:#ccc}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragsort</h2><h3>默认示例</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"aK Z\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div class=\"a_\"><table class=\"ay az\"><thead><tr><th><input type=\"checkbox\" class=\"aq\" linkage=\"example1\"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody mx-view=\"mx-dragsort/index\"><%for(var b=0;b<10;b++){%><tr><td><input type=\"checkbox\" class=\"aq\" linkage-parent=\"example1\" value=\"ex1_<%=b%>\"></td><%for(var c=0;c<5;c++){%><td><%=b%>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left fl\" view-selector=\"span\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class=\"fr\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view=\"app/gallery/mx-dragsort/index\"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 class=\"f\">水平拖动</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"aM Z\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">四个方向</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=true\" class=\"aM Z\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"true\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">滚动容器和窗口</h3><h4>拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"aK aL Z ai\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 class=\"f\">跨容器拖动</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?drops=_def&selector=span\" class=\"aK aL Z ai\" id=\"_abc\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view=\"mx-dragsort/index?selector=span&drops=_abc\" class=\"aK aL Z ai x\" id=\"_def\"></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" view-drops=\"_def\" view-selector=\"span\" id=\"_abc\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view=\"mx-dragsort/index\" class=\"left left1 fl scrollable ml30\" id=\"_def\" view-selector=\"span\" view-drops=\"_abc\"&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">拖出容器删除</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?sort=false\" class=\"aK aL Z ai\" mx-enterzone=\"\u001f\u001estop()\" mx-leavezone=\"\u001f\u001eok()\" mx-dragfinish=\"\u001f\u001edel()\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" mx-enterzone=\"stop()\" mx-leavezone=\"ok()\" mx-dragfinish=\"del()\" view-sort=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'stop&lt;enterzone&gt;'(e) {\n        e.changePointer(false);\n    },\n    'ok&lt;leavezone&gt;'(e) {\n        e.changePointer(true);\n    },\n    'del&lt;dragfinish&gt;'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 class=\"f\">部分不能拖动及排序</h3><div class=\"B ag\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"aM Z\"><li ds-draggable=\"false\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"f\">drag and drop</h3><div class=\"B ag\"><ul class=\"aM Z\"><li ds-draggable=\"false\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>123</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>456</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>123</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>456</li><li draggable=\"true\" mx-dragstart=\"\u001f\u001estart()\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li></ul><div style=\"width:300px;height:300px;border:solid 1px #ccc\" mx-drop=\"\u001f\u001edrop()\" mx-dragenter=\"\u001f\u001eenter()\" mx-dragleave=\"\u001f\u001eleave()\">drop here</div></div>","subs":[]},
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
        if (e.moved && e.outZone) {
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