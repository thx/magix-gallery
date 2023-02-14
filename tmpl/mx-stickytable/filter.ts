import Magix from 'magix';
import * as Form from '../mx-form/index';
import * as Validator from '../mx-form/validator';

export default Magix.View.extend({
    tmpl: '@filter.html',
    mixins: [Form, Validator],
    init(extra) {
        this.viewOptions = extra;
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        let filterMin = +extra.filterMin || '',
            filterMax = +extra.filterMax || '';
        this.updater.set({
            ...extra,
            filterMin,
            filterMax,
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{enter}<click>'(e) {
        let valid = this.isValid();
        if (valid) {
            let filterMin = +this.updater.get('filterMin'),
                filterMax = +this.updater.get('filterMax');
            if (filterMax < filterMin) {
                this.updater.digest({
                    error: true,
                })
            } else {
                if (this.viewOptions.callback) {
                    this.viewOptions.callback({
                        filterMin,
                        filterMax,
                    })
                }
                if (this.viewOptions.dialog) {
                    this.viewOptions.dialog.close();
                }
            }
        }
    },
    '@{cancel}<click>'(e) {
        if (this.viewOptions.dialog) {
            this.viewOptions.dialog.close();
        }
    }
});