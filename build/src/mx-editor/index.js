/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/index",["magix","mx-form/index","mx-form/validator"],(require,exports,module)=>{
/*Magix,Form,Validator*/

/**
 * 通过样式控制节点显示隐藏而不是直接节点有没有
 * 同时触发keyup和fucosout的时候，一个执行了可能导致input节点没有，而另一个获取到undefined
 */
var Magix = require("magix");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
Magix.applyStyle("_zs_gallery_mx-editor_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-editor_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-editor_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-input {\n  display: none;\n}\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-content {\n  display: inline-block;\n  word-break: break-all;\n}\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-content ._zs_gallery_mx-editor_index_-editor-oper {\n  opacity: 0;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  color: #ccc;\n  cursor: pointer;\n}\n._zs_gallery_mx-editor_index_-editor ._zs_gallery_mx-editor_index_-editor-content:hover ._zs_gallery_mx-editor_index_-editor-oper {\n  opacity: 1;\n}\n._zs_gallery_mx-editor_index_-editor._zs_gallery_mx-editor_index_-editor-on ._zs_gallery_mx-editor_index_-editor-input {\n  display: inline-block;\n}\n._zs_gallery_mx-editor_index_-editor._zs_gallery_mx-editor_index_-editor-on ._zs_gallery_mx-editor_index_-editor-content {\n  display: none;\n}\n");
var Placeholder = '${content}';
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
} ; var $g = '', $_temp, $p = '', editing = $$.editing, small = $$.small, width = $$.width, viewId = $$.viewId, content = $$.content, rules = $$.rules, dis = $$.dis; var $expr, $art, $line; try {
    $p += '<div mxv class="_zs_gallery_mx-editor_index_-editor ';
    $line = 1;
    $art = 'if editing';
    ;
    $expr = '<%if (editing) {%>';
    if (editing) {
        ;
        $p += ' _zs_gallery_mx-editor_index_-editor-on ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 7;
    $art = ':content&rules';
    ;
    $p += '{p:\'content\',f:\'' + ($expr = '<%@ rules%>', $i($$ref, rules)) + '\'}]" class="input ';
    $line = 3;
    $art = 'if small';
    ;
    $expr = '<%if (small) {%>';
    if (small) {
        ;
        $p += ' input-small ';
        $line = 3;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' _zs_gallery_mx-editor_index_-editor-input" style="width: ';
    $line = 4;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + 'px;" id="';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_input" value="';
    $line = 6;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '" mx-keyup="' + $viewId + '@{out}()" mx-focusout="' + $viewId + '@{out}()"/><div mxa="_zs_galleryaO:_" class="_zs_gallery_mx-editor_index_-editor-content">';
    $line = 11;
    $art = '!dis';
    ;
    $p += ($expr = '<%!dis%>', $n(dis)) + '<i mxs="_zs_galleryaO:_" class="mc-iconfont operations _zs_gallery_mx-editor_index_-editor-oper" mx-click="' + $viewId + '@{show}()">&#xe698;</i></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/index.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        that.on('destroy', function () {
            clearTimeout(that['@{out.timer}']);
        });
    },
    assign: function (extra) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var rules = extra.rules || {}, content = extra.content, small = (/^true$/i).test(extra.small), tmpl = extra.tmpl || Placeholder;
        that['@{old.content}'] = content;
        that.updater.set({
            viewId: that.id,
            tmpl: tmpl,
            dis: tmpl.replace(Placeholder, content),
            content: content,
            rules: rules,
            small: small,
            width: extra.width || 140,
            editing: false
        });
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
        this.updater.digest();
    },
    '@{show}<click>': function (e) {
        e.preventDefault();
        this.updater.digest({
            editing: true
        });
        $('#' + this.id + '_input').focus();
    },
    '@{out}<keyup>': function (e) {
        var that = this;
        var valid = that.isValid();
        if ((e.keyCode == 13) && valid) {
            var val = e.target.value;
            var tmpl = that.updater.get('tmpl');
            that.updater.digest({
                editing: false,
                dis: tmpl.replace(Placeholder, val),
                content: val
            });
            // 只触发一次trigger，此处不外抛事件
            // let val = that.updater.get('content');
            // if (that['@{old.content}'] != val) {
            //     $('#' + that.id).trigger({
            //         type: 'edit',
            //         editText: val
            //     })
            // }
        }
    },
    '@{out}<focusout>': function (e) {
        e.stopPropagation();
        var that = this;
        var valid = that.isValid();
        if (!valid) {
            return;
        }
        var val = e.target.value;
        var tmpl = that.updater.get('tmpl');
        that.updater.digest({
            editing: false,
            dis: tmpl.replace(Placeholder, val),
            content: val
        });
        // 只触发一次trigger
        var val = that.updater.get('content');
        if (that['@{old.content}'] != val) {
            $('#' + that.id).trigger({
                type: 'edit',
                editText: val
            });
        }
    }
});

});