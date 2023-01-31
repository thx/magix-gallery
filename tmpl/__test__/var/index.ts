import Magix from 'magix';
import Config from './config';
import * as Base from '__test__/example';

export default Base.extend({
    init(e) {
        let map = Magix.toMap(Config.vars, 'key');
        let fs = this.owner.path.split('/');
        let path = fs[fs.length - 1];
        let { list } = map[path];
        list.forEach(item => {
            let value = this.getCssVar(item.key);
            let unit = '';

            if (item.type == 'color') {
                if (value.indexOf('rgb') > -1) {
                    // 先转成hex
                    let rgb = value.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
                    let alpha = (rgb[4] || '1').trim();

                    value = this.colorToHex({
                        r: rgb[1],
                        g: rgb[2],
                        b: rgb[3],
                        alpha,
                    });
                }
            } else if (item.type == 'input') {
                if (value.indexOf('calc') > -1) {

                } else {
                    if (/px$/g.test(value)) {
                        value = value.replace('px', '');
                        unit = 'px';
                    }
                }
            }

            Magix.mix(item, {
                unit,
                value,
            })
        });

        this.updater.set({
            list,
            map: Magix.toMap(list, 'key'),
        });
    }
});