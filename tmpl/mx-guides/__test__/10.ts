import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as Guides from '../../mx-guides/index';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@10.html',
    mixins: [Form, Validator, Guides],
    render() {
        let viewId = this.id;
        this.updater.digest({
            viewId,
        });

        // point：单点
        // module：模块
        for (let i = 1; i < 2; i++) {
            this.showMxGuides({
                mode: 'point',
                type: 'breath',
                list: [{
                    sizzle: `#${viewId}_module_${i}`,
                    tip: '功能上新啦！',
                    placement: i == 1 ? 'bottom' : (i == 2 ? 'top' : 'right'),
                }]
            });
        }
    },
});