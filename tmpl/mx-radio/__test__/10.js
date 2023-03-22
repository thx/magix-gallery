let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@10.html',
    render() {
        let list1 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }];

        let list2 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tag: 'HOT',
            tags: ['<i class="mc-iconfont">&#xe601;</i>', '<i class="mc-iconfont">&#xe601;</i>'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }];

        let list3 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['<i class="mc-iconfont">&#xe601;</i>', '<i class="mc-iconfont">&#xe601;</i>'],
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01vZt5WD1XFxHipYrw1_!!6000000002895-2-tps-160-160.png" />',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN011iQoCI1YlqTiaGDGf_!!6000000003100-2-tps-160-160.png"/>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01GwJniw1sleczUiFKO_!!6000000005807-2-tps-160-160.png"/>',
        }];

        let list4 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tag: 'HOT',
            tags: ['文案文案', '文案'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<i class="mc-iconfont">&#xe621;</i>',
        }];

        let list5 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN0152J1BU1FAJJvA9eij_!!6000000000446-2-tps-154-154.png"/>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01Y65sM11syTiZUfzyb_!!6000000005835-2-tps-152-152.png" />',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            tags: ['文案文案', '文案'],
            icon: '<img src="https://img.alicdn.com/imgextra/i2/O1CN01F0CE081yssZLdMOCi_!!6000000006635-2-tps-152-152.png" />',
        }];

        let list6 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            tag: 'HOT',
            icon: '<img src="https://img.alicdn.com/imgextra/i3/O1CN01FyvEDf20EhC2lpVWe_!!6000000006818-2-tps-200-200.png"/>',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01TV2quY27e4RqjEjP7_!!6000000007821-2-tps-200-200.png" />',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/imgextra/i1/O1CN01D8uBfH1L6Xtjd6tQr_!!6000000001250-2-tps-200-200.png" />',
        }];

        let list7 = [{
            text: '选项文案1',
            value: 1,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/bao/uploaded/i1/111212547/O1CN011UgZU95qBzAyshG_!!0-saturn_solar.jpg" />',
        }, {
            text: '选项文案2',
            value: 2,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/bao/uploaded/i1/111212547/O1CN011UgZU95qBzAyshG_!!0-saturn_solar.jpg" />',
        }, {
            text: '选项文案3',
            value: 3,
            tip: '选项说明文案一行或者两行高度一致',
            icon: '<img src="https://img.alicdn.com/bao/uploaded/i1/111212547/O1CN011UgZU95qBzAyshG_!!0-saturn_solar.jpg" />',
        }];

        let v1 = this.getCssVar('--mx-checkbox-card-small-width'),
            v2 = this.getCssVar('--mx-checkbox-card-width'),
            v3 = this.getCssVar('--mx-checkbox-card-hide-icon-small-width'),
            v4 = this.getCssVar('--mx-checkbox-card-hide-icon-width');

        this.updater.digest({
            v1, v2, v3, v4,
            list1,
            selected1: list1[0].value,
            list2,
            selected2: list2[0].value,
            list3,
            selected3: list3[0].value,
            list4,
            selected4: list4[0].value,
            list5,
            selected5: list5[0].value,
            list6,
            selected6: list6[0].value,
            list7,
            selected7: list7[0].value,
        });
    },

    'change<change>'(e) {
        this.updater.digest({
            [`selected${e.params.index}`]: e.selected
        })
    },

    'toggleDisabled<click>'(e) {
        let data = this.updater.get();
        let { index, disabled } = e.params;
        data[`list${index}`].forEach(item => {
            item.disabled = disabled;
        })
        this.updater.digest(data);
    }
});