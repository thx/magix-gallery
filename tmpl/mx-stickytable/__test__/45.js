/**
 * sort
 */
 let Magix = require('magix');
 let Base = require('__test__/example');
 let Sort = require('@../../mx-stickytable/sort');
 const VS = {
     1: ['a', 'b'],
     2: ['c', 'd'],
     3: ['e', 'f', 'g']
 }
 
 module.exports = Base.extend({
     tmpl: '@45.html',
     mixins: [Sort],
     init(e) {
         Base.prototype.init.call(this, e);
 
         this.updater.set({
             formater: (v) => {
                 if (v === undefined || v === null) {
                     return '-';
                 } else {
                     return v;
                 }
             }
         });
     },
 
     render() {
         this['@{sort}']();
     },
 
     '@{sort}<sort>'(event) {
         this['@{sort}'](event.orderField, event.orderBy);
     },
 
     async '@{sort}'(orderField = '', orderBy = '') {
         let [fields, list] = await Promise.all([
             this.getFields(orderField, orderBy),
             this.getList(orderField, orderBy)
         ])
         this.updater.digest({
             fields,
             list,
         });
     },
 
     getFields(orderField, orderBy) {
         return new Promise(resolve => {
             let fields = [];
             for (let key in VS) {
                 VS[key].forEach(v => {
                     fields.push({
                         value: v,
                         text: `指标${v}`,
                         order: (v == orderField) ? orderBy : ''
                     })
                 });
             }
 
             resolve(fields);
         })
     },
 
     getList(orderField, orderBy) {
         return new Promise(resolve => {
             let list = [];
             for (let i = 0; i < 10; i++) {
                 let item = {};
                 for (let k in VS) {
                     let items = VS[k];
                     if (k % 3 == 0) {
                         items.forEach((v, j) => {
                             if (i % 3 == 1) {
                                 item[v] = (j + 10) * 1000 - i;
                             } else if (i % 3 == 2) {
                                 item[v] = i + j * 10;
                             } else {
                                 item[v] = undefined;
                             }
                         })
                     } else if (k % 3 == 1) {
                         items.forEach((v, j) => {
                             if (j % 2 == 1) {
                                 item[v] = (j + 10) * 1000 - i;
                             } else {
                                 item[v] = i + j * 10;
                             }
                         })
                     } else {
                         items.forEach((v, j) => {
                             if (j % 2 == 1) {
                                 item[v] = ['左莫', '逢春', '释剑', '浩添', '奇贤', '梵墨', '虞佳', '宫卫', '崇志', '行列'][i];
                             } else {
                                 item[v] = ['test', 'afced', 'Abcde', 'bced', undefined, null, 'gbc', 'abced', 'mama', 'line'][i];;
                             }
                         })
                     }
                 }
                 list.push(item);
             };
 
             resolve(this.sort(list, orderField, orderBy));
         })
     },
 });