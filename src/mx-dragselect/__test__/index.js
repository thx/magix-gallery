/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragselect/__test__/index",["magix","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_b","._aJ{width:500px;cursor:default}._aJ li{width:100px;height:100px;text-align:center;float:left;line-height:100px;background:#f8f6f6;border:1px solid #fff;margin:10px}._aJ li[select]{background:#ccc}._aJ ._aK{border:1px solid #eb5685;background:#813742;opacity:.5;color:#fff}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragselect</h2><h3>默认示例</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragselect/index\" class=\"_aJ _aa\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    'show&lt;change&gt;'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid('mx_');\n        if (e.action == 'add') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == 'remove') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    'begin&lt;dragbegin&gt;'() {\n        this.$temp = {};\n    },\n    'end&lt;dragfinish&gt;'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 class=\"_f\">部分不能选择</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D\" class=\"_aJ _aa\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\" test=\"@$hor\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select=\"false\">123</li><li select=\"false\">456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\" view-selector=\"li[select!=false]\"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select=\"false\"&gt;123&lt;/li&gt;\n        &lt;li select=\"false\"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
        me.$selected = {};
    },
    'show<change,click>': function (e) {
        var node = e.node;
        var me = this;
        if (!node.id)
            node.id = Magix.guid('mx_');
        if (e.action == 'add') {
            if (me.$selected[node.id]) {
                $(node).removeClass('_aK');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
            else {
                $(node).addClass('_aK');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
        }
        else if (e.action == 'remove') {
            if (me.$temp[node.id]) {
                $(node).addClass('_aK');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
            else {
                $(node).removeClass('_aK');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
        }
        console.log(me.$selected);
    },
    'begin<dragbegin>': function () {
        console.log('begin');
        this.$temp = {};
    },
    'end<dragfinish>': function () {
        delete this.$temp;
    }
});

});