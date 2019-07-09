/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/cross",["magix","$","../subs","mx-title/second"],(require,exports,module)=>{
/*Magix,$*/
require("../subs");
require("mx-title/second");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_cross_","._zs_gallery___test___pro_cross_-tt {\n  font-size: 14px;\n  line-height: 32px;\n}\n._zs_gallery___test___pro_cross_-line {\n  position: relative;\n  padding-left: 20px;\n  line-height: 32px;\n}\n._zs_gallery___test___pro_cross_-line ._zs_gallery___test___pro_cross_-num {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n}\n._zs_gallery___test___pro_cross_-iframe {\n  box-shadow: -2px 0 4px rgba(51, 51, 51, 0.08), 0 -2px 4px rgba(51, 51, 51, 0.08), 0 2px 4px rgba(51, 51, 51, 0.08), 2px 0 4px rgba(51, 51, 51, 0.08);\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryp:_" class="pr pr140"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'需求背景\',\n        key: viewId + \'_bg\'\n    }, {\n        name: \'关于实现\',\n        key: viewId + \'_implement\',\n        subs: [{\n            name: \'几个重点\',\n            key: viewId + \'_points\'\n        }, {\n            name: \'具体操作步骤\',\n            key: viewId + \'_steps\'\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'需求背景\',            key: viewId + \'_bg\'        }, {            name: \'关于实现\',            key: viewId + \'_implement\',            subs: [{                    name: \'几个重点\',                    key: viewId + \'_points\'                }, {                    name: \'具体操作步骤\',                    key: viewId + \'_steps\'                }]        }]%>', $i($$ref, [{ name: '需求背景', key: viewId + '_bg' }, { name: '关于实现', key: viewId + '_implement', subs: [{ name: '几个重点', key: viewId + '_points' }, { name: '具体操作步骤', key: viewId + '_steps' }] }])) + '"></div><div id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_bg" mx-view="mx-title/second?content=%E9%9C%80%E6%B1%82%E8%83%8C%E6%99%AF"></div><div mxs="_zs_galleryp:_" class="mb40"><div class="_zs_gallery___test___pro_cross_-line"><span class="_zs_gallery___test___pro_cross_-num">1.</span>为了提升平台与客户的粘性，增强运营策略转化率，提升营销投放效率，阿里妈妈打造全新营销顾问平台mama club，为客户提供批量运营下的专属顾问，一站式解决投放过程中数据、资源、策略、代理、培训等问题。</div><div class="_zs_gallery___test___pro_cross_-line"><span class="_zs_gallery___test___pro_cross_-num">2.</span>mama club 需要作为通用模块嵌入到阿里妈妈的四大广告投放系统直通车、钻展、超级推荐和品销宝中，不同平台中需要<span class="color-brand">以该平台品牌色展示</span>。</div><div class="pl20 pt20"><img src="https://img.alicdn.com/tfs/TB1dXhCXbH1gK0jSZFwXXc7aXXa-855-628.png"/></div></div><div id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_implement" mx-view="mx-title/second?content=%E5%85%B3%E4%BA%8E%E5%AE%9E%E7%8E%B0&tip=%E4%BB%A5%E4%B8%8B%E4%BB%A5%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B%E8%AF%B4%E6%98%8E%20Magix%20%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E8%B7%A8%E9%A1%B9%E7%9B%AE%E5%85%AC%E7%94%A8%20view"></div><div class="_zs_gallery___test___pro_cross_-tt" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_points">一、几个重点</div><div mxs="_zs_galleryp:a" class="mb40"><div class="_zs_gallery___test___pro_cross_-line"><span class="_zs_gallery___test___pro_cross_-num">1.</span>使用&nbsp;Magix&nbsp;提供的&nbsp;vframe&nbsp;功能，允许项目间类似&nbsp;iframe&nbsp;那样引用对方的&nbsp;view。该功能支持把复杂的项目拆分成n个子项目进行维护；</div><div class="_zs_gallery___test___pro_cross_-line"><span class="_zs_gallery___test___pro_cross_-num">2.</span>子项目中的&nbsp;view&nbsp;被渲染在宿主项目时，使用<span class="color-brand">宿主项目</span>里的组件（project/gallery/）以及品牌色；</div><div class="_zs_gallery___test___pro_cross_-line"><span class="_zs_gallery___test___pro_cross_-num">3.</span>宿主项目<span class="color-brand">按需加载</span>子项目&nbsp;view，首次访问到子view页面时才加载子view资源；</div><div class="_zs_gallery___test___pro_cross_-line"><span class="_zs_gallery___test___pro_cross_-num">4.</span>子项目中界面显示所需要的相关颜色，会由&nbsp;/gallery/mx-style/&nbsp;统一提供，自己在&nbsp;view&nbsp;定制的样式请使用<span class="color-brand">&nbsp;css变量&nbsp;</span>进行改造；</div><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">5.</span>关于包名的约定，&nbsp;seajs&nbsp;或&nbsp;requirejs&nbsp;需要配置一个包名来使用某个目录下的js文件，指向不同目录下的包名不能同名。这要求我们在开发新项目时，<span class="color-brand">使用新项目的名称来做为包名</span>，不能再像以前那样使用统一的app名称；</div><pre class="tip-content ml20 mb10">\nseajs.config({\n    paths: {\n        zuanshi: \'/app\', //主项目\n        cross1: \'//g.alicdn.com/mm/cross1/20190705.161857.184/cross1\' //被加载进来的子项目\n    }\n});</pre><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">6.</span>关于目录结构的约定，宿主项目和子项目保持同样的目录结构，详细说明参见<a href="#!/all/pro/init" class="color-brand">10分钟快速上手</a></div><pre class="tip-content ml20 mb10">\n- project\n- src\n    - project\n        - assets\n        - chartpark\n        - dataplus\n        - gallery\n        - gallery-local\n        - services\n        - views\n        prepare.ts\n        view.ts\n        menu.ts\n    - lib\n    boot.ts</pre></div><div class="_zs_gallery___test___pro_cross_-tt" id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_steps">二、具体操作步骤</div><div mxs="_zs_galleryp:b"><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">1.</span>项目A中有通用模块“页面1”和“页面2”</div><div class="pl20 mb10"><iframe sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts" src="https://mo.m.taobao.com/page_201806071452566" class="_zs_gallery___test___pro_cross_-iframe" width="100%" height="660" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div><div class="_zs_gallery___test___pro_cross_-line mb10"><div class="_zs_gallery___test___pro_cross_-num">2.</div><div>跨项目mount的时候，子项目需要使用宿主项目的组件和品牌色；</div><div>如果子模块有单独的样式，请使用&nbsp;css变量&nbsp;（应用宿主项目中的变量定义，组件里mx-style/_group.less；本地覆盖assets/group_override.less）替代&nbsp;less&nbsp;变量；具体示例如下：</div></div><div class="pl20 mb10"><div class="tip-content"><pre class="inline">\n&lt;!-- group_override.less --&gt;\n:root&#123;\n    --color-brand: #4ca26f;\n    --color-brand-vs: #ffe066;\n&#125;\n        \n&lt;!-- 页面1的样式 --&gt;\n.demo&#123;\n    margin-bottom: 20px;\n    padding: 20px;\n    background-color: </pre><pre class="inline color-brand">var(--color-bg);</pre><pre>\n&#125;</pre></div></div><div class="_zs_gallery___test___pro_cross_-line"><div class="_zs_gallery___test___pro_cross_-num">3.</div><div>项目B作为宿主项目需要加载这两个模块</div><div>页面1：直接完整加载</div><div>页面2：其中只需要加载子模块2和子模块3，需要传参到子项目view</div></div><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">4.</span>在宿主项目的&nbsp;boot.ts&nbsp;中加入子项目的包配置</div><div class="pl20 mb10"><div class="tip-content"><pre>seajs.config({\n    paths: {\n        //主项目配置好要加载的子项目的包名</pre><pre class="color-brand">\n        cross1: \'//g.alicdn.com/mm/cross1/20190705.161857.184/cross1\',</pre><pre>\n        [projectName]: src + \'/\' + projectName\n    }\n});\n\nseajs.use([\'magix\'], (Magix) => {\n    Magix.config({\n        //主项目需要配置子项目的接口的host</pre><pre class="color-brand">\n        \'cross1.api.host\': \'//mo.m.taobao.com\',</pre><pre>\n        projectName\n    })\n})</pre></div></div><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">5.</span>模块直接加载或者只需传递一些固定参数的时候，直接在&nbsp;menu.ts&nbsp;中配置路径即可</div><div class="pl20 mb10"><div class="tip-content"><pre>let Menus = [{\n    has: true,\n    name: \'导航菜单\',\n    path: \'/example/path1\',\n    subs: [{\n        name: \'跨项目加载view\',\n        thirds: [{\n            has: true,\n            name: \'页面1\',</pre><pre class="color-brand">\n            viewPath: \'cross1/views/pages\',  //指向子项目的包路径\n            path: \'/example/path1\', //子项目页面路径</pre><pre>\n            icon: \'&#38;&#35;xe64f;\'\n        }, {\n            has: true,\n            name: \'页面2\',</pre><pre class="color-brand">\n            viewPath: \'cross1/views/pages\', //指向子项目的包路径\n            viewData: { //传入子项目页面的viewData\n                filters: [2, 3]\n            },\n            path: \'/example/path2\', //子项目页面路径</pre><pre>\n            icon: \'&#38;&#35;xe64f;\'\n        }]\n    }]\n}]</pre></div></div><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">6.</span>改造入口&nbsp;default&nbsp;，加载&nbsp;view&nbsp;前增加&nbsp;prepare&nbsp;检测，实现按需加载</div><div class="pl20 mb10"><div class="tip-content"><pre>\nmodule.exports = View.extend({\n    tmpl: \'@default.html\',\n    init() {\n        this.observeLocation({\n            path: true\n        });\n    },\n    prepare(info) {\n        if (!info.xsite && !info._processed) {\n            let vpath = info.viewPath;\n            let pkg = vpath.substring(0, vpath.indexOf(\'/\'));\n            let projectName = Magix.config(\'projectName\');\n\n            // 自动检测页面指向的包路径和本项目包路径是否一致\n            // 不一致则为跨项目view，首次进入子view页面加载响应资源\n            if (pkg != projectName) {\n                info.xsite = pkg;\n            }\n            info._processed = true;\n        }\n        if (info.xsite) {\n            if (info._loaded) {\n                return Promise.resolve();\n            }\n            return new Promise((resolve, reject) => {\n                seajs.use(`${info.xsite}/prepare`, this.wrapAsync(P => {\n                    info._loaded = true;\n                    P().then(resolve, reject);\n                }));\n            });\n        }\n        return Promise.resolve();\n    },\n    render() {\n        $(window).scrollTop(0);\n        let that = this;\n        let loc = Router.parse();\n        let path = loc.path;\n\n        let routes = Magix.config(\'routes\');\n        let pathInfo = routes[path] || {};\n        that.prepare(pathInfo).then(() => {\n            that.updater.digest({\n                path,\n                pathInfo\n            });\n        });\n    }\n});</pre></div></div><div class="_zs_gallery___test___pro_cross_-line mb10"><span class="_zs_gallery___test___pro_cross_-num">7.</span>宿主项目具体具体展现如下</div><div class="pl20"><iframe sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts" src="https://mo.m.taobao.com/page_201809162348244" class="_zs_gallery___test___pro_cross_-iframe" width="100%" height="660" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/cross.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});