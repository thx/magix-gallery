import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxModal('@./modal-tip', {
            content: '当前浮层标题旁带feedback入口',
        }, {
            width: 800,
            header: {
                title: '标题旁带Feedback',
                feedbackId: 5478,
            }
        });
    }
});