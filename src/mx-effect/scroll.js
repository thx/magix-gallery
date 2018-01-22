/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/scroll",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
var Magix = require("magix");
var $ = require("$");
var Panel = "<div class=\"_dv\"><div>0</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>-</div><div>.</div></div>";
Magix.applyStyle("_t","._du{float:left;height:32px;overflow:hidden}._dv{line-height:32px;-webkit-transition:all .6s;transition:all .6s}");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['__i'] = $('#' + me.id);
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['__cJ'] = ops.value;
        return true;
    },
    '__l': function () {
        var me = this;
        $('<div class="_du"/>').append(Panel).appendTo(me['__i']);
    },
    '__cO': function (exists, values) {
        var lh = parseInt(exists.css('line-height'), 10);
        for (var i = values.length; i--;) {
            var v = values[i];
            if (v == '-')
                v = 10;
            else if (v == '.')
                v = 11;
            exists.eq(i).css({
                transform: "translateY(-" + v * lh + "px)"
            });
        }
    },
    render: function () {
        var me = this;
        var exists = me['__i'].find('>div');
        var values = (me['__cJ'] + '').split('');
        if (exists.length > values.length) {
            for (var i = exists.length - 1; i >= values.length; i--) {
                exists.eq(i).remove();
            }
        }
        else {
            for (var i = exists.length; i < values.length; i++) {
                me['__l']();
            }
        }
        exists = me['__i'].find('>div>div');
        me['__cO'](exists, values);
    }
});

});