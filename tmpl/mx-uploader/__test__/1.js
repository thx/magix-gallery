let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            list: []
        });
    },
    'uploadSuccess<success>'(e) {
        // e.response

        // let imgs = [
        //     'https://img.alicdn.com/imgextra/i4/O1CN01ob2HP71hx8u4z6u2e_!!6000000004343-0-tps-1030-1030.jpg',
        //     'https://img.alicdn.com/imgextra/i4/O1CN01wXhCeF1uRAFzhBMKo_!!6000000006033-0-tps-1124-1126.jpg',
        //     'https://img.alicdn.com/imgextra/i1/O1CN01wFuAjy1bFHHE9xSut_!!6000000003435-0-tps-1046-1046.jpg',
        //     'https://img.alicdn.com/imgextra/i1/O1CN01BX3Zor1z5hm87qoxx_!!6000000006663-0-tps-891-891.jpg',
        //     'https://img.alicdn.com/imgextra/i1/O1CN01bMICoS1FI6AWp2J4C_!!6000000000463-0-tps-902-902.jpg',
        //     'https://img.alicdn.com/imgextra/i3/O1CN01vxFIMj1qYiJuTAWbf_!!6000000005508-0-tps-519-520.jpg'
        // ];

        // let index = Math.floor(Math.random() * 6);
        // let { list } = this.updater.get();
        // list.push({
        //     url: imgs[index],
        // });

        // this.updater.digest({
        //     list,
        // })
    },
    'uploadError<error>'(e) {
        // e.error
    }
});