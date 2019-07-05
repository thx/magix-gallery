let Magix = require('magix');
let Router = Magix.Router;
let $ = require('$');

module.exports = Magix.View.extend({
    init(extra) {
        let that = this;
        that.observeLocation({
            path: true
        });

        let bizCode = extra.bizCode;
        let bottom = extra.bottom || 0;
        let defaultSourceId = +extra.defaultSourceId;

        let sourceMap = extra.sourceMap || {},
            sourceList = [];
        for (let path in sourceMap) {
            sourceList.push({
                id: sourceMap[path],
                hash: Magix.parseUrl(path)
            })
        }

        that.updater.set({
            bizCode,
            bottom: +bottom,
            defaultSourceId, // 默认sourceId
            sourceMap,
            sourceList,
            awLoading: true
        })

        let sourceId = that.getCurSourceId();
        that.updater.set({
            sourceId
        })

        seajs.use('//g.alicdn.com/crm/anywhere/0.4.5/lib/include', () => {
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
        })

        that.on('destroy', () => {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
        })
    },

    assign() {
        return true;
    },

    getCurSourceId() {
        let data = this.updater.get();
        let sourceList = data.sourceList,
            defaultSourceId = data.defaultSourceId;

        let loc = Router.parse();
        let path = loc.path;
        let params = loc.params;

        let cur = {};
        for (let i = 0; i < sourceList.length; i++) {
            let hash = sourceList[i].hash;
            // 比较路径
            let equal = (hash.path == path);

            // 比较参数：当前参数包含配置参数即匹配中
            for (let key in hash.params) {
                equal = equal && (hash.params[key] == params[key]);
            }

            if (equal) {
                cur = sourceList[i];
                break;
            }
        }
        return $.isEmptyObject(cur) ? defaultSourceId : cur.id;
    },

    render() {
        let that = this;
        let oldSourceId = that.updater.get('sourceId'),
            bizCode = that.updater.get('bizCode');
        let sourceId = that.getCurSourceId();

        // 刷新万象知识库
        let duration = 25;
        let timer = setTimeout(() => {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
            if (window.AW) {
                if ((sourceId + '') !== (oldSourceId + '')) {
                    AW.refresh({
                        bizCode,
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
        if (window.AW && !that.updater.get('awLoading')) {
            let bottom = that.updater.get('bottom');
            let winHeight = $(window).height();
            AW.moveTo(winHeight - bottom - 200);
        }
    },

    '$win<resize>'() {
        this.reloc();
    }
});