/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/other/update",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___other_update_","/* @dependent: ./index.less */\n._zs_gallery___test___other_update_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___other_update_-update {\n  position: relative;\n}\n._zs_gallery___test___other_update_-update::before {\n  content: '';\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 0;\n  height: 100%;\n  border-left: 2px solid #e6e6e6;\n}\n._zs_gallery___test___other_update_-update:last-child::before {\n  display: none;\n}\n._zs_gallery___test___other_update_-ver {\n  position: relative;\n}\n._zs_gallery___test___other_update_-ver::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: -4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  border: 2px solid #e6e6e6;\n  background-color: #fff;\n  border-radius: 50%;\n}\n._zs_gallery___test___other_update_-ver ._zs_gallery___test___other_update_-vt {\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 18px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery___test___other_update_-ver ._zs_gallery___test___other_update_-vi {\n  display: inline-block;\n  padding: 0 10px;\n  height: 20px;\n  line-height: 20px;\n  background-color: #ccc;\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery___test___other_update_-dot {\n  position: relative;\n  padding-left: 10px;\n}\n._zs_gallery___test___other_update_-dot::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  margin-top: -2px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n}\n._zs_gallery___test___other_update_-line {\n  line-height: 28px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $line = 1;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ilnjir$art_i = 0, $art_cynbtxvhryb$art_c = list.length; $art_ilnjir$art_i < $art_cynbtxvhryb$art_c; $art_ilnjir$art_i++) {    var item = list[$art_ilnjir$art_i]%>';
    for (var $art_ilnjir$art_i = 0, $art_cynbtxvhryb$art_c = list.length; $art_ilnjir$art_i < $art_cynbtxvhryb$art_c; $art_ilnjir$art_i++) {
        var item = list[$art_ilnjir$art_i];
        $p += '<div mxa="_zs_gallerye:_" class="_zs_gallery___test___other_update_-update"><div mxa="_zs_gallerye:e" class="_zs_gallery___test___other_update_-ver pl20"><span mxa="_zs_gallerye:f" class="_zs_gallery___test___other_update_-vt">';
        $line = 4;
        $art = '=item.ver';
        ;
        $p += ($expr = '<%=item.ver%>', $e(item.ver)) + '</span><span mxa="_zs_gallerye:g" class="_zs_gallery___test___other_update_-vi">';
        $line = 5;
        $art = '=item.time';
        ;
        $p += ($expr = '<%=item.time%>', $e(item.time)) + '</span></div><div mxa="_zs_gallerye:a" class="pt10 pb30">';
        $line = 8;
        $art = 'each item.subs as s';
        ;
        $expr = '<%for (var $art_ixzvsoix$art_i = 0, $art_objljhqg$art_obj = item.subs, $art_cqldthdhfl$art_c = $art_objljhqg$art_obj.length; $art_ixzvsoix$art_i < $art_cqldthdhfl$art_c; $art_ixzvsoix$art_i++) {        var s = $art_objljhqg$art_obj[$art_ixzvsoix$art_i]%>';
        for (var $art_ixzvsoix$art_i = 0, $art_objljhqg$art_obj = item.subs, $art_cqldthdhfl$art_c = $art_objljhqg$art_obj.length; $art_ixzvsoix$art_i < $art_cqldthdhfl$art_c; $art_ixzvsoix$art_i++) {
            var s = $art_objljhqg$art_obj[$art_ixzvsoix$art_i];
            $p += '<div mxa="_zs_gallerye:b" class="pl20">';
            $line = 10;
            $art = 'if s.type == \'bug\'';
            ;
            $expr = '<%if (s.type == \'bug\') {%>';
            if (s.type == 'bug') {
                ;
                $p += '<div mxs="_zs_gallerye:n" class="_zs_gallery___test___other_update_-line"><i class="mc-iconfont color-warn displacement-2 mr5">&#xe63d;</i>bug修复</div>';
                $line = 12;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 14;
            $art = 'if s.type == \'add\'';
            ;
            $expr = '<%if (s.type == \'add\') {%>';
            if (s.type == 'add') {
                ;
                $p += '<div mxs="_zs_gallerye:q" class="_zs_gallery___test___other_update_-line"><i class="mc-iconfont color-green displacement-2 mr5">&#xe616;</i>功能上新</div>';
                $line = 16;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 18;
            $art = 'each s.subs as ss';
            ;
            $expr = '<%for (var $art_iwdvsnqxol$art_i = 0, $art_objnygbofhfm$art_obj = s.subs, $art_ceaftbemh$art_c = $art_objnygbofhfm$art_obj.length; $art_iwdvsnqxol$art_i < $art_ceaftbemh$art_c; $art_iwdvsnqxol$art_i++) {            var ss = $art_objnygbofhfm$art_obj[$art_iwdvsnqxol$art_i]%>';
            for (var $art_iwdvsnqxol$art_i = 0, $art_objnygbofhfm$art_obj = s.subs, $art_ceaftbemh$art_c = $art_objnygbofhfm$art_obj.length; $art_iwdvsnqxol$art_i < $art_ceaftbemh$art_c; $art_iwdvsnqxol$art_i++) {
                var ss = $art_objnygbofhfm$art_obj[$art_iwdvsnqxol$art_i];
                $p += '<div mxa="_zs_gallerye:h" class="pl20"><div mxa="_zs_gallerye:i" class="_zs_gallery___test___other_update_-line _zs_gallery___test___other_update_-dot">';
                $line = 20;
                $art = '!ss.title';
                ;
                $p += ($expr = '<%!ss.title%>', $n(ss.title)) + '</div>';
                $line = 22;
                $art = 'if ss.subs && (ss.subs.length > 0)';
                ;
                $expr = '<%if (ss.subs && (ss.subs.length > 0)) {%>';
                if (ss.subs && (ss.subs.length > 0)) {
                    ;
                    $p += '<div mxa="_zs_gallerye:c" class="pl20">';
                    $line = 24;
                    $art = 'each ss.subs as sss';
                    ;
                    $expr = '<%for (var $art_isitnco$art_i = 0, $art_objebjuiakt$art_obj = ss.subs, $art_cudszsbnge$art_c = $art_objebjuiakt$art_obj.length; $art_isitnco$art_i < $art_cudszsbnge$art_c; $art_isitnco$art_i++) {                    var sss = $art_objebjuiakt$art_obj[$art_isitnco$art_i]%>';
                    for (var $art_isitnco$art_i = 0, $art_objebjuiakt$art_obj = ss.subs, $art_cudszsbnge$art_c = $art_objebjuiakt$art_obj.length; $art_isitnco$art_i < $art_cudszsbnge$art_c; $art_isitnco$art_i++) {
                        var sss = $art_objebjuiakt$art_obj[$art_isitnco$art_i];
                        $p += '<div mxa="_zs_gallerye:d" class="_zs_gallery___test___other_update_-line _zs_gallery___test___other_update_-dot">';
                        $line = 25;
                        $art = '!sss';
                        ;
                        $p += ($expr = '<%!sss%>', $n(sss)) + '</div>';
                        $line = 26;
                        $art = '/each';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '</div>';
                    $line = 28;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 30;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 32;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 35;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxs="_zs_gallerye:B" class="_zs_gallery___test___other_update_-update"><div class="_zs_gallery___test___other_update_-ver pl20"><span class="_zs_gallery___test___other_update_-vt">历史版本</span><span class="_zs_gallery___test___other_update_-vi">···</span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/other/update.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                ver: '3.10.8',
                time: '2018-21-12',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'Avatar 组件增加',
                                subs: [
                                    'Avatar 组件增加',
                                    'Avatar 组件增加',
                                    'Avatar 组件增加'
                                ]
                            }, {
                                title: 'Avatar 组件增加'
                            }, {
                                title: 'Avatar 组件增加'
                            }]
                    }, {
                        type: 'add',
                        subs: [{
                                title: 'Avatar 组件增加',
                                subs: [
                                    'Avatar 组件增加',
                                    'Avatar 组件增加',
                                    'Avatar 组件增加'
                                ]
                            }, {
                                title: 'Avatar 组件增加',
                                subs: [
                                    'Avatar 组件增加',
                                    'Avatar 组件增加',
                                    'Avatar 组件增加'
                                ]
                            }]
                    }]
            }];
        this.updater.digest({
            list: list
        });
    }
});

});