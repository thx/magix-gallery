import Magix from 'magix';
import Base from './steps';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@ver.html'
})