/**
 * 盒状分组
 */

import Magix from 'magix';
import Base from './base';
Magix.applyStyle('@box.less');

export default Base.extend({
    tmpl: '@box.html',
    render() {
        let mode = this.updater.get('mode');

        let classNames = 'names@box.less[solid-box,hollow-box,vertical-box]';
        this.updater.digest({
            boxClass: classNames[`${mode}-box`]
        });
    }
});