/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-topbar/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_P","._fF{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:#5665eb;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-transition:all .3s ease;transition:all .3s ease}");
var barId = Magix.guid('mx_topbar_');
var Vframe = Magix.Vframe;
var timer, interval;
var percent = 100;
var Topbar = {
    '__f': function () {
        clearTimeout(timer);
        var bar = $('#' + barId);
        if (!bar.length) {
            $('body').append("<div class=\"_fF\" id=\"" + barId + "\"></div>");
            interval = setInterval(Topbar['__gD'], 300);
        }
    },
    '__gE': function () {
        var bar = $('#' + barId);
        if (bar.length) {
            if (percent > 15) {
                percent -= (3 + Math.random() * 5);
            }
            else if (percent > 4) {
                percent -= (1 + Math.random());
            }
            bar.css({
                transform: "translate3d(-" + percent + "%,0px,0px)"
            });
        }
    },
    '__a': function () {
        clearInterval(interval);
        var bar = $('#' + barId);
        if (bar.length) {
            bar.css({
                transform: "translate3d(0,0px,0px)"
            });
            timer = setTimeout(function () {
                percent = 100;
                bar.remove();
            }, 400);
        }
    }
};
var rootId = Magix.config('rootId');
var rootVf = Vframe.get(rootId);
var resume = function (vf) {
    vf.on('alter', Topbar['__f']);
    vf.on('created', Topbar['__a']);
};
if (rootVf) {
    resume(rootVf);
}
else {
    Topbar['__f'](); //未准备好的情况下
    var watch_1 = function (e) {
        if (e.vframe.id == rootId) {
            Vframe.off('add', watch_1);
            resume(e.vframe);
        }
    };
    Vframe.on('add', watch_1);
}

});