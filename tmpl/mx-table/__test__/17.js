let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@17.less');

module.exports = Base.extend({
    tmpl: '@17.html',
    render() {
        let that = this;
        let total = 20,
            page = 1;
        that.updater.digest({
            page,
            total,
            interval: 50
        });
    },
    'changeFilter<change>'(e) {
        this.change({
            page: 1
        })
    },
    'changePager<change>'(e) {
        let page = +e.page;
        this.change({
            page
        })
    },
    change(params) {
        this.updater.digest(params);
        let filters = $('#' + this.id + '_filters');
        $(window).scrollTop(filters.offset().top);
    },
    '$win<scroll>'(e) {
        let that = this;
        let filtersInner = $('#' + that.id + '_filters_inner');
        let table = $('#' + that.id + '_table');
        let scrollTop = $(window).scrollTop();
        let tableOffset = table.offset();
        let interval = that.updater.get('interval');
        let tableHeaderHeight = table.find('thead').outerHeight();
        let min = tableOffset.top - interval;
        let max = min + table.height() - tableHeaderHeight;
        if (scrollTop >= min && scrollTop <= max) {
            filtersInner.addClass('@17.less:filters-fixed');
        } else {
            filtersInner.removeClass('@17.less:filters-fixed');
        }
    }
});