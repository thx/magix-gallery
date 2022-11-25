let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/mask');

module.exports = Base.extend({
    tmpl: '@62.html',
    mixins: [Loading],
    init() {
        let allList = [];
        for (let i = 1; i < 81; i++) {
            allList.push({
                text: `选项${i}`,
                value: i
            })
        }
        this.updater.set({
            allList,
            pagination: {
                total: allList.length,
                page: 1,
                size: 8,
            }
        })
    },
    render() {
        let { allList, pagination: { page, size } } = this.updater.get();
        this.updater.digest({
            list: allList.slice((page - 1) * size, page * size),
            item: allList[0] || {},
        });
    },
    'change<change>'(event) {
        // event.item
        this.updater.digest({
            item: event.item,
        })
    },
    async 'changePager<pagechange>'(event) {
        // event.page 当前页码	
        // event.size 每页条数	
        // event.offset 偏移量：offset = (page - 1) * size	
        // event.sizzleId 当前下拉列表id，方便加loading
        let that = this;
        let { pagination, allList } = that.updater.get();
        let { page, size } = event;

        // 显示加载loading
        that.showLoading({
            sizzle: `#${event.sizzleId}`,
        });

        setTimeout(() => {
            // 结束loading
            that.hideLoading();

            // 只更选可选列表，不更新选中项
            this.updater.digest({
                pagination: Magix.mix(pagination, {
                    page,
                    size,
                }),
                list: allList.slice((page - 1) * size, page * size),
            });
        }, 2000);
    }
});