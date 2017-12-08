/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dialog/__test__/alert',["magix","mx-dialog/index"],(require,exports,module)=>{
/*Magix,Dialog*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dialog</h2><h3>alert与confirm</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div>","subs":[],"file":"mx-dialog/__test__/alert.html"},
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>'() {
        this.alert('xxx', () => {
            console.log('确定被点击');
        });
    },
    'confirm<click>'() {
        this.confirm('xxx', () => {
            console.log('确定被点击');
        }, () => {
            console.log('取消被点击');
        });
    },
});

});