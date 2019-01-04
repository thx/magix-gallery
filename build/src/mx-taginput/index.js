/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/index",["magix","$","../mx-medusa/util","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,I18n,Monitor*/

/*md5:e0cdda10a9168373e40202f1f05c37c9*/
var Magix = require("magix");
var $ = require("$");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_galleryaD","._zs_gallerymG{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH{position:relative;height:auto;border:1px solid #e6e6e6;border-radius:4px;padding:2px 6px;cursor:text;transition:border-color .25s}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH:hover{border-color:#ccc}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymI,[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymJ,[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymK{height:22px;line-height:22px}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymJ{position:absolute;left:10px;top:50%;margin-top:-11px;color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymI,[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymK{float:left;margin-top:2px;margin-bottom:2px}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymI{float:left;position:relative;max-width:220px;padding-right:26px;padding-left:6px;margin-right:4px;background-color:#eee;border-radius:4px;cursor:pointer;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymI ._zs_gallerymL{position:absolute;top:0;right:0;height:100%;width:20px;line-height:22px;text-align:center;font-size:12px;font-weight:700;color:#ccc;transition:color .25s;border-left:1px solid #fff}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymI ._zs_gallerymL:hover{color:#999}[mx-view*=\"mx-taginput/index\"] ._zs_gallerymH ._zs_gallerymK{padding:0;border:none;outline:none;background:transparent}[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallerymH{cursor:not-allowed;background-color:#fafafa;border-color:#e6e6e6}[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallerymH:hover{border-color:#e6e6e6}[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallerymI{cursor:not-allowed}[mx-view*=\"mx-taginput/index\"][mx-disabled] ._zs_gallerymI ._zs_gallerymL:hover{color:#ccc}");
Magix.applyStyle("_zs_galleryax","._zs_gallerylP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerylQ{display:none;position:absolute;top:100%;z-index:99;min-width:100%;max-height:300px;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-y:auto;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylQ ._zs_gallerylR{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerylQ ._zs_gallerylR._zs_gallerylS,._zs_gallerylQ ._zs_gallerylR:hover{background-color:#f0f0f0}._zs_gallerylQ ._zs_gallerylR._zs_gallerylT,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:active,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:focus,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerylQ._zs_gallerylU{display:block;-webkit-animation:_zs_galleryF .25s ease-out;animation:_zs_galleryF .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}");
var MinWidth = 10;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, items = $$.items, placeholder = $$.placeholder, inputWidth = $$.inputWidth, iv = $$.iv, disabled = $$.disabled, suggestLeft = $$.suggestLeft, show = $$.show, loading = $$.loading, suggest = $$.suggest, emptyText = $$.emptyText; $p += '<div mxv class="_zs_gallerymH unselectable clearfix" mx-click="' + $viewId + '__eL()" id="ipt_' + $e(viewId) + '">'; if (!items.length) {
    ;
    $p += '<span mxa="_zs_galleryd?:_" class="_zs_gallerymJ">' + $e(placeholder) + '</span>';
} ; $p += ' '; if (items.length) {
    ;
    $p += ' ';
    for (var idx = 0, $art_cunfxcckgtjf$art_c = items.length; idx < $art_cunfxcckgtjf$art_c; idx++) {
        var one = items[idx];
        $p += '<span mxa="_zs_galleryd?:a" class="_zs_gallerymI clearfix" mx-contextmenu="' + $viewId + 'prevent()">' + $e(one.text) + '<i class="mc-iconfont _zs_gallerymL" mx-click="' + $viewId + '__eO({idx:' + $e(idx) + '})">&#xe603;</i></span>';
    }
    ;
    $p += ' ';
} ; $p += '<input class="_zs_gallerymK" autocomplete="off" style="width: ' + $e(inputWidth) + 'px;" value="' + $e(iv) + '" mx-keydown="' + $viewId + '__ca()" mx-keyup="' + $viewId + '__ca()" mx-paste="' + $viewId + '__ca()" mx-focusin="' + $viewId + '__ca()" mx-focusout="' + $viewId + '__l()" mx-change="' + $viewId + '__l()" '; if (disabled) {
    ;
    $p += ' disabled="true" ';
} ; $p += '/>'; if (!disabled) {
    ;
    $p += '<ul id="ul_' + $e(viewId) + '" style="left: ' + $e(suggestLeft) + 'px;" class="_zs_gallerylQ ';
    if (show) {
        ;
        $p += ' _zs_gallerylU ';
    }
    ;
    $p += '" mx-mouseout="' + $viewId + '__bV()" mx-mousemove="' + $viewId + '__eS()" mx-contextmenu="' + $viewId + '__H()">';
    if (loading) {
        ;
        $p += '<li mxs="_zs_galleryd?:_"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';
    }
    else {
        ;
        $p += ' ';
        if (suggest && suggest.length) {
            ;
            $p += ' ';
            for (var idx = 0, $art_crmjlkhi$art_c = suggest.length; idx < $art_crmjlkhi$art_c; idx++) {
                var item = suggest[idx];
                $p += '<li class="_zs_gallerylR" mx-click="' + $viewId + '__p({item:\'' + $i($$ref, item) + '\'})" data-idx="' + $e(idx) + '" id="sg_' + $e(viewId) + '_' + $e(idx) + '">' + $n(item.text) + '</li>';
            }
            ;
            $p += ' ';
        }
        else {
            ;
            $p += '<li mxa="_zs_galleryd?:b" class="text-center color-9">' + $e(emptyText) + '</li>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += '</ul>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        var me = this;
        var textKey = extra.textKey || 'text', valueKey = extra.valueKey || 'value', max = extra.max | 0;
        me['__eI'] = (extra.dynamicList + '' === 'true');
        me.updater.set({
            textKey: textKey,
            valueKey: valueKey
        });
        var list = me.rebuildList(extra.list || []);
        var selected = extra.selected || '';
        selected = (selected + '').split(',');
        // 当前已选中的
        var items = [];
        var selectedItems = extra.items || [];
        if (selectedItems && selectedItems.length) {
            items = selectedItems;
        }
        else {
            var map_1 = Magix.toMap(list, 'value');
            selected.forEach(function (v) {
                if (map_1[v]) {
                    items.push(map_1[v]);
                }
            });
        }
        me['__cR'] = me['__eI'] ? [] : list;
        me['__j'] = $('#' + me.id);
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me.updater.set({
            viewId: me.id,
            disabled: disabledNode && (disabledNode.length > 0),
            placeholder: extra.placeholder || I18n['choose'],
            emptyText: I18n['empty.text'],
            inputWidth: MinWidth,
            items: items,
            max: max
        });
        Monitor['__f']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
        });
    },
    rebuildList: function (list) {
        var updater = this.updater;
        var textKey = updater.get('textKey'), valueKey = updater.get('valueKey');
        if (typeof list[0] === 'object') {
            // 本身是个对象
            list = list.map(function (item) {
                return {
                    text: item[textKey],
                    value: item[valueKey]
                };
            });
        }
        else {
            // 直接value列表
            list = list.map(function (value) {
                return {
                    text: value,
                    value: value
                };
            });
        }
        return list;
    },
    render: function () {
        this.updater.digest();
        this['__eJ']();
        this['__bO']();
    },
    '__bO': function () {
        var me = this;
        var items = me.updater.get('items');
        var selected = items.map(function (item) {
            return item.value;
        });
        me['__j'].val(selected.join(','));
    },
    /**
     * 更新input的宽度，提示框位置，提示框数据
     */
    '__eJ': function () {
        var me = this;
        me['__eK'] = -1;
        var list = me['__cR'];
        var items = me.updater.get('items');
        // 输入框内容
        var iv = me['__bP'] || '';
        var suggest = [];
        if (me['__eI']) {
            suggest = list;
        }
        else {
            var selected = items.map(function (item) {
                return item.value + '';
            });
            for (var i = 0, one = void 0; i < list.length; i++) {
                one = list[i];
                if ((selected.indexOf(one.value + '') < 0) && ((one.value + '').indexOf(iv) > -1 || (one.text + '').indexOf(iv) > -1)) {
                    suggest.push(one);
                }
            }
        }
        var tNode = me['__j'].find('input');
        tNode.width(MinWidth);
        var offset = tNode.position();
        var inputWidth = $('#ipt_' + me.id).width() - offset.left;
        me.updater.digest({
            iv: iv,
            suggest: suggest,
            inputWidth: inputWidth >= MinWidth ? inputWidth : MinWidth,
            suggestLeft: offset.left - 6
        });
    },
    /**
     * 输入框获取焦点
     */
    '__eL<click>': function () {
        var me = this;
        var disabled = me.updater.get('disabled');
        if (!disabled) {
            me['__j'].find('input').focus();
        }
    },
    '__H<contextmenu>': function (e) {
        e.preventDefault();
    },
    '__l<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '__ca<focusin,paste,keyup,keydown>': function (e) {
        e.stopPropagation();
        var me = this;
        if (me['__dq']) {
            clearTimeout(me['__dq']);
        }
        var val = e.eventTarget.value;
        if (me['__bP'] !== val) {
            me['__bP'] = val;
            var holder = me['__j'].find('._zs_gallerymJ');
            if (val) {
                holder.hide();
            }
            else {
                holder.show();
            }
        }
        if (e.type != 'keydown') {
            var suggest = me.updater.get('suggest');
            if (e.keyCode == 40) {
                me['__eM']();
                me['__eK']++;
                if (me['__eK'] >= suggest.length) {
                    me['__eK'] = 0;
                }
                me['__eN']();
            }
            else if (e.keyCode == 38) {
                me['__eM']();
                me['__eK']--;
                if (me['__eK'] < 0) {
                    me['__eK'] = suggest.length - 1;
                }
                me['__eN']();
            }
            else if (e.keyCode == 13) {
                // 回车
                if (me['__eK'] > -1 && me['__eK'] < suggest.length) {
                    var item = suggest[me['__eK']];
                    me['__eM']();
                    me['__p'](item);
                }
            }
            else {
                me['__dq'] = setTimeout(me.wrapAsync(function () {
                    var items = me.updater.get('items');
                    var max = me.updater.get('max');
                    if (max <= 0 || items.length < max) {
                        me['__eJ']();
                        me['__n']();
                    }
                }), 300);
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            // 删除
            var items = me.updater.get('items');
            var idx = items.length - 1;
            if (idx > -1) {
                me['__eO<click>']({
                    params: {
                        idx: idx
                    }
                });
                if (me['__eI']) {
                    me['__m']();
                }
            }
        }
    },
    '__y': function () {
        var me = this;
        var updater = me.updater;
        var selected = [];
        var items = updater.get('items');
        var valueKey = updater.get('valueKey');
        for (var i = 0, one = void 0; i < items.length; i++) {
            one = items[i];
            selected.push(valueKey ? one[valueKey] : one);
        }
        selected = selected.join(',');
        me['__j'].val(selected).trigger({
            type: 'change',
            selected: selected,
            items: items
        });
    },
    '__p<click>': function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        this['__p'](e.params.item);
    },
    '__p': function (item) {
        var me = this;
        var updater = me.updater;
        var items = updater.get('items');
        items.push(item);
        updater.digest({
            items: items
        });
        me['__bP'] = '';
        me['__bO']();
        me['__eJ']();
        me['__y']();
        var max = me.updater.get('max'), items = me.updater.get('items');
        if (max > 0 && items.length >= max) {
            me['__m']();
        }
        else {
            me['__eP']();
            if (me['__eI']) {
                me['__m']();
            }
        }
    },
    '__eO<click>': function (event) {
        var me = this;
        var data = me.updater.get();
        if (data.disabled) {
            return;
        }
        var items = data.items;
        var idx = event.params.idx;
        items.splice(idx, 1);
        me.updater.digest({
            items: items
        });
        me['__bP'] = '';
        me['__bO']();
        me['__eJ']();
        me['__y']();
        me['__eP']();
    },
    '__eP': function () {
        var me = this;
        if (me['__eI']) {
            me['__j'].find('input').focus();
        }
        else {
            var suggest = me.updater.get('suggest');
            if (suggest && suggest.length) {
                me['__j'].find('input').focus();
            }
            else {
                me['__m']();
            }
        }
    },
    '__eM': function () {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['__eK']);
        node.removeClass('_zs_gallerylS');
    },
    '__eN': function (ignore) {
        var me = this;
        var node = $('#sg_' + me.id + '_' + me['__eK']);
        node.addClass('_zs_gallerylS');
        if (!ignore && node.length) {
            me['__eQ'] = 1; //如果是上下按键引起的滚动，则在move时忽略
            var height = node.outerHeight();
            var scrolled = (me['__eK'] + 1) * height;
            var rNode = $('#ul_' + me.id);
            var vHeight = rNode.height();
            var sTop = rNode.prop('scrollTop');
            var items = Math.ceil(vHeight / height);
            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            }
            else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me['__eK'] + 2 - items) * height);
            }
        }
    },
    '__m': function () {
        var me = this;
        if (me['__eR']) {
            me['__eR'] = false;
            me.updater.digest({
                show: false
            });
            Monitor['__g'](me);
            if (me['__eI']) {
                me['__cR'] = [];
            }
        }
    },
    '__n': function () {
        var me = this;
        // 外部需要动态更新时
        me['__j'].trigger({
            type: 'show',
            keyword: me['__bP']
        });
        var suggest = me.updater.get('suggest');
        if (!me['__eR'] && suggest && suggest.length) {
            me['__eR'] = true;
            me.updater.digest({
                show: true
            });
            Monitor['__p'](me);
        }
    },
    '__k': function (node) {
        return Magix.inside(node, this.id);
    },
    '__bV<mouseout>': function (e) {
        var flag = !Magix.inside(e.relateTarget, e.eventTarget);
        if (flag) {
            var me = this;
            me['__eM']();
            me['__eK'] = -1;
        }
    },
    '__eS<mousemove>': function (e) {
        var me = this;
        if (me['__eQ']) {
            delete me['__eQ'];
            return;
        }
        var target = $(e.target);
        if (target.hasClass('_zs_gallerylR')) {
            var idx = target.data('idx');
            if (idx != me['__eK']) {
                me['__eM']();
                me['__eK'] = idx;
                me['__eN'](true);
            }
        }
    },
    showLoading: function () {
        var me = this;
        if (!me['__eR']) {
            me['__eR'] = true;
            me.updater.digest({
                show: true,
                loading: true,
                iv: me['__bP']
            });
            Monitor['__p'](me);
        }
    },
    hideLoading: function () {
        this.updater.digest({
            loading: false
        });
    },
    /**
     * 外部更新可选项
     */
    update: function (suggest) {
        var me = this;
        suggest = this.rebuildList(suggest);
        this['__cR'] = suggest;
        me.updater.digest({
            iv: me['__bP'],
            suggest: suggest
        });
    }
});

});