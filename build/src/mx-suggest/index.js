/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,$,I18n,Monitor*/

var Magix = require("magix");
var $ = require("$");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_galleryaw","._zs_gallerylN{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-suggest/index\"]{display:inline-block}._zs_gallerylO{position:relative;height:32px}");
Magix.applyStyle("_zs_galleryax","._zs_gallerylP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerylQ{display:none;position:absolute;top:100%;z-index:99;min-width:100%;max-height:300px;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-y:auto;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylQ ._zs_gallerylR{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerylQ ._zs_gallerylR._zs_gallerylS,._zs_gallerylQ ._zs_gallerylR:hover{background-color:#f0f0f0}._zs_gallerylQ ._zs_gallerylR._zs_gallerylT,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:active,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:focus,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerylQ._zs_gallerylU{display:block;-webkit-animation:_zs_galleryF .25s ease-out;animation:_zs_galleryF .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}");
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
} ; var $g = '', $_temp, $p = '', placeholder = $$.placeholder, viewId = $$.viewId, selectText = $$.selectText, show = $$.show, align = $$.align, loading = $$.loading, list = $$.list, selectedValue = $$.selectedValue, emptyText = $$.emptyText; $p += '<div mxv mxa="_zs_gallerydv:_" class="search-box"><i mxs="_zs_gallerydv:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="' + $e(placeholder) + '" id="' + $e(viewId) + '_input" value="' + $e(selectText) + '" mx-keyup="' + $viewId + '__dv()" mx-paste="' + $viewId + '__dv()" mx-focusin="' + $viewId + '__dv()" mx-focusout="' + $viewId + '__l()" mx-change="' + $viewId + '__l()"/><ul class="_zs_gallerylQ '; if (show) {
    ;
    $p += ' _zs_gallerylU ';
} ; $p += '" style="'; if (align == 'right') {
    ;
    $p += 'right: 0;';
}
else {
    ;
    $p += 'left: 0;';
} ; $p += '">'; if (loading) {
    ;
    $p += '<li mxs="_zs_gallerydv:a"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';
}
else {
    ;
    $p += ' ';
    if (list.length > 0) {
        ;
        $p += ' ';
        for (var $art_isoyhjovg$art_i = 0, $art_cyvfnvgiyk$art_c = list.length; $art_isoyhjovg$art_i < $art_cyvfnvgiyk$art_c; $art_isoyhjovg$art_i++) {
            var item = list[$art_isoyhjovg$art_i];
            $p += '<li class="_zs_gallerylR ';
            if ((selectedValue + '') === (item.value + '')) {
                ;
                $p += ' _zs_gallerylT ';
            }
            ;
            $p += '" mx-click="' + $viewId + '__aa({item:\'' + $i($$ref, item) + '\'})">' + $n(item.text) + '</li>';
        }
        ;
        $p += ' ';
    }
    else {
        ;
        $p += '<li mxa="_zs_gallerydv:a" class="text-center color-9">' + $e(emptyText) + '</li>';
    }
    ;
    $p += ' ';
} ; $p += '</ul></div>'; return $p; },
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
        Monitor['__f']();
        that.on('destroy', function () {
            Monitor['__g'](that);
            Monitor['__h']();
            if (that['__dq']) {
                clearTimeout(that['__dq']);
            }
        });
    },
    assign: function (data) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var placeholder = data.placeholder || '';
        if (!placeholder) {
            placeholder = I18n['search'];
        }
        that['key.value'] = data.listValue || 'value';
        that['key.text'] = data.listText || 'text';
        // 多种类型搜索的时候
        var list = that['__dr'](data.list);
        //当前选中的value值
        var selectedValue = data.selected || '';
        var selectText = '';
        if (selectedValue) {
            for (var index = 0; index < list.length; index++) {
                if (list[index].value == selectedValue) {
                    selectText = list[index].text;
                    break;
                }
            }
        }
        // 上下键切换缓存
        that['__ds'] = selectedValue;
        that['__dt'] = list;
        // 在哪些值中搜索关键词
        var type = (data.type || 'text') + '';
        if (type == 'all') {
            type = 'text,value';
        }
        that['__du'] = type.split(',');
        that['__j'] = $('#' + that.id);
        that.updater.set({
            viewId: that.id,
            list: list,
            selectedValue: selectedValue,
            selectText: selectText,
            placeholder: placeholder,
            align: data.align || 'left',
            show: false,
            emptyText: I18n['empty.text']
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
    '__dr': function (origin) {
        var listValue = this['key.value'], listText = this['key.text'];
        var list = [];
        if (origin && (origin.length > 0)) {
            if (typeof origin[0] === 'object') {
                // 本身是个对象
                list = origin.map(function (item) {
                    return {
                        value: item[listValue],
                        text: item[listText]
                    };
                });
            }
            else {
                // 直接value列表
                list = origin.map(function (value) {
                    return {
                        value: value,
                        text: value
                    };
                });
            }
        }
        return list;
    },
    render: function () {
        this.updater.digest();
    },
    '__dv<focusin,keyup,paste>': function (e) {
        e.stopPropagation();
        var that = this;
        if (that['__dq']) {
            clearTimeout(that['__dq']);
        }
        var data = that.updater.get();
        var list = data.list, selectedValue = data.selectedValue;
        var idx = -1;
        for (var index = 0; index < list.length; index++) {
            if (list[index].value == selectedValue) {
                idx = index;
                break;
            }
        }
        if (e.keyCode == 40 || e.keyCode == 38) {
            // 下移 || 上移
            if (e.keyCode == 40) {
                // 下移
                idx += 1;
                if (idx >= list.length) {
                    idx = 0;
                }
            }
            if (e.keyCode == 38) {
                // 下移
                idx -= 1;
                if (idx < 0) {
                    idx = list.length - 1;
                }
            }
            that.updater.digest({
                selectedValue: list[idx].value
            });
        }
        else if (e.keyCode == 13) {
            // 未选中时，回车默认第一个，已选中的情况下还是当前选项
            if (idx < 0) {
                idx = 0;
            }
            that['__ds'] = list[idx].value;
            that['__m']();
            that['__cd']();
        }
        else {
            that['__dq'] = setTimeout(that.wrapAsync(function () {
                that['__n']();
            }), 300);
        }
    },
    '__m': function () {
        var that = this;
        var data = that.updater.get();
        var list = data.list, selectedValue = that['__ds'] + '', selectText = '';
        // 上下键切换未选择
        for (var index = 0; index < list.length; index++) {
            var item = list[index];
            if ((item.value + '') === selectedValue) {
                selectText = item.text;
                break;
            }
        }
        that.updater.digest({
            selectedValue: selectedValue,
            selectText: selectText,
            show: false
        });
        Monitor['__g'](that);
    },
    showLoading: function () {
        this.updater.digest({
            loading: true
        });
    },
    hideLoading: function () {
        this.updater.digest({
            loading: false
        });
    },
    /**
     * 外部更新list可选项
     */
    update: function (list) {
        var that = this;
        that['__dt'] = that['__dr'](list);
        // 不需要再处理，直接返回什么，展示什么
        var selectText = $('#' + that.id + '_input').val();
        that.updater.digest({
            list: that['__dt'],
            selectText: selectText,
            show: true
        });
        Monitor['__p'](that);
    },
    '__n': function (ignore) {
        var that = this;
        var source = that['__dt'];
        var selectText = $('#' + that.id + '_input').val();
        var lowerText = (selectText + '').toLowerCase();
        var list = [];
        var types = that['__du'];
        source.forEach(function (item) {
            var has = false;
            types.forEach(function (type) {
                if ((item[type] + '').toLowerCase().indexOf(lowerText) > -1) {
                    has = true;
                }
            });
            if (has) {
                list.push(item);
            }
        });
        that.updater.digest({
            list: list,
            selectText: selectText,
            show: true
        });
        Monitor['__p'](that);
        that['__j'].trigger({
            type: 'show',
            keyword: selectText
        });
    },
    '__k': function (node) {
        return Magix.inside(node, this.id);
    },
    '__l<change,focusout>': function (e) {
        e.stopPropagation();
    },
    '__aa<click>': function (e) {
        e.stopPropagation();
        var that = this;
        var item = e.params.item;
        that.updater.digest({
            selectText: item.text,
            selectedValue: that['__ds'] = item.value,
            show: false
        });
        that['__cd']();
    },
    '__cd': function () {
        var that = this;
        var selectedValue = that.updater.get('selectedValue'), selectText = that.updater.get('selectText');
        that['__j'].val(selectedValue).trigger({
            type: 'suggest',
            selected: {
                value: selectedValue,
                text: selectText
            }
        });
    }
});

});