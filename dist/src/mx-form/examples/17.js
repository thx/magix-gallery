define("mx-form/examples/17",["magix","examples/example","mx-form/index","mx-form/validator","$","moment","mx-dropdown/index","mx-dropdown/multiple","mx-calendar/datepicker","mx-calendar/rangepicker","mx-cascade/index","mx-switch/index","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-dropdown/index"),e("mx-dropdown/multiple"),e("mx-calendar/datepicker"),e("mx-calendar/rangepicker"),e("mx-cascade/index"),e("mx-switch/index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example"),s=e("mx-form/index"),r=e("mx-form/validator"),i=(e("$"),e("moment"));a.exports=t.extend({tmpl:function(e,l,a,t,s,r,i,n){if(a||(a=e),!s){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(d,c)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(o,x)}}if(!n){var _=/[\\'"]/g;n=function(e){return s(e).replace(_,"\\$&")}}i||(i=function(e,l,a,t){for(t=e[g];--t;)if(e[a=g+t]===l)return a;return e[a=g+e[g]++]=l,a});var g="",u="",f=e.checkboxes,p=e.selected,b=e.radioes,y=e.areas,z=e.tip,h=e.viewId,w=e.text1,V=e.text2;u+='<div mxv mxa="_zs_galleryb/:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb/:a" class="_zs_galleryj clearfix"><form mxv mxa="_zs_galleryb/:b" class="form mb20 fl mr20"><div mxv mxa="_zs_galleryb/:c" class="form-item"><div mxs="_zs_galleryb/:_" class="form-label">checkbox</div><div mxv mxa="_zs_galleryb/:d" class="form-content">';for(var k=0,q=f.length;k<q;k++){var A=f[k];u+='<label mxv mxa="_zs_galleryb/:e" class="mr30"><input mxe="'+l+'_0" mxc="[{p:\'selected.checkboxes\',f:{refresh:true,required:[true,\'必选\']}}]" type="checkbox" class="checkbox" name="cb" value="'+t(A)+'"/>'+t(A)+"</label>"}u+='</div></div><div mxv mxa="_zs_galleryb/:f" class="form-item"><div mxs="_zs_galleryb/:a" class="form-label">radio</div><div mxv mxa="_zs_galleryb/:g" class="form-content">';for(var Y=0,M=b.length;Y<M;Y++){var C=b[Y];u+='<label mxv mxa="_zs_galleryb/:h" class="mr30"><input mxe="'+l+'_1" mxc="[{p:\'selected.radio\',f:{refresh:true}}]" type="radio" class="radio" name="magix" value="'+t(C)+'"/>'+t(C)+"</label>"}return u+='</div></div><div mxv mxa="_zs_galleryb/:i" class="form-item"><div mxs="_zs_galleryb/:b" class="form-label">下拉框单选</div><div mxv mxa="_zs_galleryb/:j" class="form-content"><div mxv="selected" mxe="'+l+"_2\" mxc=\"[{p:'selected.single',f:{refresh:true,required:[true,'必选']},a:'selected'}]\" class=\"w220\" mx-view=\"mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected="+i(a,p.single)+"&list="+i(a,[1,2,3])+'"></div></div></div><div mxv mxa="_zs_galleryb/:k" class="form-item"><div mxs="_zs_galleryb/:c" class="form-label">多选逗号分隔</div><div mxv mxa="_zs_galleryb/:l" class="form-content"><div mxv="selected" mxe="'+l+"_3\" mxc=\"[{p:'selected.multiComma',f:{refresh:true,required:[true,'必选']},a:'selected'}]\" class=\"w220 mr20\" mx-view=\"mx-dropdown/multiple?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected="+i(a,p.multiComma)+"&list="+i(a,[1,2,3])+'"></div></div></div><div mxv mxa="_zs_galleryb/:m" class="form-item"><div mxs="_zs_galleryb/:d" class="form-label">多选数组</div><div mxv mxa="_zs_galleryb/:n" class="form-content"><div mxv="selected" mxe="'+l+"_4\" mxc=\"[{p:'selected.multiArr',f:{refresh:true,required:[true,'必选']},a:'selected'}]\" class=\"w220\" mx-view=\"mx-dropdown/multiple?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected="+i(a,p.multiArr)+"&list="+i(a,[1,2,3])+'"></div></div></div><div mxv mxa="_zs_galleryb/:o" class="form-item"><div mxs="_zs_galleryb/:e" class="form-label">输入框</div><div mxv mxa="_zs_galleryb/:p" class="form-content"><input mxe="'+l+'_5" mxc="[{p:\'selected.str\',f:{refresh:true,required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}}]" class="input w220" placeholder="正则：汉字/字母/数字/下划线" value="'+t(p.str)+'"/></div></div><div mxv mxa="_zs_galleryb/:q" class="form-item"><div mxs="_zs_galleryb/:f" class="form-label">选择单个时间</div><div mxv mxa="_zs_galleryb/:r" class="form-content"><div mxv="selected" mxe="'+l+'_6" mxc="[{p:\'selected.date\',f:{refresh:true},a:\'selected\'}]" class="w220" mx-view="mx-calendar/datepicker?selected='+i(a,p.date)+'"></div></div></div><div mxv mxa="_zs_galleryb/:s" class="form-item"><div mxs="_zs_galleryb/:g" class="form-label">选择时间段</div><div mxv mxa="_zs_galleryb/:t" class="form-content"><div mxv="selected" mxe="'+l+"_7\" mxc=\"[{p:'selected.start',f:{refresh:true},a:'start'},{p:'selected.end',f:{refresh:true},a:'end'}]\" class=\"w220\" mx-view=\"mx-calendar/rangepicker?vsenable=false&textAlign=left&vs=false&start="+i(a,p.start)+"&end="+i(a,p.end)+'"></div></div></div><div mxv mxa="_zs_galleryb/:u" class="form-item"><div mxs="_zs_galleryb/:h" class="form-label">地区</div><div mxv mxa="_zs_galleryb/:v" class="form-content"><div mxv="areas,selected" mxe="'+l+'_8" mxc="[{p:\'selected.area\',f:{refresh:true},a:\'selected\'}]" class="w220" mx-view="mx-cascade/index?list='+i(a,y)+"&selected="+i(a,p.area)+'"></div></div></div><div mxv mxa="_zs_galleryb/:w" class="form-item"><div mxs="_zs_galleryb/:i" class="form-label">radio + 输入框</div><div mxv mxa="_zs_galleryb/:x" class="form-content"><div mxv mxa="_zs_galleryb/:y" class="w320 clearfix"><label mxv mxa="_zs_galleryb/:z" class="mr30 fl"><input mxs="_zs_galleryb/:j" mxe="'+l+'_9" mxc="[{p:\'selected.type\',f:{refresh:true}}]" type="radio" class="radio" name="type" value="def"/> 默认情况</label><label mxv mxa="_zs_galleryb/:A" class="mr10 fl"><input mxs="_zs_galleryb/:k" mxe="'+l+'_a" mxc="[{p:\'selected.type\',f:{refresh:true}}]" type="radio" class="radio" name="type" value="custom"/> 自定义</label>',"custom"==p.type&&(u+='<input mxe="'+l+'_b" mxc="[{p:\'selected.int\',f:{refresh:true,required:true,int:true}}]" class="input fl w100" placeholder="整数" value="'+t(p.int)+'"/>'),u+='</div></div></div><div mxa="_zs_galleryb/:B" class="form-item"><div mxs="_zs_galleryb/:l" class="form-label">开关</div><div mxa="_zs_galleryb/:C" class="form-content"><span mxe="'+l+"_c_"+t("switch")+'" mxc="[{p:\'selected.'+t("switch")+'\',f:{refresh:true},a:\'state\'}]" class="mr20 mt5" mx-view="mx-switch/index?state='+i(a,p.switch)+'"></span></div></div><div mxa="_zs_galleryb/:D" class="form-item"><a mxs="_zs_galleryb/:m" href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+l+'confirm()">确定</a><a mxs="_zs_galleryb/:n" href="javascript:;" class="btn w80">取消</a>',z&&(u+='<span mxa="_zs_galleryb/:E" class="ml10">'+s(z)+"</span>"),u+='</div></form><div mxa="_zs_galleryb/:F" class="fl form form-4"><div mxa="_zs_galleryb/:G" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:H" class="form-content">['+t(p.checkboxes)+']</div></div><div mxa="_zs_galleryb/:I" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:J" class="form-content">'+t(p.radio)+'</div></div><div mxa="_zs_galleryb/:K" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:L" class="form-content">'+t(p.single)+'</div></div><div mxa="_zs_galleryb/:M" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:N" class="form-content">'+t(p.multiComma)+'</div></div><div mxa="_zs_galleryb/:O" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:P" class="form-content">['+t(p.multiArr)+']</div></div><div mxa="_zs_galleryb/:Q" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:R" class="form-content">'+t(p.str)+'</div></div><div mxa="_zs_galleryb/:S" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:T" class="form-content">'+t(p.date)+'</div></div><div mxa="_zs_galleryb/:U" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:V" class="form-content">'+t(p.start)+'<span mxs="_zs_galleryb/:p" class="color-9 ml5 mr5">至</span>'+t(p.end)+'</div></div><div mxa="_zs_galleryb/:W" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:X" class="form-content">'+t(p.area)+'</div></div><div mxa="_zs_galleryb/:Y" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:Z" class="form-content"><span mxa="_zs_galleryb/:0" class="mr5">类型（'+t(p.type)+"）</span><span>输入框（"+t(p.int)+'）</span></div></div><div mxa="_zs_galleryb/:1" class="form-item"><div mxs="_zs_galleryb/:o" class="form-label">当前值</div><div mxa="_zs_galleryb/:2" class="form-content">'+t(p.switch)+'</div></div></div></div><div mxa="_zs_galleryb/:3" class="clearfix"><div mxa="_zs_galleryb/:4" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryb/:q" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(h)+'_text_1"><span mxa="_zs_galleryb/:5" class="_zs_galleryn">'+s(w)+'</span><i mxs="_zs_galleryb/:r" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(h)+'_text_1">\n&lt;form class="form"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;checkbox&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &#123;&#123;each checkboxes as c&#125;&#125;\n            &lt;label class="mr30"&gt;\n                &lt;input type="checkbox" class="checkbox" \n                    name="cb" \n                    value="&#123;&#123;=c&#125;&#125;" \n                    &#123;&#123;:selected.checkboxes&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n                &#123;&#123;=c&#125;&#125;\n            &lt;/label&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;radio&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &#123;&#123;each radioes as r&#125;&#125;\n            &lt;label class="mr30"&gt;\n                &lt;input type="radio" class="radio" \n                    name="magix" \n                    value="&#123;&#123;=r&#125;&#125;" \n                    &#123;&#123;:selected.radio&#125;&#125; /&gt;\n                &#123;&#123;=r&#125;&#125;\n            &lt;/label&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;下拉框单选&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown class="w220"\n                empty-text="请选择"\n                selected="&#123;&#123;:selected.single&#123;required:[true,\'必选\']&#125;&#125;&#125;"\n                list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;多选逗号分隔&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown.multiple class="w220 mr20"\n                empty-text="请选择"\n                selected="&#123;&#123;:selected.multiComma&#123;required:[true,\'必选\']&#125;&#125;&#125;"\n                list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;多选数组&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown.multiple class="w220"\n                empty-text="请选择"\n                selected="&#123;&#123;:selected.multiArr&#123;required:[true,\'必选\']&#125;&#125;&#125;"\n                list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w220" placeholder="正则：汉字/字母/数字/下划线"         \n                value="&#123;&#123;:selected.str&#123;required:true,pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'&#125;&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;选择单个时间&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.datepicker class="w220" \n                selected="&#123;&#123;:selected.date&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;选择时间段&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.rangepicker class="w220"\n                vsenable="true"\n                vs="&#123;&#123;:selected.vs&#125;&#125;"\n                start="&#123;&#123;:selected.start&#125;&#125;"\n                end="&#123;&#123;:selected.end&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;地区&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-cascade class="w220"\n                list="&#123;&#123;@areas&#125;&#125;"\n                selected="&#123;&#123;:selected.area&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-cascade&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;radio + 输入框&lt;/div&gt;\n        &lt;div class="form-content clearfix"&gt;\n            &lt;label class="mr30 fl"&gt;\n                &lt;input type="radio" class="radio" \n                    name="type" \n                    value="def" \n                    &#123;&#123;:selected.type&#123;refresh:true&#125;&#125;&#125; /&gt;\n                默认情况\n            &lt;/label&gt;\n            &lt;label class="mr10 fl"&gt;\n                &lt;input type="radio" class="radio" \n                    name="type" \n                    value="custom" \n                    &#123;&#123;:selected.type&#123;refresh:true&#125;&#125;&#125; /&gt;\n                自定义\n            &lt;/label&gt;\n            &#123;&#123;if (selected.type == \'custom\')&#125;&#125;\n            &lt;input class="input fl" placeholder="整数" \n                value="&#123;&#123;:selected.int&#123;required:true,int:true&#125;&#125;&#125;"/&gt;\n            &#123;&#123;/if&#125;&#125;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;</pre></div><div mxa="_zs_galleryb/:6" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryb/:s" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(h)+'_text_2"><span mxa="_zs_galleryb/:7" class="_zs_galleryn">'+s(V)+'</span><i mxs="_zs_galleryb/:r" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(h)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\nlet Moment = require('moment');\nlet Formater = 'YYYY-MM-DD';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],\n            radioes: ['radio1', 'radio2', 'radio3'],\n            areas: [&#123;\n                value: 11,\n                pValue: '',\n                text: '上海'\n            &#125;, &#123;\n                value: 12,\n                pValue: '',\n                text: '江苏'\n            &#125;, &#123;\n                value: 13,\n                pValue: '',\n                text: '浙江'\n            &#125;, &#123;\n                value: 14,\n                pValue: '',\n                text: '北京'\n            &#125;, &#123;\n                value: 15,\n                pValue: '',\n                text: '四川'\n            &#125;, &#123;\n                value: 121,\n                pValue: 12,\n                text: '南京'\n            &#125;, &#123;\n                value: 122,\n                pValue: 12,\n                text: '苏州'\n            &#125;, &#123;\n                value: 123,\n                pValue: 12,\n                text: '南通'\n            &#125;, &#123;\n                value: 131,\n                pValue: 13,\n                text: '杭州'\n            &#125;, &#123;\n                value: 132,\n                pValue: 13,\n                text: '宁波'\n            &#125;, &#123;\n                value: 133,\n                pValue: 13,\n                text: '温州'\n            &#125;, &#123;\n                value: 134,\n                pValue: 13,\n                text: '嘉兴'\n            &#125;, &#123;\n                value: 135,\n                pValue: 13,\n                text: '舟山'\n            &#125;, &#123;\n                value: 136,\n                pValue: 13,\n                text: '台州'\n            &#125;, &#123;\n                value: 137,\n                pValue: 13,\n                text: '湖州'\n            &#125;, &#123;\n                value: 1311,\n                pValue: 131,\n                text: '余杭区'\n            &#125;, &#123;\n                value: 1312,\n                pValue: 131,\n                text: '西湖区'\n            &#125;, &#123;\n                value: 1313,\n                pValue: 131,\n                text: '上城区'\n            &#125;, &#123;\n                value: 1314,\n                pValue: 131,\n                text: '下城区'\n            &#125;, &#123;\n                value: 1315,\n                pValue: 131,\n                text: '江干区'\n            &#125;, &#123;\n                value: 1316,\n                pValue: 131,\n                text: '拱墅区'\n            &#125;],\n            selected: &#123;\n                area: 1312,\n                checkboxes: ['checkbox1'],\n                radio: 'radio2',\n                single: '',  //下拉框单选\n                multiComma: '', //下拉框多选逗号分隔\n                multiArr: [], //下拉框多选数组\n                str: '', //汉字/字母/数字/下划线\n                date: Moment().format(Formater), //单个日期\n                vs: true,\n                start: Moment().subtract(1, 'days').format(Formater), //时间段开始时间\n                end: Moment().add(1, 'days').format(Formater), //时间段结束时间\n                type: 'custom', //默认还是自定义（自定义带输入框）\n                int: 10\n            &#125;\n        &#125;);\n    &#125;,\n    'confirm&lt;click&gt;'(e)&#123;\n        let that = this;\n        let valid = that.isValid();\n\n        if(valid)&#123;\n            // 校验通过\n            // 双向绑定的数据，继续执行后续操作\n            let selected = that.updater.get('selected');\n            \n        &#125;else&#123;\n            // 校验失败\n            \n        &#125;\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[s,r],render:function(){this.updater.digest({viewId:this.id,checkboxes:["checkbox1","checkbox2","checkbox3"],radioes:["radio1","radio2","radio3"],areas:[{value:11,pValue:"",text:"上海"},{value:12,pValue:"",text:"江苏"},{value:13,pValue:"",text:"浙江"},{value:14,pValue:"",text:"北京"},{value:15,pValue:"",text:"四川"},{value:121,pValue:12,text:"南京"},{value:122,pValue:12,text:"苏州"},{value:123,pValue:12,text:"南通"},{value:131,pValue:13,text:"杭州"},{value:132,pValue:13,text:"宁波"},{value:133,pValue:13,text:"温州"},{value:134,pValue:13,text:"嘉兴"},{value:135,pValue:13,text:"舟山"},{value:136,pValue:13,text:"台州"},{value:137,pValue:13,text:"湖州"},{value:1311,pValue:131,text:"余杭区"},{value:1312,pValue:131,text:"西湖区"},{value:1313,pValue:131,text:"上城区"},{value:1314,pValue:131,text:"下城区"},{value:1315,pValue:131,text:"江干区"},{value:1316,pValue:131,text:"拱墅区"}],selected:{area:1312,checkboxes:["checkbox1"],radio:"radio2",single:"",multiComma:"",multiArr:[],str:"",date:i().format("YYYY-MM-DD"),start:i().subtract(1,"days").format("YYYY-MM-DD"),end:i().add(1,"days").format("YYYY-MM-DD"),type:"custom",int:10,switch:!0}})},"confirm<click>":function(e){if(this.isValid()){this.updater.get("selected");this.updater.digest({tip:'<span class="color-green"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验失败</span>'})}else this.updater.digest({tip:'<span class="color-red"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验通过</span>'})}})});