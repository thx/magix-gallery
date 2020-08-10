/**
 * 包装新版万象组件 展示位小icon
 * https://yuque.antfin-inc.com/nue/everywhere/gdb60g
 * https://aone.alibaba-inc.com/req/27332509
 */
import Magix from 'magix';
import * as $ from '$';
import Base from './wx';
const { Router } = Magix;
Magix.applyStyle('@wxi.less');

export default Base.extend({
    tmpl: '@wxi.html',
    init(extra) {
        this.assign(extra);
        this.observeLocation({
            path: true
        });
    },
    assign(extra) {
        let that = this;
        // 固定刷新
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
            outerUrl: 'https://everyhelp.taobao.com/screen/home.htm?instanceId=',
            box: (extra.box + '' === 'true'),
            defaultSourceId, // 默认sourceId
            sourceMap,
            sourceList
        })

        that.updater.set({
            sourceId: that.getCurSourceId()
        })

        // 固定刷新
        return true;
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