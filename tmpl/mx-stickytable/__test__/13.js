let Magix = require('magix');
let Base = require('__test__/example');
let Sort = require('@../../mx-stickytable/sort');

module.exports = Base.extend({
    tmpl: '@13.html',
    mixins: [Sort],
    init(e) {
        this.observeLocation(['orderField', 'orderBy']);
    },
    render() {
        let { orderField = '', orderBy = '' } = Magix.Router.parse().params;

        let vs = {
            1: ['a', 'b'],
            2: ['c', 'd'],
            3: ['e', 'f', 'g']
        }
        let fields = [];
        for (let key in vs) {
            vs[key].forEach(v => {
                fields.push({
                    value: v,
                    text: `指标${v}`,
                    order: (v == orderField) ? orderBy : ''
                })
            });
        }

        let list = [];
        for (let i = 0; i < 10; i++) {
            let item = {};
            for (let k in vs) {
                let items = vs[k];
                if (k % 3 == 0) {
                    items.forEach((v, j) => {
                        if (i % 3 == 1) {
                            item[v] = (j + 10) * 1000 - i;
                        } else if (i % 3 == 2) {
                            item[v] = i + j * 10;
                        } else {
                            item[v] = undefined;
                        }
                    })
                } else if (k % 3 == 1) {
                    items.forEach((v, j) => {
                        if (j % 2 == 1) {
                            item[v] = (j + 10) * 1000 - i;
                        } else {
                            item[v] = i + j * 10;
                        }
                    })
                } else {
                    items.forEach((v, j) => {
                        if (j % 2 == 1) {
                            item[v] = ['左莫', '逢春', '释剑', '浩添', '奇贤', '梵墨', '虞佳', '宫卫', '崇志', '行列'][i];
                        } else {
                            item[v] = ['test', 'afced', 'Abcde', 'bced', undefined, null, 'gbc', 'abced', 'mama', 'line'][i];;
                        }
                    })
                }
            }
            list.push(item);
        };

        this.updater.digest({
            fields,
            list: this.sort(list, orderField, orderBy)
        });
    }
});