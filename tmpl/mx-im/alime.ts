/**
 * 阿里小蜜接入手册：https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto
 * 相关内容：https://aone.alibaba-inc.com/req/24814910
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

export default View.extend({
    init(extra) {
        this.updater.set({
            config: extra
        })

        this.on('destroy', () => {
            this['@{hide}']();
        })
    },
    render() {
        let that = this;

        if (window.AlicareDialog) {
            that['@{show}']();
        } else {
            seajs.use('//g.alicdn.com/alime/dialog/alicare-dialog.js', () => {
                that['@{show}']();
            })
        }

    },

    '@{show}'() {
        this['@{hide}']();

        let { config } = this.updater.get();
        if (!config.from) {
            console.error('请配置from');
            return;
        }
        this.$alime = new AlicareDialog(config);
    },
    /**
     * todo
     * 小蜜暂未提供销毁方法
     */
    '@{hide}'() {
        let instance = this.$alime;
    }
});