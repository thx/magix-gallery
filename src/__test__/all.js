/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('__test__/all',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__scoped_style_","@charset \"UTF-8\";\n/**\n* @file:      Neat.css\n* @author:    一丝\n* @update:    2016年08月10日22:05:05\n* @copyright: 基于 normalize.css | MIT License\n*/\n/**\n* Neat.css 解决的问题\n* 基于业务需要兼容的浏览器做到以下几点：\n* 1.解决BUG，特别是低级浏览器的常见BUG；\n* 2.统一效果，但不盲目追求重置为0；\n* 3.向后兼容；\n* 4.考虑响应式；\n* 5.考虑移动设备。\n*/\n/* ==========================================================================\n 有即是无，无即是有\n ========================================================================== */\nbody,\ndl,\ndd,\nul,\nol,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nfigure,\nhr,\nthead,\ntbody,\ntfoot,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\n/**\n* 非大面积文字排版网站通常不需要列表项，如果需要可单独设置\n*/\nul,\nol {\n  list-style-type: none;\n  list-style-image: none;\n}\n/* ==========================================================================\n 链接\n ========================================================================== */\n/**\n* 1. 去除链接默认的下划线，提高文字可读性\n* 2. 去掉 IE 10+ 点击链接时的灰色背景\n*/\na {\n  text-decoration: none;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n}\n/**\n* 去掉点击时的焦点框，同时保证使用键盘可以显示焦点框\n*/\na:active,\na:hover {\n  outline-width: 0;\n}\n/**\n* 统一 Chrome 和 Safari 的焦点框样式\n* Chrome 中 thin 关键字放大页面后焦点框不会放大 http://jsbin.com/ehakom/1\n* Firefox 中 box-shadow 会导致焦点框位置偏移，需用「outline-offset」修正\n*\n*/\na:focus {\n  outline: 1px dotted;\n}\n/* ==========================================================================\n 字体和基础排版\n ========================================================================== */\n/**\n* 1.防止 iOS 横屏字号放大，同时保证在PC上 zoom 功能正常\n*/\nhtml {\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  /* 1 */\n  font-size: 62.5%;\n  /* 10/16=62.5% */\n}\nbody {\n  font-size: 14px;\n  line-height: 1.8;\n}\n/**\n* 所有 font-family 小写，存在空格的字体名加单引号\n* @default-font: 'helvetica neue', tahoma, \\5B8B\\4F53, sans-serif;\n* @heading-font: 'helvetica neue', tahoma, 'hiragino sans gb', stheiti,\n  \\5FAE\\8F6F\\96C5\\9ED1, \\5B8B\\4F53, 'wenquanyi micro hei', sans-serif;\n* @code-font: monaco, menlo, consolas, monospace;\n*/\n/**\n* 中文优先使用冬青黑体简体(OS X)、微软雅黑(Windows)和文泉驿微米黑(Linux)\n* 西文使用 tahoma\n* 1. 防止元素中「font-family」不能继承\n* 2. 西文字体和 OS X 字体写在前面\n* 3. Opera 12.1 之前版本不支持中文字体的英文名称\n* 4. 微软雅黑「\\5FAE\\8F6F\\96C5\\9ED1」,中易宋体「\\5B8B\\4F53」\n*/\nbody,\nbutton,\ninput,\ntextarea {\n  font-family: 'helvetica neue', arial, 'hiragino sans gb', stheiti, 'wenquanyi micro hei', sans-serif;\n  -ms-text-autospace: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  /* 5 */\n  -ms-text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n      text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  /* 5 */\n}\n/**\n* 中文小于 12px 可读性很差\n* 1. 统一 IE 6-7 中字体大小\n* 2. 统一 Firefox 4+，Safari 5 和 Chrome 中「section」和「article」内的字体大小\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\n/**\n* 修正「abbr」元素在 Firefox 外其他浏览器没有下划线的问题\n* 添加问号光标，明确语义\n*/\n/*abbr,\nacronym {\n  border-bottom: 1px dotted;*/\n/* 1 */\n/*cursor: help;*/\n/* 2 */\n/*}*/\n/**\n* Firefox3+，Safari4/5 和 Chrome 中统一设置为粗体\n*/\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n* 修正 Safari5 和 Chrome 中没有样式的问题\n*/\n/*dfn {\n  font-style: italic;\n}*/\n/**\n* 修正 Firefox 和其他浏览器之间的差异\n*/\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n}\n/**\n* 网页标记，荧光笔\n* 修正 IE6-11 中没有样式的问题\n*/\n/*mark {\n  background-color: #d2e5ff;\n  color: #000;\n}*/\n/**\n* 统一代码的字体设置\n* 字体要能明确区分数字 0 和字母 o\n* Mac 优先使用 Monaco，Windows 优先使用 Consolas\n* XP自带 Courier New\n* Windows 7开始自带的 Consolas\n* Mac上自带的Monaco，Osaka-Mono\n*/\n/*code\nkbd,\npre,\nsamp {\n  font-family: monaco, menlo, consolas, 'courier new', courier, monospace;\n}\n*/\n/**\n* 增强所有浏览器中 pre 标签中文本的可读性\n* 1. IE 6-7 不支持 pre-wrap\n* 2. pre 标签应当包含滚溢出\n*/\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  /* 1 */\n  word-wrap: break-word;\n  overflow: auto;\n}\n/**\n* 行内引用\n* IE 6-7 不支持 quotes 属性\n* 现代浏览器去除 quotes 内容\n*/\nq {\n  quotes: none;\n}\n/**\n* Safari 4 不支持<q>标签\n*/\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n/**\n* 中文网页<small>元素字号小于 12px 不易阅读\n*/\nsmall {\n  font-size: 85.7%;\n  /* 12/14=0.8571428571 */\n}\n/**\n* 防止所有浏览器中的<sub>和<sup>影响行高\n* http://jsbin.com/usoyal/1/edit\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* ==========================================================================\n 表格\n ========================================================================== */\n/**\n* 合并单元格边框\n*/\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/**\n* 修复 IE 中 th 不能继承 text-align 的问题并统一左对齐\n* http://jsbin.com/evoxif/2/edit\n*/\nth {\n  text-align: left;\n}\n/**\n* 单元格添加边框\n*/\nth,\ntd {\n  border: 1px solid #ddd;\n  padding: 8px 10px;\n}\n/**\n* 表头底部边框\n*/\nth {\n  font-weight: inherit;\n  border-bottom-width: 2px;\n  border-bottom-color: #ccc;\n}\n/* ==========================================================================\n 嵌入元素\n ========================================================================== */\n/**\n* 1. 去除 IE6-9 和 Firefox 3 中 a 内部 img 元素默认的边框\n* 2. 修正 IE8 图片消失bug\n* 3. 防止 img 指定「height」时图片高度不能按照宽度等比缩放，导致图片变形\n    http://jsbin.com/aJoTUca/2\n* 4. 让图片支持响应式\n* 5. 去除现代浏览器图片底部的空隙\n* 6. 修复 IE7 图片缩放失真\n*/\nimg {\n  border-style: none;\n  /* 1 */\n  width: auto\\9;\n  /* 2 */\n  height: auto;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  vertical-align: top;\n  /* 5 */\n  -ms-interpolation-mode: bicubic;\n  /* 6 */\n}\n/**\n* 修复 IE9 中的「overflow」的怪异表现\n*/\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* ==========================================================================\n 表单\n ========================================================================== */\n/**\n* 定义一致的边框、外边距和内边距\n*/\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em;\n}\n/**\n* 1. 修正 IE 6-9 中颜色不能继承的问题\n* 2. 修正 Firefox3 中文字不换行的问题\n* 3. 修正 IE6-7 中怪异的对齐方式\n*/\nlegend {\n  border-style: none;\n  /* 1 */\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n/**\n* 1. 修正所有浏览器中字体不继承的问题\n* 2. 修正所有浏览器中字号不继承的问题\n* 3. 修正 Firefox 3+， Safari5 和 Chrome 中外边距不同的问题\n* 4. 改善在所有浏览器下的垂直对齐方式\n*/\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  vertical-align: middle;\n  /* 4 */\n  *vertical-align: middle;\n  /* 4 */\n}\n/**\n* 修正 IE7 随着字数增加边距不断增加的问题\n*/\ninput,\nbutton {\n  *overflow: visible;\n}\n/**\n* 统一各浏览器「text-transform」不会继承的问题\n* http://jsbin.com/iqecic/1/edit\n* http://tjvantoll.com/2012/07/10/default-browser-handling-of-the-css-text-transform-property/\n*/\nbutton {\n  text-transform: none;\n}\n/**\n* 1. 避免 Android 4.0.* 中的 WebKit bug ，该bug会破坏原生的\n 「audio」 和「video」的控制器\n* 2. 更正 iOS 中无法设置可点击的「input」的问题\n* 3. 统一其他类型的「input」的光标样式\n*/\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n     -moz-appearance: button;\n          appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n* 重置按钮禁用时光标样式\n*/\nbutton[disabled],\ninput[disabled] {\n  cursor: not-allowed;\n}\n/**\n* 1. 修正 IE 8/9 box-sizing 被设置为「content-box」的问题\n* 2. 移除 IE 8/9 中多余的内边距\n* 3. 移除 IE7 中多余的内边距(IE6 中任然存在)\n*/\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n/**\n* 1. 修正 Safari 5 和 Chrome 中「appearance」被设置为「searchfield」的问题\n* 2. 修正 Safari 5 和 Chrome 中「box-sizing」被设置为 「border-box」的问题\n*/\n/*input[type=\"search\"] {\n  -webkit-appearance: textfield;*/\n/* 1 */\n/*  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n*/\n/**\n* 1.移除 OS X 中 Safari5 和 Chrome 搜索框内侧的左边距\n* 2.如果需要隐藏清除按钮需要加上\n input[type=\"search\"]::-webkit-search-cancel-button\n*/\n/*input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}*/\n/**\n* 移除 Firefox 3+ 的内边距\n*/\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n* 修正 Chrome 中 input [type=\"number\"] 在特定高度和 font-size 时,\n* 下面一个箭头光标变成「cursor: text」\n* @demo: http://jsfiddle.net/FFXEc/\n* 动画演示：http://gtms04.alicdn.com/tps/i4/T18kd8FCtaXXc_FhcF-330-350.gif\n*/\n/*input[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}*/\n/**\n* 1. 移除 IE6-11 中默认的垂直滚动条\n* 2. 禁止水平拖动，防止破坏布局\n*/\ntextarea {\n  overflow: auto;\n  /* 1 */\n  resize: vertical;\n  /* 2 */\n}\n/**\n* 修正 Chrome 30- option 中文字无法显示的问题\n* http://jsbin.com/avujas/1/edit\n*/\n/*select:disabled option:checked,\noption:disabled:checked {\n  color: #d2d2d2;\n}*/\n/**\n* 修正 Safari 3+, Chrome 1+ Placeholder 居中问题\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input {\n    line-height: normal !important;\n  }\n}\n/**\n* 修正 Firefox 19+ Placeholder 设置了opacity 的问题\n*/\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: darkGray;\n  opacity: 1;\n}\n/**\n* label 元素给予手型，暗示此处可点击\n*/\nlabel {\n  cursor: pointer;\n}\n/**\n* 统一 select 样式, Firefox 中有 padding:1px 0\n* http://jsbin.com/avujas/1/edit\n*/\n/*select[size],\nselect[multiple],\nselect[size][multiple] {\n  border: 1px solid #aaa;\n  padding: 0;\n}*/\n/* ==========================================================================\n HTML5 元素\n ========================================================================== */\n/**\n* 修正未定义为「block」的元素\n*/\n/*article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n*/\n/**\n* 1. 修正未定义为「inline-block」的元素\n* 2. 修正 Chrome、Firefox、Opera 中 「progress」元素 vertical-align 默认值不一致\n*/\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n* 1.防止现代浏览器将没有「controls」属性的 「audio」元素显示出来\n* 2.去掉 iOS 5 中多余的高度\n*/\n/*audio:not([controls]) {\n  display: none;\n  /* 1 */\n/*height: 0;*/\n/* 2 */\n/*}*/\n/**\n* 修复 IE 7/8/9，Firefox 3 和 Safari 4 中 「hidden」属性不起作用的问题\n* 在IE、Safari、Firefox 22- 中隐藏「template」元素\n*/\n/*[hidden], template {\n  display: none;\n}\n*/\n/**\n* 为可拖动元素添加拖动的光标\n* http://jsbin.com/apavod/1/edit\n*/\n/*[draggable] {\n  cursor: move;\n}\n*/\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n* {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\ninput:focus,\ntextarea:focus,\na:focus,\nbutton:focus {\n  outline: none;\n  resize: none;\n}\na {\n  color: #f96447;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #d43b1c;\n}\na:hover,\na:focus,\na:active,\na:visited {\n  outline: 0;\n  text-decoration: none;\n}\nlabel {\n  cursor: default;\n  display: inline-block;\n  max-width: 100%;\n  font-weight: 400;\n}\n[mx-view] item {\n  display: none;\n}\n@font-face {\n  font-family: '__mx-style_index_-mc-iconfont';\n  /* project id 386526 */\n  src: url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAcsAAsAAAAACqQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXOEjOY21hcAAAAYAAAACWAAACCs4hbhBnbHlmAAACGAAAAugAAAO0BG1azWhlYWQAAAUAAAAALwAAADYPpP4TaGhlYQAABTAAAAAcAAAAJAfeA4pobXR4AAAFTAAAABQAAAAkI+kAAGxvY2EAAAVgAAAAFAAAABQEcAVsbWF4cAAABXQAAAAfAAAAIAEYAF1uYW1lAAAFlAAAAUUAAAJtPlT+fXBvc3QAAAbcAAAATwAAAGizaRo4eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/ss4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDy7z9zwv4EhhrmB4RRQmBEkBwA4Ig2aeJzFkbsNwzAMRE+RP0IQwEEG8AReyl1Kl+68g5Eqy7m7NZyj6EZI6viEJ4AnkRJIADWAKAZRAeGNANNLbsh+xDX7FZ6KH7jLuWBmYseeIxeu3PZdZ7+8UkH55TIvIql6raoNWhnNV97fFM57utQt79MRJTEf6ItMjk2OnWN32Ds2SY6OTZiLow6Dq6Neg5uD9gPbdC1VAAB4nH1SO2sUURi9370zd3Zmd+48dh77yr4mO7MmutlsxkkR3DQ2GgtBCAhaCBY2SrAwjUUw5CEo+A/EoAgR1LBpArEUQVBs3MrCYEAbY+xsMnpHV0ghDsM9936cj+9xDhIR+rlDtkkOZVETjaOT6CxCQEehzvAQ1IKwhUfBrom2azESeEFN8uotcgLcOrWcThT6LpWoBgzKMFHrREELB3A87OIp6DhDAPli4ZzZKJnkHii5oLwUn8ZrYFe8ktY9Fp86Om11qtnUfMY086Z5J0VFMYWxoDG46jqyKCs0fihqBXu7cgRXIJMPCmfOq9WieWk1vDbUcGWAhQXIFqvs8bRRMPh/s+Bkzbykq6lcQfWGLZjfTeeymSH/E+If5rNG5AfxURpNJVMiyUFuhCZ9RFzH0oDWx8CvDzCchigcYKcCTmeACc/CqB/vUgqlfh9KlMa7ZxYZa2gNbZH5bJFjg7FFVf1XkPic3j+UfrD3/4RDwT8z3CIH5AbKowZCYuAHXTjegoCBVAa3E006Sa9R2OCxLkzyGAPy9aMkj7bFvc3NPZGfM0uRIH00RqoHmys9Qnorv09vRxKipZneN0H41uPE9qgs7WjVkZecsNwThN7ySg8Br79AhskC9wuSsWPRegCuH062x/l6HIvY8Syss3JTizWPMXirNctkJJ6NZ/mFwXdPa+rwRis3uR6QiEIu4s9cDwQ1wzNqds2YMGrkQry/Gu+Dvgo69EEfvNDfHPwS9pL6v8UKfG7FSuK/KFEMvxBNae0+NTPicyKTtLghwhdRXFsTlaz0jAhAN4j5t/YsbCGCUJbXfYLXD/jz+sAn78lrMoJaaIxTJcpXym3uJbbg6rcwLzQGLegCv0xz6CRL5z1gKpGtR7oQYJpWtUz6nW2/UosOg7agP1Uk2WKfnPQV6pZcejntfGaWLCnw4K7h7Kp2SqZzijInYd1Wv7j6baVQNHBTsD5kNC3zwRKa2CgWFN7eL0lutBh4nGNgZGBgAGLnEJdv8fw2Xxm4WRhA4JrTXQME/d+MhYG5AcjlYGACiQIAFvYJkgB4nGNgZGBgbvjfwBDDwgACQJKRARVwAgBHDwJyeJxjYWBgYH7JwMDCgBsDAB8LAQ0AAAAAAHYA2AEYAT4BWAF8AYoB2nicY2BkYGDgZAhkYGUAASYg5gJCBob/YD4DABGZAXYAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicbccxDoAgDAXQfkQEbsOR6gLVpAykCeH0xrj6tkeOPpn+JThs8NgRcCAiIRNmqMZ6ShjdhvU4hbUu6/4SLnE11pulvFM/RSvRA98yEWMA') format('woff');\n}\n.__mx-style_index_-mc-iconfont {\n  font-family: \"__mx-style_index_-mc-iconfont\";\n  line-height: 1;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  display: inline-block;\n  speak: none;\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.__mx-style_index_-mt5 {\n  margin-top: 5px;\n}\n.__mx-style_index_-mt10 {\n  margin-top: 10px;\n}\n.__mx-style_index_-mt15 {\n  margin-top: 15px;\n}\n.__mx-style_index_-mt20 {\n  margin-top: 20px;\n}\n.__mx-style_index_-mt25 {\n  margin-top: 25px;\n}\n.__mx-style_index_-mt30 {\n  margin-top: 30px;\n}\n.__mx-style_index_-mr5 {\n  margin-right: 5px;\n}\n.__mx-style_index_-mr10 {\n  margin-right: 10px;\n}\n.__mx-style_index_-mr15 {\n  margin-right: 15px;\n}\n.__mx-style_index_-mr20 {\n  margin-right: 20px;\n}\n.__mx-style_index_-mr25 {\n  margin-right: 25px;\n}\n.__mx-style_index_-mr30 {\n  margin-right: 30px;\n}\n.__mx-style_index_-mb5 {\n  margin-bottom: 5px;\n}\n.__mx-style_index_-mb10 {\n  margin-bottom: 10px;\n}\n.__mx-style_index_-mb15 {\n  margin-bottom: 15px;\n}\n.__mx-style_index_-mb20 {\n  margin-bottom: 20px;\n}\n.__mx-style_index_-mb25 {\n  margin-bottom: 25px;\n}\n.__mx-style_index_-mb30 {\n  margin-bottom: 30px;\n}\n.__mx-style_index_-ml5 {\n  margin-left: 5px;\n}\n.__mx-style_index_-ml10 {\n  margin-left: 10px;\n}\n.__mx-style_index_-ml15 {\n  margin-left: 15px;\n}\n.__mx-style_index_-ml20 {\n  margin-left: 20px;\n}\n.__mx-style_index_-ml25 {\n  margin-left: 25px;\n}\n.__mx-style_index_-ml30 {\n  margin-left: 30px;\n}\n.__mx-style_index_-pt5 {\n  padding-top: 5px;\n}\n.__mx-style_index_-pt10 {\n  padding-top: 10px;\n}\n.__mx-style_index_-pt15 {\n  padding-top: 15px;\n}\n.__mx-style_index_-pt20 {\n  padding-top: 20px;\n}\n.__mx-style_index_-pt25 {\n  padding-top: 25px;\n}\n.__mx-style_index_-pt30 {\n  padding-top: 30px;\n}\n.__mx-style_index_-pr5 {\n  padding-right: 5px;\n}\n.__mx-style_index_-pr10 {\n  padding-right: 10px;\n}\n.__mx-style_index_-pr15 {\n  padding-right: 15px;\n}\n.__mx-style_index_-pr20 {\n  padding-right: 20px;\n}\n.__mx-style_index_-pr25 {\n  padding-right: 25px;\n}\n.__mx-style_index_-pr30 {\n  padding-right: 30px;\n}\n.__mx-style_index_-pb5 {\n  padding-bottom: 5px;\n}\n.__mx-style_index_-pb10 {\n  padding-bottom: 10px;\n}\n.__mx-style_index_-pb15 {\n  padding-bottom: 15px;\n}\n.__mx-style_index_-pb20 {\n  padding-bottom: 20px;\n}\n.__mx-style_index_-pb25 {\n  padding-bottom: 25px;\n}\n.__mx-style_index_-pb30 {\n  padding-bottom: 30px;\n}\n.__mx-style_index_-pl5 {\n  padding-left: 5px;\n}\n.__mx-style_index_-pl10 {\n  padding-left: 10px;\n}\n.__mx-style_index_-pl15 {\n  padding-left: 15px;\n}\n.__mx-style_index_-pl20 {\n  padding-left: 20px;\n}\n.__mx-style_index_-pl25 {\n  padding-left: 25px;\n}\n.__mx-style_index_-pl30 {\n  padding-left: 30px;\n}\n.__mx-style_index_-wp100 {\n  width: 100%;\n}\n.__mx-style_index_-hp100 {\n  height: 100%;\n}\n.__mx-style_index_-tr {\n  text-align: right;\n}\n.__mx-style_index_-tl {\n  text-align: left;\n}\n.__mx-style_index_-tc {\n  text-align: center;\n}\n.__mx-style_index_-fl {\n  float: left;\n}\n.__mx-style_index_-fr {\n  float: right;\n}\nhtml .__mx-style_index_-ib {\n  display: inline-block;\n}\n.__mx-style_index_-cp {\n  cursor: pointer;\n}\n.__mx-style_index_-cm {\n  cursor: move;\n}\n.__mx-style_index_-pa {\n  position: absolute;\n}\n.__mx-style_index_-pr {\n  position: relative;\n}\nhtml .__mx-style_index_-none {\n  display: none;\n}\n.__mx-style_index_-clearfix:before,\n.__mx-style_index_-clearfix:after {\n  content: \" \";\n  display: table;\n}\n.__mx-style_index_-clearfix:after {\n  clear: both;\n}\n.__mx-style_index_-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  overflow: auto;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar-thumb {\n  background-color: #cccccc;\n  border-radius: 6px;\n  height: 30px;\n  border: 2px solid #e5e5e5;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar-thumb:hover {\n  background-color: #6a6a6a;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar-track {\n  background-color: #e5e5e5;\n}\n.__mx-style_index_-ellipsis {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.__mx-style_index_-disabled {\n  color: #d2d2d2;\n  cursor: not-allowed;\n}\n.__mx-style_index_-btn {\n  outline: none;\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  background-color: #eaeaea;\n  white-space: nowrap;\n  padding: 9px 14px;\n  font-size: 14px;\n  line-height: 1;\n  border: 0;\n  color: #333;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-style_index_-btn:hover,\n.__mx-style_index_-btn:focus {\n  background-color: #ccc;\n  color: #333;\n}\n.__mx-style_index_-btn-brand {\n  background-color: #f96447;\n  color: #fff;\n}\n.__mx-style_index_-btn-brand:hover,\n.__mx-style_index_-btn-brand:focus {\n  background-color: #d43b1c;\n  color: #fff;\n}\n.__mx-style_index_-btn[disabled] {\n  background-color: #fbfbfb;\n}\n.__mx-style_index_-btn[disabled]:hover {\n  border-color: #e6e6e6;\n}\n::-webkit-input-placeholder {\n  color: #999;\n}\n:-ms-input-placeholder {\n  color: #999;\n}\n::-ms-input-placeholder {\n  color: #999;\n}\n::placeholder {\n  color: #999;\n}\n.__mx-style_index_-input,\n.__mx-style_index_-textarea {\n  display: inline-block;\n  height: 32px;\n  padding: 6px 9px;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  color: #333;\n  width: 340px;\n  max-width: 100%;\n}\n.__mx-style_index_-input:hover,\n.__mx-style_index_-textarea:hover {\n  border-color: #ccc;\n}\n.__mx-style_index_-input:focus,\n.__mx-style_index_-input-focus,\n.__mx-style_index_-textarea:focus {\n  border-color: #f96447 !important;\n}\n.__mx-style_index_-input-focus:hover {\n  border-color: #f96447 !important;\n}\n.__mx-style_index_-textarea {\n  height: auto;\n}\n.__mx-style_index_-input[disabled],\n.__mx-style_index_-textarea[disabled] {\n  background-color: #fbfbfb;\n}\n.__mx-style_index_-input[disabled]:hover,\n.__mx-style_index_-textarea[disabled]:hover {\n  border-color: #e6e6e6;\n}\n.__mx-style_index_-checkbox,\n.__mx-style_index_-radio {\n  width: 14px;\n  height: 14px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  vertical-align: middle;\n  border-radius: 2px;\n  -webkit-transition: all .25s;\n  transition: all .25s;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.__mx-style_index_-radio {\n  border-radius: 50%;\n}\n.__mx-style_index_-checkbox:checked,\n.__mx-style_index_-checkbox:indeterminate,\n.__mx-style_index_-radio:checked {\n  background-color: #f96447;\n  border-color: #f96447;\n}\n.__mx-style_index_-checkbox:checked:after {\n  content: '';\n  display: block;\n  margin: 1px auto;\n  height: 8px;\n  width: 5px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  -webkit-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n}\n.__mx-style_index_-checkbox:indeterminate:after {\n  content: '';\n  display: block;\n  height: 2px;\n  width: 8px;\n  margin: 40% auto;\n  background-color: #fff;\n}\n.__mx-style_index_-radio:checked:after {\n  content: '';\n  display: block;\n  height: 4px;\n  width: 4px;\n  border-radius: 50%;\n  margin: 4px auto;\n  background-color: #fff;\n}\n.__mx-style_index_-checkbox:disabled,\n.__mx-style_index_-radio:disabled {\n  background-color: #fbfbfb;\n  border-color: #e6e6e6;\n}\n.__mx-style_index_-checkbox:disabled:after {\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.__mx-style_index_-radio:disabled:after,\n.__mx-style_index_-checkbox:indeterminate:disabled:after {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n.__mx-style_index_-switch {\n  width: 42px;\n  height: 21px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  vertical-align: middle;\n  border-radius: 10.5px;\n  background-color: #eaeaea;\n  margin-right: 8px;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: all .25s;\n  transition: all .25s;\n}\n.__mx-style_index_-switch:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 17px;\n  width: 17px;\n  background: #fff;\n  margin: 2px;\n  -webkit-transition: all .25s;\n  transition: all .25s;\n  border-radius: 50%;\n  left: 0;\n}\n.__mx-style_index_-switch:disabled,\n.__mx-style_index_-switch:disabled:checked {\n  background-color: #fbfbfb;\n}\n.__mx-style_index_-switch:checked:after {\n  margin-left: -20px;\n  left: 100%;\n}\n.__mx-style_index_-switch:checked {\n  background-color: #f96447;\n}\n.__mx-style_index_-form-item {\n  margin-bottom: 22px;\n}\n.__mx-style_index_-form-label {\n  height: 32px;\n  line-height: 32px;\n  text-align: right;\n  width: 140px;\n  vertical-align: top;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.__mx-style_index_-form-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: \"*\";\n  font-family: SimSun;\n  line-height: 1;\n  color: #f04134;\n}\n.__mx-style_index_-form-content {\n  display: inline-block;\n  position: relative;\n  min-height: 32px;\n  line-height: 32px;\n  margin-left: 15px;\n}\n.__mx-style_index_-form-footer {\n  margin-left: 155px;\n}\n/*\n* 表格\n* @ name:        table.css V1.0.0\n* @ author:      一丝\n* @ update:      2014-1-8 19:34:24;\n*/\n.__mx-style_index_-table {\n  width: 100%;\n  border: solid 1px #e6e6e6;\n}\n/**\n* 只显示水平边框\n* .table\n*/\n.__mx-style_index_-table th {\n  border: 0 none;\n  border-bottom: 2px solid #e6e6e6;\n  font-weight: bold;\n}\n.__mx-style_index_-table td {\n  border: 0 none;\n  border-top: 1px solid #e6e6e6;\n}\n/**\n* 隔行换色\n* .table-striped\n*/\n.__mx-style_index_-table-striped tbody tr:nth-child(odd) td {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.__mx-style_index_-table tfoot td {\n  padding: 0;\n}\n.__mx-style_index_-loading {\n  padding: 150px 0;\n  margin: 0 auto;\n  width: 150px;\n  text-align: center;\n  line-height: 0;\n}\n.__mx-style_index_-loading:before,\n.__mx-style_index_-loading:after {\n  content: \"\";\n}\n.__mx-style_index_-loading-anim,\n.__mx-style_index_-loading:after,\n.__mx-style_index_-loading:before {\n  width: 14px;\n  height: 14px;\n  background-color: #eaeaea;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: __mx-style_index_-sk-bouncedelay 1s infinite ease-in-out both;\n          animation: __mx-style_index_-sk-bouncedelay 1s infinite ease-in-out both;\n}\n.__mx-style_index_-loading:before {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n}\n.__mx-style_index_-loading-anim {\n  margin: 0 10px;\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n}\n@-webkit-keyframes __mx-style_index_-sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes __mx-style_index_-sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n.__mx-style_index_-dialog-header {\n  padding: 15px 40px;\n  border-bottom: 1px solid #e6e6e6;\n  color: #333;\n  margin: 0;\n  line-height: 1.42857143;\n}\n.__mx-style_index_-dialog-body {\n  padding: 18px 40px;\n}\n.__mx-style_index_-dialog-footer {\n  padding: 15px 40px;\n  text-align: left;\n  border-top: 1px solid #e6e6e6;\n}\n");
Magix.applyStyle("____test___all_","/*.left{\n    width:200px;\n    float:left;\n}\n.item{\n    height: 30px;\n    line-height: 30px;\n    padding:0 10px;\n}*/\n/* line 11, tmpl/__test__/all.scss */\n.____test___all_-main {\n  padding: 50px; }\n\n/* line 15, tmpl/__test__/all.scss */\n.____test___all_-inline h3 {\n  font-size: 16px; }\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"<%if($$.inline){%>____test___all_-inline<%}else{%>____test___all_-main<%}%>\" mx-view=\"<%=$$.view%>\"><div class=\"__mx-style_index_-loading\"><span class=\"__mx-style_index_-loading-anim\"></span></div></div>","subs":[{"keys":["inline","view"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"class=\"<%if($$.inline){%>____test___all_-inline<%}else{%>____test___all_-main<%}%>\" mx-view=\"<%=$$.view%>\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"mx-view","v":1}]}],"file":"__test__/all.html"},
    init() {
        this.observeLocation({
            path: true
        });
        this.owner.on('created', () => {
            $('pre').each((i, it) => {
                if (!it.rendered) {
                    it.rendered = true;
                    hljs.highlightBlock(it);
                }
            });
            let loc = Magix.Router.parse();
            if (loc.get('inline')) {
                $('h2').remove();
                let h = $(document).height();
                parent.postMessage({
                    type: 'magix',
                    id: loc.get('id'),
                    height: h + 30
                }, '*');
            }
        });
    },
    render() {
        window.scrollTo(0, 0);
        let me = this;
        let loc = Magix.Router.parse();
        let view = loc.path;
        view = view.slice(1);
        if (view == 'list') {
            view = '__test__/list';
        }
        else {
            let i = view.indexOf('/');
            view = view.slice(0, i) + '/__test__' + view.slice(i);
        }
        me.updater.digest({
            inline: loc.get('inline'),
            view: view
        });
    }
});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('__test__/list',["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<a href=\"#!/mx-calendar/index\">mx-calendar/index(日历)</a><br><a href=\"#!/mx-calendar/datepicker\">mx-calendar/datepicker(日期选择)</a><br><a href=\"#!/mx-calendar/rangepicker\">mx-calendar/rangepicker(日期范围选择)</a><br><a href=\"#!/mx-checkbox/linkage\">mx-checkbox/linkage(联动)</a><br><a href=\"#!/mx-checkbox/storestate\">mx-checkbox/storestate(保存状态)</a><br><a href=\"#!/mx-color/index\">mx-color/index(颜色)</a><br><a href=\"#!/mx-color/picker\">mx-color/picker(颜色选择)</a><br><a href=\"#!/mx-copy/index\">mx-copy/index(复制)</a><br><a href=\"#!/mx-day/index\">mx-day/index(快速日期选择)</a><br><a href=\"#!/mx-dialog/alert\">mx-dialog/alert(alert与confirm)</a><br><a href=\"#!/mx-dialog/index\">mx-dialog/index(加载普通view)</a><br><a href=\"#!/mx-dragselect/index\">mx-dragselect/index(拖动选取)</a><br><a href=\"#!/mx-dragsort/index\">mx-dragsort/index(拖动排序)</a><br><a href=\"#!/mx-dropdown/index\">mx-dropdown/index(单选下拉框)</a><br><a href=\"#!/mx-dropdown/multiple\">mx-dropdown/multiple(多选下拉框)</a><br><a href=\"#!/mx-effect/count\">mx-effect/count(效果库,数字动态改变)</a><br><a href=\"#!/mx-effect/dance\">mx-effect/dance(效果库,文字显示效果)</a><br><a href=\"#!/mx-form/index\">mx-form/index(表单)</a><br><a href=\"#!/mx-gtip/index\">mx-gtip/index(提示)</a><br><a href=\"#!/mx-hour/day\">mx-hour/day(天小时)</a><br><a href=\"#!/mx-hour/week\">mx-hour/week(周小时)</a><br><a href=\"#!/mx-linkage/index\">mx-linkage/index(联动选择)</a><br><a href=\"#!/mx-loading/mask\">mx-loading/mask(加载动画)</a><br><a href=\"#!/mx-menu/index\">mx-menu/index</a><br><a href=\"#!/mx-number/index\">mx-number/index</a><br><a href=\"#!/mx-pagination/index\">mx-pagination/index(分页)</a><br><a href=\"#!/mx-popconfirm/index\">mx-popconfirm/index</a><br><a href=\"#!/mx-popmenu/index\">mx-popmenu/index</a><br><a href=\"#!/mx-popover/index\">mx-popover/index</a><br><a href=\"#!/mx-progress/index\">mx-progress/index</a><br><a href=\"#!/mx-rating/index\">mx-rating/index</a><br><a href=\"#!/mx-slider/index\">mx-slider/index(滑块)</a><br><a href=\"#!/mx-slider/range\">mx-slider/range(范围滑块)</a><br><a href=\"#!/mx-suggest/index\">mx-suggest/index</a><br><a href=\"#!/mx-table/index\">mx-table/index(表格)</a><br><a href=\"#!/mx-taginput/index\">mx-taginput/index(标签输入)</a><br><a href=\"#!/mx-time/index\">mx-time/index(时间)</a><br><a href=\"#!/mx-time/picker\">mx-time/picker(时间选取)</a><br><a href=\"#!/mx-tree/index\">mx-tree/index(tree)</a><br><a href=\"#!/mx-uploader/index\">mx-uploader/index(上传)</a><br>","subs":[],"file":"__test__/list.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-calendar/__test__/index',["magix","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">默认选中某天</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?selected=2018-01-01\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    selected=\"2018-01-01\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    selected=\"2017-08-12\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">设置周二为一周的开始</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?weekStart=2\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    week-start=\"2\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeType=all\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    time-type=\"all\"&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒,只能选择小时和分钟</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeType=hour%2Cminute\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    time-type=\"hour,minute\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowDatetime()\" mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-calendar/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>'(e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-calendar/__test__/datepicker',["magix","mx-gtip/index","../datepicker"],(require,exports,module)=>{
/*Magix,GTip*/
require("../datepicker");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar.datepicker</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" placeholder=\"请选择日期\" mx-view=\"mx-calendar/datepicker\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择日期\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">默认选中某天</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" placeholder=\"请选择日期\" mx-view=\"mx-calendar/datepicker?selected=2018-01-01\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择日期\"\n    selected=\"2018-01-01\"&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">从input中读取日期</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" placeholder=\"请选择日期\" value=\"2018-03-02\" mx-view=\"mx-calendar/datepicker\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择日期\"\n    value=\"2018-03-02\"&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input value=\"2017-08-12\" class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?min=2017-08-05&max=2017-08-22\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    value=\"2017-08-12\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">设置周二为一周的开始</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?weekStart=2\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    week-start=\"2\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">右下对齐</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?align=right\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    align=\"right\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">右上对齐</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?align=right&placement=top\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?timeType=all\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input value=\"2018-08-08 18:08:20\" class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?timeType=all\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type=\"all\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒,只能选择小时</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input value=\"2018-08-08 18:08:20\" class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?timeType=hour\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type=\"hour\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-change=\"\u001f\u001eshowDatetime()\" class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">只选择年月</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02&placement=top\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    class=\"input\"\n    date-type=\"year,month\"\n    selected=\"2010-02\"\n    placement=\"top\" /&gt;</pre></div>","subs":[],"file":"mx-calendar/__test__/datepicker.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>'(e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-calendar/__test__/rangepicker',["magix","mx-gtip/index","../rangepicker"],(require,exports,module)=>{
/*Magix,GTip*/
require("../rangepicker");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar.rangepicker</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">指定开始结束日期</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?start=2018-01-01&end=2019-01-01\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    start=\"2018-01-01\"\n    end=\"2019-01-01\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">不显示快捷日期</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?shortcuts=false\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    shortcuts=\"false\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    start=\"2017-08-08\"\n    end=\"2017-08-20\"\n    shortcuts=\"false\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">右上对齐</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?align=right&placement=top\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?timeType=all\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?timeType=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    start=\"2017-07-07 18:08:08\"\n    end=\"2017-12-30 15:15:15\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-change=\"\u001f\u001eshowDatetime()\" class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?timeType=all\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@rangepicker.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        console.log(e.dates);\n        this.gtipRT('日期：' + JSON.stringify(e.dates));\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">只有年月</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?dateType=year%2Cmonth&start=2017-07&end=2017-12&formatter=YYYY-MM&shortcuts=false\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-calendar.rangepicker\n    class=\"input\"\n    date-type=\"year,month\"\n    start=\"2017-07\"\n    end=\"2017-12\"\n    formatter=\"YYYY-MM\"\n    shortcuts=\"false\" /&gt;</pre></div>","subs":[],"file":"mx-calendar/__test__/rangepicker.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>'(e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-checkbox/__test__/linkage',["magix","../linkage","../../mx-gtip/index"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../linkage');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table><div class=\"__mx-style_index_-clearfix\"><button type=\"button\" class=\"__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-checkbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@linkage.html',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showEx1&lt;click&gt;' () {\n        this.gtipRT(this.getSelectedIds('example1'));\n    }\n});</pre></div>","subs":[],"file":"mx-checkbox/__test__/linkage.html"},
    mixins: [Linkage, GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showEx1<click>'() {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-checkbox/__test__/storestate',["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index"],(require,exports,module)=>{
/*Magix,Linkage,GTip,StoreState*/
require("mx-pagination/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../linkage');
let GTip = require('../../mx-gtip/index');
let StoreState = require('../storestate');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody mx-guid=\"g1\u001f\">2\u001d</tbody><tfoot><tr><td mx-guid=\"g2\u001f\" colspan=\"6\" mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\" mx-change=\"\u001f\u001echageList1()\" style=\"height:60px\"></td></tr></tfoot></table><div class=\"__mx-style_index_-clearfix\"><button class=\"__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"&lt;%=list1[i].id%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i]['f'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-vframe\n                tag=\"td\"\n                colspan=\"6\"\n                path=\"app/gallery/mx-pagination/index\"\n                total=\"&lt;%@100%&gt;\"\n                step=\"3\"\n                page=\"&lt;%@list1Page%&gt;\"\n                size=\"&lt;%@list1Size%&gt;\"\n                mx-change=\"chageList1()\"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-chekcbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nlet StoreState = require('app/gallery/mx-chekcbox/storestate');\nmodule.exports = Magix.View.extend({\n    tmpl: '@storestate.html',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp['f' + i] = '字段内容' + j + '_' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me['$' + type];\n        let page = me['$' + type + 'Page'];\n        let size = me['$' + type + 'Size'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList('list1'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    'chageList1&lt;change&gt;' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    'showEx1&lt;click&gt;' () {\n        let list = this.getStoreState('example1');\n        if (list.length) {\n            this.gtipRT('选中的值：' + list.join(','));\n        } else {\n            this.gtipRT('请选择checkbox');\n        }\n    }\n});</pre></div>","subs":[{"keys":["list1"],"path":"tbody[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var i=0;i<$$.list1.length;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"<%=$$.list1[i].id%>\"></td><%for(var j=0;j<5;j++){%><td><%=$$.list1[i]['f'+j]%></td><%}%></tr><%}%>","s":"2\u001d"},{"keys":["list1Page","list1Size"],"path":"td[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-checkbox/__test__/storestate.html"},
    mixins: [GTip, StoreState, Linkage],
    init() {
        let list1 = [];
        for (let j = 0; j < 100; j++) {
            let temp = {
                id: j
            };
            for (let i = 0; i < 5; i++) {
                temp['f' + i] = '字段内容' + j + '_' + i;
            }
            list1.push(temp);
        }
        let me = this;
        me.$list1 = list1;
        me.$list1Page = 1;
        me.$list1Size = 10;
    },
    getList(type) {
        let me = this;
        let list = me['$' + type];
        let page = me['$' + type + 'Page'];
        let size = me['$' + type + 'Size'];
        return list.slice((page - 1) * size, page * size);
    },
    render() {
        let me = this;
        me.updater.digest({
            list1: me.getList('list1'),
            list1Page: me.$list1Page,
            list1Size: me.$list1Size
        });
    },
    'chageList1<change>'(e) {
        let me = this;
        me.$list1Page = e.page;
        me.$list1Size = e.size;
        me.render();
    },
    'showEx1<click>'() {
        let list = this.getStoreState('example1');
        if (list.length) {
            this.gtipRT('选中的值：' + list.join(','));
        }
        else {
            this.gtipRT('请选择checkbox');
        }
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-color/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-color/index\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">透明度</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-color/index?showAlpha=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color show-alpha=\"true\"/&gt;</pre></div>","subs":[],"file":"mx-color/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>'(e) {
        console.log(e.color);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-color/__test__/picker',["magix","../picker"],(require,exports,module)=>{
/*Magix*/
require("../picker");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color.picker</h2><h3>颜色选择</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-color/picker\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color.picker class=\"input\" /&gt;</pre></div><div style=\"height: 300px\"></div><h3 class=\"__mx-style_index_-mt30\">透明度</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input class=\"__mx-style_index_-input\" mx-view=\"mx-color/picker?showAlpha=true\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-color.picker show-alpha=\"true\" class=\"input\" /&gt;</pre></div><div style=\"height: 300px\"></div>","subs":[],"file":"mx-color/__test__/picker.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-copy/__test__/index',["magix","../../mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-copy</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" id=\"text_<%=$$.viewId%>\">这里是要复制的<span style=\"font-weight:bold\">内容</span>的节点</div><button mx-guid=\"g1\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20\" mx-success=\"\u001f\u001edone()\" mx-error=\"\u001f\u001ebad()\" mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\">复制</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;div id=\"text_&lt;%=viewId%&gt;\"&gt;\n    这里是要复制的&lt;span style=\"font-weight:bold\"&gt;内容&lt;/span&gt;的节点\n&lt;/div&gt;\n&lt;mx-copy\n    copy-node=\"text_&lt;%=viewId%&gt;\"\n    tag=\"button\"\n    type=\"button\"\n    class=\"btn btn-brand mr20\"\n    mx-success=\"done()\"\n    mx-error=\"bad()\"&gt;\n        复制\n    &lt;/mx-copy&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'done&lt;success&gt;'() {\n        this.gtipRT('复制成功～');\n    },\n    'bad&lt;error&gt;'() {\n        this.gtipRT('复制失败～');\n    }\n});    \n</pre></div>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"text_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["viewId"],"path":"button[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-copy/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>'() {
        this.gtipRT('复制成功～');
    },
    'bad<error>'() {
        this.gtipRT('复制失败～');
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dragselect/__test__/index',["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-dragselect___test___index_",".__mx-dragselect___test___index_-hor {\n  width: 500px;\n  cursor: default;\n}\n.__mx-dragselect___test___index_-hor li {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  float: left;\n  line-height: 100px;\n  background: #F8F6F6;\n  border: 1px solid #fff;\n  margin: 10px;\n}\n.__mx-dragselect___test___index_-hor li[select] {\n  background: #ccc;\n}\n.__mx-dragselect___test___index_-hor .__mx-dragselect___test___index_-selected {\n  border: solid 1px #eb5685;\n  background: #813742;\n  opacity: .5;\n  color: #fff;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragselect</h2><h3>默认示例</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragselect/index\" class=\"__mx-dragselect___test___index_-hor __mx-style_index_-fl\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    'show&lt;change&gt;'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid('mx_');\n        if (e.action == 'add') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == 'remove') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    'begin&lt;dragbegin&gt;'() {\n        this.$temp = {};\n    },\n    'end&lt;dragfinish&gt;'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 class=\"__mx-style_index_-mt30\">部分不能选择</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D\" class=\"__mx-dragselect___test___index_-hor __mx-style_index_-fl\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\" test=\"@$hor\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select=\"false\">123</li><li select=\"false\">456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\" view-selector=\"li[select!=false]\"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select=\"false\"&gt;123&lt;/li&gt;\n        &lt;li select=\"false\"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>","subs":[],"file":"mx-dragselect/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
        me.$selected = {};
    },
    'show<change,click>'(e) {
        let node = e.node;
        let me = this;
        if (!node.id)
            node.id = Magix.guid('mx_');
        if (e.action == 'add') {
            if (me.$selected[node.id]) {
                $(node).removeClass('__mx-dragselect___test___index_-selected');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
            else {
                $(node).addClass('__mx-dragselect___test___index_-selected');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
        }
        else if (e.action == 'remove') {
            if (me.$temp[node.id]) {
                $(node).addClass('__mx-dragselect___test___index_-selected');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
            else {
                $(node).removeClass('__mx-dragselect___test___index_-selected');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
        }
        console.log(me.$selected);
    },
    'begin<dragbegin>'() {
        console.log('begin');
        this.$temp = {};
    },
    'end<dragfinish>'() {
        delete this.$temp;
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dragsort/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("__mx-dragsort___test___index_",".__mx-dragsort___test___index_-left {\n  width: 300px;\n  cursor: default;\n}\n.__mx-dragsort___test___index_-left li {\n  line-height: 30px;\n  padding: 10px;\n}\n.__mx-dragsort___test___index_-left li:nth-child(odd) {\n  background-color: rgba(172, 236, 182, 0.5);\n}\n.__mx-dragsort___test___index_-left span {\n  cursor: move;\n  margin-right: 10px;\n  display: inline-block;\n  height: 100%;\n}\n.__mx-dragsort___test___index_-left1 {\n  background: #F8F6F6;\n  cursor: default;\n  height: 120px;\n  overflow: auto;\n  width: 200px;\n}\n.__mx-dragsort___test___index_-hor {\n  width: 100%;\n  cursor: default;\n}\n.__mx-dragsort___test___index_-hor li {\n  width: 100px;\n  height: 60px;\n  text-align: center;\n  float: left;\n  line-height: 60px;\n  background: #F8F6F6;\n  border-right: 1px solid #fff;\n}\n.__mx-dragsort___test___index_-hor li[ds-draggable=\"false\"] {\n  background: #ccc;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragsort</h2><h3>默认示例</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"__mx-dragsort___test___index_-left __mx-style_index_-fl\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div class=\"__mx-style_index_-fr\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<3;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody mx-view=\"mx-dragsort/index\"><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<3;j++){%><td><%=i%>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left fl\" view-selector=\"span\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class=\"fr\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view=\"app/gallery/mx-dragsort/index\"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">水平拖动</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"__mx-dragsort___test___index_-hor __mx-style_index_-fl\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">四个方向</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=true\" class=\"__mx-dragsort___test___index_-hor __mx-style_index_-fl\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"true\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">滚动容器和窗口</h3><h4>拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 class=\"__mx-style_index_-mt30\">跨容器拖动</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?drops=_def&selector=span\" class=\"__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable\" id=\"_abc\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view=\"mx-dragsort/index?selector=span&drops=_abc\" class=\"__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable __mx-style_index_-ml30\" id=\"_def\"></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" view-drops=\"_def\" view-selector=\"span\" id=\"_abc\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view=\"mx-dragsort/index\" class=\"left left1 fl scrollable ml30\" id=\"_def\" view-selector=\"span\" view-drops=\"_abc\"&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">拖出容器删除</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?sort=false\" class=\"__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable\" mx-enterzone=\"\u001f\u001estop()\" mx-leavezone=\"\u001f\u001eok()\" mx-dragfinish=\"\u001f\u001edel()\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" mx-enterzone=\"stop()\" mx-leavezone=\"ok()\" mx-dragfinish=\"del()\" view-sort=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'stop&lt;enterzone&gt;'(e) {\n        e.changePointer(false);\n    },\n    'ok&lt;leavezone&gt;'(e) {\n        e.changePointer(true);\n    },\n    'del&lt;dragfinish&gt;'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">部分不能拖动及排序</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"__mx-dragsort___test___index_-hor __mx-style_index_-fl\"><li ds-draggable=\"false\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div>","subs":[],"file":"mx-dragsort/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'stop<enterzone>'(e) {
        e.changePointer(false);
    },
    'ok<leavezone>'(e) {
        e.changePointer(true);
    },
    'del<dragfinish>'(e) {
        if (e.moved && e.outZone) {
            $(e.dragNode).slideUp();
            setTimeout(() => {
                e.dragZone.removeChild(e.dragNode);
            }, 500);
        }
    },
    'start<dragstart>'(e) {
        e.originalEvent.dataTransfer.effectAllowed = 'none';
        e.originalEvent.dataTransfer.setDragImage(e.target, -10, -18);
    },
    'drop<drop>'(e) {
        console.log(e);
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    'enter<dragenter>'(e) {
        $(e.eventTarget).css({
            borderColor: 'red'
        });
    },
    'leave<dragleave>'(e) {
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    '$doc<dragover>'(e) {
        e.preventDefault();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-day/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-day</h2><h3>展示</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" style=\"width:800px\" mx-change=\"\u001f\u001eshowDays()\" mx-view=\"mx-day/index?years=<%@$$.years%>&selectedYear=2002&selectedDays=<%@{'2012':'0011,,0011,1100'}%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-day\n    years=\"&lt;%@years%&gt;\"\n    selected-year=\"2002\"\n    selected-days=\"&lt;%@{'2012':'0011,,0011,1100'}%&gt;\"\n    style=\"width:800px\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>","subs":[{"keys":["years"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-day/index?years=<%@$$.years%>&selectedYear=2002&selectedDays=<%@{'2012':'0011,,0011,1100'}%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-day/__test__/index.html"},
    render() {
        let me = this;
        let years = [];
        for (let i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            days: { '2012': '0011,,0011,1100' },
            years
        });
    },
    'showDays<change>'(e) {
        console.log(e.days);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dialog/__test__/alert',["magix","mx-dialog/index"],(require,exports,module)=>{
/*Magix,Dialog*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dialog</h2><h3>alert与confirm</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div>","subs":[],"file":"mx-dialog/__test__/alert.html"},
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>'() {
        this.alert('xxx', () => {
            console.log('确定被点击');
        });
    },
    'confirm<click>'() {
        this.confirm('xxx', () => {
            console.log('确定被点击');
        }, () => {
            console.log('取消被点击');
        });
    },
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dialog/__test__/index',["magix","mx-dialog/index"],(require,exports,module)=>{
/*Magix,Dialog*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["inDialog"],"path":"#\u001f","tmpl":"<%if($$.inDialog){%><div class=\"__mx-style_index_-dialog-header\">加载view测试</div><div class=\"__mx-style_index_-dialog-body\"><%}%><h2>mx-dialog</h2><h3>加载普通view</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20\" mx-click=\"\u001f\u001eview()\">view</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"view()\"&gt;view&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'view&lt;click&gt;' () {\n        this.mxDialog('path/to/view', {\n            width: 900\n        });\n    }\n});</pre></div><%if($$.inDialog){%></div><div class=\"__mx-style_index_-dialog-footer\">dialog footer</div><%}%>","s":"1\u001d"}],"file":"mx-dialog/__test__/index.html"},
    mixins: [Dialog],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    'view<click>'() {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 600
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dropdown/__test__/index',["magix","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown</h2><h3>默认</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowWeek()\" style=\"width:150px\" mx-view=\"mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><button mx-click=\"\u001f\u001etest()\" class=\"__mx-style_index_-btn __mx-style_index_-ml5 __mx-style_index_-btn-brand\">toggle searchbox</button><div mx-change=\"\u001f\u001eshowWeek()\" class=\"__mx-style_index_-ml20\" style=\"width:150px;border-radius: 4px 0 0 4px\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&disabled=true\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><div mx-change=\"\u001f\u001eshowWeek()\" style=\"width:150px;margin-left:-1px; border-radius: 0 4px 4px 0\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-dropdown\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n&lt;/mx-dropdown&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">单选带分组</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowWeek()\" class=\"__mx-style_index_-fl\" style=\"width:150px\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><item group=\"true\">本周日期</item><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item><item group=\"true\">下周日期</item><item value=\"next-mon\">下周一</item><item value=\"next-wed\">下周三</item><item value=\"next-thu\">下周四</item><item value=\"next-fri\">下周五</item><item value=\"next-sat\">下周六</item></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-dropdown\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item group=\"true\"&gt;本周日期&lt;/item&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n    &lt;item group=\"true\"&gt;下周日期&lt;/item&gt;\n    &lt;item value=\"next-mon\"&gt;下周一&lt;/item&gt;\n    &lt;item value=\"next-wed\"&gt;下周三&lt;/item&gt;\n    &lt;item value=\"next-thu\"&gt;下周四&lt;/item&gt;\n    &lt;item value=\"next-fri\"&gt;下周五&lt;/item&gt;\n    &lt;item value=\"next-sat\"&gt;下周六&lt;/item&gt;\n&lt;/mx-dropdown&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">动态数据并设置选中</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-change=\"\u001f\u001eshowUser()\" class=\"__mx-style_index_-fl\" style=\"width:200px\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre lang=\"html\">&lt;mx-dropdown\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUser()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-dropdown&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    'showUser&lt;change&gt;' (e) {\n        this.gtipRB('name:' + e.text + ',id:' + e.value);\n    }\n});</pre></div>","subs":[{"keys":["searchbox"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userSelected","userList"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-dropdown/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>'(e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>'(e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>'(e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>'(e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>'(e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-dropdown/__test__/multiple',["magix","mx-gtip/index","../multiple"],(require,exports,module)=>{
/*Magix,GTip*/
require("../multiple");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown.multiple</h2><h3 class=\"__mx-style_index_-mt30\">默认</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowWeeks()\" class=\"__mx-style_index_-fl\" style=\"width:150px\" mx-view=\"mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">多选带分组</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowWeeks()\" class=\"__mx-style_index_-fl\" style=\"width:150px\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><item group=\"true\">本周日期</item><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item><item group=\"true\">下周日期</item><item value=\"next-mon\">下周一</item><item value=\"next-wed\">下周三</item><item value=\"next-thu\">下周四</item><item value=\"next-fri\">下周五</item><item value=\"next-sat\">下周六</item></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item group=\"true\"&gt;本周日期&lt;/item&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n    &lt;item group=\"true\"&gt;下周日期&lt;/item&gt;\n    &lt;item value=\"next-mon\"&gt;下周一&lt;/item&gt;\n    &lt;item value=\"next-wed\"&gt;下周三&lt;/item&gt;\n    &lt;item value=\"next-thu\"&gt;下周四&lt;/item&gt;\n    &lt;item value=\"next-fri\"&gt;下周五&lt;/item&gt;\n    &lt;item value=\"next-sat\"&gt;下周六&lt;/item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">动态数据并设置选中</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-change=\"\u001f\u001eshowUsers()\" class=\"__mx-style_index_-fl\" style=\"width:200px\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre lang=\"html\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ usersSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUsers()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    'showUsers&lt;change&gt;' (e) {\n        this.gtipRB('user ids:' + e.values);\n    }\n});</pre></div>","subs":[{"keys":["searchbox"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["usersSelected","userList"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-dropdown/__test__/multiple.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>'(e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>'(e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>'(e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>'(e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>'(e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-effect/__test__/count',["magix","../../mx-form/index","../count"],(require,exports,module)=>{
/*Magix,Form*/
require("../count");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../../mx-form/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect count</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g0\u001f\" class=\"__mx-style_index_-input\" mx-view=\"mx-effect/count?to=<%!$eu($$.toNumber)%>\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px\"></div><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5\" type=\"button\" mx-click=\"\u001f\u001echangeNumber({i:true})\">increase number</button><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5\" type=\"button\" mx-click=\"\u001f\u001echangeNumber()\">decrease number</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;input class=\"input\" mx-view=\"mx-effect/count\" view-to=\"&lt;%@toNumber%&gt;\"&gt;\n&lt;div mx-view=\"mx-effect/count\" view-to=\"&lt;%@toNumber%&gt;\" view-duration=\"2000\" view-fixed=\"2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px;\"&gt;&lt;/div&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber({i:true})\"&gt;increase number&lt;/button&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber()\"&gt;decrease number&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    'changeNumber&lt;click&gt;'(e) {\n        let me = this;\n        let to = me.updater.get('toNumber');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div>","subs":[{"keys":["toNumber"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-effect/count?to=<%!$eu($$.toNumber)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["toNumber"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-effect/__test__/count.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>'(e) {
        let me = this;
        let to = me.updater.get('toNumber');
        let diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-effect/__test__/dance',["magix","../../mx-form/index","../dance","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,Form*/
require("../dance");
require("mx-dropdown/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../../mx-form/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect dance</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-effect/dance?value=<%!$eu($$.content)%>&duration=<%!$eu($$.duration)%>&dance=<%!$eu($$.dance)%>\"></div><div mx-guid=\"g1\u001f\" mx-ssid=\"\u001f0\" style=\"width:180px\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'duration',f:{refresh:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=<%@$$.duration%>\"><item value=\"10\">10ms</item><item value=\"30\">30ms</item><item value=\"60\">60ms</item><item value=\"90\">90ms</item><item value=\"120\">120ms</item></div><div mx-guid=\"g2\u001f\" mx-ssid=\"\u001f1\" style=\"width:180px\" class=\"__mx-style_index_-ml10\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'dance',f:{refresh:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=<%@$$.dance%>\"><item value=\"d1\">效果一</item><item value=\"d2\">效果二</item><item value=\"d3\">效果三</item><item value=\"d4\">效果四</item><item value=\"d5\">效果五</item><item value=\"d6\">效果六</item><item value=\"d7\">效果七</item><item value=\"d8\">效果八</item><item value=\"d9\">效果九</item><item value=\"d10\">效果十</item><item value=\"d11\">效果十一</item></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;mx-effect.dance value=\"&lt;%=content%&gt;\" duration=\"&lt;%=duration%&gt;\" dance=\"&lt;%=dance%&gt;\"  /&gt;\n&lt;mx-dropdown empty-text=\"单字效果间隔时间\" style=\"width:180px\" selected=\"&lt;%:duration{refresh:true}%&gt;\"&gt;\n    &lt;item value=\"10\"&gt;10ms&lt;/item&gt;\n    &lt;item value=\"30\"&gt;30ms&lt;/item&gt;\n    &lt;item value=\"60\"&gt;60ms&lt;/item&gt;\n    &lt;item value=\"90\"&gt;90ms&lt;/item&gt;\n    &lt;item value=\"120\"&gt;120ms&lt;/item&gt;\n&lt;/mx-dropdown&gt;\n&lt;mx-dropdown empty-text=\"动画效果\" style=\"width:180px\" class=\"ml10\" selected=\"&lt;%:dance{refresh:true}%&gt;\"&gt;\n    &lt;item value=\"d1\"&gt;效果一&lt;/item&gt;\n    &lt;item value=\"d2\"&gt;效果二&lt;/item&gt;\n    &lt;item value=\"d3\"&gt;效果三&lt;/item&gt;\n    &lt;item value=\"d4\"&gt;效果四&lt;/item&gt;\n    &lt;item value=\"d5\"&gt;效果五&lt;/item&gt;\n    &lt;item value=\"d6\"&gt;效果六&lt;/item&gt;\n    &lt;item value=\"d7\"&gt;效果七&lt;/item&gt;\n    &lt;item value=\"d8\"&gt;效果八&lt;/item&gt;\n    &lt;item value=\"d9\"&gt;效果九&lt;/item&gt;\n    &lt;item value=\"d10\"&gt;效果十&lt;/item&gt;\n    &lt;item value=\"d11\"&gt;效果十一&lt;/item&gt;\n&lt;/mx-dropdown&gt;\n    </pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',\n            dance: 'd1',\n            duration: '60'\n        });\n    }\n});\n    \n    </pre></div>","subs":[{"keys":["content","duration","dance"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-effect/dance?value=<%!$eu($$.content)%>&duration=<%!$eu($$.duration)%>&dance=<%!$eu($$.dance)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["duration"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=<%@$$.duration%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["dance"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=<%@$$.dance%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-effect/__test__/dance.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>'(e) {
        let me = this;
        let to = me.updater.get('toNumber');
        let diff = 300;
        if (!e.params.i) {
            diff = -diff;
        }
        me.updater.digest({
            toNumber: to + diff
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-form/__test__/index',["magix","../index","mx-color/picker","mx-taginput/index","mx-dropdown/index","mx-time/picker","mx-calendar/datepicker","mx-slider/index","mx-number/index","mx-slider/range","mx-progress/index","mx-uploader/index","./sub"],(require,exports,module)=>{
/*Magix,Form*/
require("mx-color/picker");
require("mx-taginput/index");
require("mx-dropdown/index");
require("mx-time/picker");
require("mx-calendar/datepicker");
require("mx-slider/index");
require("mx-number/index");
require("mx-slider/range");
require("mx-progress/index");
require("mx-uploader/index");
require("./sub");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-form</h2><h3>示例表单</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div style=\"width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0\"><div class=\"__mx-style_index_-form-item __mx-style_index_-clearfix\"><label class=\"__mx-style_index_-form-label __mx-style_index_-form-required\">活动名称：</label><div class=\"__mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"__mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}({m:'___',a:{}})\"></div></div><div class=\"__mx-style_index_-form-item __mx-style_index_-clearfix\"><label class=\"__mx-style_index_-form-label\">色彩：</label><div class=\"__mx-style_index_-form-content\"><input mx-view=\"mx-color/picker\" class=\"__mx-style_index_-input\"></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label __mx-style_index_-form-required\">标签：</label><div class=\"__mx-style_index_-form-content\"><div mx-guid=\"g1\u001f\" mx-ssid=\"\u001f1\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'tags',f:{required:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label __mx-style_index_-form-required\">活动时间：</label><div class=\"__mx-style_index_-form-content\"><div mx-guid=\"g2\u001f\" mx-ssid=\"\u001f2\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'day',f:{required:true},n:'selected'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" style=\"width:180px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><span class=\"__mx-style_index_-ib __mx-style_index_-ml5 __mx-style_index_-mr5\">-</span><input mx-guid=\"g3\u001f\" mx-ssid=\"\u001f3\" class=\"__mx-style_index_-input\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"<%=$$.time%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'time',f:{required:true}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" mx-view=\"mx-time/picker\"></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">checkbox：</label><div class=\"__mx-style_index_-form-content\"><label class=\"__mx-style_index_-mr10 __mx-style_index_-disabled\"><input type=\"checkbox\" name=\"cb\" value=\"c1\" class=\"__mx-style_index_-checkbox\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" disabled=\"disabled\" checked=\"checked\">c1</label><label class=\"__mx-style_index_-mr10\"><input type=\"checkbox\" name=\"cb\" value=\"c2\" class=\"__mx-style_index_-checkbox\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\">c2</label><label class=\"__mx-style_index_-mr10\"><input type=\"checkbox\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" name=\"cb\" value=\"c3\" class=\"__mx-style_index_-switch\" disabled=\"disabled\">c3</label><label class=\"__mx-style_index_-mr10\"><input type=\"checkbox\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" name=\"cb\" value=\"c4\" class=\"__mx-style_index_-switch\">c4</label></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">radio：</label><div class=\"__mx-style_index_-form-content\"><label class=\"__mx-style_index_-mr10 __mx-style_index_-disabled\"><input checked=\"checked\" disabled=\"disabled\" type=\"radio\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" value=\"r1\" class=\"__mx-style_index_-radio\" name=\"magix\">r1</label><label class=\"__mx-style_index_-mr10\"><input type=\"radio\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" value=\"r2\" class=\"__mx-style_index_-radio\" name=\"magix\">r2</label><label class=\"__mx-style_index_-mr10\"><input type=\"radio\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" value=\"r3\" class=\"__mx-style_index_-radio\" name=\"magix\">r3</label></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">日期：</label><div class=\"__mx-style_index_-form-content\"><input mx-guid=\"g4\u001f\" mx-view=\"mx-calendar/datepicker\" class=\"__mx-style_index_-input\" placeholder=\"请选择开始日期\" value=\"<%=$$.dateStart%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'dateStart'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" style=\"width:162px\"><span class=\"__mx-style_index_-ib __mx-style_index_-ml5 __mx-style_index_-mr5\">-</span><input mx-guid=\"g5\u001f\" mx-view=\"mx-calendar/datepicker\" class=\"__mx-style_index_-input\" placeholder=\"请选择结束日期\" value=\"<%=$$.dateEnd%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'dateEnd'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" style=\"width:162px\"></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">范围：</label><div class=\"__mx-style_index_-form-content\"><div mx-guid=\"g6\u001f\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'range',n:'value'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\" mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\"></div></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">数字：</label><div class=\"__mx-style_index_-form-content\"><div mx-view=\"mx-number/index\"></div></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">范围：</label><div class=\"__mx-style_index_-form-content\"><div mx-guid=\"g7\u001f\" mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'range1',n:'value'}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">进度条：</label><div class=\"__mx-style_index_-form-content\"><div mx-view=\"mx-progress/index?value=0.35\"></div></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">封面：</label><div class=\"__mx-style_index_-form-content\"><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\">上传文件</button></div></div><div class=\"__mx-style_index_-form-item\"><label class=\"__mx-style_index_-form-label\">备注：</label><div class=\"__mx-style_index_-form-content\"><textarea mx-guid=\"g8\u001f\" mx-ssid=\"\u001f4\" class=\"__mx-style_index_-textarea\" rows=\"8\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'mark',f:{maxLength:10}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"><%=$$.mark,\"{maxLength:10}\"%></textarea></div></div><div mx-guid=\"g9\u001f\" mx-ssid=\"\u001f5\" mx-view=\"mx-form/__test__/sub?nameX1=<%@$$.name_x1%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'name_x1',f:{from:'nameX1'},n:'name-x1'},{p:'de',f:{from:'name_sub1'}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div><div class=\"__mx-style_index_-form-footer\"><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eisValid()\">isValid</button><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml10\" mx-click=\"\u001f\u001egetData()\">getData</button></div></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div class=\"form-item clearfix\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;活动名称：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;&lt;input class=\"input\" placeholder=\"请填写活动名称\" value=\"&lt;%:name{required:true,blength:[20,50]}%&gt;\" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item clearfix\"&gt;\n    &lt;label class=\"form-label\"&gt;色彩：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;&lt;input mx-view=\"app/gallery/mx-color/picker\" class=\"input\" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;活动时间：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-vframe src=\"app/gallery/mx-dropdown/index\"\n            searchbox=\"true\"\n            empty-text=\"请选择日期\"\n            selected=\"&lt;%:day{required:true}%&gt;\" style=\"width:180px;\"&gt;\n            &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n            &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n            &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n            &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n            &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n        &lt;/mx-vframe&gt;\n        &lt;span class=\"ib ml5 mr5\"&gt;-&lt;/span&gt;\n        &lt;input class=\"input\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"&lt;%:time{required:true}%&gt;\" mx-view=\"app/gallery/mx-time/picker\" /&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;标签：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-vframe src=\"app/gallery/mx-taginput/index\"\n            list=\"&lt;%@list%&gt;\"\n            placeholder=\"请选择标签\"\n            selected=\"&lt;%:tags{required:true}%&gt;\"\n        &gt;&lt;/mx-vframe&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;checkbox：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c1\" class=\"checkbox\" /&gt;c1\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c2\" class=\"checkbox\" /&gt;c2\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c3\" class=\"checkbox\" /&gt;c3\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c4\" class=\"checkbox\" /&gt;c4\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;radio：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"radio\" &lt;%:radio%&gt; value=\"r1\" class=\"radio\" name=\"magix\" /&gt;r1\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"radio\" &lt;%:radio%&gt; value=\"r2\" class=\"radio\" name=\"magix\" /&gt;r2\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;mx-input type=\"radio\" &lt;%:radio%&gt; value=\"r3\" class=\"radio\" name=\"magix\" /&gt;r3\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;日期：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;input mx-view=\"app/gallery/mx-calendar/datepicker\" class=\"input\" placeholder=\"请选择开始日期\" value=\"&lt;%:dateStart%&gt;\" style=\"width:162px;\"&gt;\n        &lt;span class=\"ib ml5 mr5\"&gt;-&lt;/span&gt;\n        &lt;input mx-view=\"app/gallery/mx-calendar/datepicker\" class=\"input\" placeholder=\"请选择结束日期\" value=\"&lt;%:dateEnd%&gt;\" style=\"width:162px;\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-vframe mx-view=\"app/gallery/mx-slider/index\"\n            max=\"200\"\n            min=\"0\"\n            value=\"&lt;%:range%&gt;\"\n            step=\"0.2\"\n        &gt;&lt;/mx-vframe&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-vframe mx-view=\"app/gallery/mx-slider/range\"\n            max=\"500\"\n            min=\"200\"\n            value=\"&lt;%:range1%&gt;\"\n            step=\"10\"\n        &gt;&lt;/mx-vframe&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;封面：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;mx-vframe\n            tag=\"button\"\n            class=\"btn btn-brand\"\n            src=\"app/gallery/mx-uploader/index\"\n            action=\"./\"\n            view-name=\"file1\"\n            multiple=\"true\"\n        &gt;上传文件&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;备注：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;textarea class=\"textarea\" rows=\"8\"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-footer\"&gt;\n    &lt;button class=\"btn btn-brand\" mx-click=\"isValid()\"&gt;isValid&lt;/button&gt;\n    &lt;button class=\"btn btn-brand ml10\" mx-click=\"getData()\"&gt;getData&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    'isValid&lt;click&gt;' () {\n        console.log(this.isValid());\n    },\n    'getData&lt;click&gt;' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark');\n        console.log(data);\n    }\n});</pre></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["list","tags"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["day"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["time"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"value=\"<%=$$.time%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["dateStart"],"path":"input[mx-guid=\"g4\u001f\"]","attr":"value=\"<%=$$.dateStart%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["dateEnd"],"path":"input[mx-guid=\"g5\u001f\"]","attr":"value=\"<%=$$.dateEnd%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["range"],"path":"div[mx-guid=\"g6\u001f\"]","attr":"mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["range1"],"path":"div[mx-guid=\"g7\u001f\"]","attr":"mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["mark"],"path":"textarea[mx-guid=\"g8\u001f\"]"},{"keys":["name_x1"],"path":"div[mx-guid=\"g9\u001f\"]","attr":"mx-view=\"mx-form/__test__/sub?nameX1=<%@$$.name_x1%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-form/__test__/index.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            keys: ['aa', 'bb', 'cc'],
            name_x1: '----',
            user: [{
                    name: 'a'
                }, {
                    name: 'b'
                }, {
                    name: 'c'
                }, {
                    name: 'd'
                }, {
                    name: 'e'
                }],
            checkbox: [],
            range: 2,
            range1: [230, 300],
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'isValid<click>'() {
        console.log(this.isValid());
    },
    'getData<click>'() {
        let src = this.updater.get();
        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark,name_x1,de');
        console.log(data);
    },
    '@{abc}<focusin>'(e) {
        console.log(e);
    },
    'delete<click>'(e) {
        let user = this.updater.get('user');
        user.splice(e.params.key, 1);
        this.updater.digest({
            user
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-form/__test__/sub',["magix","../index","./sub1"],(require,exports,module)=>{
/*Magix,Form*/
require("./sub1");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-style_index_-form-item __mx-style_index_-clearfix\"><label class=\"__mx-style_index_-form-label __mx-style_index_-form-required\">活动名称：</label><div class=\"__mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"__mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.nameX1%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'nameX1',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div></div><div mx-ssid=\"\u001f1\" mx-view=\"mx-form/__test__/sub1\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'name_sub1',f:{from:'name'}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div>","subs":[{"keys":["nameX1"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.nameX1%>\"","attrs":[{"n":"value","q":1,"p":1}]}],"file":"mx-form/__test__/sub.html"},
    mixins: [Form],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        console.log(me.updater.get());
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-form/__test__/sub1',["magix","../index"],(require,exports,module)=>{
/*Magix,Form*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"__mx-style_index_-form-item __mx-style_index_-clearfix\"><label class=\"__mx-style_index_-form-label __mx-style_index_-form-required\">活动名称：</label><div class=\"__mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"__mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e@{sync.value.from.ui}({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e@{sync.value.from.ui}()\" mx-focusin=\"\u001f\u001e@{sync.value.from.ui}()\"></div></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]}],"file":"mx-form/__test__/sub1.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-gtip/__test__/index',["magix","mx-gtip/index"],(require,exports,module)=>{
/*Magix,GTip*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-gtip</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button class=\"__mx-style_index_-btn __mx-style_index_-fl\" mx-click=\"\u001f\u001ert()\">右上角提示</button><button class=\"__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10\" mx-click=\"\u001f\u001erb()\">右下角提示</button><button class=\"__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10\" mx-click=\"\u001f\u001elt();\">左上角提示</button><button class=\"__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10\" mx-click=\"\u001f\u001elb();\">左下角提示</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button class=\"btn fl\" mx-click=\"rt()\"&gt;右上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"rb()\"&gt;右下角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lt();\"&gt;左上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lb();\"&gt;左下角提示&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'rt&lt;click&gt;' () {\n        this.gtipRT('右上角，消息内容' + Date.now());\n    },\n    'rb&lt;click&gt;' () {\n        this.gtipRB('右下角，消息内容' + Date.now());\n    },\n    'lt&lt;click&gt;' () {\n        this.gtipLT('左上角，消息内容' + Date.now());\n    },\n    'lb&lt;click&gt;' () {\n        this.gtipLB('左下角，消息内容' + Date.now());\n    },\n    'rtt&lt;click&gt;' (e) {\n        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>","subs":[],"file":"mx-gtip/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'rt<click>'() {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>'() {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>'() {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>'() {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>'(e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/__test__/day',["magix","../day"],(require,exports,module)=>{
/*Magix*/
require("../day");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>天小时选取组件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div style=\"width:600px\" mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-hour.day\n    hours=\"00001111011\"\n    style=\"width:600px\" mx-change=\"show()\"/&gt;</pre></div>","subs":[],"file":"mx-hour/__test__/day.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-hour/__test__/week',["magix","../week"],(require,exports,module)=>{
/*Magix*/
require("../week");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour.week</h2><h3 class=\"__mx-style_index_-mt30\">周小时选取组件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshow()\" style=\"width:800px\" mx-view=\"mx-hour/week?days=%2C001111%2C%2C%2C00000000111111001\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-hour.week\n    days=\",001111,,,00000000111111001\"\n    mx-change=\"show()\"\n    style=\"width:800px\"/&gt;</pre></div>","subs":[],"file":"mx-hour/__test__/week.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-linkage/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-linkage</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    placeholder=\"请选择省市区\" /&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            headers: ['省份', '城市', '地区'],\n            list: [{\n                id: 1,\n                text: '浙江省'\n            }, {\n                id: 2,\n                text: '河南省'\n            }, {\n                id: 3,\n                text: '杭州市',\n                pId: 1\n            }, {\n                id: 4,\n                text: '周口市',\n                pId: 2\n            }, {\n                id: 5,\n                text: '安徽省'\n            }, {\n                id: 6,\n                text: '新疆维吾尔自治区'\n            }, {\n                id: 7,\n                pId: 3,\n                text: '余杭区'\n            }, {\n                id: 8,\n                text: '湖州市',\n                pId: 1\n            }, {\n                id: 9,\n                text: '长吉县',\n                pId: 8\n            }]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    selected=\"1,3\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    disabled=\"true\"\n    placeholder=\"请选择分类\" /&gt;</pre></div>","subs":[{"keys":["list","headers"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","headers"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-linkage/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            headers: ['省份', '城市', '地区'],
            list: [{
                    id: 1,
                    text: '浙江省'
                }, {
                    id: 2,
                    text: '河南省'
                }, {
                    id: 3,
                    text: '杭州市',
                    pId: 1
                }, {
                    id: 4,
                    text: '周口市',
                    pId: 2
                }, {
                    id: 5,
                    text: '安徽省'
                }, {
                    id: 6,
                    text: '新疆维吾尔自治区'
                }, {
                    id: 7,
                    pId: 3,
                    text: '余杭区'
                }, {
                    id: 8,
                    text: '湖州市',
                    pId: 1
                }, {
                    id: 9,
                    text: '长吉县',
                    pId: 8
                }]
        });
    },
    'showValue<change>'(e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-loading/__test__/mask',["magix","../mask"],(require,exports,module)=>{
/*Magix,MLoading*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let MLoading = require('../mask');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-loading</h2><h3>mask mixin</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><p>loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p>通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p>为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p mx-guid=\"g0\u001f\" class=\"__mx-style_index_-mt10 __mx-style_index_-mb10\">1\u001d</p><button mx-click=\"\u001f\u001erefresh()\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mt10\">点此按钮2s后重新渲染当前view</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>\n&lt;p class=\"mt10 mb10\"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click=\"refresh()\" class=\"btn btn-brand mt10\"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet MLoading = require('app/gallery/loading/mask');\nmodule.exports = Magix.View.extend({\n    tmpl: '@mask.html',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    'refresh&lt;click&gt;' () {\n        this.render();\n    }\n});</pre></div>","subs":[{"keys":["count"],"path":"p[mx-guid=\"g0\u001f\"]","tmpl":"第<%=$$.count%>次渲染页面","s":"1\u001d"}],"file":"mx-loading/__test__/mask.html"},
    mixins: [MLoading],
    init() {
        this.count = 1;
    },
    render() {
        let me = this;
        setTimeout(me.wrapAsync(() => {
            me.updater.digest({
                count: this.count++
            });
        }), 2e3);
    },
    'refresh<click>'() {
        this.render();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-menu/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix,Menu*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Menu = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-menu</h2><h3>展示</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-menu/index?list=<%@$$.list%>&width=200\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-menu.index\n    list=\"&lt;%@list%&gt;\"\n    width=\"200\"\n&gt;&lt;/mx-menu.index&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">context menu</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-contextmenu=\"\u001f\u001eshowcm()\">在这里点右键</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button class=\"btn btn-brand\" mx-contextmenu=\"showcm()\"&gt;在这里点右键&lt;/button&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-menu/index?list=<%@$$.list%>&width=200\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-menu/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                    id: 0,
                    pId: '',
                    text: '新建'
                }, {
                    id: '0-0',
                    pId: '',
                    text: '复制'
                }, {
                    id: '0-1',
                    pId: '',
                    text: '删除'
                }, {
                    id: 1,
                    pId: 0,
                    text: '新建word文件'
                }, {
                    id: 2,
                    pId: 0,
                    text: '新建excel文件'
                }, {
                    id: 3,
                    pId: 0,
                    text: '新建ppt文件'
                }]
        });
    },
    'showcm<contextmenu>'(e) {
        e.preventDefault();
        Menu.show(this, e, {
            list: this.updater.get('list'),
            picked(item) {
                console.log(item);
            },
            width: 220
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-number/__test__/index',["magix","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-number</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-number/index\"></div><br>下面这个是原生的number，用以对比<br><input type=\"number\" class=\"__mx-style_index_-input\"><div style=\"color:#aaa\">mx-number比原生多了按着shift键的变化比率，这个变化比率是可配置的<br>原生可以输入多个点小数点“.”和多个科学计数法“e”，而只有合法的数字才能取出值，否则会取到空字符串</div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-number /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">最大值、最小值及step</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\" /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-number/index?disabled=true&value=20\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-number disabled=\"true\" value=\"20\" /&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">响应事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-number/index?max=10&min=-10&step=0.5&value=8.5\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\"\n    mx-change=\"show()\" /&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        this.gtipRT('当前值：' + e.eventTarget.value);\n    }\n});</pre></div>","subs":[],"file":"mx-number/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>'(e) {
        this.gtipRT('当前值：' + e.eventTarget.value);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-pagination/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"></div><button class=\"__mx-style_index_-btn\" mx-click=\"\u001f\u001etest()\">test</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"3\"\n    page=\"2\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">简单模式</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&simplify=true&page=15\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    simplify=\"true\"\n    page=\"15\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">迷你模式</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&mini=true&page=10\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    mini=\"true\"\n    page=\"10\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">监听change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-pagination/index?total=2000&step=5&page=10\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-pagination\n    total=\"2000\"\n    step=\"5\"\n    page=\"10\"\n    mx-change=\"show()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>","subs":[{"keys":["page"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-pagination/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>'(e) {
        console.log(e.page, e.size);
    },
    'test<click>'(e) {
        let page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popconfirm/__test__/index',["magix","../../mx-checkbox/linkage","../../mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../../mx-checkbox/linkage');
let GTip = require('../../mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popconfirm</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%><th>操作</th></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%><td><a href=\"#\" mx-enter=\"\u001f\u001edel({id:<%=i%>})\" mx-view=\"mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%EF%BC%9F\">删除</a></td></tr><%}%></tbody></table></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n            &lt;td&gt;&lt;a href=\"#\" mx-enter=\"del({id:&lt;%=i%&gt;})\" mx-view=\"mx-popconfirm/index\" view-content=\"确认删除？\"&gt;删除&lt;/a&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Linkage = require('../../mx-checkbox/linkage');\nlet GTip = require('../../mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Linkage,GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'del&lt;enter&gt;' (e) {\n        this.gtipRT('delete:' + e.params.id);\n    }\n});</pre></div>","subs":[],"file":"mx-popconfirm/__test__/index.html"},
    mixins: [Linkage, GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'del<enter>'(e) {
        this.gtipRT('delete:' + e.params.id);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popmenu/__test__/index',["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-popmenu___test___index_",".__mx-popmenu___test___index_-menu{\n    -webkit-box-shadow: 0 3px 3px #eee;\n            box-shadow: 0 3px 3px #eee;\n    list-style: none;\n    margin: 0;\n    border: 1px solid #e6e6e6;\n    border-radius: 4px;\n    position: relative;\n    background-color: #fff;\n}\n.__mx-popmenu___test___index_-menu-item {\n    color: #666;\n    display: block;\n    padding: 0 7px;\n    margin: 6px 10px;\n    height: 26px;\n    line-height: 26px;\n    border-radius: 4px;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.__mx-popmenu___test___index_-menu-item:hover {\n    color: #fff;\n    background-color: #8383eb;\n}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popmenu</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><button mx-guid=\"g0\u001f\" type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\">显示更多菜单</button><ul mx-guid=\"g1\u001f\" class=\"__mx-style_index_-none __mx-popmenu___test___index_-menu\" id=\"menu_<%=$$.viewId%>\"><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单1</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单2</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单3</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单4</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单5</li><li class=\"__mx-popmenu___test___index_-menu-item\" mx-click=\"\u001f\u001ehide()\">示例菜单6</li></ul></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand\" mx-view=\"app/gallery/mx-popmenu/index\" view-related=\"#menu_&lt;%=viewId%&gt;\"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class=\"none menu\" id=\"menu_&lt;%=viewId%&gt;\"&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'hide&lt;click&gt;' () {\n        $('#' + this.id + ' button').invokeView('&#x40;{hide}');\n    }\n});</pre></div>","subs":[{"keys":["viewId"],"path":"button[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["viewId"],"path":"ul[mx-guid=\"g1\u001f\"]","attr":"id=\"menu_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}],"file":"mx-popmenu/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>'() {
        $('#' + this.id + ' button').invokeView('@{hide}');
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-popover/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popover</h2><div class=\"__mx-style_index_-clearfix\" style=\"margin:100px\"><button class=\"__mx-style_index_-btn\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9\">提示右</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top\">提示上</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom\">提示下</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left\">提示左</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=top\">提示左顶部对齐</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=top\">提示右顶部对齐</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=left\">提示上左对齐</button><button class=\"__mx-style_index_-btn __mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=right\">提示上右对齐</button></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button class=\"btn\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"&gt;提示右&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"&gt;提示上&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"bottom\"&gt;提示下&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"left\"&gt;提示左&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"left\"\n    view-align=\"top\"&gt;提示左顶部对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"right\"\n    view-align=\"top\"&gt;提示右顶部对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"\n    view-align=\"left\"&gt;提示上左对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"\n    view-align=\"right\"&gt;提示上右对齐&lt;/button&gt;</pre></div>","subs":[],"file":"mx-popover/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-progress/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-progress</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-progress/index?value=0.36\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.36\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-progress/index?value=0.05&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div>","subs":[],"file":"mx-progress/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-slider/__test__/index',["magix","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">垂直</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&vertical=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"\n    vertical=\"true\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">响应change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowValue()\" class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/index?max=200&min=0&value=130&step=5\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"5\"\n    mx-change=\"showValue()\"\n    class=\"fl\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[],"file":"mx-slider/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showValue<change>'(e) {
        this.gtipRT('value:' + e.value);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-slider/__test__/range',["magix","mx-gtip/index","../range"],(require,exports,module)=>{
/*Magix,GTip*/
require("../range");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider.range</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">垂直</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    vertical=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">响应change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001eshowValue()\" class=\"__mx-style_index_-fl\" mx-view=\"mx-slider/range?max=500&min=200&value=210%2C350&step=10\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-slider.range\n    max=\"500\"\n    min=\"200\"\n    value=\"210,350\"\n    step=\"10\"\n    mx-change=\"showValue()\"\n    class=\"fl\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[{"keys":["vertical"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-slider/__test__/range.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>'(e) {
        this.gtipRT('value:' + e.value);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-suggest/__test__/index',["magix","mx-gtip/index","$","../index"],(require,exports,module)=>{
/*Magix,GTip,$*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-suggest</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g0\u001f\" class=\"__mx-style_index_-input\" style=\"width:200px\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">对象列表</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g1\u001f\" class=\"__mx-style_index_-input\" mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list1%&gt;\"\n    text-key=\"text\"\n    value-key=\"id\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: 'abc1',\n                id: 1\n            }, {\n                text: 'abc2',\n                id: 2\n            }, {\n                text: 'abc3',\n                id: 3\n            }, {\n                text: 'abc4',\n                id: 4\n            }, {\n                text: 'abc5',\n                id: 5\n            }, {\n                text: 'abc6',\n                id: 6\n            }, {\n                text: 'abc7',\n                id: 7\n            }, {\n                text: 'abc8',\n                id: 8\n            }, {\n                text: 'abc9',\n                id: 9\n            }, {\n                text: 'abc0',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">响应事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g2\u001f\" class=\"__mx-style_index_-input\" mx-pick=\"\u001f\u001eshowPick()\" mx-showlist=\"\u001f\u001eshowList()\" mx-hidelist=\"\u001f\u001ehideList()\" mx-view=\"mx-suggest/index?list=<%@$$.list%>\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"\n    mx-pick=\"showPick()\"\n    mx-showlist=\"showList()\"\n    mx-hidelist=\"hideList()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    'showPick&lt;pick&gt;' (e) {\n        this.gtipRT('选中：' + e.item);\n    },\n    'showList&lt;showlist&gt;' () {\n        this.gtipRT('列表展示');\n    },\n    'hideList&lt;hidelist&gt;' () {\n        this.gtipRT('列表关闭');\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">更新列表</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input mx-guid=\"g3\u001f\" class=\"__mx-style_index_-input\" mx-input=\"\u001f\u001eupdateList()\" mx-view=\"mx-suggest/index?list=<%@$$.list2%>\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-view\n    path=\"mx-suggest/index\"\n    tag=\"input\"\n    class=\"input\"\n    list=\"&lt;%@list2%&gt;\"\n    mx-input=\"updateList()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet $ = require('$');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    'updateList&lt;input&gt;' (e) {\n        let target = $(e.eventTarget);\n        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf('@') == -1) {\n                for (let a of list) {\n                    newList.push(v + '@' + a);\n                }\n            } else {\n                let parts = v.split('@');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + '@' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView('update', [newList]);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list1"],"path":"input[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list2"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-suggest/index?list=<%@$$.list2%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-suggest/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            list1: [{
                    text: 'abc1',
                    id: 1
                }, {
                    text: 'abc2',
                    id: 2
                }, {
                    text: 'abc3',
                    id: 3
                }, {
                    text: 'abc4',
                    id: 4
                }, {
                    text: 'abc5',
                    id: 5
                }, {
                    text: 'abc6',
                    id: 6
                }, {
                    text: 'abc7',
                    id: 7
                }, {
                    text: 'abc8',
                    id: 8
                }, {
                    text: 'abc9',
                    id: 9
                }, {
                    text: 'abc0',
                    id: 0
                }],
            list2: []
        });
    },
    'showPick<pick>'(e) {
        this.gtipRT('选中：' + e.item);
    },
    'showList<showlist>'() {
        this.gtipRT('列表展示');
    },
    'hideList<hidelist>'() {
        this.gtipRT('列表关闭');
    },
    'updateList<input>'(e) {
        let target = $(e.eventTarget);
        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];
        let v = $.trim(target.val());
        let newList = [];
        if (v) {
            if (v.indexOf('@') == -1) {
                for (let a of list) {
                    newList.push(v + '@' + a);
                }
            }
            else {
                let parts = v.split('@');
                for (let a of list) {
                    if (a.indexOf(parts[1]) >= 0) {
                        newList.push(parts[0] + '@' + a);
                    }
                }
            }
        }
        target.invokeView('update', [newList]);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-table/__test__/index',["magix","../../mx-checkbox/linkage","../sticky","../index","../attach","../rwd"],(require,exports,module)=>{
/*Magix,Linkage*/
require("../sticky");
require("../index");
require("../attach");
require("../rwd");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../../mx-checkbox/linkage');
Magix.applyStyle("__mx-table___test___index_",".__mx-table___test___index_-row-hover {\n  background: red;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-table</h2><h3>固定表头</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-table/sticky\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th colspan=\"3\">合并列测试</th><th colspan=\"3\">合并列测试</th></tr><tr><th><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example1\"></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example1\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-vframe src=\"app/gallery/mx-table/sticky\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">固定列</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-table/index?rwdRange=2%2C-1\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example2\"></th><%for(var i=0;i<25;i++){%><th style=\"width:200px\">示例字段<%=i%></th><%}%><th style=\"width:100px\">操作</th><th style=\"width:200px\">操作</th></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example2\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<25;j++){%><td>示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容<%=j%></td><%}%><td><a href=\"#\">删除</a><br><a href=\"#\">报告</a><br><%if(i%3){%><a href=\"#\">代码</a><br><a href=\"#\">备注</a><br><a href=\"#\">更多</a><br><%}%></td><td>adf</td></tr><%}%></tbody></table></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-table rwd-range=\"2,-1\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example2\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n                &lt;th style=\"width:100px\"&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example2\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n                &lt;td&gt;\n                    &lt;a href=\"#\"&gt;删除&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;报告&lt;/a&gt;&lt;br /&gt;\n                    &lt;%if(i%3){%&gt;\n                    &lt;a href=\"#\"&gt;代码&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;备注&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;更多&lt;/a&gt;&lt;br /&gt;\n                    &lt;%}%&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">固定列和表头</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-table/index?rwdRange=2%2C-2&sticky=true&rowHoverClass=__mx-table___test___index_-row-hover\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example3\"></th><%for(var i=0;i<25;i++){%><th style=\"width:200px\">示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example3\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<25;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-vframe src=\"app/gallery/mx-table/index\" rwd-range=\"2,-2\" sticky=\"true\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example3\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example3\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">自由组装</h3><div>当需要高度自定义时，可以使用该模式，按要求处理相应的内容即可</div><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-table/attach?sticky=true&rowHoverClass=__mx-table___test___index_-row-hover\"><div table-role=\"main\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\" style=\"width:4140px\"><thead><tr><th rowspan=\"2\" style=\"width:140px\"></th><th rowspan=\"2\" style=\"width:2600px\">eee</th><th colspan=\"2\">bb</th><th colspan=\"3\">xxxx</th><th colspan=\"2\"></th></tr><tr><th style=\"width:200px\">111</th><th style=\"width:200px\">111</th><th style=\"width:200px\">111</th><th style=\"width:200px\">111</th><th style=\"width:200px\">111</th><th style=\"width:200px\"></th><th style=\"width:200px\"></th></tr></thead><tbody><tr><td style=\"width:140px\"></td><td style=\"width:2600px\">1111</td><td style=\"width:200px\">2222</td><td style=\"width:200px\">333</td><td style=\"width:200px\">aaa</td><td style=\"width:200px\">1111</td><td style=\"width:200px\">2222</td><td style=\"width:200px\"></td><td style=\"width:200px\"></td></tr><tr><td></td><td>1111</td><td>2222</td><td>333<br>eeeeee</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr><tr><td></td><td>1111<br>aaaa</td><td>2222</td><td>333</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr></tbody></table></div><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\" table-role=\"left-sticky\" style=\"width:140px\"><thead><tr><th style=\"width:140px;height:85px\">aa</th></tr></thead><tbody><tr><td>aaa</td></tr><tr><td>aaa</td></tr><tr><td>aaa</td></tr></tbody></table><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\" style=\"width:400px\" table-role=\"right-sticky\"><thead><tr><th colspan=\"2\">测试</th></tr><tr><th style=\"width:200px\">测试1</th><th style=\"width:200px\">测试2</th></tr></thead><tbody><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr></tbody></table></div></div><div style=\"color:red\">使用该模式需要注意以下几点<br>1. 请注意下面模板中的table-role属性，其中table-role=\"main\"一定放在div上，紧跟其后的是左右固定列的表格<br>2. 3个表格(左右固定的表格可以根据需要进行删除，比如只留右侧固定)需要自己算出占用的实际宽度<br>3. 请确保3个表格的thead保持同样的高度</div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-table.attach sticky=\"true\"&gt;\n    &lt;div table-role=\"main\"&gt;\n        &lt;table class=\"table table-striped\" style=\"width:4140px\"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th rowspan=\"2\" style=\"width:140px\"&gt;&lt;/th&gt;\n                    &lt;th rowspan=\"2\" style=\"width:2600px\"&gt;eee&lt;/th&gt;\n                    &lt;th colspan=\"2\"&gt;bb&lt;/th&gt;\n                    &lt;th colspan=\"3\"&gt;xxxx&lt;/th&gt;\n                    &lt;th colspan=\"2\"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td style=\"width:140px\"&gt;&lt;/td&gt;\n                    &lt;td style=\"width:2600px\"&gt;1111&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;2222&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;333&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;aaa&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;1111&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;2222&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;br /&gt;eeeeee&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;br /&gt;aaaa&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/div&gt;\n    &lt;table class=\"table table-striped\" table-role=\"left-sticky\" style=\"width:140px;\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:140px;height:85px;\"&gt;aa&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class=\"table table-striped\" style=\"width:400px;\" table-role=\"right-sticky\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th colspan=\"2\"&gt;测试&lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:200px;\"&gt;测试1&lt;/th&gt;\n                &lt;th style=\"width:200px;\"&gt;测试2&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.attach&gt;</pre></div><h3 class=\"__mx-style_index_-mt30\">旧版</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-view=\"mx-table/rwd?rwdRange=2%2C-2\"><table class=\"__mx-style_index_-table __mx-style_index_-table-striped\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage=\"example4\"></th><%for(var i=0;i<25;i++){%><th style=\"width:200px\">示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type=\"checkbox\" class=\"__mx-style_index_-checkbox\" linkage-parent=\"example4\" value=\"ex1_<%=i%>\"></td><%for(var j=0;j<25;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-vframe src=\"app/gallery/mx-table/rwd\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example4\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example4\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div>","subs":[],"file":"mx-table/__test__/index.html"},
    mixins: [Linkage],
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-taginput/__test__/index',["magix","mx-gtip/index","../index"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-taginput</h2><h3>默认情形</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">默认选中</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    selected=\"&lt;%@ selected %&gt;\"\n    placeholder=\"请选择分类\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">禁用</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g2\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    selected=\"&lt;%@ selected %&gt;\"\n    placeholder=\"请选择分类\"\n    disabled=\"true\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">数据列表为对象</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g3\u001f\" class=\"__mx-style_index_-fl\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-taginput\n    list=\"&lt;%@ userList %&gt;\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    placeholder=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 class=\"__mx-style_index_-mt30\">change事件</h3><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-guid=\"g4\u001f\" mx-change=\"\u001f\u001eshowUserIds()\" class=\"__mx-style_index_-fl\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-taginput\n    list=\"&lt;%@ userList %&gt;\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    placeholder=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    mx-change=\"showUserIds()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10'],\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    'showUserIds&lt;change&gt;' (e) {\n        this.gtipRT('选中的用户ids:'+e.ids);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-taginput/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: [58782]
        });
    },
    'showUserIds<change>'(e) {
        this.gtipRT('选中的用户ids:' + e.ids);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-time/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div mx-change=\"\u001f\u001etest()\" mx-view=\"mx-time/index?time=00%3A12%3A13&type=minute%2Csecond\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-time\n    time=\"00:12:13\"\n    type=\"minute,second\"\n    mx-change=\"test()\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'test&lt;change&gt;' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-time/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>'(e) {
        console.log(e, e.time);
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-time/__test__/picker',["magix","../picker"],(require,exports,module)=>{
/*Magix*/
require("../picker");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time.picker</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><input value=\"18:26:00\" class=\"__mx-style_index_-input\" mx-view=\"mx-time/picker?types=hour%2Cminute\"></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-time.picker\n    value=\"18:26:00\"\n    class=\"input\"\n    types=\"hour,minute\" /&gt;</pre></div>","subs":[],"file":"mx-time/__test__/picker.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-tree/__test__/index',["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-tree</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\" style=\"margin-left:30px\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-tree/index?list=<%@$$.list%>\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-tree list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: 'abc'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: 'abc-abc'\n            }, {\n                id: 1,\n                pId: 0,\n                text: 'def'\n            }, {\n                id: 2,\n                pId: 1,\n                text: 'aaa'\n            }, {\n                id: 3,\n                pId: 2,\n                text: 'bbb'\n            }]\n        });\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-tree/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-tree/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            list: [{
                    id: 0,
                    pId: '',
                    text: 'abc'
                }, {
                    id: '0-0',
                    pId: '',
                    text: 'abc-abc'
                }, {
                    id: 1,
                    pId: 0,
                    text: 'def'
                }, {
                    id: 2,
                    pId: 1,
                    text: 'aaa'
                }, {
                    id: 3,
                    pId: 2,
                    text: 'bbb'
                }, {
                    id: 4,
                    pId: 2,
                    text: 'bbb'
                }, {
                    id: 5,
                    pId: 1,
                    text: 'aaa'
                }, {
                    id: 6,
                    pId: 1,
                    text: 'aaa'
                }]
        });
    }
});

});
/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-uploader/__test__/index',["magix","../index","mx-progress/index"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("mx-progress/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-uploader</h2><div class=\"__mx-style_index_-pt20 __mx-style_index_-clearfix\"><div class=\"__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-fl\" mx-view=\"mx-uploader/index?action=.%2Findex.html&name=file1&multiple=true\" mx-start=\"\u001f\u001eshowStart()\" mx-error=\"\u001f\u001eshowError()\" mx-success=\"\u001f\u001eshowSuccess()\" mx-progress=\"\u001f\u001eshowProgress()\">上传文件</div><div mx-guid=\"g0\u001f\" class=\"__mx-style_index_-fl __mx-style_index_-ml20\" mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"></div></div><div class=\"__mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;mx-uploader\n    class=\"btn btn-brand fl\"\n    action=\"./index.html\"\n    name=\"file1\"\n    multiple=\"true\"\n    mx-error=\"showError()\"\n    mx-success=\"showSuccess()\"\n    mx-progress=\"showProgress()\"\n&gt;上传文件&lt;/mx-uploader&gt;\n&lt;mx-progress value=\"&lt;%=percent%&gt;\" fixed=\"2\" class=\"fl ml20\" /&gt;</pre><div class=\"__mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    'showError&lt;error&gt;'(e) {\n        console.log(e.error);\n    },\n    'showSuccess&lt;success&gt;'(e) {\n        console.log(e.response);\n    },\n    'showProgress&lt;progress&gt;'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>","subs":[{"keys":["percent"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-uploader/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            showProgress: false,
            percent: 0
        });
    },
    'showError<error>'(e) {
        console.log(e.error);
    },
    'showSuccess<success>'(e) {
        console.log(e.response);
    },
    'showProgress<progress>'(e) {
        this.updater.digest({
            percent: e.percent
        });
    },
    'showStart<start>'(e) {
        console.log(e);
    }
});

});

});