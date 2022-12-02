import Magix, { Router } from 'magix';
import * as Loading from '../../mx-loading/mask';

export default Magix.View.extend({
    tmpl: '@loading-inner.html',
    mixins: [Loading],
    async render() {
        let list = await this.getList();
        this.updater.digest({
            viewId: this.id,
            list,
        });
    },
    getList() {
        let couses = ['化妆品行业营销管理规范', '什么情况需要提交品牌资质以及怎么获取', '品牌资质之资质上传路径', '品牌资质之商标持有者主体证明要求'];
        return new Promise(resolve => {
            setTimeout(() => {
                let list = [];
                for (let i = 0; i < 3; i++) {
                    let j = Math.ceil(Math.random() * 4) - 1;
                    list.push({
                        id: i + '_' + j,
                        title: couses[j],
                    });
                }
                resolve(list);
            }, 2 * 1000)
        })
    },
    async 'change<click>'(e) {
        this.showLoading({
            sizzle: `#${this.id}_table`,
        });
        let list = await this.getList();
        this.updater.digest({ list });
        this.hideLoading();
    }
});