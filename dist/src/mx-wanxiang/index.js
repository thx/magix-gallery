/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/**
 * 包装老版万象组件
 * https://yuque.antfin-inc.com/wanxiang/technology/description
 */
var Magix = require("magix");
var Router = Magix.Router;
var $ = require("$");
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
        // 固定刷新
        return true;
    },
    getCurSourceId: function () {
        var _a = this.updater.get(), sourceList = _a.sourceList, defaultSourceId = _a.defaultSourceId;
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
        var _a = that.updater.get(), oldSourceId = _a.oldSourceId, bizCode = _a.bizCode;
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
        var _a = that.updater.get(), awLoading = _a.awLoading, bottom = _a.bottom;
        if (window.AW && !awLoading) {
            var winHeight = $(window).height();
            AW.moveTo(winHeight - bottom - 200);
        }
    },
    '$win<resize>': function () {
        this.reloc();
    }
});

});