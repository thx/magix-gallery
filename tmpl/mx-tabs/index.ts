/**
 * 底边线tab切换
 */
import Magix from 'magix';
import * as $ from '$';
import Base from './base';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest();
        let { selected } = this.updater.get();
        this['@{sync.line}'](selected);
    }
});