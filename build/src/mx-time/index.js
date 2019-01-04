/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryaE","._zs_gallerymM{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymN{float:left;overflow:hidden}._zs_gallerymN ._zs_gallerymO{width:52px;height:40px;font-size:24px;text-align:center}._zs_gallerymN ._zs_gallerymP{width:24px;height:24px;padding:0}._zs_gallerymN ._zs_gallerymP,._zs_gallerymN ._zs_gallerymQ{line-height:24px}._zs_gallerymR{float:left;width:24px;font-size:24px;height:40px;line-height:40px;font-weight:bolder;text-align:center}");
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
        '__eT': parseInt(ts[0], 10) || 0,
        '__eU': parseInt(ts[1], 10) || 0,
        '__eV': parseInt(ts[2], 10) || 0
    };
};
var parseType = function (type) {
    if (!type) {
        type = 'all';
    }
    var enables = {
        '__eT': true,
        '__eU': true,
        '__eV': true
    };
    var keysMap = {
        hour: '__eT',
        minute: '__eU',
        second: '__eV'
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
} ; var $g = '', $_temp, $p = '', format = $$.format, time = $$.time, types = $$.types; $p += '<div mxv mxa="_zs_galleryd`:_" class="clearfix"><div mxv mxa="_zs_galleryd`:a" class="_zs_gallerymN"><div mxv mxa="_zs_galleryd`:b" class="mb5"><input class="input _zs_gallerymO" value="' + $e(format(time['__eT'])) + '" '; if (types['__eT']) {
    ;
    $p += ' mx-change="' + $viewId + '__eY({type:\'__eT\'})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' maxlength="2" mx-keydown="' + $viewId + '__fc({type:\'__eT\'})" autocomplete="off"/></div><div mxa="_zs_galleryd`:c" class="clearfix"><button type="button" class="btn _zs_gallerymP fl" '; if (types['__eT']) {
    ;
    $p += ' mx-click="' + $viewId + '__ab({type:\'__eT\'})" mx-mousedown="' + $viewId + '__fa({type:\'__eT\'})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' tabindex="-1"><i mxs="_zs_galleryd`:_" class="mc-iconfont _zs_gallerymQ">&#xe6df;</i></button><button type="button" class="btn _zs_gallerymP fr" '; if (types['__eT']) {
    ;
    $p += ' mx-click="' + $viewId + '__ab({type:\'__eT\',inc:1})" mx-mousedown="' + $viewId + '__fa({type:\'__eT\',inc:1})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' tabindex="-1"><i mxs="_zs_galleryd`:a" class="mc-iconfont _zs_gallerymQ">&#xe661;</i></button></div></div><div mxs="_zs_galleryd`:b" class="_zs_gallerymR">:</div><div mxv mxa="_zs_galleryd`:d" class="_zs_gallerymN"><div mxv mxa="_zs_galleryd`:e" class="mb5"><input class="input _zs_gallerymO" value="' + $e(format(time['__eU'])) + '" '; if (types['__eU']) {
    ;
    $p += ' mx-change="' + $viewId + '__eY({type:\'__eU\'})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' maxlength="2" mx-keydown="' + $viewId + '__fc({type:\'__eU\'})" autocomplete="off"/></div><div mxa="_zs_galleryd`:f" class="clearfix"><button type="button" class="btn _zs_gallerymP fl" '; if (types['__eU']) {
    ;
    $p += ' mx-click="' + $viewId + '__ab({type:\'__eU\'})" mx-mousedown="' + $viewId + '__fa({type:\'__eU\'})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' tabindex="-1"><i mxs="_zs_galleryd`:_" class="mc-iconfont _zs_gallerymQ">&#xe6df;</i></button><button type="button" class="btn _zs_gallerymP fr" '; if (types['__eU']) {
    ;
    $p += ' mx-click="' + $viewId + '__ab({type:\'__eU\',inc:1})" mx-mousedown="' + $viewId + '__fa({type:\'__eU\',inc:1})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' tabindex="-1"><i mxs="_zs_galleryd`:a" class="mc-iconfont _zs_gallerymQ">&#xe661;</i></button></div></div><div mxs="_zs_galleryd`:b" class="_zs_gallerymR">:</div><div mxv mxa="_zs_galleryd`:g" class="_zs_gallerymN"><div mxv mxa="_zs_galleryd`:h" class="mb5"><input class="input _zs_gallerymO" value="' + $e(format(time['__eV'])) + '" '; if (types['__eV']) {
    ;
    $p += ' mx-change="' + $viewId + '__eY({type:\'__eV\'})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' maxlength="2" mx-keydown="' + $viewId + '__fc({type:\'__eV\'})" autocomplete="off"/></div><div mxa="_zs_galleryd`:i" class="clearfix"><button type="button" class="btn _zs_gallerymP fl" '; if (types['__eV']) {
    ;
    $p += ' mx-click="' + $viewId + '__ab({type:\'__eV\'})" mx-mousedown="' + $viewId + '__fa({type:\'__eV\'})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' tabindex="-1"><i mxs="_zs_galleryd`:_" class="mc-iconfont _zs_gallerymQ">&#xe6df;</i></button><button type="button" class="btn _zs_gallerymP fr" '; if (types['__eV']) {
    ;
    $p += ' mx-click="' + $viewId + '__ab({type:\'__eV\',inc:1})" mx-mousedown="' + $viewId + '__fa({type:\'__eV\',inc:1})" ';
}
else {
    ;
    $p += ' disabled';
} ; $p += ' tabindex="-1"><i mxs="_zs_galleryd`:a" class="mc-iconfont _zs_gallerymQ">&#xe661;</i></button></div></div></div>'; return $p; },
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
    '__eW': function (type, increase) {
        var me = this;
        var time = me.updater.get('time');
        var max = type == '__eT' ? 23 : 59;
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
    '__y': function () {
        var me = this;
        var node = $('#' + me.id);
        var time = me.updater.get('time');
        node.trigger({
            type: 'change',
            time: format(time['__eT']) + ':' + format(time['__eU']) + ':' + format(time['__eV'])
        });
    },
    '__ab<click>': function (e) {
        var me = this;
        if (!me['__eX']) {
            var params = e.params;
            me['__eW'](params.type, params.inc);
            me['__y']();
        }
    },
    '__eY<change>': function (e) {
        e.stopPropagation();
        var type = e.params.type;
        var max = type == '__eT' ? 23 : 59;
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
                this['__y']();
            }
            else {
                target.value = format(v);
            }
        }
        else {
            target.value = format(time[type]);
        }
    },
    '__fa<mousedown>': function (e) {
        var me = this;
        var params = e.params;
        me['__eZ'] = setTimeout(me.wrapAsync(function () {
            me['__f_'] = setInterval(me.wrapAsync(function () {
                me['__eX'] = true;
                me['__eW'](params.type, params.inc);
            }), 50);
        }), 300);
    },
    '__fc<keydown>': function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            var me_1 = this;
            me_1['__eW'](e.params.type, e.keyCode == 38);
            clearTimeout(me_1['__fb']);
            me_1['__fb'] = setTimeout(me_1.wrapAsync(function () {
                me_1['__y']();
            }), 100);
        }
    },
    '$doc<mouseup>': function () {
        var me = this;
        clearTimeout(me['__eZ']);
        clearInterval(me['__f_']);
        setTimeout(me.wrapAsync(function () {
            if (me['__eX']) {
                me['__y']();
            }
            delete me['__eX'];
        }), 0);
    }
});

});