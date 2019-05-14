/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var Router = Magix.Router;
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-wanxiang_index_","body .aw-wrapper {\n  right: -4px !important;\n}\nbody .aw-wrapper .aw-window {\n  top: auto;\n  bottom: -185px;\n}\nbody .aw-wrapper .aw-dialog-wrapper.lowreso-dialog {\n  top: -300px;\n}\nbody .aw-wrapper.small .aw-window {\n  top: 113px;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.tool-ser-history {\n  display: none !important;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify {\n  border-top: 1px solid var(--color-border);\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect {\n  border-top: 1px solid #fff;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify,\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect {\n  width: 36px;\n  height: 36px;\n  border-left: 1px solid var(--color-border);\n  border-right: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  background: #fff;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item,\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item {\n  width: 36px;\n  height: 36px;\n  line-height: 32px;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify .aw-tool-item .toolicon,\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect .aw-tool-item .toolicon {\n  font-size: 20px;\n  color: #ccc;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover,\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover {\n  background: var(--color-brand);\n  border-top: 1px solid var(--color-brand);\n  border-left: 1px solid var(--color-brand);\n  border-right: 1px solid var(--color-brand);\n  border-bottom: 1px solid var(--color-brand);\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-active-notify:hover .aw-tool-item .toolicon,\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem.stress.tool-connect:hover .aw-tool-item .toolicon {\n  color: #fff;\n}\nbody .aw-wrapper.small .aw-window .aw-default-tool .aw-lineitem .aw-hover-tip.stress {\n  top: -1px;\n  height: 36px;\n  line-height: 34px;\n  background: var(--color-brand);\n  border-top: 1px solid var(--color-brand);\n  border-left: 1px solid var(--color-brand);\n  border-right: 1px solid var(--color-brand);\n  border-bottom: 1px solid var(--color-brand);\n  color: #fff;\n}\nbody .aw-wrapper.small .aw-window .aw-anim-lge-logo,\nbody .aw-wrapper.small .aw-window .aw-logo {\n  right: 3px !important;\n}\n");
module.exports = Magix.View.extend({
    init: function (extra) {
        var that = this;
        that.observeLocation({
            path: true
        });
        var bizCode = extra.bizCode;
        var bottom = extra.bottom || 0;
        var defaultSourceId = +extra.defaultSourceId;
        var sourceMap = extra.sourceMap || {}, sourceList = [];
        for (var path in sourceMap) {
            sourceList.push({
                id: sourceMap[path],
                hash: Magix.parseUrl(path)
            });
        }
        that.updater.set({
            bizCode: bizCode,
            bottom: +bottom,
            defaultSourceId: defaultSourceId,
            sourceMap: sourceMap,
            sourceList: sourceList,
            awLoading: true
        });
        var sourceId = that.getCurSourceId();
        that.updater.set({
            sourceId: sourceId
        });
        seajs.use('//g.alicdn.com/crm/anywhere/0.4.5/lib/include', function () {
            window.awAsyncInit = function () {
                var wxParams = {
                    isHidden: true,
                    bizCode: bizCode,
                    sourceId: sourceId,
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
        });
        that.on('destroy', function () {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
        });
    },
    assign: function () {
        return true;
    },
    getCurSourceId: function () {
        var data = this.updater.get();
        var sourceList = data.sourceList, defaultSourceId = data.defaultSourceId;
        var loc = Router.parse();
        var path = loc.path;
        var params = loc.params;
        var cur = {};
        for (var i = 0; i < sourceList.length; i++) {
            var hash = sourceList[i].hash;
            // 比较路径
            var equal = (hash.path == path);
            // 比较参数：当前参数包含配置参数即匹配中
            for (var key in hash.params) {
                equal = equal && (hash.params[key] == params[key]);
            }
            if (equal) {
                cur = sourceList[i];
                break;
            }
        }
        return $.isEmptyObject(cur) ? defaultSourceId : cur.id;
    },
    render: function () {
        var that = this;
        var oldSourceId = that.updater.get('sourceId'), bizCode = that.updater.get('bizCode');
        var sourceId = that.getCurSourceId();
        // 刷新万象知识库
        var duration = 25;
        var timer = setTimeout(function () {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
            if (window.AW) {
                if ((sourceId + '') !== (oldSourceId + '')) {
                    AW.refresh({
                        bizCode: bizCode,
                        sourceId: sourceId
                    });
                    that.updater.set({
                        sourceId: sourceId
                    });
                }
            }
            else {
                // 首次未加载成功时，间隔调用
                if (that.updater.get('awLoading')) {
                    timer = setTimeout(arguments.callee, duration);
                }
            }
        }, duration);
        that.loopTimer = timer;
    },
    reloc: function () {
        var that = this;
        if (window.AW && !that.updater.get('awLoading')) {
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