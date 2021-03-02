let Magix = require('magix');
let Sort = require('@../../mx-table/sort');

module.exports = Magix.View.extend({
    tmpl: '@sort.html',
    mixins: [Sort],
    render() {
        let options = [{
            key: `<pre>&lt;mx-stickytable.sort
    value="field" 
    order="asc"
    order-field="orderField"
    order-by="orderBy"&gt;
&lt;/mx-stickytable.sort&gt;</pre>`,
            desc: 'mx-stickytable.sort标识th内可排序的指标<br/>value: 排序字段value值<br/>order：asc或者desc，默认desc，不排序时传空即可<br/>order-field：反映到地址栏的参数，默认值为orderField，[order-field]=value<br/>order-by：反映到地址栏的参数，默认为orderBy，[order-by]=order'
        }];


        let groups = [{
            name: '组1',
            fields: ['field1', 'field2']
        }, {
            name: '组2',
            fields: ['field3', 'field4', 'field5', 'field6']
        }, {
            name: '组3',
            fields: ['field7', 'field8', 'field9']
        }]
        let len = 0;
        groups.forEach(group => {
            len += group.fields.length;
        })

        this.updater.digest({
            viewId: this.id,
            options,
            groups,
            len
        });
    }
});