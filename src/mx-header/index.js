let Magix = require('magix');
let $ = require('$');
let Data = require('@./data');
let Dialog = require('@../mx-dialog/index');
Magix.applyStyle('@index.less');
Magix.applyStyle('@../mx-popover/index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
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
        let dark = (ops.dark + '' !== 'false'); //默认是true
        let links = (ops.links + '' !== 'false'); //是否需要顶部外链信息，默认是true
        let login = (ops.login + '' !== 'false'); //是否需要显示登陆信息，默认是true
        let height;
        if (dark) {
            // 历史使用方式兼容
            // 黑底色版必有外链，外链处不显示用户信息
            links = true;
            login = false;
            height = 88
        } else {
            // 白底版本
            height = 100;
        }
        if (!links) {
            height -= 50;
        }

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
            height,
            navs,
            parent,
            child,
            dark,
            login,
            loginView: ops.loginView || '',  //登陆页面
            user: ops.user || '',
            logoutUrl: ops.logoutUrl || '',  //退出接口
            links,
            styles: `top: ${(links ? 50 : 0)}px;`,
            logo: ops.logo || '//img.alicdn.com/tfs/TB12M.meYH1gK0jSZFwXXc7aXXa-392-100.png',
            ceiling: (ops.ceiling + '' !== 'false'), //是否需要吸顶功能，默认是true,
            rightView: ops.rightView || ''  //右侧自定义view
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

        let { wrapperId, links, ceiling } = that.updater.get();
        let wrapper = that['@{wrapper}'];
        let maxWidth = wrapper.outerWidth();
        let scrollFn = () => {
            let others = $('#' + that.id + ' .@index.less:others');
            let otherHeight = 0;
            if (others.length > 0) {
                otherHeight = others.outerHeight()
            }
            let scrollTop = wrapper.scrollTop();
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
                    fixed: false,
                    styles: `top: ${(links ? 50 : 0)}px;`
                })
            }
        }
        if (!that.$init && ceiling) {
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
    },
    'showLogin<click>'(e) {
        let { loginView } = this.updater.get();
        this.mxDialog(loginView, {
        }, {
                width: 350,
                height: 340,
                closable: false
            });
    }
});
