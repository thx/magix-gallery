/*
ver:2.0.4
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let speechSynthesis = window.speechSynthesis;
module.exports = Magix.Base.extend({
    ctor(extra) {
        let me = this;
        me.id = Magix.guid('s-');
        me.assign(extra);
    },
    assign(ops) {
        if (!ops) ops = {};
        if (!ops.lang) {
            ops.lang = 'zh-cn';
        }
        this['@{ssu}'] = ops;
    },
    cancel() {
        if (speechSynthesis) {
            speechSynthesis.cancel();
        }
    },
    speak(text) {
        if (speechSynthesis) {
            this.cancel();
            let ssu = this['@{ssu}'];
            ssu.text = text;
            let su = new window.SpeechSynthesisUtterance();
            Magix.mix(su, ssu);
            speechSynthesis.speak(su);
        }
    },
    destroy() {
        this.cancel();
    }
});