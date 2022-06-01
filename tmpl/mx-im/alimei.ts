/**
 * 阿里小蜜接入手册：https://yuque.antfin-inc.com/alime/tg3n3k/dsyxto
 * 相关内容：https://aone.alibaba-inc.com/req/24814910
 * icon外链版本 https://aone.alibaba-inc.com/req/27549857
 */
import Magix from 'magix';
import Base from './alime';
Magix.applyStyle('@icon.less');

export default Base.extend({
    tmpl: '@icon.html',
    '@{show}'() {
        this.updater.digest();
    }
});