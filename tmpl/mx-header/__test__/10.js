import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@anim.less');

export default Magix.View.extend({
    tmpl: '@10.html',
    init() {
        this.updater.set({
            viewId: this.id,
            list: [{
                value: 'home',
                text: '首页',
                icon: '&#xe6a4;',
                animIcon: '&#xe6a2;',
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01cu4J6g1clcpw5ObZX_!!6000000003641-2-tps-40-40.png',
                animImg: 'https://img.alicdn.com/imgextra/i3/O1CN014ZbdWj1zhGE5EOMEu_!!6000000006745-54-tps-40-40.apng',
            }, {
                value: 'account',
                text: '账户',
                icon: '&#xe6a4;',
                animIcon: '&#xe6a2;',
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01cu4J6g1clcpw5ObZX_!!6000000003641-2-tps-40-40.png',
                animImg: 'https://img.alicdn.com/imgextra/i3/O1CN014ZbdWj1zhGE5EOMEu_!!6000000006745-54-tps-40-40.apng',
                tag: 'NEW',
            }, {
                value: 'report',
                text: '报表',
                icon: '&#xe6a4;',
                animIcon: '&#xe6a2;',
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01cu4J6g1clcpw5ObZX_!!6000000003641-2-tps-40-40.png',
                animImg: 'https://img.alicdn.com/imgextra/i3/O1CN014ZbdWj1zhGE5EOMEu_!!6000000006745-54-tps-40-40.apng',
            }, {
                value: 'tool',
                text: '工具',
                icon: '&#xe6a4;',
                animIcon: '&#xe6a2;',
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01cu4J6g1clcpw5ObZX_!!6000000003641-2-tps-40-40.png',
                animImg: 'https://img.alicdn.com/imgextra/i3/O1CN014ZbdWj1zhGE5EOMEu_!!6000000006745-54-tps-40-40.apng',
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