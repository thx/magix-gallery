/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-runner/fx",["magix","./index"],(require,exports,module)=>{
/*Magix,Runner*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var Runner = require("./index");
var DALG = function (t) { return t; };
var Now = Date.now || (function () {
    return new Date().getTime();
});
var FX = Magix.Base.extend({
    ctor: function (interval, alg) {
        var me = this;
        if (!me['@{alg.fn}'] || alg) {
            alg = alg || DALG;
            me['@{alg.fn}'] = function (from, to) {
                return (from + (to - from) * alg(me['@{current.timespan}'] / me['@{item.timespan}']));
            };
        }
        me['@{task.list}'] = [];
        me['@{interval}'] = interval;
    },
    '@{run}': function (time, callback) {
        var me = this;
        if (!me['@{destroyed}']) {
            me['@{task.list}'].push({
                '@{timespan}': time,
                '@{fn}': callback
            });
            if (!me['@{for.runner.fn}']) {
                me['@{start.work}']();
            }
        }
    },
    '@{start.work}': function () {
        var me = this;
        var item = me['@{task.list}'].shift();
        if (item) {
            me['@{item.timespan}'] = item['@{timespan}'];
            me['@{item.fn}'] = item['@{fn}'];
            me['@{now.time}'] = Now();
            if (!me['@{for.runner.fn}']) {
                Runner['@{task.add}'](me['@{interval}'], me['@{for.runner.fn}'] = function (end) {
                    me['@{current.timespan}'] = Date.now() - me['@{now.time}'];
                    if (me['@{current.timespan}'] > me['@{item.timespan}']) {
                        me['@{current.timespan}'] = me['@{item.timespan}'];
                        end = 1;
                    }
                    try {
                        me['@{item.fn}'](me['@{alg.fn}']);
                    }
                    catch (e) {
                        end = e;
                    }
                    if (end) {
                        me['@{start.work}']();
                    }
                });
            }
        }
        else {
            me['@{stop}']();
        }
    },
    '@{stop}': function () {
        var me = this;
        if (me['@{for.runner.fn}']) {
            Runner['@{task.remove}'](me['@{for.runner.fn}']);
            delete me['@{for.runner.fn}'];
            me.fire('stop');
        }
    },
    destroy: function () {
        var me = this;
        me['@{stop}']();
        me['@{task.list}'] = [];
        me['@{destroyed}'] = 1;
    }
});
module.exports = {
    '@{getFX}': function () {
        var fx = new FX();
        this.capture(Magix.guid('@{fx}'), fx);
        return fx;
    }
};

});