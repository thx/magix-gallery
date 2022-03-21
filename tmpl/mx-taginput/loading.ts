import Magix from 'magix';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@loading.html',
    render() {
        this.updater.digest();
    },
});