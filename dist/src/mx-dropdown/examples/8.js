define("mx-dropdown/examples/8",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,s)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");s.exports=t.extend({tmpl:function(e,l,s,t,i,n,a,r){if(s||(s=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(c,m)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(_,v)}}if(!r){var o=/[\\'"]/g;r=function(e){return i(e).replace(o,"\\$&")}}a||(a=function(e,l,s,t){for(t=e[p];--t;)if(e[s=p+t]===l)return s;return e[s=p+e[p]++]=l,s});var p="",g="",u=e.list,y=e.selectedArr,f=e.selectedStr,z=e.viewId,b=e.text1,h=e.text2;return g+='<div mxv mxa="_zs_gallerybm:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerybm:a" class="_zs_galleryj"><div mxs="_zs_gallerybm:_" class="mb20 clearfix lh22"><div class="fl color-9">说明：</div><div class="fl"><div>选项支持html片段</div><div>选中项传入支持传入数组或者逗号分隔</div><div>以下两个下拉框选中项保持一致</div></div></div><div mxv mxa="_zs_gallerybm:b" class="mb20"><div mxv="list,selectedArr" class="w200" mx-change="'+l+'select()" mx-view="mx-dropdown/multiple?list='+a(s,u)+"&selected="+a(s,y)+'"></div></div><div mxv mxa="_zs_gallerybm:c" class="mb20"><div mxv="list,selectedStr" class="w200" mx-change="'+l+'select()" mx-view="mx-dropdown/multiple?list='+a(s,u)+"&selected="+a(s,f)+'"></div></div><div><span mxs="_zs_gallerybm:a" class="color-9">当前选中值：</span><span>'+t(y)+'</span></div></div><div mxa="_zs_gallerybm:d" class="_zs_galleryk"><div mxs="_zs_gallerybm:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(z)+'_text_1"><span mxa="_zs_gallerybm:e" class="_zs_galleryn">'+i(b)+'</span><i mxs="_zs_gallerybm:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(z)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedArr&#125;&#125;"\n    mx-change="select()"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedStr&#125;&#125;"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_gallerybm:f" class="_zs_galleryk"><div mxs="_zs_gallerybm:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(z)+'_text_2"><span mxa="_zs_gallerybm:g" class="_zs_galleryn">'+i(h)+'</span><i mxs="_zs_gallerybm:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 6; index++) &#123;\n            list.push(&#123;\n                text: (index == 0 ? '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe670;&lt;/i&gt;' : '') + '多选' + (index + 1),\n                value: index + 1\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            list,\n            selectedArr: [1, 2, 3],\n            selectedStr: '1,2,3'\n        &#125;);\n    &#125;,\n    \n    'select&lt;change&gt;'(e) &#123;\n        // e.values [array] 当前选中值\n        // e.texts [array] 当前选中文案\n        let values = e.values;\n        this.updater.digest(&#123;\n            selectedArr: values,\n            selectedStr: values.join(',')\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){for(var e=[],l=0;l<6;l++)e.push({text:(0==l?'<i class="mc-iconfont">&#xe670;</i>':"")+"多选"+(l+1),value:l+1});this.updater.digest({list:e,selectedArr:[1,2,3],selectedStr:"1,2,3"})},"select<change>":function(e){var l=e.values;this.updater.digest({selectedArr:l,selectedStr:l.join(",")})}})});