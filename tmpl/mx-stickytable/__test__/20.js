/**
 * sort
 */
let Magix = require('magix');
let Base = require('__test__/example');
let Sort = require('@../../mx-stickytable/sort');

module.exports = Base.extend({
    tmpl: '@20.html',
    mixins: [Sort],
    init(e) {
        Base.prototype.init.call(this, e);
        this.observeLocation(['orderField1', 'orderBy1', 'orderField2', 'orderBy2']);
    },
    render() {
        let { orderField1 = '', orderBy1 = '', orderField2 = '', orderBy2 = '' } = Magix.Router.parse().params;
        let fields1 = ['a', 'b'].map(v => {
            return {
                value: v,
                text: `指标${v}`,
                order: (v == orderField1) ? orderBy1 : ''
            }
        })
        let fields2 = ['c', 'd'].map(v => {
            return {
                value: v,
                text: `指标${v}`,
                order: (v == orderField2) ? orderBy2 : ''
            }
        });

        let count = 4;
        let list1 = [];
        for (let i = 0; i < count; i++) {
            list1.push({
                a: i + 1,
                b: 1000 - i,
                c: 100 - i,
                d: i + 3
            });
        };

        let list2 = [];
        for (let i = 0; i < count; i++) {
            list2.push({
                a: i + 1,
                b: 1000 - i,
                c: 100 - i,
                d: i + 3
            });
        };

        this.updater.digest({
            fields1,
            fields2,
            list1: this.sort(list1, orderField1, orderBy1),
            list2: this.sort(list2, orderField2, orderBy2),
        });
    }
});