let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@login-demo.less');

module.exports = Base.extend({
    tmpl: '@login-demo.html',
    render() {
        // 登录成功回跳页面
        let forward = window.location.origin + '/indexbp.html';
        let params = [
            'redirectURL=' + encodeURIComponent(forward),
            'style=mini',
            'css_style=dingxiang', //css_style为主站那边给定的样式约定值
            'full_redirect=true',
            'newMini2=true',
            'enup=0',
            'qrlogin=1',
            'keyLogin=true'
        ]
        let taobaoHost = !!~window.location.host.indexOf('daily') ? 'login.daily.taobao.net' : 'login.taobao.com';
        let src = 'https://' + taobaoHost + '/member/login.jhtml?' + params.join('&');

        this.updater.digest({
            src
        });

    }
});