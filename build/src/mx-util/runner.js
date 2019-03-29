/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-util/runner",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
var setRAF = window.requestAnimationFrame || (function (fn) {
    return setTimeout(fn, 16);
});
var cancelRAF = window.cancelAnimationFrame || clearTimeout;
var Now = Date.now || (function () {
    return new Date().getTime();
});
module.exports = {
    '@{task.list}': [],
    '@{task.add}': function (interval, fn) {
        var me = this;
        me['@{task.list}'].push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        me['@{start.work}']();
    },
    '@{task.remove}': function (fn) {
        var me = this;
        var q = me['@{task.list}'];
        for (var o = void 0, i = 0; i < q.length; i++) {
            o = q[i];
            if (!o.r && o.f == fn) {
                o.r = 1;
                break;
            }
        }
    },
    '@{start.work}': function () {
        var me = this;
        if (!me['@{timer.id}']) {
            var run_1 = function () {
                var q = me['@{task.list}'];
                for (var i = 0, o = void 0, now = void 0; i < q.length; i++) {
                    o = q[i];
                    if (o.r) {
                        q.splice(i--, 1);
                    }
                    else {
                        now = Now();
                        if (now - o.n >= o.i) {
                            o.n = now;
                            Magix.toTry(o.f);
                        }
                    }
                }
                if (!q.length) {
                    cancelRAF(me['@{timer.id}']);
                    delete me['@{timer.id}'];
                }
                else {
                    me['@{timer.id}'] = setRAF(run_1);
                }
            };
            me['@{timer.id}'] = setRAF(run_1);
        }
    }
};

});