/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-time_index_","/* @dependent: ./index.less */\n.__mx-time_index_-group {\n  width: 58px;\n  float: left;\n  overflow: hidden;\n}\n.__mx-time_index_-ipt {\n  font-size: 30px;\n  height: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.__mx-time_index_-o-btn {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n}\n.__mx-time_index_-spliter {\n  font-size: 27px;\n  float: left;\n  line-height: 32px;\n  margin-top: 8px;\n  font-weight: bolder;\n  display: inline-block;\n  width: 30px;\n  text-align: center;\n}\n");
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
    $p += '<div mxv mxa="_;:_" class="__mx-time_index_-group"><input class="__mx-style_index_-input __mx-time_index_-ipt" value="' + ($expr = '<%=format(time[\'@{hour}\'])%>', $e(format(time['@{hour}']))) + '" ';
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
    $p += ' maxlength="2" mx-keydown="' + $viewId + '@{press.check}({type:\'@{hour}\'})" autocomplete="off"/><button type="button" class="__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fl" ';
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
    $p += ' tabindex="-1"><i mxs="_;:_" class="__mx-style_index_-mc-iconfont">&#xe6df;</i></button><button type="button" class="__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fr" ';
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
    $p += ' tabindex="-1"><i mxs="_;:a" class="__mx-style_index_-mc-iconfont">&#xe661;</i></button></div><span mxs="_;:b" class="__mx-time_index_-spliter">:</span><div mxv mxa="_;:a" class="__mx-time_index_-group"><input class="__mx-style_index_-input __mx-time_index_-ipt" value="' + ($expr = '<%=format(time[\'@{minute}\'])%>', $e(format(time['@{minute}']))) + '" ';
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
    $p += ' maxlength="2" mx-keydown="' + $viewId + '@{press.check}({type:\'@{minute}\'})" autocomplete="off"/><button type="button" class="__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fl" ';
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
    $p += ' tabindex="-1"><i mxs="_;:_" class="__mx-style_index_-mc-iconfont">&#xe6df;</i></button><button type="button" class="__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fr" ';
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
    $p += ' tabindex="-1"><i mxs="_;:a" class="__mx-style_index_-mc-iconfont">&#xe661;</i></button></div><span mxs="_;:b" class="__mx-time_index_-spliter">:</span><div mxv mxa="_;:b" class="__mx-time_index_-group"><input class="__mx-style_index_-input __mx-time_index_-ipt" value="' + ($expr = '<%=format(time[\'@{second}\'])%>', $e(format(time['@{second}']))) + '" ';
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
    $p += ' maxlength="2" mx-keydown="' + $viewId + '@{press.check}({type:\'@{second}\'})" autocomplete="off"/><button type="button" class="__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fl" ';
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
    $p += ' tabindex="-1"><i mxs="_;:_" class="__mx-style_index_-mc-iconfont">&#xe6df;</i></button><button type="button" class="__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fr" ';
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
    $p += ' tabindex="-1"><i mxs="_;:a" class="__mx-style_index_-mc-iconfont">&#xe661;</i></button></div>';
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
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (data) {
        var me = this;
        var altered = me.updater.altered();
        var time = parseTime(data.time);
        var types = parseType(data.types);
        me.updater.set({
            format: format,
            time: time,
            types: types
        });
        if (!altered)
            altered = me.updater.altered();
        if (altered)
            me.updater.snapshot();
        return altered;
    },
    render: function () {
        var me = this;
        me.updater.digest();
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