/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/leave",["magix","mx-form/index","mx-form/validator","mx-dialog/index","mx-gtip/index","mx-dropdown/index","mx-switch/index","mx-copy/index","./hl"],(require,exports,module)=>{
/*Magix,Form,Validator,Dialog,GTip*/
require("mx-dropdown/index");
require("mx-switch/index");
require("mx-copy/index");
require("./hl");
var Magix = require("magix");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var Dialog = require("mx-dialog/index");
var GTip = require("mx-gtip/index");
var CopyText = '复制代码';
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
} ; var $g = '', $_temp, $p = '', checkboxes = $$.checkboxes, selected = $$.selected, radioes = $$.radioes, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryl:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryl:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content clearfix"><form mxv mxa="_zs_galleryl:b" class="form mb20 fl mr20"><div mxv mxa="_zs_galleryl:c" class="form-item"><div mxs="_zs_galleryl:_" class="form-label">checkbox</div><div mxv mxa="_zs_galleryl:d" class="form-content">';
    $line = 7;
    $art = 'each checkboxes as c';
    ;
    $expr = '<%for (var $art_ignrfgpqpjrb$art_i = 0, $art_cdodbqmyoqa$art_c = checkboxes.length; $art_ignrfgpqpjrb$art_i < $art_cdodbqmyoqa$art_c; $art_ignrfgpqpjrb$art_i++) {    var c = checkboxes[$art_ignrfgpqpjrb$art_i]%>';
    for (var $art_ignrfgpqpjrb$art_i = 0, $art_cdodbqmyoqa$art_c = checkboxes.length; $art_ignrfgpqpjrb$art_i < $art_cdodbqmyoqa$art_c; $art_ignrfgpqpjrb$art_i++) {
        var c = checkboxes[$art_ignrfgpqpjrb$art_i];
        $p += '<label mxv mxa="_zs_galleryl:e" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 12;
        $art = ':selected.checkboxes{refresh:true,required:[true,\'必选\']}';
        ;
        $p += '{p:\'selected.checkboxes\',f:{refresh:true,required:[true,\'必选\']}}]" type="checkbox" class="checkbox" name="cb" value="';
        $line = 11;
        $art = '=c';
        ;
        $p += ($expr = '<%=c%>', $e(c)) + '"/>';
        $line = 13;
        $art = '=c';
        ;
        $p += ($expr = '<%=c%>', $e(c)) + '</label>';
        $line = 15;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_galleryl:f" class="form-item"><div mxs="_zs_galleryl:a" class="form-label">radio</div><div mxv mxa="_zs_galleryl:g" class="form-content">';
    $line = 21;
    $art = 'each radioes as r';
    ;
    $expr = '<%for (var $art_iqncibgotf$art_i = 0, $art_curakjrwv$art_c = radioes.length; $art_iqncibgotf$art_i < $art_curakjrwv$art_c; $art_iqncibgotf$art_i++) {    var r = radioes[$art_iqncibgotf$art_i]%>';
    for (var $art_iqncibgotf$art_i = 0, $art_curakjrwv$art_c = radioes.length; $art_iqncibgotf$art_i < $art_curakjrwv$art_c; $art_iqncibgotf$art_i++) {
        var r = radioes[$art_iqncibgotf$art_i];
        $p += '<label mxv mxa="_zs_galleryl:h" class="mr30"><input mxe="' + $viewId + '_1" mxc="[';
        $line = 26;
        $art = ':selected.radio{refresh:true}';
        ;
        $p += '{p:\'selected.radio\',f:{refresh:true}}]" type="radio" class="radio" name="magix" value="';
        $line = 25;
        $art = '=r';
        ;
        $p += ($expr = '<%=r%>', $e(r)) + '"/>';
        $line = 27;
        $art = '=r';
        ;
        $p += ($expr = '<%=r%>', $e(r)) + '</label>';
        $line = 29;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_galleryl:i" class="form-item"><div mxs="_zs_galleryl:b" class="form-label">下拉框单选</div><div mxv mxa="_zs_galleryl:j" class="form-content"><div mxv="selected" mxe="' + $viewId + '_2" mxc="[';
    $line = 37;
    $art = ':selected.single{refresh:true,required:[true,\'必选\']}';
    ;
    $p += '{p:\'selected.single\',f:{refresh:true,required:[true,\'必选\']},a:\'selected\'}]" class="w220" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=';
    $line = 37;
    $art = ':selected.single{refresh:true,required:[true,\'必选\']}';
    ;
    $p += ($expr = '<%@selected.single%>', $i($$ref, selected.single)) + '&list=';
    $line = 38;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div></div><div mxv mxa="_zs_galleryl:k" class="form-item"><div mxs="_zs_galleryl:c" class="form-label">输入框</div><div mxv mxa="_zs_galleryl:l" class="form-content"><input mxe="' + $viewId + '_3" mxc="[';
    $line = 45;
    $art = ':selected.str{refresh:true,required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}';
    ;
    $p += '{p:\'selected.str\',f:{refresh:true,required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}}]" class="input w220" placeholder="正则：汉字/字母/数字/下划线" value="';
    $line = 45;
    $art = ':selected.str{refresh:true,required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}';
    ;
    $p += ($expr = '<%=selected.str%>', $e(selected.str)) + '"/></div></div><div mxa="_zs_galleryl:m" class="form-item"><div mxs="_zs_galleryl:d" class="form-label">开关</div><div mxa="_zs_galleryl:n" class="form-content"><span mxe="' + $viewId + '_4_' + ($expr = '<%="switch"%>', $e("switch")) + '" mxc="[';
    $line = 52;
    $art = ':selected.switch{refresh:true}';
    ;
    $p += '{p:\'selected.' + ($expr = '<%="switch"%>', $e("switch")) + '\',f:{refresh:true},a:\'state\'}]" mx-view="mx-switch/index?state=';
    $line = 52;
    $art = ':selected.switch{refresh:true}';
    ;
    $p += ($expr = '<%@selected["switch"]%>', $i($$ref, selected["switch"])) + '"></span></div></div><div mxs="_zs_galleryl:e" class="form-item"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="' + $viewId + 'save()">保存表单</a></div></form></div><div mxa="_zs_galleryl:o" class="clearfix"><div mxa="_zs_galleryl:p" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryl:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryl:q" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 66;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryl:g" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n12312\n            </pre></div><div mxa="_zs_galleryl:r" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryl:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryl:s" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 77;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryl:g" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 80;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n123\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/leave.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator, Dialog, GTip],
    init: function () {
        var that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText
        });
        that.leaveTip('页面有变化且未保存，确认离开吗？', function () {
            return that.updater.altered();
        });
    },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                area: 1312,
                checkboxes: ['checkbox1'],
                radio: 'radio2',
                single: '',
                str: '',
                "switch": true //开关
            }
        });
        this.updater.snapshot();
    },
    'save<click>': function () {
        this.updater.snapshot();
    },
    leaveConfirm: function (resolve, reject, msg) {
        var that = this;
        that.mxDialog('examples/leave-dlg', {
            title: '系统提示',
            content: msg,
            enterCallback: function (save) {
                if (save) {
                    that.gtip('数据保存中...', 1500);
                    setTimeout(resolve, 1500);
                }
                else {
                    resolve();
                }
            },
            cancelCallback: reject
        }, {
            width: 400
        });
    },
    'done<success>': function (e) {
        var that = this;
        var id = e.params.id;
        var data = {};
        data['text' + id] = '<i class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip-icon">&#xe630;</i>复制成功';
        that.updater.digest(data);
        setTimeout(function () {
            data['text' + id] = CopyText;
            that.updater.digest(data);
        }, 1000);
    }
});

});