/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popmenu/__test__/index',["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-popmenu___test___index_",".__mx-popmenu___test___index_-menu{\n    -webkit-box-shadow: 0 3px 3px #eee;\n            box-shadow: 0 3px 3px #eee;\n    list-style: none;\n    margin: 0;\n    border: 1px solid #e6e6e6;\n    border-radius: 4px;\n    position: relative;\n    background-color: #fff;\n}\n.__mx-popmenu___test___index_-menu-item {\n    color: #666;\n    display: block;\n    padding: 0 7px;\n    margin: 6px 10px;\n    height: 26px;\n    line-height: 26px;\n    border-radius: 4px;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.__mx-popmenu___test___index_-menu-item:hover {\n    color: #fff;\n    background-color: #8383eb;\n}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popmenu</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button mx-guid=\"g0\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\">显示更多菜单</button><ul mx-guid=\"g1\u001f\" class=\"__mx-style_index_-none __mx-popmenu___test___index_-menu\" id=\"menu_<%=$$.viewId%>\"><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单1</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单2</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单3</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单4</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单5</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单6</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand\" mx-view=\"app/gallery/mx-popmenu/index\" view-related=\"#menu_&lt;%=viewId%&gt;\"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class=\"none menu\" id=\"menu_&lt;%=viewId%&gt;\"&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'hide&lt;click&gt;' () {\n        $('#' + this.id + ' button').invokeView('&#x40;{hide}');\n    }\n});</pre></div>","subs":[{"keys":["viewId"],"path":"button[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["viewId"],"path":"ul[mx-guid=\"g1\u001f\"]","attr":"id=\"menu_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}],"file":"mx-popmenu/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>'() {
        $('#' + this.id + ' button').invokeView('@{hide}');
    }
});

});