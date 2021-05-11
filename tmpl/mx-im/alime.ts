/*md5:87c8c33ae5fe4d04f3f6126f2e918be3*/
/**
 * 阿里小蜜接入手册：https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto
 * 相关内容：https://aone.alibaba-inc.com/req/24814910
 */
import Magix from 'magix';
import * as $ from '$';
import Base from './base';

export default Base.extend({
    init(extra) {
        this.assign(extra);
        this.observeLocation({
            path: true
        });

        this.on('destroy', () => {
            this['@{hide}']();
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

        let configs = $.extend(true, {}, extra);
        ['defaultSourceId', 'sourceMap'].forEach(key => {
            delete configs[key];
        })

        that.updater.set({
            content: $(`#${that.id}`).html(),
            outer: (extra.outer + '' !== 'false'), // 外链还是开浮层，默认外链
            outerUrl: 'https://ai.alimebot.taobao.com/intl/index.htm',
            params: extra.params || {},
            box: (extra.box + '' === 'true'),
            zIndex: extra.zIndex || 999999,
            defaultSourceId, // 默认sourceId
            sourceMap,
            sourceList,
            configs
        })

        // 固定刷新
        return true;
    },
    render() {
        let { params, outerUrl } = this.updater.get();
        let sourceId = this.getCurSourceId();
        params.from = sourceId;
        this.updater.set({
            url: Magix.toUrl(outerUrl, params),
            sourceId
        })
        this['@{show}']();
    },

    '@{show}'() {
        this['@{hide}']();

        let showFn = () => {
            let { configs, sourceId, zIndex } = this.updater.get();
            if (!sourceId) {
                console.error('请配置from');
                return;
            }
            Magix.mix(configs, {
                from: sourceId,
                'z-index': zIndex
            })
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
     * 小蜜暂未提供销毁方法，目前的方案只能删除节点
     */
    '@{hide}'() {
        let alime = document.getElementById('J_xiaomi_dialog');
        if (alime) {
            document.body.removeChild(alime);
        }
    }
});