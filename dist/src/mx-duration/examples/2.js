let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: '00:00-12:00:100,12:00-24:00:220;0;0;0;0;0;00:00-24:00:100'
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