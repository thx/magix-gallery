/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_N","._fy{width:58px;float:left;overflow:hidden}._fz{font-size:30px;height:50px;text-align:center;margin-bottom:10px}._fA{width:28px;height:28px;padding:0}._fB{font-size:27px;float:left;line-height:32px;margin-top:8px;font-weight:bolder;display:inline-block;width:30px;text-align:center}");
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
        '__cV': parseInt(ts[0], 10) || 0,
        '__gt': parseInt(ts[1], 10) || 0,
        '__gu': parseInt(ts[2], 10) || 0
    };
};
var parseType = function (type) {
    if (!type) {
        type = 'all';
    }
    var enables = {
        '__cV': true,
        '__gt': true,
        '__gu': true
    };
    var keysMap = {
        hour: '__cV',
        minute: '__gt',
        second: '__gu'
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
    tmpl: {"html":"<div class=\"_fy\"><input class=\"_ap _fz\" value=\"<%=$$.format($$.time['__cV'])%>\" <%if($$.types['__cV']){%> mx-change=\"\u001f\u001e__gx({type:'__cV'})\" <%}else{%> disabled<%}%> maxlength=\"2\" mx-keydown=\"\u001f\u001e__dY({type:'__cV'})\" autocomplete=\"off\"><button type=\"button\" class=\"_an _fA _aa\" <%if($$.types['__cV']){%> mx-click=\"\u001f\u001e__gw({type:'__cV'})\" mx-mousedown=\"\u001f\u001e__dX({type:'__cV'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__\">&#xe6df;</i></button><button type=\"button\" class=\"_an _fA _ab\" <%if($$.types['__cV']){%> mx-click=\"\u001f\u001e__gw({type:'__cV',inc:1})\" mx-mousedown=\"\u001f\u001e__dX({type:'__cV',inc:1})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__\">&#xe661;</i></button></div><span class=\"_fB\">:</span><div class=\"_fy\"><input class=\"_ap _fz\" value=\"<%=$$.format($$.time['__gt'])%>\" <%if($$.types['__gt']){%> mx-change=\"\u001f\u001e__gx({type:'__gt'})\" <%}else{%> disabled<%}%> maxlength=\"2\" mx-keydown=\"\u001f\u001e__dY({type:'__gt'})\" autocomplete=\"off\"><button type=\"button\" class=\"_an _fA _aa\" <%if($$.types['__gt']){%> mx-click=\"\u001f\u001e__gw({type:'__gt'})\" mx-mousedown=\"\u001f\u001e__dX({type:'__gt'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__\">&#xe6df;</i></button><button type=\"button\" class=\"_an _fA _ab\" <%if($$.types['__gt']){%> mx-click=\"\u001f\u001e__gw({type:'__gt',inc:1})\" mx-mousedown=\"\u001f\u001e__dX({type:'__gt',inc:1})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__\">&#xe661;</i></button></div><span class=\"_fB\">:</span><div class=\"_fy\"><input class=\"_ap _fz\" value=\"<%=$$.format($$.time['__gu'])%>\" <%if($$.types['__gu']){%> mx-change=\"\u001f\u001e__gx({type:'__gu'})\" <%}else{%> disabled<%}%> maxlength=\"2\" mx-keydown=\"\u001f\u001e__dY({type:'__gu'})\" autocomplete=\"off\"><button type=\"button\" class=\"_an _fA _aa\" <%if($$.types['__gu']){%> mx-click=\"\u001f\u001e__gw({type:'__gu'})\" mx-mousedown=\"\u001f\u001e__dX({type:'__gu'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__\">&#xe6df;</i></button><button type=\"button\" class=\"_an _fA _ab\" <%if($$.types['__gu']){%> mx-click=\"\u001f\u001e__gw({type:'__gu',inc:1})\" mx-mousedown=\"\u001f\u001e__dX({type:'__gu',inc:1})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__\">&#xe661;</i></button></div>"},
    init: function (extra) {
        var me = this;
        var time = parseTime(extra.time);
        var types = parseType(extra.types);
        me.updater.set({
            format: format,
            time: time,
            types: types
        });
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
    '__gv': function (type, increase) {
        var me = this;
        var time = me.updater.get('time');
        var max = type == '__cV' ? 23 : 59;
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
    '__v': function () {
        var me = this;
        var node = $('#' + me.id);
        var time = me.updater.get('time');
        node.trigger({
            type: 'change',
            time: format(time['__cV']) + ':' + format(time['__gt']) + ':' + format(time['__gu'])
        });
    },
    '__gw<click>': function (e) {
        var me = this;
        if (!me['__dU']) {
            var params = e.params;
            me['__gv'](params.type, params.inc);
            me['__v']();
        }
    },
    '__gx<change>': function (e) {
        e.stopPropagation();
        var type = e.params.type;
        var max = type == '__cV' ? 23 : 59;
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
                this['__v']();
            }
            else {
                target.value = format(v);
            }
        }
        else {
            target.value = format(time[type]);
        }
    },
    '__dX<mousedown>': function (e) {
        var me = this;
        var params = e.params;
        me['__dV'] = setTimeout(me.wrapAsync(function () {
            me['__dW'] = setInterval(me.wrapAsync(function () {
                me['__dU'] = true;
                me['__gv'](params.type, params.inc);
            }), 50);
        }), 300);
    },
    '__dY<keydown>': function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            var me_1 = this;
            me_1['__gv'](e.params.type, e.keyCode == 38);
            clearTimeout(me_1['__gy']);
            me_1['__gy'] = setTimeout(me_1.wrapAsync(function () {
                me_1['__v']();
            }), 100);
        }
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['__dV']);
        clearInterval(me['__dW']);
        setTimeout(me.wrapAsync(function () {
            if (me['__dU']) {
                me['__v']();
            }
            delete me['__dU'];
        }), 0);
    }
});

});