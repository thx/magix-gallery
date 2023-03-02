import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest();
    },
    'show<click>'(e) {
        // this.mxLoginView(viewOptions)
        // viewOptions：object
        //      bizCode：项目bizCode，包装了登陆框逻辑
        let bizCode = e.params.bizCode;
        this.mxLoginView({
            bizCode
        })
    }
});