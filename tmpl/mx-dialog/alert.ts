import Magix from 'magix';
import * as I18n from '../mx-medusa/util';

export default Magix.View.extend({
    tmpl: '@alert.html',
    init(extra) {
        this['@{dialog}'] = extra.dialog;
        this['@{fn.enter.callback}'] = extra.enterCallback;

        let iconText = '';
        switch (extra.type) {
            case 'highlight':
                iconText = '<i class="mc-iconfont color-brand">&#xe728;</i>';
                break;

            case 'error':
                iconText = '<i class="mc-iconfont color-red">&#xe727;</i>';
                break;

            case 'warn':
                iconText = '<i class="mc-iconfont color-warn">&#xe72a;</i>';
                break;

            case 'pass':
                iconText = '<i class="mc-iconfont color-green">&#xe729;</i>';
                break;
        }

        this.updater.set({
            title: extra.title || I18n['dialog.tip'],
            content: extra.content,
            enterText: I18n['dialog.submit'],
            hasBtns: extra.hasBtns,
            iconText
        })
    },
    render() {
        this.updater.digest();
    },
    '@{enter}<click>'() {
        this['@{dialog}'].close();
        if (this['@{fn.enter.callback}']) {
            Magix.toTry(this['@{fn.enter.callback}']);
        }
    }
});