import Magix, { Router, Vframe } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@4.html',
    render() {
        let path = Router.parse().path;
        let bizCode = '';
        if (path.indexOf('all/revision/ztc') > -1) {
            bizCode = 'subway';
        }
        this.updater.digest({
            bizCode,
            viewId: this.id,
            selected: '00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'
        });
    },
    // 'get<click>'(event) {
    //     let vf = Vframe.get(this.id + '_duration');
    //     let selected = vf.invoke('val');

    //     // 当前选中值
    //     this.updater.digest({
    //         selected
    //     })
    // }
});