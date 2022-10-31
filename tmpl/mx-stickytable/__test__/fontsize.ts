import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@fontsize.less');

export default Magix.View.extend({
    tmpl: '@fontsize.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        this.updater.set({
            tableId: extra.tableId,
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest({
            state: true,
        });

        let tableNode = $('#' + this.updater.get('tableId'));
        tableNode.css({
            '--mx-table-font-size': 'calc(var(--font-size) + 2px)',
        })
    },
    'toggle<change>'(e) {
        Magix.config('xxx', {

        });

        let tableNode = $('#' + this.updater.get('tableId'));
        if (e.state) {
            tableNode.css({
                '--mx-table-font-size': 'calc(var(--font-size) + 2px)',
            })
        } else {
            tableNode.css({
                '--mx-table-font-size': 'var(--font-size)',
            })
        }

        // 全局or单表格
        // document.style.
    }
});