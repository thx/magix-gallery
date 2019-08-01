let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let types = [{
            "name": "组1",
            "provinces": [{
                "id": 461,
                "name": "天津"
            }, {
                "id": 508,
                "name": "浙江",
                "cities": [{
                    "id": 509,
                    "name": "杭州"
                }, {
                    "id": 511,
                    "name": "湖州"
                }, {
                    "id": 512,
                    "name": "嘉兴"
                }]
            }]
        }, {
            "name": "组2",
            "provinces": [{
                "id": 471,
                "name": "新疆",
                "cities": [{
                    "id": 472,
                    "name": "阿克苏",
                }, {
                    "id": 473,
                    "name": "阿勒泰",
                }]
            }, {
                "id": 577,
                "name": "北京",
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            types,
            selected: [509],
            arrs: [{
                "id": 509,
                "name": "杭州"
            }]
        });
    },
    'get<click>' (event) {
        let id = this.id + '_area';
        let vf = Magix.Vframe.get(id);

        // 完整的选中信息
        let arrs = vf.invoke('getSelected');
        // 选中的id值
        let selected = vf.invoke('val');
        this.updater.digest({
            selected,
            arrs
        })
    }
});