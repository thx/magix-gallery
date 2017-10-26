/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-runner/index',["magix"],function(require,exports,module){
/*Magix*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var setRAF = window.requestAnimationFrame || (function (fn) {
    return setTimeout(fn, 16);
});
var cancelRAF = window.cancelAnimationFrame || clearTimeout;
var Now = Date.now || (function () {
    return new Date().getTime();
});
module.exports = {
    '_dd': [],
    '_aH': function (interval, fn) {
        var me = this;
        me['_dd'].push({
            i: interval || 15,
            f: fn,
            n: Now()
        });
        me['_di']();
    },
    '_aI': function (fn) {
        var me = this;
        var q = me['_dd'];
        for (var o = void 0, i = 0; i < q.length; i++) {
            o = q[i];
            if (!o.r && o.f == fn) {
                o.r = 1;
                break;
            }
        }
    },
    '_di': function () {
        var me = this;
        if (!me['_dl']) {
            var run_1 = function () {
                var q = me['_dd'];
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
                    cancelRAF(me['_dl']);
                    delete me['_dl'];
                }
                else {
                    me['_dl'] = setRAF(run_1);
                }
            };
            me['_dl'] = setRAF(run_1);
        }
    }
};

});