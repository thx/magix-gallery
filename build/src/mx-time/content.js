/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/content",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-calendar_index_",":root {\n  --mx-calendar-item-gap: 2px;\n  --mx-calendar-item-size: calc(2 * var(--font-size));\n  --mx-calendar-width: calc((var(--mx-calendar-item-size) + var(--mx-calendar-item-gap) * 2) * 7 + 20px);\n  --mx-calendar-height: calc((var(--mx-calendar-item-size) + var(--mx-calendar-item-gap) * 2) * 8 + 20px);\n  --mx-calendar-ym-width: calc((var(--mx-calendar-width) - 60px) / 3);\n  --mx-calendar-ym-height: calc((var(--mx-calendar-height) - var(--mx-calendar-item-size) - var(--mx-calendar-item-gap) * 2 - 80px) / 4);\n  --mx-calendar-time-width: calc(var(--mx-calendar-item-size) * 2 + 6px);\n}\n._zs_gallery_mx-calendar_index_-wrapper {\n  position: relative;\n  z-index: 1000;\n  width: var(--mx-calendar-width);\n  padding: 0;\n  background-color: #fff;\n  border-radius: var(--border-radius);\n  overflow-y: hidden;\n  color: #333;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header {\n  width: var(--mx-calendar-width);\n  padding: 2px 4px;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus {\n  float: left;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus {\n  float: right;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus {\n  line-height: var(--mx-calendar-item-size);\n  font-size: var(--font-size);\n  color: #ccc;\n  cursor: pointer;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-minus:hover,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-plus:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-title {\n  display: inline-block;\n  height: var(--mx-calendar-item-size);\n  line-height: var(--mx-calendar-item-size);\n  padding: 0 10px;\n  cursor: pointer;\n  border-radius: var(--border-radius);\n  color: #666;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-header ._zs_gallery_mx-calendar_index_-title:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body {\n  width: var(--mx-calendar-width);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-weeks {\n  background-color: var(--color-bg);\n  padding: 0 10px;\n  color: #666;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-days {\n  padding: 10px;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-week,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-day {\n  float: left;\n  width: var(--mx-calendar-item-size);\n  height: var(--mx-calendar-item-size);\n  margin: var(--mx-calendar-item-gap);\n  line-height: var(--mx-calendar-item-size);\n  border-radius: 4px;\n  cursor: pointer;\n  color: #333;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-day:hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-gray {\n  color: #999;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-today,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-today:hover {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-notallowed,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-notallowed:hover {\n  color: var(--color-disabled);\n  cursor: not-allowed;\n  background: #fff;\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-selected,\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-body ._zs_gallery_mx-calendar_index_-selected:hover {\n  color: #fff;\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-calendar_index_-wrapper ._zs_gallery_mx-calendar_index_-time {\n  border-top: 1px solid var(--color-border);\n}\n._zs_gallery_mx-calendar_index_-y-panel,\n._zs_gallery_mx-calendar_index_-m-panel {\n  position: absolute;\n  top: -100%;\n  left: 0;\n  right: 0;\n  transition: top 0.15s;\n  background-color: #fff;\n}\n._zs_gallery_mx-calendar_index_-ym-show {\n  top: 0;\n}\n._zs_gallery_mx-calendar_index_-ym {\n  float: left;\n  width: var(--mx-calendar-ym-width);\n  height: var(--mx-calendar-ym-height);\n  margin: 10px;\n  line-height: var(--mx-calendar-ym-height);\n  border-radius: var(--border-radius);\n  font-size: calc(var(--font-size) + 2px);\n  cursor: pointer;\n}\n._zs_gallery_mx-calendar_index_-ym:hover {\n  background-color: var(--color-bg-hover);\n}\n[mx-view*=\"mx-time/content\"] {\n  min-width: var(--mx-calendar-width);\n  padding: 10px;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-groups {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group {\n  overflow: hidden;\n  flex: 0 0 var(--mx-calendar-time-width);\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-ipt {\n  width: 100%;\n  height: 40px;\n  font-size: 24px;\n  text-align: center;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-ipb {\n  width: var(--mx-calendar-item-size);\n  height: var(--mx-calendar-item-size);\n  line-height: var(--mx-calendar-item-size);\n  font-size: var(--font-size);\n  text-align: center;\n  font-weight: bold;\n  background-color: var(--color-bg-hover);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  transition: all var(--duration);\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-ipb:hover {\n  background-color: #ccc;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-group ._zs_gallery_mx-calendar_index_-time-disabled ._zs_gallery_mx-calendar_index_-ipb {\n  background-color: var(--color-disabled);\n  color: #ccc;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 40px;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps ._zs_gallery_mx-calendar_index_-sp {\n  float: left;\n  width: 50%;\n  font-size: 24px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: bolder;\n  text-align: center;\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps ._zs_gallery_mx-calendar_index_-sp._zs_gallery_mx-calendar_index_-spa {\n  padding-left: calc(var(--mx-calendar-time-width) / 2);\n}\n[mx-view*=\"mx-time/content\"] ._zs_gallery_mx-calendar_index_-sps ._zs_gallery_mx-calendar_index_-sp._zs_gallery_mx-calendar_index_-spb {\n  padding-right: calc(var(--mx-calendar-time-width) / 2);\n}\n");
var parseTime = function (time) {
    if (!time) {
        var d = new Date();
        time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }
    var ts = time.split(':');
    if (ts.length != 3) {
        throw new Error('bad time:' + time);
    }
    return {
        '@{hour}': parseInt(ts[0], 10) || 0,
        '@{minute}': parseInt(ts[1], 10) || 0,
        '@{second}': parseInt(ts[2], 10) || 0
    };
};
var parseType = function (type) {
    if (!type) {
        type = 'all';
    }
    var enables = {
        '@{hour}': true,
        '@{minute}': true,
        '@{second}': true
    };
    var keysMap = {
        hour: '@{hour}',
        minute: '@{minute}',
        second: '@{second}'
    };
    if (type != 'all') {
        for (var p in keysMap) {
            if (type.indexOf(p) === -1) {
                delete enables[keysMap[p]];
            }
        }
    }
    return enables;
};
var format = function (t) {
    if (t < 10)
        return '0' + t;
    return t;
};
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
} ; var $g = '', $_temp, $p = '', format = $$.format, time = $$.time, types = $$.types; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerye(:_" class="clearfix pr"><div mxs="_zs_gallerye(:_" class="clearfix _zs_gallery_mx-calendar_index_-sps"><div class="_zs_gallery_mx-calendar_index_-sp _zs_gallery_mx-calendar_index_-spa">:</div><div class="_zs_gallery_mx-calendar_index_-sp _zs_gallery_mx-calendar_index_-spb">:</div></div><div mxv mxa="_zs_gallerye(:a" class="_zs_gallery_mx-calendar_index_-groups"><div mxv mxa="_zs_gallerye(:b" class="_zs_gallery_mx-calendar_index_-group"><div mxv mxa="_zs_gallerye(:c" class="mb5"><input class="input _zs_gallery_mx-calendar_index_-ipt" maxlength="2" autocomplete="off" value="';
    $line = 12;
    $art = '=format(time[\'@{hour}\'])';
    ;
    $p += ($expr = '<%=format(time[\'@{hour}\'])%>', $e(format(time['@{hour}']))) + '" ';
    $line = 13;
    $art = 'if types[\'@{hour}\']';
    ;
    $expr = '<%if (types[\'@{hour}\']) {%>';
    if (types['@{hour}']) {
        ;
        $p += ' mx-change="' + $viewId + '@{set}({type:\'@{hour}\'})" ';
        $line = 13;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled="disabled" ';
        $line = 13;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-keydown="' + $viewId + '@{press.check}({type:\'@{hour}\'})"/></div><div class="clearfix ';
    $line = 16;
    $art = 'if !types[\'@{hour}\']';
    ;
    $expr = '<%if (!types[\'@{hour}\']) {%>';
    if (!types['@{hour}']) {
        ;
        $p += ' _zs_gallery_mx-calendar_index_-time-disabled ';
        $line = 16;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><i class="mc-iconfont _zs_gallery_mx-calendar_index_-ipb fl" ';
    $line = 18;
    $art = 'if types[\'@{hour}\']';
    ;
    $expr = '<%if (types[\'@{hour}\']) {%>';
    if (types['@{hour}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{hour}\'})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{hour}\'})" ';
        $line = 18;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xeb79;</i><i class="mc-iconfont _zs_gallery_mx-calendar_index_-ipb fr" ';
    $line = 21;
    $art = 'if types[\'@{hour}\']';
    ;
    $expr = '<%if (types[\'@{hour}\']) {%>';
    if (types['@{hour}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{hour}\',inc:1})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{hour}\',inc:1})" ';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xeb78;</i></div></div><div mxv mxa="_zs_gallerye(:d" class="_zs_gallery_mx-calendar_index_-group"><div mxv mxa="_zs_gallerye(:e" class="mb5"><input class="input _zs_gallery_mx-calendar_index_-ipt" maxlength="2" autocomplete="off" value="';
    $line = 29;
    $art = '=format(time[\'@{minute}\'])';
    ;
    $p += ($expr = '<%=format(time[\'@{minute}\'])%>', $e(format(time['@{minute}']))) + '" ';
    $line = 30;
    $art = 'if types[\'@{minute}\']';
    ;
    $expr = '<%if (types[\'@{minute}\']) {%>';
    if (types['@{minute}']) {
        ;
        $p += ' mx-change="' + $viewId + '@{set}({type:\'@{minute}\'})" ';
        $line = 30;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled="disabled" ';
        $line = 30;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-keydown="' + $viewId + '@{press.check}({type:\'@{minute}\'})"/></div><div class="clearfix ';
    $line = 33;
    $art = 'if !types[\'@{minute}\']';
    ;
    $expr = '<%if (!types[\'@{minute}\']) {%>';
    if (!types['@{minute}']) {
        ;
        $p += ' _zs_gallery_mx-calendar_index_-time-disabled ';
        $line = 33;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><i class="mc-iconfont _zs_gallery_mx-calendar_index_-ipb fl" ';
    $line = 35;
    $art = 'if types[\'@{minute}\']';
    ;
    $expr = '<%if (types[\'@{minute}\']) {%>';
    if (types['@{minute}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{minute}\'})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{minute}\'})" ';
        $line = 35;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xeb79;</i><i class="mc-iconfont _zs_gallery_mx-calendar_index_-ipb fr" ';
    $line = 38;
    $art = 'if types[\'@{minute}\']';
    ;
    $expr = '<%if (types[\'@{minute}\']) {%>';
    if (types['@{minute}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{minute}\',inc:1})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{minute}\',inc:1})" ';
        $line = 38;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xeb78;</i></div></div><div mxv mxa="_zs_gallerye(:f" class="_zs_gallery_mx-calendar_index_-group"><div mxv mxa="_zs_gallerye(:g" class="mb5"><input class="input _zs_gallery_mx-calendar_index_-ipt" maxlength="2" autocomplete="off" value="';
    $line = 46;
    $art = '=format(time[\'@{second}\'])';
    ;
    $p += ($expr = '<%=format(time[\'@{second}\'])%>', $e(format(time['@{second}']))) + '" ';
    $line = 47;
    $art = 'if types[\'@{second}\']';
    ;
    $expr = '<%if (types[\'@{second}\']) {%>';
    if (types['@{second}']) {
        ;
        $p += ' mx-change="' + $viewId + '@{set}({type:\'@{second}\'})" ';
        $line = 47;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled="disabled" ';
        $line = 47;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-keydown="' + $viewId + '@{press.check}({type:\'@{second}\'})"/></div><div class="clearfix ';
    $line = 50;
    $art = 'if !types[\'@{second}\']';
    ;
    $expr = '<%if (!types[\'@{second}\']) {%>';
    if (!types['@{second}']) {
        ;
        $p += ' _zs_gallery_mx-calendar_index_-time-disabled ';
        $line = 50;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><i class="mc-iconfont _zs_gallery_mx-calendar_index_-ipb fl" ';
    $line = 52;
    $art = 'if types[\'@{second}\']';
    ;
    $expr = '<%if (types[\'@{second}\']) {%>';
    if (types['@{second}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{second}\'})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{second}\'})" ';
        $line = 52;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xeb79;</i><i class="mc-iconfont _zs_gallery_mx-calendar_index_-ipb fr" ';
    $line = 55;
    $art = 'if types[\'@{second}\']';
    ;
    $expr = '<%if (types[\'@{second}\']) {%>';
    if (types['@{second}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{second}\',inc:1})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{second}\',inc:1})" ';
        $line = 55;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>&#xeb78;</i></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/content.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        var altered = that.updater.altered();
        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        var time = parseTime(extra.time);
        var types = parseType(extra.types);
        that.updater.set({
            format: format,
            time: time,
            types: types
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
    val: function (v) {
        var updater = this.updater;
        if (v) {
            updater.digest({
                time: parseTime(v)
            });
        }
        var time = updater.get('time');
        return format(time['@{hour}']) + ':' + format(time['@{minute}']) + ':' + format(time['@{second}']);
    },
    '@{change.time.by.type}': function (type, increase) {
        var me = this;
        var time = me.updater.get('time');
        var max = type == '@{hour}' ? 23 : 59;
        if (increase) {
            time[type]++;
        }
        else {
            time[type]--;
        }
        if (time[type] > max) {
            time[type] = 0;
        }
        else if (time[type] < 0) {
            time[type] = max;
        }
        me.updater.digest({
            time: time
        });
    },
    '@{fire.event}': function () {
        var me = this;
        var node = $('#' + me.id);
        var time = me.updater.get('time');
        node.trigger({
            type: 'change',
            time: format(time['@{hour}']) + ':' + format(time['@{minute}']) + ':' + format(time['@{second}'])
        });
    },
    '@{change}<click>': function (e) {
        var me = this;
        if (!me['@{fast.change.start}']) {
            var params = e.params;
            me['@{change.time.by.type}'](params.type, params.inc);
            me['@{fire.event}']();
        }
    },
    '@{set}<change>': function (e) {
        e.stopPropagation();
        var type = e.params.type;
        var max = type == '@{hour}' ? 23 : 59;
        var target = e.eventTarget;
        var value = target.value;
        var v = parseInt(value, 10);
        var time = this.updater.get('time');
        if (v || v === 0) {
            if (v < 0)
                v = 0;
            else if (v > max)
                v = max;
            if (v !== time[type]) {
                time[type] = v;
                this.updater.digest({
                    time: time
                });
                this['@{fire.event}']();
            }
            else {
                target.value = format(v);
            }
        }
        else {
            target.value = format(time[type]);
        }
    },
    '@{fast.start}<mousedown>': function (e) {
        var me = this;
        var params = e.params;
        me['@{long.tap.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{interval.timer}'] = setInterval(me.wrapAsync(function () {
                me['@{fast.change.start}'] = true;
                me['@{change.time.by.type}'](params.type, params.inc);
            }), 50);
        }), 250);
    },
    '@{press.check}<keydown>': function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            var me_1 = this;
            me_1['@{change.time.by.type}'](e.params.type, e.keyCode == 38);
            clearTimeout(me_1['@{event.dealy.timer}']);
            me_1['@{event.dealy.timer}'] = setTimeout(me_1.wrapAsync(function () {
                me_1['@{fire.event}']();
            }), 100);
        }
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['@{long.tap.timer}']);
        clearInterval(me['@{interval.timer}']);
        setTimeout(me.wrapAsync(function () {
            if (me['@{fast.change.start}']) {
                me['@{fire.event}']();
            }
            delete me['@{fast.change.start}'];
        }), 0);
    }
});

});