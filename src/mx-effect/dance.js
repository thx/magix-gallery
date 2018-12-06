/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/dance",["magix","$","../mx-runner/index"],(require,exports,module)=>{
/*Magix,$,Runner*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Runner = require("../mx-runner/index");
Magix.applyStyle("__mx-effect_dance_",".__mx-effect_dance_-c {\n  display: inline-block;\n  opacity: 0;\n  white-space: pre-wrap;\n}\n.__mx-effect_dance_-d1 {\n  -webkit-animation: __mx-effect_dance_-a1 0.4s ease-out forwards;\n          animation: __mx-effect_dance_-a1 0.4s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a1 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes __mx-effect_dance_-a1 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n.__mx-effect_dance_-d2 {\n  -webkit-animation: __mx-effect_dance_-a2 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a2 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a2 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(-25px, 0);\n            transform: translate(-25px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes __mx-effect_dance_-a2 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(-25px, 0);\n            transform: translate(-25px, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n.__mx-effect_dance_-d3 {\n  -webkit-animation: __mx-effect_dance_-a3 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a3 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a3 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes __mx-effect_dance_-a3 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n.__mx-effect_dance_-d4 {\n  -webkit-animation: __mx-effect_dance_-a4 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a4 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a4 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(-180deg);\n            transform: rotateX(-180deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n}\n@keyframes __mx-effect_dance_-a4 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(-180deg);\n            transform: rotateX(-180deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n}\n.__mx-effect_dance_-d5 {\n  -webkit-animation: __mx-effect_dance_-a5 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a5 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a5 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n}\n@keyframes __mx-effect_dance_-a5 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n}\n.__mx-effect_dance_-d6 {\n  -webkit-animation: __mx-effect_dance_-a6 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a6 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a6 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes __mx-effect_dance_-a6 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n.__mx-effect_dance_-d7 {\n  -webkit-animation: __mx-effect_dance_-a7 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a7 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a7 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3, 0.3);\n            transform: scale(0.3, 0.3);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes __mx-effect_dance_-a7 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3, 0.3);\n            transform: scale(0.3, 0.3);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n.__mx-effect_dance_-d8 {\n  -webkit-animation: __mx-effect_dance_-a8 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a8 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a8 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n    -webkit-transform: translate(-5px, -20px);\n            transform: translate(-5px, -20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n@keyframes __mx-effect_dance_-a8 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n    -webkit-transform: translate(-5px, -20px);\n            transform: translate(-5px, -20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n  }\n}\n.__mx-effect_dance_-d9 {\n  -webkit-animation: __mx-effect_dance_-a9 0.9s ease-out forwards;\n          animation: __mx-effect_dance_-a9 0.9s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a9 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotateX(360deg);\n            transform: rotateX(360deg);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n}\n@keyframes __mx-effect_dance_-a9 {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotateX(360deg);\n            transform: rotateX(360deg);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n}\n.__mx-effect_dance_-d10:nth-child(even) {\n  -webkit-animation: __mx-effect_dance_-a1 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a1 0.5s ease-out forwards;\n}\n.__mx-effect_dance_-d10:nth-child(odd) {\n  -webkit-animation: __mx-effect_dance_-a11 0.5s ease-out forwards;\n          animation: __mx-effect_dance_-a11 0.5s ease-out forwards;\n}\n@-webkit-keyframes __mx-effect_dance_-a11 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 20px);\n            transform: translate(0, 20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n@keyframes __mx-effect_dance_-a11 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0, 20px);\n            transform: translate(0, 20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n.__mx-effect_dance_-d11 {\n  -webkit-animation: __mx-effect_dance_-a11 0.4s ease-out forwards;\n          animation: __mx-effect_dance_-a11 0.4s ease-out forwards;\n}\n");
var Names = {"d1":"__mx-effect_dance_-d1","d2":"__mx-effect_dance_-d2","d3":"__mx-effect_dance_-d3","d4":"__mx-effect_dance_-d4","d5":"__mx-effect_dance_-d5","d6":"__mx-effect_dance_-d6","d7":"__mx-effect_dance_-d7","d8":"__mx-effect_dance_-d8","d9":"__mx-effect_dance_-d9","d10":"__mx-effect_dance_-d10","d11":"__mx-effect_dance_-d11"};
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
        me.assign(extra);
        me.on('destroy', function () {
            me['@{stop}']();
        });
    },
    assign: function (ops, ctrl) {
        var me = this;
        if (ctrl)
            ctrl.deep = 0;
        me['@{value}'] = ops.value;
        me['@{dance.effect}'] = ops.dance || 'd1';
        me['@{duration}'] = +ops.duration || 60;
        me['@{stop}']();
        return true;
    },
    '@{stop}': function () {
        var me = this;
        me['@{current.span.index}'] = 0;
        Runner['@{task.remove}'](me['@{fn.run}']);
    },
    '@{start}': function () {
        var me = this;
        var spans = me['@{ui.spans}'];
        Runner['@{task.add}'](me['@{duration}'], me['@{fn.run}'] = function () {
            if (me['@{current.span.index}'] < spans.length) {
                var span = spans.eq(me['@{current.span.index}']);
                span.addClass(Names[me['@{dance.effect}']]);
                me['@{current.span.index}']++;
            }
            else {
                me['@{stop}']();
            }
        });
    },
    render: function () {
        var me = this;
        var words = me['@{value}'].split('');
        var html = "<span class=\"__mx-effect_dance_-c\">" + words.join('</span><span class="__mx-effect_dance_-c">') + "</span>";
        me['@{owner.node}'].html(html);
        me['@{ui.spans}'] = me['@{owner.node}'].find('span');
        me['@{start}']();
    }
});

});