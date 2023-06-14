import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            index: 1
        });

        // setTimeout(() => {
        //     this.updater.digest({
        //         index: 2
        //     });
        // }, 2000)
    },
    'change<click>'() {
        this.updater.digest({
            index: this.updater.get('index') + 1,
        })
    }
});