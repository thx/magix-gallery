
!function(e,n,t){function o(e){"undefined"!=typeof window.console&&window.console.error("[anywhere include] "+e)}function r(t){var r,a,i=e.createElement(n),l=e.head||e.documentElement,c="176227",d="tcl_"+c,s="//tce.alicdn.com/api/data.htm?ids="+c+"&callback="+d,u=function(){o("version api request timeout")};window[d]=function(e){e&&e[c]&&e[c].value&&e[c].value.moduleinfo?r=e[c].value.moduleinfo:o("version api response wrong format")},a=setTimeout(u,5e3),i.async=!0,i.src=s,i.onload=i.onreadystatechange=function(){if(!i.readyState||/loaded|complete/.test(i.readyState)){clearTimeout(a),a=null,i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),r?t(r):u("jsonp callback was not called"),i=null,window[d]=null;try{delete window[d]}catch(e){}}},l.insertBefore(i,l.firstChild)}function a(e,n){var t=new RegExp(e+"=([^&]+)").exec(location.search);return t?t[1]:n}e.getElementById(t)||r(function(r){var i=window.location.hostname.indexOf(".daily.")>-1,l=a("prepub",!1),c=i?r.development:l?r.prepub:r.production;if(!c||!c.entryJS||!c.entryCSS)return void o("version api repsponse lost info");var d=e.getElementsByTagName(n)[0],s=e.createElement(n),u=e.createElement("link");s.src=c.entryJS,s.id=t,u.rel="stylesheet",u.href=c.entryCSS,s.charset=u.charset="utf-8",d.parentNode.insertBefore(u,d),d.parentNode.insertBefore(s,d)})}(document,"script","anywhere-sdk");
/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

;
var Magix = require("magix");
var Router = Magix.Router;
var $ = require("$");
Magix.applyStyle("_zs_galleryaJ",".mx-shadow{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}body .aw-wrapper{right:-4px!important}body .aw-wrapper .aw-window{top:auto;bottom:-185px}body .aw-wrapper .aw-dialog-wrapper.lowreso-dialog{top:-300px}body .aw-wrapper.small .aw-window{top:113px}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.tool-ser-history{display:none!important}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify{border-top:1px solid #e6e6e6}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect{border-top:1px solid #fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect{width:36px;height:36px;border-left:1px solid #e6e6e6;border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;background:#fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item{width:36px;height:36px;line-height:32px}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item .toolicon,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item .toolicon{font-size:20px;color:#ccc}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover{background:#4d7fff;border:1px solid #4d7fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover .aw-tool-item .toolicon,body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover .aw-tool-item .toolicon{color:#fff}body .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem .aw-hover-tip.stress{top:-1px;height:36px;line-height:34px;background:#4d7fff;border:1px solid #4d7fff;color:#fff}body .aw-wrapper.small .aw-window .aw-anim-lge-logo,body .aw-wrapper.small .aw-window .aw-logo{right:3px!important}");
module.exports = Magix.View.extend({
    init: function (extra) {
        var that = this;
        that.observeLocation({
            path: true
        });
        var bizCode = extra.bizCode;
        var bottom = extra.bottom || 0;
        var defaultSourceId = +extra.defaultSourceId;
        var sourceMap = extra.sourceMap || {};
        for (var path in sourceMap) {
            sourceMap[path] = +sourceMap[path];
        }
        that.updater.set({
            bizCode: bizCode,
            sourceId: defaultSourceId,
            defaultSourceId: defaultSourceId,
            bottom: +bottom,
            sourceMap: extra.sourceMap || {},
            awLoading: true
        });
        window.awAsyncInit = function () {
            var wxParams = {
                isHidden: true,
                bizCode: bizCode,
                sourceId: defaultSourceId,
                logoWidth: 40,
                onRendered: function () {
                    that.updater.set({
                        awLoading: false
                    });
                    that.reloc();
                    AW.show();
                }
            };
            AW.init(wxParams);
        };
        that.assign(extra);
        that.on('destroy', function () {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
        });
    },
    assign: function (extra) {
        var that = this;
        var path = Router.parse().path;
        var sourceMap = that.updater.get('sourceMap'), defaultSourceId = that.updater.get('defaultSourceId'), oldSourceId = that.updater.get('sourceId');
        var sourceId = sourceMap[path] || defaultSourceId;
        // 刷新万象知识库
        var duration = 25;
        var timer = setTimeout(function () {
            clearTimeout(timer);
            if (window.AW && (sourceId !== oldSourceId)) {
                AW.refresh({
                    sourceId: sourceId
                });
                that.updater.set({
                    sourceId: sourceId
                });
            }
            else if (that.updater.get('awLoading')) {
                timer = setTimeout(arguments.callee, duration);
            }
        }, duration);
        that.loopTimer = timer;
        return true;
    },
    reloc: function () {
        var that = this;
        if (window.AW) {
            var bottom = that.updater.get('bottom');
            var winHeight = $(window).height();
            AW.moveTo(winHeight - bottom - 200);
        }
    },
    '$win<resize>': function () {
        this.reloc();
    }
});

});