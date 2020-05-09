/**
 * 阿里小蜜接入手册：https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto
 * 相关内容：https://aone.alibaba-inc.com/req/24814910
 */
import Magix from 'magix';
import * as $ from '$';
import Base from './wx';

export default Base.extend({
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

        let configs = $.extend(true, {}, extra);
        ['defaultSourceId', 'sourceMap'].forEach(key => {
            delete configs[key];
        })

        that.updater.set({
            defaultSourceId, // 默认sourceId
            sourceMap,
            sourceList,
            configs
        })

        let sourceId = that.getCurSourceId();
        that.updater.set({
            sourceId
        })

        this.on('destroy', () => {
            this['@{hide}']();
        })
    },
    render() {
        let that = this;
        if (!that['$init']) {
            // 首次进入
            that['@{show}']();
            that['$init'] = 1;
        } else {
            let { sourceId: oldSourceId } = that.updater.get();
            let sourceId = that.getCurSourceId();
            if ((sourceId + '') !== (oldSourceId + '')) {
                that.updater.set({
                    sourceId
                })
                that['@{show}']();
            }
        }
    },

    '@{show}'() {
        this['@{hide}']();

        let showFn = () => {
            let { configs, sourceId } = this.updater.get();
            if (!sourceId) {
                console.error('请配置from');
                return;
            }
            configs.from = sourceId;
            if ($.isEmptyObject(configs.position)) {
                configs.position = {
                    bottom: 40,
                    right: 40
                }
            }
            new AlicareDialog(configs);
        }

        if (window.AlicareDialog) {
            showFn();
        } else {
            seajs.use('//g.alicdn.com/alime/dialog/alicare-dialog.js', () => {
                showFn();
            })
        }
    },
    /**
     * todo
     * 小蜜暂未提供销毁方法，目前的方案只能删除节点
     */
    '@{hide}'() {
        let alime = document.getElementById('J_xiaomi_dialog');
        if (alime) {
            document.body.removeChild(alime);
        }
    }
});