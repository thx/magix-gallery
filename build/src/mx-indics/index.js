/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/index",["magix","$","mx-dialog/index"],(require,exports,module)=>{
/*Magix,$,Dialog*/

var Magix = require("magix");
var $ = require("$");
var Dialog = require("mx-dialog/index"); //mixins dialog
Magix.applyStyle("_zs_galleryX","._zs_galleryhr{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-indics/index\"]{display:inline-block;vertical-align:middle}._zs_galleryhs{position:relative;height:100%}._zs_galleryhs ._zs_galleryht{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid #e6e6e6}._zs_galleryhs ._zs_galleryhu{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_galleryhs ._zs_galleryhu ._zs_galleryhv{padding:16px 24px}._zs_galleryhs ._zs_galleryhu ._zs_galleryhv:nth-of-type(2n){background-color:#fafafa}._zs_galleryhs ._zs_galleryhu ._zs_galleryhw{float:left;padding:8px 0;color:#999}._zs_galleryhs ._zs_galleryhu ._zs_galleryhx{float:left;width:100%}._zs_galleryhs ._zs_galleryhu ._zs_galleryhx ._zs_galleryhy{float:left;width:20%;padding:8px 0}._zs_galleryhs ._zs_galleryhu ._zs_galleryhx ._zs_galleryhy ._zs_galleryhz{position:relative;top:1px;left:4px;font-size:14px;color:#ccc}._zs_galleryhs._zs_galleryhA ._zs_galleryhw{width:15%}._zs_galleryhs._zs_galleryhA ._zs_galleryhx{width:85%}._zs_galleryhs._zs_galleryhA ._zs_galleryhx ._zs_galleryhy{width:25%}._zs_galleryhs._zs_galleryhB ._zs_galleryhx{width:100%}._zs_galleryhs._zs_galleryhB ._zs_galleryhx ._zs_galleryhy{width:25%}._zs_galleryhs._zs_galleryhA._zs_galleryhB ._zs_galleryhw{width:20%}._zs_galleryhs._zs_galleryhA._zs_galleryhB ._zs_galleryhx{width:80%}._zs_galleryhs._zs_galleryhA._zs_galleryhB ._zs_galleryhx ._zs_galleryhy{width:33%}._zs_galleryhs._zs_galleryhB{padding-right:32%}._zs_galleryhs._zs_galleryhB ._zs_galleryhu{right:32%;border-right:1px solid #e6e6e6}._zs_galleryhs._zs_galleryhB ._zs_galleryhC{position:absolute;top:0;right:0;width:32%;height:98px}._zs_galleryhs._zs_galleryhB ._zs_galleryhC ._zs_galleryhD{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid #e6e6e6}._zs_galleryhs._zs_galleryhB ._zs_galleryhC ._zs_galleryhE{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:#fafafa}._zs_galleryhs._zs_galleryhB ._zs_galleryhF{position:absolute;top:98px;right:0;bottom:0;width:32%;padding:0 24px 16px;overflow-y:scroll;background-color:#fafafa}._zs_galleryhs._zs_galleryhB ._zs_galleryhF ._zs_galleryhG{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:move}._zs_galleryhs._zs_galleryhB ._zs_galleryhF ._zs_galleryhG:last-child{margin-bottom:0}._zs_galleryhH{position:relative;color:#333}._zs_galleryhH:hover{color:#333;border-color:#ccc}._zs_galleryhH:focus{border-color:#ccc}._zs_galleryhI{margin-right:10px}._zs_galleryhI ._zs_galleryhJ{position:relative;top:2px}._zs_galleryhK{padding-right:20px}._zs_galleryhK ._zs_galleryhL{position:absolute;top:0;right:0;width:20px;height:32px;line-height:32px;text-align:center;font-size:18px}");
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
} ; var $g = '', $_temp, $p = '', map = $$.map, type = $$.type; $p += '<a mxs="_zs_galleryb&:_" href="javascript:;" class="input _zs_galleryhH _zs_galleryhI" mx-click="' + $viewId + 'show()"><i class="mc-iconfont _zs_galleryhJ">&#xe731;</i></a><a mxa="_zs_galleryb&:_" href="javascript:;" class="input _zs_galleryhH _zs_galleryhK" mx-click="' + $viewId + 'toggleDefault()">' + $e(map[type]['label']) + '<i mxs="_zs_galleryb&:a" class="mc-iconfont _zs_galleryhL">&#xe692;</i></a>'; return $p; },
    mixins: [Dialog],
    init: function (e) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        this.assign(e);
    },
    assign: function (e) {
        var that = this;
        var altered = that.updater.altered();
        var textKey = e.textKey || 'text', valueKey = e.valueKey || 'value', parentKey = e.parentKey || 'pValue';
        var fields = [];
        (e.fields || []).forEach(function (item) {
            fields.push({
                text: item[textKey],
                value: item[valueKey],
                pValue: item[parentKey],
                tip: item.tip || ''
            });
        });
        var parents = [];
        (e.parents || []).forEach(function (item) {
            parents.push({
                text: item[textKey],
                value: item[valueKey]
            });
        });
        var customs = (e.customs || []).map(function (v) {
            return '' + v;
        });
        var defaults = (e.defaults || []).map(function (v) {
            return '' + v;
        });
        // 当自定义为空时，默认为defaults
        if (customs.length == 0) {
            customs = defaults;
        }
        var limit = +e.limit || 0;
        // 是否可排序
        var sortable = (e.sortable + '' === 'true');
        // 1 默认
        // 2 自定义
        var type = (e.custom + '' === 'true') ? 2 : 1;
        var map = {
            1: {
                label: '默认数据',
                list: defaults
            },
            2: {
                label: '自定义数据',
                list: customs
            }
        };
        this.updater.set({
            parents: parents,
            fields: fields,
            sortable: sortable,
            limit: limit,
            map: map,
            type: type
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
    },
    'toggleDefault<click>': function (e) {
        var that = this;
        var type = that.updater.get('type');
        if (type == 1) {
            type = 2;
        }
        else {
            type = 1;
        }
        that.updater.digest({
            type: type
        });
        that['__cd']('btn-switch');
    },
    '__cd': function (triggerType) {
        var that = this;
        var type = that.updater.get('type'), map = that.updater.get('map');
        $('#' + that.id).trigger({
            type: 'change',
            triggerType: triggerType,
            defaults: map[1].list,
            custom: (type == 2),
            customs: map[2].list
        });
    },
    /**
     * 开浮层编辑了就是自定义数据了
     */
    'show<click>': function (e) {
        e.preventDefault();
        var that = this;
        var updater = that.updater;
        var sortable = updater.get('sortable');
        var viewOptions = $.extend(true, {}, updater.get());
        viewOptions.selected = viewOptions.map[viewOptions.type].list;
        viewOptions.callback = function (d) {
            var map = updater.get('map');
            var type = 2;
            map[type]['list'] = d.selected;
            that.updater.digest({
                type: type,
                map: map
            });
            that['__cd']('dialog-setting');
        };
        that.mxModal('mx-indics/dialog', viewOptions, {
            width: 800,
            closable: false,
            card: false
        });
    }
});

});