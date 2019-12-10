import Magix from 'magix';
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
        let { params: routeParams } = Magix.Router.parse();
        let map = {
            def: { // 默认配置
                css_style: 'dingxiang',
                redirectURL: window.location.href  //默认跳回当前页面
            },
            adStrategy: { // 策略中心
                css_style: 'dingxiang',
                redirectURL: Magix.toUrl(window.location.origin + '/indexbp.html', routeParams)
            },
            dmpIsv: { // dmp服务商版
                css_style: 'mdmp',
                redirectURL: Magix.toUrl(window.location.origin + '/login_isv.html', routeParams)
            }
        }
        let info = map[data.bizCode || 'def'];
        let params = [
            `redirectURL=${encodeURIComponent(info.redirectURL)}`, // 登录成功回跳页面
            'style=mini',
            `css_style=${info.css_style}`, //css_style为主站那边给定的样式约定值
            'full_redirect=true',
            'newMini2=true',
            'enup=0',
            'qrlogin=1',
            'keyLogin=true'
        ]
        let taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
        let src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');

        that.updater.set({
            src
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
        this.updater.digest();
    }
});

