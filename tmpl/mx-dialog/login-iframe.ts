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
        $.getJSON('//g.alicdn.com/mm/bp-source/lib/data.json', (data) => {
            let { bizCode } = that.updater.get();

            let { params: routeParams } = Magix.Router.parse();
            let map = data.loginBizMap;
            let info = map[bizCode] ? map[bizCode] : map.def;
            let params = [
                `redirectURL=${encodeURIComponent(Magix.toUrl(window.location.origin + info.redirectURL, routeParams))}`, // 登录成功回跳页面
                'style=mini',
                `css_style=${info.cssStyle}`, //css_style为主站那边给定的样式约定值
                'full_redirect=true',
                'newMini2=true',
                'enup=0',
                'qrlogin=1',
                'keyLogin=true',
                'sub=true'
            ]
            let taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
            let src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');

            that.updater.digest({
                src
            });
        });
    }
});

