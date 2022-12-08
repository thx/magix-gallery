import Magix, { Router } from 'magix';
import * as Loading from '../../mx-loading/mask';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';

export default Magix.View.extend({
    tmpl: '@list-inner.html',
    mixins: [Loading, Form, Validator],
    init() {
        this.updater.set({
            singleList: [{
                text: '单选1',
                value: 1,
            }, {
                text: '单选2',
                value: 2,
            }, {
                text: '单选3',
                value: 3,
            }, {
                text: '单选4',
                value: 4,
            }],
            multiList: [{
                text: '多选1',
                value: 1,
            }, {
                text: '多选2',
                value: 2,
            }, {
                text: '多选3',
                value: 3,
            }, {
                text: '多选4',
                value: 4,
            }],
            initParams: {
                single: '', // 单选
                multi: '', // 多选
                keyword: '', // 搜索框
                offset: 0,
                pageSize: 5,
            }
        });

        this.observeLocation(Object.keys(this.updater.get('initParams')));
    },
    async render(e) {
        if (this['@{init}']) {
            // 首次渲染时：父view本身就会有&lt;mx-loading /&gt;加载效果
            // 非首次渲染时：增加当前view的局部loading态
            this.showLoading({
                sizzle: `#${this.id}`,
            });
        }

        // 筛选参数
        let { initParams } = this.updater.get();
        let locParams = Router.parse().params;
        let params = {};
        for (let key in initParams) {
            params[key] = locParams[key] || initParams[key];
        }

        let data = await this.getList(params);
        this.updater.digest({
            params,
            ...data,
        });

        // 记录用以区分是否为首次渲染
        this['@{init}'] = true;
        this.hideLoading();
    },
    getList(params) {
        let list = [];
        let { single, multi, keyword } = params;
        let titles = '';
        if (single) { titles += `单选：${single}；`; };
        if (multi) { titles += `多选：${multi}；`; };
        if (keyword) { titles += `<br/>搜索关键词：${keyword}；`; };
        for (let i = 0; i < 100; i++) {
            list.push({
                id: i + 1,
                title: `列表数据${i + 1}` + (titles.length > 0 ? ('<br/>' + titles) : ''),
            })
        };
        return new Promise(resolve => {
            setTimeout(() => {
                let offset = +params.offset,
                    pageSize = +params.pageSize;
                resolve({
                    list: list.slice(offset, offset + pageSize),
                    count: list.length,
                });
            }, 2 * 1000)
        })
    },
    /**
     * 筛选项切换，需要回置翻页
     */
    'changeFilter<change>'(e) {
        let params = this.updater.get('params');
        Router.to({
            ...params,
            offset: 0, // 翻页回置
        });
    },
    /**
     * 翻页切换
     */
    'changePager<change>'(e) {
        Router.to(this.updater.get('params'));
    },
    'clear<click>'(e) {
        Router.to(this.updater.get('initParams'));
    }
});