let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@53.html',
    render() {
        this.updater.digest({
            num: 8,
            line: 5,
            list: [{
                url: 'https://img.alicdn.com/imgextra/i1/O1CN01wFuAjy1bFHHE9xSut_!!6000000003435-0-tps-1046-1046.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                link: 'http://taobao.com/',
                tips: [
                    'ID：1234567890'
                ]
            }, {
                url: 'https://img.alicdn.com/imgextra/i1/O1CN01BX3Zor1z5hm87qoxx_!!6000000006663-0-tps-891-891.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                link: 'http://taobao.com/',
                tips: [
                    'ID：1234567891',
                    '创意类型：模板'
                ]
            }, {
                url: 'https://img.alicdn.com/imgextra/i1/O1CN01bMICoS1FI6AWp2J4C_!!6000000000463-0-tps-902-902.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                tips: [
                    'ID：1234567892'
                ]
            }, {
                url: 'https://img.alicdn.com/imgextra/i3/O1CN01vxFIMj1qYiJuTAWbf_!!6000000005508-0-tps-519-520.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                tips: [
                    'ID：1234567893'
                ]
            }, {
                url: 'https://img.alicdn.com/imgextra/i4/O1CN01wXhCeF1uRAFzhBMKo_!!6000000006033-0-tps-1124-1126.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                tips: [
                    'ID：1234567894'
                ]
            }, {
                url: 'https://img.alicdn.com/imgextra/i4/O1CN01ob2HP71hx8u4z6u2e_!!6000000004343-0-tps-1030-1030.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                tips: [
                    'ID：1234567895'
                ]
            }, {
                url: 'https://img.alicdn.com/imgextra/i3/O1CN01cGtFLy1sJGBf0I2po_!!6000000005745-0-tps-1358-1358.jpg',
                title: '[三只松鼠_猪肉煮肉210g]休闲食品小零食休闲食品小零食',
                tips: [
                    'ID：1234567896'
                ]
            }]
        });
    },
});