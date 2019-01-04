/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/index",["magix","mx-tree/util","../mx-medusa/util","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,Util,I18n,Monitor*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var Util = require("mx-tree/util");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_galleryz","._zs_gallerydf{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_gallerye{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_gallerye{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryf{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryf{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryg{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryg{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryh{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryh{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryi{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryi{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerydg{position:relative;width:100%;height:32px;padding:0 25px 0 10px;border-radius:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:30px;transition:all .25s;border:1px solid #e6e6e6}._zs_gallerydg ._zs_gallerydh{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._zs_gallerydg ._zs_gallerydh._zs_gallerydi{color:#999}._zs_gallerydg ._zs_gallerydj{position:absolute;right:0;top:50%;width:28px;height:28px;font-size:28px;line-height:28px;margin-top:-14px;color:#e6e6e6;transition:all .25s}._zs_gallerydg._zs_gallerydk ._zs_gallerydj{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerydl{display:none;position:absolute;left:0;top:100%;z-index:99;margin-top:10px;border-radius:4px;background-color:#fff;white-space:nowrap;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydl._zs_gallerydk{display:block;-webkit-animation:_zs_gallerye .25s ease-out;animation:_zs_gallerye .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_gallerydm{display:inline-block;min-width:100px;height:168px;overflow-y:auto;vertical-align:top;border-right:1px solid #e6e6e6}._zs_gallerydm:last-child{border-right:0}._zs_gallerydn{position:relative;height:28px;padding-right:26px;padding-left:10px;line-height:28px;transition:background-color .25s,color .25s;cursor:pointer}._zs_gallerydn ._zs_gallerydo{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._zs_gallerydn ._zs_gallerydp{position:absolute;right:0;top:50%;width:28px;height:28px;font-size:24px;line-height:28px;margin-top:-14px;color:#999;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}._zs_gallerydn:hover{background-color:#f0f0f0}._zs_gallerydn._zs_gallerydq{color:#4d7fff}._zs_gallerydn._zs_gallerydq,._zs_gallerydn._zs_gallerydq:hover{background-color:#f6f9ff}[mx-view*=\"mx-cascade/index\"]{position:relative;display:inline-block;min-width:100px;vertical-align:middle}[mx-view*=\"mx-cascade/index\"]:hover ._zs_gallerydg{border-color:#ccc}[mx-view*=\"mx-cascade/index\"]:hover ._zs_gallerydg ._zs_gallerydj{color:#ccc}[mx-view*=\"mx-cascade/index\"][mx-disabled] ._zs_gallerydg,[mx-view*=\"mx-cascade/index\"][mx-disabled]:hover ._zs_gallerydg{border-color:#e6e6e6;color:#999;background-color:#eee;cursor:not-allowed}[mx-view*=\"mx-cascade/index\"][mx-disabled] ._zs_gallerydg ._zs_gallerydj,[mx-view*=\"mx-cascade/index\"][mx-disabled]:hover ._zs_gallerydg ._zs_gallerydj{color:#ccc}");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, disabled = $$.disabled, selectedValue = $$.selectedValue, name = $$.name, selectedText = $$.selectedText, groups = $$.groups, viewId = $$.viewId, textKey = $$.textKey; $p += '<div class="_zs_gallerydg '; if (expand) {
    ;
    $p += ' _zs_gallerydk ';
} ; $p += '" '; if (!disabled) {
    ;
    $p += ' mx-click="' + $viewId + '__n()" ';
} ; $p += '><span class="_zs_gallerydh '; if (selectedValue === '') {
    ;
    $p += ' _zs_gallerydi ';
} ; $p += '">'; if (name) {
    ;
    $p += $e(name) + '：';
} ; $p += ' ' + $e(selectedText) + '</span><span mxs="_zs_gallery/:_" class="mc-iconfont _zs_gallerydj">&#xe692;</span></div>'; if (!disabled) {
    ;
    $p += '<div class="_zs_gallerydl ';
    if (expand) {
        ;
        $p += ' _zs_gallerydk ';
    }
    ;
    $p += ' clearfix">';
    for (var gIndex = 0, $art_cbxavqjho$art_c = groups.length; gIndex < $art_cbxavqjho$art_c; gIndex++) {
        var list = groups[gIndex];
        $p += '<div class="_zs_gallerydm" id="' + $e(viewId) + '_g_' + $e(gIndex) + '">';
        for (var iIndex = 0, $art_coifrjajrc$art_c = list.length; iIndex < $art_coifrjajrc$art_c; iIndex++) {
            var item = list[iIndex];
            $p += '<div class="_zs_gallerydn ';
            if (item.cur) {
                ;
                $p += ' _zs_gallerydq ';
            }
            ;
            $p += '" mx-click="' + $viewId + '__aa({gIndex:' + $e(gIndex) + ',iIndex:' + $e(iIndex) + '})"><span mxa="_zs_gallery/:_" class="_zs_gallerydo">' + $e(item[textKey]) + '</span>';
            if (item.children && item.children.length) {
                ;
                $p += '<span mxs="_zs_gallery/:a" class="mc-iconfont _zs_gallerydp">&#xe692;</span>';
            }
            ;
            $p += '</div>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '</div>';
} ; return $p; },
    init: function (extra) {
        var me = this;
        me['__i'] = extra;
        Monitor['__f']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
        });
    },
    render: function () {
        var me = this;
        var ops = me['__i'];
        var valueKey = ops.valueKey || 'value';
        var textKey = ops.textKey || 'text';
        var parentKey = ops.parentKey || 'pValue';
        // 是否可操作
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        var info = Util.listToTree(ops.list, valueKey, parentKey, false);
        var map = info.map, list = info.list;
        me.updater.set({
            viewId: me.id,
            disabled: disabledNode && (disabledNode.length > 0),
            placeholder: ops.placeholder || I18n['choose'],
            valueKey: valueKey,
            textKey: textKey,
            parentKey: parentKey,
            map: map,
            list: list,
            expand: false
        });
        var selectedValue = ops.selected || '';
        var data = me['__a_'](selectedValue);
        // 确认选择的时候再改
        data.selectedText = data.selectedTexts.join('/');
        data.selectedValue = selectedValue;
        me.updater.digest(data);
        me['__j'] = $('#' + me.id);
        me['__j'].val(selectedValue);
    },
    '__a_': function (selectedValue) {
        var updater = this.updater;
        var valueKey = updater.get('valueKey'), textKey = updater.get('textKey'), parentKey = updater.get('parentKey'), placeholder = updater.get('placeholder'), map = updater.get('map'), list = updater.get('list');
        var selectedTexts = [], selectedValues = [], groups = [];
        if (!selectedValue || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];
            groups = [list];
        }
        else {
            // 已选中
            var _loop_1 = function (v) {
                var i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (!i[parentKey]) {
                    // 根节点
                    list.forEach(function (s) {
                        s.cur = false;
                    });
                    i.cur = true;
                    groups.unshift(list);
                }
                else {
                    var siblings = map[i[parentKey]].children;
                    siblings.forEach(function (s) {
                        s.cur = false;
                    });
                    i.cur = true;
                    groups.unshift(siblings);
                    _loop_1(i[parentKey]);
                }
            };
            _loop_1(selectedValue);
        }
        return {
            groups: groups,
            selectedTexts: selectedTexts,
            selectedValues: selectedValues
        };
    },
    '__k': function (node) {
        return Magix.inside(node, this.id);
    },
    '__m': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['__g'](me);
        }
    },
    '__n<click>': function (e) {
        var me = this;
        var updater = me.updater;
        var expand = updater.get('expand'), selectedValue = updater.get('selectedValue');
        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            var data = me['__a_'](selectedValue);
            data.expand = true;
            updater.digest(data);
            Monitor['__p'](me);
        }
    },
    '__aa<click>': function (e) {
        var me = this;
        var updater = me.updater;
        var selectedValues = updater.get('selectedValues'), valueKey = updater.get('valueKey');
        var gIndex = e.params.gIndex, iIndex = e.params.iIndex;
        var groups = updater.get('groups');
        var list = groups[gIndex];
        var item = list[iIndex];
        item.children = item.children || [];
        if (item.children.length > 0) {
            // 还有子节点
            list.forEach(function (g) {
                g.cur = false;
            });
            item.cur = true;
            groups = groups.slice(0, gIndex + 1);
            // 恢复选中态
            item.children.forEach(function (c) {
                c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
            });
            groups.push(item.children);
            updater.digest({
                groups: groups
            });
        }
        else {
            // 选中叶子节点
            var selectedValue = item[valueKey];
            var data = me['__a_'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            updater.digest(data);
            var event = $.Event('change', {
                item: item,
                selected: selectedValue
            });
            me['__j'].val(selectedValue).trigger(event);
            me['__m']();
        }
    }
});

});