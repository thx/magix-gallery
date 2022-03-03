import Magix from 'magix';
import Base from './base';
Magix.applyStyle('@global.style');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@../base.less');
Magix.applyStyle('@update2022.less');

export default Base.extend({
    tmpl: '@../base.html'
});