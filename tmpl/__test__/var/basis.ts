import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@basis.html',
    render() {
        // -- 占位符
        this.updater.digest({
            list1: [
                '--line-height', '--font-size', '--font-color', '--font-family',
                '--font-number', '--', '--', '--',
                '--anchor-font-color'
            ],
            list2: [
                '--color-bg', '--color-bg-hover', '--color-bg-active', '--',
                '--app-nav-bg', '--app-bg'
            ],
            list3: [
                '--color-border', '--', '--', '--',
                '--color-warn', '--color-red', '--color-green', '--color-blue'
            ]
        });
    }
});