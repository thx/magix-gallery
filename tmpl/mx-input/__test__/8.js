let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Form, Validator],
    render() {
        let viewId = this.id;

        let types = [{
            text: '小尺寸',
            value: 'small',
            minWidth: this.getCssVar('--input-small-min-width'),
        }, {
            text: '常规尺寸(默认)',
            value: 'normal',
            minWidth: this.getCssVar('--input-min-width'),
        }, {
            text: '大尺寸',
            value: 'large',
            minWidth: this.getCssVar('--input-large-min-width'),
        }];

        this.updater.digest({
            viewId,
            types,
            searchList: [{
                text: '计划',
                value: 'campaign'
            }, {
                text: '单元',
                value: 'adgroup'
            }],
            selected: {
                small: {
                    searchValue: 'adgroup',
                },
                normal: {
                    searchValue: 'campaign',
                },
                large: {
                    searchValue: 'campaign',
                }
            }
        });

        types.forEach(type => {
            let n1 = document.getElementById(`${viewId}_common_${type.value}`);
            let n2 = document.getElementById(`${viewId}_search_${type.value}`);
            let n3 = document.getElementById(`${viewId}_multi_${type.value}`);
            Magix.mix(type, {
                searchMinWidth: n2.clientWidth + 'px',
                multiMinWidth: n3.clientWidth + 'px',
            })
        });
        this.updater.digest({
            types,
        })
    }
});