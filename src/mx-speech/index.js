/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-speech/index",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var speechSynthesis = window.speechSynthesis;
module.exports = Magix.Base.extend({
    ctor: function (extra) {
        var me = this;
        me.id = Magix.guid('s-');
        me.assign(extra);
    },
    assign: function (ops) {
        if (!ops)
            ops = {};
        if (!ops.lang) {
            ops.lang = 'zh-cn';
        }
        this['__eK'] = ops;
    },
    cancel: function () {
        if (speechSynthesis) {
            speechSynthesis.cancel();
        }
    },
    speak: function (text) {
        if (speechSynthesis) {
            this.cancel();
            var ssu = this['__eK'];
            ssu.text = text;
            var su = new window.SpeechSynthesisUtterance();
            Magix.mix(su, ssu);
            speechSynthesis.speak(su);
        }
    },
    destroy: function () {
        this.cancel();
    }
});

});