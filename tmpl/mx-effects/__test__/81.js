let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@81.html',
    render() {
        let list1 = [], times1 = [];
        let start = -8;
        for (let i = 0; i < 5; i++) {
            let ts = [];
            let gap = (i % 2 == 0) ? 4 : 3;
            for (let j = -1; j < (gap - 1); j++) {
                let d = this.getDateInfo(start);
                ts.push(d);
                start = start + 1;
            }
            times1 = times1.concat(ts);

            list1.push({
                title: `第${i + 1}个时段`,
                subTitle: `${ts[0].slice(5).replace('-', '.')} - ${ts[ts.length - 1].slice(5).replace('-', '.')}`,
                startTime: ts[0],
                endTime: ts[ts.length - 1],
            })
        }

        let list2 = [], times2 = [];
        let start2 = -8;
        for (let i = 0; i < 5; i++) {
            let ts = [];
            let gap = (i % 2 == 0) ? 4 : 3;
            for (let j = -1; j < (gap - 1); j++) {
                let d = this.getDateInfo(start2);
                ts.push(d);
                if (j < gap - 2) {
                    start2 = start2 + 1;
                    times2.push(d);
                } else if (i == 4) {
                    times2.push(d);
                }
            }

            list2.push({
                title: `第${i + 1}个时段`,
                subTitle: `${ts[0].slice(5).replace('-', '.')} - ${ts[ts.length - 1].slice(5).replace('-', '.')}`,
                startTime: ts[0],
                endTime: ts[ts.length - 1],
            })
        }

        this.updater.digest({
            viewId: this.id,
            list1,
            times1,
            selected1: times1[4],
            list2,
            times2,
            selected2: times2[4],
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
            [`selected${e.params.index}`]: e.params.time,
        })
    }
});