/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-secradio/index",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_galleryat","._zs_gallerykY{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykZ{position:relative;height:32px;line-height:32px;transition:height .2s;overflow:hidden}._zs_gallerykZ ._zs_galleryl_{width:20px;cursor:pointer;font-size:14px;color:#ccc;transition:color .2s}._zs_gallerykZ ._zs_galleryl_:hover{color:#666}._zs_galleryla{cursor:pointer;color:#999}._zs_gallerylb{padding-left:20px}._zs_gallerylb._zs_gallerylc{height:0}");
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
} ; var $g = '', $_temp, $p = '', needExpand = $$.needExpand, close = $$.close, text = $$.text, prefix = $$.prefix, maxHeight = $$.maxHeight, list = $$.list, parentPrefix = $$.parentPrefix, viewId = $$.viewId, selected = $$.selected; if (needExpand) {
    ;
    $p += '<div mxa="_zs_galleryc):_" class="_zs_gallerykZ _zs_galleryla" mx-click="' + $viewId + '__cT()">';
    if (close) {
        ;
        $p += $e(text.expand);
    }
    else {
        ;
        $p += $e(text.collapse);
    }
    ;
    if (prefix) {
        ;
        $p += $e(prefix);
    }
    ;
    $p += '</div>';
} ; $p += '<div mxv class="scroll-y" '; if (maxHeight) {
    ;
    $p += ' style="max-height: ' + $e(maxHeight) + 'px;" ';
} ; $p += '>'; for (var itemIndex = 0, $art_cexihlfwk$art_c = list.length; itemIndex < $art_cexihlfwk$art_c; itemIndex++) {
    var item = list[itemIndex];
    $p += '<div mxa="_zs_galleryc):a" class="_zs_gallerykZ"><label mx-click="' + $viewId + '__cU({index:' + $e(itemIndex) + '})">';
    if (needExpand) {
        ;
        $p += '<i mxa="_zs_galleryc):b" class="mc-iconfont _zs_galleryl_">';
        if (item.close) {
            ;
            $p += '&#xe65b;';
        }
        else {
            ;
            $p += '&#xe65a;';
        }
        ;
        $p += '</i>';
    }
    ;
    $p += ' ';
    if (parentPrefix) {
        ;
        $p += ' ' + $e(parentPrefix) + '： ';
    }
    ;
    $p += ' ' + $e(item.text) + '</label></div>';
    for (var $art_ibjbteqi$art_i = 0, $art_objsqspamd$art_obj = item.subs, $art_cwprkztuvkr$art_c = $art_objsqspamd$art_obj.length; $art_ibjbteqi$art_i < $art_cwprkztuvkr$art_c; $art_ibjbteqi$art_i++) {
        var sub = $art_objsqspamd$art_obj[$art_ibjbteqi$art_i];
        $p += '<div mxv class="_zs_gallerykZ _zs_gallerylb ';
        if (item.close) {
            ;
            $p += ' _zs_gallerylc ';
        }
        ;
        $p += '"><label mxv><input class="radio" type="radio" value="' + $e(sub.value) + '" name="' + $e(viewId) + '_radio" ';
        if (selected == sub.value) {
            ;
            $p += ' checked="true" ';
        }
        ;
        $p += ' mx-change="' + $viewId + '__ca({value:' + $e(sub.value) + '})"/>';
        if (prefix) {
            ;
            $p += ' ' + $e(prefix) + '： ';
        }
        ;
        $p += ' ' + $e(sub.text) + '</label></div>';
    }
    ;
    $p += ' ';
} ; $p += '</div>'; return $p; },
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
            item.pValue = that['__cS'](item);
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
    '__cS': function (item) {
        var subValues = item.subs.map(function (sub) {
            return sub.value + '';
        });
        return subValues.sort().join('_');
    },
    '__cT<click>': function (event) {
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
    '__cU<click>': function (event) {
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
    '__ca<change>': function (event) {
        var selected = event.params.value;
        this.updater.digest({
            selected: selected
        });
        $('#' + this.id).val(selected);
    }
});

});