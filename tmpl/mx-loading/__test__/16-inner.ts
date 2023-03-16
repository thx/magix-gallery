import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@16-inner.html',
    init() {
        let filters1 = [{
            text: '选项1_1',
            value: 1,
        }, {
            text: '选项1_2',
            value: 2,
        }, {
            text: '选项1_3',
            value: 3,
        }];
        let filters2 = [{
            text: '选项2_1',
            value: 1,
        }, {
            text: '选项2_2',
            value: 2,
        }, {
            text: '选项2_3',
            value: 3,
        }];

        let locParams = Router.parse().params;
        this.updater.set({
            num: 0,
            filters1,
            filters2,
            params: {
                filter1: locParams.filter1 || filters1[0].value,
                filter2: locParams.filter2 || filters2[0].value,
            }
        });
        this.observeLocation(['filter1', 'filter2']);
    },
    render() {
        let that = this;
        that.showLoading({
            firstIgnore: true,
            sizzle: `#${that.id}`,
        });

        // 异步请求
        that.timer = setTimeout(() => {
            let { num } = that.updater.get();
            that.updater.digest({
                num: num + 2,
            });
            that.hideLoading();
        }, 2000);
    },
    'change<change>'(e) {
        let { params } = this.updater.get();
        Router.to(params);
    }
});