import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            name1: '5',
            name2: '',
            name3: '',
            name4: '5',
            name5: '',
            name6: '',
        });
    }
});