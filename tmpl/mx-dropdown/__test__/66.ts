import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@66.html',
    render() {
        this.updater.digest({
            loading: true,
            list: [],
            selected: '',
        });
    },
    'change<change>'(event) {
        this.updater.digest({
            selected: event.selected,
        })
    },
    'getData<focusin>'() {
        setTimeout(() => {
            let { list: oldList } = this.updater.get();
            if (!oldList?.length) {
                let list = [];
                for (let i = 1; i < 10; i++) {
                    list.push({
                        text: Magix.guid('text_'),
                        value: i,
                    })
                };

                this.updater.digest({
                    loading: false,
                    list,
                    selected: '',  // 回置选中项
                })
            }
        }, 2000);
    }
});