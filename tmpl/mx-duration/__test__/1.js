let Magix = require('magix');
let Vframe = Magix.Vframe;
let Router = Magix.Router;
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let path = Router.parse().path;
        let bizCode = '';
        if (path.indexOf('all/revision/ztc') > -1) {
            bizCode = 'subway';
        }
        let selectedList = [
            '00:00-12:00:30,12:00-24:00:40',
            '00:00-12:00:60,12:00-24:00:80',
            '00:00-12:00:100,12:00-24:00:120',
            '00:00-12:00:140,12:00-24:00:160',
            '00:00-12:00:180,12:00-24:00:200',
            '00:00-12:00:210,12:00-24:00:230',
            '00:00-12:00:250,12:00-24:00:0'
        ];
        this.updater.digest({
            viewId: this.id,
            bizCode,
            selectedList,
            selected: selectedList.join(';'),
        });
    },
    'get<click>'(event) {
        let vf = Vframe.get(this.id + '_duration');
        let selected = vf.invoke('val');

        // 当前选中值
        this.updater.digest({
            selectedList: selected.split(';'),
            selected,
        })
    }
});