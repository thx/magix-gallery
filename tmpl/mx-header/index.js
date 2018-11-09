let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

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
        let cur = ops.cur || ''; //默认不选中任何一个导航
        let width = ops.width || 1184;
        let navs = ops.navs || [];
        let logo = ops.logo || '//img.alicdn.com/tfs/TB1vee6iAzoK1RjSZFlXXai4VXa-534-98.png';
        let maxWidth = wrapper.outerWidth();
        if (+width > (maxWidth - 40)) {
            width = maxWidth - 40;
        }

        that.updater.set({
            wrapperId,
            width,
            navs,
            logo,
            cur
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
        let data = that.updater.get();

        $.ajax({
            url: '//mos.m.taobao.com/zuanshi/jsonp_201805231426009',
            dataType: 'jsonp',
            jsonp: 'callback',
            cache: true,
            success: that.wrapAsync((resp) => {
                let list = resp.list || [];
                list.forEach(item => {
                    let height = 10 * 2 * item.seconds.length;
                    item.seconds.forEach(second => {
                        if (second.title) {
                            height += 30;
                        }
                        height += (second.thirds.length * 32);
                    })

                    item.height = height;
                    item.showHeight = 0;
                })

                that.updater.digest({
                    list,
                    fixed: false
                });

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
            })
        });
    },
    'toggle<mouseover,mouseout>'(event) {
        if (Magix.inside(event.relatedTarget, event.eventTarget)) {
            return;
        }
        let that = this;
        let index = event.params.index,
            height = event.params.height;
        let list = that.updater.get('list');
        list[index].showHeight = height;
        that.updater.digest({
            list
        });
    },
    'to<click>'(event) {
        let that = this;
        let curNav = event.params.nav;
        that.updater.digest({
            cur: curNav.value
        })

        $('#' + that.id).trigger({
            type: 'navchange',
            nav: curNav
        })
    }
});
