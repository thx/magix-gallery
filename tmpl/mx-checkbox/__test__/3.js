let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`,
                tip: '提示信息',
                tag: '打标',
                img: (i % 2 == 0) ? 'https://img.alicdn.com/imgextra/i4/O1CN01UfLY0A1Jr8tPuZIx4_!!6000000001081-2-tps-42-40.png' : 'https://img.alicdn.com/imgextra/i1/O1CN01xOd6Iy21GMAK8aXW9_!!6000000006957-2-tps-63-50.png'
            })
        }

        this.updater.digest({
            viewId: this.id,
            list,
            selected1: [1, 2, 3],
            selected2: '1,2,3',
            selected3: [1, 2, 3],
            selected4: [1, 2, 3],
            selected5: [1, 2, 3],
            selected6: [1, 2, 3],
            selected7: [1, 2, 3],
            selected8: [1, 2, 3],
            num: 4,
            line: 4,
            page: 1,
            checkboxes: []
        });
    },

    'nextPage<click>'(e) {
        let { page } = this.updater.get();
        this.updater.digest({
            page: page + 1
        })
    },

    'prevPage<click>'(e) {
        let { page } = this.updater.get();
        this.updater.digest({
            page: page - 1
        })
    },

    'change<change>'(e) {
        let { index, value } = e.params;
        this.updater.digest({
            [`selected${index}`]: value
        })
    },

    'test<click>'(e) {
        this.updater.digest({
            selected1: 1
        })
    },

    'check<click>'(e) {
        let result = this.isValid();
    }
});