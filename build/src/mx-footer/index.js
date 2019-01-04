/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/index",["magix","mx-mustache/index","$","mx-header/data"],(require,exports,module)=>{
/*Magix,Mustache,$,Data*/

var Magix = require("magix");
var Mustache = require("mx-mustache/index");
var $ = require("$");
var Data = require("mx-header/data");
Magix.applyStyle("_zs_galleryO","._zs_galleryfQ{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryfR{padding:30px 0;text-align:center}._zs_galleryfR ._zs_galleryfS{line-height:28px}._zs_galleryfR ._zs_galleryfS ._zs_galleryfT,._zs_galleryfR ._zs_galleryfS ._zs_galleryfU{padding:0 10px}._zs_galleryfR ._zs_galleryfS ._zs_galleryfT,._zs_galleryfR ._zs_galleryfS ._zs_galleryfT:active,._zs_galleryfR ._zs_galleryfS ._zs_galleryfT:focus,._zs_galleryfR ._zs_galleryfS ._zs_galleryfT:visited{color:#999}._zs_galleryfR ._zs_galleryfS ._zs_galleryfT:hover{color:#333}._zs_galleryfR ._zs_galleryfS ._zs_galleryfU{color:#999}._zs_galleryfR ._zs_galleryfS._zs_galleryfV ._zs_galleryfT{position:relative}._zs_galleryfR ._zs_galleryfS._zs_galleryfV ._zs_galleryfT:after{content:\"\";position:absolute;top:1px;right:0;width:0;height:12px;border-left:1px solid #eee}._zs_galleryfR ._zs_galleryfS._zs_galleryfV ._zs_galleryfT:last-child:after{content:none}._zs_galleryfR ._zs_galleryfW{padding-top:10px}._zs_galleryfR ._zs_galleryfW ._zs_galleryfX{padding:0 10px}._zs_galleryfR ._zs_galleryfW ._zs_galleryfX ._zs_galleryfY{transition:opacity .25s;opacity:.5;border:none;-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:grey;filter:gray}._zs_galleryfR ._zs_galleryfW ._zs_galleryfX:hover ._zs_galleryfY{opacity:1;-webkit-filter:grayscale(0);-moz-filter:grayscale(0);-ms-filter:grayscale(0);-o-filter:grayscale(0);filter:grayscale(0);-webkit-filter:none;filter:none}._zs_galleryfR._zs_galleryfZ ._zs_galleryfS ._zs_galleryfT,._zs_galleryfR._zs_galleryfZ ._zs_galleryfS ._zs_galleryfT:active,._zs_galleryfR._zs_galleryfZ ._zs_galleryfS ._zs_galleryfT:focus,._zs_galleryfR._zs_galleryfZ ._zs_galleryfS ._zs_galleryfT:visited{color:#fff;opacity:.5}._zs_galleryfR._zs_galleryfZ ._zs_galleryfS ._zs_galleryfT:hover{color:#fff;opacity:1}._zs_galleryfR._zs_galleryfZ ._zs_galleryfS ._zs_galleryfU{color:#fff;opacity:.5}._zs_galleryfR._zs_galleryfZ ._zs_galleryfS._zs_galleryfV ._zs_galleryfT:after{border-left:1px solid #fff;opacity:.3}@media screen and (max-width:767px){._zs_galleryfR ._zs_galleryfS ._zs_galleryfT,._zs_galleryfR ._zs_galleryfS ._zs_galleryfU{padding:0 5px}}._zs_galleryg_{position:relative;max-width:100%;margin-bottom:20px;padding-left:220px;padding-right:220px;text-align:center}._zs_galleryg_ ._zs_galleryga{position:absolute;top:0;left:0}._zs_galleryg_ ._zs_galleryga img{width:110px}._zs_galleryg_ ._zs_galleryga ._zs_gallerygb{display:block;width:110px;margin-top:5px;font-size:36px;color:#666}._zs_galleryg_ ._zs_gallerygc{position:absolute;top:0;right:0;line-height:22px}._zs_galleryg_ ._zs_gallerygc img{width:92px;margin-bottom:10px}._zs_galleryg_ dl{float:left;font-size:16px;line-height:32px}._zs_galleryg_ dl dt{margin-bottom:16px;opacity:.5}._zs_galleryg_._zs_galleryfZ ._zs_galleryga ._zs_gallerygb,._zs_galleryg_._zs_galleryfZ dl dd a,._zs_galleryg_._zs_galleryfZ dl dt{color:#fff}._zs_galleryg_._zs_galleryfZ dl dd a:hover{color:#4d7fff}._zs_galleryg_._zs_galleryfZ ._zs_gallerygc{color:#fff}");
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
} ; var $g = '', $_temp, $p = '', len = $$.len, dark = $$.dark, width = $$.width, products = $$.products, tanx = $$.tanx, taobao = $$.taobao, alimama = $$.alimama, year = $$.year, simple = $$.simple; if (len > 0) {
    ;
    $p += '<div class="_zs_galleryg_ ';
    if (dark) {
        ;
        $p += ' _zs_galleryfZ ';
    }
    ;
    $p += '" style="width: ' + $e(width) + 'px;"><div mxs="_zs_gallerybk:_" class="_zs_galleryga"><img src="//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png"><i class="mc-iconfont _zs_gallerygb">&#xe601;</i></div><div mxa="_zs_gallerybk:_" class="clearfix">';
    for (var $art_itemgpgsj$art_i = 0, $art_cnhfynmkta$art_c = products.length; $art_itemgpgsj$art_i < $art_cnhfynmkta$art_c; $art_itemgpgsj$art_i++) {
        var p = products[$art_itemgpgsj$art_i];
        $p += '<dl style="width: ' + $e((100 / len)) + '%;"><dt>' + $e(p.title) + '</dt>';
        for (var $art_iduuvbbgab$art_i = 0, $art_objzfvrvhurnr$art_obj = p.thirds, $art_cycndey$art_c = $art_objzfvrvhurnr$art_obj.length; $art_iduuvbbgab$art_i < $art_cycndey$art_c; $art_iduuvbbgab$art_i++) {
            var t = $art_objzfvrvhurnr$art_obj[$art_iduuvbbgab$art_i];
            $p += '<dd><a href="' + $e(t.link) + '" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">' + $e(t.name) + '</a></dd>';
        }
        ;
        $p += '</dl>';
    }
    ;
    $p += '</div><div mxs="_zs_gallerybk:a" class="_zs_gallerygc"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>';
} ; $p += '<div class="_zs_galleryfR '; if (dark) {
    ;
    $p += ' _zs_galleryfZ ';
} ; $p += '"><div mxa="_zs_gallerybk:a" class="_zs_galleryfS"><a mxs="_zs_gallerybk:b" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-1.htm">联系客服</a><a mxs="_zs_gallerybk:c" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//open.taobao.com/">开放平台</a>'; if (tanx) {
    ;
    $p += '<a mxs="_zs_gallerybk:d" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//tanx.com/web/opt.html">隐私权保护</a>';
} ; $p += ' '; if (taobao) {
    ;
    $p += '<a mxs="_zs_gallerybk:e" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>';
} ; $p += ' '; if (alimama) {
    ;
    $p += '<a mxs="_zs_gallerybk:e" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>';
} ; $p += '<a mxs="_zs_gallerybk:f" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-4.htm">意见反馈</a><a mxs="_zs_gallerybk:g" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//jubao.alibaba.com">廉正举报</a>'; if (tanx) {
    ;
    $p += '<span mxs="_zs_gallerybk:h" class="_zs_galleryfU">Tanx.com版权所有</span><a mxs="_zs_gallerybk:i" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">浙ICP备09109183号-10</a>';
} ; $p += ' '; if (taobao) {
    ;
    $p += '<span mxa="_zs_gallerybk:b" class="_zs_galleryfU">Taobao.com版权所有 2003-' + $e(year) + '</span><a mxs="_zs_gallerybk:j" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20080224-1</a>';
} ; $p += ' '; if (alimama) {
    ;
    $p += '<span mxa="_zs_gallerybk:c" class="_zs_galleryfU">阿里妈妈版权所有 2007-' + $e(year) + '</span><a mxs="_zs_gallerybk:k" class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20070195</a>';
} ; $p += '</div>'; if (!simple) {
    ;
    $p += '<div mxs="_zs_gallerybk:l" class="_zs_galleryfS _zs_galleryfV"><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.taobao.com">淘宝网</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.tmall.com">天猫</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//ju.taobao.com">聚划算</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.aliexpress.com">全球速卖通</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.alibaba.com">阿里巴巴国际交易市场</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.1688.com">1688</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.alimama.com">阿里妈妈</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.fliggy.com">飞猪</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.aliyun.com">阿里云计算</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.alios.cn">AliOS</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//aliqin.tmall.com">阿里通信</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.autonavi.com/">高德</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="http://www.uc.cn/">UC</a></div><div mxs="_zs_gallerybk:m" class="_zs_galleryfS _zs_galleryfV"><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.umeng.com/">友盟</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.xiami.com">虾米</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.alibabaplanet.com">阿里星球</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a><a class="_zs_galleryfT" target="_blank" rel="noopener noreferrer" href="//www.alipay.com">支付宝</a></div><div mxs="_zs_gallerybk:n" class="_zs_galleryfW"><a class="_zs_galleryfX" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_galleryfY" align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局"></a><a class="_zs_galleryfX" target="_blank" rel="noopener noreferrer" href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.alimama.com.cn&id=330108000003117&SHID=1223.0AFF_NAME=com.rouger.gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail"><img class="_zs_galleryfY" align="absmiddle" src="//img.alicdn.com/tps/i1/T1KRgkFxdXXXaqJHTe-35-42.png"></a><a class="_zs_galleryfX" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_galleryfY" align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png"></a></div>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        this.assign(extra);
    },
    assign: function (ops) {
        this['__bW'] = (ops.mode === 'simple');
        this['__bX'] = (ops.products + '' === 'true');
        this['__bY'] = ops.width || 1184;
        this['__bZ'] = (ops.dark + '' === 'true');
    },
    render: function () {
        var me = this;
        var needProducts = me['__bX'];
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
        var simple = me['__bW'];
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
            width: me['__bY'],
            dark: me['__bZ'],
            year: year
        };
        me.updater.digest(info);
    }
});

});