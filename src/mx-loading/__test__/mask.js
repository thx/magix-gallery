/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-loading/__test__/mask',["magix","../mask"],(require,exports,module)=>{
/*Magix,MLoading*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let MLoading = require('../mask');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-loading</h2><h3>mask mixin</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><p>loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p>通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p>为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p mx-guid=\"g0\u001f\" class=\"__mx-style_index_-mt10 __mx-style_index_-mb10\">1\u001d</p><button mx-click=\"\u001f\u001erefresh()\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mt10\">点此按钮2s后重新渲染当前view</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;p class=\"mt10 mb10\"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click=\"refresh()\" class=\"btn btn-brand mt10\"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet MLoading = require('app/gallery/loading/mask');\nmodule.exports = Magix.View.extend({\n    tmpl: '@mask.html',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    'refresh&lt;click&gt;' () {\n        this.render();\n    }\n});</pre></div>","subs":[{"keys":["count"],"path":"p[mx-guid=\"g0\u001f\"]","tmpl":"第<%=$$.count%>次渲染页面","s":"1\u001d"}],"file":"mx-loading/__test__/mask.html"},
    mixins: [MLoading],
    init() {
        this.count = 1;
    },
    render() {
        let me = this;
        setTimeout(me.wrapAsync(() => {
            me.updater.digest({
                count: this.count++
            });
        }), 2e3);
    },
    'refresh<click>'() {
        this.render();
    }
});

});