/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/index",["magix","mx-mustache/index","$"],(require,exports,module)=>{
/*Magix,Mustache,$*/

var Magix = require("magix");
var Mustache = require("mx-mustache/index");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-footer_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-footer_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-footer_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-footer_index_-custom #alimama-footer {\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-custom._zs_gallery_mx-footer_index_-white #alimama-footer a,\n._zs_gallery_mx-footer_index_-custom._zs_gallery_mx-footer_index_-white #alimama-footer span {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products {\n  position: relative;\n  max-width: 100%;\n  margin-bottom: 20px;\n  padding-left: 220px;\n  padding-right: 220px;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo img {\n  width: 110px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  display: block;\n  width: 110px;\n  margin-top: 5px;\n  font-size: 36px;\n  color: #666;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode {\n  position: absolute;\n  top: 0;\n  right: 0;\n  line-height: 22px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode img {\n  width: 92px;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-footer_index_-products dl {\n  float: left;\n  font-size: 16px;\n  line-height: 32px;\n}\n._zs_gallery_mx-footer_index_-products dl dt {\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dt {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dd a {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dd a:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-qrcode {\n  color: #fff;\n}\n");
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
} ; var $g = '', $_temp, $p = '', len = $$.len, dark = $$.dark, width = $$.width, products = $$.products, footerHtml = $$.footerHtml; var $expr, $art, $line; try {
    $p += '';
    $line = 1;
    $art = 'if len > 0';
    ;
    $p += '';
    $expr = '<%if (len > 0) {%>';
    if (len > 0) {
        ;
        $p += '<div class="_zs_gallery_mx-footer_index_-products ';
        $line = 2;
        $art = 'if dark';
        ;
        $p += '';
        $expr = '<%if (dark) {%>';
        if (dark) {
            ;
            $p += ' _zs_gallery_mx-footer_index_-white ';
            $line = 2;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '" style="width: ';
        $line = 2;
        $art = '=width';
        ;
        $p += '' + ($expr = '<%=width%>', $e(width)) + 'px;"><div mxs="_zs_gallerya*:_" class="_zs_gallery_mx-footer_index_-logo"><img src="https://img.alicdn.com/tfs/TB1_j6sn0cnBKNjSZR0XXcFqFXa-182-185.png"><i class="mc-iconfont _zs_gallery_mx-footer_index_-mama-icon">&#xe601;</i></div><div mxa="_zs_gallerya*:_" class="clearfix">';
        $line = 8;
        $art = 'each products as p';
        ;
        $p += '';
        $expr = '<%for (var $art_itabndsk$art_i = 0, $art_cjaxaiqd$art_c = products.length; $art_itabndsk$art_i < $art_cjaxaiqd$art_c; $art_itabndsk$art_i++) {        var p = products[$art_itabndsk$art_i]%>';
        for (var $art_itabndsk$art_i = 0, $art_cjaxaiqd$art_c = products.length; $art_itabndsk$art_i < $art_cjaxaiqd$art_c; $art_itabndsk$art_i++) {
            var p = products[$art_itabndsk$art_i];
            $p += '<dl style="width: ';
            $line = 9;
            $art = '=(100 / len)';
            ;
            $p += '' + ($expr = '<%=(100 / len)%>', $e((100 / len))) + '%;"><dt>';
            $line = 10;
            $art = '=p.title';
            ;
            $p += '' + ($expr = '<%=p.title%>', $e(p.title)) + '</dt>';
            $line = 11;
            $art = 'each p.thirds as t';
            ;
            $p += '';
            $expr = '<%for (var $art_ijhnuvo$art_i = 0, $art_objyeplici$art_obj = p.thirds, $art_ciagvlp$art_c = $art_objyeplici$art_obj.length; $art_ijhnuvo$art_i < $art_ciagvlp$art_c; $art_ijhnuvo$art_i++) {            var t = $art_objyeplici$art_obj[$art_ijhnuvo$art_i]%>';
            for (var $art_ijhnuvo$art_i = 0, $art_objyeplici$art_obj = p.thirds, $art_ciagvlp$art_c = $art_objyeplici$art_obj.length; $art_ijhnuvo$art_i < $art_ciagvlp$art_c; $art_ijhnuvo$art_i++) {
                var t = $art_objyeplici$art_obj[$art_ijhnuvo$art_i];
                $p += '<dd><a href="';
                $line = 13;
                $art = '=t.link';
                ;
                $p += '' + ($expr = '<%=t.link%>', $e(t.link)) + '" target="_blank" rel="noopener noreferrer">';
                $line = 13;
                $art = '=t.name';
                ;
                $p += '' + ($expr = '<%=t.name%>', $e(t.name)) + '</a></dd>';
                $line = 15;
                $art = '/each';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '</dl>';
            $line = 17;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxs="_zs_gallerya*:a" class="_zs_gallery_mx-footer_index_-qrcode"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>';
        $line = 25;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="_zs_gallery_mx-footer_index_-custom ';
    $line = 26;
    $art = 'if dark';
    ;
    $p += '';
    $expr = '<%if (dark) {%>';
    if (dark) {
        ;
        $p += ' _zs_gallery_mx-footer_index_-white ';
        $line = 26;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 27;
    $art = '!footerHtml';
    ;
    $p += '' + ($expr = '<%!footerHtml%>', $n(footerHtml)) + '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-footer/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.assign(extra);
    },
    assign: function (ops) {
        this['@{mode.simple}'] = (ops.mode === 'simple');
        this['@{need.products}'] = (ops.products + '' === 'true');
        this['@{products.width}'] = ops.width || 1184;
        this['@{ui.dark}'] = (ops.dark + '' === 'true');
    },
    render: function () {
        var me = this;
        var needProducts = me['@{need.products}'];
        var simple = me['@{mode.simple}'];
        var alimamaReg = /alimama\.(com|net)/i;
        var tanxReg = /tanx\.(com|net)/i;
        var taobaoReg = /taobao\.(com|net)/i;
        var alimama, taobao, tanx;
        if (alimamaReg.test(window.location.href)) {
            alimama = true;
        }
        else if (taobaoReg.test(window.location.href)) {
            taobao = true;
        }
        else if (tanxReg.test(window.location.href)) {
            tanx = true;
        }
        else {
            alimama = true;
        }
        var info = {
            simple: simple,
            alimama: alimama,
            taobao: taobao,
            tanx: tanx
        };
        var models = [me.getFooter(info)];
        if (needProducts) {
            models.push(me.getProducts());
        }
        Promise.all(models).then(function (_a) {
            var footerHtml = _a[0], products = _a[1];
            products = products || [];
            me.updater.digest({
                products: products,
                len: products.length,
                footerHtml: footerHtml,
                width: me['@{products.width}'],
                dark: me['@{ui.dark}']
            });
        });
    },
    getFooter: function (info) {
        return new Promise(function (resolve) {
            $.ajax({
                url: '//mos.m.taobao.com/union/jsonp/footer',
                dataType: 'jsonp',
                jsonp: 'callback',
                cache: true,
                success: function (resp) {
                    resolve(Mustache.render(resp.html, info));
                },
                error: function (xhr) {
                    resolve('');
                }
            });
        });
    },
    getProducts: function () {
        return new Promise(function (resolve) {
            $.ajax({
                url: '//mos.m.taobao.com/zuanshi/jsonp_201805231426009',
                dataType: 'jsonp',
                jsonp: 'callback',
                cache: true,
                success: function (resp, status) {
                    var list = resp.list || [];
                    var products = [];
                    list.forEach(function (item) {
                        item.seconds.forEach(function (sec) {
                            if (!sec.title) {
                                sec.title = item.title;
                            }
                        });
                        products = products.concat(item.seconds);
                    });
                    resolve(products);
                },
                error: function (xhr) {
                    // 解耦异常
                    resolve([]);
                }
            });
        });
    }
});

});