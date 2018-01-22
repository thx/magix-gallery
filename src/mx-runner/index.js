/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-runner/index",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var setRAF = window.requestAnimationFrame || (function (fn) {
    return setTimeout(fn, 16);
});
var cancelRAF = window.cancelAnimationFrame || clearTimeout;
var Now = Date.now || (function () {
    return new Date().getTime();
});
module.exports = {
    '__ep': [],
    '__ag': function (interval, fn) {
        var me = this;
        me['__ep'].push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        me['__eu']();
    },
    '__ai': function (fn) {
        var me = this;
        var q = me['__ep'];
        for (var o = void 0, i = 0; i < q.length; i++) {
            o = q[i];
            if (!o.r && o.f == fn) {
                o.r = 1;
                break;
            }
        }
    },
    '__eu': function () {
        var me = this;
        if (!me['__ex']) {
            var run_1 = function () {
                var q = me['__ep'];
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
                    cancelRAF(me['__ex']);
                    delete me['__ex'];
                }
                else {
                    me['__ex'] = setRAF(run_1);
                }
            };
            me['__ex'] = setRAF(run_1);
        }
    }
};

});