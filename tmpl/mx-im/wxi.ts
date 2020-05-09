/**
 * 包装新版万象组件 展示位小icon
 * https://yuque.antfin-inc.com/nue/everywhere/gdb60g
 * https://aone.alibaba-inc.com/req/27332509
 */
import Magix from 'magix';
import * as $ from '$';
import Base from './wx';
const { Router } = Magix;

export default Base.extend({
    tmpl: '@wxi.html',
    init(extra) {
        let that = this;
        that.observeLocation({
            path: true
        });

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
            sourceList,
            fontSize: extra.fontSize || 16
        })

        let sourceId = that.getCurSourceId();
        that.updater.set({
            sourceId
        })
    },

    render() {
        let that = this;
        if (!that['$init']) {
            that.updater.digest();
            that['$init'] = 1;
        } else {
            let { sourceId: oldSourceId } = that.updater.get();
            let sourceId = that.getCurSourceId();
            if ((sourceId + '') !== (oldSourceId + '')) {
                that.updater.digest({
                    sourceId
                })
            }
        }
    }
});