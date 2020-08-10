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
        that.assign(extra);
        that.observeLocation({
            path: true
        });
        that.on('destroy', () => {
            if (that.loopTimer) {
                clearTimeout(that.loopTimer);
            }
        })
    },
    assign(extra) {
        let that = this;
        let defaultSourceId = extra.defaultSourceId;
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

        // 固定刷新
        return true;
    },

    render() {
        let that = this;
        let sourceId = that.getCurSourceId();
        that.updater.set({
            sourceId
        })

        if (window.EVERYWHERE_ENTRY && window.EW) {
            EW.refresh({
                instanceId: sourceId
            });
        } else {
            seajs.use('//g.alicdn.com/everywhere/everywhere-entry/index.js', () => {
                EVERYWHERE_ENTRY.init().then(EW => {
                    EW.init({
                        instanceId: sourceId
                    });
                });
            })
        }
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
    }
});