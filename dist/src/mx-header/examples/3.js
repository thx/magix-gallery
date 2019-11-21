/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-header_examples_index_","._zs_gallery_mx-header_examples_index_-content {\n  height: 1200px;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-header_examples_index_-content ._zs_gallery_mx-header_examples_index_-inner {\n  width: 1000px;\n  padding-top: 100px;\n  margin: auto;\n}\n._zs_gallery_mx-header_examples_index_-wrapper {\n  height: 400px;\n  overflow-y: auto;\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-header_examples_index_-wrapper ._zs_gallery_mx-header_examples_index_-inner {\n  height: 800px;\n  padding-top: 100px;\n  text-align: center;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_examples_index_-cut {\n  margin-left: 15px;\n  border: 1px solid var(--color-border);\n}\n");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', loginView = $$.loginView, viewId = $$.viewId, navs = $$.navs, cur = $$.cur, rightView = $$.rightView, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc5:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryc5:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxv mxa="_zs_galleryc5:b" class="pt10 pb10"><div mxs="_zs_galleryc5:_" class="lh28"><span class="color-9">以下示例：</span>全屏使用header，支持二级菜单，支持外链打开</div><div mxs="_zs_galleryc5:a" class="lh28">1. 包含顶部其他产品线信息（links=true），滚动吸顶（ceiling=true），显示用户信息（login=true）</div><div mxv mxa="_zs_galleryc5:c" class="pl15"><div mxs="_zs_galleryc5:b" class="lh28">login=true时必须配置登录页面（login-view=\'@./login\'），登出接口（logout-url=\'/api/member/logout.action\'），通过user有无来判断是否登录</div><div mxa="_zs_galleryc5:d" class="lh28 mb10">a. 已登录（user=\'测试账号\'），<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=true&user=测试账号&logoutUrl=/api/member/logout.action&loginView=';
    $line = 8;
    $art = '=loginView';
    ;
    $p += ($expr = '<%!$eu(loginView)%>', $eu(loginView)) + '" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test1" class="_zs_gallery_mx-header_examples_index_-cut mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs=';
    $line = 12;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&links=true&ceiling=true&login=true&user=%E6%B5%8B%E8%AF%95%E8%B4%A6%E5%8F%B7&loginView=examples%2Fpro%2Flogin-view&logoutUrl=%2Fapi%2Fmember%2Flogout.action&wrapper=';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test1"></div></div><div mxa="_zs_galleryc5:e" class="lh28 mb10">b. 未登录（user为空），<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=true&logoutUrl=/api/member/logout.action&loginView=';
    $line = 21;
    $art = '=loginView';
    ;
    $p += ($expr = '<%!$eu(loginView)%>', $eu(loginView)) + '" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test2" class="_zs_gallery_mx-header_examples_index_-cut mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs=';
    $line = 25;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&links=true&ceiling=true&login=true&loginView=examples%2Fpro%2Flogin-view&logoutUrl=%2Fapi%2Fmember%2Flogout.action&wrapper=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test2"></div></div></div><div mxs="_zs_galleryc5:c" class="lh28 mb10">2. 不包含顶部其他产品线信息（links=false），滚动不吸顶（ceiling=false），<a rel="noopener noreferrer" href="#!/header/white?links=false&ceiling=false" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test3" class="_zs_gallery_mx-header_examples_index_-cut mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs=';
    $line = 38;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&cur=';
    $line = 39;
    $art = '=cur';
    ;
    $p += ($expr = '<%!$eu(cur)%>', $eu(cur)) + '&links=false&ceiling=false&wrapper=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test3"></div></div><div mxa="_zs_galleryc5:f" class="lh28 mb10">3. 包含顶部其他产品线信息（links=true），滚动吸顶（ceiling=true），不显示用户信息（login=false），右侧自定义view一直显示（right-view=\'@./right\'），<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=false&rightView=';
    $line = 44;
    $art = '=rightView';
    ;
    $p += ($expr = '<%!$eu(rightView)%>', $eu(rightView)) + '" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test4" class="_zs_gallery_mx-header_examples_index_-cut mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs=';
    $line = 48;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&cur=';
    $line = 49;
    $art = '=cur';
    ;
    $p += ($expr = '<%!$eu(cur)%>', $eu(cur)) + '&rightView=mx-header%2Fexamples%2Fright&links=true&ceiling=true&login=false&wrapper=';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test4"></div></div><div mxa="_zs_galleryc5:g" class="lh28 mb10">4. 包含顶部其他产品线信息（links=true），滚动吸顶（ceiling=true），不显示用户信息（login=false），右侧自定义view（right-view=\'@./right\'），右侧自定义view默认不显示自定时显示（right-ceiling-show=true）<a rel="noopener noreferrer" href="#!/header/white?links=true&ceiling=true&login=false&rightView=';
    $line = 56;
    $art = '=rightView';
    ;
    $p += ($expr = '<%!$eu(rightView)%>', $eu(rightView)) + '&rightCeilingShow=true" class="link-brand" target="_blank">新页面查看示例</a></div><div mxv id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_test4" class="_zs_gallery_mx-header_examples_index_-cut mb40"><div mxv="navs" mx-view="mx-header/index?dark=false&navs=';
    $line = 60;
    $art = '@navs';
    ;
    $p += ($expr = '<%@navs%>', $i($$ref, navs)) + '&cur=';
    $line = 61;
    $art = '=cur';
    ;
    $p += ($expr = '<%!$eu(cur)%>', $eu(cur)) + '&rightView=mx-header%2Fexamples%2Fright&rightCeilingShow=true&links=true&ceiling=true&login=false&wrapper=';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_test4"></div></div></div></div><div mxa="_zs_galleryc5:h" class="clearfix"><div mxa="_zs_galleryc5:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryc5:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 74;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc5:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 76;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc5:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 79;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-header \n    dark="false"\n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    login="&#123;&#123;=login&#125;&#125;"\n    user="&#123;&#123;=user&#125;&#125;"\n    right-view="&#123;&#123;=rightView&#125;&#125;"\n    right-ceiling-show="&#123;&#123;=rightCeilingShow&#125;&#125;"\n    login-view="&#123;&#123;=loginView&#125;&#125;"\n    logout-url="&#123;&#123;=logoutUrl&#125;&#125;"\n    links="&#123;&#123;=links&#125;&#125;"\n    ceiling="&#123;&#123;=ceiling&#125;&#125;"\n    mx-navchange="change()"/&gt;\n            </pre></div><div mxa="_zs_galleryc5:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryc5:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 97;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryc5:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 99;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryc5:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 102;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nconst Magix = require(\'magix\');\nconst Router = Magix.Router;\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@white.html\',\n    render() &#123;\n        let navs = [&#123;\n            value: 1,\n            text: \'本页打开1\'\n        &#125;, &#123;\n            value: 2,\n            text: \'支持二级\',\n            subs: [&#123;\n                value: 21,\n                text: \'本页打开\'\n            &#125;, &#123;\n                value: 22,\n                text: \'外链打开\',\n                link: \'https://www.taobao.com/\' //直接外链打开\n            &#125;]\n        &#125;, &#123;\n            value: 3,\n            text: \'本页打开2\',\n            tag: \'NEW\'\n        &#125;, &#123;\n            value: 4,\n            text: \'外链打开\',\n            link: \'https://www.taobao.com/\'\n        &#125;]\n\n        let map = &#123;&#125;;\n        navs.forEach(nav =&gt; &#123;\n            map[nav.value] = nav.text;\n            let subs = nav.subs || [];\n            subs.forEach(sub =&gt; &#123;\n                map[sub.value] = `$&#123;nav.text&#125;_$&#123;sub.text&#125;`;\n            &#125;)\n        &#125;)\n\n        let locParams = Router.parse().params;\n        this.updater.digest(&#123;\n            navs,\n            map,\n            cur: locParams.cur || navs[0].value,\n            login: locParams.login || \'\',\n            user: locParams.user || \'\',\n            loginView: locParams.loginView || \'\',\n            logoutUrl: locParams.logoutUrl || \'\',\n            rightView: locParams.rightView || \'\',\n            rightCeilingShow: locParams.rightCeilingShow || false,\n            links: locParams.links || true,\n            ceiling: locParams.ceiling || true\n        &#125;);\n\n        this.observeLocation([\'cur\']);\n    &#125;,\n    \'change&lt;navchange&gt;\'(event) &#123;\n        // event.nav &#123;value: , text: &#125; 当前导航\n        Router.to(&#123;\n            cur: event.nav.value\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            loginView: 'examples/pro/login-view',
            rightView: 'mx-header/examples/right',
            navs: [{
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
                }]
        });
    }
});

});