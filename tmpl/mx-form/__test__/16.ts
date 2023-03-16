import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            name1: '1',
            name2: '2',
            name3: '',
            name4: '',
            name5: '5',
            name6: '',
            name7: '',
        });
    }
});