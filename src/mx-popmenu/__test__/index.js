/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popmenu/__test__/index',["magix","$","../index"],function(require,exports,module){
/*Magix,$*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("e",".aN{-webkit-box-shadow:0 3px 3px #eee;box-shadow:0 3px 3px #eee;list-style:none;margin:0;border:1px solid #e6e6e6;border-radius:4px;position:relative;background-color:#fff}.aO{color:#666;display:block;padding:0 7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;cursor:pointer}.aO:hover{color:#fff;background-color:#8383eb}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popmenu</h2><div class=\"B ag\"><button mx-guid=\"g0\u001f\" type=\"button\" class=\"al am\" mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\">显示更多菜单</button><ul mx-guid=\"g1\u001f\" class=\"af aN\" id=\"menu_<%=$$.viewId%>\"><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单1</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单2</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单3</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单4</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单5</li><li class=\"aO\" mx-click=\"\u001f\u001ehide()\">示例菜单6</li></ul></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand\" mx-view=\"app/gallery/mx-popmenu/index\" view-related=\"#menu_&lt;%=viewId%&gt;\"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class=\"none menu\" id=\"menu_&lt;%=viewId%&gt;\"&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class=\"z\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'hide&lt;click&gt;' () {\n        $('#' + this.id + ' button').invokeView('hide');\n    }\n});</pre></div>","subs":[{"keys":["viewId"],"path":"button[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["viewId"],"path":"ul[mx-guid=\"g1\u001f\"]","attr":"id=\"menu_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>': function () {
        $('#' + this.id + ' button').invokeView('_a');
    }
});

});