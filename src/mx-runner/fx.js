/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-runner/fx',["magix","./index"],function(require,exports,module){
/*Magix,Runner*/

/*
ver:1.3.1
*/
var Magix = require('magix');
var Runner = require('./index');
var DALG = function (t) { return t; };
var Now = Date.now || (function () {
    return new Date().getTime();
});
var FX = Magix.Base.extend({
    ctor: function (interval, alg) {
        var me = this;
        if (!me['_da'] || alg) {
            alg = alg || DALG;
            me['_da'] = function (from, to) {
                return (from + (to - from) * alg(me['_db'] / me['_dc']));
            };
        }
        me['_dd'] = [];
        me['_de'] = interval;
    },
    '_bM': function (time, callback) {
        var me = this;
        if (!me['_cw']) {
            me['_dd'].push({
                '_df': time,
                '_dg': callback
            });
            if (!me['_dh']) {
                me['_di']();
            }
        }
    },
    '_di': function () {
        var me = this;
        var item = me['_dd'].shift();
        if (item) {
            me['_dc'] = item['_df'];
            me['_dj'] = item['_dg'];
            me['_dk'] = Now();
            if (!me['_dh']) {
                Runner['_aH'](me['_de'], me['_dh'] = function (end) {
                    me['_db'] = Date.now() - me['_dk'];
                    if (me['_db'] > me['_dc']) {
                        me['_db'] = me['_dc'];
                        end = 1;
                    }
                    try {
                        me['_dj'](me['_da']);
                    }
                    catch (e) {
                        end = e;
                    }
                    if (end) {
                        me['_di']();
                    }
                });
            }
        }
        else {
            me['_bA']();
        }
    },
    '_bA': function () {
        var me = this;
        if (me['_dh']) {
            Runner['_aI'](me['_dh']);
            delete me['_dh'];
            me.fire('stop');
        }
    },
    destroy: function () {
        var me = this;
        me['_bA']();
        me['_dd'] = [];
        me['_cw'] = 1;
    }
});
module.exports = {
    '_bI': function () {
        var fx = new FX();
        this.capture(Magix.guid('_bH'), fx);
        return fx;
    }
};

});