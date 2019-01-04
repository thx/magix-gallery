/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-runner/fx",["magix","./index"],(require,exports,module)=>{
/*Magix,Runner*/

var Magix = require("magix");
var Runner = require("./index");
var DALG = function (t) { return t; };
var Now = Date.now || (function () {
    return new Date().getTime();
});
var FX = Magix.Base.extend({
    ctor: function (interval, alg) {
        var me = this;
        if (!me['__cx'] || alg) {
            alg = alg || DALG;
            me['__cx'] = function (from, to) {
                return (from + (to - from) * alg(me['__cy'] / me['__cz']));
            };
        }
        me['__cA'] = [];
        me['__cB'] = interval;
    },
    '__cG': function (time, callback) {
        var me = this;
        if (!me['__cf']) {
            me['__cA'].push({
                '__cC': time,
                '__cD': callback
            });
            if (!me['__cE']) {
                me['__cF']();
            }
        }
    },
    '__cF': function () {
        var me = this;
        var item = me['__cA'].shift();
        if (item) {
            me['__cz'] = item['__cC'];
            me['__cH'] = item['__cD'];
            me['__cI'] = Now();
            if (!me['__cE']) {
                Runner['__bl'](me['__cB'], me['__cE'] = function (end) {
                    me['__cy'] = Date.now() - me['__cI'];
                    if (me['__cy'] > me['__cz']) {
                        me['__cy'] = me['__cz'];
                        end = 1;
                    }
                    try {
                        me['__cH'](me['__cx']);
                    }
                    catch (e) {
                        end = e;
                    }
                    if (end) {
                        me['__cF']();
                    }
                });
            }
        }
        else {
            me['__l']();
        }
    },
    '__l': function () {
        var me = this;
        if (me['__cE']) {
            Runner['__bn'](me['__cE']);
            delete me['__cE'];
            me.fire('stop');
        }
    },
    destroy: function () {
        var me = this;
        me['__l']();
        me['__cA'] = [];
        me['__cf'] = 1;
    }
});
module.exports = {
    '__cK': function () {
        var fx = new FX();
        this.capture(Magix.guid('__cJ'), fx);
        return fx;
    }
};

});