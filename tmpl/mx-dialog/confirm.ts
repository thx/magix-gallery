import Magix from 'magix';
import * as I18n from '../mx-medusa/util';

export default Magix.View.extend({
    tmpl: '@confirm.html',
    init(extra) {
        this['@{dialog}'] = extra.dialog;
        this['@{fn.enter.callback}'] = extra.enterCallback;
        this['@{fn.calcel.callback}'] = extra.cancelCallback;
        this.updater.set(extra);

        this.on('destroy', () => {
            if (this['@{interval.timer}']) {
                clearInterval(this['@{interval.timer}']);
            }
        })
    },
    render() {
        let placeholder = '${countdown}',
            content = this.updater.get('content') + '',
            countdown = +this.updater.get('countdown') || 0;
        if (countdown > 0 && content.indexOf(placeholder) > -1) {
            // 倒计时替换
            this.updater.digest({
                c: content.replace(placeholder, countdown + '')
            });

            this['@{interval.timer}'] = setInterval(() => {
                countdown--;
                if (countdown === 0) {
                    clearInterval(this['@{interval.timer}']);
                    this['@{enter}<click>']();
                } else {
                    this.updater.digest({
                        c: content.replace(placeholder, countdown + '')
                    });
                }
            }, 1000);
        } else {
            this.updater.digest({
                c: content
            });
        }
    },
    '@{enter}<click>'() {
        this['@{dialog}'].close();
        if (this['@{fn.enter.callback}']) {
            Magix.toTry(this['@{fn.enter.callback}']);
        }
    },
    '@{cancel}<click>'() {
        this['@{dialog}'].close();
        if (this['@{fn.calcel.callback}']) {
            Magix.toTry(this['@{fn.calcel.callback}']);
        }
    }
});