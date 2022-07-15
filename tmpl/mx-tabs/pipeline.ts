import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@../mx-effects/pipeline.less');

export default Base.extend({
    tmpl: '@pipeline.html',
    render() {
        let { list, color, colorGradient } = this.updater.get();

        // 色值
        color = color || '#FF0036';
        colorGradient = colorGradient || color;

        let len = list.length;
        let pd = parseInt(50 / len); //间隔
        this.updater.digest({
            len,
            pd
        });
    }
});