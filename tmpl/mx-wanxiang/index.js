'top@./vendor/content.js';

let Magix = require('magix');
let Router = Magix.Router;
let $ = require('$');
Magix.applyStyle('global@index.less');

module.exports = Magix.View.extend({
    init(extra) {
        let that = this;
        that.observeLocation({
            path: true
        });

        let bizCode = extra.bizCode;
        let bottom = extra.bottom || 0;
        let defaultSourceId = +extra.defaultSourceId;
        let sourceMap = extra.sourceMap || {};
        let path = Router.parse().path;
        let sourceId = sourceMap[path] || defaultSourceId;
        that.updater.set({
            bizCode,
            bottom: +bottom,
            defaultSourceId, // 默认sourceId
            sourceId, //当前sourceId
            sourceMap: sourceMap,
            awLoading: true
        })
        window.awAsyncInit = () => {
            var wxParams = {
                isHidden: true,
                bizCode: bizCode,
                sourceId: sourceId,
                logoWidth: 40, //非必传：指定象仔logo大小
                onRendered: () => {
                    that.updater.set({
                        awLoading: false
                    })

                    that.reloc();
                    AW.show();
                }
            }
            AW.init(wxParams);
        }

        that.on('destroy', () => {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
        })
    },

    assign() {
        return true;
    },

    render() {
        let that = this;
        let path = Router.parse().path;
        let data = that.updater.get();
        let sourceMap = data.sourceMap,
            defaultSourceId = data.defaultSourceId,
            oldSourceId = data.sourceId;
        let sourceId = sourceMap[path] || defaultSourceId;

        // 刷新万象知识库
        let duration = 25;
        let timer = setTimeout(() => {
            clearTimeout(timer);
            if (window.AW) {
                if ((sourceId + '') !== (oldSourceId + '')) {
                    AW.refresh({
                        sourceId
                    });
                    that.updater.set({
                        sourceId
                    })
                }
            } else {
                // 首次未加载成功时，间隔调用
                if (that.updater.get('awLoading')) {
                    timer = setTimeout(arguments.callee, duration);
                }
            }
        }, duration);
        that.loopTimer = timer;
    },

    reloc: function () {
        let that = this;
        if (window.AW) {
            let bottom = that.updater.get('bottom');
            let winHeight = $(window).height();
            AW.moveTo(winHeight - bottom - 200);
        }
    },

    '$win<resize>'() {
        this.reloc();
    }
});