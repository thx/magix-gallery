let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sort.html',
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
        
        this.updater.digest({
            viewId: this.id,
            options
        });
    }
});