/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/index",["magix","$","../mx-monitor/index","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/

/**
 * 为了保证dropdown.item每次更新，不实现assign
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_galleryk","._zs_gallerydP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryj{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryj{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryk{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryk{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryl{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryl{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_gallerym{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_gallerym{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryn{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryn{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerydQ{position:relative;width:100%;height:32px;padding:0 25px 0 10px;border-radius:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:30px;transition:all .25s;border:1px solid #e6e6e6}._zs_gallerydQ ._zs_gallerydR{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._zs_gallerydQ ._zs_gallerydR._zs_gallerydS{color:#999}._zs_gallerydQ ._zs_gallerydT{position:absolute;right:0;top:50%;width:28px;height:28px;font-size:28px;line-height:28px;margin-top:-14px;color:#e6e6e6;transition:all .25s}._zs_gallerydQ._zs_gallerydU ._zs_gallerydT{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryaI{display:block;width:100%;padding:0 8px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;transition:all .25s}._zs_galleryaI:hover{background-color:#f0f0f0}._zs_galleryaI._zs_galleryaJ,._zs_galleryaI._zs_galleryaJ:active,._zs_galleryaI._zs_galleryaJ:focus,._zs_galleryaI._zs_galleryaJ:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerydV ._zs_galleryaI:hover{background-color:transparent}._zs_gallerydW{display:none;position:absolute;left:0;z-index:99;min-width:100%;max-width:200%;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydW ._zs_gallerydX{padding:10px 10px 0}._zs_gallerydW ._zs_gallerydX ._zs_gallerydY{width:100%}._zs_gallerydW ._zs_gallerydZ{padding:8px 10px;overflow:auto}._zs_gallerydW ._zs_gallerydZ ._zs_gallerye_{padding:2px 0}._zs_gallerydW ._zs_gallerydZ ._zs_galleryea{padding-left:2px;padding-right:2px;color:#999;cursor:default}._zs_gallerydW._zs_galleryeb{top:100%;margin-top:10px}._zs_gallerydW._zs_galleryeb._zs_gallerydU{display:block;-webkit-animation:_zs_galleryj .25s ease-out;animation:_zs_galleryj .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_gallerydW._zs_galleryec{bottom:100%;margin-bottom:10px}._zs_gallerydW._zs_galleryec._zs_gallerydU{display:block;-webkit-animation:_zs_galleryk .25s ease-out;animation:_zs_galleryk .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_galleryed{min-width:600px}._zs_galleryed ._zs_gallerydX ._zs_gallerydY{width:200px}._zs_galleryed ._zs_gallerydZ ._zs_galleryee{margin-bottom:10px}._zs_galleryed ._zs_gallerydZ ._zs_galleryee ._zs_gallerye_{float:left;width:25%}._zs_galleryef,[mx-view*=\"mx-dropdown/bd\"],[mx-view*=\"mx-dropdown/index\"],[mx-view*=\"mx-dropdown/multiple\"]{position:relative;display:inline-block;min-width:100px;vertical-align:middle}._zs_galleryef:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallerydQ{border-color:#ccc}._zs_galleryef:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallerydQ ._zs_gallerydT{color:#ccc}._zs_galleryef[mx-disabled] ._zs_gallerydQ,._zs_galleryef[mx-disabled]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallerydQ,[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallerydQ,[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallerydQ,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallerydQ{border-color:#e6e6e6;color:#999;background-color:#eee;cursor:not-allowed}._zs_galleryef[mx-disabled] ._zs_gallerydQ ._zs_gallerydT,._zs_galleryef[mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT{color:#ccc}._zs_galleryeg{padding-top:10px;padding-left:18px;padding-right:18px;line-height:16px}._zs_galleryeg ._zs_galleryeh{float:left;padding-right:20px;color:#999}._zs_galleryeg ._zs_galleryeh:hover{color:#4d7fff}._zs_galleryeg._zs_galleryei{padding-left:12px;padding-right:12px}._zs_galleryej{padding:10px;border-top:1px solid #e6e6e6}");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, selected = $$.selected, name = $$.name, selectedText = $$.selectedText, placementClass = $$.placementClass, rList = $$.rList, searchbox = $$.searchbox, searchText = $$.searchText, keyword = $$.keyword, viewId = $$.viewId, height = $$.height, list = $$.list, textKey = $$.textKey, valueKey = $$.valueKey, spm = $$.spm; $p += '<div class="_zs_gallerydQ '; if (expand) {
    ;
    $p += ' _zs_gallerydU ';
} ; $p += '"><span class="_zs_gallerydR '; if (selected === '') {
    ;
    $p += ' _zs_gallerydS';
} ; $p += '">'; if (name) {
    ;
    $p += '<span mxa="_zs_galleryaY:_" class="color-9">' + $e(name) + '：</span>';
} ; $p += ' ' + $e(selectedText) + '</span><span mxs="_zs_galleryaY:_" class="mc-iconfont _zs_gallerydT">&#xe692;</span></div><div mxv class="_zs_gallerydW ' + $e(placementClass) + ' '; if (expand) {
    ;
    $p += ' _zs_gallerydU ';
} ; $p += '">'; if (rList) {
    ;
    $p += ' ';
    if (searchbox) {
        ;
        $p += '<div mxv mxa="_zs_galleryaY:a" class="_zs_gallerydX"><div mxv mxa="_zs_galleryaY:b" class="search-box _zs_gallerydY"><i mxs="_zs_galleryaY:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="' + $e(searchText) + '" mx-keyup="' + $viewId + '__e()" mx-paste="' + $viewId + '__e()" mx-change="' + $viewId + '__l()" mx-focusin="' + $viewId + '__l()" mx-focusout="' + $viewId + '__l()" value="' + $e(keyword) + '"/></div></div>';
    }
    ;
    $p += '<ul class="_zs_gallerydZ" id="list_' + $e(viewId) + '" style="max-height:' + $e(height) + 'px;">';
    var text = void 0, value = void 0;
    $p += ' ';
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        ;
        $p += ' ';
        text = item[textKey];
        value = item[valueKey];
        $p += ' ';
        if (item && item.group) {
            ;
            $p += '<li class="_zs_galleryea ellipsis" title="' + $e(item[textKey]) + '">' + $e(item[textKey]) + '</li>';
        }
        else {
            ;
            $p += '<li title="' + $e((item.tip ? item.tip : text)) + '" class="_zs_gallerye_">';
            var equal = (value + '') === (selected + '');
            $p += '<span class="_zs_galleryaI ellipsis';
            if (equal) {
                ;
                $p += ' _zs_galleryaJ';
            }
            ;
            $p += '" mx-click="' + $viewId + '__aa({item:\'' + $i($$ref, item) + '\'})" ';
            if (spm) {
                ;
                $p += ' data-spm-click="' + $e(spm) + '" ';
            }
            ;
            $p += '>' + $e(text) + '</span></li>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += '</ul>';
} ; $p += '</div>'; return $p; },
    init: function (ops) {
        var me = this;
        Monitor['__f']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
        });
        me['__j'] = $('#' + me.id);
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['__bo'] = disabledNode && (disabledNode.length > 0);
        // 列表是否展开
        me['__bA'] = false;
        // 展开方向：向上向下
        var placementMap = {
            top: '_zs_galleryec',
            bottom: '_zs_galleryeb'
        };
        // trigger方式，click，hover，默认click
        me['__bv'] = ops.triggerType || 'click';
        var selected = me['__bB'] = ops.selected;
        var textKey = me['__bC'] = ops.textKey || 'text';
        var valueKey = me['__bD'] = ops.valueKey || 'value';
        var emptyText = me['__bE'] = ops.emptyText || '';
        var list = [];
        if (!ops.list) {
            var node = me['__j'].children();
            var group_1;
            node.each(function (idx, item) {
                item = $(item);
                group_1 = item.attr('group') == 'true';
                list.push({
                    group: group_1,
                    text: item.text(),
                    value: group_1 ? Magix.guid() : item.attr('value')
                });
            });
            textKey = me['__bC'] = 'text';
            valueKey = me['__bD'] = 'value';
        }
        else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            }
            catch (e) {
                list = ops.list;
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
            }
            else {
                // 直接value列表
                list = list.map(function (value) {
                    var temp = {};
                    temp[textKey] = value;
                    temp[valueKey] = value;
                    return temp;
                });
            }
        }
        me['__bF'] = list;
        var map = Magix.toMap(list, valueKey);
        if (emptyText) {
            if (!map['']) {
                var temp = {};
                temp[textKey] = emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
                map[''] = temp;
            }
        }
        if (!selected || !map[selected]) {
            var firstItem = {};
            for (var i = 0; i < list.length; i++) {
                if (!list[i].group) {
                    firstItem = list[i];
                    break;
                }
            }
            selected = map[selected] || firstItem;
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        me.updater.set({
            viewId: me.id,
            textKey: me['__bC'],
            valueKey: me['__bD'],
            selected: me['__bB'] = selected,
            searchbox: (ops.searchbox + '') === 'true',
            searchText: I18n['dropdown.search'],
            selectedText: me['__bG'] = map[selected][textKey],
            keyword: me['__bH'] = (ops.keyword || ''),
            expand: me['__bA'],
            height: (ops.height || 250),
            spm: me['__j'].attr('data-spm-click') || '',
            name: ops.name || '',
            placementClass: placementMap[ops.placement || 'bottom']
        });
        me['__j'].val(selected);
    },
    render: function () {
        var me = this;
        var searchbox = me.updater.get('searchbox');
        var initList;
        var next = function () {
            me.updater.digest({
                list: initList
            });
            var triggerType = me['__bv'];
            var triggerNode = $('#' + me.id + ' ._zs_gallerydQ');
            switch (triggerType) {
                case 'click':
                    triggerNode.on('click', function () {
                        if (me['__bA']) {
                            me['__m']();
                        }
                        else if (!me['__bo']) {
                            me['__n']();
                        }
                    });
                    break;
                case 'hover':
                    triggerNode.hover(function () {
                        clearTimeout(me['__bu']);
                        if (!me['__bo']) {
                            me['__n']();
                        }
                    }, function () {
                        me['__bw']();
                    });
                    var wrapper = $('#' + me.id + ' ._zs_gallerydW');
                    wrapper.hover(function () {
                        clearTimeout(me['__bu']);
                    }, function () {
                        me['__bw']();
                    });
                    break;
            }
        };
        if (searchbox) {
            me['__bI'](me['__bH'], function (list) {
                initList = list;
                next();
            });
        }
        else {
            initList = me['__bF'];
            next();
        }
    },
    '__k': function (node) {
        return Magix.inside(node, this.id);
    },
    '__bw': function () {
        var me = this;
        clearTimeout(me['__bu']);
        me['__bu'] = setTimeout(me.wrapAsync(function () {
            me['__m']();
        }), 250);
    },
    '__m': function () {
        var me = this;
        if (me['__bA']) {
            me.updater.digest({
                expand: me['__bA'] = false
            });
            me['__j'].trigger('focusout');
            Monitor['__g'](me);
        }
    },
    '__n': function () {
        var me = this;
        if (!me['__bA']) {
            var d = {
                expand: me['__bA'] = true
            };
            var r = me.updater.get('rList');
            if (!r) {
                d.rList = true;
            }
            me.updater.digest(d);
            me['__j'].trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('._zs_galleryaJ');
            var pos = active.position();
            var height = listNode.height();
            var stop = listNode.prop('scrollTop');
            if (pos && (pos.top < 0 || pos.top > height)) {
                var top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor['__p'](me);
        }
    },
    '__bI': function (val, callback) {
        var me = this;
        clearTimeout(me['__bJ']);
        var srcList = me['__bF'];
        var newList = [];
        var index = 0;
        var max = srcList.length;
        var textKey = me['__bC'];
        var valueKey = me['__bD'];
        if (!val) {
            callback(srcList);
            return;
        }
        var go = function () {
            if (index < max) {
                var end = Math.min(index + 400, max);
                for (var i = index, li = void 0, text = void 0, value = void 0; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    // text不区分大小写匹配
                    var lowVal = (val + '').toLocaleLowerCase(), lowText = (text + '').toLocaleLowerCase();
                    if ((lowText).indexOf(lowVal) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me['__bJ'] = setTimeout(me.wrapAsync(go), 20);
            }
            else {
                callback(newList);
            }
        };
        go();
    },
    '__e<keyup,paste>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['__bK']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['__bK'] = setTimeout(me.wrapAsync(function () {
            if (val != me['__bH']) {
                me['__bI'](me['__bH'] = val, function (list) {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    '__aa<click>': function (e) {
        var me = this;
        var item = e.params.item;
        var updater = me.updater;
        var valueKey = me['__bD'];
        var textKey = me['__bC'];
        var lastSelected = me['__bB'];
        var keyword = me['__bH'];
        var selected = item[valueKey];
        var selectedText = item[textKey];
        if (lastSelected !== selected) {
            updater.set({
                selected: me['__bB'] = selected
            });
            var event = $.Event('change', {
                item: item,
                keyword: keyword,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: item[valueKey],
                text: item[textKey],
                selected: item[valueKey]
            });
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            }
            else {
                updater.set({
                    selected: lastSelected
                });
            }
            me['__j'].val(valueKey ? item[valueKey] : item).trigger(event);
        }
        me['__m']();
    },
    '__l<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});