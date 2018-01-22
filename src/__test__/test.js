/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/test",["magix","../mx-form/index","./ctrl","mx-pagination/index"],(require,exports,module)=>{
/*Magix,Form*/
require("./ctrl");
require("mx-pagination/index");
/*
ver:2.0.1
*/
var Magix = require("magix");
Magix.applyStyle("_f","._aR{color:red}");
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
    tmpl: {"html":"<div><div anim=\"true\" style=\"background:red;\" mx-view=\"__test__/ctrl\"><div mx-view=\"mx-pagination/index?total=100&page=<%!$eu($$.list.length)%>\"></div></div></div><div><%for(var _=0;_<10;_++){%><div style=\"float:left;margin:4px;padding:2px;border:solid 6px <%if($$.active==_){%>red<%}else{%>green<%}%>\"><img src=\"http://iph.href.lu/80x40\"></div><%}%></div><button type=\"button\" class=\"_an _ao\" mx-click=\"\u001f\u001eincrease()\">increase</button><button type=\"button\" class=\"_an _ao _v\" mx-click=\"\u001f\u001edecrease()\">decrease</button><button type=\"button\" class=\"_an _ao _v\" mx-click=\"\u001f\u001estart()\">start</button>"},
    mixins: [Form],
    //mixins: [Magix.State.clean('go')],
    init: function () {
        this.observeState('go');
        S.queryUser();
    },
    render: function () {
        this.updater.digest({
            list: [1, 2],
            Math: Math
        });
        var a = function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('ok');
                }, 2000);
            });
        };
        var b = function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('_aS');
                }, 2000);
            });
        };
        a().then(this.wrapAsync(function (r) {
            console.log(r);
            return b();
        })).then(this.wrapAsync(function (r) {
            console.log('r', r);
        }));
    },
    'increase<click>': function () {
        var list = this.updater.get('list');
        list.push(Magix.guid());
        this.updater.digest({
            list: list
        });
    },
    'decrease<click>': function () {
        this.owner.mountVframe('vf_1_' + this.id, '__test__/test');
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
    }
});

});