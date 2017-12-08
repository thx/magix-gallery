/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-time/index',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-time_index_",".__mx-time_index_-group {\n  width: 58px;\n  float: left;\n  overflow: hidden;\n}\n.__mx-time_index_-ipt {\n  font-size: 30px;\n  height: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.__mx-time_index_-o-btn {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n}\n.__mx-time_index_-spliter {\n  font-size: 27px;\n  float: left;\n  line-height: 32px;\n  margin-top: 8px;\n  font-weight: bolder;\n  display: inline-block;\n  width: 30px;\n  text-align: center;\n}\n");
let parseTime = time => {
    if (!time) {
        let d = new Date();
        time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }
    let ts = time.split(':');
    if (ts.length != 3) {
        throw new Error('bad time:' + time);
    }
    return {
        '@{hour}': parseInt(ts[0], 10) || 0,
        '@{minute}': parseInt(ts[1], 10) || 0,
        '@{second}': parseInt(ts[2], 10) || 0
    };
};
let parseType = type => {
    if (!type) {
        type = 'all';
    }
    let enables = {
        '@{hour}': true,
        '@{minute}': true,
        '@{second}': true
    };
    let keysMap = {
        hour: '@{hour}',
        minute: '@{minute}',
        second: '@{second}'
    };
    if (type != 'all') {
        for (let p in keysMap) {
            if (type.indexOf(p) === -1) {
                delete enables[keysMap[p]];
            }
        }
    }
    return enables;
};
let format = t => {
    if (t < 10)
        return '0' + t;
    return t;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-time_index_-group\"><input mx-guid=\"g0\u001f\" class=\"__mx-style_index_-input __mx-time_index_-ipt\" value=\"<%=$$.format($$.time['@{hour}'])%>\" <%if($$.types['@{hour}']){%> mx-change=\"\u001f\u001e@{set}({type:'@{hour}'})\" <%}else{%> disabled<%}%> maxlength=\"2\" mx-keydown=\"\u001f\u001e@{press.check}({type:'@{hour}'})\" autocomplete=\"off\"><button mx-guid=\"g1\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fl\" <%if($$.types['@{hour}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{hour}'})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{hour}'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__mx-style_index_-mc-iconfont\">&#xe6df;</i></button><button mx-guid=\"g2\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fr\" <%if($$.types['@{hour}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{hour}',inc:1})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{hour}',inc:1})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__mx-style_index_-mc-iconfont\">&#xe661;</i></button></div><span class=\"__mx-time_index_-spliter\">:</span><div class=\"__mx-time_index_-group\"><input mx-guid=\"g3\u001f\" class=\"__mx-style_index_-input __mx-time_index_-ipt\" value=\"<%=$$.format($$.time['@{minute}'])%>\" <%if($$.types['@{minute}']){%> mx-change=\"\u001f\u001e@{set}({type:'@{minute}'})\" <%}else{%> disabled<%}%> maxlength=\"2\" mx-keydown=\"\u001f\u001e@{press.check}({type:'@{minute}'})\" autocomplete=\"off\"><button mx-guid=\"g4\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fl\" <%if($$.types['@{minute}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{minute}'})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{minute}'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__mx-style_index_-mc-iconfont\">&#xe6df;</i></button><button mx-guid=\"g5\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fr\" <%if($$.types['@{minute}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{minute}',inc:1})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{minute}',inc:1})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__mx-style_index_-mc-iconfont\">&#xe661;</i></button></div><span class=\"__mx-time_index_-spliter\">:</span><div class=\"__mx-time_index_-group\"><input mx-guid=\"g6\u001f\" class=\"__mx-style_index_-input __mx-time_index_-ipt\" value=\"<%=$$.format($$.time['@{second}'])%>\" <%if($$.types['@{second}']){%> mx-change=\"\u001f\u001e@{set}({type:'@{second}'})\" <%}else{%> disabled<%}%> maxlength=\"2\" mx-keydown=\"\u001f\u001e@{press.check}({type:'@{second}'})\" autocomplete=\"off\"><button mx-guid=\"g7\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fl\" <%if($$.types['@{second}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{second}'})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{second}'})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__mx-style_index_-mc-iconfont\">&#xe6df;</i></button><button mx-guid=\"g8\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-time_index_-o-btn __mx-style_index_-fr\" <%if($$.types['@{second}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{second}',inc:1})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{second}',inc:1})\" <%}else{%> disabled<%}%> tabindex=\"-1\"><i class=\"__mx-style_index_-mc-iconfont\">&#xe661;</i></button></div>","subs":[{"keys":["time","types"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.format($$.time['@{hour}'])%>\" <%if($$.types['@{hour}']){%> mx-change=\"\u001f\u001e@{set}({type:'@{hour}'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g1\u001f\"]","attr":"<%if($$.types['@{hour}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{hour}'})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{hour}'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g2\u001f\"]","attr":"<%if($$.types['@{hour}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{hour}',inc:1})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{hour}',inc:1})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["time","types"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"value=\"<%=$$.format($$.time['@{minute}'])%>\" <%if($$.types['@{minute}']){%> mx-change=\"\u001f\u001e@{set}({type:'@{minute}'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g4\u001f\"]","attr":"<%if($$.types['@{minute}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{minute}'})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{minute}'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g5\u001f\"]","attr":"<%if($$.types['@{minute}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{minute}',inc:1})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{minute}',inc:1})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["time","types"],"path":"input[mx-guid=\"g6\u001f\"]","attr":"value=\"<%=$$.format($$.time['@{second}'])%>\" <%if($$.types['@{second}']){%> mx-change=\"\u001f\u001e@{set}({type:'@{second}'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-change"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g7\u001f\"]","attr":"<%if($$.types['@{second}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{second}'})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{second}'})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g8\u001f\"]","attr":"<%if($$.types['@{second}']){%> mx-click=\"\u001f\u001e@{change}({type:'@{second}',inc:1})\" mx-mousedown=\"\u001f\u001e@{fast.start}({type:'@{second}',inc:1})\" <%}else{%> disabled<%}%>","attrs":[{"n":"mx-click"},{"n":"mx-mousedown"},{"n":"disabled","b":1,"p":1}]}],"file":"mx-time/index.html"},
    init(extra) {
        let me = this;
        let time = parseTime(extra.time);
        let types = parseType(extra.type);
        me.updater.set({
            format,
            time,
            types
        });
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    val(v) {
        let updater = this.updater;
        if (v) {
            let time = parseTime(v);
            updater.digest({
                time
            });
        }
        return updater.get('time');
    },
    '@{change.time.by.type}'(type, increase) {
        let me = this;
        let time = me.updater.get('time');
        let max = type == '@{hour}' ? 23 : 59;
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
            time
        });
    },
    '@{fire.event}'() {
        let me = this;
        let node = $('#' + me.id);
        let time = me.updater.get('time');
        node.trigger({
            type: 'change',
            time: format(time['@{hour}']) + ':' + format(time['@{minute}']) + ':' + format(time['@{second}'])
        });
    },
    '@{change}<click>'(e) {
        let me = this;
        if (!me['@{fast.change.start}']) {
            let params = e.params;
            me['@{change.time.by.type}'](params.type, params.inc);
            me['@{fire.event}']();
        }
    },
    '@{set}<change>'(e) {
        e.stopPropagation();
        let type = e.params.type;
        let max = type == '@{hour}' ? 23 : 59;
        let target = e.eventTarget;
        let value = target.value;
        let v = parseInt(value, 10);
        let time = this.updater.get('time');
        if (v || v === 0) {
            if (v < 0)
                v = 0;
            else if (v > max)
                v = max;
            if (v !== time[type]) {
                time[type] = v;
                this.updater.digest({
                    time
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
    '@{fast.start}<mousedown>'(e) {
        let me = this;
        let params = e.params;
        me['@{long.tap.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{interval.timer}'] = setInterval(me.wrapAsync(() => {
                me['@{fast.change.start}'] = true;
                me['@{change.time.by.type}'](params.type, params.inc);
            }), 50);
        }), 300);
    },
    '@{press.check}<keydown>'(e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            let me = this;
            me['@{change.time.by.type}'](e.params.type, e.keyCode == 38);
            clearTimeout(me['@{event.dealy.timer}']);
            me['@{event.dealy.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{fire.event}']();
            }), 100);
        }
    },
    '$doc<mouseup>'() {
        let me = this;
        clearTimeout(me['@{long.tap.timer}']);
        clearInterval(me['@{interval.timer}']);
        setTimeout(me.wrapAsync(() => {
            if (me['@{fast.change.start}']) {
                me['@{fire.event}']();
            }
            delete me['@{fast.change.start}'];
        }), 0);
    }
});

});