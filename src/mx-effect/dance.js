/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-effect/dance',["magix","$","../mx-runner/index"],function(require,exports,module){
/*Magix,$,Runner*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var Runner = require('../mx-runner/index');
Magix.applyStyle("n",".cH{display:inline-block;opacity:0;white-space:pre-wrap}.cI{-webkit-animation:f .4s ease-out forwards;animation:f .4s ease-out forwards}@-webkit-keyframes f{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes f{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}.cJ{-webkit-animation:g .5s ease-out forwards;animation:g .5s ease-out forwards}@-webkit-keyframes g{0%{opacity:0;-webkit-transform:translate(-25px);transform:translate(-25px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes g{0%{opacity:0;-webkit-transform:translate(-25px);transform:translate(-25px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}.cK{-webkit-animation:h .5s ease-out forwards;animation:h .5s ease-out forwards}@-webkit-keyframes h{0%{opacity:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{opacity:1;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes h{0%{opacity:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{opacity:1;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.cL{-webkit-animation:i .5s ease-out forwards;animation:i .5s ease-out forwards}@-webkit-keyframes i{0%{opacity:0;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}to{opacity:1;-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes i{0%{opacity:0;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}to{opacity:1;-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}.cM{-webkit-animation:j .5s ease-out forwards;animation:j .5s ease-out forwards}@-webkit-keyframes j{0%{opacity:0;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}to{opacity:1;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}@keyframes j{0%{opacity:0;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}to{opacity:1;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}.cN{-webkit-animation:k .5s ease-out forwards;animation:k .5s ease-out forwards}@-webkit-keyframes k{0%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes k{0%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.cO{-webkit-animation:l .5s ease-out forwards;animation:l .5s ease-out forwards}@-webkit-keyframes l{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes l{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.cP{-webkit-animation:m .5s ease-out forwards;animation:m .5s ease-out forwards}@-webkit-keyframes m{0%{opacity:0}50%{opacity:.5;-webkit-transform:translate(-5px,-20px);transform:translate(-5px,-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes m{0%{opacity:0}50%{opacity:.5;-webkit-transform:translate(-5px,-20px);transform:translate(-5px,-20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}.cQ{-webkit-animation:n .9s ease-out forwards;animation:n .9s ease-out forwards}@-webkit-keyframes n{0%{opacity:0;-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:0 0;transform-origin:0 0}to{opacity:1;-webkit-transform:rotateX(1turn);transform:rotateX(1turn);-webkit-transform-origin:0 0;transform-origin:0 0}}@keyframes n{0%{opacity:0;-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:0 0;transform-origin:0 0}to{opacity:1;-webkit-transform:rotateX(1turn);transform:rotateX(1turn);-webkit-transform-origin:0 0;transform-origin:0 0}}.cR:nth-child(2n){-webkit-animation:f .5s ease-out forwards;animation:f .5s ease-out forwards}.cR:nth-child(odd){-webkit-animation:o .5s ease-out forwards;animation:o .5s ease-out forwards}@-webkit-keyframes o{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes o{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}.cS{-webkit-animation:o .4s ease-out forwards;animation:o .4s ease-out forwards}");
var Names = {"d1":"cI","d2":"cJ","d3":"cK","d4":"cL","d5":"cM","d6":"cN","d7":"cO","d8":"cP","d9":"cQ","d10":"cR","d11":"cS"};
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var node = $('#' + me.id);
        me['_h'] = node;
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['_bN'] = ops.value;
        me['_bO'] = ops.dance || 'd1';
        me['_bK'] = +ops.duration || 60;
        me['_bA']();
        return true;
    },
    '_bA': function () {
        var me = this;
        me['_bP'] = 0;
        Runner['_aI'](me['_bQ']);
    },
    '_ao': function () {
        var me = this;
        var spans = me['_bR'];
        Runner['_aH'](me['_bK'], me['_bQ'] = function () {
            if (me['_bP'] < spans.length) {
                var span = spans.eq(me['_bP']);
                span.addClass(Names[me['_bO']]);
                me['_bP']++;
            }
            else {
                me['_bA']();
            }
        });
    },
    render: function () {
        var me = this;
        var words = me['_bN'].split('');
        var html = "<span class=\"cH\">" + words.join('</span><span class="cH">') + "</span>";
        me['_h'].html(html);
        me['_bR'] = me['_h'].find('span');
        me['_ao']();
    }
});

});