import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';

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

            let { params: routeParams } = Magix.Router.parse();
            let map = data.loginBizMap;
            let info = map[bizCode] ? map[bizCode] : map.def;

            // css_style：为主站那边给定的样式约定值
            // from 平台来源 tb / alimama
            let redirectURL = '';
            if (info.fullRedirectURL) {
                // 全路径
                redirectURL = encodeURIComponent(info.fullRedirectURL);
            } else if (!info.redirectURL) {
                // 未配置重定向地址，跳转回当前页面
                redirectURL = encodeURIComponent(window.location.href);
            } else {
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
            ].concat(info.params);

            let taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
            let src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');
            that.updater.digest({
                src
            });
        });
    }
});

