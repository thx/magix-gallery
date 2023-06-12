import Magix, { Router } from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            tag: '<span class="ml4" mx-view="mx-effects/icon?mode=solid&type=highlight&content=打标"></span>',
            content: 2000,
            rules: {
                required: true,
                min: [200, '不小于200']
            },
            asyncRules: (str) => {
                return new Promise(resolve => {
                    let num = +str;
                    resolve((num % 2 == 0) ? '请输入奇数' : null);
                })
            }
        });
    },
    'change<change>'(e) {
        // content编辑后的文案
        this.updater.digest({
            content: e.content
        })
    }
});