let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@14.html',
    render() {
        let list1 = [];
        let start = -8;
        for (let i = 0; i < 5; i++) {
            let ts = [];
            let gap = (i % 2 == 0) ? 4 : 3;
            for (let j = -1; j < (gap - 1); j++) {
                let d = this.getDateInfo(start);
                ts.push(d);
                start = start + 1;
            }
            list1.push({
                highlight: i == 0 || i == 1 || i == 2,
                value: i + 1,
                text: `第${i + 1}个时段`,
                tip: `${ts[0].slice(5).replace('-', '.')} - ${ts[ts.length - 1].slice(5).replace('-', '.')}`,
                icon: (i == 1) ? 'https://img.alicdn.com/imgextra/i2/O1CN014Tqfav1kV9WwsKZzJ_!!6000000004688-2-tps-24-28.png' : '',
                iconTip: (i == 1) ? '' : '提示信息',
            })
        }
        this.updater.digest({
            viewId: this.id,
            list: list1,
            selected: list1[2].value,
        });
    },
    getDateInfo(offset) {
        let today = new Date();
        let date = new Date(today.getTime() + (offset * 60 * 60 * 24 * 1000));
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        return `${year}-${month}-${day}`;

    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected,
        })
    }
});