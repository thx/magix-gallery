/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/bd",["magix","$","../mx-monitor/index","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/

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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, selected = $$.selected, selectedText = $$.selectedText; $p += '<div class="_zs_gallerydQ '; if (expand) {
    ;
    $p += ' _zs_gallerydU ';
} ; $p += '"><span class="_zs_gallerydR '; if (selected === '') {
    ;
    $p += ' _zs_gallerydS ';
} ; $p += '">' + $e(selectedText) + '</span><span mxs="_zs_galleryaW:_" class="mc-iconfont _zs_gallerydT">&#xe692;</span></div>'; return $p; },
    init: function (ops) {
        var me = this;
        Monitor['__f']();
        var oNode = $('#' + me.id);
        me['__j'] = oNode;
        var selected = ops.selected;
        var textKey = ops.textKey || 'text';
        var valueKey = ops.valueKey || 'value';
        var emptyText = ops.emptyText || '';
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
        }
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
        var selectedItem = map[selected];
        if (!selected || !selectedItem) {
            var firstItem = {};
            for (var i = 0; i < list.length; i++) {
                if (!list[i].group) {
                    firstItem = list[i];
                    break;
                }
            }
            selectedItem = map[selected] || firstItem;
        }
        // 是否禁用
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['__bo'] = disabledNode && (disabledNode.length > 0);
        me['__bp'] = false;
        me['__bq'] = false;
        me['__br'] = false;
        me['__bs'] = ops.scrollWrapper;
        me.updater.set({
            viewId: me.id,
            list: list,
            selected: selectedItem.value,
            selectedText: selectedItem.text,
            expand: me['__br'],
            name: ops.name || ''
        });
        me.on('destroy', function () {
            me['__j'].off('mouseenter mouseleave');
            if (me['__bt']) {
                clearTimeout(me['__bt']);
            }
            if (me['__bu']) {
                clearTimeout(me['__bu']);
            }
            $('#dd_bd_' + me.id).remove();
            Monitor['__g'](me);
            Monitor['__h']();
        });
        // trigger方式，click，hover，默认click
        me['__bv'] = ops.triggerType || 'click';
        switch (me['__bv']) {
            case 'click':
                oNode.on('click', function () {
                    me['__bt'] = setTimeout(me.wrapAsync(function () {
                        if (me['__br']) {
                            me['__m']();
                        }
                        else if (!me['__bo']) {
                            me['__n']();
                        }
                    }), me.constants.showDelay);
                });
                break;
            case 'hover':
                oNode.hover(function () {
                    clearTimeout(me['__bu']);
                    me['__bt'] = setTimeout(me.wrapAsync(function () {
                        if (!me['__bo']) {
                            me['__n'](); //等待内容显示
                        }
                    }), me.constants.showDelay);
                }, function () {
                    me['__bw']();
                });
                break;
        }
        me.bindScroll();
        me['__j'].val(selected);
    },
    render: function () {
        this.updater.digest({});
    },
    '__bz': function () {
        var me = this;
        var toggleNode = $('#' + me.id + ' ._zs_gallerydQ');
        var posWidth = toggleNode.outerWidth(), vId = me.id;
        var minWidth = posWidth, maxWidth = posWidth * 2;
        var ddNode = "<div class=\"_zs_gallerydW _zs_galleryeb\" id=\"dd_bd_" + vId + "\"\n                style=\"min-width: " + minWidth + "px; max-width: " + maxWidth + "px;\"></div>";
        $(document.body).append(ddNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('dd_bd_' + vId, '');
        vf.on('created', function () {
            var ddNode = me['__bx']();
            var triggerType = me['__bv'];
            if (triggerType == 'hover') {
                ddNode.hover(function () {
                    clearTimeout(me['__bu']);
                }, function () {
                    me['__bw']();
                });
            }
        });
        me['__by'] = vf;
    },
    '__k': function (node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'dd_bd_' + this.id);
    },
    '__n': function () {
        var me = this;
        clearTimeout(me['__bt']);
        if (!me['__bp']) {
            me['__bp'] = true;
            me['__bz']();
        }
        if (me['__br']) {
            return;
        }
        var data = me.updater.get();
        me['__by'].mountView('mx-dropdown/content', {
            data: {
                list: data.list,
                selected: data.selected
            },
            submit: function (selectedItem) {
                me['__m']();
                var selected = selectedItem.value, selectedText = selectedItem.text;
                me.updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
                me['__j'].val(selected).trigger({
                    type: 'change',
                    selected: selected,
                    value: selected,
                    text: selectedText
                });
            }
        });
        me.updater.digest({
            expand: me['__br'] = true
        });
        // 每次show时都重新定位
        var ddNode = me['__bx']();
        ddNode.addClass('_zs_gallerydU');
        Monitor['__p'](me);
    },
    '__bw': function () {
        var me = this;
        clearTimeout(me['__bt']);
        clearTimeout(me['__bu']);
        me['__bu'] = setTimeout(me.wrapAsync(function () {
            me['__m']();
        }), me.constants.hideDelay);
        Monitor['__g'](me);
    },
    '__m': function () {
        var me = this;
        clearTimeout(me['__bu']);
        if (!me['__br']) {
            return;
        }
        me.updater.digest({
            expand: me['__br'] = false
        });
        var ddNode = $('#dd_bd_' + me.id);
        ddNode.removeClass('_zs_gallerydU');
        Monitor['__g'](me);
    },
    bindScroll: function () {
        var me = this;
        var scrollWrapper = me['__bs'];
        if (!scrollWrapper) {
            return;
        }
        var wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        }
        else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(function () {
            if (me['__br']) {
                me['__bx']();
            }
        });
    },
    '__bx': function () {
        var me = this;
        var oNode = me['__j'];
        var ddNode = $('#dd_bd_' + me.id);
        if (!ddNode || !ddNode.length) {
            return;
        }
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        var offset = oNode.offset();
        var rWidth = ddNode.outerWidth();
        var rHeight = ddNode.outerHeight();
        var top = offset.top + height;
        left = offset.left - (rWidth - width) / 2;
        ddNode.css({
            left: left,
            top: top
        });
        return ddNode;
    },
    /**
     * 页面滚动的时候，重新定位
     */
    '$win<scroll>': function (e) {
        var me = this;
        if (me['__br']) {
            me['__bx']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>': function (e) {
        var me = this;
        if (me['__br']) {
            me['__bx']();
        }
    },
    constants: {
        showDelay: 100,
        hideDelay: 200
    }
});

});