let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        let navs = [{
            value: 1,
            text: '一级1'
        }, {
            value: 2,
            text: '一级2',
            subs: [{
                value: 21,
                text: '二级2-1'
            }, {
                value: 22,
                text: '二级2-2'
            }]
        }, {
            value: 3,
            text: '外链打开',
            link: 'https://www.taobao.com/'
        }]

        $.getJSON('//g.alicdn.com/mm/bp-source/lib/products.json', ({ logos = {} }) => {
            let bizCodes = [];
            for (let bizCode in logos) {
                if (logos[bizCode]) {
                    bizCodes.push({
                        value: bizCode
                    })
                }
            }
            this.updater.digest({
                bizCodes,
                viewId: this.id,
                navs,
                cur: navs[0]
            });
        }).fail((data, status, xhr) => {
            this.updater.digest({
                viewId: this.id,
                navs,
                cur: navs[0]
            });
        });
    }
});