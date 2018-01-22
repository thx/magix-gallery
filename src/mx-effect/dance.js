/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/dance",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("_s","._di{display:inline-block;opacity:0;white-space:pre-wrap}._dj{-webkit-animation:_f .4s ease-out forwards;animation:_f .4s ease-out forwards}@-webkit-keyframes _f{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes _f{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}._dk{-webkit-animation:_g .5s ease-out forwards;animation:_g .5s ease-out forwards}@-webkit-keyframes _g{0%{opacity:0;-webkit-transform:translate(-25px);transform:translate(-25px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes _g{0%{opacity:0;-webkit-transform:translate(-25px);transform:translate(-25px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}._dl{-webkit-animation:_h .5s ease-out forwards;animation:_h .5s ease-out forwards}@-webkit-keyframes _h{0%{opacity:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{opacity:1;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes _h{0%{opacity:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{opacity:1;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}._dm{-webkit-animation:_i .5s ease-out forwards;animation:_i .5s ease-out forwards}@-webkit-keyframes _i{0%{opacity:0;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}to{opacity:1;-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes _i{0%{opacity:0;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}to{opacity:1;-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}._dn{-webkit-animation:_j .5s ease-out forwards;animation:_j .5s ease-out forwards}@-webkit-keyframes _j{0%{opacity:0;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}to{opacity:1;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}@keyframes _j{0%{opacity:0;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}to{opacity:1;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}._do{-webkit-animation:_k .5s ease-out forwards;animation:_k .5s ease-out forwards}@-webkit-keyframes _k{0%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes _k{0%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}._dp{-webkit-animation:_l .5s ease-out forwards;animation:_l .5s ease-out forwards}@-webkit-keyframes _l{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes _l{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}._dq{-webkit-animation:_m .5s ease-out forwards;animation:_m .5s ease-out forwards}@-webkit-keyframes _m{0%{opacity:0}50%{opacity:.5;-webkit-transform:translate(-5px,-20px);transform:translate(-5px,-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes _m{0%{opacity:0}50%{opacity:.5;-webkit-transform:translate(-5px,-20px);transform:translate(-5px,-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}._dr{-webkit-animation:_n .9s ease-out forwards;animation:_n .9s ease-out forwards}@-webkit-keyframes _n{0%{opacity:0;-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:0 0;transform-origin:0 0}to{opacity:1;-webkit-transform:rotateX(1turn);transform:rotateX(1turn);-webkit-transform-origin:0 0;transform-origin:0 0}}@keyframes _n{0%{opacity:0;-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:0 0;transform-origin:0 0}to{opacity:1;-webkit-transform:rotateX(1turn);transform:rotateX(1turn);-webkit-transform-origin:0 0;transform-origin:0 0}}._ds:nth-child(2n){-webkit-animation:_f .5s ease-out forwards;animation:_f .5s ease-out forwards}._ds:nth-child(odd){-webkit-animation:_o .5s ease-out forwards;animation:_o .5s ease-out forwards}@-webkit-keyframes _o{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes _o{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}._dt{-webkit-animation:_o .4s ease-out forwards;animation:_o .4s ease-out forwards}");
var Names = {"d1":"_dj","d2":"_dk","d3":"_dl","d4":"_dm","d5":"_dn","d6":"_do","d7":"_dp","d8":"_dq","d9":"_dr","d10":"_ds","d11":"_dt"};
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var node = $('#' + me.id);
        me['__i'] = node;
        me.assign(extra);
        me.on('destroy', function () {
            me['__as']();
        });
    },
    assign: function (ops) {
        var me = this;
        me['__cJ'] = ops.value;
        me['__cK'] = ops.dance || 'd1';
        me['__cG'] = +ops.duration || 60;
        me['__as']();
        return true;
    },
    '__as': function () {
        var me = this;
        me['__cL'] = 0;
        Runner['__ai'](me['__cM']);
    },
    '__aq': function () {
        var me = this;
        var spans = me['__cN'];
        Runner['__ag'](me['__cG'], me['__cM'] = function () {
            if (me['__cL'] < spans.length) {
                var span = spans.eq(me['__cL']);
                span.addClass(Names[me['__cK']]);
                me['__cL']++;
            }
            else {
                me['__as']();
            }
        });
    },
    render: function () {
        var me = this;
        var words = me['__cJ'].split('');
        var html = "<span class=\"_di\">" + words.join('</span><span class="_di">') + "</span>";
        me['__i'].html(html);
        me['__cN'] = me['__i'].find('span');
        me['__aq']();
    }
});

});