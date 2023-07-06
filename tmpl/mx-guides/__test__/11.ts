import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
import * as Guides from '../../mx-guides/index';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@11.html',
    mixins: [Form, Validator, Guides],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let viewId = this.id;
        this.updater.digest({
            viewId,
        });

        let { placement } = this.updater.get();
        this.showMxGuides({
            mode: 'point',
            type: 'breath',
            list: [{
                sizzle: `#${viewId}_btn`,
                tip: '功能上新啦！',
                placement,
            }]
        });
    },
});