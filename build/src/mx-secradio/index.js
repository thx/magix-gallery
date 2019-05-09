/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-secradio/index",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-secradio_index_",":root {\n  --mx-secradio-oper-size: calc(var(--font-size) + 2px);\n}\n._zs_gallery_mx-secradio_index_-line {\n  position: relative;\n  height: 32px;\n  line-height: 32px;\n  transition: height 0.2s;\n  overflow: hidden;\n}\n._zs_gallery_mx-secradio_index_-line ._zs_gallery_mx-secradio_index_-oper {\n  width: var(--mx-tree-oper-size);\n  height: var(--mx-tree-oper-size);\n  margin-right: 5px;\n  line-height: var(--mx-tree-oper-size);\n  font-size: var(--mx-tree-oper-size);\n  transition: color 0.2s;\n  cursor: pointer;\n  color: #ccc;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-secradio_index_-line ._zs_gallery_mx-secradio_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-secradio_index_-all {\n  cursor: pointer;\n  color: #999;\n}\n._zs_gallery_mx-secradio_index_-sub {\n  padding-left: calc(var(--mx-secradio-oper-size) + 5px);\n}\n._zs_gallery_mx-secradio_index_-sub._zs_gallery_mx-secradio_index_-close {\n  height: 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', needExpand = $$.needExpand, close = $$.close, text = $$.text, prefix = $$.prefix, maxHeight = $$.maxHeight, list = $$.list, parentPrefix = $$.parentPrefix, viewId = $$.viewId, selected = $$.selected; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if needExpand';
    ;
    $expr = '<%if (needExpand) {%>';
    if (needExpand) {
        ;
        $p += '<div mxa="_zs_gallerydD:_" class="_zs_gallery_mx-secradio_index_-line _zs_gallery_mx-secradio_index_-all" mx-click="' + $viewId + '@{toggleAll}()">';
        $line = 3;
        $art = 'if close';
        ;
        $expr = '<%if (close) {%>';
        if (close) {
            ;
            $line = 3;
            $art = '=text.expand';
            ;
            $p += ($expr = '<%=text.expand%>', $e(text.expand)) + '';
            $line = 3;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $line = 3;
            $art = '=text.collapse';
            ;
            $p += ($expr = '<%=text.collapse%>', $e(text.collapse)) + '';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $line = 3;
        $art = 'if prefix';
        ;
        $expr = '<%if (prefix) {%>';
        if (prefix) {
            ;
            $line = 3;
            $art = '=prefix';
            ;
            $p += ($expr = '<%=prefix%>', $e(prefix)) + '';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 5;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxv class="scroll-y" ';
    $line = 6;
    $art = 'if maxHeight';
    ;
    $expr = '<%if (maxHeight) {%>';
    if (maxHeight) {
        ;
        $p += ' style="max-height: ';
        $line = 6;
        $art = '=maxHeight';
        ;
        $p += ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;" ';
        $line = 6;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>';
    $line = 7;
    $art = 'each list as item itemIndex';
    ;
    $expr = '<%for (var itemIndex = 0, $art_cvzzckxwz$art_c = list.length; itemIndex < $art_cvzzckxwz$art_c; itemIndex++) {    var item = list[itemIndex]%>';
    for (var itemIndex = 0, $art_cvzzckxwz$art_c = list.length; itemIndex < $art_cvzzckxwz$art_c; itemIndex++) {
        var item = list[itemIndex];
        $p += '<div mxa="_zs_gallerydD:a" class="_zs_gallery_mx-secradio_index_-line"><label mx-click="' + $viewId + '@{toggleOne}({index:';
        $line = 9;
        $art = '=itemIndex';
        ;
        $p += ($expr = '<%=itemIndex%>', $e(itemIndex)) + '})">';
        $line = 10;
        $art = 'if needExpand';
        ;
        $expr = '<%if (needExpand) {%>';
        if (needExpand) {
            ;
            $p += '<i mxa="_zs_gallerydD:b" class="mc-iconfont _zs_gallery_mx-secradio_index_-oper">';
            $line = 12;
            $art = 'if item.close';
            ;
            $expr = '<%if (item.close) {%>';
            if (item.close) {
                ;
                $p += '&#xe65b;';
                $line = 12;
                $art = 'else';
                ;
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += '&#xe65a;';
                $line = 12;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</i>';
            $line = 14;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 15;
        $art = 'if parentPrefix';
        ;
        $expr = '<%if (parentPrefix) {%>';
        if (parentPrefix) {
            ;
            $line = 15;
            $art = '=parentPrefix';
            ;
            $p += ($expr = '<%=parentPrefix%>', $e(parentPrefix)) + '：';
            $line = 15;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $line = 15;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label></div>';
        $line = 18;
        $art = 'each item.subs as sub';
        ;
        $expr = '<%for (var $art_imnkydrkr$art_i = 0, $art_objzfpnypng$art_obj = item.subs, $art_cxdmnyfe$art_c = $art_objzfpnypng$art_obj.length; $art_imnkydrkr$art_i < $art_cxdmnyfe$art_c; $art_imnkydrkr$art_i++) {        var sub = $art_objzfpnypng$art_obj[$art_imnkydrkr$art_i]%>';
        for (var $art_imnkydrkr$art_i = 0, $art_objzfpnypng$art_obj = item.subs, $art_cxdmnyfe$art_c = $art_objzfpnypng$art_obj.length; $art_imnkydrkr$art_i < $art_cxdmnyfe$art_c; $art_imnkydrkr$art_i++) {
            var sub = $art_objzfpnypng$art_obj[$art_imnkydrkr$art_i];
            $p += '<div mxv class="_zs_gallery_mx-secradio_index_-line _zs_gallery_mx-secradio_index_-sub ';
            $line = 19;
            $art = 'if item.close';
            ;
            $expr = '<%if (item.close) {%>';
            if (item.close) {
                ;
                $p += ' _zs_gallery_mx-secradio_index_-close ';
                $line = 19;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"><label mxv><input class="radio" type="radio" value="';
            $line = 22;
            $art = '=sub.value';
            ;
            $p += ($expr = '<%=sub.value%>', $e(sub.value)) + '" name="';
            $line = 23;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_radio" ';
            $line = 24;
            $art = 'if (selected == sub.value)';
            ;
            $expr = '<%if (selected == sub.value) {%>';
            if (selected == sub.value) {
                ;
                $p += ' checked="true" ';
                $line = 24;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-change="' + $viewId + '@{check}({value:';
            $line = 25;
            $art = '=sub.value';
            ;
            $p += ($expr = '<%=sub.value%>', $e(sub.value)) + '})"/>';
            $line = 26;
            $art = 'if prefix';
            ;
            $expr = '<%if (prefix) {%>';
            if (prefix) {
                ;
                $line = 26;
                $art = '=prefix';
                ;
                $p += ($expr = '<%=prefix%>', $e(prefix)) + '：';
                $line = 26;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $line = 26;
            $art = '=sub.text';
            ;
            $p += ($expr = '<%=sub.text%>', $e(sub.text)) + '</label></div>';
            $line = 29;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 30;
        $art = '/each';
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
    msg += $expr + '\r\n\tat file:mx-secradio/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        this.$map = {};
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var needExpand = (extra.needExpand + '' !== 'false');
        var close = (extra.close + '' === 'true');
        // 没有展开收起的时候一定是展开的
        if (!needExpand) {
            close = false;
        }
        var parentTextKey = extra.parentTextKey || 'text', textKey = extra.textKey || 'text', valueKey = extra.valueKey || 'value', subKey = extra.subKey || 'subs';
        var list = [];
        (extra.list || []).forEach(function (origin) {
            var item = {
                text: origin[parentTextKey],
                subs: origin[subKey].map(function (sub) {
                    return {
                        text: sub[textKey],
                        value: sub[valueKey]
                    };
                })
            };
            item.pValue = that['@{getPValue}'](item);
            item.close = that.$map[item.pValue] || close;
            list.push(item);
        });
        var selected = extra.selected || '';
        var parentPrefix = extra.parentPrefix || '', prefix = extra.prefix || '';
        var maxHeight = extra.maxHeight || '';
        that.updater.set({
            viewId: that.id,
            needExpand: needExpand,
            close: close,
            parentPrefix: parentPrefix,
            prefix: prefix,
            maxHeight: maxHeight,
            list: list,
            selected: selected,
            text: {
                expand: I18n['secradio.expand'],
                collapse: I18n['secradio.collapse']
            }
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
        var selected = this.updater.get('selected');
        $('#' + this.id).val(selected);
    },
    '@{getPValue}': function (item) {
        var subValues = item.subs.map(function (sub) {
            return sub.value + '';
        });
        return subValues.sort().join('_');
    },
    '@{toggleAll}<click>': function (event) {
        var that = this;
        var close = !this.updater.get('close');
        var list = this.updater.get('list');
        list.forEach(function (item) {
            item.close = close;
            if (close) {
                that.$map[item.pValue] = true;
            }
            else {
                delete that.$map[item.pValue];
            }
        });
        that.updater.digest({
            close: close,
            list: list
        });
    },
    '@{toggleOne}<click>': function (event) {
        var that = this;
        var index = event.params.index;
        var close = true, list = this.updater.get('list');
        list.forEach(function (item, i) {
            if (index == i) {
                item.close = !item.close;
                if (item.close) {
                    that.$map[item.pValue] = true;
                }
                else {
                    delete that.$map[item.pValue];
                }
            }
            close = close && item.close;
        });
        that.updater.digest({
            close: close,
            list: list
        });
    },
    '@{check}<change>': function (event) {
        var selected = event.params.value;
        this.updater.digest({
            selected: selected
        });
        $('#' + this.id).val(selected);
    }
});

});