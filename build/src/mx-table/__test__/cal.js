define("mx-table/__test__/cal",["magix","__test__/example","$"],(l,t,a)=>{var n=l("magix"),r=l("__test__/example"),s=l("$");n.applyStyle("_zs_galleryaz","._zs_galleryjP{width:600px;border:1px solid var(--color-border)}._zs_galleryjP tbody td{padding:8px!important;background-color:transparent!important;border-right:1px solid var(--color-border)}._zs_galleryjQ{display:inline-block;margin:0 4px;padding:0 4px;height:20px;line-height:16px;background-color:var(--color-bg);border:1px solid var(--color-border);text-align:center;border-radius:2px;overflow:hidden;vertical-align:middle}._zs_galleryjR{width:30px}"),a.exports=r.extend({tmpl:function(l,t,a,n,r,s,e,d){if(a||(a=l),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,c=function(l){return"&"+o[l]+";"};r=function(l){return""+(null==l?"":l)},n=function(l){return r(l).replace(p,c)}}if(!s){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return i[l]},_=/[!')(*]/g;s=function(l){return encodeURIComponent(r(l)).replace(_,x)}}if(!d){var g=/[\\'"]/g;d=function(l){return r(l).replace(g,"\\$&")}}var v="",b=l.viewId,m=l.rows;v+='<div mxa="_zs_galleryee:_" class="mb20"><div mxs="_zs_galleryee:_" class="mb10">1. 原始表格：当前4*4的表格，x坐标的取值范围【0-3】，y的取值范围【0-3】</div><div mxa="_zs_galleryee:a" class="pl15"><table class="table _zs_galleryjP" id="'+n(b)+'_table"><tbody mxs="_zs_galleryee:a"><tr><td rowspan="2">A</td><td>B</td><td rowspan="2">C</td><td>D</td></tr><tr><td rowspan="3">E</td><td>F</td></tr><tr><td>G</td><td>H</td><td>I</td></tr><tr><td>J</td><td colspan="2">L</td></tr></tbody></table></div></div><div mxs="_zs_galleryee:b" class="mb20"><div class="mb10">2. 根据属性<span class="_zs_galleryjQ">colspan</span>得到单元格相对于当前行的相对位置<span class="_zs_galleryjQ">x</span>，后一行的位置等于<span class="_zs_galleryjQ">prevRow.x + prevRow.colspan</span>，第一次计算得到以下结果：</div><div class="pl15"><table class="table _zs_galleryjP mb10"><tbody><tr><td>(0,0)<span class="color-brand ml10">A</span></td><td>(1,0)<span class="color-brand ml10">B</span></td><td>(2,0)<span class="color-brand ml10">C</span></td><td>(3,0)<span class="color-brand ml10">D</span></td></tr><tr><td>(0,1)<span class="color-brand ml10">E</span></td><td>(1,1)<span class="color-brand ml10">F</span></td><td>(2,1)</td><td>(3,1)</td></tr><tr><td>(0,2)<span class="color-brand ml10">G</span></td><td>(1,2)<span class="color-brand ml10">H</span></td><td>(2,2)<span class="color-brand ml10">I</span></td><td>(3,2)</td></tr><tr><td>(0,3)<span class="color-brand ml10">J</span></td><td>(1,3)<span class="color-brand ml10">L</span></td><td>(2,3)</td><td>(3,3)</td></tr></tbody></table><pre class="tip-content">\n// 二维数组\nlet rows = [];\n\n// 计算同一行的x位置\nfor (let i = 0; i &lt; trs.length; i++) &#123;\n    let tds = $(trs[i]).find(\'td\');\n\n    let gap = 0;\n    let row = [];\n    for (let j = 0; j &lt; tds.length; j++) &#123;\n        let td = tds.eq(j);\n        let colspan = +td.attr(\'colspan\') || 1,\n            rowspan = +td.attr(\'rowspan\') || 1;\n        row.push(&#123;\n            x: gap,\n            y: i,\n            colspan,\n            rowspan,\n            left: td.offset().left,  //用于判断位置\n            content: td.html()\n        &#125;)\n        gap = gap + colspan;\n    &#125;\n\n    rows.push(row);\n&#125;\n        </pre></div></div><div mxs="_zs_galleryee:c" class="mb20"><div class="mb10">3. 可以从上表看出，由于<span class="_zs_galleryjQ">rowspan</span>的存在，部分单元格在计算位置时存在偏差，分析可得，当前单元格存在rowspan时，以下两种情况的单元格需要进行移动：</div><div class="pl15"><div>1. 当前单元格后面的单元格</div><div class="mb10">2. 两行行差小于当前单元格的rowspan</div><pre class="tip-content">\n//计算 rowspan对后边行的影响\nfor (let rowIndex = 0; rowIndex &lt; rows.length - 1; rowIndex++) &#123;\n    let row = rows[rowIndex];\n    for (let cellIndex = 0; cellIndex &lt; row.length; cellIndex++) &#123;\n        let curCell = row[cellIndex];\n        if (curCell.rowspan &gt; 1) &#123;\n            // 后面行，left&lt;当前cell的位置进行移动\n            for (let nextRowIndex = rowIndex + 1; (nextRowIndex &lt; rows.length) && (curCell.rowspan &gt; nextRowIndex - rowIndex); nextRowIndex++) &#123;\n                let nextRow = rows[nextRowIndex];\n                for (let nextCellIndex = 0; nextCellIndex &lt; nextRow.length; nextCellIndex++) &#123;\n                    let nextCell = nextRow[nextCellIndex];\n                    if (nextCell.left &gt; curCell.left) &#123;\n                        nextCell.x += curCell.colspan;\n                    &#125;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n&#125;    \n        </pre></div></div><div><div mxs="_zs_galleryee:d" class="mb10">4. 最终结果</div><div mxa="_zs_galleryee:b" class="pl15 clearfix"><table mxs="_zs_galleryee:e" class="table _zs_galleryjP fl"><tbody><tr><td>(0,0)<span class="color-brand ml10">A</span></td><td>(1,0)<span class="color-brand ml10">B</span></td><td>(2,0)<span class="color-brand ml10">C</span></td><td>(3,0)<span class="color-brand ml10">D</span></td></tr><tr><td>(0,1)</td><td>(1,1)<span class="color-brand ml10">E</span></td><td>(2,1)</td><td>(3,1)<span class="color-brand ml10">F</span></td></tr><tr><td>(0,2)<span class="color-brand ml10">G</span></td><td>(1,2)</td><td>(2,2)<span class="color-brand ml10">H</span></td><td>(3,2)<span class="color-brand ml10">I</span></td></tr><tr><td>(0,3)<span class="color-brand ml10">J</span></td><td>(1,3)</td><td>(2,3)<span class="color-brand ml10">L</span></td><td>(3,3)</td></tr></tbody></table><div mxa="_zs_galleryee:c" class="fl ml20">';for(var f=0,w=m.length;f<w;f++){var y=m[f];v+=" ";for(var h=0,u=y.length;h<u;h++){var z=y[h];v+='<div mxa="_zs_galleryee:d" class="clearfix"><div mxa="_zs_galleryee:e" class="fl _zs_galleryjR">'+n(z.content)+'：</div><div mxa="_zs_galleryee:f" class="fl">&#123;x: '+n(z.x)+", y: "+n(z.y)+"&#125;</div></div>"}v+=" "}return v+="</div></div></div>"},render:function(){var l=this.id;this.updater.digest({viewId:l,rows:[]});for(var t=s("#"+l+"_table").find("tbody>tr"),a=[],n=0;n<t.length;n++){for(var r=s(t[n]).find("td"),e=0,d=[],o=0;o<r.length;o++){var p=r.eq(o),c=+p.attr("colspan")||1,i=+p.attr("rowspan")||1;d.push({x:e,y:n,colspan:c,rowspan:i,left:p.offset().left,content:p.html()}),e+=c}a.push(d)}for(var x=0;x<a.length-1;x++){d=a[x];for(var _=0;_<d.length;_++){var g=d[_];if(g.rowspan>1)for(var v=x+1;v<a.length&&g.rowspan>v-x;v++)for(var b=a[v],m=0;m<b.length;m++){var f=b[m];f.left>g.left&&(f.x+=g.colspan)}}}this.updater.digest({rows:a})}})});