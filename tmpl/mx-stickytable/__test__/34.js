let Magix = require('magix');
let Moment = require('moment');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@34.html',
    mixins: [Form, Validator],
    render() {
        let fields = [];
        for (let i = 1; i < 12; i++) {
            fields.push({
                value: i,
                text: `字段${i}`,
                width: 120
            })
        }

        let campaignList = [];
        for (let i = 1; i < 4; i++) {
            let campaign = {
                campaignId: i,
                campaignName: `计划名称${i}`,
                count: 0,
                adgroupList: []
            };
            for (let j = 0; j < 3; j++) {
                let disabled = false;
                if (i == 1) {
                    disabled = true;
                } else if (i == 2) {
                    disabled = (j % 2 == 1);
                }

                campaign.adgroupList.push({
                    adgroupId: `${i}_${j}`,
                    adgroupName: `单元名称${i}_${j}`,
                    count: 0,
                    disabled
                })
            }
            campaignList.push(campaign);
        }
        this.updater.set({
            fields,
            campaignList,
            selected: {
                dd: 1,
                date: Moment().format('YYYY-MM-DD')
            }
        });
        this.setValue();
    },

    setValue() {
        let { count } = this.updater.get();
        count = count || 0;
        this.updater.digest({
            linkages: [],
            count: count + 1
        });
    },

    'changeIndexes<click>'(e) {
        let { campaignList, linkages } = this.updater.get();
        linkages = linkages.map(v => v + '');
        for (let i = 0; i < campaignList.length; i++) {
            for (let j = 0; j < campaignList[i].adgroupList.length; j++) {
                if (linkages.indexOf(campaignList[i].adgroupList[j].adgroupId + '') > -1) {
                    campaignList[i].adgroupList[j].count++;
                }
            }
        }
        this.updater.digest({
            campaignList
        })
    },

    'changeIndex<click>'(e) {
        let { campaignList } = this.updater.get();
        let { campaignId, adgroupId } = e.params;

        for (let i = 0; i < campaignList.length; i++) {
            if (campaignList[i].campaignId == campaignId) {
                if (!adgroupId) {
                    campaignList[i].count++;
                } else {
                    for (let j = 0; j < campaignList[i].adgroupList.length; j++) {
                        if (campaignList[i].adgroupList[j].adgroupId == adgroupId) {
                            campaignList[i].adgroupList[j].count++;
                            break;
                        }
                    }
                }
                break;
            }
        }

        this.updater.digest({
            campaignList
        })
    },

    'changeDd<change>'(e) {
        let { selected } = this.updater.get();
        this.updater.set({
            selected: Magix.mix(selected, {
                dd: e.selected
            })
        })
        this.setValue();
    },

    'changeDate<change>'(e) {
        let { selected } = this.updater.get();
        this.updater.set({
            selected: Magix.mix(selected, {
                date: e.date
            })
        })
        this.setValue();
    }
});