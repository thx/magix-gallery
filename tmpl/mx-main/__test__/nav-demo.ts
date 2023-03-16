import Magix, { Router } from 'magix';
import Base from './4';
Magix.applyStyle('@nav.less');

export default Base.extend({
    tmpl: '@nav-demo.html',
});