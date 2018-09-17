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
        for(let path in sourceMap){
            sourceMap[path] = +sourceMap[path];
        }
        that.updater.set({
            bizCode,
            sourceId: defaultSourceId, //当前sourceId
            defaultSourceId, // 默认sourceId
            bottom: +bottom,
            sourceMap: extra.sourceMap || {},
            awLoading: true
        })

        window.awAsyncInit = function() {
            var wxParams = {
                isHidden: true,
                bizCode: bizCode, 
                sourceId: defaultSourceId,
                logoWidth: 40, //非必传：指定象仔logo大小
                onRendered: function() {
                    that.updater.set({
                        awLoading: false
                    })

                    that.reloc();
                    AW.show();
                }
            }
            AW.init(wxParams);
        }
        that.assign(extra);

        that.on('destroy', () => {
            if(that.loopTimer){
                clearTimeout(that.loopTimer);
            }
        })
    },

    assign(extra) {
        let that = this;
        let path = Router.parse().path;
        let sourceMap = that.updater.get('sourceMap'),
            defaultSourceId = that.updater.get('defaultSourceId'),
            oldSourceId = that.updater.get('sourceId');
        let sourceId = sourceMap[path] || defaultSourceId 

        // 刷新万象知识库
        let duration = 25;
        let timer = setTimeout(() => {
            clearTimeout(timer);
            if (window.AW && (sourceId !== oldSourceId)) {
                AW.refresh({
                    sourceId
                });
                that.updater.set({
                    sourceId
                })
            } else if (that.updater.get('awLoading')) {
                timer = setTimeout(arguments.callee, duration);
            }
        }, duration);
        that.loopTimer = timer;

        return true;
    },

    reloc: function() {
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