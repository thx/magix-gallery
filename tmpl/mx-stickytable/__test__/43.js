/**
 * empty
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@43.html',
    render() {
        let text = '暂无数据',
            data = {
                img: 'https://img.alicdn.com/imgextra/i4/O1CN01Kj1Vfo1MLUOJJfFr1_!!6000000001418-2-tps-1218-884.png',
                subTitle: '小标题描述',
                title: '主要文案<br/>限1-2行，12-20字',
                tip: '辅助描述：限1-3行，20-50字<br/>辅助描述：限1-3行，20-50字辅助描述：限1-3行，20-50字',
                link: 'https://www.taobao.com/',
                linkText: '点击查看详情',
                btns: [{
                    text: '马上创建智能推广',
                    link: 'https://www.taobao.com/',
                }]
            };
        this.updater.digest({
            line: 5,
            num: 5,
            index: 1,
            text,
            data,
            emptyData: data,
            emptyText: text,
            params: {
                total: 100,
                page: 1,
                size: 5
            }
        });
    },
    'clearData<click>'(e) {
        let { data, text } = this.updater.get();
        this.updater.digest({
            line: 0,
            emptyData: data,
            emptyText: '',
        })
    },
    'clearText<click>'(e) {
        let { data, text } = this.updater.get();
        this.updater.digest({
            line: 0,
            emptyData: {},
            emptyText: text,
        })
    },
    'reset<click>'(e) {
        this.updater.digest({
            line: 5
        })
    },
    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    'changePage<change>'(e) {
        let { params } = this.updater.get();
        this.updater.digest({
            params: Magix.mix(params, {
                size: e.size,
                page: e.page
            })
        })
    }
});