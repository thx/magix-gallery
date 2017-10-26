/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("G",".fn{width:58px;float:left;overflow:hidden}.fo{font-size:30px;height:50px;text-align:center;margin-bottom:10px}.fp{width:28px;height:28px;padding:0}.fq{font-size:27px;float:left;line-height:32px;margin-top:8px;font-weight:bolder;display:inline-block;width:30px;text-align:center}");
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
        hour: parseInt(ts[0], 10) || 0,
        minute: parseInt(ts[1], 10) || 0,
        second: parseInt(ts[2], 10) || 0
    };
};
var parseType = function (type) {
    if (!type) {
        type = 'all';
    }
    var enables = {
        hour: true,
        minute: true,
        second: true
    };
    if (type != 'all') {
        for (var p in enables) {
            if (type.indexOf(p) === -1) {
                delete enables[p];
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
    tmpl: {"html":"<div class=\"fn\"><input mx-guid=\"g0\u001f\" class=\"an fo\" value=\"<%=$$.format($$.time.hour)%>\" <%if($$.types.hour){%> mx-change=\"\u001f\u001e_eW({type:'hour'})\" <%}else{%> disabled<%}%> maxlength=\"2\"><button mx-guid=\"g1\u001f\" type=\"button\" class=\"al fp Z\" <%if($$.types.hour){%> mx-click=\"\u001f\u001e_eV({type:'hour'})\" mx-mousedown=\"\u001f\u001e_cM({type:'hour'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"_\">&#xe6df;</i></button><button mx-guid=\"g2\u001f\" type=\"button\" class=\"al fp a_\" <%if($$.types.hour){%> mx-click=\"\u001f\u001e_eV({type:'hour',inc:true})\" mx-mousedown=\"\u001f\u001e_cM({type:'hour',inc:true})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"_\">&#xe661;</i></button></div><span class=\"fq\">:</span><div class=\"fn\"><input mx-guid=\"g3\u001f\" class=\"an fo\" value=\"<%=$$.format($$.time.minute)%>\" <%if($$.types.minute){%> mx-change=\"\u001f\u001e_eW({type:'minute'})\" <%}else{%> disabled<%}%> maxlength=\"2\"><button mx-guid=\"g4\u001f\" type=\"button\" class=\"al fp Z\" <%if($$.types.minute){%> mx-click=\"\u001f\u001e_eV({type:'minute'})\" mx-mousedown=\"\u001f\u001e_cM({type:'minute'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"_\">&#xe6df;</i></button><button mx-guid=\"g5\u001f\" type=\"button\" class=\"al fp a_\" <%if($$.types.minute){%> mx-click=\"\u001f\u001e_eV({type:'minute',inc:true})\" mx-mousedown=\"\u001f\u001e_cM({type:'minute',inc:true})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"_\">&#xe661;</i></button></div><span class=\"fq\">:</span><div class=\"fn\"><input mx-guid=\"g6\u001f\" class=\"an fo\" value=\"<%=$$.format($$.time.second)%>\" <%if($$.types.second){%> mx-change=\"\u001f\u001e_eW({type:'second'})\" <%}else{%> disabled<%}%> maxlength=\"2\"><button mx-guid=\"g7\u001f\" type=\"button\" class=\"al fp Z\" <%if($$.types.second){%> mx-click=\"\u001f\u001e_eV({type:'second'})\" mx-mousedown=\"\u001f\u001e_cM({type:'second'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"_\">&#xe6df;</i></button><button mx-guid=\"g8\u001f\" type=\"button\" class=\"al fp a_\" <%if($$.types.second){%> mx-click=\"\u001f\u001e_eV({type:'second',inc:true})\" mx-mousedown=\"\u001f\u001e_cM({type:'second',inc:true})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"_\">&#xe661;</i></button></div>","subs":[{"keys":["time","types"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.format($$.time.hour)%>\" <%if($$.types.hour){%> mx-change=\"\u001f\u001e_eW({type:'hour'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g1\u001f\"]","attr":"<%if($$.types.hour){%> mx-click=\"\u001f\u001e_eV({type:'hour'})\" mx-mousedown=\"\u001f\u001e_cM({type:'hour'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g2\u001f\"]","attr":"<%if($$.types.hour){%> mx-click=\"\u001f\u001e_eV({type:'hour',inc:true})\" mx-mousedown=\"\u001f\u001e_cM({type:'hour',inc:true})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["time","types"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"value=\"<%=$$.format($$.time.minute)%>\" <%if($$.types.minute){%> mx-change=\"\u001f\u001e_eW({type:'minute'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g4\u001f\"]","attr":"<%if($$.types.minute){%> mx-click=\"\u001f\u001e_eV({type:'minute'})\" mx-mousedown=\"\u001f\u001e_cM({type:'minute'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g5\u001f\"]","attr":"<%if($$.types.minute){%> mx-click=\"\u001f\u001e_eV({type:'minute',inc:true})\" mx-mousedown=\"\u001f\u001e_cM({type:'minute',inc:true})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["time","types"],"path":"input[mx-guid=\"g6\u001f\"]","attr":"value=\"<%=$$.format($$.time.second)%>\" <%if($$.types.second){%> mx-change=\"\u001f\u001e_eW({type:'second'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g7\u001f\"]","attr":"<%if($$.types.second){%> mx-click=\"\u001f\u001e_eV({type:'second'})\" mx-mousedown=\"\u001f\u001e_cM({type:'second'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g8\u001f\"]","attr":"<%if($$.types.second){%> mx-click=\"\u001f\u001e_eV({type:'second',inc:true})\" mx-mousedown=\"\u001f\u001e_cM({type:'second',inc:true})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]}]},
    init: function (extra) {
        var me = this;
        var time = parseTime(extra.time);
        var types = parseType(extra.type);
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
    '_eU': function (type, increase) {
        var me = this;
        var time = me.updater.get('time');
        var max = type == 'hour' ? 23 : 59;
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
        me['_u']();
    },
    '_u': function () {
        var node = $('#' + this.id);
        var time = this.updater.get('time');
        node.trigger({
            type: 'change',
            time: format(time.hour) + ':' + format(time.minute) + ':' + format(time.second)
        });
    },
    '_eV<click>': function (e) {
        var me = this;
        if (!me['_cJ']) {
            var params = e.params;
            this['_eU'](params.type, params.inc);
        }
    },
    '_eW<change>': function (e) {
        e.stopPropagation();
        var type = e.params.type;
        var max = type == 'hour' ? 23 : 59;
        var value = e.eventTarget.value;
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
                this['_u']();
            }
            else {
                e.eventTarget.value = format(v);
            }
        }
        else {
            e.eventTarget.value = format(time[type]);
        }
    },
    '_cM<mousedown>': function (e) {
        var me = this;
        var params = e.params;
        me['_cK'] = setTimeout(me.wrapAsync(function () {
            me['_cL'] = setInterval(me.wrapAsync(function () {
                me['_cJ'] = true;
                me['_eU'](params.type, params.inc);
            }), 80);
        }), 300);
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['_cK']);
        clearInterval(me['_cL']);
        setTimeout(me.wrapAsync(function () {
            delete me['_cJ'];
        }), 0);
    }
});

});