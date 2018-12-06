/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/all",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle(["__mx-style_index_","@charset \"UTF-8\";\n/* @dependent: ./index.less */\n/* @dependent: ./index.less */\n/**\n* @file:      Neat.css\n* @author:    一丝\n* @update:    2016年08月10日22:05:05\n* @copyright: 基于 normalize.css | MIT License\n*/\n/**\n* Neat.css 解决的问题\n* 基于业务需要兼容的浏览器做到以下几点：\n* 1.解决BUG，特别是低级浏览器的常见BUG；\n* 2.统一效果，但不盲目追求重置为0；\n* 3.向后兼容；\n* 4.考虑响应式；\n* 5.考虑移动设备。\n*/\n/* ==========================================================================\n 有即是无，无即是有\n ========================================================================== */\nbody,\ndl,\ndd,\nul,\nol,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nfigure,\nhr,\nthead,\ntbody,\ntfoot,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\n/**\n* 非大面积文字排版网站通常不需要列表项，如果需要可单独设置\n*/\nul,\nol {\n  list-style-type: none;\n  list-style-image: none;\n}\n/* ==========================================================================\n 链接\n ========================================================================== */\n/**\n* 1. 去除链接默认的下划线，提高文字可读性\n* 2. 去掉 IE 10+ 点击链接时的灰色背景\n*/\na {\n  text-decoration: none;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n}\n/**\n* 去掉点击时的焦点框，同时保证使用键盘可以显示焦点框\n*/\na:active,\na:hover {\n  outline-width: 0;\n}\n/**\n* 统一 Chrome 和 Safari 的焦点框样式\n* Chrome 中 thin 关键字放大页面后焦点框不会放大 http://jsbin.com/ehakom/1\n* Firefox 中 box-shadow 会导致焦点框位置偏移，需用「outline-offset」修正\n*\n*/\na:focus {\n  outline: 1px dotted;\n}\n/* ==========================================================================\n 字体和基础排版\n ========================================================================== */\n/**\n* 1.防止 iOS 横屏字号放大，同时保证在PC上 zoom 功能正常\n*/\nhtml {\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  /* 1 */\n  font-size: 62.5%;\n  /* 10/16=62.5% */\n}\nbody {\n  font-size: 14px;\n  line-height: 1.8;\n}\n/**\n* 所有 font-family 小写，存在空格的字体名加单引号\n* @default-font: 'helvetica neue', tahoma, \\5B8B\\4F53, sans-serif;\n* @heading-font: 'helvetica neue', tahoma, 'hiragino sans gb', stheiti,\n  \\5FAE\\8F6F\\96C5\\9ED1, \\5B8B\\4F53, 'wenquanyi micro hei', sans-serif;\n* @code-font: monaco, menlo, consolas, monospace;\n*/\n/**\n* 中文优先使用冬青黑体简体(OS X)、微软雅黑(Windows)和文泉驿微米黑(Linux)\n* 西文使用 tahoma\n* 1. 防止元素中「font-family」不能继承\n* 2. 西文字体和 OS X 字体写在前面\n* 3. Opera 12.1 之前版本不支持中文字体的英文名称\n* 4. 微软雅黑「\\5FAE\\8F6F\\96C5\\9ED1」,中易宋体「\\5B8B\\4F53」\n*/\nbody,\nbutton,\ninput,\ntextarea {\n  font-family: 'helvetica neue', arial, 'hiragino sans gb', stheiti, 'wenquanyi micro hei', sans-serif;\n  -ms-text-autospace: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  /* 5 */\n  -ms-text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n      text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  /* 5 */\n}\n/**\n* 中文小于 12px 可读性很差\n* 1. 统一 IE 6-7 中字体大小\n* 2. 统一 Firefox 4+，Safari 5 和 Chrome 中「section」和「article」内的字体大小\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\n/**\n* 修正「abbr」元素在 Firefox 外其他浏览器没有下划线的问题\n* 添加问号光标，明确语义\n*/\n/*abbr,\nacronym {\n  border-bottom: 1px dotted;*/\n/* 1 */\n/*cursor: help;*/\n/* 2 */\n/*}*/\n/**\n* Firefox3+，Safari4/5 和 Chrome 中统一设置为粗体\n*/\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n* 修正 Safari5 和 Chrome 中没有样式的问题\n*/\n/*dfn {\n  font-style: italic;\n}*/\n/**\n* 修正 Firefox 和其他浏览器之间的差异\n*/\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n* 网页标记，荧光笔\n* 修正 IE6-11 中没有样式的问题\n*/\n/*mark {\n  background-color: #d2e5ff;\n  color: #000;\n}*/\n/**\n* 统一代码的字体设置\n* 字体要能明确区分数字 0 和字母 o\n* Mac 优先使用 Monaco，Windows 优先使用 Consolas\n* XP自带 Courier New\n* Windows 7开始自带的 Consolas\n* Mac上自带的Monaco，Osaka-Mono\n*/\n/*code\nkbd,\npre,\nsamp {\n  font-family: monaco, menlo, consolas, 'courier new', courier, monospace;\n}\n*/\n/**\n* 增强所有浏览器中 pre 标签中文本的可读性\n* 1. IE 6-7 不支持 pre-wrap\n* 2. pre 标签应当包含滚溢出\n*/\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  /* 1 */\n  word-wrap: break-word;\n  overflow: auto;\n}\n/**\n* 行内引用\n* IE 6-7 不支持 quotes 属性\n* 现代浏览器去除 quotes 内容\n*/\nq {\n  quotes: none;\n}\n/**\n* Safari 4 不支持<q>标签\n*/\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n/**\n* 中文网页<small>元素字号小于 12px 不易阅读\n*/\nsmall {\n  font-size: 85.7%;\n  /* 12/14=0.8571428571 */\n}\n/**\n* 防止所有浏览器中的<sub>和<sup>影响行高\n* http://jsbin.com/usoyal/1/edit\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* ==========================================================================\n 表格\n ========================================================================== */\n/**\n* 合并单元格边框\n*/\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/**\n* 修复 IE 中 th 不能继承 text-align 的问题并统一左对齐\n* http://jsbin.com/evoxif/2/edit\n*/\nth {\n  text-align: left;\n}\n/**\n* 单元格添加边框\n*/\nth,\ntd {\n  border: 1px solid #ddd;\n  padding: 8px 10px;\n}\n/**\n* 表头底部边框\n*/\nth {\n  font-weight: inherit;\n  border-bottom-width: 2px;\n  border-bottom-color: #ccc;\n}\n/* ==========================================================================\n 嵌入元素\n ========================================================================== */\n/**\n* 1. 去除 IE6-9 和 Firefox 3 中 a 内部 img 元素默认的边框\n* 2. 修正 IE8 图片消失bug\n* 3. 防止 img 指定「height」时图片高度不能按照宽度等比缩放，导致图片变形\n    http://jsbin.com/aJoTUca/2\n* 4. 让图片支持响应式\n* 5. 去除现代浏览器图片底部的空隙\n* 6. 修复 IE7 图片缩放失真\n*/\nimg {\n  border-style: none;\n  /* 1 */\n  width: auto\\9;\n  /* 2 */\n  height: auto;\n  /* 3 */\n  max-width: 100%;\n  /* 4 */\n  vertical-align: top;\n  /* 5 */\n  -ms-interpolation-mode: bicubic;\n  /* 6 */\n}\n/**\n* 修复 IE9 中的「overflow」的怪异表现\n*/\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* ==========================================================================\n 表单\n ========================================================================== */\n/**\n* 定义一致的边框、外边距和内边距\n*/\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n* 1. 修正 IE 6-9 中颜色不能继承的问题\n* 2. 修正 Firefox3 中文字不换行的问题\n* 3. 修正 IE6-7 中怪异的对齐方式\n*/\nlegend {\n  border-style: none;\n  /* 1 */\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n/**\n* 1. 修正所有浏览器中字体不继承的问题\n* 2. 修正所有浏览器中字号不继承的问题\n* 3. 修正 Firefox 3+， Safari5 和 Chrome 中外边距不同的问题\n* 4. 改善在所有浏览器下的垂直对齐方式\n*/\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  vertical-align: middle;\n  /* 4 */\n  *vertical-align: middle;\n  /* 4 */\n}\n/**\n* 修正 IE7 随着字数增加边距不断增加的问题\n*/\ninput,\nbutton {\n  *overflow: visible;\n}\n/**\n* 统一各浏览器「text-transform」不会继承的问题\n* http://jsbin.com/iqecic/1/edit\n* http://tjvantoll.com/2012/07/10/default-browser-handling-of-the-css-text-transform-property/\n*/\nbutton {\n  text-transform: none;\n}\n/**\n* 1. 避免 Android 4.0.* 中的 WebKit bug ，该bug会破坏原生的\n 「audio」 和「video」的控制器\n* 2. 更正 iOS 中无法设置可点击的「input」的问题\n* 3. 统一其他类型的「input」的光标样式\n*/\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n     -moz-appearance: button;\n          appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n* 重置按钮禁用时光标样式\n*/\nbutton[disabled],\ninput[disabled] {\n  cursor: not-allowed;\n}\n/**\n* 1. 修正 IE 8/9 box-sizing 被设置为「content-box」的问题\n* 2. 移除 IE 8/9 中多余的内边距\n* 3. 移除 IE7 中多余的内边距(IE6 中任然存在)\n*/\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n/**\n* 1. 修正 Safari 5 和 Chrome 中「appearance」被设置为「searchfield」的问题\n* 2. 修正 Safari 5 和 Chrome 中「box-sizing」被设置为 「border-box」的问题\n*/\n/*input[type=\"search\"] {\n  -webkit-appearance: textfield;*/\n/* 1 */\n/*  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n*/\n/**\n* 1.移除 OS X 中 Safari5 和 Chrome 搜索框内侧的左边距\n* 2.如果需要隐藏清除按钮需要加上\n input[type=\"search\"]::-webkit-search-cancel-button\n*/\n/*input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}*/\n/**\n* 移除 Firefox 3+ 的内边距\n*/\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n* 修正 Chrome 中 input [type=\"number\"] 在特定高度和 font-size 时,\n* 下面一个箭头光标变成「cursor: text」\n* @demo: http://jsfiddle.net/FFXEc/\n* 动画演示：http://gtms04.alicdn.com/tps/i4/T18kd8FCtaXXc_FhcF-330-350.gif\n*/\n/*input[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}*/\n/**\n* 1. 移除 IE6-11 中默认的垂直滚动条\n* 2. 禁止水平拖动，防止破坏布局\n*/\ntextarea {\n  overflow: auto;\n  /* 1 */\n  resize: vertical;\n  /* 2 */\n}\n/**\n* 修正 Chrome 30- option 中文字无法显示的问题\n* http://jsbin.com/avujas/1/edit\n*/\n/*select:disabled option:checked,\noption:disabled:checked {\n  color: #d2d2d2;\n}*/\n/**\n* 修正 Safari 3+, Chrome 1+ Placeholder 居中问题\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input {\n    line-height: normal !important;\n  }\n}\n/**\n* 修正 Firefox 19+ Placeholder 设置了opacity 的问题\n*/\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: darkGray;\n  opacity: 1;\n}\n/**\n* label 元素给予手型，暗示此处可点击\n*/\nlabel {\n  cursor: pointer;\n}\n/**\n* 统一 select 样式, Firefox 中有 padding:1px 0\n* http://jsbin.com/avujas/1/edit\n*/\n/*select[size],\nselect[multiple],\nselect[size][multiple] {\n  border: 1px solid #aaa;\n  padding: 0;\n}*/\n/* ==========================================================================\n HTML5 元素\n ========================================================================== */\n/**\n* 修正未定义为「block」的元素\n*/\n/*article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n*/\n/**\n* 1. 修正未定义为「inline-block」的元素\n* 2. 修正 Chrome、Firefox、Opera 中 「progress」元素 vertical-align 默认值不一致\n*/\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n* 1.防止现代浏览器将没有「controls」属性的 「audio」元素显示出来\n* 2.去掉 iOS 5 中多余的高度\n*/\n/*audio:not([controls]) {\n  display: none;\n  /* 1 */\n/*height: 0;*/\n/* 2 */\n/*}*/\n/**\n* 修复 IE 7/8/9，Firefox 3 和 Safari 4 中 「hidden」属性不起作用的问题\n* 在IE、Safari、Firefox 22- 中隐藏「template」元素\n*/\n/*[hidden], template {\n  display: none;\n}\n*/\n/**\n* 为可拖动元素添加拖动的光标\n* http://jsbin.com/apavod/1/edit\n*/\n/*[draggable] {\n  cursor: move;\n}\n*/\n/* @dependent: ./index.less */\nhtml {\n  box-sizing: border-box;\n}\n* {\n  box-sizing: inherit;\n}\n*:before,\n*:after {\n  box-sizing: inherit;\n}\ninput:focus,\ntextarea:focus,\na:focus,\nbutton:focus {\n  outline: none;\n  resize: none;\n}\na {\n  color: #f96447;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #d43b1c;\n}\na:hover,\na:focus,\na:active,\na:visited {\n  outline: 0;\n  text-decoration: none;\n}\nlabel {\n  cursor: default;\n  display: inline-block;\n  max-width: 100%;\n  font-weight: 400;\n}\n/* @dependent: ./index.less */\n@font-face {\n  font-family: '__mx-style_index_-mc-iconfont';\n  /* project id 386526 */\n  src: url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAcsAAsAAAAACqQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXOEjOY21hcAAAAYAAAACWAAACCs4hbhBnbHlmAAACGAAAAugAAAO0BG1azWhlYWQAAAUAAAAALwAAADYPpP4TaGhlYQAABTAAAAAcAAAAJAfeA4pobXR4AAAFTAAAABQAAAAkI+kAAGxvY2EAAAVgAAAAFAAAABQEcAVsbWF4cAAABXQAAAAfAAAAIAEYAF1uYW1lAAAFlAAAAUUAAAJtPlT+fXBvc3QAAAbcAAAATwAAAGizaRo4eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/ss4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDy7z9zwv4EhhrmB4RRQmBEkBwA4Ig2aeJzFkbsNwzAMRE+RP0IQwEEG8AReyl1Kl+68g5Eqy7m7NZyj6EZI6viEJ4AnkRJIADWAKAZRAeGNANNLbsh+xDX7FZ6KH7jLuWBmYseeIxeu3PZdZ7+8UkH55TIvIql6raoNWhnNV97fFM57utQt79MRJTEf6ItMjk2OnWN32Ds2SY6OTZiLow6Dq6Neg5uD9gPbdC1VAAB4nH1SO2sUURi9370zd3Zmd+48dh77yr4mO7MmutlsxkkR3DQ2GgtBCAhaCBY2SrAwjUUw5CEo+A/EoAgR1LBpArEUQVBs3MrCYEAbY+xsMnpHV0ghDsM9936cj+9xDhIR+rlDtkkOZVETjaOT6CxCQEehzvAQ1IKwhUfBrom2azESeEFN8uotcgLcOrWcThT6LpWoBgzKMFHrREELB3A87OIp6DhDAPli4ZzZKJnkHii5oLwUn8ZrYFe8ktY9Fp86Om11qtnUfMY086Z5J0VFMYWxoDG46jqyKCs0fihqBXu7cgRXIJMPCmfOq9WieWk1vDbUcGWAhQXIFqvs8bRRMPh/s+Bkzbykq6lcQfWGLZjfTeeymSH/E+If5rNG5AfxURpNJVMiyUFuhCZ9RFzH0oDWx8CvDzCchigcYKcCTmeACc/CqB/vUgqlfh9KlMa7ZxYZa2gNbZH5bJFjg7FFVf1XkPic3j+UfrD3/4RDwT8z3CIH5AbKowZCYuAHXTjegoCBVAa3E006Sa9R2OCxLkzyGAPy9aMkj7bFvc3NPZGfM0uRIH00RqoHmys9Qnorv09vRxKipZneN0H41uPE9qgs7WjVkZecsNwThN7ySg8Br79AhskC9wuSsWPRegCuH062x/l6HIvY8Syss3JTizWPMXirNctkJJ6NZ/mFwXdPa+rwRis3uR6QiEIu4s9cDwQ1wzNqds2YMGrkQry/Gu+Dvgo69EEfvNDfHPwS9pL6v8UKfG7FSuK/KFEMvxBNae0+NTPicyKTtLghwhdRXFsTlaz0jAhAN4j5t/YsbCGCUJbXfYLXD/jz+sAn78lrMoJaaIxTJcpXym3uJbbg6rcwLzQGLegCv0xz6CRL5z1gKpGtR7oQYJpWtUz6nW2/UosOg7agP1Uk2WKfnPQV6pZcejntfGaWLCnw4K7h7Kp2SqZzijInYd1Wv7j6baVQNHBTsD5kNC3zwRKa2CgWFN7eL0lutBh4nGNgZGBgAGLnEJdv8fw2Xxm4WRhA4JrTXQME/d+MhYG5AcjlYGACiQIAFvYJkgB4nGNgZGBgbvjfwBDDwgACQJKRARVwAgBHDwJyeJxjYWBgYH7JwMDCgBsDAB8LAQ0AAAAAAHYA2AEYAT4BWAF8AYoB2nicY2BkYGDgZAhkYGUAASYg5gJCBob/YD4DABGZAXYAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicbccxDoAgDAXQfkQEbsOR6gLVpAykCeH0xrj6tkeOPpn+JThs8NgRcCAiIRNmqMZ6ShjdhvU4hbUu6/4SLnE11pulvFM/RSvRA98yEWMA') format('woff');\n}\n.__mx-style_index_-mc-iconfont {\n  font-family: \"__mx-style_index_-mc-iconfont\";\n  line-height: 1;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  display: inline-block;\n  speak: none;\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* @dependent: ./index.less */\n.__mx-style_index_-mt5 {\n  margin-top: 5px;\n}\n.__mx-style_index_-mt10 {\n  margin-top: 10px;\n}\n.__mx-style_index_-mt15 {\n  margin-top: 15px;\n}\n.__mx-style_index_-mt20 {\n  margin-top: 20px;\n}\n.__mx-style_index_-mt25 {\n  margin-top: 25px;\n}\n.__mx-style_index_-mt30 {\n  margin-top: 30px;\n}\n.__mx-style_index_-mr5 {\n  margin-right: 5px;\n}\n.__mx-style_index_-mr10 {\n  margin-right: 10px;\n}\n.__mx-style_index_-mr15 {\n  margin-right: 15px;\n}\n.__mx-style_index_-mr20 {\n  margin-right: 20px;\n}\n.__mx-style_index_-mr25 {\n  margin-right: 25px;\n}\n.__mx-style_index_-mr30 {\n  margin-right: 30px;\n}\n.__mx-style_index_-mb5 {\n  margin-bottom: 5px;\n}\n.__mx-style_index_-mb10 {\n  margin-bottom: 10px;\n}\n.__mx-style_index_-mb15 {\n  margin-bottom: 15px;\n}\n.__mx-style_index_-mb20 {\n  margin-bottom: 20px;\n}\n.__mx-style_index_-mb25 {\n  margin-bottom: 25px;\n}\n.__mx-style_index_-mb30 {\n  margin-bottom: 30px;\n}\n.__mx-style_index_-ml5 {\n  margin-left: 5px;\n}\n.__mx-style_index_-ml10 {\n  margin-left: 10px;\n}\n.__mx-style_index_-ml15 {\n  margin-left: 15px;\n}\n.__mx-style_index_-ml20 {\n  margin-left: 20px;\n}\n.__mx-style_index_-ml25 {\n  margin-left: 25px;\n}\n.__mx-style_index_-ml30 {\n  margin-left: 30px;\n}\n.__mx-style_index_-pt5 {\n  padding-top: 5px;\n}\n.__mx-style_index_-pt10 {\n  padding-top: 10px;\n}\n.__mx-style_index_-pt15 {\n  padding-top: 15px;\n}\n.__mx-style_index_-pt20 {\n  padding-top: 20px;\n}\n.__mx-style_index_-pt25 {\n  padding-top: 25px;\n}\n.__mx-style_index_-pt30 {\n  padding-top: 30px;\n}\n.__mx-style_index_-pr5 {\n  padding-right: 5px;\n}\n.__mx-style_index_-pr10 {\n  padding-right: 10px;\n}\n.__mx-style_index_-pr15 {\n  padding-right: 15px;\n}\n.__mx-style_index_-pr20 {\n  padding-right: 20px;\n}\n.__mx-style_index_-pr25 {\n  padding-right: 25px;\n}\n.__mx-style_index_-pr30 {\n  padding-right: 30px;\n}\n.__mx-style_index_-pb5 {\n  padding-bottom: 5px;\n}\n.__mx-style_index_-pb10 {\n  padding-bottom: 10px;\n}\n.__mx-style_index_-pb15 {\n  padding-bottom: 15px;\n}\n.__mx-style_index_-pb20 {\n  padding-bottom: 20px;\n}\n.__mx-style_index_-pb25 {\n  padding-bottom: 25px;\n}\n.__mx-style_index_-pb30 {\n  padding-bottom: 30px;\n}\n.__mx-style_index_-pl5 {\n  padding-left: 5px;\n}\n.__mx-style_index_-pl10 {\n  padding-left: 10px;\n}\n.__mx-style_index_-pl15 {\n  padding-left: 15px;\n}\n.__mx-style_index_-pl20 {\n  padding-left: 20px;\n}\n.__mx-style_index_-pl25 {\n  padding-left: 25px;\n}\n.__mx-style_index_-pl30 {\n  padding-left: 30px;\n}\n.__mx-style_index_-wp100 {\n  width: 100%;\n}\n.__mx-style_index_-hp100 {\n  height: 100%;\n}\n.__mx-style_index_-tr {\n  text-align: right;\n}\n.__mx-style_index_-tl {\n  text-align: left;\n}\n.__mx-style_index_-tc {\n  text-align: center;\n}\n.__mx-style_index_-fl {\n  float: left;\n}\n.__mx-style_index_-fr {\n  float: right;\n}\nhtml .__mx-style_index_-ib {\n  display: inline-block;\n}\n.__mx-style_index_-cp {\n  cursor: pointer;\n}\n.__mx-style_index_-cm {\n  cursor: move;\n}\n.__mx-style_index_-pa {\n  position: absolute;\n}\n.__mx-style_index_-pr {\n  position: relative;\n}\nhtml .__mx-style_index_-none {\n  display: none;\n}\n.__mx-style_index_-clearfix:before,\n.__mx-style_index_-clearfix:after {\n  content: \" \";\n  display: table;\n}\n.__mx-style_index_-clearfix:after {\n  clear: both;\n}\n.__mx-style_index_-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  overflow: auto;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar-thumb {\n  background-color: #cccccc;\n  border-radius: 6px;\n  height: 30px;\n  border: 2px solid #e5e5e5;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar-thumb:hover {\n  background-color: #6a6a6a;\n}\n.__mx-style_index_-scrollable::-webkit-scrollbar-track {\n  background-color: #e5e5e5;\n}\n.__mx-style_index_-ellipsis {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.__mx-style_index_-disabled {\n  color: #d2d2d2;\n  cursor: not-allowed;\n}\n/* @dependent: ./index.less */\n.__mx-style_index_-btn {\n  outline: none;\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  background-color: #eaeaea;\n  white-space: nowrap;\n  padding: 9px 14px;\n  font-size: 14px;\n  line-height: 1;\n  border: 0;\n  color: #333;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.__mx-style_index_-btn:hover,\n.__mx-style_index_-btn:focus {\n  background-color: #ccc;\n  color: #333;\n}\n.__mx-style_index_-btn-brand {\n  background-color: #f96447;\n  color: #fff;\n}\n.__mx-style_index_-btn-brand:hover,\n.__mx-style_index_-btn-brand:focus {\n  background-color: #d43b1c;\n  color: #fff;\n}\n.__mx-style_index_-btn[disabled] {\n  background-color: #fbfbfb;\n}\n.__mx-style_index_-btn[disabled]:hover {\n  border-color: #e6e6e6;\n}\n/* @dependent: ./index.less */\n::-webkit-input-placeholder {\n  color: #999;\n}\n::-ms-input-placeholder {\n  color: #999;\n}\n::placeholder {\n  color: #999;\n}\n::-moz-selection {\n  background-color: rgba(243, 123, 99, 0.6);\n}\n::selection {\n  background-color: rgba(243, 123, 99, 0.6);\n}\n.__mx-style_index_-input,\n.__mx-style_index_-textarea {\n  caret-color: #f96447;\n  display: inline-block;\n  height: 32px;\n  padding: 6px 9px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  box-shadow: none;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  color: #333;\n  width: 340px;\n  vertical-align: middle;\n  max-width: 100%;\n}\n.__mx-style_index_-input:hover,\n.__mx-style_index_-textarea:hover {\n  border-color: #ccc;\n}\n.__mx-style_index_-input:focus,\n.__mx-style_index_-input-focus,\n.__mx-style_index_-textarea:focus {\n  border-color: #f96447 !important;\n}\n.__mx-style_index_-input-focus:hover {\n  border-color: #f96447 !important;\n}\n.__mx-style_index_-textarea {\n  height: auto;\n}\n.__mx-style_index_-input[disabled],\n.__mx-style_index_-textarea[disabled] {\n  background-color: #fbfbfb;\n}\n.__mx-style_index_-input[disabled]:hover,\n.__mx-style_index_-textarea[disabled]:hover {\n  border-color: #e6e6e6;\n}\n.__mx-style_index_-checkbox,\n.__mx-style_index_-radio {\n  width: 14px;\n  height: 14px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  vertical-align: middle;\n  border-radius: 2px;\n  transition: all 0.25s;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.__mx-style_index_-radio {\n  border-radius: 50%;\n}\n.__mx-style_index_-checkbox:checked,\n.__mx-style_index_-checkbox:indeterminate,\n.__mx-style_index_-radio:checked {\n  background-color: #f96447;\n  border-color: #f96447;\n}\n.__mx-style_index_-checkbox:checked:after {\n  content: '';\n  display: block;\n  margin: 1px auto;\n  height: 8px;\n  width: 5px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  -webkit-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n}\n.__mx-style_index_-checkbox:indeterminate:after {\n  content: '';\n  display: block;\n  height: 2px;\n  width: 8px;\n  margin: 40% auto;\n  background-color: #fff;\n}\n.__mx-style_index_-radio:checked:after {\n  content: '';\n  display: block;\n  height: 4px;\n  width: 4px;\n  border-radius: 50%;\n  margin: 4px auto;\n  background-color: #fff;\n}\n.__mx-style_index_-checkbox:disabled,\n.__mx-style_index_-radio:disabled {\n  background-color: #fbfbfb;\n  border-color: #e6e6e6;\n}\n.__mx-style_index_-checkbox:disabled:after {\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.__mx-style_index_-radio:disabled:after,\n.__mx-style_index_-checkbox:indeterminate:disabled:after {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n.__mx-style_index_-switch {\n  width: 42px;\n  height: 21px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  vertical-align: middle;\n  border-radius: 10.5px;\n  background-color: #eaeaea;\n  margin-right: 8px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.25s;\n}\n.__mx-style_index_-switch:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 17px;\n  width: 17px;\n  background: #fff;\n  margin: 2px;\n  transition: all 0.25s;\n  border-radius: 50%;\n  left: 0;\n}\n.__mx-style_index_-switch:disabled,\n.__mx-style_index_-switch:disabled:checked {\n  background-color: #fbfbfb;\n}\n.__mx-style_index_-switch:checked:after {\n  margin-left: -20px;\n  left: 100%;\n}\n.__mx-style_index_-switch:checked {\n  background-color: #f96447;\n}\n.__mx-style_index_-form-item {\n  margin-bottom: 22px;\n}\n.__mx-style_index_-form-label {\n  height: 32px;\n  line-height: 32px;\n  text-align: right;\n  width: 140px;\n  vertical-align: top;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.__mx-style_index_-form-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: \"*\";\n  font-family: SimSun;\n  line-height: 1;\n  color: #f04134;\n}\n.__mx-style_index_-form-content {\n  display: inline-block;\n  position: relative;\n  min-height: 32px;\n  line-height: 32px;\n  margin-left: 15px;\n}\n.__mx-style_index_-form-footer {\n  margin-left: 155px;\n}\n/* @dependent: ./index.less */\n/*\n* 表格\n* @ name:        table.css V1.0.0\n* @ author:      一丝\n* @ update:      2014-1-8 19:34:24;\n*/\n.__mx-style_index_-table {\n  width: 100%;\n  border: solid 1px #e6e6e6;\n}\n/**\n* 只显示水平边框\n* .table\n*/\n.__mx-style_index_-table th {\n  border: 0 none;\n  border-bottom: 2px solid #e6e6e6;\n  font-weight: bold;\n}\n.__mx-style_index_-table td {\n  border: 0 none;\n  border-top: 1px solid #e6e6e6;\n}\n/**\n* 隔行换色\n* .table-striped\n*/\n.__mx-style_index_-table-striped tbody tr:nth-child(odd) td {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.__mx-style_index_-table tfoot td {\n  padding: 0;\n}\n/* @dependent: ./index.less */\n.__mx-style_index_-loading {\n  padding: 150px 0;\n  margin: 0 auto;\n  width: 150px;\n  text-align: center;\n  line-height: 0;\n}\n.__mx-style_index_-loading:before,\n.__mx-style_index_-loading:after {\n  content: \"\";\n}\n.__mx-style_index_-loading-anim,\n.__mx-style_index_-loading:after,\n.__mx-style_index_-loading:before {\n  width: 14px;\n  height: 14px;\n  background-color: #eaeaea;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: __mx-style_index_-sk-bouncedelay 1s infinite ease-in-out both;\n          animation: __mx-style_index_-sk-bouncedelay 1s infinite ease-in-out both;\n}\n.__mx-style_index_-loading:before {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n}\n.__mx-style_index_-loading-anim {\n  margin: 0 10px;\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n}\n@-webkit-keyframes __mx-style_index_-sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes __mx-style_index_-sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n/* @dependent: ./index.less */\n.__mx-style_index_-dialog-header {\n  padding: 15px 40px;\n  border-bottom: 1px solid #e6e6e6;\n  color: #333;\n  margin: 0;\n  line-height: 1.42857143;\n}\n.__mx-style_index_-dialog-body {\n  padding: 18px 40px;\n}\n.__mx-style_index_-dialog-footer {\n  padding: 15px 40px;\n  text-align: left;\n  border-top: 1px solid #e6e6e6;\n}\n"]);
Magix.applyStyle("____test___all_","/*.left{\n    width:200px;\n    float:left;\n}\n.item{\n    height: 30px;\n    line-height: 30px;\n    padding:0 10px;\n}*/\n/* line 11, tmpl/__test__/all.scss */\n.____test___all_-main {\n  padding: 50px; }\n\n/* line 15, tmpl/__test__/all.scss */\n.____test___all_-inline h3 {\n  font-size: 16px; }\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', inline = $$.inline, view = $$.view; var $expr, $art, $line; try {
    $p += '<div class="';
    $expr = '<%if (inline) {%>';
    if (inline) {
        ;
        $p += '____test___all_-inline';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '____test___all_-main';
        $expr = '<%}%>';
    }
    ;
    $p += '" mx-view="' + ($expr = '<%=view%>', $e(view)) + '"><div mxs="__:_" class="__mx-style_index_-loading"><span class="__mx-style_index_-loading-anim"></span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/all.html';
    throw msg;
} return $p; },
    init: function () {
        this.observeLocation({
            path: true
        });
        this.owner.on('created', function () {
            // $('pre').each((i, it) => {
            //     if (!it.rendered) {
            //         it.rendered = true;
            //         hljs.highlightBlock(it);
            //     }
            // });
            var loc = Magix.Router.parse();
            if (loc.get('inline')) {
                $('h2').remove();
                var h = $(document).height();
                parent.postMessage({
                    type: 'magix',
                    id: loc.get('id'),
                    height: h + 30
                }, '*');
            }
        });
    },
    render: function () {
        window.scrollTo(0, 0);
        var me = this;
        var loc = Magix.Router.parse();
        var view = loc.path;
        view = view.slice(1);
        if (view == 'list') {
            view = '__test__/list';
        }
        else {
            var i = view.indexOf('/');
            view = view.slice(0, i) + '/__test__' + view.slice(i);
        }
        me.updater.digest({
            inline: loc.get('inline'),
            view: view
        });
    }
});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/hl",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    assign: function (data, ops) {
        ops.deep = false;
        if (ops.html) {
            $('#' + this.id).html(ops.inner);
        }
        return ops.html;
    },
    render: function () {
        var node = Magix.node(this.id);
        hljs.highlightBlock(node);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/list",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<a mxs="_a:_" href="#!/mx-calendar/index">mx-calendar/index(日历)</a><br mxs="_a:a"/><a mxs="_a:b" href="#!/mx-calendar/datepicker">mx-calendar/datepicker(日期选择)</a><br mxs="_a:a"/><a mxs="_a:c" href="#!/mx-calendar/rangepicker">mx-calendar/rangepicker(日期范围选择)</a><br mxs="_a:a"/><a mxs="_a:d" href="#!/mx-carousel/index">mx-carousel/index(轮播图)</a><br mxs="_a:a"/><a mxs="_a:e" href="#!/mx-checkbox/linkage">mx-checkbox/linkage(联动)</a><br mxs="_a:a"/><a mxs="_a:f" href="#!/mx-checkbox/storestate">mx-checkbox/storestate(保存状态)</a><br mxs="_a:a"/><a mxs="_a:g" href="#!/mx-color/index">mx-color/index(颜色)</a><br mxs="_a:a"/><a mxs="_a:h" href="#!/mx-color/picker">mx-color/picker(颜色选择)</a><br mxs="_a:a"/><a mxs="_a:i" href="#!/mx-copy/index">mx-copy/index(复制)</a><br mxs="_a:a"/><a mxs="_a:j" href="#!/mx-day/index">mx-day/index(快速日期选择)</a><br mxs="_a:a"/><a mxs="_a:k" href="#!/mx-dialog/alert">mx-dialog/alert(alert与confirm)</a><br mxs="_a:a"/><a mxs="_a:l" href="#!/mx-dialog/index">mx-dialog/index(加载普通view)</a><br mxs="_a:a"/><a mxs="_a:m" href="#!/mx-dragselect/index">mx-dragselect/index(拖动选取)</a><br mxs="_a:a"/><a mxs="_a:n" href="#!/mx-dragsort/index">mx-dragsort/index(拖动排序)</a><br mxs="_a:a"/><a mxs="_a:o" href="#!/mx-dropdown/index">mx-dropdown/index(单选下拉框)</a><br mxs="_a:a"/><a mxs="_a:p" href="#!/mx-dropdown/multiple">mx-dropdown/multiple(多选下拉框)</a><br mxs="_a:a"/><a mxs="_a:q" href="#!/mx-effect/count">mx-effect/count(效果库,数字动态改变)</a><br mxs="_a:a"/><a mxs="_a:r" href="#!/mx-effect/dance">mx-effect/dance(效果库,文字显示效果)</a><br mxs="_a:a"/><a mxs="_a:s" href="#!/mx-effect/scroll">mx-effect/scroll</a><br mxs="_a:a"/><a mxs="_a:t" href="#!/mx-footer/index">mx-footer/index(阿里妈妈通用页脚完整版)</a><br mxs="_a:a"/><a mxs="_a:u" href="#!/mx-footer/index?mode=simple">mx-footer/index?mode=simple(阿里妈妈通用页脚精简版)</a><br mxs="_a:a"/><a mxs="_a:v" href="#!/mx-form/index">mx-form/index(表单)</a><br mxs="_a:a"/><a mxs="_a:w" href="#!/mx-gtip/index">mx-gtip/index(提示)</a><br mxs="_a:a"/><a mxs="_a:x" href="#!/mx-hour/day">mx-hour/day(天小时)</a><br mxs="_a:a"/><a mxs="_a:y" href="#!/mx-hour/week">mx-hour/week(周小时)</a><br mxs="_a:a"/><a mxs="_a:z" href="#!/mx-linkage/index">mx-linkage/index(联动选择)</a><br mxs="_a:a"/><a mxs="_a:A" href="#!/mx-loading/mask">mx-loading/mask(加载动画)</a><br mxs="_a:a"/><a mxs="_a:B" href="#!/mx-menu/index">mx-menu/index</a><br mxs="_a:a"/><a mxs="_a:C" href="#!/mx-number/index">mx-number/index</a><br mxs="_a:a"/><a mxs="_a:D" href="#!/mx-pagination/index">mx-pagination/index(分页)</a><br mxs="_a:a"/><a mxs="_a:E" href="#!/mx-popconfirm/index">mx-popconfirm/index</a><br mxs="_a:a"/><a mxs="_a:F" href="#!/mx-popmenu/index">mx-popmenu/index</a><br mxs="_a:a"/><a mxs="_a:G" href="#!/mx-popover/index">mx-popover/index</a><br mxs="_a:a"/><a mxs="_a:H" href="#!/mx-progress/index">mx-progress/index</a><br mxs="_a:a"/><a mxs="_a:I" href="#!/mx-rating/index">mx-rating/index</a><br mxs="_a:a"/><a mxs="_a:J" href="#!/mx-sitenav/index">mx-sitenav/index(阿里妈妈站点通用吊顶)</a><br mxs="_a:a"/><a mxs="_a:K" href="#!/mx-sitenav/index?mode=simple">mx-sitenav/index?mode=simple(阿里妈妈站点通用吊顶简洁版)</a><br mxs="_a:a"/><a mxs="_a:L" href="#!/mx-slider/index">mx-slider/index(滑块)</a><br mxs="_a:a"/><a mxs="_a:M" href="#!/mx-slider/range">mx-slider/range(范围滑块)</a><br mxs="_a:a"/><a mxs="_a:N" href="#!/mx-speech/index">mx-speech/index(语音朗读)</a><br mxs="_a:a"/><a mxs="_a:O" href="#!/mx-suggest/index">mx-suggest/index</a><br mxs="_a:a"/><a mxs="_a:P" href="#!/mx-table/index">mx-table/index(表格)</a><br mxs="_a:a"/><a mxs="_a:Q" href="#!/mx-taginput/index">mx-taginput/index(标签输入)</a><br mxs="_a:a"/><a mxs="_a:R" href="#!/mx-time/index">mx-time/index(时间)</a><br mxs="_a:a"/><a mxs="_a:S" href="#!/mx-time/picker">mx-time/picker(时间选取)</a><br mxs="_a:a"/><a mxs="_a:T" href="#!/mx-tree/index">mx-tree/index(tree)</a><br mxs="_a:a"/><a mxs="_a:U" href="#!/mx-uploader/index">mx-uploader/index(上传)</a><br mxs="_a:a"/>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/list.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_b:_">mx-calendar</h2><h3 mxs="_b:a">默认情形</h3><div mxs="_b:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index"></div></div><div mxs="_b:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar /&gt;</pre></div><h3 mxs="_b:d" class="__mx-style_index_-mt30">默认选中某天</h3><div mxs="_b:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?selected=2018-01-01"></div></div><div mxs="_b:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    selected="2018-01-01"/&gt;</pre></div><h3 mxs="_b:g" class="__mx-style_index_-mt30">设置可选择的范围</h3><div mxs="_b:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12"></div></div><div mxs="_b:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    min="2017-08-05"\n    max="2017-08-22"\n    selected="2017-08-12"/&gt;</pre></div><h3 mxs="_b:j" class="__mx-style_index_-mt30">设置周二为一周的开始</h3><div mxs="_b:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?weekStart=2"></div></div><div mxs="_b:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    week-start="2"/&gt;</pre></div><h3 mxs="_b:m" class="__mx-style_index_-mt30">带时分秒</h3><div mxs="_b:n" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?timeType=all"></div></div><div mxs="_b:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="all"&gt;</pre></div><h3 mxs="_b:p" class="__mx-style_index_-mt30">带时分秒的选中</h3><div mxs="_b:q" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_b:r" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="all"\n    selected="2018-08-08 18:08:20"/&gt;</pre></div><h3 mxs="_b:s" class="__mx-style_index_-mt30">带时分秒,只能选择小时和分钟</h3><div mxs="_b:t" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-calendar/index?timeType=hour%2Cminute"></div></div><div mxs="_b:u" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="hour,minute"/&gt;</pre></div><h3 mxs="_b:v" class="__mx-style_index_-mt30">change事件</h3><div mxs="_b:w" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showDatetime()" mx-view="mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_b:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar\n    time-type="all"\n    selected="2018-08-08 18:08:20"\n    mx-change="showDatetime()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        this.gtipRT(\'日期：\' + e.date + \'，时间：\' + e.time);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/datepicker",["magix","mx-gtip/index","../datepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../datepicker");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_c:_">mx-calendar.datepicker</h2><h3 mxs="_c:a">默认情形</h3><div mxs="_c:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"></div></div><div mxs="_c:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"/&gt;</pre></div><h3 mxs="_c:d" class="__mx-style_index_-mt30">默认选中某天</h3><div mxs="_c:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=2018-01-01"></div></div><div mxs="_c:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"\n    selected="2018-01-01"&gt;</pre></div><h3 mxs="_c:g" class="__mx-style_index_-mt30">从input中读取日期</h3><div mxs="_c:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&value=2018-03-02"></div></div><div mxs="_c:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"\n    value="2018-03-02"&gt;</pre></div><h3 mxs="_c:j" class="__mx-style_index_-mt30">设置可选择的范围</h3><div mxs="_c:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?min=2017-08-05&max=2017-08-22&value=2017-08-12"></div></div><div mxs="_c:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    min="2017-08-05"\n    max="2017-08-22"\n    value="2017-08-12"\n    class="input"/&gt;</pre></div><h3 mxs="_c:m" class="__mx-style_index_-mt30">设置周二为一周的开始</h3><div mxs="_c:n" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?weekStart=2"></div></div><div mxs="_c:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    week-start="2"\n    class="input"/&gt;</pre></div><h3 mxs="_c:p" class="__mx-style_index_-mt30">右下对齐</h3><div mxs="_c:q" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?align=right"></div></div><div mxs="_c:r" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    align="right"\n    class="input"/&gt;</pre></div><h3 mxs="_c:s" class="__mx-style_index_-mt30">右上对齐</h3><div mxs="_c:t" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?align=right&placement=top"></div></div><div mxs="_c:u" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    align="right"\n    placement="top"\n    class="input"/&gt;</pre></div><h3 mxs="_c:v" class="__mx-style_index_-mt30">带时分秒</h3><div mxs="_c:w" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=all"></div></div><div mxs="_c:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="all"\n    class="input"/&gt;</pre></div><h3 mxs="_c:y" class="__mx-style_index_-mt30">带时分秒的选中</h3><div mxs="_c:z" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=all&value=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_c:A" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="all"\n    value="2018-08-08 18:08:20"\n    class="input"/&gt;</pre></div><h3 mxs="_c:B" class="__mx-style_index_-mt30">带时分秒,只能选择小时</h3><div mxs="_c:C" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=hour&value=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_c:D" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="hour"\n    value="2018-08-08 18:08:20"\n    class="input"/&gt;</pre></div><h3 mxs="_c:E" class="__mx-style_index_-mt30">change事件</h3><div mxs="_c:F" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showDatetime()" class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div></div><div mxs="_c:G" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    time-type="all"\n    selected="2018-08-08 18:08:20"\n    mx-change="showDatetime()"\n    class="input"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        this.gtipRT(\'日期：\' + e.date + \'，时间：\' + e.time);\n    }\n});</pre></div><h3 mxs="_c:H" class="__mx-style_index_-mt30">只选择年月</h3><div mxs="_c:I" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02&placement=top"></div></div><div mxs="_c:J" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.datepicker\n    class="input"\n    date-type="year,month"\n    selected="2010-02"\n    placement="top" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/datepicker.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/rangepicker",["magix","mx-gtip/index","../rangepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../rangepicker");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_d:_">mx-calendar.rangepicker</h2><h3 mxs="_d:a">默认情形</h3><div mxs="_d:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4"></div></div><div mxs="_d:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    placeholder="请选择日期范围"/&gt;</pre></div><h3 mxs="_d:d" class="__mx-style_index_-mt30">指定开始结束日期</h3><div mxs="_d:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4&start=2018-01-01&end=2019-01-01"></div></div><div mxs="_d:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    placeholder="请选择日期范围"\n    start="2018-01-01"\n    end="2019-01-01"/&gt;</pre></div><h3 mxs="_d:g" class="__mx-style_index_-mt30">不显示快捷日期</h3><div mxs="_d:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4&shortcuts=false"></div></div><div mxs="_d:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    placeholder="请选择日期范围"\n    shortcuts="false"/&gt;</pre></div><h3 mxs="_d:j" class="__mx-style_index_-mt30">设置可选择的范围</h3><div mxs="_d:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false"></div></div><div mxs="_d:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    min="2017-08-05"\n    max="2017-08-22"\n    start="2017-08-08"\n    end="2017-08-20"\n    shortcuts="false"\n    class="input"/&gt;</pre></div><h3 mxs="_d:m" class="__mx-style_index_-mt30">右上对齐</h3><div mxs="_d:n" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?align=right&placement=top"></div></div><div mxs="_d:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    align="right"\n    placement="top"\n    class="input"/&gt;</pre></div><h3 mxs="_d:p" class="__mx-style_index_-mt30">带时分秒</h3><div mxs="_d:q" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?timeType=all"></div></div><div mxs="_d:r" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    time-type="all"\n    class="input"/&gt;</pre></div><h3 mxs="_d:s" class="__mx-style_index_-mt30">带时分秒的选中</h3><div mxs="_d:t" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?timeType=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15"></div></div><div mxs="_d:u" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    time-type="all"\n    start="2017-07-07 18:08:08"\n    end="2017-12-30 15:15:15"\n    class="input"/&gt;</pre></div><h3 mxs="_d:v" class="__mx-style_index_-mt30">change事件</h3><div mxs="_d:w" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showDatetime()" class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?timeType=all"></div></div><div mxs="_d:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    time-type="all"\n    mx-change="showDatetime()"\n    class="input"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@rangepicker.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        console.log(e.dates);\n        this.gtipRT(\'日期：\' + JSON.stringify(e.dates));\n    }\n});</pre></div><h3 mxs="_d:y" class="__mx-style_index_-mt30">只有年月</h3><div mxs="_d:z" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-calendar/rangepicker?dateType=year%2Cmonth&start=2017-07&end=2017-12&formatter=YYYY-MM&shortcuts=false"></div></div><div mxs="_d:A" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-calendar.rangepicker\n    class="input"\n    date-type="year,month"\n    start="2017-07"\n    end="2017-12"\n    formatter="YYYY-MM"\n    shortcuts="false" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/rangepicker.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/index",["magix","mx-gtip/index","../index","../panel","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("../panel");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_e:_">mx-carousel</h2><h3 mxs="_e:a">默认情形</h3><div mxs="_e:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#f96447;color:white" mx-view="mx-carousel/index"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel style="height:200px;background-color:#f96447;color:white"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 mxs="_e:d" class="__mx-style_index_-mt20">初始显示第二帧并自动播放</h3><div mxs="_e:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#2e6859;color:white;width:500px;" mx-view="mx-carousel/index?active=1&autoplay=true"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel style="height:200px;background-color:#2e6859;color:white;width:500px;"　active="1" autoplay="true"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 mxs="_e:g" class="__mx-style_index_-mt20">不显示缩略点</h3><div mxs="_e:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#f96447;color:white;width:500px;" mx-view="mx-carousel/index?dots=false&autoplay=true&timing=cubic-bezier%28.57%2C-0.81%2C.22%2C1.76%29&duration=1s"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel\n        style="height:200px;background-color:#f96447;color:white;width:500px;"\n        dots="false"\n        autoplay="true"\n        timing="cubic-bezier(.57,-0.81,.22,1.76)"\n        duration="1s"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 mxs="_e:j" class="__mx-style_index_-mt20">垂直模式</h3><div mxs="_e:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:200px;background-color:#f96447;color:white;width:500px;" mx-view="mx-carousel/index?vertical=true&autoplay=true"><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>1</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>2</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>3</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>4</h1></div><div style="text-align:center;line-height:200px" mx-view="mx-carousel/panel"><h1>5</h1></div></div></div><div mxs="_e:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-carousel style="height:200px;background-color:#f96447;color:white;width:500px;" vertical="true" autoplay="true"&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style="text-align:center;line-height:200px"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showDatetime<change>': function (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/linkage",["magix","../linkage","../../mx-gtip/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../linkage");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_f:_">mx-checkbox</h2><div mxv mxa="_f:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><table mxv mxa="_f:a" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_f:a" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 5; j++) {%>';
        for (var j = 0; j < 5; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table><div mxs="_f:b" class="__mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + 'showEx1()">显示选中的checkbox</button></div></div><div mxs="_f:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;table class="table table-striped"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class="clearfix"&gt;\n    &lt;button class="fr mt5 btn btn-brand" mx-click="showEx1()"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Linkage = require(\'app/gallery/mx-checkbox/linkage\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@linkage.html\',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showEx1&lt;click&gt;\' () {\n        this.gtipRT(this.getSelectedIds(\'example1\'));\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/linkage.html';
    throw msg;
} return $p; },
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showEx1<click>': function () {
        this.gtipRT(this.getSelectedIds('example1'));
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/storestate",["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip,StoreState*/
require("mx-pagination/index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../linkage");
var GTip = require("../../mx-gtip/index");
var StoreState = require("../storestate");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list1 = $$.list1, list1Page = $$.list1Page, list1Size = $$.list1Size; var $expr, $art, $line; try {
    $p += '<h2 mxs="_g:_">mx-checkbox</h2><div mxv mxa="_g:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><table mxv mxa="_g:a" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_g:a" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < list1.length; i++) {%>';
    for (var i = 0; i < list1.length; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="' + ($expr = '<%=list1[i].id%>', $e(list1[i].id)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 5; j++) {%>';
        for (var j = 0; j < 5; j++) {
            ;
            $p += '<td>' + ($expr = '<%=list1[i][\'f\' + j]%>', $e(list1[i]['f' + j])) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody><tfoot mxv><tr mxv><td mxv="list1Page,list1Size" colspan="6" mx-view="mx-pagination/index?total=' + ($expr = '<%@100%>', $i($$ref, 100)) + '&step=3&page=' + ($expr = '<%@list1Page%>', $i($$ref, list1Page)) + '&size=' + ($expr = '<%@list1Size%>', $i($$ref, list1Size)) + '" mx-change="' + $viewId + 'chageList1()" style="height:60px;"></td></tr></tfoot></table><div mxs="_g:b" class="__mx-style_index_-clearfix"><button class="__mx-style_index_-fr __mx-style_index_-mt5 __mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + 'showEx1()">显示选中的checkbox</button></div></div><div mxs="_g:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;table class="table table-striped"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="&lt;%=list1[i].id%&gt;" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i][\'f\'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-vframe\n                tag="td"\n                colspan="6"\n                path="app/gallery/mx-pagination/index"\n                total="&lt;%@100%&gt;"\n                step="3"\n                page="&lt;%@list1Page%&gt;"\n                size="&lt;%@list1Size%&gt;"\n                mx-change="chageList1()"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class="clearfix"&gt;\n    &lt;button class="fr mt5 btn btn-brand" mx-click="showEx1()"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Linkage = require(\'app/gallery/mx-chekcbox/linkage\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nlet StoreState = require(\'app/gallery/mx-chekcbox/storestate\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@storestate.html\',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp[\'f\' + i] = \'字段内容\' + j + \'_\' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me[\'$\' + type];\n        let page = me[\'$\' + type + \'Page\'];\n        let size = me[\'$\' + type + \'Size\'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList(\'list1\'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    \'chageList1&lt;change&gt;\' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    \'showEx1&lt;click&gt;\' () {\n        let list = this.getStoreState(\'example1\');\n        if (list.length) {\n            this.gtipRT(\'选中的值：\' + list.join(\',\'));\n        } else {\n            this.gtipRT(\'请选择checkbox\');\n        }\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/storestate.html';
    throw msg;
} return $p; },
    mixins: [GTip, StoreState, Linkage],
    init: function () {
        var list1 = [];
        for (var j = 0; j < 100; j++) {
            var temp = {
                id: j
            };
            for (var i = 0; i < 5; i++) {
                temp['f' + i] = '字段内容' + j + '_' + i;
            }
            list1.push(temp);
        }
        var me = this;
        me.$list1 = list1;
        me.$list1Page = 1;
        me.$list1Size = 10;
    },
    getList: function (type) {
        var me = this;
        var list = me['$' + type];
        var page = me['$' + type + 'Page'];
        var size = me['$' + type + 'Size'];
        return list.slice((page - 1) * size, page * size);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            list1: me.getList('list1'),
            list1Page: me.$list1Page,
            list1Size: me.$list1Size
        });
    },
    'chageList1<change>': function (e) {
        var me = this;
        me.$list1Page = e.page;
        me.$list1Size = e.size;
        me.render();
    },
    'showEx1<click>': function () {
        var list = this.getStoreState('example1');
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
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_h:_">mx-color</h2><h3 mxs="_h:a">默认情形</h3><div mxs="_h:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-color/index"></div></div><div mxs="_h:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-color/&gt;</pre></div><h3 mxs="_h:d" class="__mx-style_index_-mt30">透明度</h3><div mxs="_h:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-color/index?showAlpha=true"></div></div><div mxs="_h:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-color show-alpha="true"/&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-color/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'test<change>': function (e) {
        console.log(e.color);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../picker");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_i:_">mx-color.picker</h2><h3 mxs="_i:a">颜色选择</h3><div mxs="_i:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-color/picker"></div></div><div mxs="_i:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-color.picker class="input" /&gt;</pre></div><div mxs="_i:d" style="height: 300px;"></div><h3 mxs="_i:e" class="__mx-style_index_-mt30">透明度</h3><div mxs="_i:f" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-color/picker?showAlpha=true"></div></div><div mxs="_i:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-color.picker show-alpha="true" class="input" /&gt;</pre></div><div mxs="_i:d" style="height: 300px;"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-color/__test__/picker.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/index",["magix","../../mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<h2 mxs="_j:_">mx-copy</h2><div mxa="_j:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div id="text_' + ($expr = '<%=viewId%>', $e(viewId)) + '">这里是要复制的<span mxs="_j:a" style="font-weight:bold">内容</span>的节点</div><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-success="' + $viewId + 'done()" mx-error="' + $viewId + 'bad()" mx-view="mx-copy/index?copyNode=text_' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '">复制</button></div><div mxs="_j:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;div id="text_&lt;%=viewId%&gt;"&gt;\n    这里是要复制的&lt;span style="font-weight:bold"&gt;内容&lt;/span&gt;的节点\n&lt;/div&gt;\n&lt;mx-copy\n    copy-node="text_&lt;%=viewId%&gt;"\n    tag="button"\n    type="button"\n    class="btn btn-brand mr20"\n    mx-success="done()"\n    mx-error="bad()"&gt;\n        复制\n    &lt;/mx-copy&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    \'done&lt;success&gt;\'() {\n        this.gtipRT(\'复制成功～\');\n    },\n    \'bad&lt;error&gt;\'() {\n        this.gtipRT(\'复制失败～\');\n    }\n});    \n</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-copy/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'done<success>': function () {
        this.gtipRT('复制成功～');
    },
    'bad<error>': function () {
        this.gtipRT('复制失败～');
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragselect/__test__/index",["magix","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-dragselect___test___index_",".__mx-dragselect___test___index_-hor {\n  width: 500px;\n  cursor: default;\n}\n.__mx-dragselect___test___index_-hor li {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  float: left;\n  line-height: 100px;\n  background: #F8F6F6;\n  border: 1px solid #fff;\n  margin: 10px;\n}\n.__mx-dragselect___test___index_-hor li[select] {\n  background: #ccc;\n}\n.__mx-dragselect___test___index_-hor .__mx-dragselect___test___index_-selected {\n  border: solid 1px #eb5685;\n  background: #813742;\n  opacity: 0.5;\n  color: #fff;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_R:_">mx-dragselect</h2><h3 mxs="_R:a">默认示例</h3><div mxs="_R:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragselect/index" class="__mx-dragselect___test___index_-hor __mx-style_index_-fl" mx-change="' + $viewId + 'show()" mx-dragbegin="' + $viewId + 'begin()" mx-dragfinish="' + $viewId + 'end()"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div mxs="_R:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    \'show&lt;change&gt;\'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid(\'mx_\');\n        if (e.action == \'add\') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == \'remove\') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    \'begin&lt;dragbegin&gt;\'() {\n        this.$temp = {};\n    },\n    \'end&lt;dragfinish&gt;\'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 mxs="_R:d" class="__mx-style_index_-mt30">部分不能选择</h3><div mxs="_R:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D" class="__mx-dragselect___test___index_-hor __mx-style_index_-fl" mx-change="' + $viewId + 'show()" mx-dragbegin="' + $viewId + 'begin()" mx-dragfinish="' + $viewId + 'end()" test="@$hor"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select="false">123</li><li select="false">456</li></ul></div><div mxs="_R:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="mx-dragselect/index" class="hor fl" mx-change="show()" mx-dragbegin="begin()" mx-dragfinish="end()" view-selector="li[select!=false]"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select="false"&gt;123&lt;/li&gt;\n        &lt;li select="false"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragselect/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
        me.$selected = {};
    },
    'show<change,click>': function (e) {
        var node = e.node;
        var me = this;
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
    'begin<dragbegin>': function () {
        console.log('begin');
        this.$temp = {};
    },
    'end<dragfinish>': function () {
        delete this.$temp;
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("__mx-dragsort___test___index_",".__mx-dragsort___test___index_-left {\n  width: 300px;\n  cursor: default;\n}\n.__mx-dragsort___test___index_-left li {\n  line-height: 30px;\n  padding: 10px;\n}\n.__mx-dragsort___test___index_-left li:nth-child(odd) {\n  background-color: rgba(172, 236, 182, 0.5);\n}\n.__mx-dragsort___test___index_-left span {\n  cursor: move;\n  margin-right: 10px;\n  display: inline-block;\n  height: 100%;\n}\n.__mx-dragsort___test___index_-left1 {\n  background: #F8F6F6;\n  cursor: default;\n  height: 120px;\n  overflow: auto;\n  width: 200px;\n}\n.__mx-dragsort___test___index_-hor {\n  width: 100%;\n  cursor: default;\n}\n.__mx-dragsort___test___index_-hor li {\n  width: 100px;\n  height: 60px;\n  text-align: center;\n  float: left;\n  line-height: 60px;\n  background: #F8F6F6;\n  border-right: 1px solid #fff;\n}\n.__mx-dragsort___test___index_-hor li[ds-draggable=\"false\"] {\n  background: #ccc;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_S:_">mx-dragsort</h2><h3 mxs="_S:a">默认示例</h3><div mxv mxa="_S:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mxs="_S:b" mx-view="mx-dragsort/index?selector=span" class="__mx-dragsort___test___index_-left __mx-style_index_-fl"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div mxv mxa="_S:a" class="__mx-style_index_-fr"><table mxv mxa="_S:b" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_S:c" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 3; i++) {%>';
    for (var i = 0; i < 3; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv mxa="_S:c" mx-view="mx-dragsort/index">';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 3; j++) {%>';
        for (var j = 0; j < 3; j++) {
            ;
            $p += '<td>' + ($expr = '<%=i%>', $e(i)) + '示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_S:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left fl" view-selector="span"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class="fr"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view="app/gallery/mx-dragsort/index"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 mxs="_S:e" class="__mx-style_index_-mt30">水平拖动</h3><div mxs="_S:f" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=false" class="__mx-dragsort___test___index_-hor __mx-style_index_-fl"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div mxs="_S:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 mxs="_S:h" class="__mx-style_index_-mt30">四个方向</h3><div mxs="_S:i" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=true" class="__mx-dragsort___test___index_-hor __mx-style_index_-fl"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div mxs="_S:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="true"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 mxs="_S:k" class="__mx-style_index_-mt30">滚动容器和窗口</h3><h4 mxs="_S:l">拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div mxs="_S:m" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?selector=span" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 mxs="_S:n" class="__mx-style_index_-mt30">跨容器拖动</h3><div mxs="_S:o" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?drops=_def&selector=span" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable" id="_abc"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view="mx-dragsort/index?selector=span&drops=_abc" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable __mx-style_index_-ml30" id="_def"></ul></div><div mxs="_S:p" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left left1 fl scrollable" view-drops="_def" view-selector="span" id="_abc"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view="mx-dragsort/index" class="left left1 fl scrollable ml30" id="_def" view-selector="span" view-drops="_abc"&gt;\n&lt;/ul&gt;</pre></div><h3 mxs="_S:q" class="__mx-style_index_-mt30">拖出容器删除</h3><div mxs="_S:r" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?sort=false" class="__mx-dragsort___test___index_-left __mx-dragsort___test___index_-left1 __mx-style_index_-fl __mx-style_index_-scrollable" mx-enterzone="' + $viewId + 'stop()" mx-leavezone="' + $viewId + 'ok()" mx-dragfinish="' + $viewId + 'del()"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div mxs="_S:s" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left left1 fl scrollable" mx-enterzone="stop()" mx-leavezone="ok()" mx-dragfinish="del()" view-sort="false"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.less\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'stop&lt;enterzone&gt;\'(e) {\n        e.changePointer(false);\n    },\n    \'ok&lt;leavezone&gt;\'(e) {\n        e.changePointer(true);\n    },\n    \'del&lt;dragfinish&gt;\'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 mxs="_S:t" class="__mx-style_index_-mt30">部分不能拖动及排序</h3><div mxs="_S:u" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=false" class="__mx-dragsort___test___index_-hor __mx-style_index_-fl"><li ds-draggable="false"><span>move</span>123</li><li ds-draggable="false"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable="false"><span>move</span>456</li></ul></div><div mxs="_S:v" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false"&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragsort/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'stop<enterzone>': function (e) {
        e.changePointer(false);
    },
    'ok<leavezone>': function (e) {
        e.changePointer(true);
    },
    'del<dragfinish>': function (e) {
        if (e.moved && e.outZone) { //moved and outside zone
            $(e.dragNode).slideUp();
            setTimeout(function () {
                e.dragZone.removeChild(e.dragNode);
            }, 500);
        }
    },
    'start<dragstart>': function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'none';
        e.originalEvent.dataTransfer.setDragImage(e.target, -10, -18);
    },
    'drop<drop>': function (e) {
        console.log(e);
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    'enter<dragenter>': function (e) {
        $(e.eventTarget).css({
            borderColor: 'red'
        });
    },
    'leave<dragleave>': function (e) {
        $(e.eventTarget).css({
            borderColor: '#ccc'
        });
    },
    '$doc<dragover>': function (e) {
        e.preventDefault();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', years = $$.years; var $expr, $art, $line; try {
    $p += '<h2 mxs="_k:_">mx-day</h2><h3 mxs="_k:a">展示</h3><div mxv mxa="_k:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="years" style="width:800px" mx-change="' + $viewId + 'showDays()" mx-view="mx-day/index?years=' + ($expr = '<%@years%>', $i($$ref, years)) + '&selectedYear=2002&selectedDays=' + ($expr = '<%@{ \'2012\': \'0011,,0011,1100\' }%>', $i($$ref, { '2012': '0011,,0011,1100' })) + '"></div></div><div mxs="_k:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-day\n    years="&lt;%@years%&gt;"\n    selected-year="2002"\n    selected-days="&lt;%@{\'2012\':\'0011,,0011,1100\'}%&gt;"\n    style="width:800px"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-day/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        var years = [];
        for (var i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            days: { '2012': '0011,,0011,1100' },
            years: years
        });
    },
    'showDays<change>': function (e) {
        console.log(e.days);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/alert",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Dialog = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_l:_">mx-dialog</h2><h3 mxs="_l:a">alert与confirm</h3><div mxs="_l:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-click="' + $viewId + 'alert()">alert</button><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-click="' + $viewId + 'confirm()">confirm</button></div><div mxs="_l:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand mr20" mx-click="alert()"&gt;alert&lt;/button&gt;\n&lt;button type="button" class="btn btn-brand mr20" mx-click="confirm()"&gt;confirm&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Dialog = require(\'app/gallery/mx-dialog/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'alert&lt;click&gt;\' () {\n        this.alert(\'xxx\', () => {\n            console.log(\'确定被点击\');\n        });\n    },\n    \'confirm&lt;click&gt;\' () {\n        this.confirm(\'xxx\', () => {\n            console.log(\'确定被点击\');\n        }, () => {\n            console.log(\'取消被点击\');\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/alert.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'alert<click>': function () {
        this.alert('xxx', function () {
            console.log('确定被点击');
        });
    },
    'confirm<click>': function () {
        this.confirm('xxx', function () {
            console.log('确定被点击');
        }, function () {
            console.log('取消被点击');
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Dialog = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', inDialog = $$.inDialog; var $expr, $art, $line; try {
    $expr = '<%if (inDialog) {%>';
    if (inDialog) {
        ;
        $p += '<div mxs="_m:_" class="__mx-style_index_-dialog-header">加载view测试</div><div mxa="_m:_" class="__mx-style_index_-dialog-body">';
        $expr = '<%}%>';
    }
    ;
    $p += '<h2 mxs="_m:a">mx-dialog</h2><h3 mxs="_m:b">加载普通view</h3><div mxs="_m:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-click="' + $viewId + 'view()">view</button></div><div mxs="_m:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand mr20" mx-click="view()"&gt;view&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Dialog = require(\'app/gallery/mx-dialog/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'view&lt;click&gt;\' () {\n        this.mxDialog(\'path/to/view\', {\n            width: 900\n        });\n    }\n});</pre></div>';
    $expr = '<%if (inDialog) {%>';
    if (inDialog) {
        ;
        $p += '</div><div mxs="_m:e" class="__mx-style_index_-dialog-footer">dialog footer</div>';
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'view<click>': function () {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 600
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', searchbox = $$.searchbox, userSelected = $$.userSelected, userList = $$.userList; var $expr, $art, $line; try {
    $p += '<h2 mxs="_n:_">mx-dropdown</h2><h3 mxs="_n:a">默认</h3><div mxv mxa="_n:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="searchbox" mx-change="' + $viewId + 'showWeek()" style="width:150px;" mx-view="mx-dropdown/index?searchbox=' + ($expr = '<%@searchbox%>', $i($$ref, searchbox)) + '&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i mxs="_n:b" value="mon" class="__mx-style_index_-none">周一</i><i mxs="_n:c" value="wed" class="__mx-style_index_-none">周三</i><i mxs="_n:d" value="thu" class="__mx-style_index_-none">周四</i><i mxs="_n:e" value="fri" class="__mx-style_index_-none">周五</i><i mxs="_n:f" value="sat" class="__mx-style_index_-none">周六</i></div><button mxs="_n:g" mx-click="' + $viewId + 'test()" class="__mx-style_index_-btn __mx-style_index_-ml5 __mx-style_index_-btn-brand">toggle searchbox</button><div mxs="_n:h" mx-change="' + $viewId + 'showWeek()" class="__mx-style_index_-ml20" style="width:150px;border-radius: 4px 0 0 4px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&disabled=true"><i value="mon" class="__mx-style_index_-none">周一</i><i value="wed" class="__mx-style_index_-none">周三</i><i value="thu" class="__mx-style_index_-none">周四</i><i value="fri" class="__mx-style_index_-none">周五</i><i value="sat" class="__mx-style_index_-none">周六</i></div><div mxs="_n:i" mx-change="' + $viewId + 'showWeek()" style="width:150px;margin-left:-1px; border-radius: 0 4px 4px 0" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i value="mon" class="__mx-style_index_-none">周一</i><i value="wed" class="__mx-style_index_-none">周三</i><i value="thu" class="__mx-style_index_-none">周四</i><i value="fri" class="__mx-style_index_-none">周五</i><i value="sat" class="__mx-style_index_-none">周六</i></div></div><div mxs="_n:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeek()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeek&lt;change&gt;\' (e) {\n        this.gtipRB(\'text:\' + e.text + \',value:\' + e.value);\n    }\n});</pre></div><h3 mxs="_n:k" class="__mx-style_index_-mt30">单选带分组</h3><div mxs="_n:l" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showWeek()" class="__mx-style_index_-fl" style="width:150px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i group="true" class="__mx-style_index_-none">本周日期</i><i value="mon" class="__mx-style_index_-none">周一</i><i value="wed" class="__mx-style_index_-none">周三</i><i value="thu" class="__mx-style_index_-none">周四</i><i value="fri" class="__mx-style_index_-none">周五</i><i value="sat" class="__mx-style_index_-none">周六</i><i group="true" class="__mx-style_index_-none">下周日期</i><i value="next-mon" class="__mx-style_index_-none">下周一</i><i value="next-wed" class="__mx-style_index_-none">下周三</i><i value="next-thu" class="__mx-style_index_-none">下周四</i><i value="next-fri" class="__mx-style_index_-none">下周五</i><i value="next-sat" class="__mx-style_index_-none">下周六</i></div></div><div mxs="_n:m" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeek()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item group="true"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group="true"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-mon"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-wed"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-thu"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-fri"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-sat"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeek&lt;change&gt;\' (e) {\n        this.gtipRB(\'text:\' + e.text + \',value:\' + e.value);\n    }\n});</pre></div><h3 mxs="_n:n" class="__mx-style_index_-mt30">动态数据并设置选中</h3><div mxv mxa="_n:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="userSelected,userList" mx-change="' + $viewId + 'showUser()" class="__mx-style_index_-fl" style="width:200px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=' + ($expr = '<%@userSelected%>', $i($$ref, userSelected)) + '&list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '"></div></div><div mxs="_n:o" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre lang="html" mx-view="__test__/hl">&lt;mx-dropdown\n    searchbox="true"\n    empty-text="请选择用户"\n    text-key="name"\n    value-key="id"\n    selected="&lt;%@ userSelected %&gt;"\n    list="&lt;%@ userList %&gt;"\n    mx-change="showUser()"\n    class="fl" style="width:200px;"&gt;\n&lt;/mx-dropdown&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    \'showUser&lt;change&gt;\' (e) {\n        this.gtipRB(\'name:\' + e.text + \',id:\' + e.value);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
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
    'showWeek<change>': function (e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>': function (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>': function (e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>': function (e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>': function (e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/multiple",["magix","mx-gtip/index","../multiple","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../multiple");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', searchbox = $$.searchbox, usersSelected = $$.usersSelected, userList = $$.userList; var $expr, $art, $line; try {
    $p += '<h2 mxs="_o:_">mx-dropdown.multiple</h2><h3 mxs="_o:a" class="__mx-style_index_-mt30">默认</h3><div mxv mxa="_o:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="searchbox" mx-change="' + $viewId + 'showWeeks()" class="__mx-style_index_-fl" style="width:150px;" mx-view="mx-dropdown/multiple?searchbox=' + ($expr = '<%@searchbox%>', $i($$ref, searchbox)) + '&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i mxs="_o:b" value="mon" class="__mx-style_index_-none">周一</i><i mxs="_o:c" value="wed" class="__mx-style_index_-none">周三</i><i mxs="_o:d" value="thu" class="__mx-style_index_-none">周四</i><i mxs="_o:e" value="fri" class="__mx-style_index_-none">周五</i><i mxs="_o:f" value="sat" class="__mx-style_index_-none">周六</i></div></div><div mxs="_o:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown.multiple\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeeks()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeeks&lt;change&gt;\' (e) {\n        this.gtipRB(\'values:\' + e.values);\n    }\n});</pre></div><h3 mxs="_o:h" class="__mx-style_index_-mt30">多选带分组</h3><div mxs="_o:i" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showWeeks()" class="__mx-style_index_-fl" style="width:150px;" mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i group="true" class="__mx-style_index_-none">本周日期</i><i value="mon" class="__mx-style_index_-none">周一</i><i value="wed" class="__mx-style_index_-none">周三</i><i value="thu" class="__mx-style_index_-none">周四</i><i value="fri" class="__mx-style_index_-none">周五</i><i value="sat" class="__mx-style_index_-none">周六</i><i group="true" class="__mx-style_index_-none">下周日期</i><i value="next-mon" class="__mx-style_index_-none">下周一</i><i value="next-wed" class="__mx-style_index_-none">下周三</i><i value="next-thu" class="__mx-style_index_-none">下周四</i><i value="next-fri" class="__mx-style_index_-none">下周五</i><i value="next-sat" class="__mx-style_index_-none">下周六</i></div></div><div mxs="_o:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown.multiple\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeeks()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item group="true"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group="true"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-mon"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-wed"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-thu"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-fri"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-sat"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeeks&lt;change&gt;\' (e) {\n        this.gtipRB(\'values:\' + e.values);\n    }\n});</pre></div><h3 mxs="_o:k" class="__mx-style_index_-mt30">动态数据并设置选中</h3><div mxv mxa="_o:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="usersSelected,userList" mx-change="' + $viewId + 'showUsers()" class="__mx-style_index_-fl" style="width:200px;" mx-view="mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=' + ($expr = '<%@usersSelected%>', $i($$ref, usersSelected)) + '&list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '"></div></div><div mxs="_o:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre lang="html" mx-view="__test__/hl">&lt;mx-dropdown.multiple\n    searchbox="true"\n    empty-text="请选择用户"\n    text-key="name"\n    value-key="id"\n    selected="&lt;%@ usersSelected %&gt;"\n    list="&lt;%@ userList %&gt;"\n    mx-change="showUsers()"\n    class="fl" style="width:200px;"&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    \'showUsers&lt;change&gt;\' (e) {\n        this.gtipRB(\'user ids:\' + e.values);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/multiple.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
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
    'showWeek<change>': function (e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>': function (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>': function (e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>': function (e) {
        this.gtipRB('user ids:' + e.values);
    },
    'test<click>': function (e) {
        this.updater.digest({
            searchbox: !this.updater.get('searchbox')
        });
        console.log(this.updater.get('searchbox'));
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/count",["magix","../../mx-form/index","../count","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../count");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../../mx-form/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', toNumber = $$.toNumber; var $expr, $art, $line; try {
    $p += '<h2 mxs="_p:_">mx-effect count</h2><div mxv mxa="_p:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><input class="__mx-style_index_-input" mx-view="mx-effect/count?value=' + ($expr = '<%!$eu(toNumber)%>', $eu(toNumber)) + '"/><div mxv="toNumber" mx-view="mx-effect/count?value=' + ($expr = '<%@toNumber%>', $i($$ref, toNumber)) + '&duration=2000&fixed=2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px;"></div><button mxs="_p:a" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5" type="button" mx-click="' + $viewId + 'changeNumber({i:true})">increase number</button><button mxs="_p:b" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml5" type="button" mx-click="' + $viewId + 'changeNumber()">decrease number</button></div><div mxs="_p:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;input class="input" mx-view="mx-effect/count" view-value="&lt;%@toNumber%&gt;"&gt;\n&lt;div mx-view="mx-effect/count" view-value="&lt;%@toNumber%&gt;" view-duration="2000" view-fixed="2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px;"&gt;&lt;/div&gt;\n&lt;button class="btn btn-brand ml5" type="button" mx-click="changeNumber({i:true})"&gt;increase number&lt;/button&gt;\n&lt;button class="btn btn-brand ml5" type="button" mx-click="changeNumber()"&gt;decrease number&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    \'changeNumber&lt;click&gt;\'(e) {\n        let me = this;\n        let to = me.updater.get(\'toNumber\');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/__test__/count.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>': function (e) {
        var me = this;
        var to = me.updater.get('toNumber');
        var diff = 300;
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
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/dance",["magix","../../mx-form/index","../dance","mx-dropdown/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../dance");
require("mx-dropdown/index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../../mx-form/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', content = $$.content, duration = $$.duration, dance = $$.dance; var $expr, $art, $line; try {
    $p += '<h2 mxs="_q:_">mx-effect dance</h2><div mxv mxa="_q:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-effect/dance?value=' + ($expr = '<%!$eu(content)%>', $eu(content)) + '&duration=' + ($expr = '<%!$eu(duration)%>', $eu(duration)) + '&dance=' + ($expr = '<%!$eu(dance)%>', $eu(dance)) + '"></div><div mxv="duration" mxe="' + $viewId + '_0" mxc="[{p:\'duration\',f:{refresh:true},a:\'selected\'}]" style="width:180px" mx-view="mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=' + ($expr = '<%@duration%>', $i($$ref, duration)) + '"><i mxs="_q:a" value="10" class="__mx-style_index_-none">10ms</i><i mxs="_q:b" value="30" class="__mx-style_index_-none">30ms</i><i mxs="_q:c" value="60" class="__mx-style_index_-none">60ms</i><i mxs="_q:d" value="90" class="__mx-style_index_-none">90ms</i><i mxs="_q:e" value="120" class="__mx-style_index_-none">120ms</i></div><div mxv="dance" mxe="' + $viewId + '_1" mxc="[{p:\'dance\',f:{refresh:true},a:\'selected\'}]" style="width:180px" class="__mx-style_index_-ml10" mx-view="mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=' + ($expr = '<%@dance%>', $i($$ref, dance)) + '"><i mxs="_q:f" value="d1" class="__mx-style_index_-none">效果一</i><i mxs="_q:g" value="d2" class="__mx-style_index_-none">效果二</i><i mxs="_q:h" value="d3" class="__mx-style_index_-none">效果三</i><i mxs="_q:i" value="d4" class="__mx-style_index_-none">效果四</i><i mxs="_q:j" value="d5" class="__mx-style_index_-none">效果五</i><i mxs="_q:k" value="d6" class="__mx-style_index_-none">效果六</i><i mxs="_q:l" value="d7" class="__mx-style_index_-none">效果七</i><i mxs="_q:m" value="d8" class="__mx-style_index_-none">效果八</i><i mxs="_q:n" value="d9" class="__mx-style_index_-none">效果九</i><i mxs="_q:o" value="d10" class="__mx-style_index_-none">效果十</i><i mxs="_q:p" value="d11" class="__mx-style_index_-none">效果十一</i></div></div><div mxs="_q:q" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;mx-effect.dance value="&lt;%=content%&gt;" duration="&lt;%=duration%&gt;" dance="&lt;%=dance%&gt;"  /&gt;\n&lt;mx-dropdown empty-text="单字效果间隔时间" style="width:180px" selected="&lt;%:duration({refresh:true})%&gt;"&gt;\n    &lt;mx-dropdown.item value="10"&gt;10ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="30"&gt;30ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="60"&gt;60ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="90"&gt;90ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="120"&gt;120ms&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n&lt;mx-dropdown empty-text="动画效果" style="width:180px" class="ml10" selected="&lt;%:dance({refresh:true})%&gt;"&gt;\n    &lt;mx-dropdown.item value="d1"&gt;效果一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d2"&gt;效果二&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d3"&gt;效果三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d4"&gt;效果四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d5"&gt;效果五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d6"&gt;效果六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d7"&gt;效果七&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d8"&gt;效果八&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d9"&gt;效果九&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d10"&gt;效果十&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="d11"&gt;效果十一&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n    </pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet Form = require(\'app/gallery/mx-form/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            content: \'你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。\',\n            dance: \'d1\',\n            duration: \'60\'\n        });\n    }\n});\n    \n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/__test__/dance.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest({
            toNumber: 20,
            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',
            dance: 'd1',
            duration: '60'
        });
    },
    'changeNumber<click>': function (e) {
        var me = this;
        var to = me.updater.get('toNumber');
        var diff = 300;
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
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/scroll",["magix","../scroll","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../scroll");
require("__test__/hl");
/*
ver:2.0.6
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', value = $$.value; var $expr, $art, $line; try {
    $p += '<h2 mxs="_r:_">mx-effect scroll</h2><div mxv mxa="_r:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="value" mx-view="mx-effect/scroll?value=' + ($expr = '<%@value%>', $i($$ref, value)) + '"></div><button mxs="_r:a" type="button" mx-click="' + $viewId + 'update()" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml20">update</button></div><div mxs="_r:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;mx-effect.scroll value="&lt;%@value%>" /&gt;\n&lt;button type="button" mx-click="update()" class="btn btn-brand ml20"&gt;update&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@scroll.html\',\n    render() {\n        this.updater.digest({\n            value: 100\n        });\n        setInterval(() => {\n            let v = (Math.random() * 20) + this.updater.get(\'value\');\n            this.updater.digest({\n                value: v\n            });\n        }, 1000);\n    },\n    \'update&lt;click&gt;\'() {\n        this.updater.digest({\n            value: this.updater.get(\'value\') - 20\n        });\n    }\n}); \n    </pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/__test__/scroll.html';
    throw msg;
} return $p; },
    render: function () {
        var _this = this;
        this.updater.digest({
            value: 100
        });
        setInterval(this.wrapAsync(function () {
            var v = (Math.random() * 20) + _this.updater.get('value');
            _this.updater.digest({
                value: v
            });
        }), 1000);
    },
    'update<click>': function () {
        this.updater.digest({
            value: this.updater.get('value') - 20
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', mode = $$.mode; var $expr, $art, $line; try {
    $p += '<h2 mxs="_s:_">mx-footer</h2><div mxa="_s:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-footer/index?mode=' + ($expr = '<%!$eu(mode)%>', $eu(mode)) + '"></div></div><div mxa="_s:a" class="__mx-style_index_-pt20"><div mxs="_s:a">HTML Code:</div>';
    $expr = '<%if (mode == \'simple\') {%>';
    if (mode == 'simple') {
        ;
        $p += '<pre mxs="_s:b" mx-view="__test__/hl">\n&lt;mx-footer mode="simple" /&gt;</pre>';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<pre mxs="_s:c" mx-view="__test__/hl">\n&lt;mx-footer /&gt;</pre>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-footer/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/index",["magix","../index","mx-color/picker","mx-taginput/index","mx-dropdown/index","mx-time/picker","mx-calendar/datepicker","mx-calendar/rangepicker","mx-slider/index","mx-number/index","mx-slider/range","mx-progress/index","mx-uploader/index","./sub","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("mx-color/picker");
require("mx-taginput/index");
require("mx-dropdown/index");
require("mx-time/picker");
require("mx-calendar/datepicker");
require("mx-calendar/rangepicker");
require("mx-slider/index");
require("mx-number/index");
require("mx-slider/range");
require("mx-progress/index");
require("mx-uploader/index");
require("./sub");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', name = $$.name, list = $$.list, tags = $$.tags, day = $$.day, time = $$.time, checkbox = $$.checkbox, radio = $$.radio, dateStart = $$.dateStart, dateEnd = $$.dateEnd, dates = $$.dates, range = $$.range, number = $$.number, range1 = $$.range1, mark = $$.mark, name_x1 = $$.name_x1, de = $$.de; var $expr, $art, $line; try {
    $p += '<h2 mxs="_t:_">mx-form</h2><h3 mxs="_t:a">示例表单</h3><div mxv mxa="_t:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_t:a" style="width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;"><div mxv mxa="_t:b" class="__mx-style_index_-form-item __mx-style_index_-clearfix"><label mxs="_t:b" class="__mx-style_index_-form-label __mx-style_index_-form-required">活动名称：</label><div mxv mxa="_t:c" class="__mx-style_index_-form-content"><input mxe="' + $viewId + '_0" mxc="[{p:\'name\',f:{required:true,blength:[20,50]}}]" class="__mx-style_index_-input" placeholder="请填写活动名称" value="' + ($expr = '<%=name%>', $e(name)) + '" mx-focusin="' + $viewId + '@{abc}()"/></div></div><div mxs="_t:c" class="__mx-style_index_-form-item __mx-style_index_-clearfix"><label class="__mx-style_index_-form-label">色彩：</label><div class="__mx-style_index_-form-content"><div class="__mx-style_index_-input" mx-view="mx-color/picker"></div></div></div><div mxv mxa="_t:d" class="__mx-style_index_-form-item"><label mxs="_t:d" class="__mx-style_index_-form-label __mx-style_index_-form-required">标签：</label><div mxv mxa="_t:e" class="__mx-style_index_-form-content"><div mxv="list,tags" mxe="' + $viewId + '_1" mxc="[{p:\'tags\',f:{required:true},a:\'selected\'}]" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=' + ($expr = '<%@tags%>', $i($$ref, tags)) + '"></div></div></div><div mxv mxa="_t:f" class="__mx-style_index_-form-item"><label mxs="_t:e" class="__mx-style_index_-form-label __mx-style_index_-form-required">活动时间：</label><div mxv mxa="_t:g" class="__mx-style_index_-form-content"><div mxv="day" mxe="' + $viewId + '_2" mxc="[{p:\'day\',f:{required:true},a:\'selected\'}]" style="width:180px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=' + ($expr = '<%@day%>', $i($$ref, day)) + '"><i mxs="_t:f" value="mon" class="__mx-style_index_-none">周一</i><i mxs="_t:g" value="wed" class="__mx-style_index_-none">周三</i><i mxs="_t:h" value="thu" class="__mx-style_index_-none">周四</i><i mxs="_t:i" value="fri" class="__mx-style_index_-none">周五</i><i mxs="_t:j" value="sat" class="__mx-style_index_-none">周六</i></div><span mxs="_t:k" class="__mx-style_index_-ib __mx-style_index_-ml5 __mx-style_index_-mr5">-</span><div mxv="time" mxe="' + $viewId + '_3" mxc="[{p:\'time\',f:{required:true},a:\'value\'}]" class="__mx-style_index_-input" style="width:145px" mx-view="mx-time/picker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4&value=' + ($expr = '<%@time%>', $i($$ref, time)) + '"></div></div></div><div mxv mxa="_t:h" class="__mx-style_index_-form-item"><label mxs="_t:l" class="__mx-style_index_-form-label">checkbox：</label><div mxv mxa="_t:i" class="__mx-style_index_-form-content"><label mxa="_t:j" class="__mx-style_index_-mr10 __mx-style_index_-disabled"><native.input mxe="' + $viewId + '_4" mxc="[{p:\'checkbox\'}]" type="checkbox" name="cb" value="c1" class="__mx-style_index_-checkbox" disabled="disabled" checked="' + ($expr = '<%=checkbox.indexOf(\'c1\') > -1%>', $e(checkbox.indexOf('c1') > -1)) + '"/>c1</label><label mxa="_t:k" class="__mx-style_index_-mr10"><native.input mxe="' + $viewId + '_5" mxc="[{p:\'checkbox\'}]" type="checkbox" name="cb" value="c2" class="__mx-style_index_-checkbox" checked="' + ($expr = '<%=checkbox.indexOf(\'c2\') > -1%>', $e(checkbox.indexOf('c2') > -1)) + '"/>c2</label><label mxv mxa="_t:l" class="__mx-style_index_-mr10"><input mxs="_t:m" mxe="' + $viewId + '_6" mxc="[{p:\'checkbox\'}]" type="checkbox" name="cb" value="c3" class="__mx-style_index_-switch" disabled="disabled"/>c3</label><label mxa="_t:m" class="__mx-style_index_-mr10"><native.input mxe="' + $viewId + '_7" mxc="[{p:\'checkbox\'}]" type="checkbox" name="cb" value="c4" class="__mx-style_index_-switch" checked="' + ($expr = '<%=checkbox.indexOf(\'c4\') > -1%>', $e(checkbox.indexOf('c4') > -1)) + '"/>c4</label></div></div><div mxv mxa="_t:n" class="__mx-style_index_-form-item"><label mxs="_t:n" class="__mx-style_index_-form-label">radio：</label><div mxv mxa="_t:o" class="__mx-style_index_-form-content"><label mxs="_t:o" class="__mx-style_index_-mr10 __mx-style_index_-disabled"><native.input mxe="' + $viewId + '_8" mxc="[{p:\'radio\'}]" checked="checked" disabled="disabled" type="radio" value="r1" class="__mx-style_index_-radio" name="magix"/>r1</label><label mxv mxa="_t:p" class="__mx-style_index_-mr10"><input mxs="_t:p" mxe="' + $viewId + '_9" mxc="[{p:\'radio\'}]" type="radio" value="r2" class="__mx-style_index_-radio" name="magix"/>r2</label><label mxv mxa="_t:q" class="__mx-style_index_-mr10"><input mxs="_t:q" mxe="' + $viewId + '_a" mxc="[{p:\'radio\'}]" type="radio" value="r3" class="__mx-style_index_-radio" name="magix"/>r3</label></div></div><div mxv mxa="_t:r" class="__mx-style_index_-form-item"><label mxs="_t:r" class="__mx-style_index_-form-label">日期：</label><div mxv mxa="_t:s" class="__mx-style_index_-form-content"><div mxv="dateStart" mxe="' + $viewId + '_b" mxc="[{p:\'dateStart\',a:\'value\'}]" class="__mx-style_index_-input" style="width:162px;" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%BC%80%E5%A7%8B%E6%97%A5%E6%9C%9F&value=' + ($expr = '<%@dateStart%>', $i($$ref, dateStart)) + '"></div><span mxs="_t:k" class="__mx-style_index_-ib __mx-style_index_-ml5 __mx-style_index_-mr5">-</span><div mxv="dateEnd" mxe="' + $viewId + '_c" mxc="[{p:\'dateEnd\',a:\'value\'}]" class="__mx-style_index_-input" style="width:162px;" mx-view="mx-calendar/datepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%BB%93%E6%9D%9F%E6%97%A5%E6%9C%9F&value=' + ($expr = '<%@dateEnd%>', $i($$ref, dateEnd)) + '"></div></div></div><div mxv mxa="_t:t" class="__mx-style_index_-form-item"><label mxs="_t:s" class="__mx-style_index_-form-label">范围日期：</label><div mxv mxa="_t:u" class="__mx-style_index_-form-content"><div mxv="dates" mxe="' + $viewId + '_d" mxc="[{p:\'dates\',a:\'value\'}]" class="__mx-style_index_-input" style="width:340px;" mx-view="mx-calendar/rangepicker?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%BC%80%E5%A7%8B%E6%97%A5%E6%9C%9F&value=' + ($expr = '<%@dates%>', $i($$ref, dates)) + '"></div></div></div><div mxv mxa="_t:v" class="__mx-style_index_-form-item"><label mxs="_t:t" class="__mx-style_index_-form-label">范围：</label><div mxv mxa="_t:w" class="__mx-style_index_-form-content"><div mxv="range" mxe="' + $viewId + '_e" mxc="[{p:\'range\',a:\'value\'}]" mx-view="mx-slider/index?max=200&min=20&value=' + ($expr = '<%@range%>', $i($$ref, range)) + '&step=0.2"></div></div></div><div mxv mxa="_t:x" class="__mx-style_index_-form-item"><label mxs="_t:u" class="__mx-style_index_-form-label">数字：</label><div mxv mxa="_t:y" class="__mx-style_index_-form-content"><div mxv="number" mxe="' + $viewId + '_f" mxc="[{p:\'number\',a:\'value\'}]" class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?value=' + ($expr = '<%@number%>', $i($$ref, number)) + '"></div></div></div><div mxv mxa="_t:z" class="__mx-style_index_-form-item"><label mxs="_t:t" class="__mx-style_index_-form-label">范围：</label><div mxv mxa="_t:A" class="__mx-style_index_-form-content"><div mxv="range1" mxe="' + $viewId + '_10" mxc="[{p:\'range1\',a:\'value\'}]" mx-view="mx-slider/range?max=500&min=200&value=' + ($expr = '<%@range1%>', $i($$ref, range1)) + '&step=10"></div></div></div><div mxs="_t:v" class="__mx-style_index_-form-item"><label class="__mx-style_index_-form-label">进度条：</label><div class="__mx-style_index_-form-content"><div mx-view="mx-progress/index?value=0.35"></div></div></div><div mxs="_t:w" class="__mx-style_index_-form-item"><label class="__mx-style_index_-form-label">封面：</label><div class="__mx-style_index_-form-content"><button class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-view="mx-uploader/index?action=.%2F&name=file1&multiple=true">上传文件</button></div></div><div mxv mxa="_t:B" class="__mx-style_index_-form-item"><label mxs="_t:x" class="__mx-style_index_-form-label">备注：</label><div mxv mxa="_t:C" class="__mx-style_index_-form-content"><textarea mxa="_t:D" mxe="' + $viewId + '_11" mxc="[{p:\'mark\',f:{maxLength:10}}]" class="__mx-style_index_-textarea" rows="8">' + ($expr = '<%=mark%>', $e(mark)) + '</textarea></div></div><div mxv="name_x1" mxe="' + $viewId + '_12" mxc="[{p:\'name_x1\',f:{from:\'nameX1\'},a:\'name-x1\'},{p:\'de\',f:{from:\'name_sub1\'}}]" mx-view="mx-form/__test__/sub?nameX1=' + ($expr = '<%@name_x1%>', $i($$ref, name_x1)) + '"></div><div mxs="_t:y" class="__mx-style_index_-form-footer"><button class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + 'isValid()">isValid</button><button class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml10" mx-click="' + $viewId + 'getData()">getData</button></div></div></div><div mxs="_t:z" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;div style="width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;">\n    &lt;div class="form-item clearfix"&gt;\n        &lt;label class="form-label form-required"&gt;活动名称：&lt;/label&gt;\n        &lt;div class="form-content"&gt;&lt;input class="input" placeholder="请填写活动名称" value="&lt;%:name{required:true,blength:[20,50]}%&gt;" mx-focusin="@{abc}()" /&gt;&lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class="form-item clearfix"&gt;\n        &lt;label class="form-label"&gt;色彩：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-color.picker class="input"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label form-required"&gt;标签：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-taginput\n                list="&lt;%@list%&gt;"\n                placeholder="请选择标签"\n                selected="&lt;%:tags{required:true}%&gt;"\n            /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label form-required"&gt;活动时间：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-dropdown\n                searchbox="true"\n                empty-text="请选择日期"\n                selected="&lt;%:day{required:true}%&gt;" style="width:180px;"&gt;\n                &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n            &lt;/mx-dropdown&gt;\n            &lt;span class="ib ml5 mr5"&gt;\n            -&lt;/span&gt;\n            &lt;mx-time.picker class="input" style="width:145px" placeholder="请选择时间" value="&lt;%:time{required:true}%&gt;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;checkbox：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;label class="mr10 disabled"&gt;\n                &lt;native.input type="checkbox" name="cb" value="c1" class="checkbox" &lt;%:checkbox%&gt; disabled checked="&lt;%=checkbox.indexOf(\'c1\')&gt;-1%&gt;" /&gt;c1\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;native.input type="checkbox" name="cb" value="c2" class="checkbox" &lt;%:checkbox%&gt;  checked="&lt;%=checkbox.indexOf(\'c2\')&gt;-1%&gt;" /&gt;c2\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c3" class="switch" disabled /&gt;c3\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;native.input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c4" class="switch" checked="&lt;%=checkbox.indexOf(\'c4\')&gt;-1%&gt;"  /&gt;c4\n            &lt;/label&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;radio：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;label class="mr10 disabled"&gt;\n                &lt;native.input checked disabled type="radio" &lt;%:radio%&gt; value="r1" class="radio" name="magix" /&gt;r1\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;input type="radio" &lt;%:radio%&gt; value="r2" class="radio" name="magix" /&gt;r2\n            &lt;/label&gt;\n            &lt;label class="mr10"&gt;\n                &lt;input type="radio" &lt;%:radio%&gt; value="r3" class="radio" name="magix" /&gt;r3\n            &lt;/label&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;日期：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.datepicker class="input" placeholder="请选择开始日期" value="&lt;%:dateStart%&gt;" style="width:162px;"/&gt;\n            &lt;span class="ib ml5 mr5"&gt;\n            -&lt;/span&gt;\n            &lt;mx-calendar.datepicker class="input" placeholder="请选择结束日期" value="&lt;%:dateEnd%&gt;" style="width:162px;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;范围日期：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-calendar.rangepicker class="input" placeholder="请选择开始日期" value="&lt;%:dates%&gt;" style="width:340px;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;范围：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-slider\n                max="200"\n                min="20"\n                value="&lt;%:range%&gt;"\n                step="0.2"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;数字：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-number value="&lt;%:number%&gt;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;范围：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-slider.range\n                max="500"\n                min="200"\n                value="&lt;%:range1%&gt;"\n                step="10"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;进度条：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;mx-progress value="0.35"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;封面：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;button\n                class="btn btn-brand"\n                mx-view="mx-uploader/index"\n                view-action="./"\n                view-name="file1"\n                view-multiple="true"\n            &gt;上传文件&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class="form-item"&gt;\n        &lt;label class="form-label"&gt;备注：&lt;/label&gt;\n        &lt;div class="form-content"&gt;\n            &lt;textarea class="textarea" rows="8"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;mx-vframe src="@./sub" name-x1="&lt;%:name_x1{from:\'nameX1\'}%&gt;" &lt;%:de{from:\'name_sub1\'}%&gt;&gt;&lt;/mx-vframe&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;button class="btn btn-brand" mx-click="isValid()"&gt;isValid&lt;/button&gt;\n        &lt;button class="btn btn-brand ml10" mx-click="getData()"&gt;getData&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Form = require(\'app/gallery/mx-form/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    \'isValid&lt;click&gt;\' () {\n        console.log(this.isValid());\n    },\n    \'getData&lt;click&gt;\' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, \'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark\');\n        console.log(data);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        var me = this;
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
            checkbox: ["c1"],
            range: 2,
            range1: [230, 300],
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'isValid<click>': function () {
        console.log(this.isValid());
    },
    'getData<click>': function () {
        var src = this.updater.get();
        var data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark,name_x1,de');
        console.log(data);
    },
    '@{abc}<focusin>': function (e) {
        console.log(e);
    },
    'delete<click>': function (e) {
        var user = this.updater.get('user');
        user.splice(e.params.key, 1);
        this.updater.digest({
            user: user
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub",["magix","../index","./sub1"],(require,exports,module)=>{
/*Magix,Form*/
require("./sub1");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', nameX1 = $$.nameX1, name_sub1 = $$.name_sub1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_u:_" class="__mx-style_index_-form-item __mx-style_index_-clearfix"><label mxs="_u:_" class="__mx-style_index_-form-label __mx-style_index_-form-required">活动名称：</label><div mxv mxa="_u:a" class="__mx-style_index_-form-content"><input mxe="' + $viewId + '_0" mxc="[{p:\'nameX1\',f:{required:true,blength:[20,50]}}]" class="__mx-style_index_-input" placeholder="请填写活动名称" value="' + ($expr = '<%=nameX1%>', $e(nameX1)) + '"/></div></div><div mxs="_u:a" mxe="' + $viewId + '_1" mxc="[{p:\'name_sub1\',f:{from:\'name\'}}]" mx-view="mx-form/__test__/sub1"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/sub.html';
    throw msg;
} return $p; },
    mixins: [Form],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        console.log(me.updater.get());
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub1",["magix","../index"],(require,exports,module)=>{
/*Magix,Form*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', name = $$.name; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_v:_" class="__mx-style_index_-form-item __mx-style_index_-clearfix"><label mxs="_v:_" class="__mx-style_index_-form-label __mx-style_index_-form-required">活动名称：</label><div mxv mxa="_v:a" class="__mx-style_index_-form-content"><input mxe="' + $viewId + '_0" mxc="[{p:\'name\',f:{required:true,blength:[20,50]}}]" class="__mx-style_index_-input" placeholder="请填写活动名称" value="' + ($expr = '<%=name%>', $e(name)) + '"/></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/sub1.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_w:_">mx-gtip</h2><div mxs="_w:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button class="__mx-style_index_-btn __mx-style_index_-fl" mx-click="' + $viewId + 'rt()">右上角提示</button><button class="__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10" mx-click="' + $viewId + 'rb()">右下角提示</button><button class="__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10" mx-click="' + $viewId + 'lt();">左上角提示</button><button class="__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10" mx-click="' + $viewId + 'lb();">左下角提示</button></div><div mxs="_w:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button class="btn fl" mx-click="rt()"&gt;右上角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="rb()"&gt;右下角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="lt();"&gt;左上角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="lb();"&gt;左下角提示&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'rt&lt;click&gt;\' () {\n        this.gtipRT(\'右上角，消息内容\' + Date.now());\n    },\n    \'rb&lt;click&gt;\' () {\n        this.gtipRB(\'右下角，消息内容\' + Date.now());\n    },\n    \'lt&lt;click&gt;\' () {\n        this.gtipLT(\'左上角，消息内容\' + Date.now());\n    },\n    \'lb&lt;click&gt;\' () {\n        this.gtipLB(\'左下角，消息内容\' + Date.now());\n    },\n    \'rtt&lt;click&gt;\' (e) {\n        this.gtipRT(\'右上角，消息内容\' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'rt<click>': function () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>': function () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>': function () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>': function () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>': function (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/day",["magix","../day","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../day");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_x:_">mx-hour</h2><h3 mxs="_x:a">天小时选取组件</h3><div mxs="_x:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="width:600px" mx-change="' + $viewId + 'show()" mx-view="mx-hour/day?hours=00001111011"></div></div><div mxs="_x:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-hour.day\n    hours="00001111011"\n    style="width:600px" mx-change="show()"/&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/__test__/day.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/week",["magix","../week","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../week");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_y:_">mx-hour.week</h2><h3 mxs="_y:a" class="__mx-style_index_-mt30">周小时选取组件</h3><div mxs="_y:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'show()" style="width:800px" mx-view="mx-hour/week?days=%2C001111%2C%2C%2C00000000111111001"></div></div><div mxs="_y:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-hour.week\n    days=",001111,,,00000000111111001"\n    mx-change="show()"\n    style="width:800px"/&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/__test__/week.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-linkage/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, headers = $$.headers; var $expr, $art, $line; try {
    $p += '<h2 mxs="_z:_">mx-linkage</h2><h3 mxs="_z:a">默认情形</h3><div mxv mxa="_z:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,headers" mx-change="' + $viewId + 'showValue()" mx-view="mx-linkage/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&splitter=-&headers=' + ($expr = '<%@headers%>', $i($$ref, headers)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA"></div></div><div mxs="_z:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-linkage\n    list="&lt;%@list%&gt;"\n    splitter=\'-\'\n    headers="&lt;%@headers%&gt;"\n    placeholder="请选择省市区" /&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            headers: [\'省份\', \'城市\', \'地区\'],\n            list: [{\n                id: 1,\n                text: \'浙江省\'\n            }, {\n                id: 2,\n                text: \'河南省\'\n            }, {\n                id: 3,\n                text: \'杭州市\',\n                pId: 1\n            }, {\n                id: 4,\n                text: \'周口市\',\n                pId: 2\n            }, {\n                id: 5,\n                text: \'安徽省\'\n            }, {\n                id: 6,\n                text: \'新疆维吾尔自治区\'\n            }, {\n                id: 7,\n                pId: 3,\n                text: \'余杭区\'\n            }, {\n                id: 8,\n                text: \'湖州市\',\n                pId: 1\n            }, {\n                id: 9,\n                text: \'长吉县\',\n                pId: 8\n            }]\n        });\n    }\n});</pre></div><h3 mxs="_z:c" class="__mx-style_index_-mt30">禁用</h3><div mxv mxa="_z:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,headers" mx-change="' + $viewId + 'showValue()" mx-view="mx-linkage/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&selected=1%2C3&splitter=-&headers=' + ($expr = '<%@headers%>', $i($$ref, headers)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true"></div></div><div mxs="_z:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-linkage\n    list="&lt;%@list%&gt;"\n    selected="1,3"\n    splitter=\'-\'\n    headers="&lt;%@headers%&gt;"\n    disabled="true"\n    placeholder="请选择分类" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-linkage/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
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
    'showValue<change>': function (e) {
        console.log(e);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/mask",["magix","../mask","__test__/hl"],(require,exports,module)=>{
/*Magix,MLoading*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var MLoading = require("../mask");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', count = $$.count; var $expr, $art, $line; try {
    $p += '<h2 mxs="_A:_">mx-loading</h2><h3 mxs="_A:a">mask mixin</h3><div mxa="_A:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><p mxs="_A:b">loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p mxs="_A:c">通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p mxs="_A:d">为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p mxa="_A:a" class="__mx-style_index_-mt10 __mx-style_index_-mb10">第' + ($expr = '<%=count%>', $e(count)) + '次渲染页面</p><button mxs="_A:e" mx-click="' + $viewId + 'refresh()" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mt10">点此按钮2s后重新渲染当前view</button></div><div mxs="_A:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">\n&lt;p class="mt10 mb10"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click="refresh()" class="btn btn-brand mt10"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet MLoading = require(\'app/gallery/loading/mask\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@mask.html\',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    \'refresh&lt;click&gt;\' () {\n        this.render();\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/__test__/mask.html';
    throw msg;
} return $p; },
    mixins: [MLoading],
    init: function () {
        this.count = 1;
    },
    render: function () {
        var _this = this;
        var me = this;
        setTimeout(me.wrapAsync(function () {
            me.updater.digest({
                count: _this.count++
            });
        }), 2e3);
    },
    'refresh<click>': function () {
        this.render();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-menu/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Menu*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Menu = require("../index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<h2 mxs="_B:_">mx-menu</h2><h3 mxs="_B:a">展示</h3><div mxv mxa="_B:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-fl" mx-view="mx-menu/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&width=200"></div></div><div mxs="_B:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-menu.index\n    list="&lt;%@list%&gt;"\n    width="200"\n&gt;&lt;/mx-menu.index&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Menu = require(\'../index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: \'\',\n                text: \'新建\'\n            }, {\n                id: \'0-0\',\n                pId: \'\',\n                text: \'复制\'\n            }, {\n                id: \'0-1\',\n                pId: \'\',\n                text: \'删除\'\n            }, {\n                id: 1,\n                pId: 0,\n                text: \'新建word文件\'\n            }, {\n                id: 2,\n                pId: 0,\n                text: \'新建excel文件\'\n            }, {\n                id: 3,\n                pId: 0,\n                text: \'新建ppt文件\'\n            }]\n        });\n    },\n    \'showcm&lt;contextmenu&gt;\'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get(\'list\'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div><h3 mxs="_B:c" class="__mx-style_index_-mt30">context menu</h3><div mxs="_B:d" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-contextmenu="' + $viewId + 'showcm()">在这里点右键</button></div><div mxs="_B:e" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button class="btn btn-brand" mx-contextmenu="showcm()"&gt;在这里点右键&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Menu = require(\'../index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: \'\',\n                text: \'新建\'\n            }, {\n                id: \'0-0\',\n                pId: \'\',\n                text: \'复制\'\n            }, {\n                id: \'0-1\',\n                pId: \'\',\n                text: \'删除\'\n            }, {\n                id: 1,\n                pId: 0,\n                text: \'新建word文件\'\n            }, {\n                id: 2,\n                pId: 0,\n                text: \'新建excel文件\'\n            }, {\n                id: 3,\n                pId: 0,\n                text: \'新建ppt文件\'\n            }]\n        });\n    },\n    \'showcm&lt;contextmenu&gt;\'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get(\'list\'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-menu/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
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
    'showcm<contextmenu>': function (e) {
        e.preventDefault();
        Menu.show(this, e, {
            list: this.updater.get('list'),
            picked: function (item) {
                console.log(item);
            },
            width: 220
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-number/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_C:_">mx-number</h2><h3 mxs="_C:a">默认情形</h3><div mxv mxa="_C:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxs="_C:b" class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index"></div><input mxs="_C:c" class="__mx-style_index_-input"/><br mxs="_C:d"/>下面这个是原生的number，用以对比<br mxs="_C:d"/><native.input mxs="_C:e" type="number" class="__mx-style_index_-input"/><div mxs="_C:f" style="color:#aaa;">mx-number比原生多了按着shift键的变化比率，这个变化比率是可配置的<br/>原生可以输入多个点小数点“.”和多个科学计数法“e”，而只有合法的数字才能取出值，否则会取到空字符串</div></div><div mxs="_C:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number /&gt;</pre></div><h3 mxs="_C:h" class="__mx-style_index_-mt30">最大值、最小值及step</h3><div mxs="_C:i" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5"></div></div><div mxs="_C:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number\n    max="10"\n    min="-10"\n    step="0.5"\n    value="8.5" /&gt;</pre></div><h3 mxs="_C:k" class="__mx-style_index_-mt30">禁用</h3><div mxs="_C:l" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?disabled=true&value=20"></div></div><div mxs="_C:m" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number disabled="true" value="20" /&gt;</pre></div><h3 mxs="_C:n" class="__mx-style_index_-mt30">响应事件</h3><div mxs="_C:o" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'show()" class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?max=10&min=-10&step=0.5&value=8.5"></div></div><div mxs="_C:p" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number\n    max="10"\n    min="-10"\n    step="0.5"\n    value="8.5"\n    mx-change="show()" /&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'show&lt;change&gt;\' (e) {\n        this.gtipRT(\'当前值：\' + e.eventTarget.value);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-number/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        this.gtipRT('当前值：' + e.eventTarget.value);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', page = $$.page; var $expr, $art, $line; try {
    $p += '<h2 mxs="_D:_">mx-pagination</h2><h3 mxs="_D:a">完整模式</h3><div mxa="_D:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-pagination/index?total=2000&step=3&page=' + ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div><button mxs="_D:b" class="__mx-style_index_-btn" mx-click="' + $viewId + 'test()">test</button></div><div mxs="_D:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="3"\n    page="2"\n    class="fl"/&gt;</pre></div><h3 mxs="_D:d" class="__mx-style_index_-mt30">简单模式</h3><div mxs="_D:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-pagination/index?total=2000&step=5&simplify=true&page=15"></div></div><div mxs="_D:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="5"\n    simplify="true"\n    page="15"/&gt;</pre></div><h3 mxs="_D:g" class="__mx-style_index_-mt30">迷你模式</h3><div mxs="_D:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-pagination/index?total=2000&step=5&mini=true&page=10"></div></div><div mxs="_D:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="5"\n    mini="true"\n    page="10"/&gt;</pre></div><h3 mxs="_D:j" class="__mx-style_index_-mt30">监听change事件</h3><div mxs="_D:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'show()" mx-view="mx-pagination/index?total=2000&step=5&page=10"></div></div><div mxs="_D:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="5"\n    page="10"\n    mx-change="show()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'show&lt;change&gt;\' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-pagination/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>': function (e) {
        console.log(e.page, e.size);
    },
    'test<click>': function (e) {
        var page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/index",["magix","../../mx-checkbox/linkage","../../mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../../mx-checkbox/linkage");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_E:_">mx-popconfirm</h2><div mxv mxa="_E:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><table mxv mxa="_E:a" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv><input mxs="_E:a" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '<th mxs="_E:b">操作</th></tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 5; j++) {%>';
        for (var j = 0; j < 5; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '<td><div mx-enter="' + $viewId + 'del({id:' + ($expr = '<%=i%>', $e(i)) + '})" class="__mx-style_index_-cp" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%EF%BC%9F">删除</div></td></tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div mxs="_E:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;table class="table table-striped"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n            &lt;mx-popconfirm content="确认删除？" mx-enter="del({id:&lt;%=i%&gt;})" class="cp"&gt;删除&lt;/mx-popconfirm&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Linkage = require(\'../../mx-checkbox/linkage\');\nlet GTip = require(\'../../mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Linkage,GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'del&lt;enter&gt;\' (e) {\n        this.gtipRT(\'delete:\' + e.params.id);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Linkage, GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'del<enter>': function (e) {
        this.gtipRT('delete:' + e.params.id);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/index",["magix","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-popmenu___test___index_",".__mx-popmenu___test___index_-menu{\n    box-shadow: 0 3px 3px #eee;\n    list-style: none;\n    margin: 0;\n    border: 1px solid #e6e6e6;\n    border-radius: 4px;\n    position: relative;\n    background-color: #fff;\n}\n.__mx-popmenu___test___index_-menu-item {\n    color: #666;\n    display: block;\n    padding: 0 7px;\n    margin: 6px 10px;\n    height: 26px;\n    line-height: 26px;\n    border-radius: 4px;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.__mx-popmenu___test___index_-menu-item:hover {\n    color: #fff;\n    background-color: #8383eb;\n}");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<h2 mxs="_T:_">mx-popmenu</h2><div mxa="_T:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-view="mx-popmenu/index?related=%23menu_' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '">显示更多菜单</button><ul class="__mx-style_index_-none __mx-popmenu___test___index_-menu" id="menu_' + ($expr = '<%=viewId%>', $e(viewId)) + '"><li mxs="_T:a" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单1</li><li mxs="_T:b" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单2</li><li mxs="_T:c" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单3</li><li mxs="_T:d" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单4</li><li mxs="_T:e" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单5</li><li mxs="_T:f" class="__mx-popmenu___test___index_-menu-item" mx-click="' + $viewId + 'hide()">示例菜单6</li></ul></div><div mxs="_T:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand" mx-view="app/gallery/mx-popmenu/index" view-related="#menu_&lt;%=viewId%&gt;"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class="none menu" id="menu_&lt;%=viewId%&gt;"&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class="menu-item" mx-click="hide()"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    \'hide&lt;click&gt;\' () {\n        $(\'#\' + this.id + \' button\').invokeView(\'&#x40;{hide}\');\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>': function () {
        $('#' + this.id + ' button').invokeView('@{hide}');
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_F:_">mx-popover</h2><div mxs="_F:a" class="__mx-style_index_-clearfix" style="margin:100px;"><button class="__mx-style_index_-btn" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">提示右</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top">提示上</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom">提示下</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left">提示左</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=top">提示左,顶部对齐</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=top">提示右,顶部对齐</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=left">提示上,左对齐</button><button class="__mx-style_index_-btn __mx-style_index_-ml10" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=right">提示上,右对齐</button></div><div mxs="_F:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-popover\n    tag="button"\n    class="btn"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"&gt;\n    提示右\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="top"&gt;\n    提示上\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="bottom"&gt;\n    提示下\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="left"&gt;\n    提示左\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="left"\n    align="top"&gt;\n    提示左,顶部对齐\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="right"\n    align="top"&gt;\n    提示右,顶部对齐\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="top"\n    align="left"&gt;\n    提示上,左对齐\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag="button"\n    class="btn ml10"\n    content="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"\n    placement="top"\n    align="right"&gt;\n    提示上,右对齐\n&lt;/mx-popover&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-progress/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_G:_">mx-progress</h2><h3 mxs="_G:a">默认情形</h3><div mxs="_G:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-progress/index?value=0.36"></div></div><div mxs="_G:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-progress\n    value="0.36"\n    class="fl"/&gt;</pre></div><h3 mxs="_G:d" class="__mx-style_index_-mt30">禁用</h3><div mxs="_G:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-progress/index?value=0.05&disabled=true"></div></div><div mxs="_G:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-progress\n    value="0.05"\n    disabled="true"\n    class="fl"/&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-progress/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-sitenav/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', mode = $$.mode; var $expr, $art, $line; try {
    $p += '<h2 mxs="_H:_">mx-sitenav</h2><div mxa="_H:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:50px;" mx-view="mx-sitenav/index?mode=' + ($expr = '<%!$eu(mode)%>', $eu(mode)) + '"></div></div><div mxa="_H:a" class="__mx-style_index_-pt20"><div mxs="_H:a">HTML Code:</div>';
    $expr = '<%if (mode == \'simple\') {%>';
    if (mode == 'simple') {
        ;
        $p += '<pre mxs="_H:b" mx-view="__test__/hl">\n&lt;mx-sitenav mode="simple" style="height:50px;" /&gt;</pre>';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<pre mxs="_H:c" mx-view="__test__/hl">\n&lt;mx-sitenav style="height:50px;" /&gt;</pre>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-sitenav/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_I:_">mx-slider</h2><h3 mxs="_I:a">默认情形</h3><div mxs="_I:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/index?max=200&min=100&value=130&step=0.05"></div></div><div mxs="_I:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.05"\n    class="fl"/&gt;</pre></div><h3 mxs="_I:d" class="__mx-style_index_-mt30">垂直</h3><div mxs="_I:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/index?max=200&min=100&value=130&step=0.05&vertical=true"></div></div><div mxs="_I:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.05"\n    class="fl"\n    vertical="true"/&gt;</pre></div><h3 mxs="_I:g" class="__mx-style_index_-mt30">禁用</h3><div mxs="_I:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true"></div></div><div mxs="_I:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.05"\n    disabled="true"\n    class="fl"/&gt;</pre></div><h3 mxs="_I:j" class="__mx-style_index_-mt30">响应change事件</h3><div mxs="_I:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showValue()" class="__mx-style_index_-fl" mx-view="mx-slider/index?max=200&min=0&value=130&step=5"></div></div><div mxs="_I:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="5"\n    mx-change="showValue()"\n    class="fl"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showValue&lt;change&gt;\' (e) {\n        this.gtipRT(\'value:\' + e.value);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'showValue<change>': function (e) {
        this.gtipRT('value:' + e.value);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/range",["magix","mx-gtip/index","../range","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../range");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical; var $expr, $art, $line; try {
    $p += '<h2 mxs="_J:_">mx-slider.range</h2><h3 mxs="_J:a">默认情形</h3><div mxs="_J:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/range?max=200&min=100&value=30%2C150&step=0.05"></div></div><div mxs="_J:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="30,150"\n    step="0.05"\n    class="fl"/&gt;</pre></div><h3 mxs="_J:d" class="__mx-style_index_-mt30">垂直</h3><div mxa="_J:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=' + ($expr = '<%!$eu(vertical)%>', $eu(vertical)) + '"></div></div><div mxs="_J:e" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="30,150"\n    step="0.05"\n    vertical="true"\n    class="fl"/&gt;</pre></div><h3 mxs="_J:f" class="__mx-style_index_-mt30">禁用</h3><div mxs="_J:g" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true"></div></div><div mxs="_J:h" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="30,150"\n    step="0.05"\n    disabled="true"\n    class="fl"/&gt;</pre></div><h3 mxs="_J:i" class="__mx-style_index_-mt30">响应change事件</h3><div mxs="_J:j" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showValue()" class="__mx-style_index_-fl" mx-view="mx-slider/range?max=500&min=200&value=210%2C350&step=10"></div></div><div mxs="_J:k" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="500"\n    min="200"\n    value="210,350"\n    step="10"\n    mx-change="showValue()"\n    class="fl"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showValue&lt;change&gt;\' (e) {\n        this.gtipRT(\'value:\' + e.value);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/__test__/range.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>': function (e) {
        this.gtipRT('value:' + e.value);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-speech/__test__/index",["magix","../index","../../mx-form/index","mx-dropdown/index"],(require,exports,module)=>{
/*Magix,Speech,Form*/
require("mx-dropdown/index");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Speech = require("../index");
var Form = require("../../mx-form/index");
var Examples = {
    'zh-cn': '小时候，乡愁是一枚小小的邮票，我在这头，母亲在那头。长大后，乡愁是一张窄窄的船票，我在这头，新娘在那头。后来啊，乡愁是一方矮矮的坟墓，我在外头，母亲在里头。而现在，乡愁是一湾浅浅的海峡，我在这头，大陆在那头。',
    'en': 'When I was young , my homesickness was a small stamp , I was here , my mother was there . After growing up , my homesickness was a narrow ticket , I was here , my bride was there . Later , my homesickness was a little tomb , I was outside , my mother was inside . And now , my homesickness is a shallow strait , I am here , the mainland is there . '
};
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', examples = $$.examples, lang = $$.lang; var $expr, $art, $line; try {
    $p += '<h2 mxs="_K:_">mx-speech</h2><div mxv mxa="_K:_" class="__mx-style_index_-pt20"><textarea mxe="' + $viewId + '_0_' + ($expr = '<%=lang%>', $e(lang)) + '" mxc="[{p:\'examples.' + ($expr = '<%=lang%>', $e(lang)) + '\'}]" class="__mx-style_index_-textarea __mx-style_index_-mb20" style="width:90%;height:200px;">' + ($expr = '<%=examples[lang]%>', $e(examples[lang])) + '</textarea><br mxs="_K:a"/><div mxv="lang" mxe="' + $viewId + '_1" mxc="[{p:\'lang\',f:{refresh:true},a:\'selected\'}]" mx-view="mx-dropdown/index?selected=' + ($expr = '<%@lang%>', $i($$ref, lang)) + '"><i mxs="_K:b" value="zh-cn" class="__mx-style_index_-none">中文</i><i mxs="_K:c" value="en" class="__mx-style_index_-none">英文</i></div><button mxs="_K:d" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-ml20" mx-click="' + $viewId + 'speak()">朗读</button></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-speech/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Form],
    init: function () {
        this.capture('speech', new Speech({
            rate: 0.5
        }));
    },
    render: function () {
        var me = this;
        me.updater.digest({
            examples: __assign({}, Examples),
            lang: 'zh-cn'
        });
    },
    'speak<click>': function () {
        var speech = this.capture('speech');
        var data = this.updater.get();
        var lang = data.lang;
        speech.assign({
            lang: lang
        });
        speech.speak(data.examples[lang]);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/index",["magix","mx-gtip/index","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, list1 = $$.list1, list2 = $$.list2; var $expr, $art, $line; try {
    $p += '<h2 mxs="_L:_">mx-suggest</h2><h3 mxs="_L:a">默认情形</h3><div mxv mxa="_L:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-input" style="width:200px;" mx-view="mx-suggest/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxs="_L:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list%&gt;"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 mxs="_L:c" class="__mx-style_index_-mt30">对象列表</h3><div mxv mxa="_L:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list1" class="__mx-style_index_-input" mx-view="mx-suggest/index?list=' + ($expr = '<%@list1%>', $i($$ref, list1)) + '&textKey=text&valueKey=id"></div></div><div mxs="_L:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list1%&gt;"\n    text-key="text"\n    value-key="id"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: \'abc1\',\n                id: 1\n            }, {\n                text: \'abc2\',\n                id: 2\n            }, {\n                text: \'abc3\',\n                id: 3\n            }, {\n                text: \'abc4\',\n                id: 4\n            }, {\n                text: \'abc5\',\n                id: 5\n            }, {\n                text: \'abc6\',\n                id: 6\n            }, {\n                text: \'abc7\',\n                id: 7\n            }, {\n                text: \'abc8\',\n                id: 8\n            }, {\n                text: \'abc9\',\n                id: 9\n            }, {\n                text: \'abc0\',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 mxs="_L:e" class="__mx-style_index_-mt30">响应事件</h3><div mxv mxa="_L:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-input" mx-pick="' + $viewId + 'showPick()" mx-showlist="' + $viewId + 'showList()" mx-hidelist="' + $viewId + 'hideList()" mx-view="mx-suggest/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxs="_L:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list%&gt;"\n    mx-pick="showPick()"\n    mx-showlist="showList()"\n    mx-hidelist="hideList()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    \'showPick&lt;pick&gt;\' (e) {\n        this.gtipRT(\'选中：\' + e.item);\n    },\n    \'showList&lt;showlist&gt;\' () {\n        this.gtipRT(\'列表展示\');\n    },\n    \'hideList&lt;hidelist&gt;\' () {\n        this.gtipRT(\'列表关闭\');\n    }\n});</pre></div><h3 mxs="_L:g" class="__mx-style_index_-mt30">更新列表</h3><div mxv mxa="_L:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list2" class="__mx-style_index_-input" mx-input="' + $viewId + 'updateList()" mx-view="mx-suggest/index?list=' + ($expr = '<%@list2%>', $i($$ref, list2)) + '"></div></div><div mxs="_L:h" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-suggest\n    class="input"\n    list="&lt;%@list2%&gt;"\n    mx-input="updateList()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet $ = require(\'$\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    \'updateList&lt;input&gt;\' (e) {\n        let target = $(e.eventTarget);\n        let list = [\'163.com\', \'qq.com\', \'126.com\', \'sina.com\'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf(\'@\') == -1) {\n                for (let a of list) {\n                    newList.push(v + \'@\' + a);\n                }\n            } else {\n                let parts = v.split(\'@\');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + \'@\' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView(\'update\', [newList]);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
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
    'showPick<pick>': function (e) {
        this.gtipRT('选中：' + e.item);
    },
    'showList<showlist>': function () {
        this.gtipRT('列表展示');
    },
    'hideList<hidelist>': function () {
        this.gtipRT('列表关闭');
    },
    'updateList<input>': function (e) {
        var target = $(e.eventTarget);
        var list = ['163.com', 'qq.com', '126.com', 'sina.com'];
        var v = $.trim(target.val());
        var newList = [];
        if (v) {
            if (v.indexOf('@') == -1) {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var a = list_1[_i];
                    newList.push(v + '@' + a);
                }
            }
            else {
                var parts = v.split('@');
                for (var _a = 0, list_2 = list; _a < list_2.length; _a++) {
                    var a = list_2[_a];
                    if (a.indexOf(parts[1]) >= 0) {
                        newList.push(parts[0] + '@' + a);
                    }
                }
            }
        }
        if (e.vframe) {
            e.vframe.invoke('update', [newList]);
        }
        else {
            target.invokeView('update', [newList]);
        }
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index",["magix","../../mx-checkbox/linkage","../sticky","__test__/hl","../index","../attach","../rwd"],(require,exports,module)=>{
/*Magix,Linkage*/
require("../sticky");
require("__test__/hl");
require("../index");
require("../attach");
require("../rwd");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../../mx-checkbox/linkage");
Magix.applyStyle("__mx-table___test___index_",".__mx-table___test___index_-row-hover {\n  background: red;\n}\n");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_U:_">mx-table</h2><h3 mxs="_U:a">固定表头</h3><div mxv mxa="_U:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:a" mx-view="mx-table/sticky"><table mxv mxa="_U:b" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxs="_U:b"><th colspan="3">合并列测试</th><th colspan="3">合并列测试</th></tr><tr mxv><th mxv><input mxs="_U:c" type="checkbox" class="__mx-style_index_-checkbox" linkage="example1"/></th>';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example1" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 5; j++) {%>';
        for (var j = 0; j < 5; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-vframe src="app/gallery/mx-table/sticky"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 mxs="_U:e" class="__mx-style_index_-mt30">固定列</h3><div mxv mxa="_U:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:d" mx-view="mx-table/index?rwdRange=2%2C-1"><table mxv mxa="_U:e" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv mxa="_U:f" style="width:50px"><input mxs="_U:f" type="checkbox" class="__mx-style_index_-checkbox" linkage="example2"/></th>';
    $expr = '<%for (var i = 0; i < 25; i++) {%>';
    for (var i = 0; i < 25; i++) {
        ;
        $p += '<th mxa="_U:g" style="width:200px">示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '<th mxs="_U:g" style="width:100px">操作</th><th mxs="_U:h" style="width:200px">操作</th></tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example2" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 25; j++) {%>';
        for (var j = 0; j < 25; j++) {
            ;
            $p += '<td>示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '<td><a mxs="_U:i" href="#">删除</a><br mxs="_U:j"/><a mxs="_U:k" href="#">报告</a><br mxs="_U:j"/>';
        $expr = '<%if (i % 3) {%>';
        if (i % 3) {
            ;
            $p += '<a mxs="_U:l" href="#">代码</a><br mxs="_U:j"/><a mxs="_U:m" href="#">备注</a><br mxs="_U:j"/><a mxs="_U:n" href="#">更多</a><br mxs="_U:j"/>';
            $expr = '<%}%>';
        }
        ;
        $p += '</td><td mxs="_U:o">adf</td></tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:p" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-table rwd-range="2,-1"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example2" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n                &lt;th style="width:100px"&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example2" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n                &lt;td&gt;\n                    &lt;a href="#"&gt;删除&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;报告&lt;/a&gt;&lt;br /&gt;\n                    &lt;%if(i%3){%&gt;\n                    &lt;a href="#"&gt;代码&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;备注&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;更多&lt;/a&gt;&lt;br /&gt;\n                    &lt;%}%&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><h3 mxs="_U:q" class="__mx-style_index_-mt30">固定列和表头</h3><div mxv mxa="_U:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:i" mx-view="mx-table/index?rwdRange=2%2C-2&sticky=true&rowHoverClass=__mx-table___test___index_-row-hover"><table mxv mxa="_U:j" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv mxa="_U:k" style="width:50px"><input mxs="_U:r" type="checkbox" class="__mx-style_index_-checkbox" linkage="example3"/></th>';
    $expr = '<%for (var i = 0; i < 25; i++) {%>';
    for (var i = 0; i < 25; i++) {
        ;
        $p += '<th mxa="_U:l" style="width:200px">示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example3" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 25; j++) {%>';
        for (var j = 0; j < 25; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:s" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-vframe src="app/gallery/mx-table/index" rwd-range="2,-2" sticky="true"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example3" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example3" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 mxs="_U:t" class="__mx-style_index_-mt30">自由组装</h3><div mxs="_U:u">当需要高度自定义时，可以使用该模式，按要求处理相应的内容即可</div><div mxs="_U:v" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-table/attach?sticky=true&rowHoverClass=__mx-table___test___index_-row-hover"><div table-role="main"><table class="__mx-style_index_-table __mx-style_index_-table-striped" style="width:4140px"><thead><tr><th rowspan="2" style="width:140px"></th><th rowspan="2" style="width:2600px">eee</th><th colspan="2">bb</th><th colspan="3">xxxx</th><th colspan="2"></th></tr><tr><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;">111</th><th style="width:200px;"></th><th style="width:200px;"></th></tr></thead><tbody><tr><td style="width:140px"></td><td style="width:2600px">1111</td><td style="width:200px">2222</td><td style="width:200px">333</td><td style="width:200px">aaa</td><td style="width:200px">1111</td><td style="width:200px">2222</td><td style="width:200px"></td><td style="width:200px"></td></tr><tr><td></td><td>1111</td><td>2222</td><td>333<br/>eeeeee</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr><tr><td></td><td>1111<br/>aaaa</td><td>2222</td><td>333</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr></tbody></table></div><table class="__mx-style_index_-table __mx-style_index_-table-striped" table-role="left-sticky" style="width:140px;"><thead><tr><th style="width:140px;height:85px;">aa</th></tr></thead><tbody><tr><td>aaa</td></tr><tr><td>aaa</td></tr><tr><td>aaa</td></tr></tbody></table><table class="__mx-style_index_-table __mx-style_index_-table-striped" style="width:400px;" table-role="right-sticky"><thead><tr><th colspan="2">测试</th></tr><tr><th style="width:200px;">测试1</th><th style="width:200px;">测试2</th></tr></thead><tbody><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr></tbody></table></div></div><div mxs="_U:w" style="color:red">使用该模式需要注意以下几点<br/>1. 请注意下面模板中的table-role属性，其中table-role="main"一定放在div上，紧跟其后的是左右固定列的表格<br/>2. 3个表格(左右固定的表格可以根据需要进行删除，比如只留右侧固定)需要自己算出占用的实际宽度<br/>3. 请确保3个表格的thead保持同样的高度</div><div mxs="_U:x" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-table.attach sticky="true"&gt;\n    &lt;div table-role="main"&gt;\n        &lt;table class="table table-striped" style="width:4140px"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th rowspan="2" style="width:140px"&gt;&lt;/th&gt;\n                    &lt;th rowspan="2" style="width:2600px"&gt;eee&lt;/th&gt;\n                    &lt;th colspan="2"&gt;bb&lt;/th&gt;\n                    &lt;th colspan="3"&gt;xxxx&lt;/th&gt;\n                    &lt;th colspan="2"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td style="width:140px"&gt;&lt;/td&gt;\n                    &lt;td style="width:2600px"&gt;1111&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;2222&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;333&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;aaa&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;1111&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;2222&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;br /&gt;eeeeee&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;br /&gt;aaaa&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/div&gt;\n    &lt;table class="table table-striped" table-role="left-sticky" style="width:140px;"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:140px;height:85px;"&gt;aa&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table table-striped" style="width:400px;" table-role="right-sticky"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th colspan="2"&gt;测试&lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th style="width:200px;"&gt;测试1&lt;/th&gt;\n                &lt;th style="width:200px;"&gt;测试2&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.attach&gt;</pre></div><h3 mxs="_U:y" class="__mx-style_index_-mt30">旧版</h3><div mxv mxa="_U:m" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv mxa="_U:n" mx-view="mx-table/rwd?rwdRange=2%2C-2"><table mxv mxa="_U:o" class="__mx-style_index_-table __mx-style_index_-table-striped"><thead mxv><tr mxv><th mxv mxa="_U:p" style="width:50px"><input mxs="_U:z" type="checkbox" class="__mx-style_index_-checkbox" linkage="example4"/></th>';
    $expr = '<%for (var i = 0; i < 25; i++) {%>';
    for (var i = 0; i < 25; i++) {
        ;
        $p += '<th mxa="_U:q" style="width:200px">示例字段' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody mxv>';
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<tr mxv><td mxv><input type="checkbox" class="__mx-style_index_-checkbox" linkage-parent="example4" value="ex1_' + ($expr = '<%=i%>', $e(i)) + '"/></td>';
        $expr = '<%for (var j = 0; j < 25; j++) {%>';
        for (var j = 0; j < 25; j++) {
            ;
            $p += '<td>示例字段内容' + ($expr = '<%=j%>', $e(j)) + '</td>';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_U:A" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-vframe src="app/gallery/mx-table/rwd"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example4" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example4" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Linkage],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, selected = $$.selected, userList = $$.userList, userSelected = $$.userSelected; var $expr, $art, $line; try {
    $p += '<h2 mxs="_M:_">mx-taginput</h2><h3 mxs="_M:a">默认情形</h3><div mxv mxa="_M:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB"></div></div><div mxs="_M:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ list %&gt;"\n    placeholder="请选择分类"\n&gt;&lt;/div&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\']\n        });\n    }\n});</pre></div><h3 mxs="_M:c" class="__mx-style_index_-mt30">默认选中</h3><div mxv mxa="_M:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,selected" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&selected=' + ($expr = '<%@selected%>', $i($$ref, selected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB"></div></div><div mxs="_M:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ list %&gt;"\n    selected="&lt;%@ selected %&gt;"\n    placeholder="请选择分类"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\'],\n            selected: [\'分类1\', \'分类5\', \'分类10\']\n        });\n    }\n});</pre></div><h3 mxs="_M:e" class="__mx-style_index_-mt30">禁用</h3><div mxv mxa="_M:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="list,selected" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '&selected=' + ($expr = '<%@selected%>', $i($$ref, selected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true"></div></div><div mxs="_M:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ list %&gt;"\n    selected="&lt;%@ selected %&gt;"\n    placeholder="请选择分类"\n    disabled="true"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\'],\n            selected: [\'分类1\', \'分类5\', \'分类10\']\n        });\n    }\n});</pre></div><h3 mxs="_M:g" class="__mx-style_index_-mt30">数据列表为对象</h3><div mxv mxa="_M:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="userList,userSelected" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '&selected=' + ($expr = '<%@userSelected%>', $i($$ref, userSelected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id"></div></div><div mxs="_M:h" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ userList %&gt;"\n    selected="&lt;%@ userSelected %&gt;"\n    placeholder="请选择用户"\n    text-key="name"\n    value-key="id"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 mxs="_M:i" class="__mx-style_index_-mt30">change事件</h3><div mxv mxa="_M:d" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="userList,userSelected" mx-change="' + $viewId + 'showUserIds()" class="__mx-style_index_-fl" mx-view="mx-taginput/index?list=' + ($expr = '<%@userList%>', $i($$ref, userList)) + '&selected=' + ($expr = '<%@userSelected%>', $i($$ref, userSelected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id"></div></div><div mxs="_M:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-taginput\n    list="&lt;%@ userList %&gt;"\n    selected="&lt;%@ userSelected %&gt;"\n    placeholder="请选择用户"\n    text-key="name"\n    value-key="id"\n    mx-change="showUserIds()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nMagix.applyStyle(\'@index.css\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [\'分类1\', \'分类2\', \'分类3\', \'分类4\', \'分类5\', \'分类6\', \'分类7\', \'分类8\', \'分类9\', \'分类10\'],\n            selected: [\'分类1\', \'分类5\', \'分类10\'],\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    \'showUserIds&lt;change&gt;\' (e) {\n        this.gtipRT(\'选中的用户ids:\'+e.ids);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
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
    'showUserIds<change>': function (e) {
        this.gtipRT('选中的用户ids:' + e.ids);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_N:_">mx-time</h2><div mxs="_N:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'test()" mx-view="mx-time/index?time=00%3A12%3A13&types=minute%2Csecond"></div></div><div mxs="_N:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-time\n    time="00:12:13"\n    types="minute,second"\n    mx-change="test()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'test&lt;change&gt;\' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'test<change>': function (e) {
        console.log(e, e.time);
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../picker");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var c = 10;
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', time = $$.time; var $expr, $art, $line; try {
    $p += '<h2 mxs="_O:_">mx-time.picker</h2><div mxa="_O:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-time/picker?value=';
    $line = 4;
    $art = '=time';
    ;
    $p += ($expr = '<%!$eu(time)%>', $eu(time)) + '&types=hour%2Cminute"></div></div><div mxs="_O:a" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-time.picker\n    value="18:26:00"\n    class="input"\n    types="hour,minute" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/__test__/picker.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            time: '18:00:30'
        });
    },
    'update<click>': function () {
        this.updater.digest({
            time: '19:00:' + c++
        });
    }
});

});
/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<h2 mxs="_P:_">mx-tree</h2><div mxv mxa="_P:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix" style="margin-left:30px;"><div mxv="list" mx-view="mx-tree/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxs="_P:a" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-tree list="&lt;%@list%&gt;"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: \'\',\n                text: \'abc\'\n            }, {\n                id: \'0-0\',\n                pId: \'\',\n                text: \'abc-abc\'\n            }, {\n                id: 1,\n                pId: 0,\n                text: \'def\'\n            }, {\n                id: 2,\n                pId: 1,\n                text: \'aaa\'\n            }, {\n                id: 3,\n                pId: 2,\n                text: \'bbb\'\n            }]\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
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
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-uploader/__test__/index",["magix","../index","mx-progress/index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("mx-progress/index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', percent = $$.percent; var $expr, $art, $line; try {
    $p += '<h2 mxs="_Q:_">mx-uploader</h2><div mxa="_Q:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxs="_Q:a" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-fl" mx-start="' + $viewId + 'showStart()" mx-error="' + $viewId + 'showError()" mx-success="' + $viewId + 'showSuccess()" mx-progress="' + $viewId + 'showProgress()" mx-view="mx-uploader/index?path=mx-uploader%2Findex&action=.%2Findex.html&name=file1&multiple=true">上传文件</div><div class="__mx-style_index_-fl __mx-style_index_-ml20" mx-view="mx-progress/index?value=' + ($expr = '<%!$eu(percent)%>', $eu(percent)) + '&fixed=2"></div></div><div mxs="_Q:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-uploader\n    class="btn btn-brand fl"\n    action="./index.html"\n    name="file1"\n    multiple="true"\n    mx-error="showError()"\n    mx-success="showSuccess()"\n    mx-progress="showProgress()"\n&gt;上传文件&lt;/mx-uploader&gt;\n&lt;mx-progress value="&lt;%=percent%&gt;" fixed="2" class="fl ml20" /&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    \'showError&lt;error&gt;\'(e) {\n        console.log(e.error);\n    },\n    \'showSuccess&lt;success&gt;\'(e) {\n        console.log(e.response);\n    },\n    \'showProgress&lt;progress&gt;\'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-uploader/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            showProgress: false,
            percent: 0
        });
    },
    'showError<error>': function (e) {
        console.log(e.error);
    },
    'showSuccess<success>': function (e) {
        console.log(e.response);
    },
    'showProgress<progress>': function (e) {
        this.updater.digest({
            percent: e.percent
        });
    },
    'showStart<start>': function (e) {
        console.log(e);
    }
});

});

});