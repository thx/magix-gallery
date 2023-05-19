import Magix, { Router, Vframe } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@2.html',
    render() {
        let path = Router.parse().path;
        let bizCode = '';
        if (path.indexOf('all/revision/ztc') > -1) {
            bizCode = 'subway';
        };

        this.updater.digest({
            viewId: this.id,
            bizCode,
            selected: '00:00-12:00:100,12:00-24:00:220;0;0;0;0;0;00:00-24:00:100',
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