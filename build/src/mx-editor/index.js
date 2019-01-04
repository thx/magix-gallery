/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryG","._zs_galleryeD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeE ._zs_galleryeF{display:none}._zs_galleryeE ._zs_galleryeG{display:inline-block;word-break:break-all}._zs_galleryeE ._zs_galleryeG ._zs_galleryeH{opacity:0;position:relative;top:2px;left:2px;color:#ccc;cursor:pointer}._zs_galleryeE ._zs_galleryeG:hover ._zs_galleryeH{opacity:1}._zs_galleryeE._zs_galleryeI ._zs_galleryeF{display:inline-block}._zs_galleryeE._zs_galleryeI ._zs_galleryeG{display:none}");
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
} ; var $g = '', $_temp, $p = '', editing = $$.editing, small = $$.small, width = $$.width, viewId = $$.viewId, content = $$.content, rules = $$.rules, dis = $$.dis; $p += '<div mxv class="_zs_galleryeE '; if (editing) {
    ;
    $p += ' _zs_galleryeI ';
} ; $p += '"><input mxe="' + $viewId + '_0" mxc="[{p:\'content\',f:\'' + $i($$ref, rules) + '\'}]" class="input '; if (small) {
    ;
    $p += ' input-small ';
} ; $p += ' _zs_galleryeF" style="width: ' + $e(width) + 'px;" id="' + $e(viewId) + '_input" value="' + $e(content) + '" mx-keyup="' + $viewId + '__bV()" mx-focusout="' + $viewId + '__bV()"/><div mxa="_zs_gallerya9:_" class="_zs_galleryeG">' + $n(dis) + '<i mxs="_zs_gallerya9:_" class="mc-iconfont operations _zs_galleryeH" mx-click="' + $viewId + '__n()">&#xe698;</i></div></div>'; return $p; },
    mixins: [Form, Validator],
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        that.on('destroy', function () {
            clearTimeout(that['__bT']);
        });
    },
    assign: function (extra) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var rules = extra.rules || {}, content = extra.content, small = (/^true$/i).test(extra.small), tmpl = extra.tmpl || Placeholder;
        that['__bU'] = content;
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
    '__n<click>': function (e) {
        e.preventDefault();
        this.updater.digest({
            editing: true
        });
        $('#' + this.id + '_input').focus();
    },
    '__bV<keyup>': function (e) {
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
    '__bV<focusout>': function (e) {
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
        if (that['__bU'] != val) {
            $('#' + that.id).trigger({
                type: 'edit',
                editText: val
            });
        }
    }
});

});