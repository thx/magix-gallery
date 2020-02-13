/**
 * 包装新版万象组件
 * https://yuque.antfin-inc.com/nue/everywhere/gdb60g
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const { Router } = Magix;

export default View.extend({
    init(extra) {
        let that = this;
        that.observeLocation({
            path: true
        });

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
            defaultSourceId, // 默认sourceId
            sourceMap,
            sourceList
        })

        let sourceId = that.getCurSourceId();
        that.updater.set({
            sourceId
        })

        seajs.use('//g.alicdn.com/everywhere/everywhere-entry/index.js', () => {
            EVERYWHERE_ENTRY.init().then(EW => {
                EW.init({
                    instanceId: sourceId
                });
            });
        })

        that.on('destroy', () => {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
        })
    },

    assign() {
        // 固定刷新
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
        let renderFn = () => {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
            if (window.EW) {
                let { sourceId: oldSourceId } = that.updater.get();
                let sourceId = that.getCurSourceId();
                if ((sourceId + '') !== (oldSourceId + '')) {
                    EW.refresh({
                        instanceId: sourceId
                    });
                    that.updater.set({
                        sourceId
                    })
                }
            } else {
                that.loopTimer = setTimeout(renderFn, 25);
            }
        }
        renderFn();
    }
});