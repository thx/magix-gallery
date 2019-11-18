/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/white",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var Router = Magix.Router;
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-header_examples_index_","._zs_gallery_mx-header_examples_index_-content {\n  height: 1200px;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-header_examples_index_-content ._zs_gallery_mx-header_examples_index_-inner {\n  width: 1000px;\n  padding-top: 100px;\n  margin: auto;\n}\n._zs_gallery_mx-header_examples_index_-wrapper {\n  height: 400px;\n  overflow-y: auto;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-header_examples_index_-wrapper ._zs_gallery_mx-header_examples_index_-inner {\n  height: 800px;\n  padding-top: 100px;\n  text-align: center;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_examples_index_-cut {\n  margin-left: 15px;\n  border: 1px solid var(--color-border);\n}\n");
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
} ; var $g = '', $_temp, $p = '', navs = $$.navs, cur = $$.cur, login = $$.login, user = $$.user, rightView = $$.rightView, rightCeilingShow = $$.rightCeilingShow, loginView = $$.loginView, logoutUrl = $$.logoutUrl, links = $$.links, ceiling = $$.ceiling, map = $$.map; var $expr, $art, $line; try {
    $p += '<div mxv="navs" mx-navchange="' + $viewId + 'change()" mx-view="mx-header/index?dark=false&navs=';
    $line = 3;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&cur=';
    $line = 4;
    $art = '=cur';
    ;
    $p += ($expr = '<%!$eu(cur)%>', $eu(cur)) + '&login=';
    $line = 5;
    $art = '=login';
    ;
    $p += ($expr = '<%!$eu(login)%>', $eu(login)) + '&user=';
    $line = 6;
    $art = '=user';
    ;
    $p += ($expr = '<%!$eu(user)%>', $eu(user)) + '&rightView=';
    $line = 7;
    $art = '=rightView';
    ;
    $p += ($expr = '<%!$eu(rightView)%>', $eu(rightView)) + '&rightCeilingShow=';
    $line = 8;
    $art = '=rightCeilingShow';
    ;
    $p += ($expr = '<%!$eu(rightCeilingShow)%>', $eu(rightCeilingShow)) + '&loginView=';
    $line = 9;
    $art = '=loginView';
    ;
    $p += ($expr = '<%!$eu(loginView)%>', $eu(loginView)) + '&logoutUrl=';
    $line = 10;
    $art = '=logoutUrl';
    ;
    $p += ($expr = '<%!$eu(logoutUrl)%>', $eu(logoutUrl)) + '&links=';
    $line = 11;
    $art = '=links';
    ;
    $p += ($expr = '<%!$eu(links)%>', $eu(links)) + '&ceiling=';
    $line = 12;
    $art = '=ceiling';
    ;
    $p += ($expr = '<%!$eu(ceiling)%>', $eu(ceiling)) + '"></div><div mxa="_zs_galleryc7:_" class="_zs_gallery_mx-header_examples_index_-content"><div mxa="_zs_galleryc7:a" class="_zs_gallery_mx-header_examples_index_-inner"><div mxa="_zs_galleryc7:b" class="fontsize-20 mb40">当前导航：';
    $line = 16;
    $art = '=map[cur]';
    ;
    $p += ($expr = '<%=map[cur]%>', $e(map[cur])) + '（';
    $line = 16;
    $art = '=cur';
    ;
    $p += ($expr = '<%=cur%>', $e(cur)) + '）</div><pre>\n&lt;mx-header \n    dark="false"\n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    right-view="';
    $line = 22;
    $art = '=rightView';
    ;
    $p += ($expr = '<%=rightView%>', $e(rightView)) + '"\n    right-ceiling-show="';
    $line = 23;
    $art = '=rightCeilingShow';
    ;
    $p += ($expr = '<%=rightCeilingShow%>', $e(rightCeilingShow)) + '"\n    links="';
    $line = 24;
    $art = '=links';
    ;
    $p += ($expr = '<%=links%>', $e(links)) + '"\n    ceiling="';
    $line = 25;
    $art = '=ceiling';
    ;
    $p += ($expr = '<%=ceiling%>', $e(ceiling)) + '"\n    login="';
    $line = 26;
    $art = '=login';
    ;
    $p += ($expr = '<%=login%>', $e(login)) + '"\n    user="';
    $line = 27;
    $art = '=user';
    ;
    $p += ($expr = '<%=user%>', $e(user)) + '"\n    login-view="';
    $line = 28;
    $art = '=loginView';
    ;
    $p += ($expr = '<%=loginView%>', $e(loginView)) + '"\n    logout-url="';
    $line = 29;
    $art = '=logoutUrl';
    ;
    $p += ($expr = '<%=logoutUrl%>', $e(logoutUrl)) + '"\n    mx-navchange="change()"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/examples/white.html';
    throw msg;
} return $p; },
    render: function () {
        var navs = [{
                value: 1,
                text: '本页打开1'
            }, {
                value: 2,
                text: '支持二级',
                subs: [{
                        value: 21,
                        text: '本页打开'
                    }, {
                        value: 22,
                        text: '外链打开',
                        link: 'https://www.taobao.com/' //直接外链打开
                    }]
            }, {
                value: 3,
                text: '本页打开2',
                tag: 'NEW'
            }, {
                value: 4,
                text: '外链打开',
                link: 'https://www.taobao.com/'
            }];
        var map = {};
        navs.forEach(function (nav) {
            map[nav.value] = nav.text;
            var subs = nav.subs || [];
            subs.forEach(function (sub) {
                map[sub.value] = nav.text + "_" + sub.text;
            });
        });
        var locParams = Router.parse().params;
        this.updater.digest({
            navs: navs,
            map: map,
            cur: locParams.cur || navs[0].value,
            login: locParams.login || '',
            user: locParams.user || '',
            loginView: locParams.loginView || '',
            logoutUrl: locParams.logoutUrl || '',
            rightView: locParams.rightView || '',
            links: locParams.links || true,
            ceiling: locParams.ceiling || true,
            rightCeilingShow: locParams.rightCeilingShow || false
        });
        this.observeLocation(['cur']);
    },
    'change<navchange>': function (event) {
        // event.nav {value: , text: } 当前导航
        Router.to({
            cur: event.nav.value
        });
    }
});

});