let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: '00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'
        });
    },
    'get<click>'(event) {
        let vf = Vframe.get(this.id + '_duration');
        let selected = vf.invoke('val');

        // 当前选中值
        this.updater.digest({
            selected
        })
    }
});