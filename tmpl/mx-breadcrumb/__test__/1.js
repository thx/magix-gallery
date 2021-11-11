let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    init() {
        this.observeLocation(['breadcrumb']);
    },
    render() {
        let list = [{
            text: '首页',
            value: 'home',
            link: '#!/breadcrumb/index?breadcrumb=home'
        }, {
            text: '计划名称',
            value: 'campaign',
            link: '#!/breadcrumb/index?breadcrumb=campaign'
        }, {
            text: '单元名称',
            value: 'adgroup',
            link: '#!/breadcrumb/index?breadcrumb=adgroup'
        }];

        let locParams = Magix.Router.parse().params;
        let selected = locParams.breadcrumb || list[list.length - 1].value;
        this.updater.digest({
            list,
            selected,
        });
    },
    'empty<click>'(e) {
        Magix.Router.to({
            breadcrumb: ''
        })
    }
});