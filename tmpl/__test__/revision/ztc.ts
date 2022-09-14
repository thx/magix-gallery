import Magix from 'magix';
import Base from './base';
Magix.applyStyle('@global.style');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@../base.less');
Magix.applyStyle('@../../mx-style/group_ztc.less');

export default Base.extend({
    tmpl: '@../base.html'
});