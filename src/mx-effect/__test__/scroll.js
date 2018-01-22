/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/scroll",["magix","../scroll","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../scroll");
require("__test__/hl");
/*
ver:2.0.1
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect scroll</h2><div class=\"_B _ai\"><div mx-view=\"mx-effect/scroll?value=<%@$$.value%>\"></div><button type=\"button\" mx-click=\"\u001f\u001eupdate()\" class=\"_an _ao _v\">update</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;mx-effect.scroll value=\"&lt;%@value%>\" /&gt;\n&lt;button type=\"button\" mx-click=\"update()\" class=\"btn btn-brand ml20\"&gt;update&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@scroll.html',\n    render() {\n        this.updater.digest({\n            value: 100\n        });\n        setInterval(() => {\n            let v = (Math.random() * 20) + this.updater.get('value');\n            this.updater.digest({\n                value: v\n            });\n        }, 1000);\n    },\n    'update&lt;click&gt;'() {\n        this.updater.digest({\n            value: this.updater.get('value') - 20\n        });\n    }\n}); \n    </pre></div>"},
    render: function () {
        var _this = this;
        this.updater.digest({
            value: 100
        });
        setInterval(this.wrapAsync(function () {
            var v = (Math.random() * 20) + _this.updater.get('value');
            _this.updater.digest({
                value: v
            });
        }), 1000);
    },
    'update<click>': function () {
        this.updater.digest({
            value: this.updater.get('value') - 20
        });
    }
});

});