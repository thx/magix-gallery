import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as Guides from '../index';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@4.html',
    mixins: [Form, Validator, Guides],
    render() {
        this.updater.digest({
            viewId: this.id
        });
    },
    'show<click>'(e) {
        let { viewId } = this.updater.get();

        // point：单点
        // module：模块
        this.showMxGuides({
            mode: 'module',
            list: [{
                sizzle: `#${viewId}_module_0`,
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01lXaOMJ1rTVNPSftyQ_!!6000000005632-2-tps-133-109.png',
                title: '大标题',
                tip: '提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'bottom',
            }]
        })
    }
});