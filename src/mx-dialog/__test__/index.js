/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/__test__/index',["magix","mx-dialog/index"],function(require,exports,module){
/*Magix,Dialog*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["inDialog"],"path":"#\u001f","tmpl":"<%if($$.inDialog){%><div class=\"aC\">加载view测试</div><div class=\"aD\"><%}%><h2>mx-dialog</h2><h3>内置alert与confirm</h3><div class=\"B ag\"><button type=\"button\" class=\"al am j\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"al am j\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div><h3 class=\"f\">加载普通view</h3><div class=\"B ag\"><button type=\"button\" class=\"al am j\" mx-click=\"\u001f\u001eview()\">view</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"view()\"&gt;view&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'view&lt;click&gt;' () {\n        this.mxDialog('path/to/view', {\n            width: 900\n        });\n    }\n});</pre></div><%if($$.inDialog){%></div><div class=\"aE\">dialog footer</div><%}%>","s":"1\u001d"}]},
    mixins: [Dialog],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'alert<click>': function () {
        this.alert('xxx', function () {
            console.log('确定被点击');
        });
    },
    'confirm<click>': function () {
        this.confirm('xxx', function () {
            console.log('确定被点击');
        }, function () {
            console.log('取消被点击');
        });
    },
    'view<click>': function () {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 900
        });
    }
});

});