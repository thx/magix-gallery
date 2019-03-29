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
Magix.applyStyle("_zs_gallery_mx-header_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-header_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-header_index_-header {\n  position: relative;\n  height: 88px;\n  background-color: #09122b;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-text {\n  opacity: 0.8;\n  color: #fff;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-text-h-brand:hover {\n  opacity: 1;\n  color: #4d7fff;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others {\n  height: 50px;\n  margin: 0 auto;\n  padding: 0 40px;\n  line-height: 50px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item {\n  position: relative;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-text {\n  cursor: pointer;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-arrow {\n  display: inline-block;\n  position: relative;\n  top: 4px;\n  right: 0;\n  font-size: 20px;\n  color: #fff;\n  transition: -webkit-transform 0.25s ease-out;\n  transition: transform 0.25s ease-out;\n  transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links {\n  position: absolute;\n  top: 38px;\n  left: 50%;\n  z-index: 3;\n  width: 160px;\n  height: 0;\n  margin-left: -80px;\n  overflow: hidden;\n  transition: height 0.25s ease-out;\n  background-color: #f7f7f7;\n  border-radius: 4px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links dl {\n  padding: 10px 20px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links dl dt {\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links dl dd {\n  height: 32px;\n  margin-left: 25px;\n  line-height: 32px;\n  font-size: 12px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-links {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  top: 50px;\n  left: 0;\n  transition: background-color 0.25s ease-out;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner {\n  height: 76px;\n  margin: 0 auto;\n  padding: 18px 40px;\n  background-color: #fff;\n  border-radius: 60px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-logo {\n  float: left;\n  height: 40px;\n  margin-right: 50px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-logo img {\n  height: 100%;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-navs {\n  float: left;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-navs ._zs_gallery_mx-header_index_-cur {\n  color: #4d7fff;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front._zs_gallery_mx-header_index_-fixed {\n  position: fixed;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n}\n");
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
} ; var $g = '', $_temp, $p = '', width = $$.width, list = $$.list, fixed = $$.fixed, styles = $$.styles, logo = $$.logo, navs = $$.navs, cur = $$.cur; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycg:_" class="_zs_gallery_mx-header_index_-header"><div class="_zs_gallery_mx-header_index_-others clearfix" style="width: ';
    $line = 2;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxs="_zs_gallerycg:_" class="fl mr35"><a class="_zs_gallery_mx-header_index_-text _zs_gallery_mx-header_index_-text-h-brand" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';
    $line = 6;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cjfrdotzae$art_c = list.length; index < $art_cjfrdotzae$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cjfrdotzae$art_c = list.length; index < $art_cjfrdotzae$art_c; index++) {
        var item = list[index];
        $p += '<div class="_zs_gallery_mx-header_index_-item fl mr35" mx-mouseover="' + $viewId + 'toggle({index:';
        $line = 8;
        $art = '=index';
        ;
        $p += ($expr = '<%=index%>', $e(index)) + ',height:';
        $line = 8;
        $art = '=item.height';
        ;
        $p += ($expr = '<%=item.height%>', $e(item.height)) + '})" mx-mouseout="' + $viewId + 'toggle({index:';
        $line = 9;
        $art = '=index';
        ;
        $p += ($expr = '<%=index%>', $e(index)) + ',height:0})"><span mxa="_zs_gallerycg:a" class="_zs_gallery_mx-header_index_-text">';
        $line = 10;
        $art = '=item.title';
        ;
        $p += ($expr = '<%=item.title%>', $e(item.title)) + '</span><span mxs="_zs_gallerycg:a" class="mc-iconfont ml5 _zs_gallery_mx-header_index_-arrow">&#xe692;</span><div class="_zs_gallery_mx-header_index_-links" style="height: ';
        $line = 12;
        $art = '=item.showHeight';
        ;
        $p += ($expr = '<%=item.showHeight%>', $e(item.showHeight)) + 'px;">';
        $line = 13;
        $art = 'each item.seconds as second';
        ;
        $expr = '<%for (var $art_ipllwwaqpw$art_i = 0, $art_objgfyahczs$art_obj = item.seconds, $art_czgjougbhq$art_c = $art_objgfyahczs$art_obj.length; $art_ipllwwaqpw$art_i < $art_czgjougbhq$art_c; $art_ipllwwaqpw$art_i++) {        var second = $art_objgfyahczs$art_obj[$art_ipllwwaqpw$art_i]%>';
        for (var $art_ipllwwaqpw$art_i = 0, $art_objgfyahczs$art_obj = item.seconds, $art_czgjougbhq$art_c = $art_objgfyahczs$art_obj.length; $art_ipllwwaqpw$art_i < $art_czgjougbhq$art_c; $art_ipllwwaqpw$art_i++) {
            var second = $art_objgfyahczs$art_obj[$art_ipllwwaqpw$art_i];
            $p += '<dl>';
            $line = 15;
            $art = 'if second.title';
            ;
            $expr = '<%if (second.title) {%>';
            if (second.title) {
                ;
                $p += '<dt>';
                $line = 16;
                $art = '=second.title';
                ;
                $p += ($expr = '<%=second.title%>', $e(second.title)) + '</dt>';
                $line = 17;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 18;
            $art = 'each second.thirds as third';
            ;
            $expr = '<%for (var $art_itedqslq$art_i = 0, $art_objedpuoe$art_obj = second.thirds, $art_chfxilkww$art_c = $art_objedpuoe$art_obj.length; $art_itedqslq$art_i < $art_chfxilkww$art_c; $art_itedqslq$art_i++) {            var third = $art_objedpuoe$art_obj[$art_itedqslq$art_i]%>';
            for (var $art_itedqslq$art_i = 0, $art_objedpuoe$art_obj = second.thirds, $art_chfxilkww$art_c = $art_objedpuoe$art_obj.length; $art_itedqslq$art_i < $art_chfxilkww$art_c; $art_itedqslq$art_i++) {
                var third = $art_objedpuoe$art_obj[$art_itedqslq$art_i];
                $p += '<dd><a href="';
                $line = 19;
                $art = '=third.link';
                ;
                $p += ($expr = '<%=third.link%>', $e(third.link)) + '" target="_blank" rel="noopener noreferrer">';
                $line = 19;
                $art = '=third.name';
                ;
                $p += ($expr = '<%=third.name%>', $e(third.name)) + '</a></dd>';
                $line = 20;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</dl>';
            $line = 22;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 25;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="_zs_gallery_mx-header_index_-front ';
    $line = 27;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' _zs_gallery_mx-header_index_-fixed ';
        $line = 27;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 27;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' style="';
        $line = 27;
        $art = '=styles';
        ;
        $p += ($expr = '<%=styles%>', $e(styles)) + '" ';
        $line = 27;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><div class="_zs_gallery_mx-header_index_-front-inner clearfix" style="width: ';
    $line = 28;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxa="_zs_gallerycg:b" class="_zs_gallery_mx-header_index_-logo"><img src="';
    $line = 30;
    $art = '=logo';
    ;
    $p += ($expr = '<%=logo%>', $e(logo)) + '"/></div>';
    $line = 32;
    $art = 'if (navs.length > 0)';
    ;
    $expr = '<%if (navs.length > 0) {%>';
    if (navs.length > 0) {
        ;
        $p += '<div mxa="_zs_gallerycg:c" class="_zs_gallery_mx-header_index_-navs">';
        $line = 34;
        $art = 'each navs as nav';
        ;
        $expr = '<%for (var $art_iiwhrjncvp$art_i = 0, $art_cheaqre$art_c = navs.length; $art_iiwhrjncvp$art_i < $art_cheaqre$art_c; $art_iiwhrjncvp$art_i++) {        var nav = navs[$art_iiwhrjncvp$art_i]%>';
        for (var $art_iiwhrjncvp$art_i = 0, $art_cheaqre$art_c = navs.length; $art_iiwhrjncvp$art_i < $art_cheaqre$art_c; $art_iiwhrjncvp$art_i++) {
            var nav = navs[$art_iiwhrjncvp$art_i];
            $p += '<a class="mr40 ';
            $line = 35;
            $art = 'if (cur == nav.value)';
            ;
            $expr = '<%if (cur == nav.value) {%>';
            if (cur == nav.value) {
                ;
                $p += ' _zs_gallery_mx-header_index_-cur ';
                $line = 35;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" href="javascript:;" mx-click="' + $viewId + 'to({nav:\'';
            $line = 35;
            $art = '@nav';
            ;
            $p += ($expr = '<%@nav%>', $i($$ref, nav)) + '\'})">';
            $line = 35;
            $art = '=nav.text';
            ;
            $p += ($expr = '<%=nav.text%>', $e(nav.text)) + '</a>';
            $line = 36;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 38;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/index.html';
    throw msg;
} return $p; },
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
        var width = ops.width || 1200;
        var navs = ops.navs || [];
        var logo = ops.logo || '//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png';
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
        that['@{wrapper}'] = wrapper;
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
        var wrapper = that['@{wrapper}'];
        var maxWidth = wrapper.outerWidth(), wrapperId = data.wrapperId;
        var scrollFn = function () {
            var front = $('#' + that.id + ' ._zs_gallery_mx-header_index_-front');
            var others = $('#' + that.id + ' ._zs_gallery_mx-header_index_-others');
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