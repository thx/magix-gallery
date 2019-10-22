import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Data from './data';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@index.less');
Magix.applyStyle('@../mx-popover/index.less');

export default View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    init(ops) {
        this.updater.snapshot();
        this.assign(ops);
    },
    assign(ops) {
        let that = this;
        let altered = that.updater.altered();

        let wrapperId = ops.wrapper || '';
        let wrapper = wrapperId ? $('#' + wrapperId) : $(window);

        let navs = ops.navs || [];
        let dark = (ops.dark + '' !== 'false'); //默认是true
        let links = (ops.links + '' !== 'false'); //是否需要顶部外链信息，默认是true
        let login = (ops.login + '' !== 'false'); //是否需要显示登录信息，默认是true
        let height,
            width = +ops.width;
        if (dark) {
            // 历史使用方式兼容
            // 黑底色版必有外链，外链处不显示用户信息
            links = true;
            login = false;
            height = 88;
            if(!width){
                width = wrapper.outerWidth() - 120;
            }
        } else {
            // 白底版本
            height = 100;
        }
        if (!links) {
            height -= 50;
        }

        //默认不选中任何一个导航，表示选中的一级导航
        // 如果默认为某个二级导航，订正选中态为一级的
        let valueKey = ops.valueKey || 'value',
            textKey = ops.textKey || 'text',
            linkKey = ops.linkKey || 'link'

        let cur = ops.cur || '';
        let parent = '', child = '';
        navs.forEach(nav => {
            if (nav[valueKey] == cur) {
                // 选中的是一级菜单
                parent = nav[valueKey];
                child = '';
            }
            if (nav.subs && nav.subs.length) {
                nav.subs.forEach(sub => {
                    if (sub[valueKey] == cur) {
                        // 选中的是二级菜单
                        parent = nav[valueKey];
                        child = sub[valueKey];
                    }
                })
            }
        })
        that.updater.set({
            wrapperId,
            width,
            height,
            navs,
            valueKey,
            textKey,
            linkKey,
            parent,
            child,
            dark,
            login,
            loginView: ops.loginView || '',  //登录页面
            user: ops.user || '',
            logoutUrl: ops.logoutUrl || '',  //退出接口
            links,
            styles: `top: ${(links ? 50 : 0)}px;`,
            logo: ops.logo || '//img.alicdn.com/tfs/TB12M.meYH1gK0jSZFwXXc7aXXa-392-100.png',
            ceiling: (ops.ceiling + '' !== 'false'), //是否需要吸顶功能，默认是true,
            rightView: ops.rightView || ''  //右侧自定义view
        })

        that['@{wrapper}'] = wrapper;

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
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
        let scrollFn = () => {
            let others = $('#' + that.id + ' .@index.less:others');
            let otherHeight = 0;
            if (others.length > 0) {
                otherHeight = others.outerHeight()
            }
            let maxWidth = wrapper.outerWidth();
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
        let { valueKey } = that.updater.get();

        // 高亮一级导航
        that.updater.digest({
            parent: nav[valueKey] || '',
            child: sub[valueKey] || ''
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
        this.mxLoginView(loginView);
    }
});
