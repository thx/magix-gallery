/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/full",["magix","mx-form/index","mx-form/validator"],(require,exports,module)=>{
/*Magix,Form,Validator*/

var Magix = require("magix");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} ; var $g = '', $_temp, $p = '', readonly = $$.readonly, name = $$.name; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if !readonly';
    ;
    $expr = '<%if (!readonly) {%>';
    if (!readonly) {
        ;
        $p += '<form mxv mxa="_zs_galleryay:_" class="grid mb16"><div mxv mxa="_zs_galleryay:a" class="clearfix" style="padding: 16px 24px;"><span mxs="_zs_galleryay:_" class="color-9 mr10">必填项：</span><input mxe="' + $viewId + '_0" mxc="[';
        $line = 6;
        $art = ':name{required:true}';
        ;
        $p += '{p:\'name\',f:{required:true}}]" class="input" placeholder="必填项" value="';
        $line = 6;
        $art = ':name{required:true}';
        ;
        $p += ($expr = '<%=name%>', $e(name)) + '"/></div></form>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_zs_galleryay:b" class="clearfix grid mb16" style="padding: 16px 24px;"><div mxs="_zs_galleryay:a" class="mb10">浮层HTML Code：</div>';
    $line = 13;
    $art = 'if readonly';
    ;
    $expr = '<%if (readonly) {%>';
    if (readonly) {
        ;
        $p += '<pre mxs="_zs_galleryay:b" class="tip-content">\n&lt;mx-grid.body class="grid"&gt;\n    // something\n&lt;/mx-grid.body&gt;\n    </pre>';
        $line = 19;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<pre mxs="_zs_galleryay:c" class="tip-content">\n&lt;form class="grid"&gt;\n    &lt;mx-grid.body&gt;\n        &lt;span class="color-9 mr10"&gt;必填项：&lt;/span&gt;\n        &lt;input class="input" placeholder="必填项" \n            value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n    &lt;/mx-grid.body&gt;\n&lt;/form&gt;\n    </pre>';
        $line = 29;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxs="_zs_galleryay:d" class="clearfix grid" style="padding: 16px 24px;"><div class="mb10">浮层JS Code：</div><pre class="tip-content">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let that = this;\n        let ok = that.isValid();\n        let name = \'\';\n        if(ok)&#123;\n            name = that.updater.get(\'name\');\n        &#125;\n        return new Promise((resolve) =&gt; &#123;\n            setTimeout(() =&gt; &#123;\n                resolve(&#123;\n                    ok,\n                    data: &#123;\n                        name\n                    &#125;,\n                    msg: \'请按照要求填写完信息再提交\'\n                &#125;)\n            &#125;, 1000)\n        &#125;)\n    &#125;\n&#125;, &#123;\n    dialogOptions: &#123;\n        width: 1000\n    &#125;\n&#125;);\n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/full.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    init: function (extra) {
        this.updater.set({
            readonly: extra.readonly
        });
    },
    render: function () {
        this.updater.digest();
    },
    check: function () {
        var that = this;
        var ok = that.isValid();
        var name = '';
        if (ok) {
            name = that.updater.get('name');
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({
                    ok: ok,
                    msg: '请按照要求填写完信息再提交',
                    data: {
                        name: name
                    }
                });
            }, 1000);
        });
    }
}, {
    dialogOptions: {
        width: 1000
    }
});

});