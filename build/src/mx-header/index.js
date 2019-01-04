/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/index",["magix","$","mx-header/data"],(require,exports,module)=>{
/*Magix,$,Data*/

var Magix = require("magix");
var $ = require("$");
var Data = require("mx-header/data");
Magix.applyStyle("_zs_galleryU","._zs_gallerygH{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygI{position:relative;height:88px;background-color:#09122b}._zs_gallerygI ._zs_gallerygJ{opacity:.8;color:#fff}._zs_gallerygI ._zs_gallerygK:hover{opacity:1;color:#4d7fff}._zs_gallerygI ._zs_gallerygL{height:50px;margin:0 auto;padding-left:22px;padding-right:22px;line-height:50px}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM{position:relative}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM ._zs_gallerygJ{cursor:pointer}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM ._zs_gallerygN{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM ._zs_gallerygO{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height .25s ease-out;background-color:#f7f7f7;border-radius:4px}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM ._zs_gallerygO dl{padding:10px 20px}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM ._zs_gallerygO dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM ._zs_gallerygO dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM:hover ._zs_gallerygJ{opacity:1}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM:hover ._zs_gallerygN{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerygI ._zs_gallerygL ._zs_gallerygM:hover ._zs_gallerygO{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygI ._zs_gallerygP{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color .25s ease-out}._zs_gallerygI ._zs_gallerygP ._zs_gallerygQ{height:76px;margin:0 auto;padding:18px 20px;background-color:#fff;border-radius:60px}._zs_gallerygI ._zs_gallerygP ._zs_gallerygQ ._zs_gallerygR{float:left;height:40px;margin-right:50px}._zs_gallerygI ._zs_gallerygP ._zs_gallerygQ ._zs_gallerygR img{height:100%}._zs_gallerygI ._zs_gallerygP ._zs_gallerygQ ._zs_gallerygS{float:left;height:40px;line-height:40px;font-size:14px}._zs_gallerygI ._zs_gallerygP ._zs_gallerygQ ._zs_gallerygS ._zs_gallerygT{color:#4d7fff}._zs_gallerygI ._zs_gallerygP._zs_gallerygU{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}");
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
} ; var $g = '', $_temp, $p = '', width = $$.width, list = $$.list, fixed = $$.fixed, styles = $$.styles, logo = $$.logo, navs = $$.navs, cur = $$.cur; $p += '<div mxa="_zs_galleryb3:_" class="_zs_gallerygI"><div class="_zs_gallerygL clearfix" style="width: ' + $e(width) + 'px;"><div mxs="_zs_galleryb3:_" class="fl mr35"><a class="_zs_gallerygJ _zs_gallerygK" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>'; for (var index = 0, $art_cndawypyk$art_c = list.length; index < $art_cndawypyk$art_c; index++) {
    var item = list[index];
    $p += '<div class="_zs_gallerygM fl mr35" mx-mouseover="' + $viewId + 'toggle({index:' + $e(index) + ',height:' + $e(item.height) + '})" mx-mouseout="' + $viewId + 'toggle({index:' + $e(index) + ',height:0})"><span mxa="_zs_galleryb3:a" class="_zs_gallerygJ">' + $e(item.title) + '</span><span mxs="_zs_galleryb3:a" class="mc-iconfont ml5 _zs_gallerygN">&#xe692;</span><div class="_zs_gallerygO" style="height: ' + $e(item.showHeight) + 'px;">';
    for (var $art_iduynfd$art_i = 0, $art_objfsercta$art_obj = item.seconds, $art_cgucveeyaab$art_c = $art_objfsercta$art_obj.length; $art_iduynfd$art_i < $art_cgucveeyaab$art_c; $art_iduynfd$art_i++) {
        var second = $art_objfsercta$art_obj[$art_iduynfd$art_i];
        $p += '<dl>';
        if (second.title) {
            ;
            $p += '<dt>' + $e(second.title) + '</dt>';
        }
        ;
        $p += ' ';
        for (var $art_iornuxkuh$art_i = 0, $art_objhizopsn$art_obj = second.thirds, $art_cufmsdrww$art_c = $art_objhizopsn$art_obj.length; $art_iornuxkuh$art_i < $art_cufmsdrww$art_c; $art_iornuxkuh$art_i++) {
            var third = $art_objhizopsn$art_obj[$art_iornuxkuh$art_i];
            $p += '<dd><a href="' + $e(third.link) + '" target="_blank" rel="noopener noreferrer">' + $e(third.name) + '</a></dd>';
        }
        ;
        $p += '</dl>';
    }
    ;
    $p += '</div></div>';
} ; $p += '</div><div class="_zs_gallerygP '; if (fixed) {
    ;
    $p += ' _zs_gallerygU ';
} ; $p += '" '; if (fixed) {
    ;
    $p += ' style="' + $e(styles) + '" ';
} ; $p += '><div class="_zs_gallerygQ clearfix" style="width: ' + $e(width) + 'px;"><div mxa="_zs_galleryb3:b" class="_zs_gallerygR"><img src="' + $e(logo) + '"/></div><div mxa="_zs_galleryb3:c" class="_zs_gallerygS">'; for (var $art_isthyfwh$art_i = 0, $art_cucobhfr$art_c = navs.length; $art_isthyfwh$art_i < $art_cucobhfr$art_c; $art_isthyfwh$art_i++) {
    var nav = navs[$art_isthyfwh$art_i];
    $p += '<a class="mr40 ';
    if (cur == nav.value) {
        ;
        $p += ' _zs_gallerygT ';
    }
    ;
    $p += '" href="javascript:;" mx-click="' + $viewId + 'to({nav:\'' + $i($$ref, nav) + '\'})">' + $e(nav.text) + '</a>';
} ; $p += '</div></div></div></div>'; return $p; },
    init: function (ops) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        //该处是否可以由magix自动调用
        this.assign(ops);
    },
    assign: function (ops) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var wrapperId = ops.wrapper || '';
        var wrapper = wrapperId ? $('#' + wrapperId) : $(window);
        var cur = ops.cur || ''; //默认不选中任何一个导航
        var width = ops.width || 1184;
        var navs = ops.navs || [];
        var logo = ops.logo || '//img.alicdn.com/tfs/TB1vee6iAzoK1RjSZFlXXai4VXa-534-98.png';
        var maxWidth = wrapper.outerWidth();
        if (+width > (maxWidth - 40)) {
            width = maxWidth - 40;
        }
        that.updater.set({
            wrapperId: wrapperId,
            width: width,
            navs: navs,
            logo: logo,
            cur: cur
        });
        that['__cc'] = wrapper;
        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }
        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render: function () {
        var that = this;
        var data = that.updater.get();
        var list = Data.products;
        list.forEach(function (item) {
            var height = 10 * 2 * item.seconds.length;
            item.seconds.forEach(function (second) {
                if (second.title) {
                    height += 30;
                }
                height += (second.thirds.length * 32);
            });
            item.height = height;
            item.showHeight = 0;
        });
        that.updater.digest({
            list: list,
            fixed: false
        });
        var wrapper = that['__cc'];
        var maxWidth = wrapper.outerWidth(), wrapperId = data.wrapperId;
        var scrollFn = function () {
            var front = $('#' + that.id + ' ._zs_gallerygP');
            var others = $('#' + that.id + ' ._zs_gallerygL');
            var scrollTop = wrapper.scrollTop(), otherHeight = others.outerHeight();
            var styles = [
                'width:' + maxWidth + 'px',
                'left: 0'
            ];
            if (wrapperId) {
                styles.push('position: absolute', 'top: ' + scrollTop + 'px');
            }
            else {
                styles.push('position: fixed', 'top: 0');
            }
            if (scrollTop > otherHeight) {
                that.updater.digest({
                    fixed: true,
                    styles: styles.join(';')
                });
            }
            else {
                that.updater.digest({
                    fixed: false
                });
            }
        };
        if (!that.$init) {
            that.$init = 1;
            wrapper.on('scroll', scrollFn);
            that.on('destroy', function () {
                wrapper.off('scroll', scrollFn);
            });
        }
        scrollFn();
    },
    'toggle<mouseover,mouseout>': function (event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        var that = this;
        var index = event.params.index, height = event.params.height;
        var list = that.updater.get('list');
        list[index].showHeight = height;
        that.updater.digest({
            list: list
        });
    },
    'to<click>': function (event) {
        var that = this;
        var curNav = event.params.nav;
        that.updater.digest({
            cur: curNav.value
        });
        $('#' + that.id).trigger({
            type: 'navchange',
            nav: curNav
        });
    }
});

});