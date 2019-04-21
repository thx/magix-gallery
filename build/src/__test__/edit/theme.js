/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/edit/theme",["magix","$","mx-color/picker"],(require,exports,module)=>{
/*Magix,$*/
require("mx-color/picker");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___edit_theme_","._zs_gallery___test___edit_theme_-dot1 {\n  background-color: #4d7fff;\n}\n._zs_gallery___test___edit_theme_-dot2 {\n  background-color: #385ACC;\n  background-image: linear-gradient(to right, #385ACC, #5C55DD);\n}\n._zs_gallery___test___edit_theme_-dot3 {\n  background-color: #ff831b;\n}\n._zs_gallery___test___edit_theme_-dot {\n  display: inline-block;\n  width: var(--input-height);\n  height: var(--input-height);\n  border-radius: 50%;\n  vertical-align: middle;\n}\n._zs_gallery___test___edit_theme_-cont {\n  padding: 16px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', color = $$.color; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryf:_" class="_zs_gallery___test___edit_theme_-cont clearfix"><div mxs="_zs_galleryf:_" class="fl w100"><div class="text-center"><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot _zs_gallery___test___edit_theme_-dot1" mx-click="' + $viewId + 'changeTheme({id:\'zuanshi\'})"></a></div><div class="text-center mt10">智钻</div></div><div mxs="_zs_galleryf:a" class="fl w100"><div class="text-center"><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot _zs_gallery___test___edit_theme_-dot2" mx-click="' + $viewId + 'changeTheme({id:\'feeds\'})"></a></div><div class="text-center mt10">超级推荐</div></div><div mxs="_zs_galleryf:b" class="fl w100 mt30"><div class="text-center"><a href="javascript:;" class="_zs_gallery___test___edit_theme_-dot _zs_gallery___test___edit_theme_-dot3" mx-click="' + $viewId + 'changeTheme({id:\'subway\'})"></a></div><div class="text-center mt10">直通车</div></div><div mxa="_zs_galleryf:a" class="fl w100 mt30"><div mxa="_zs_galleryf:b" class="text-center"><div mx-change="' + $viewId + 'changeColor()" mx-view="mx-color/picker?dot=true&color=';
    $line = 24;
    $art = '=color';
    ;
    $p += ($expr = '<%!$eu(color)%>', $eu(color)) + '"></div></div><div mxs="_zs_galleryf:c" class="text-center mt10">自定义</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/edit/theme.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            color: '#36a851'
        });
    },
    'changeTheme<click>': function (event) {
        var id = event.params.id;
        var map = {
            zuanshi: {
                '--color-brand': '#4d7fff',
                '--color-brand-hover': '#4470e0',
                '--color-brand-vs': '#14c9ce',
                '--color-brand-light': '#dfe8ff',
                '--color-brand-opacity': '#edf2ff',
                '--btn-brand': '#4d7fff',
                '--btn-brand-gradient': '#4d7fff',
                '--btn-brand-hover': '#4470e0',
                '--btn-brand-gradient-hover': '#4470e0',
                '--btn-border': '#4d7fff',
                '--btn-border-hover': '#4d7fff',
                '--btn-bg': '#edf2ff',
                '--btn-bg-hover': '#dfe8ff',
                '--app-brand': '#4d7fff',
                '--app-brand-gradient': '#4d7fff'
            },
            subway: {
                '--color-brand': '#ff831b',
                '--color-brand-hover': '#f07a19',
                '--color-brand-vs': '#91b514',
                '--color-brand-light': '#ffe6d6',
                '--color-brand-opacity': '#fff3e9',
                '--btn-brand': '#ff831b',
                '--btn-brand-gradient': '#ff831b',
                '--btn-brand-hover': '#f07a19',
                '--btn-brand-gradient-hover': '#f07a19',
                '--btn-border': '#ff831b',
                '--btn-border-hover': '#ff831b',
                '--btn-bg': '#fff3e9',
                '--btn-bg-hover': '#ffe6d6',
                '--app-brand': '#ff831b',
                '--app-brand-gradient': '#ff831b'
            },
            feeds: {
                '--color-brand': '#385ACC',
                '--color-brand-hover': '#2e4aa7',
                '--color-brand-vs': '#f7664d',
                '--color-brand-light': '#d7def6',
                '--color-brand-opacity': '#eff2fb',
                '--border-highlight': '#9095A1',
                '--border-highlight-hover': '#677088',
                '--btn-brand': '#385ACC',
                '--btn-brand-gradient': '#5C55DD',
                '--btn-brand-hover': '#28449F',
                '--btn-brand-gradient-hover': '#4741AD',
                '--btn-text': '#333',
                '--btn-text-hover': '#333',
                '--btn-border': '#637ba5',
                '--btn-border-hover': '#637ba5',
                '--btn-bg': '#f3f5fc',
                '--btn-bg-hover': '#e7eaf4',
                '--color-red': '#d52112',
                '--color-green': '#30ab66',
                '--color-bg': '#f5f5f5',
                '--app-brand': '#385ACC',
                '--app-brand-gradient': '#5C55DD'
            }
        };
        var colors = map[id];
        for (var key in colors) {
            document.body.style.setProperty(key, colors[key]);
        }
    },
    getCookie: function (name) {
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        var arr = document.cookie.match(reg);
        if (arr && arr.length) {
            return unescape(arr[2]);
        }
        else {
            return null;
        }
    },
    setCookie: function (name, value, time) {
        //这是有设定过期时间的使用示例：
        //s20是代表20秒
        //h是指小时，如12小时则是：h12
        //d是天数，30天则：d30
        var getsec = function (str) {
            var sec;
            var str1 = str.substring(1, str.length) * 1;
            var str2 = str.substring(0, 1);
            switch (str2) {
                case 's':
                    sec = str1 * 1000;
                    break;
                case 'h':
                    sec = str1 * 60 * 60 * 1000;
                    break;
                case 'd':
                    sec = str1 * 24 * 60 * 60 * 1000;
                    break;
            }
            return sec;
        };
        // time过期时间
        var strsec = getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    }
});

});