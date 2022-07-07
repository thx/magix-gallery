import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@6.html',
    async render() {
        let params = {
            selected: 'adgroupId',
            campaignId: '2',
            adgroupId: '2_3',
        }

        let list = await this.getList(params);
        this.updater.digest({
            params,
            list,
        })
    },
    getList(params) {
        return new Promise(resolve => {
            let campaignList = [{
                text: '计划名称1',
                value: 1
            }, {
                text: '计划名称2',
                value: 2
            }, {
                text: '计划名称3',
                value: 3
            }];
            let selectedCampaignId = campaignList[0].value;
            if (params.campaignId && Magix.toMap(campaignList, 'value')[params.campaignId]) {
                selectedCampaignId = params.campaignId;
            }


            let adgroupList = [1, 2, 3].map(i => {
                return {
                    text: `单元名称${selectedCampaignId}_${i}`,
                    value: `${selectedCampaignId}_${i}`,
                }
            });
            let selectedAdgroupId = adgroupList[0].value;
            if (params.adgroupId && Magix.toMap(adgroupList, 'value')[params.adgroupId]) {
                selectedAdgroupId = params.adgroupId;
            }

            let list = [{
                text: '全部计划',
                value: 'campaign',
            }, {
                prefix: '计划',
                value: 'campaignId',
                list: campaignList,
                selected: selectedCampaignId,
            }, {
                prefix: '单元',
                value: 'adgroupId',
                list: adgroupList,
                selected: selectedAdgroupId,
            }];

            resolve(list);
        })
    },

    async  'change<change>'(e) {
        let { params } = this.updater.get();
        for (let key in params) {
            if (e[key]) {
                params[key] = e[key];
            }
        }
        let list = await this.getList(params);
        this.updater.digest({
            params,
            list,
        })
    },

    async 'toCampaign<click>'(e) {
        let params = Magix.mix(this.updater.get('params'), {
            selected: 'campaignId',
            campaignId: e.params.campaignId,
        })
        let list = await this.getList(params);
        this.updater.digest({
            params,
            list,
        })
    },

    async 'toAdgroup<click>'(e) {
        let params = Magix.mix(this.updater.get('params'), {
            selected: 'adgroupId',
            adgroupId: e.params.adgroupId,
        })
        let list = await this.getList(params);
        this.updater.digest({
            params,
            list,
        })
    },

    'empty<click>'(e) {
        this.render();
    }
});