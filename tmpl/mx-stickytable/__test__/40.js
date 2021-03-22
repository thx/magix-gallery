/**
 * sub
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@40.html',
    render() {
        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                campaignId: i,
                campaignName: `计划${i}`
            });
        }
        this.updater.digest({
            list,
            num: 8,
            index: 1
        });
    },
    'expand<click>'(e) {
        let that = this;
        let { list } = that.updater.get();
        let { campaignId } = e.params;
        for (let i = 0; i < list.length; i++) {
            if (list[i].campaignId == campaignId) {
                if (list[i].expand) {
                    list[i].expand = false;
                    that.updater.digest({
                        list
                    })
                } else {
                    list[i].expand = true;
                    list[i].adgroupList = [];
                    if (i % 2 == 0) {
                        for (let j = 1; j < 3; j++) {
                            list[i].adgroupList.push({
                                adgroupId: `${campaignId}${j}`,
                                adgroupName: `单元${campaignId}${j}`
                            })
                        }
                    }
                    that.updater.digest({
                        list
                    })
                }
                break;
            }
        }
    },

    'changeIndex<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        });
    }
});