import Magix from 'magix';
import Base from './base';
Magix.applyStyle('@./base.less');
export default Base.extend({
    tmpl: '@index.html'
});