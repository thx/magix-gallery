let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@9.html',
    mixins: [Form, Validator],
    render() {
        let list = [];
        for (let i = 1; i < 5; i++) {
            list.push({
                value: i,
                text: `选项${i}`,
                tip: '提示信息',
                tag: '打标',
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
            colors: [
                { value: "#339DFF", text: "蓝色" },
                { value: "#00CCCC", text: "蓝绿" },
                { value: "#6CCC3D", text: "草绿" },
                { value: "#FF8C19", text: "橘色" },
                { value: "#FF33A3", text: "粉色" },
                { value: "#964DFF", text: "蓝紫" },
                { value: "#FF4D4D", text: "红色" },
            ]
        });
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