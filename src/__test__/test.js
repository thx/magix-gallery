/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/test",["magix","../mx-form/index"],(require,exports,module)=>{
/*Magix,Form*/

/*
ver:2.0.6
*/
var Magix = require("magix");
Magix.applyStyle("____test___test_",".____test___test_-name{\n    color:red\n}");
var Form = require("../mx-form/index");
var S = {
    ctor: function () {
        console.log('test');
    },
    queryUser: function () {
        Magix.State.digest({
            go: 20
        });
    }
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
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxs="_W:_"></div>';
    $line = 33;
    $art = 'if list.length<6';
    ;
    $expr = '<%if (list.length < 6) {%>';
    if (list.length < 6) {
        ;
        $p += '<div mxa="_W:_" name="a" test="b">';
        $line = 34;
        $art = '=list.length';
        ;
        $p += ($expr = '<%=list.length%>', $e(list.length)) + '</div>';
        $line = 35;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxa="_W:a" name="a" test="b">';
        $line = 36;
        $art = '=2*list.length';
        ;
        $p += ($expr = '<%=2 * list.length%>', $e(2 * list.length)) + '</div>';
        $line = 37;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<button mxs="_W:a" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + 'increase()">increase</button><button mxs="_W:b" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml20" mx-click="' + $viewId + 'decrease()">decrease</button><button mxs="_W:c" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml20" mx-click="' + $viewId + 'start()">start</button>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/test.html';
    throw msg;
} return $p; },
    mixins: [Form],
    //mixins: [Magix.State.clean('go')],
    init: function () {
        this.observeState('go');
        S.queryUser();
    },
    render: function () {
        this.updater.digest({
            list: [1, 2, 3, 4, 5],
            Math: Math
        });
        // let abc = 20;
        // setInterval(() => {
        //     this.updater.digest({
        //         value: abc++
        //     });
        // }, 1500);
        var a = function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('ok');
                }, 2000);
            });
        };
        console.log(this.updater);
    },
    'increase<click>': function () {
        var list = this.updater.get('list');
        list.push(Magix.guid());
        console.log('enter');
        this.updater.digest({
            list: list
        });
    },
    'decrease<click>': function () {
        var list = this.updater.get('list');
        list.pop();
        this.updater.digest();
        //this.owner.mountVframe('vf_1_' + this.id, '@./test');
    },
    'remove<click>': function (e) {
        var list = this.updater.get('list');
        list.splice(e.params.i, 1);
        this.updater.digest({ list: list });
    },
    'start<click>': function () {
        var _this = this;
        var active = 0;
        setInterval(function () {
            active++;
            if (active >= 10) {
                active = 0;
            }
            _this.updater.digest({
                active: active
            });
        }, 150);
    },
    '@{test}<input>': function (e) {
        var value = e.eventTarget.value;
        // e.preventDefault();
        //setTimeout(() => {
        this.updater.digest({
            value: value
        });
        //}, 150);
    },
    '$doc<mousedown,mouseup>': function () {
        console.log(document.activeElement);
    },
    '@{show}<click>': function (e) {
        var that = this;
        that.updater.set({
            editing: true
        }).digest();
    }
});

});