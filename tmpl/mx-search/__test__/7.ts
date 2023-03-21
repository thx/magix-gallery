import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            params: {
                searchKey: 'adgroupId',
                searchValue: '123456789',
            }
        });
    }
});