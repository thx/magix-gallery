/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-time_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-time_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-time_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-time_index_-group {\n  float: left;\n  overflow: hidden;\n}\n._zs_gallery_mx-time_index_-group ._zs_gallery_mx-time_index_-ipt {\n  width: 52px;\n  height: 40px;\n  font-size: 24px;\n  text-align: center;\n}\n._zs_gallery_mx-time_index_-group ._zs_gallery_mx-time_index_-o-btn {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  padding: 0;\n}\n._zs_gallery_mx-time_index_-group ._zs_gallery_mx-time_index_-o-icon {\n  line-height: 24px;\n}\n._zs_gallery_mx-time_index_-spliter {\n  float: left;\n  width: 24px;\n  font-size: 24px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: bolder;\n  text-align: center;\n}\n");
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
    $p += '<div mxv mxa="_zs_gallerycW:_" class="clearfix"><div mxv mxa="_zs_gallerycW:a" class="_zs_gallery_mx-time_index_-group"><div mxv mxa="_zs_gallerycW:b" class="mb5"><input class="input _zs_gallery_mx-time_index_-ipt" value="' + ($expr = '<%=format(time[\'@{hour}\'])%>', $e(format(time['@{hour}']))) + '" ';
    $expr = '<%if (types[\'@{hour}\']) {%>';
    if (types['@{hour}']) {
        ;
        $p += ' mx-change="' + $viewId + '@{set}({type:\'@{hour}\'})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' maxlength="2" mx-keydown="' + $viewId + '@{press.check}({type:\'@{hour}\'})" autocomplete="off"/></div><div mxa="_zs_gallerycW:c" class="clearfix"><button type="button" class="btn _zs_gallery_mx-time_index_-o-btn fl" ';
    $expr = '<%if (types[\'@{hour}\']) {%>';
    if (types['@{hour}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{hour}\'})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{hour}\'})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' tabindex="-1"><i mxs="_zs_gallerycW:_" class="mc-iconfont _zs_gallery_mx-time_index_-o-icon">&#xe6df;</i></button><button type="button" class="btn _zs_gallery_mx-time_index_-o-btn fr" ';
    $expr = '<%if (types[\'@{hour}\']) {%>';
    if (types['@{hour}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{hour}\',inc:1})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{hour}\',inc:1})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' tabindex="-1"><i mxs="_zs_gallerycW:a" class="mc-iconfont _zs_gallery_mx-time_index_-o-icon">&#xe661;</i></button></div></div><div mxs="_zs_gallerycW:b" class="_zs_gallery_mx-time_index_-spliter">:</div><div mxv mxa="_zs_gallerycW:d" class="_zs_gallery_mx-time_index_-group"><div mxv mxa="_zs_gallerycW:e" class="mb5"><input class="input _zs_gallery_mx-time_index_-ipt" value="' + ($expr = '<%=format(time[\'@{minute}\'])%>', $e(format(time['@{minute}']))) + '" ';
    $expr = '<%if (types[\'@{minute}\']) {%>';
    if (types['@{minute}']) {
        ;
        $p += ' mx-change="' + $viewId + '@{set}({type:\'@{minute}\'})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' maxlength="2" mx-keydown="' + $viewId + '@{press.check}({type:\'@{minute}\'})" autocomplete="off"/></div><div mxa="_zs_gallerycW:f" class="clearfix"><button type="button" class="btn _zs_gallery_mx-time_index_-o-btn fl" ';
    $expr = '<%if (types[\'@{minute}\']) {%>';
    if (types['@{minute}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{minute}\'})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{minute}\'})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' tabindex="-1"><i mxs="_zs_gallerycW:_" class="mc-iconfont _zs_gallery_mx-time_index_-o-icon">&#xe6df;</i></button><button type="button" class="btn _zs_gallery_mx-time_index_-o-btn fr" ';
    $expr = '<%if (types[\'@{minute}\']) {%>';
    if (types['@{minute}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{minute}\',inc:1})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{minute}\',inc:1})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' tabindex="-1"><i mxs="_zs_gallerycW:a" class="mc-iconfont _zs_gallery_mx-time_index_-o-icon">&#xe661;</i></button></div></div><div mxs="_zs_gallerycW:b" class="_zs_gallery_mx-time_index_-spliter">:</div><div mxv mxa="_zs_gallerycW:g" class="_zs_gallery_mx-time_index_-group"><div mxv mxa="_zs_gallerycW:h" class="mb5"><input class="input _zs_gallery_mx-time_index_-ipt" value="' + ($expr = '<%=format(time[\'@{second}\'])%>', $e(format(time['@{second}']))) + '" ';
    $expr = '<%if (types[\'@{second}\']) {%>';
    if (types['@{second}']) {
        ;
        $p += ' mx-change="' + $viewId + '@{set}({type:\'@{second}\'})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' maxlength="2" mx-keydown="' + $viewId + '@{press.check}({type:\'@{second}\'})" autocomplete="off"/></div><div mxa="_zs_gallerycW:i" class="clearfix"><button type="button" class="btn _zs_gallery_mx-time_index_-o-btn fl" ';
    $expr = '<%if (types[\'@{second}\']) {%>';
    if (types['@{second}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{second}\'})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{second}\'})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' tabindex="-1"><i mxs="_zs_gallerycW:_" class="mc-iconfont _zs_gallery_mx-time_index_-o-icon">&#xe6df;</i></button><button type="button" class="btn _zs_gallery_mx-time_index_-o-btn fr" ';
    $expr = '<%if (types[\'@{second}\']) {%>';
    if (types['@{second}']) {
        ;
        $p += ' mx-click="' + $viewId + '@{change}({type:\'@{second}\',inc:1})" mx-mousedown="' + $viewId + '@{fast.start}({type:\'@{second}\',inc:1})" ';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' disabled';
        $expr = '<%}%>';
    }
    ;
    $p += ' tabindex="-1"><i mxs="_zs_gallerycW:a" class="mc-iconfont _zs_gallery_mx-time_index_-o-icon">&#xe661;</i></button></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/index.html';
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
            var time = parseTime(v);
            updater.digest({
                time: time
            });
        }
        return updater.get('time');
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
        }), 300);
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