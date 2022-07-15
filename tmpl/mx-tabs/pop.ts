import Magix, { Vframe } from 'magix';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@pop.html',
    init(extra) {
        this.assign(extra);
        this['@{owner.node}'] = $('#' + this.id);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        this.updater.set(extra.data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest({
            hide: true
        });

        try {
            // popover显示有延迟效果，此处加延时，等待渲染完成之后选中项跳转到可视范围内
            setTimeout(() => {
                let listItem = document.querySelector(`#${this.id} .mx-output-list`);
                let selectedItem = document.querySelector(`#${this.id} .mx-output-link-active`);
                let lt = listItem.getBoundingClientRect().top, st = selectedItem.getBoundingClientRect().top;
                if (st - lt > listItem.clientHeight - 40) {
                    listItem.scrollTo({
                        top: st - lt - 20,
                    })
                    this.updater.digest({
                        hide: false
                    });
                } else {
                    this.updater.digest({
                        hide: false
                    });
                }
            }, 120)
        } catch (error) {
            this.updater.digest({
                hide: false
            });
        }
    },
    '@{select}<click>'(e) {
        let item = e.params.item;
        if (item.disabled) {
            return;
        }
        let owner = Vframe.get(this.owner.pId);
        $('#' + owner.pId).trigger($.Event('select', {
            item,
        }));
    }
});