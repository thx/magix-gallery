/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-topbar/router",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryaF","._zs_gallerymS{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymT{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:#4d7fff;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);transition:all .25s ease}");
var barId = Magix.guid('mx_topbar_');
var Vframe = Magix.Vframe;
var timer, interval;
var percent = 100;
var Topbar = {
    '__n': function () {
        clearTimeout(timer);
        var bar = $('#' + barId);
        if (!bar.length) {
            $('body').append("<div class=\"_zs_gallerymT\" id=\"" + barId + "\"></div>");
            interval = setInterval(Topbar['__fe'], 300);
        }
    },
    '__fe': function () {
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
    '__m': function () {
        setTimeout(function () {
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
        }, 0);
    }
};
module.exports = Magix.View.extend({
    init: function (extra) {
        Magix.Router.on('changed', function (e) {
            if (e.path) {
                Topbar['__n']();
            }
        });
        var resume = function (vf) {
            vf.off('created', Topbar['__m']);
            vf.on('created', Topbar['__m']);
        };
        var watch = function (e) {
            if (e.vframe.id == extra.id) {
                resume(e.vframe);
            }
        };
        Vframe.on('add', watch);
        var vf = Vframe.get(extra.id);
        if (vf) {
            resume(vf);
        }
    },
    render: function () {
        Topbar['__n']();
    }
});

});