/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-loading/__test__/mask',["magix","../mask"],function(require,exports,module){
/*Magix,MLoading*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var MLoading = require('../mask');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-loading</h2><h3>mask mixin</h3><div class=\"B ag\"><p>loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p>通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p>为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p mx-guid=\"g0\u001f\" class=\"b n\">1\u001d</p><button mx-click=\"\u001f\u001erefresh()\" class=\"al am b\">点此按钮2s后重新渲染当前view</button></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;p&gt;\n    loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果\n&lt;/p&gt;\n&lt;p&gt;\n    通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。\n&lt;/p&gt;\n&lt;p&gt;\n    为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。\n&lt;/p&gt;\n&lt;p class=\"mt10 mb10\"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click=\"refresh()\" class=\"btn btn-brand mt10\"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nlet MLoading = require('app/gallery/loading/mask');\nmodule.exports = Magix.View.extend({\n    tmpl: '@mask.html',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    'refresh&lt;click&gt;' () {\n        this.render();\n    }\n});</pre></div>","subs":[{"keys":["count"],"path":"p[mx-guid=\"g0\u001f\"]","tmpl":"第<%=$$.count%>次渲染页面","s":"1\u001d"}]},
    mixins: [MLoading],
    init: function () {
        this.count = 1;
    },
    render: function () {
        var _this = this;
        var me = this;
        setTimeout(me.wrapAsync(function () {
            me.updater.digest({
                count: _this.count++
            });
        }), 2e3);
    },
    'refresh<click>': function () {
        this.render();
    }
});

});