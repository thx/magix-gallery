/**
 * sort
 */
import Magix from 'magix';
import * as Base from '__test__/example';
import * as Sort from '../../mx-stickytable/sort';
Magix.applyStyle('@57.less');

export default Base.extend({
    tmpl: '@57.html',
    mixins: [Sort],
    init(e) {
        let fields = [];
        for (let i = 1; i < 10; i++) {
            fields.push({
                text: `指标${i}`,
                value: `field${i}`,
                tip: `<div class="bold mb5">指标${i}</div><div>指标${i}提示文案</div>`
            })
        }
        this.updater.set({
            fields,
            formater: (v) => {
                if (v === undefined || v === null) {
                    return '-';
                } else {
                    return v;
                }
            },
        })
    },

    render() {
        let { fields } = this.updater.get();

        // mock数据请求
        let list = [];
        for (let i = 0; i < 18; i++) {
            let item = {};

            fields.forEach(({ value }, j) => {
                if (j % 2 == 0) {
                    if (i % 3 == 1) {
                        item[value] = (j + 10) * 1000 - i;
                    } else if (i % 3 == 2) {
                        item[value] = i + j * 10;
                    } else {
                        item[value] = undefined;
                    }
                } else {
                    if (j % 2 == 1) {
                        item[value] = (j + 10) * 1000 - i;
                    } else {
                        item[value] = i + j * 10;
                    }
                }

            })
            list.push(item);
        };

        this.updater.digest({
            list,
        });
    },

    /**
     * 指标排序
     */
    'sort<sort>'(event) {
        let { orderField, orderBy } = event;

        // 指标排序
        let { fields, list } = this.updater.get();
        fields.forEach(field => {
            Magix.mix(field, {
                order: (field.value == orderField) ? orderBy : ''
            })
        })

        this.updater.digest({
            fields,
            list: this.sort(list, orderField, orderBy), // 本页排序
        })
    },

    /**
     * 指标筛选
     */
    'filter<filter>'(event) {
        let { orderField, filterMin, filterMax } = event;
        let { fields } = this.updater.get();
        fields.forEach(field => {
            if (field.value == orderField) {
                Magix.mix(field, {
                    filterMin,
                    filterMax,
                })
            }
        });
        this.updater.set({
            fields,
        });
        this.filter();
    },
    'deleteFilter<delete>'(event) {
        let { value } = event.item;
        let { fields } = this.updater.get();
        fields.forEach(field => {
            if (field.value == value) {
                delete field.filterMin;
                delete field.filterMax;
            }
        });
        this.updater.set({
            fields,
        });
        this.filter();
    },
    filter() {
        let { fields, list } = this.updater.get();
        let filters = [];

        let validNum = (v) => {
            return v !== undefined && v !== null && v !== '';
        };

        fields.forEach(field => {
            if (validNum(field.filterMax) && validNum(field.filterMin)) {
                // 上下限
                filters.push({
                    ...field,
                    title: field.text,
                    text: `${field.filterMin}~${field.filterMax}`,
                });
            } else if (validNum(field.filterMax) && !validNum(field.filterMin)) {
                // 有上限
                filters.push({
                    ...field,
                    title: field.text,
                    text: `<= ${field.filterMax}`,
                });
            } else if (!validNum(field.filterMax) && validNum(field.filterMin)) {
                // 有下限
                filters.push({
                    ...field,
                    title: field.text,
                    text: `>= ${field.filterMin}`,
                });
            }
        });
        list.forEach(item => {
            let hide = false;
            filters.forEach(field => {
                let value = item[field.value];
                hide = hide || (value === undefined) || (value === null)
                    || (validNum(field.filterMin) && (+value < +field.filterMin))
                    || (validNum(field.filterMax) && (+value > +field.filterMax));
            });
            Magix.mix(item, {
                hide,
            })
        })
        this.updater.digest({
            list,
            filters,
        })
    }
});