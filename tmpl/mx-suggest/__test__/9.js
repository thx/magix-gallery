let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@9.html',
    mixins: [Form, Validator],
    render() {
        let searchList = [{
            text: '计划',
            value: 'campaign'
        }, {
            text: '单元',
            value: 'adgroup'
        }];

        this.updater.digest({
            searchList,
            searchValue: searchList[0].value,
            item: {},
        });
    },

    'update<show>'(e) {
        // keyword：当前输入框输入的值
        // searchValue：当前搜索类型
        let { keyword, searchValue } = e;
        let instance = Vframe.get(this.id + '_test');

        if (!keyword) {
            // 输入框为空时，立即更新列表
            let defs = [1, 2, 3].map(v => {
                return {
                    text: `默认${v}`,
                    value: `def_${v}`
                };
            })
            instance.invoke('update', [defs]);
        } else {
            // 请求处理，先加loading提示
            instance.invoke('showLoading');
            setTimeout(() => {
                let list = [1, 2, 3].map(v => {
                    return {
                        text: `测试_${searchValue}_${v}`,
                        value: `${searchValue}_${v}`
                    };
                })
                instance.invoke('update', [list]);
                instance.invoke('hideLoading');
            }, 1000);
        }
    },

    'change<change>'(e) {
        this.updater.digest({
            searchValue: e.searchValue,
            item: e.item,
        })
    }
});