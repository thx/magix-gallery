let Magix = require('magix');
let $ = require('$');
let Data = require('@./data');
Magix.applyStyle('@index.less');
Magix.applyStyle('@../mx-popover/index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(ops) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();

        //该处是否可以由magix自动调用
        this.assign(ops);
    },
    assign(ops) {
        let that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = that.updater.altered();

        //你可以在这里对数据data进行加工,然后通过set方法放入到updater中
        let wrapperId = ops.wrapper || '';
        let wrapper = wrapperId ? $('#' + wrapperId) : $(window);

        let width = ops.width || 1200;
        let navs = ops.navs || [];
        let logo = ops.logo || '//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png';
        let dark = (ops.dark + '' !== 'false'); //默认是true
        let maxWidth = wrapper.outerWidth();
        if (+width > (maxWidth - 40)) {
            width = maxWidth - 40;
        }

        //默认不选中任何一个导航，表示选中的一级导航
        // 如果默认为某个二级导航，订正选中态为一级的
        let cur = ops.cur || '';
        let parent = '', child = '';
        navs.forEach(nav => {
            if (nav.value == cur) {
                // 选中的是一级菜单
                parent = nav.value;
                child = '';
            }
            if (nav.subs && nav.subs.length) {
                nav.subs.forEach(sub => {
                    if (sub.value == cur) {
                        // 选中的是二级菜单
                        parent = nav.value;
                        child = sub.value;
                    }
                })
            }
        })

        that.updater.set({
            wrapperId,
            width,
            navs,
            logo,
            parent,
            child,
            dark
        })

        that['@{wrapper}'] = wrapper;

        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }

        //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
        if (altered) {
            that.updater.snapshot();
            return true;
        }

        //如果数据没变化,则告诉magix当前view不用更新
        return false;
    },
    render() {
        let that = this;
        that.updater.digest({
            list: Data.products,
            fixed: false
        });

        let data = that.updater.get();
        let wrapper = that['@{wrapper}'];
        let maxWidth = wrapper.outerWidth(),
            wrapperId = data.wrapperId;
        let scrollFn = () => {
            let front = $('#' + that.id + ' .@index.less:front');
            let others = $('#' + that.id + ' .@index.less:others');
            let scrollTop = wrapper.scrollTop(),
                otherHeight = others.outerHeight();

            let styles = [
                'width:' + maxWidth + 'px',
                'left: 0'
            ];
            if (wrapperId) {
                styles.push(
                    'position: absolute',
                    'top: ' + scrollTop + 'px'
                )
            } else {
                styles.push(
                    'position: fixed',
                    'top: 0'
                )
            }
            if (scrollTop > otherHeight) {
                that.updater.digest({
                    fixed: true,
                    styles: styles.join(';')
                })
            } else {
                that.updater.digest({
                    fixed: false
                })
            }
        }
        if (!that.$init) {
            that.$init = 1;
            wrapper.on('scroll', scrollFn);
            that.on('destroy', () => {
                wrapper.off('scroll', scrollFn);
            })
        }
        scrollFn();
    },
    'to<click>'(event) {
        let that = this;
        let nav = event.params.nav || {},
            sub = event.params.sub || {};

        // 高亮一级导航
        that.updater.digest({
            parent: nav.value || '',
            child: sub.value || ''
        })

        // 当前选中的tab
        let selected = {};
        if ($.isEmptyObject(sub)) {
            // 一级导航
            selected = nav;
        } else {
            // 二级导航
            selected = sub;
        }

        $('#' + that.id).trigger({
            type: 'navchange',
            nav: selected
        })
    }
});
