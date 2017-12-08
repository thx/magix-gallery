/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dragselect/__test__/index',["magix","$","../index"],(require,exports,module)=>{
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
Magix.applyStyle("__mx-dragselect___test___index_",".__mx-dragselect___test___index_-hor {\n  width: 500px;\n  cursor: default;\n}\n.__mx-dragselect___test___index_-hor li {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  float: left;\n  line-height: 100px;\n  background: #F8F6F6;\n  border: 1px solid #fff;\n  margin: 10px;\n}\n.__mx-dragselect___test___index_-hor li[select] {\n  background: #ccc;\n}\n.__mx-dragselect___test___index_-hor .__mx-dragselect___test___index_-selected {\n  border: solid 1px #eb5685;\n  background: #813742;\n  opacity: .5;\n  color: #fff;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragselect</h2><h3>默认示例</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragselect/index\" class=\"__mx-dragselect___test___index_-hor __mx-style_index_-fl\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    'show&lt;change&gt;'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid('mx_');\n        if (e.action == 'add') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == 'remove') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    'begin&lt;dragbegin&gt;'() {\n        this.$temp = {};\n    },\n    'end&lt;dragfinish&gt;'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 class=\"__mx-style_index_-mt30\">部分不能选择</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D\" class=\"__mx-dragselect___test___index_-hor __mx-style_index_-fl\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\" test=\"@$hor\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select=\"false\">123</li><li select=\"false\">456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\" view-selector=\"li[select!=false]\"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select=\"false\"&gt;123&lt;/li&gt;\n        &lt;li select=\"false\"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>","subs":[],"file":"mx-dragselect/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
        me.$selected = {};
    },
    'show<change,click>'(e) {
        let node = e.node;
        let me = this;
        if (!node.id)
            node.id = Magix.guid('mx_');
        if (e.action == 'add') {
            if (me.$selected[node.id]) {
                $(node).removeClass('__mx-dragselect___test___index_-selected');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
            else {
                $(node).addClass('__mx-dragselect___test___index_-selected');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
        }
        else if (e.action == 'remove') {
            if (me.$temp[node.id]) {
                $(node).addClass('__mx-dragselect___test___index_-selected');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
            else {
                $(node).removeClass('__mx-dragselect___test___index_-selected');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
        }
        console.log(me.$selected);
    },
    'begin<dragbegin>'() {
        console.log('begin');
        this.$temp = {};
    },
    'end<dragfinish>'() {
        delete this.$temp;
    }
});

});