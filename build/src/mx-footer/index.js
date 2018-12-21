/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/index",["magix","mx-mustache/index","$","mx-header/data"],(require,exports,module)=>{
/*Magix,Mustache,$,Data*/

var Magix = require("magix");
var Mustache = require("mx-mustache/index");
var $ = require("$");
var Data = require("mx-header/data");
Magix.applyStyle("_zs_gallery_mx-footer_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-footer_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-footer_index_-footer {\n  padding: 30px 0;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line {\n  line-height: 28px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  padding: 0 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:visited,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:focus,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:active {\n  color: #999;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:hover {\n  color: #333;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  color: #999;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link {\n  position: relative;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link:after {\n  content: '';\n  position: absolute;\n  top: 1px;\n  right: 0;\n  width: 0;\n  height: 12px;\n  border-left: 1px solid #eee;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link:last-child:after {\n  content: none;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line {\n  padding-top: 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img {\n  padding: 0 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img ._zs_gallery_mx-footer_index_-line-img {\n  transition: opacity 0.25s;\n  opacity: 0.5;\n  border: none;\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-filter: gray;\n          filter: gray;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img:hover ._zs_gallery_mx-footer_index_-line-img {\n  opacity: 1;\n  -webkit-filter: grayscale(0%);\n  -moz-filter: grayscale(0%);\n  -ms-filter: grayscale(0%);\n  -o-filter: grayscale(0%);\n  filter: grayscale(0%);\n  -webkit-filter: none;\n          filter: none;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:visited,\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:focus,\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:active {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:hover {\n  color: #fff;\n  opacity: 1;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link:after {\n  border-left: 1px solid #fff;\n  opacity: 0.3;\n}\n@media screen and (max-width: 767px) {\n  ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n  ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n    padding: 0 5px;\n  }\n}\n._zs_gallery_mx-footer_index_-products {\n  position: relative;\n  max-width: 100%;\n  margin-bottom: 20px;\n  padding-left: 220px;\n  padding-right: 220px;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo img {\n  width: 110px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  display: block;\n  width: 110px;\n  margin-top: 5px;\n  font-size: 36px;\n  color: #666;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode {\n  position: absolute;\n  top: 0;\n  right: 0;\n  line-height: 22px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode img {\n  width: 92px;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-footer_index_-products dl {\n  float: left;\n  font-size: 16px;\n  line-height: 32px;\n}\n._zs_gallery_mx-footer_index_-products dl dt {\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dt {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dd a {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dd a:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-qrcode {\n  color: #fff;\n}\n");
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
} ; var $g = '', $_temp, $p = '', len = $$.len, dark = $$.dark, width = $$.width, products = $$.products, tanx = $$.tanx, taobao = $$.taobao, alimama = $$.alimama, year = $$.year, simple = $$.simple; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if len > 0';
    ;
    $expr = '<%if (len > 0) {%>';
    if (len > 0) {
        ;
        $p += '<div class="_zs_gallery_mx-footer_index_-products ';
        $line = 2;
        $art = 'if dark';
        ;
        $expr = '<%if (dark) {%>';
        if (dark) {
            ;
            $p += ' _zs_gallery_mx-footer_index_-white ';
            $line = 2;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" style="width: ';
        $line = 2;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxs="_zs_gallerybe:_" class="_zs_gallery_mx-footer_index_-logo"><img src="//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png"><i class="mc-iconfont _zs_gallery_mx-footer_index_-mama-icon">&#xe601;</i></div><div mxa="_zs_gallerybe:_" class="clearfix">';
        $line = 8;
        $art = 'each products as p';
        ;
        $expr = '<%for (var $art_itsiogbks$art_i = 0, $art_csspvqc$art_c = products.length; $art_itsiogbks$art_i < $art_csspvqc$art_c; $art_itsiogbks$art_i++) {        var p = products[$art_itsiogbks$art_i]%>';
        for (var $art_itsiogbks$art_i = 0, $art_csspvqc$art_c = products.length; $art_itsiogbks$art_i < $art_csspvqc$art_c; $art_itsiogbks$art_i++) {
            var p = products[$art_itsiogbks$art_i];
            $p += '<dl style="width: ';
            $line = 9;
            $art = '=(100 / len)';
            ;
            $p += ($expr = '<%=(100 / len)%>', $e((100 / len))) + '%;"><dt>';
            $line = 10;
            $art = '=p.title';
            ;
            $p += ($expr = '<%=p.title%>', $e(p.title)) + '</dt>';
            $line = 11;
            $art = 'each p.thirds as t';
            ;
            $expr = '<%for (var $art_iqgdrpwrn$art_i = 0, $art_objkarlmebz$art_obj = p.thirds, $art_cvojphbq$art_c = $art_objkarlmebz$art_obj.length; $art_iqgdrpwrn$art_i < $art_cvojphbq$art_c; $art_iqgdrpwrn$art_i++) {            var t = $art_objkarlmebz$art_obj[$art_iqgdrpwrn$art_i]%>';
            for (var $art_iqgdrpwrn$art_i = 0, $art_objkarlmebz$art_obj = p.thirds, $art_cvojphbq$art_c = $art_objkarlmebz$art_obj.length; $art_iqgdrpwrn$art_i < $art_cvojphbq$art_c; $art_iqgdrpwrn$art_i++) {
                var t = $art_objkarlmebz$art_obj[$art_iqgdrpwrn$art_i];
                $p += '<dd><a href="';
                $line = 13;
                $art = '=t.link';
                ;
                $p += ($expr = '<%=t.link%>', $e(t.link)) + '" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">';
                $line = 13;
                $art = '=t.name';
                ;
                $p += ($expr = '<%=t.name%>', $e(t.name)) + '</a></dd>';
                $line = 15;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</dl>';
            $line = 17;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxs="_zs_gallerybe:a" class="_zs_gallery_mx-footer_index_-qrcode"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>';
        $line = 25;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="_zs_gallery_mx-footer_index_-footer ';
    $line = 26;
    $art = 'if dark';
    ;
    $expr = '<%if (dark) {%>';
    if (dark) {
        ;
        $p += ' _zs_gallery_mx-footer_index_-white ';
        $line = 26;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxa="_zs_gallerybe:a" class="_zs_gallery_mx-footer_index_-line"><a mxs="_zs_gallerybe:b" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-1.htm">联系客服</a><a mxs="_zs_gallerybe:c" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//open.taobao.com/">开放平台</a>';
    $line = 30;
    $art = 'if tanx';
    ;
    $expr = '<%if (tanx) {%>';
    if (tanx) {
        ;
        $p += '<a mxs="_zs_gallerybe:d" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//tanx.com/web/opt.html">隐私权保护</a>';
        $line = 32;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 33;
    $art = 'if taobao';
    ;
    $expr = '<%if (taobao) {%>';
    if (taobao) {
        ;
        $p += '<a mxs="_zs_gallerybe:e" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>';
        $line = 35;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 36;
    $art = 'if alimama';
    ;
    $expr = '<%if (alimama) {%>';
    if (alimama) {
        ;
        $p += '<a mxs="_zs_gallerybe:e" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>';
        $line = 38;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<a mxs="_zs_gallerybe:f" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-4.htm">意见反馈</a><a mxs="_zs_gallerybe:g" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//jubao.alibaba.com">廉正举报</a>';
    $line = 41;
    $art = 'if tanx';
    ;
    $expr = '<%if (tanx) {%>';
    if (tanx) {
        ;
        $p += '<span mxs="_zs_gallerybe:h" class="_zs_gallery_mx-footer_index_-line-text">Tanx.com版权所有</span><a mxs="_zs_gallerybe:i" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">浙ICP备09109183号-10</a>';
        $line = 44;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 45;
    $art = 'if taobao';
    ;
    $expr = '<%if (taobao) {%>';
    if (taobao) {
        ;
        $p += '<span mxa="_zs_gallerybe:b" class="_zs_gallery_mx-footer_index_-line-text">Taobao.com版权所有 2003-';
        $line = 46;
        $art = '=year';
        ;
        $p += ($expr = '<%=year%>', $e(year)) + '</span><a mxs="_zs_gallerybe:j" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20080224-1</a>';
        $line = 48;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 49;
    $art = 'if alimama';
    ;
    $expr = '<%if (alimama) {%>';
    if (alimama) {
        ;
        $p += '<span mxa="_zs_gallerybe:c" class="_zs_gallery_mx-footer_index_-line-text">阿里妈妈版权所有 2007-';
        $line = 50;
        $art = '=year';
        ;
        $p += ($expr = '<%=year%>', $e(year)) + '</span><a mxs="_zs_gallerybe:k" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20070195</a>';
        $line = 52;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 54;
    $art = 'if !simple';
    ;
    $expr = '<%if (!simple) {%>';
    if (!simple) {
        ;
        $p += '<div mxs="_zs_gallerybe:l" class="_zs_gallery_mx-footer_index_-line _zs_gallery_mx-footer_index_-gap-line"><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.taobao.com">淘宝网</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.tmall.com">天猫</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//ju.taobao.com">聚划算</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.aliexpress.com">全球速卖通</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alibaba.com">阿里巴巴国际交易市场</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.1688.com">1688</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com">阿里妈妈</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.fliggy.com">飞猪</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.aliyun.com">阿里云计算</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.alios.cn">AliOS</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//aliqin.tmall.com">阿里通信</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.autonavi.com/">高德</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.uc.cn/">UC</a></div><div mxs="_zs_gallerybe:m" class="_zs_gallery_mx-footer_index_-line _zs_gallery_mx-footer_index_-gap-line"><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.umeng.com/">友盟</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.xiami.com">虾米</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alibabaplanet.com">阿里星球</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alipay.com">支付宝</a></div><div mxs="_zs_gallerybe:n" class="_zs_gallery_mx-footer_index_-img-line"><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局"></a><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.alimama.com.cn&id=330108000003117&SHID=1223.0AFF_NAME=com.rouger.gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" src="//img.alicdn.com/tps/i1/T1KRgkFxdXXXaqJHTe-35-42.png"></a><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png"></a></div>';
        $line = 89;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
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
        var products = [];
        if (needProducts) {
            Data.products.forEach(function (item) {
                item.seconds.forEach(function (sec) {
                    if (!sec.title) {
                        sec.title = item.title;
                    }
                });
                products = products.concat(item.seconds);
            });
        }
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
        var year = (new Date()).getFullYear();
        var info = {
            simple: simple,
            alimama: alimama,
            taobao: taobao,
            tanx: tanx,
            products: products,
            len: products.length,
            width: me['@{products.width}'],
            dark: me['@{ui.dark}'],
            year: year
        };
        me.updater.digest(info);
    }
});

});