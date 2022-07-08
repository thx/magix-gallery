import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@anim.less');

export default Magix.View.extend({
    tmpl: '@9.html',
    init() {
        this.updater.set({
            viewId: this.id,
            list: [{
                value: 'home',
                text: '首页',
                icon: '&#xe6a4;',
                animIcon: '&#xe6a2;',
            }, {
                value: 'account',
                text: '账户',
                icon: '&#xe675;',
                animIcon: '&#xe678;',
                tag: 'NEW',
            }, {
                value: 'report',
                text: '报表',
                icon: '&#xe6a4;',
                animIcon: '&#xe6a2;',
            }, {
                value: 'tool',
                text: '工具',
                icon: '&#xe675;',
                animIcon: '&#xe678;',
            }]
        });

        this.on('destroy', () => {
            ['@{dealy.reset.timer}'].forEach(timerKey => {
                if (this[timerKey]) {
                    clearTimeout(this[timerKey]);
                }
            });
        });
    },
    render() {
        let selectedIndex = 0;
        this.updater.digest({
            selectedIndex,
        });
        this['@{set.pos}'](selectedIndex);
    },

    '@{set.pos}'(selectedIndex) {
        let owner = $(`#${this.id}_cont`);
        let items = owner.find('.@anim.less:item');
        let item = $(items[selectedIndex]);

        this.updater.digest({
            hoverIndex: selectedIndex,
            left: item.offset().left - owner.offset().left,
            width: item.outerWidth(),
        })
        // owner.find('.@anim.less:bg').animate({
        //     left: item.offset().left - owner.offset().left,
        //     width: item.outerWidth(),
        // }, 400);
    },

    '@{select}<click>'(e) {
        let selectedIndex = e.params.index;
        this.updater.set({
            selectedIndex,
        });
        this['@{set.pos}'](selectedIndex);
    },

    '@{over}<mouseover>'(e) {
        clearTimeout(this['@{dealy.reset.timer}']);
        this['@{set.pos}'](e.params.index);
    },

    /**
     * 恢复到选中项
     */
    '@{out}<mouseout>'(e) {
        let that = this;
        clearTimeout(that['@{dealy.reset.timer}']);
        that['@{dealy.reset.timer}'] = setTimeout(that.wrapAsync(() => {
            let { selectedIndex } = that.updater.get();
            that['@{set.pos}'](selectedIndex);
        }), 200);
    },
});