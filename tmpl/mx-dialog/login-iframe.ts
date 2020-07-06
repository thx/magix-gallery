import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@login.less');

export default View.extend({
    tmpl: '@login-iframe.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let data = extra.data || {};
        that.updater.set({
            bizCode: data.bizCode || ''
        });

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
        $.getJSON('//g.alicdn.com/mm/bp-source/lib/code.json', (data) => {
            let { bizCode } = that.updater.get();
            let map = data.loginBizMap;
            let info = map[bizCode] ? map[bizCode] : map.def;

            // 淘宝登陆url
            //    css_style：为主站那边给定的样式约定值
            //    from 平台来源 tb / alimama
            let redirectURL = '';
            if (info.fullRedirectURL) {
                // 全路径
                redirectURL = encodeURIComponent(info.fullRedirectURL);
            } else if (!info.redirectURL) {
                // 未配置重定向地址，跳转回当前页面
                redirectURL = encodeURIComponent(window.location.href);
            } else {
                let { params: routeParams } = Magix.Router.parse();
                redirectURL = encodeURIComponent(Magix.toUrl(window.location.origin + info.redirectURL, routeParams));
            }
            let params = [
                `redirectURL=${redirectURL}`, // 登录成功回跳页面
                'style=mini',
                'full_redirect=true',
                'newMini2=true',
                'enup=0',
                'qrlogin=1',
                'keyLogin=true',
                'sub=true'
            ].concat(info.params || []);
            let taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';

            let tabs = [{
                value: 'taobao',
                text: '淘宝会员',
                src: 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&')
            }]
            if (info.alimamaLogin) {
                let alimamaParmas = [
                    `redirect=${encodeURIComponent(window.location.href)}` // 跳回当前页面
                ].concat(info.alimamaParams || [])
                tabs.push({
                    value: 'alimama',
                    text: '阿里妈妈会员',
                    src: '//www.alimama.com/member/minilogin.htm?' + alimamaParmas.join('&')
                })
            }
            that.updater.digest({
                tabs,
                curTab: tabs[0]
            });
        });
    },
    'changeTab<change>'(e) {
        let { tabs } = this.updater.get();
        let curTab = {};
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].value == e.value) {
                curTab = tabs[i];
                break;
            }
        }
        this.updater.digest({
            curTab
        })
    }
});
