/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/scroll",["magix","../scroll","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../scroll");
require("__test__/hl");
/*
ver:2.0.6
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', value = $$.value; var $expr, $art, $line; try {
    $p += '<h2 mxs="_r:_">mx-effect scroll</h2><div mxv mxa="_r:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="value" mx-view="mx-effect/scroll?value=' + ($expr = '<%@value%>', $i($$ref, value)) + '"></div><button mxs="_r:a" type="button" mx-click="' + $viewId + 'update()" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml20">update</button></div><div mxs="_r:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;mx-effect.scroll value="&lt;%@value%>" /&gt;\n&lt;button type="button" mx-click="update()" class="btn btn-brand ml20"&gt;update&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@scroll.html\',\n    render() {\n        this.updater.digest({\n            value: 100\n        });\n        setInterval(() => {\n            let v = (Math.random() * 20) + this.updater.get(\'value\');\n            this.updater.digest({\n                value: v\n            });\n        }, 1000);\n    },\n    \'update&lt;click&gt;\'() {\n        this.updater.digest({\n            value: this.updater.get(\'value\') - 20\n        });\n    }\n}); \n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/__test__/scroll.html';
    throw msg;
} return $p; },
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