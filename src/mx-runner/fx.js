/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-runner/fx",["magix","./index"],(require,exports,module)=>{
/*Magix,Runner*/

/*
ver:2.0.1
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
        if (!me['__em'] || alg) {
            alg = alg || DALG;
            me['__em'] = function (from, to) {
                return (from + (to - from) * alg(me['__en'] / me['__eo']));
            };
        }
        me['__ep'] = [];
        me['__eq'] = interval;
    },
    '__cI': function (time, callback) {
        var me = this;
        if (!me['__dI']) {
            me['__ep'].push({
                '__er': time,
                '__es': callback
            });
            if (!me['__et']) {
                me['__eu']();
            }
        }
    },
    '__eu': function () {
        var me = this;
        var item = me['__ep'].shift();
        if (item) {
            me['__eo'] = item['__er'];
            me['__ev'] = item['__es'];
            me['__ew'] = Now();
            if (!me['__et']) {
                Runner['__ag'](me['__eq'], me['__et'] = function (end) {
                    me['__en'] = Date.now() - me['__ew'];
                    if (me['__en'] > me['__eo']) {
                        me['__en'] = me['__eo'];
                        end = 1;
                    }
                    try {
                        me['__ev'](me['__em']);
                    }
                    catch (e) {
                        end = e;
                    }
                    if (end) {
                        me['__eu']();
                    }
                });
            }
        }
        else {
            me['__as']();
        }
    },
    '__as': function () {
        var me = this;
        if (me['__et']) {
            Runner['__ai'](me['__et']);
            delete me['__et'];
            me.fire('stop');
        }
    },
    destroy: function () {
        var me = this;
        me['__as']();
        me['__ep'] = [];
        me['__dI'] = 1;
    }
});
module.exports = {
    '__cE': function () {
        var fx = new FX();
        this.capture(Magix.guid('__cD'), fx);
        return fx;
    }
};

});