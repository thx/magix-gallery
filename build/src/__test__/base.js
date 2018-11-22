/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/base",["magix","$","mx-suggest/index","mx-title/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-suggest/index");
require("mx-title/index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle(["_zs_gallery_mx-style_index_","@charset \"UTF-8\";\n/* @dependent: ./index.less */\n/* @dependent: ./index.less */\n.mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n  color: #333;\n  font-size: 12px;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.5;\n}\nbody,\ndl,\ndd,\nul,\nol,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nfigure,\nhr,\nthead,\ntbody,\ntfoot,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nul,\nol {\n  list-style-type: none;\n  list-style-image: none;\n}\na {\n  text-decoration: none;\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\na:focus {\n  outline: 0 none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow: auto;\n}\nq {\n  quotes: none;\n}\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\nsmall {\n  font-size: 85.7%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nth {\n  text-align: left;\n  font-weight: inherit;\n}\nimg {\n  border-style: none;\n  width: auto\\9;\n  height: auto;\n  max-width: 100%;\n  vertical-align: top;\n  -ms-interpolation-mode: bicubic;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border-style: none;\n  white-space: normal;\n  *margin-left: -7px;\n}\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: middle;\n  *vertical-align: middle;\n}\ninput,\nbutton {\n  *overflow: visible;\n}\nbutton {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n     -moz-appearance: button;\n          appearance: button;\n  cursor: pointer;\n}\n/**\n* 重置按钮禁用时光标样式\n*/\nbutton[disabled],\ninput[disabled] {\n  cursor: not-allowed;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  margin-top: -2px;\n  padding: 0;\n  *height: 12px;\n  *width: 12px;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input {\n    line-height: normal !important;\n  }\n}\n/**\n* 修正 Firefox 19+ Placeholder 设置了opacity 的问题\n*/\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: darkGray;\n  opacity: 1;\n}\n/**\n* 1. 修正未定义为「inline-block」的元素\n* 2. 修正 Chrome、Firefox、Opera 中 「progress」元素 vertical-align 默认值不一致\n*/\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\nhtml {\n  box-sizing: border-box;\n}\n* {\n  box-sizing: inherit;\n}\n*:before,\n*:after {\n  box-sizing: inherit;\n}\ninput:focus,\ntextarea:focus,\na:focus,\nbutton:focus {\n  outline: none;\n  resize: none;\n}\na {\n  color: #333;\n  text-decoration: none;\n  transition: all 0.25s;\n}\na:hover {\n  color: #4d7fff;\n}\na:hover,\na:focus,\na:active,\na:visited {\n  outline: 0;\n  text-decoration: none;\n}\na.link-light,\na.link-light:visited,\na.link-light:focus,\na.link-light:active {\n  color: #999;\n}\na.link-light:hover {\n  color: #666;\n}\na.link-grey,\na.link-grey:visited,\na.link-grey:focus,\na.link-grey:active {\n  color: #666;\n}\na.link-grey:hover {\n  color: #333;\n}\na.link-brand,\na.link-brand:visited,\na.link-brand:focus,\na.link-brand:active {\n  color: #4d7fff;\n}\na.link-brand:hover {\n  color: #4776ed;\n}\nlabel {\n  cursor: pointer;\n  display: inline-block;\n  max-width: 100%;\n  font-weight: 400;\n}\n[mx-view] item {\n  display: none;\n}\n/*文字选中样式*/\n::-moz-selection,\n::-moz-selection {\n  background-color: #4776ed;\n  color: white;\n}\n::selection,\n::-moz-selection {\n  background-color: #4776ed;\n  color: white;\n}\n/* @dependent: ./index.less */\n.btn {\n  display: inline-block;\n  height: 32px;\n  margin-bottom: 0;\n  padding: 0 12px;\n  color: #333;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 32px;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: #e6e6e6;\n  border-radius: 4px;\n  border: 0 none;\n  outline: none;\n  background-image: none;\n  transition: all 0.25s ease-out;\n}\n.btn:hover,\n.btn.hover,\n.btn:active {\n  background-color: #ccc;\n  color: #333;\n}\n.btn.btn-small {\n  height: 26px;\n  line-height: 26px;\n}\n.btn.btn-brand {\n  color: #ffffff;\n  background-color: #4d7fff;\n}\n.btn.btn-brand:hover,\n.btn.btn-brand.hover,\n.btn.btn-brand:active {\n  color: #ffffff;\n  background-color: #4776ed;\n}\n.btn.btn-white {\n  background-color: #fff;\n}\n.btn.btn-white:hover,\n.btn.btn-white.hover,\n.btn.btn-white:active {\n  background-color: #fafafa;\n}\n.btn[disabled],\n.btn.btn-disabled,\n.btn.btn-disabled:hover,\n.btn.btn-disabled.hover,\n.btn.btn-disabled:focus,\n.btn.btn-disabled:active,\n.btn.btn-disabled:visited {\n  cursor: not-allowed;\n  background-color: #e6e6e6;\n  color: #bbb;\n}\n/* @dependent: ./index.less */\n.dialog-header {\n  padding: 18px 40px;\n  border-bottom: 1px solid #e6e6e6;\n  color: #333;\n}\n.dialog-header .header-name {\n  font-size: 16px;\n}\n.dialog-body {\n  padding: 18px 36px;\n}\n.dialog-footer {\n  padding: 16px 36px;\n  text-align: left;\n  border-top: 1px solid #e6e6e6;\n}\n/* @dependent: ./index.less */\n::placeholder,\n::-moz-placeholder,\n:-ms-input-placeholder,\n::-webkit-input-placeholder {\n  color: #999;\n}\ninput,\ntextarea,\n.input,\n.textarea {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 12px;\n  border-color: #e6e6e6;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  background-color: #fff;\n  background-image: none;\n  box-shadow: none;\n  box-sizing: border-box;\n  transition: border-color 0.25s ease-out;\n  color: #333;\n  outline: none;\n}\ninput:hover,\ntextarea:hover,\n.input:hover,\n.textarea:hover {\n  border-color: #ccc;\n}\ninput:focus,\ntextarea:focus,\n.input:focus,\n.textarea:focus {\n  border-color: #4d7fff;\n}\ninput[disabled],\ntextarea[disabled],\n.input[disabled],\n.textarea[disabled],\ninput[disabled]:hover,\ntextarea[disabled]:hover,\n.input[disabled]:hover,\n.textarea[disabled]:hover,\ninput[disabled]:focus,\ntextarea[disabled]:focus,\n.input[disabled]:focus,\n.textarea[disabled]:focus,\ninput[readonly],\ntextarea[readonly],\n.input[readonly],\n.textarea[readonly],\ninput[readonly]:hover,\ntextarea[readonly]:hover,\n.input[readonly]:hover,\n.textarea[readonly]:hover,\ninput[readonly]:focus,\ntextarea[readonly]:focus,\n.input[readonly]:focus,\n.textarea[readonly]:focus {\n  border-color: #e6e6e6;\n  cursor: not-allowed;\n  background-color: #fafafa;\n  color: #999;\n}\ninput,\n.input {\n  height: 32px;\n  line-height: 30px;\n  padding: 0 9px;\n}\ntextarea,\n.textarea {\n  line-height: 22px;\n  padding: 8px;\n}\n.input-focus,\n.textarea-focus {\n  border-color: #4d7fff;\n}\n.input-small {\n  height: 26px;\n  line-height: 24px;\n}\n@-webkit-keyframes checkboxAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  100% {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n  }\n}\n@keyframes checkboxAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  100% {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n  }\n}\n@-webkit-keyframes checkboxBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.8);\n    -webkit-transform: scale(1.8);\n    opacity: 0;\n  }\n}\n@keyframes checkboxBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.8);\n    -webkit-transform: scale(1.8);\n    opacity: 0;\n  }\n}\ninput[type=\"checkbox\"],\n.checkbox {\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  vertical-align: middle;\n  background-color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ccc;\n  cursor: pointer;\n  border-radius: 2px;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.25s, background-color 0.25s;\n}\ninput[type=\"checkbox\"]:focus,\n.checkbox:focus {\n  border-color: #ccc;\n}\ninput[type=\"checkbox\"]:hover,\n.checkbox:hover {\n  border-color: #4d7fff;\n}\ninput[type=\"checkbox\"]:checked,\n.checkbox:checked {\n  border-color: #4d7fff;\n  background-color: #4d7fff;\n}\ninput[type=\"checkbox\"]:checked:after,\n.checkbox:checked:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  background-image: url(https://img.alicdn.com/tps/TB1bSBzLVXXXXXfXFXXXXXXXXXX-1000-1000.svg);\n  background-size: 100%;\n  color: white;\n}\ninput[type=\"checkbox\"]:disabled,\n.checkbox:disabled {\n  border-color: #e6e6e6;\n  background-color: #fafafa;\n}\ninput[type=\"checkbox\"]:disabled:checked,\n.checkbox:disabled:checked {\n  border-color: #ccc;\n  background-color: #ccc;\n}\ninput[type=\"checkbox\"]:indeterminate,\n.checkbox:indeterminate {\n  background-color: #4d7fff;\n  border-color: #4d7fff;\n}\ninput[type=\"checkbox\"]:indeterminate:after,\n.checkbox:indeterminate:after {\n  content: '';\n  display: block;\n  height: 2px;\n  width: 8px;\n  margin: 40% auto;\n  background-color: #fff;\n}\ninput[type=\"checkbox\"]:indeterminate:disabled,\n.checkbox:indeterminate:disabled {\n  border-color: #ccc;\n  background-color: #ccc;\n}\ninput[type=\"checkbox\"].anim-checkbox,\n.checkbox.anim-checkbox {\n  position: relative;\n}\ninput[type=\"checkbox\"].anim-checkbox:checked:after,\n.checkbox.anim-checkbox:checked:after {\n  -webkit-animation: checkboxAfter 0.25s ease-out;\n  animation: checkboxAfter 0.25s ease-out;\n}\ninput[type=\"checkbox\"].anim-checkbox:checked:before,\n.checkbox.anim-checkbox:checked:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  border: 1px solid #4d7fff;\n  -webkit-animation: checkboxBefore 0.25s ease-out;\n  animation: checkboxBefore 0.25s ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\ninput[type=\"checkbox\"].anim-checkbox:disabled:checked:before,\n.checkbox.anim-checkbox:disabled:checked:before {\n  content: none;\n}\n@-webkit-keyframes radioAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.5);\n    -webkit-transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes radioAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.5);\n    -webkit-transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes radioBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.6);\n    -webkit-transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes radioBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.6);\n    -webkit-transform: scale(1.6);\n    opacity: 0;\n  }\n}\ninput[type=\"radio\"],\n.radio {\n  position: relative;\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  border-radius: 50%;\n  outline: none;\n  transition: border-color 0.25s;\n}\ninput[type=\"radio\"]:focus,\n.radio:focus {\n  border-color: #ccc;\n}\ninput[type=\"radio\"]:hover,\n.radio:hover {\n  border-color: #4d7fff;\n}\ninput[type=\"radio\"]:checked,\n.radio:checked {\n  background-color: #4d7fff;\n  border-color: #4d7fff;\n}\ninput[type=\"radio\"]:checked:after,\n.radio:checked:after {\n  content: '';\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 6px;\n  height: 6px;\n  border-radius: 100%;\n  background-color: #fff;\n}\ninput[type=\"radio\"]:checked:hover,\n.radio:checked:hover {\n  border-color: #4d7fff;\n}\ninput[type=\"radio\"]:disabled,\n.radio:disabled {\n  background-color: #fafafa;\n  border-color: #e6e6e6;\n}\ninput[type=\"radio\"]:disabled:hover,\n.radio:disabled:hover {\n  border-color: #e6e6e6;\n}\ninput[type=\"radio\"]:disabled:after,\n.radio:disabled:after {\n  background-color: #ccc;\n}\ninput[type=\"radio\"].anim-radio,\n.radio.anim-radio {\n  position: relative;\n  width: 16px;\n  height: 16px;\n}\ninput[type=\"radio\"].anim-radio:checked,\n.radio.anim-radio:checked {\n  background-color: #fff;\n  border-color: #4d7fff;\n}\ninput[type=\"radio\"].anim-radio:checked:after,\n.radio.anim-radio:checked:after {\n  top: 4px;\n  left: 4px;\n  background-color: #4d7fff;\n  -webkit-animation: radioAfter 0.25s ease-out;\n  animation: radioAfter 0.25s ease-out;\n}\ninput[type=\"radio\"].anim-radio:checked:before,\n.radio.anim-radio:checked:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  border: 1px solid #4d7fff;\n  -webkit-animation: radioBefore 0.25s ease-out;\n  animation: radioBefore 0.25s ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\ninput[type=\"radio\"].anim-radio:disabled,\n.radio.anim-radio:disabled {\n  background-color: #fafafa;\n  border-color: #e6e6e6;\n}\ninput[type=\"radio\"].anim-radio:disabled:hover,\n.radio.anim-radio:disabled:hover {\n  border-color: #e6e6e6;\n}\ninput[type=\"radio\"].anim-radio:disabled:after,\n.radio.anim-radio:disabled:after {\n  background-color: #ccc;\n}\ninput[type=\"radio\"].anim-radio:disabled:checked:before,\n.radio.anim-radio:disabled:checked:before {\n  content: none;\n}\n.form .form-item {\n  position: relative;\n  padding-left: 96px;\n  margin-bottom: 30px;\n}\n.form .form-item .form-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 96px;\n  line-height: 32px;\n  vertical-align: top;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  color: #999;\n  cursor: default;\n}\n.form .form-item .form-label.label-right {\n  text-align: right;\n}\n.form .form-item .form-label.label-right.form-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: '*';\n  font-family: SimSun;\n  line-height: 1;\n  color: #a40100;\n}\n.form .form-item .form-content {\n  position: relative;\n  min-height: 32px;\n  line-height: 32px;\n}\n.form .form-item:last-child {\n  margin-bottom: 0;\n}\n.form .form-footer {\n  margin-left: 96px;\n}\n.form.small-form .form-item {\n  margin-bottom: 20px;\n}\n.form.small-form .form-item:last-child {\n  margin-bottom: 0;\n}\n.form.align-right .form-label {\n  padding-right: 20px;\n  text-align: right;\n}\n.form-4 .form-item {\n  padding-left: 48px;\n}\n.form-4 .form-item .form-label {\n  width: 48px;\n}\n.form-4 .form-footer {\n  margin-left: 48px;\n}\n.form-6 .form-item {\n  padding-left: 72px;\n}\n.form-6 .form-item .form-label {\n  width: 72px;\n}\n.form-6 .form-footer {\n  margin-left: 72px;\n}\n.form-8 .form-item {\n  padding-left: 96px;\n}\n.form-8 .form-item .form-label {\n  width: 96px;\n}\n.form-8 .form-footer {\n  margin-left: 96px;\n}\n.form-10 .form-item {\n  padding-left: 120px;\n}\n.form-10 .form-item .form-label {\n  width: 120px;\n}\n.form-10 .form-footer {\n  margin-left: 120px;\n}\n/* @dependent: ./index.less */\n@font-face {\n  font-family: 'mx-iconfont';\n  /* project id 386526 */\n  src: url('//at.alicdn.com/t/font_386526_x6czlpab4m.eot');\n  src: url('//at.alicdn.com/t/font_386526_x6czlpab4m.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_386526_x6czlpab4m.woff') format('woff'), url('//at.alicdn.com/t/font_386526_x6czlpab4m.ttf') format('truetype'), url('//at.alicdn.com/t/font_386526_x6czlpab4m.svg#iconfont') format('svg');\n}\n.mc-iconfont {\n  display: inline-block;\n  position: relative;\n  font-family: \"mx-iconfont\";\n  font-style: normal;\n  font-size: 16px;\n  font-weight: normal;\n  font-variant: normal;\n  font-display: fallback;\n  line-height: 1;\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* @dependent: ./index.less */\n@-webkit-keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n.loading {\n  width: 150px;\n  padding: 150px 0;\n  margin: 0 auto;\n  line-height: 0;\n  text-align: center;\n}\n.loading:before,\n.loading:after {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  content: \"\";\n  background-color: #e6e6e6;\n  border-radius: 50%;\n  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;\n          animation: sk-bouncedelay 1s infinite ease-in-out both;\n}\n.loading:before {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n}\n.loading .loading-anim {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin: 0 10px;\n  background-color: #e6e6e6;\n  border-radius: 50%;\n  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;\n          animation: sk-bouncedelay 1s infinite ease-in-out both;\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n}\n/* @dependent: ./index.less */\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/* 常用字号 */\n.fontsize-12 {\n  font-size: 12px;\n}\n.fontsize-14 {\n  font-size: 14px;\n}\n.fontsize-16 {\n  font-size: 16px;\n}\n.fontsize-18 {\n  font-size: 18px;\n}\n.fontsize-20 {\n  font-size: 20px;\n}\n.fontsize-22 {\n  font-size: 22px;\n}\n.fontsize-24 {\n  font-size: 24px;\n}\n.fontsize-26 {\n  font-size: 26px;\n}\n.fontsize-28 {\n  font-size: 28px;\n}\n.fontsize-30 {\n  font-size: 30px;\n}\n.fontsize-32 {\n  font-size: 32px;\n}\n.fontsize-34 {\n  font-size: 34px;\n}\n.fontsize-36 {\n  font-size: 36px;\n}\n.fontsize-38 {\n  font-size: 38px;\n}\n.fontsize-40 {\n  font-size: 40px;\n}\n/* 常用字号 */\n.lh14 {\n  line-height: 14px;\n}\n.lh16 {\n  line-height: 16px;\n}\n.lh18 {\n  line-height: 18px;\n}\n.lh20 {\n  line-height: 20px;\n}\n.lh22 {\n  line-height: 22px;\n}\n.lh24 {\n  line-height: 24px;\n}\n.lh26 {\n  line-height: 26px;\n}\n.lh28 {\n  line-height: 28px;\n}\n.lh30 {\n  line-height: 30px;\n}\n.lh32 {\n  line-height: 32px;\n}\n.lh34 {\n  line-height: 34px;\n}\n.lh36 {\n  line-height: 36px;\n}\n.w60 {\n  width: 60px;\n}\n.w70 {\n  width: 70px;\n}\n.w80 {\n  width: 80px;\n}\n.w90 {\n  width: 90px;\n}\n.w100 {\n  width: 100px;\n}\n.w110 {\n  width: 110px;\n}\n.w120 {\n  width: 120px;\n}\n.w130 {\n  width: 130px;\n}\n.w140 {\n  width: 140px;\n}\n.w150 {\n  width: 150px;\n}\n.w160 {\n  width: 160px;\n}\n.w170 {\n  width: 170px;\n}\n.w180 {\n  width: 180px;\n}\n.w190 {\n  width: 190px;\n}\n.w200 {\n  width: 200px;\n}\n.w210 {\n  width: 210px;\n}\n.w220 {\n  width: 220px;\n}\n.w230 {\n  width: 230px;\n}\n.w240 {\n  width: 240px;\n}\n.w250 {\n  width: 250px;\n}\n.w260 {\n  width: 260px;\n}\n.w270 {\n  width: 270px;\n}\n.w280 {\n  width: 280px;\n}\n.w290 {\n  width: 290px;\n}\n.w300 {\n  width: 300px;\n}\n.w310 {\n  width: 310px;\n}\n.w320 {\n  width: 320px;\n}\n.w330 {\n  width: 330px;\n}\n.w340 {\n  width: 340px;\n}\n.w350 {\n  width: 350px;\n}\n.w360 {\n  width: 360px;\n}\n.w370 {\n  width: 370px;\n}\n.w380 {\n  width: 380px;\n}\n.w390 {\n  width: 390px;\n}\n.w400 {\n  width: 400px;\n}\n.w410 {\n  width: 410px;\n}\n.w420 {\n  width: 420px;\n}\n.w430 {\n  width: 430px;\n}\n.w440 {\n  width: 440px;\n}\n.w450 {\n  width: 450px;\n}\n.w460 {\n  width: 460px;\n}\n.w470 {\n  width: 470px;\n}\n.w480 {\n  width: 480px;\n}\n.w490 {\n  width: 490px;\n}\n.w500 {\n  width: 500px;\n}\n.h50 {\n  height: 50px;\n}\n.h60 {\n  height: 60px;\n}\n.h70 {\n  height: 70px;\n}\n.h80 {\n  height: 80px;\n}\n.h90 {\n  height: 90px;\n}\n.h100 {\n  height: 100px;\n}\n.h110 {\n  height: 110px;\n}\n.h120 {\n  height: 120px;\n}\n.h130 {\n  height: 130px;\n}\n.h140 {\n  height: 140px;\n}\n.h150 {\n  height: 150px;\n}\n.h160 {\n  height: 160px;\n}\n.h170 {\n  height: 170px;\n}\n.h180 {\n  height: 180px;\n}\n.h190 {\n  height: 190px;\n}\n.h200 {\n  height: 200px;\n}\n.h210 {\n  height: 210px;\n}\n.h220 {\n  height: 220px;\n}\n.h230 {\n  height: 230px;\n}\n.h240 {\n  height: 240px;\n}\n.h250 {\n  height: 250px;\n}\n.h260 {\n  height: 260px;\n}\n.h270 {\n  height: 270px;\n}\n.h280 {\n  height: 280px;\n}\n.h290 {\n  height: 290px;\n}\n.h300 {\n  height: 300px;\n}\n.h310 {\n  height: 310px;\n}\n.h320 {\n  height: 320px;\n}\n.min-width-10 {\n  min-width: 10px;\n}\n.min-width-20 {\n  min-width: 20px;\n}\n.min-width-30 {\n  min-width: 30px;\n}\n.min-width-40 {\n  min-width: 40px;\n}\n.min-width-50 {\n  min-width: 50px;\n}\n.min-width-60 {\n  min-width: 60px;\n}\n.min-width-70 {\n  min-width: 70px;\n}\n.min-width-80 {\n  min-width: 80px;\n}\n.min-width-90 {\n  min-width: 90px;\n}\n.min-width-100 {\n  min-width: 100px;\n}\n.min-width-110 {\n  min-width: 110px;\n}\n.min-width-120 {\n  min-width: 120px;\n}\n.min-width-130 {\n  min-width: 130px;\n}\n.min-width-140 {\n  min-width: 140px;\n}\n.min-width-150 {\n  min-width: 150px;\n}\n.min-width-160 {\n  min-width: 160px;\n}\n.min-width-170 {\n  min-width: 170px;\n}\n.min-width-180 {\n  min-width: 180px;\n}\n.min-width-190 {\n  min-width: 190px;\n}\n.min-width-200 {\n  min-width: 200px;\n}\n.min-width-210 {\n  min-width: 210px;\n}\n.min-width-220 {\n  min-width: 220px;\n}\n.min-width-230 {\n  min-width: 230px;\n}\n.min-width-240 {\n  min-width: 240px;\n}\n.min-width-250 {\n  min-width: 250px;\n}\n.min-width-260 {\n  min-width: 260px;\n}\n.min-width-270 {\n  min-width: 270px;\n}\n.min-width-280 {\n  min-width: 280px;\n}\n.min-width-290 {\n  min-width: 290px;\n}\n.min-width-300 {\n  min-width: 300px;\n}\n.min-width-310 {\n  min-width: 310px;\n}\n.min-width-320 {\n  min-width: 320px;\n}\n.max-width-100 {\n  max-width: 100px;\n}\n.max-width-200 {\n  max-width: 200px;\n}\n.max-width-300 {\n  max-width: 300px;\n}\n.max-width-400 {\n  max-width: 400px;\n}\n.max-width-500 {\n  max-width: 500px;\n}\n.max-width-600 {\n  max-width: 600px;\n}\n.max-width-700 {\n  max-width: 700px;\n}\n.max-width-800 {\n  max-width: 800px;\n}\n.max-width-900 {\n  max-width: 900px;\n}\n.max-width-1000 {\n  max-width: 1000px;\n}\n.max-height-100 {\n  max-height: 100px;\n}\n.max-height-200 {\n  max-height: 200px;\n}\n.max-height-300 {\n  max-height: 300px;\n}\n.max-height-400 {\n  max-height: 400px;\n}\n.max-height-500 {\n  max-height: 500px;\n}\n.max-height-600 {\n  max-height: 600px;\n}\n.max-height-700 {\n  max-height: 700px;\n}\n.max-height-800 {\n  max-height: 800px;\n}\n.max-height-900 {\n  max-height: 900px;\n}\n.max-height-1000 {\n  max-height: 1000px;\n}\n/*常用间距*/\n.mt5 {\n  margin-top: 5px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.mb5 {\n  margin-bottom: 5px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.mt15 {\n  margin-top: 15px;\n}\n.mr15 {\n  margin-right: 15px;\n}\n.mb15 {\n  margin-bottom: 15px;\n}\n.ml15 {\n  margin-left: 15px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.mt25 {\n  margin-top: 25px;\n}\n.mr25 {\n  margin-right: 25px;\n}\n.mb25 {\n  margin-bottom: 25px;\n}\n.ml25 {\n  margin-left: 25px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.mr30 {\n  margin-right: 30px;\n}\n.mb30 {\n  margin-bottom: 30px;\n}\n.ml30 {\n  margin-left: 30px;\n}\n.mt35 {\n  margin-top: 35px;\n}\n.mr35 {\n  margin-right: 35px;\n}\n.mb35 {\n  margin-bottom: 35px;\n}\n.ml35 {\n  margin-left: 35px;\n}\n.mt40 {\n  margin-top: 40px;\n}\n.mr40 {\n  margin-right: 40px;\n}\n.mb40 {\n  margin-bottom: 40px;\n}\n.ml40 {\n  margin-left: 40px;\n}\n.mt45 {\n  margin-top: 45px;\n}\n.mr45 {\n  margin-right: 45px;\n}\n.mb45 {\n  margin-bottom: 45px;\n}\n.ml45 {\n  margin-left: 45px;\n}\n.mt50 {\n  margin-top: 50px;\n}\n.mr50 {\n  margin-right: 50px;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n.ml50 {\n  margin-left: 50px;\n}\n.mt55 {\n  margin-top: 55px;\n}\n.mr55 {\n  margin-right: 55px;\n}\n.mb55 {\n  margin-bottom: 55px;\n}\n.ml55 {\n  margin-left: 55px;\n}\n.mt60 {\n  margin-top: 60px;\n}\n.mr60 {\n  margin-right: 60px;\n}\n.mb60 {\n  margin-bottom: 60px;\n}\n.ml60 {\n  margin-left: 60px;\n}\n.mt65 {\n  margin-top: 65px;\n}\n.mr65 {\n  margin-right: 65px;\n}\n.mb65 {\n  margin-bottom: 65px;\n}\n.ml65 {\n  margin-left: 65px;\n}\n.mt70 {\n  margin-top: 70px;\n}\n.mr70 {\n  margin-right: 70px;\n}\n.mb70 {\n  margin-bottom: 70px;\n}\n.ml70 {\n  margin-left: 70px;\n}\n.mt75 {\n  margin-top: 75px;\n}\n.mr75 {\n  margin-right: 75px;\n}\n.mb75 {\n  margin-bottom: 75px;\n}\n.ml75 {\n  margin-left: 75px;\n}\n.mt80 {\n  margin-top: 80px;\n}\n.mr80 {\n  margin-right: 80px;\n}\n.mb80 {\n  margin-bottom: 80px;\n}\n.ml80 {\n  margin-left: 80px;\n}\n.mt85 {\n  margin-top: 85px;\n}\n.mr85 {\n  margin-right: 85px;\n}\n.mb85 {\n  margin-bottom: 85px;\n}\n.ml85 {\n  margin-left: 85px;\n}\n.mt90 {\n  margin-top: 90px;\n}\n.mr90 {\n  margin-right: 90px;\n}\n.mb90 {\n  margin-bottom: 90px;\n}\n.ml90 {\n  margin-left: 90px;\n}\n.mt95 {\n  margin-top: 95px;\n}\n.mr95 {\n  margin-right: 95px;\n}\n.mb95 {\n  margin-bottom: 95px;\n}\n.ml95 {\n  margin-left: 95px;\n}\n.mt100 {\n  margin-top: 100px;\n}\n.mr100 {\n  margin-right: 100px;\n}\n.mb100 {\n  margin-bottom: 100px;\n}\n.ml100 {\n  margin-left: 100px;\n}\n/*常用间距*/\n.pt5 {\n  padding-top: 5px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.pa5 {\n  padding: 5px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.pa10 {\n  padding: 10px;\n}\n.pt15 {\n  padding-top: 15px;\n}\n.pr15 {\n  padding-right: 15px;\n}\n.pb15 {\n  padding-bottom: 15px;\n}\n.pl15 {\n  padding-left: 15px;\n}\n.pa15 {\n  padding: 15px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n.pa20 {\n  padding: 20px;\n}\n.pt25 {\n  padding-top: 25px;\n}\n.pr25 {\n  padding-right: 25px;\n}\n.pb25 {\n  padding-bottom: 25px;\n}\n.pl25 {\n  padding-left: 25px;\n}\n.pa25 {\n  padding: 25px;\n}\n.pt30 {\n  padding-top: 30px;\n}\n.pr30 {\n  padding-right: 30px;\n}\n.pb30 {\n  padding-bottom: 30px;\n}\n.pl30 {\n  padding-left: 30px;\n}\n.pa30 {\n  padding: 30px;\n}\n.pt35 {\n  padding-top: 35px;\n}\n.pr35 {\n  padding-right: 35px;\n}\n.pb35 {\n  padding-bottom: 35px;\n}\n.pl35 {\n  padding-left: 35px;\n}\n.pa35 {\n  padding: 35px;\n}\n.pt40 {\n  padding-top: 40px;\n}\n.pr40 {\n  padding-right: 40px;\n}\n.pb40 {\n  padding-bottom: 40px;\n}\n.pl40 {\n  padding-left: 40px;\n}\n.pa40 {\n  padding: 40px;\n}\n.pt45 {\n  padding-top: 45px;\n}\n.pr45 {\n  padding-right: 45px;\n}\n.pb45 {\n  padding-bottom: 45px;\n}\n.pl45 {\n  padding-left: 45px;\n}\n.pa45 {\n  padding: 45px;\n}\n.pt50 {\n  padding-top: 50px;\n}\n.pr50 {\n  padding-right: 50px;\n}\n.pb50 {\n  padding-bottom: 50px;\n}\n.pl50 {\n  padding-left: 50px;\n}\n.pa50 {\n  padding: 50px;\n}\n.pt55 {\n  padding-top: 55px;\n}\n.pr55 {\n  padding-right: 55px;\n}\n.pb55 {\n  padding-bottom: 55px;\n}\n.pl55 {\n  padding-left: 55px;\n}\n.pa55 {\n  padding: 55px;\n}\n.pt60 {\n  padding-top: 60px;\n}\n.pr60 {\n  padding-right: 60px;\n}\n.pb60 {\n  padding-bottom: 60px;\n}\n.pl60 {\n  padding-left: 60px;\n}\n.pa60 {\n  padding: 60px;\n}\n.pt65 {\n  padding-top: 65px;\n}\n.pr65 {\n  padding-right: 65px;\n}\n.pb65 {\n  padding-bottom: 65px;\n}\n.pl65 {\n  padding-left: 65px;\n}\n.pa65 {\n  padding: 65px;\n}\n.pt70 {\n  padding-top: 70px;\n}\n.pr70 {\n  padding-right: 70px;\n}\n.pb70 {\n  padding-bottom: 70px;\n}\n.pl70 {\n  padding-left: 70px;\n}\n.pa70 {\n  padding: 70px;\n}\n.pt75 {\n  padding-top: 75px;\n}\n.pr75 {\n  padding-right: 75px;\n}\n.pb75 {\n  padding-bottom: 75px;\n}\n.pl75 {\n  padding-left: 75px;\n}\n.pa75 {\n  padding: 75px;\n}\n.pt80 {\n  padding-top: 80px;\n}\n.pr80 {\n  padding-right: 80px;\n}\n.pb80 {\n  padding-bottom: 80px;\n}\n.pl80 {\n  padding-left: 80px;\n}\n.pa80 {\n  padding: 80px;\n}\n.pt85 {\n  padding-top: 85px;\n}\n.pr85 {\n  padding-right: 85px;\n}\n.pb85 {\n  padding-bottom: 85px;\n}\n.pl85 {\n  padding-left: 85px;\n}\n.pa85 {\n  padding: 85px;\n}\n.pt90 {\n  padding-top: 90px;\n}\n.pr90 {\n  padding-right: 90px;\n}\n.pb90 {\n  padding-bottom: 90px;\n}\n.pl90 {\n  padding-left: 90px;\n}\n.pa90 {\n  padding: 90px;\n}\n.pt95 {\n  padding-top: 95px;\n}\n.pr95 {\n  padding-right: 95px;\n}\n.pb95 {\n  padding-bottom: 95px;\n}\n.pl95 {\n  padding-left: 95px;\n}\n.pa95 {\n  padding: 95px;\n}\n.pt100 {\n  padding-top: 100px;\n}\n.pr100 {\n  padding-right: 100px;\n}\n.pb100 {\n  padding-bottom: 100px;\n}\n.pl100 {\n  padding-left: 100px;\n}\n.pa100 {\n  padding: 100px;\n}\n.pt105 {\n  padding-top: 105px;\n}\n.pr105 {\n  padding-right: 105px;\n}\n.pb105 {\n  padding-bottom: 105px;\n}\n.pl105 {\n  padding-left: 105px;\n}\n.pa105 {\n  padding: 105px;\n}\n.pt110 {\n  padding-top: 110px;\n}\n.pr110 {\n  padding-right: 110px;\n}\n.pb110 {\n  padding-bottom: 110px;\n}\n.pl110 {\n  padding-left: 110px;\n}\n.pa110 {\n  padding: 110px;\n}\n.pt115 {\n  padding-top: 115px;\n}\n.pr115 {\n  padding-right: 115px;\n}\n.pb115 {\n  padding-bottom: 115px;\n}\n.pl115 {\n  padding-left: 115px;\n}\n.pa115 {\n  padding: 115px;\n}\n.pt120 {\n  padding-top: 120px;\n}\n.pr120 {\n  padding-right: 120px;\n}\n.pb120 {\n  padding-bottom: 120px;\n}\n.pl120 {\n  padding-left: 120px;\n}\n.pa120 {\n  padding: 120px;\n}\n.pt125 {\n  padding-top: 125px;\n}\n.pr125 {\n  padding-right: 125px;\n}\n.pb125 {\n  padding-bottom: 125px;\n}\n.pl125 {\n  padding-left: 125px;\n}\n.pa125 {\n  padding: 125px;\n}\n.pt130 {\n  padding-top: 130px;\n}\n.pr130 {\n  padding-right: 130px;\n}\n.pb130 {\n  padding-bottom: 130px;\n}\n.pl130 {\n  padding-left: 130px;\n}\n.pa130 {\n  padding: 130px;\n}\n.pt135 {\n  padding-top: 135px;\n}\n.pr135 {\n  padding-right: 135px;\n}\n.pb135 {\n  padding-bottom: 135px;\n}\n.pl135 {\n  padding-left: 135px;\n}\n.pa135 {\n  padding: 135px;\n}\n.pt140 {\n  padding-top: 140px;\n}\n.pr140 {\n  padding-right: 140px;\n}\n.pb140 {\n  padding-bottom: 140px;\n}\n.pl140 {\n  padding-left: 140px;\n}\n.pa140 {\n  padding: 140px;\n}\n.text-center,\n.tc {\n  text-align: center;\n}\n.text-right,\n.tr {\n  text-align: right;\n}\n.text-left,\n.tl {\n  text-align: left;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \"\";\n}\n.clearfix:after {\n  clear: both;\n}\n.border-radius {\n  border-radius: 4px;\n}\n.unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bold {\n  font-weight: bold;\n}\n.word-break {\n  word-break: break-all;\n}\n.font-tahoma {\n  font-family: \"Tahoma\";\n}\n.color-c {\n  color: #ccc;\n}\n.color-3 {\n  color: #333;\n}\n.color-6 {\n  color: #666;\n}\n.color-9 {\n  color: #999;\n}\n.color-f {\n  color: #fff;\n}\n.color-brand {\n  color: #4d7fff;\n}\n.color-h-3:hover {\n  color: #333;\n}\n.color-h-brand:hover {\n  color: #4d7fff;\n}\n.color-brand-vs {\n  color: #14c9ce;\n}\n.color-error {\n  color: #a40100;\n}\n.color-red {\n  color: #a40100;\n}\n.color-green {\n  color: #51a300;\n}\n.color-warn {\n  color: #ffb400;\n}\n.bb-e6 {\n  border-bottom: 1px solid #e6e6e6;\n}\n.bg {\n  background-color: #fafafa;\n}\n.radius {\n  border-radius: 4px;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-help {\n  cursor: help;\n}\n.cursor-move {\n  cursor: move;\n}\n.cursor-not-allow {\n  cursor: not-allowed;\n}\n.pa {\n  position: absolute;\n}\n.pr {\n  position: relative;\n}\n.ellipsis {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.inline {\n  display: inline;\n}\n.ib,\n.inline-block {\n  display: inline-block;\n}\n.none,\n.hide {\n  display: none;\n}\n.opacity0 {\n  opacity: 0;\n}\n.rotate180 {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n/* 小位移 */\n.displacement-1 {\n  position: relative;\n  top: 1px;\n}\n.displacement-2 {\n  position: relative;\n  top: 2px;\n}\n.displacement-3 {\n  position: relative;\n  top: 3px;\n}\n/** \n * <div class=\"search-box\">\n *      <i class=\"iconfont search-icon\">&#xe651;</i>\n *      <input type=\"text\" class=\"input search-input\"/>\n * </div>\n */\n.search-box {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.search-box .search-icon {\n  position: absolute;\n  top: 0;\n  left: 1px;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  color: #999;\n  font-size: 18px;\n}\n.search-box .search-input {\n  width: 100%;\n  padding-left: 32px;\n}\n.scroll-y {\n  overflow-y: auto;\n}\n.scroll-x {\n  overflow-x: auto;\n}\n.hidden-y {\n  overflow-y: hidden;\n}\n.hidden-x {\n  overflow-x: hidden;\n}\n.empty-white,\n.empty-area {\n  height: 200px;\n  padding-top: 40px;\n  text-align: center;\n  color: #999;\n}\n.empty-white .no-data,\n.empty-area .no-data {\n  height: 80px;\n  line-height: 80px;\n  font-size: 60px;\n  color: #ccc;\n}\n.empty-area {\n  background-color: #fafafa;\n}\n.tip-content,\n.notice-content,\n.error-content {\n  padding: 10px 20px;\n}\n.error-content {\n  background-color: #edcccc;\n  color: #a40100;\n  text-align: center;\n}\n.notice-content {\n  background-color: #fff8e6;\n  color: #ff5500;\n  text-align: center;\n}\n.tip-content {\n  position: relative;\n  background-color: #fafafa;\n  color: #999;\n  line-height: 18px;\n}\n.tip-content .tip-icon {\n  position: absolute;\n  top: 12px;\n  left: 10px;\n  color: #ccc;\n}\n.tip-content.has-icon {\n  padding-left: 30px;\n}\n.tip-content.has-border {\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n}\n.tip-content.has-highlight {\n  color: #333;\n}\n.tip-content.has-highlight .tip-icon {\n  color: #4d7fff;\n}\n.tip-content.in-dialog {\n  padding-left: 54px;\n  padding-right: 40px;\n}\n.tip-content.in-dialog .tip-icon {\n  left: 34px;\n}\n/*实心打标icon*/\n.brand-solid-icon,\n.grey-solid-icon {\n  display: inline-block;\n  min-width: 38px;\n  height: 19px;\n  padding: 0 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #fff;\n  text-align: center;\n  line-height: 18px;\n  font-weight: bold;\n}\n/*品牌色实心打标icon*/\n.brand-solid-icon {\n  background-color: #4d7fff;\n}\n/*灰色实心打标icon*/\n.grey-solid-icon {\n  background-color: #ccc;\n}\n/*空心打标*/\n.grey-hollow-icon,\n.brand-hollow-icon {\n  display: inline-block;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 10px;\n  font-size: 12px;\n  -webkit-transform: scale(0.84);\n          transform: scale(0.84);\n  text-align: center;\n  font-weight: bold;\n  line-height: 19px;\n}\n/*品牌色空心打标*/\n.brand-hollow-icon {\n  border: 1px solid #4d7fff;\n  color: #4d7fff;\n}\n.brand-hollow-icon:hover {\n  color: #4d7fff;\n}\n/*灰色空心打标*/\n.grey-hollow-icon {\n  border: 1px solid #999;\n  color: #999;\n}\n.grey-hollow-icon:hover {\n  color: #999;\n}\n/*动画*/\n/*上下浮动*/\n.mx-anim-suspension {\n  display: inline-block;\n  animation: suspension 1.4s ease-out infinite;\n  -webkit-animation: suspension 1.4s ease-out infinite;\n  -ms-animation: suspension 1.4s ease-out infinite;\n  -moz-animation: suspension 1.4s ease-out infinite;\n  -o-animation: suspension 1.4s ease-out infinite;\n  animation-fill-mode: forwards;\n  -webkit-animation-fill-mode: forwards;\n  -ms-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  -o-animation-fill-mode: forwards;\n}\n/* @dependent: ./index.less */\n.table {\n  width: 100%;\n}\n.table thead {\n  background-color: #fafafa;\n}\n.table thead tr th {\n  height: 60px;\n  padding: 0 8px;\n  color: #999;\n  border: none;\n}\n.table thead tr th:first-child {\n  padding-left: 15px;\n}\n.table thead tr th:last-child {\n  padding-right: 15px;\n}\n.table thead tr th.field-group {\n  height: 40px;\n  padding: 6px 10px 0;\n}\n.table thead tr th.field-group .group-name {\n  line-height: 28px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #ebebeb;\n}\n.table thead tr th.field-item {\n  height: 40px;\n  padding: 0 10px;\n}\n.table tbody {\n  background-color: #fff;\n}\n.table tbody tr {\n  /* 操作行在下方展示 */\n}\n.table tbody tr td {\n  padding: 20px 8px;\n  color: #333;\n  border-top: none;\n  border-bottom: 1px solid #ebebeb;\n  transition: background-color 0.25s ease-out;\n}\n.table tbody tr td:first-child {\n  padding-left: 15px;\n}\n.table tbody tr td:last-child {\n  padding-right: 15px;\n}\n.table tbody tr td.sub-mask {\n  background-color: #fff;\n  border-right: 1px solid #d8e3ff;\n  border-bottom: 0 none;\n}\n.table tbody tr td.sub-mask-last {\n  border-bottom: 1px solid #ebebeb;\n}\n.table tbody tr td .operations {\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n}\n.table tbody tr:last-child td,\n.table tbody tr.last-tr td {\n  border-bottom: 0 none;\n}\n.table tbody tr:hover td,\n.table tbody tr.hover-tr td {\n  background-color: #f6f9ff;\n}\n.table tbody tr:hover td.sub-mask,\n.table tbody tr.hover-tr td.sub-mask {\n  background-color: #fff;\n}\n.table tbody tr:hover td .operations,\n.table tbody tr.hover-tr td .operations {\n  opacity: 1;\n}\n.table tbody tr.empty-tr td,\n.table tbody tr.empty-tr:hover td,\n.table tbody tr.empty-tr.hover-tr td,\n.table tbody tr.empty-tr.hover-tr:hover td {\n  height: 200px;\n  text-align: center;\n  color: #999;\n  background-color: #fafafa;\n}\n.table tbody tr.empty-tr td .no-data,\n.table tbody tr.empty-tr:hover td .no-data,\n.table tbody tr.empty-tr.hover-tr td .no-data,\n.table tbody tr.empty-tr.hover-tr:hover td .no-data {\n  font-size: 60px;\n  color: #ccc;\n}\n.table tbody tr.next-operation-tr-open td {\n  border-bottom: 0 none;\n}\n.table tbody tr.operation-tr {\n  display: none;\n}\n.table tbody tr.operation-tr td {\n  padding: 8px 20px;\n  background-color: #eaf0ff;\n}\n.table tbody tr.operation-tr td.sub-mask {\n  background-color: #fff;\n}\n.table tbody tr.operation-tr.operation-tr-open {\n  display: table-row;\n}\n.table tbody tr.thead,\n.table tbody tr.thead:hover,\n.table tbody tr.thead.hover-tr {\n  background-color: #fafafa;\n}\n.table tbody tr.thead td,\n.table tbody tr.thead:hover td,\n.table tbody tr.thead.hover-tr td {\n  height: 60px;\n  padding: 0 8px;\n  color: #999;\n  border-bottom: 0 none;\n  background-color: transparent;\n}\n.table tbody tr.thead td.sub-mask,\n.table tbody tr.thead:hover td.sub-mask,\n.table tbody tr.thead.hover-tr td.sub-mask {\n  background-color: #fff;\n}\n.table tfoot tr td {\n  padding: 15px;\n  background-color: #fafafa;\n  border: none;\n}\n/* @dependent: ./index.less */\n.page-header {\n  position: relative;\n  margin-bottom: 20px;\n}\n.page-header .page-tip {\n  color: #999;\n}\n.page-header .header-filters {\n  position: absolute;\n  right: 0;\n  bottom: 12px;\n}\n.first-header {\n  margin-right: 20px;\n  line-height: 32px;\n  font-size: 20px;\n}\n.second-header {\n  margin-right: 20px;\n  line-height: 32px;\n  font-size: 16px;\n}\n/*表格底部翻页wrapper*/\n.table-pager-wrapper {\n  padding: 15px;\n  background-color: #fafafa;\n}\n/*css3变量*/\n:root {\n  --color-brand: #4d7fff;\n  --color-brand-hover: #4776ed;\n  --color-brand-vs: #14c9ce;\n  --color-brand-light: #d8e3ff;\n  --color-brand-opacity: #f6f9ff;\n  --color-brand-text: #ffffff;\n  --color-brand-text-hover: #ffffff;\n  --color-border: #e6e6e6;\n  --color-border-hover: #ccc;\n  --border-radius: 4px;\n  --table-color-border: #ebebeb;\n  --table-operation-color-bg: #f2f5fc;\n  --btn-border-radius: 4px;\n  --btn-brand: #4d7fff;\n  --btn-brand-gradient: #4d7fff;\n  --btn-brand-hover: #4776ed;\n  --btn-brand-gradient-hover: #4776ed;\n  --line-height: 1.5;\n  --font-size: 12px;\n  --color-primary: #333;\n  --color-secondary: #666;\n  --color-third: #999;\n  --color-hover: #f0f0f0;\n  --color-warn: #ffb400;\n  --color-red: #a40100;\n  --color-orange: #ff5500;\n  --color-green: #51a300;\n  --color-blue: #4d7fff;\n  --color-disabled: #eee;\n  --color-bg: #fafafa;\n  --color-bg-hover: #ccc;\n  --input-height: 32px;\n  --input-small-height: 26px;\n  --duration: 0.25s;\n}\n/*css3变量覆盖*/\n:root {\n  --color-brand-hover: #4776ed;\n}\n"]);
Magix.applyStyle(["_zs_gallery___test___layout_","/* @dependent: ./index.less */\n._zs_gallery___test___layout_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___layout_-third1 {\n  float: left;\n  width: 34%;\n}\n._zs_gallery___test___layout_-third2 {\n  float: left;\n  width: 66%;\n}\n._zs_gallery___test___layout_-half {\n  float: left;\n  width: 50%;\n}\n._zs_gallery___test___layout_-half-right {\n  border-left: 1px solid #e6e6e6;\n}\n._zs_gallery___test___layout_-half-left {\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery___test___layout_-example {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-title {\n  position: absolute;\n  top: -14px;\n  left: 10px;\n  height: 28px;\n  padding: 0 10px;\n  line-height: 28px;\n  background-color: #fff;\n  color: #999;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-content {\n  position: relative;\n  padding: 20px 20px 25px 20px;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc {\n  position: relative;\n  padding: 25px 0 25px 20px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc ._zs_gallery___test___layout_-desc-oper {\n  opacity: 0;\n  position: absolute;\n  top: 6px;\n  right: 0;\n  z-index: 10;\n  transition: opacity 0.25s;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc ._zs_gallery___test___layout_-desc-oper ._zs_gallery___test___layout_-desc-icon {\n  width: 36px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 20px;\n  color: #999;\n  text-align: center;\n  cursor: pointer;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc ._zs_gallery___test___layout_-desc-oper ._zs_gallery___test___layout_-desc-tip {\n  display: none;\n  position: absolute;\n  top: -34px;\n  left: -30px;\n  width: 86px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  background-color: rgba(33, 33, 33, 0.72);\n  border-radius: 4px;\n  line-height: 30px;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc ._zs_gallery___test___layout_-desc-oper ._zs_gallery___test___layout_-desc-tip ._zs_gallery___test___layout_-desc-tip-icon {\n  float: left;\n  margin-left: 5px;\n  height: 30px;\n  color: #51a300;\n  line-height: 30px;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc ._zs_gallery___test___layout_-desc-oper:hover ._zs_gallery___test___layout_-desc-tip {\n  display: block;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc:hover ._zs_gallery___test___layout_-desc-oper {\n  opacity: 1;\n}\n._zs_gallery___test___layout_-example ._zs_gallery___test___layout_-eg-desc._zs_gallery___test___layout_-top-none {\n  border-top: 0 none;\n}\n._zs_gallery___test___layout_-desc-table {\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery___test___layout_-desc-table tbody tr td {\n  background-color: #fff;\n}\n._zs_gallery___test___layout_-desc-table tbody tr:hover td {\n  background-color: #fff;\n}\n"]);
Magix.applyStyle("_zs_gallery___test___base_","/* @dependent: ./index.less */\n._zs_gallery___test___base_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___base_-base-header {\n  position: relative;\n  height: 52px;\n  padding-top: 10px;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  background-color: #fff;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-base-logo {\n  float: left;\n  width: 240px;\n  padding-left: 24px;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-header-line {\n  position: absolute;\n  top: 50%;\n  left: 240px;\n  width: 0;\n  height: 20px;\n  border-left: 1px solid #e6e6e6;\n  margin-top: -10px;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-base-search {\n  float: left;\n  padding-left: 10px;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-base-search input {\n  border: 0 none;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-header-tabs {\n  float: right;\n  margin-right: 140px;\n  line-height: 32px;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-header-tabs ._zs_gallery___test___base_-header-tab {\n  padding: 0 20px;\n  font-size: 14px;\n}\n._zs_gallery___test___base_-base-header ._zs_gallery___test___base_-header-tabs ._zs_gallery___test___base_-header-tab._zs_gallery___test___base_-cur {\n  color: #4d7fff;\n}\n._zs_gallery___test___base_-base {\n  position: relative;\n  margin-top: 18px;\n  padding-left: 240px;\n}\n._zs_gallery___test___base_-base-left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 19;\n  width: 240px;\n  padding-bottom: 10px;\n  border-right: 1px solid #e6e6e6;\n  overflow-y: auto;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav,\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-title {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  line-height: 38px;\n  cursor: pointer;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav {\n  height: 0;\n  border-left: 4px solid transparent;\n  transition: background-color 0.25s, height 0.25s, color 0.25s;\n  overflow: hidden;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav ._zs_gallery___test___base_-sub-icon {\n  position: absolute;\n  top: 0;\n  left: 30px;\n  height: 38px;\n  line-height: 36px;\n  font-size: 18px;\n  color: #999;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav:hover {\n  color: #4d7fff;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav:hover ._zs_gallery___test___base_-sub-icon {\n  color: #4d7fff;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav._zs_gallery___test___base_-cur {\n  color: #4d7fff;\n  border-left: 4px solid #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav._zs_gallery___test___base_-cur ._zs_gallery___test___base_-sub-icon {\n  color: #4d7fff;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav._zs_gallery___test___base_-sub {\n  padding-left: 52px;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-nav._zs_gallery___test___base_-expand {\n  height: 38px;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-title {\n  height: 38px;\n  cursor: pointer;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-title ._zs_gallery___test___base_-title-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 24px;\n  transition: -webkit-transform 0.25s;\n  transition: transform 0.25s;\n  transition: transform 0.25s, -webkit-transform 0.25s;\n  color: #999;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-title:hover ._zs_gallery___test___base_-title-icon {\n  color: #4d7fff;\n}\n._zs_gallery___test___base_-base-left ._zs_gallery___test___base_-title._zs_gallery___test___base_-expand ._zs_gallery___test___base_-title-icon {\n  top: 10px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery___test___base_-base-left._zs_gallery___test___base_-fixed {\n  position: fixed;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-content {\n  padding: 20px 0 40px 20px;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts {\n  margin-right: 20px;\n  margin-left: 20px;\n  padding: 20px 0 40px 0;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-prev,\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-next {\n  position: relative;\n  height: 22px;\n  line-height: 22px;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-prev ._zs_gallery___test___base_-context-icon,\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-next ._zs_gallery___test___base_-context-icon {\n  position: absolute;\n  top: 0;\n  line-height: 22px;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-prev {\n  float: left;\n  padding-left: 20px;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-prev ._zs_gallery___test___base_-context-icon {\n  left: 0;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-next {\n  float: right;\n  padding-right: 20px;\n}\n._zs_gallery___test___base_-base-main ._zs_gallery___test___base_-contexts ._zs_gallery___test___base_-next ._zs_gallery___test___base_-context-icon {\n  right: 0;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n._zs_gallery___test___base_-fixes {\n  position: fixed;\n  right: 0;\n  bottom: 60px;\n  z-index: 20;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix {\n  position: relative;\n  display: block;\n  width: 36px;\n  height: 36px;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix ._zs_gallery___test___base_-fix-tip,\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix ._zs_gallery___test___base_-fix-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 36px;\n  line-height: 36px;\n  transition: all 0.25s;\n  background-color: #fff;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix ._zs_gallery___test___base_-fix-tip {\n  z-index: 21;\n  width: 70px;\n  color: #fff;\n  text-align: right;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix ._zs_gallery___test___base_-fix-icon {\n  z-index: 22;\n  width: 36px;\n  border-width: 1px 0 0 1px;\n  border-color: #e6e6e6;\n  border-style: solid;\n  font-size: 22px;\n  color: #ccc;\n  text-align: center;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix:hover {\n  opacity: 0.95;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix:hover ._zs_gallery___test___base_-fix-icon {\n  background-color: #4d7fff;\n  border-color: #4d7fff;\n  color: #fff;\n}\n._zs_gallery___test___base_-fixes ._zs_gallery___test___base_-fix:hover ._zs_gallery___test___base_-fix-tip {\n  background-color: #4d7fff;\n  left: -70px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', selectedValue = $$.selectedValue, suggests = $$.suggests, headers = $$.headers, fixed = $$.fixed, minHeight = $$.minHeight, list = $$.list, path = $$.path, cur = $$.cur, view = $$.view, prev = $$.prev, next = $$.next; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya:_" class="_zs_gallery___test___base_-base-header"><div mxs="_zs_gallerya:_" class="_zs_gallery___test___base_-header-line"></div><div mxs="_zs_gallerya:a" class="_zs_gallery___test___base_-base-logo"><img src="https://img.alicdn.com/tfs/TB1719eJVGWBuNjy0FbXXb4sXXa-432-355.png" width="38"><span class="fontsize-18 lh32 ml10">Magix Galleries</span></div><div mxv mxa="_zs_gallerya:a" class="_zs_gallery___test___base_-base-search"><div mxv="suggests" class="w200" mx-suggest="' + $viewId + 'suggest()" mx-view="mx-suggest/index?selected=';
    $line = 9;
    $art = '=selectedValue';
    ;
    $p += ($expr = '<%!$eu(selectedValue)%>', $eu(selectedValue)) + '&placeholder=%E6%90%9C%E7%B4%A2&list=';
    $line = 11;
    $art = '@suggests';
    ;
    $p += ($expr = '<%@suggests%>', $i($$ref, suggests)) + '&listText=name&listValue=path&type=all"></div></div><div mxa="_zs_gallerya:b" class="_zs_gallery___test___base_-header-tabs">';
    $line = 18;
    $art = 'each headers as h';
    ;
    $expr = '<%for (var $art_ivhyesje$art_i = 0, $art_cziebrc$art_c = headers.length; $art_ivhyesje$art_i < $art_cziebrc$art_c; $art_ivhyesje$art_i++) {    var h = headers[$art_ivhyesje$art_i]%>';
    for (var $art_ivhyesje$art_i = 0, $art_cziebrc$art_c = headers.length; $art_ivhyesje$art_i < $art_cziebrc$art_c; $art_ivhyesje$art_i++) {
        var h = headers[$art_ivhyesje$art_i];
        $p += '<a href="#!';
        $line = 19;
        $art = '=h.path';
        ;
        $p += ($expr = '<%=h.path%>', $e(h.path)) + '" class="_zs_gallery___test___base_-header-tab ';
        $line = 19;
        $art = 'if h.cur';
        ;
        $expr = '<%if (h.cur) {%>';
        if (h.cur) {
            ;
            $p += ' _zs_gallery___test___base_-cur ';
            $line = 19;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '">';
        $line = 19;
        $art = '=h.name';
        ;
        $p += ($expr = '<%=h.name%>', $e(h.name)) + '</a>';
        $line = 20;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_gallerya:c" class="_zs_gallery___test___base_-base"><div class="_zs_gallery___test___base_-base-left ';
    $line = 24;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' _zs_gallery___test___base_-fixed ';
        $line = 24;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" style="height: ';
    $line = 24;
    $art = '=minHeight';
    ;
    $p += ($expr = '<%=minHeight%>', $e(minHeight)) + 'px;">';
    $line = 25;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_iffnyrm$art_i = 0, $art_cmoqjst$art_c = list.length; $art_iffnyrm$art_i < $art_cmoqjst$art_c; $art_iffnyrm$art_i++) {    var item = list[$art_iffnyrm$art_i]%>';
    for (var $art_iffnyrm$art_i = 0, $art_cmoqjst$art_c = list.length; $art_iffnyrm$art_i < $art_cmoqjst$art_c; $art_iffnyrm$art_i++) {
        var item = list[$art_iffnyrm$art_i];
        $p += ' ';
        $line = 26;
        $art = 'if item.name';
        ;
        $expr = '<%if (item.name) {%>';
        if (item.name) {
            ;
            $p += '<span class="_zs_gallery___test___base_-title ';
            $line = 27;
            $art = 'if item.expand';
            ;
            $expr = '<%if (item.expand) {%>';
            if (item.expand) {
                ;
                $p += ' _zs_gallery___test___base_-expand ';
                $line = 27;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + 'toggle({index:';
            $line = 28;
            $art = '=item.index';
            ;
            $p += ($expr = '<%=item.index%>', $e(item.index)) + '})">';
            $line = 29;
            $art = '!item.name';
            ;
            $p += ($expr = '<%!item.name%>', $n(item.name)) + '<i mxs="_zs_gallerya:b" class="mc-iconfont _zs_gallery___test___base_-title-icon">&#xe692;</i></span>';
            $line = 32;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 33;
        $art = 'each item.subs as sub';
        ;
        $expr = '<%for (var $art_iabqfhgw$art_i = 0, $art_objuztvvy$art_obj = item.subs, $art_chfbsehtylw$art_c = $art_objuztvvy$art_obj.length; $art_iabqfhgw$art_i < $art_chfbsehtylw$art_c; $art_iabqfhgw$art_i++) {        var sub = $art_objuztvvy$art_obj[$art_iabqfhgw$art_i]%>';
        for (var $art_iabqfhgw$art_i = 0, $art_objuztvvy$art_obj = item.subs, $art_chfbsehtylw$art_c = $art_objuztvvy$art_obj.length; $art_iabqfhgw$art_i < $art_chfbsehtylw$art_c; $art_iabqfhgw$art_i++) {
            var sub = $art_objuztvvy$art_obj[$art_iabqfhgw$art_i];
            $p += '<a class="_zs_gallery___test___base_-nav ';
            $line = 34;
            $art = 'if (sub.path == path)';
            ;
            $expr = '<%if (sub.path == path) {%>';
            if (sub.path == path) {
                ;
                $p += ' _zs_gallery___test___base_-cur ';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 34;
            $art = 'if item.name';
            ;
            $expr = '<%if (item.name) {%>';
            if (item.name) {
                ;
                $p += ' _zs_gallery___test___base_-sub ';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 34;
            $art = 'if item.expand';
            ;
            $expr = '<%if (item.expand) {%>';
            if (item.expand) {
                ;
                $p += ' _zs_gallery___test___base_-expand ';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" href="#!';
            $line = 35;
            $art = '=sub.path';
            ;
            $p += ($expr = '<%=sub.path%>', $e(sub.path)) + '"><i mxa="_zs_gallerya:d" class="mc-iconfont _zs_gallery___test___base_-sub-icon">';
            $line = 36;
            $art = '!sub.icon';
            ;
            $p += ($expr = '<%!sub.icon%>', $n(sub.icon)) + '</i>';
            $line = 37;
            $art = '!sub.name';
            ;
            $p += ($expr = '<%!sub.name%>', $n(sub.name)) + '</a>';
            $line = 39;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 40;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_gallerya:e" class="_zs_gallery___test___base_-base-main"><div mxv mxa="_zs_gallerya:f" class="_zs_gallery___test___base_-content"><div mxv="cur" ';
    $line = 45;
    $art = 'if cur.tip';
    ;
    $expr = '<%if (cur.tip) {%>';
    if (cur.tip) {
        ;
        $p += ' ';
        $line = 45;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-view="mx-title/index?content=';
    $line = 44;
    $art = '=cur.name';
    ;
    $p += ($expr = '<%!$eu(cur.name)%>', $eu(cur.name)) + '&tip=';
    $line = 45;
    $art = '@cur.tip';
    ;
    $p += ($expr = '<%@cur.tip%>', $i($$ref, cur.tip)) + '"></div><div mx-view="';
    $line = 47;
    $art = '=view';
    ;
    $p += ($expr = '<%=view%>', $e(view)) + '"><div mxs="_zs_gallerya:c" class="loading"><span class="loading-anim"></span></div></div></div><div mxa="_zs_gallerya:g" class="_zs_gallery___test___base_-contexts clearfix">';
    $line = 52;
    $art = 'if prev.path';
    ;
    $expr = '<%if (prev.path) {%>';
    if (prev.path) {
        ;
        $p += '<a href="#!';
        $line = 53;
        $art = '=prev.path';
        ;
        $p += ($expr = '<%=prev.path%>', $e(prev.path)) + '" class="_zs_gallery___test___base_-prev link-brand"><i mxs="_zs_gallerya:d" class="mc-iconfont _zs_gallery___test___base_-context-icon">&#xe63a;</i>上一篇：';
        $line = 55;
        $art = '!prev.name';
        ;
        $p += ($expr = '<%!prev.name%>', $n(prev.name)) + '</a>';
        $line = 57;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 58;
    $art = 'if next.path';
    ;
    $expr = '<%if (next.path) {%>';
    if (next.path) {
        ;
        $p += '<a href="#!';
        $line = 59;
        $art = '=next.path';
        ;
        $p += ($expr = '<%=next.path%>', $e(next.path)) + '" class="_zs_gallery___test___base_-next link-brand"><i mxs="_zs_gallerya:d" class="mc-iconfont _zs_gallery___test___base_-context-icon">&#xe63a;</i>下一篇：';
        $line = 61;
        $art = '!next.name';
        ;
        $p += ($expr = '<%!next.name%>', $n(next.name)) + '</a>';
        $line = 63;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div><div mxs="_zs_gallerya:e" class="_zs_gallery___test___base_-fixes"><a href="https://aone.alibaba-inc.com/project/768817/req?akProjectId=768817&spm=a2o8d.rdc_projecthome.0.0.70b27a26750VTM" target="_blank" rel="noopener noreferrer" class="_zs_gallery___test___base_-fix"><i class="mc-iconfont _zs_gallery___test___base_-fix-icon">&#xe64f;</i><span class="_zs_gallery___test___base_-fix-tip">给我提需求</span></a><a href="https://aone.alibaba-inc.com/project/768817/issue?spm=a2o8d.corp_prod_req_list.0.0.3e646b88s8ezBH" target="_blank" rel="noopener noreferrer" class="_zs_gallery___test___base_-fix"><i class="mc-iconfont _zs_gallery___test___base_-fix-icon">&#xe63d;</i><span class="_zs_gallery___test___base_-fix-tip">帮我找bug</span></a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s" class="_zs_gallery___test___base_-fix"><i class="mc-iconfont _zs_gallery___test___base_-fix-icon">&#xe677;</i><span class="_zs_gallery___test___base_-fix-tip">钉我一下</span></a><a href="javascript:;" class="_zs_gallery___test___base_-fix" mx-click="' + $viewId + 'back()"><i class="mc-iconfont _zs_gallery___test___base_-fix-icon">&#xe62d;</i><span class="_zs_gallery___test___base_-fix-tip">回到顶部</span></a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/base.html';
    throw msg;
} return $p; },
    init: function () {
        this.observeLocation({
            path: true
        });
    },
    render: function () {
        $(window).scrollTop(0);
        var that = this;
        var updater = that.updater;
        // 当前路径
        var loc = Magix.Router.parse();
        var path = loc.path;
        var headers = [{
                name: '组件',
                path: '/form/mixins'
            }, {
                name: '脚手架',
                path: '/all/pro/init'
            }, {
                name: '其他杂项',
                path: '/all/other/update'
            }];
        var map = {
            0: [{
                    name: '表单（mixins）',
                    subs: [{
                            name: '支持的校验项',
                            path: '/form/mixins',
                            icon: '&#xe64e;'
                        }, {
                            name: 'view挂载isValid',
                            path: '/form/valid',
                            icon: '&#xe621;'
                        }, {
                            name: '双向绑定 + 校验',
                            path: '/form/index',
                            icon: '&#xe60d;'
                        }, {
                            name: '警告类校验场景',
                            path: '/form/warn',
                            icon: '&#xe656;'
                        }]
                }, {
                    name: '表格（mixins）',
                    subs: [{
                            name: '表格使用说明及注意点',
                            path: '/table/desc',
                            icon: '&#xe64f;'
                        }, {
                            name: '表格左右分栏',
                            path: '/table/index1',
                            icon: '&#xe693;'
                        }, {
                            name: '表头分组 + 子表格',
                            path: '/table/index2',
                            icon: '&#xe770;'
                        }, {
                            name: '表头吸顶',
                            path: '/table/index11',
                            icon: '&#xe7b6;'
                        }, {
                            name: '操作项在下方',
                            path: '/table/index3',
                            icon: '&#xe7b5;'
                        }, {
                            name: '操作项在同一行',
                            path: '/table/index4',
                            icon: '&#xe7b5;'
                        }, {
                            name: '筛选项同表头一起吸顶',
                            path: '/table/index12',
                            icon: '&#xe7b5;'
                        }, {
                            name: '指标排序',
                            path: '/table/index10',
                            icon: '&#xe608;'
                        }, {
                            name: '展开子表格',
                            path: '/table/index6',
                            icon: '&#xeb73;'
                        }, {
                            name: 'checkbox选中操作行',
                            tip: 'mixins&nbsp;[mx-checkbox/storestate]&nbsp;和&nbsp;[mx-checkbox/linkage]',
                            path: '/table/index7',
                            icon: '&#xe695;'
                        }, {
                            name: '翻页版',
                            path: '/table/index5',
                            icon: '&#xe655;'
                        }, {
                            name: '普通表格',
                            path: '/table/index8',
                            icon: '&#xe63e;'
                        }, {
                            name: '任意colspan的计算',
                            path: '/table/index9',
                            icon: '&#xe79b;'
                        }]
                }, {
                    name: '数据交互',
                    subs: [{
                            name: '下拉框（单选）',
                            tip: '支持click展开和hover展开两种形式',
                            path: '/dropdown/index',
                            icon: '&#xe7a4;'
                        }, {
                            name: '下拉框（多选）',
                            tip: '支持click展开和hover展开两种形式',
                            path: '/dropdown/multiple',
                            icon: '&#xe7a4;'
                        }, {
                            name: '日历（选择单日）',
                            path: '/calendar/index',
                            icon: '&#xe60e;'
                        }, {
                            name: '日历（选择时间段）',
                            path: '/calendar/range',
                            icon: '&#xe60e;'
                        }, {
                            name: '分页',
                            path: '/pagination/index',
                            icon: '&#xe61a;'
                        }, {
                            name: '底边线tab切换',
                            tip: '一般适用于一级导航',
                            path: '/tabs/index',
                            icon: '&#xe62a;'
                        }, {
                            name: '盒状分组',
                            tip: '一般适用于快捷筛选',
                            path: '/tabs/box',
                            icon: '&#xe62a;'
                        }, {
                            name: '可编辑内容',
                            tip: 'hover显示编辑按钮',
                            path: '/editor/index',
                            icon: '&#xe698;'
                        }, {
                            name: '侧边导航分步流程',
                            path: '/main/index',
                            icon: '&#xe64c;'
                        }, {
                            name: '搜索',
                            tip: '支持选择类型搜索和普通搜索',
                            path: '/search/index',
                            icon: '&#xe651;'
                        }, {
                            name: '可选项提示suggest',
                            path: '/suggest/index',
                            icon: '&#xe654;'
                        }, {
                            name: '开关',
                            path: '/switch/index',
                            icon: '&#xe72c;'
                        }, {
                            name: '树状结构',
                            tip: '',
                            path: '/tree/index',
                            icon: '&#xe62b;'
                        }, {
                            name: '二级单选',
                            path: '/secradio/index',
                            icon: '&#xe657;'
                        }, {
                            name: '标签选择',
                            path: '/taginput/index',
                            icon: '&#xe794;'
                        }, {
                            name: '上传',
                            path: '/uploader/index',
                            icon: '&#xe63c;'
                        }, {
                            name: '复制',
                            tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://zenorocha.github.io/clipboard.js" class="color-brand">https://zenorocha.github.io/clipboard.js</a> 代码',
                            path: '/copy/index',
                            icon: '&#xe610;'
                        }, {
                            name: '单个滑块',
                            path: '/slider/index',
                            icon: '&#xe664;'
                        }, {
                            name: '滑块选择范围',
                            path: '/slider/range',
                            icon: '&#xe664;'
                        }, {
                            name: '指标默认配置及选择排序',
                            path: '/indics/index',
                            icon: '&#xe731;'
                        }, {
                            name: 'icon状态切换与显示',
                            tip: '结合iconfont使用，用icon缩略显示当前状态属性',
                            path: '/status/index',
                            icon: '&#xe61a;'
                        }, {
                            name: 'dropdown状态切换与显示',
                            tip: '结合iconfont使用，展现样式同dropdown',
                            path: '/status/dropdown',
                            icon: '&#xe7a4;'
                        }]
                }, {
                    name: '提示反馈',
                    subs: [{
                            name: 'popover气泡提示',
                            tip: '默认使用span标签生成，可自定义tag',
                            path: '/popover/index',
                            icon: '&#xe654;'
                        }, {
                            name: 'popconfirm气泡确认框',
                            tip: '点击出确认浮层',
                            path: '/popconfirm/index',
                            icon: '&#xe7ff;'
                        }, {
                            name: 'loading加载',
                            path: '/loading/index',
                            icon: '&#xe6ab;'
                        }, {
                            name: '异常页面',
                            tip: '404找不到页面',
                            path: '/error/index',
                            icon: '&#xe611;'
                        }, {
                            name: '旺旺点灯',
                            path: '/all/wangwang',
                            icon: '&#xe75c;'
                        }, {
                            name: '钉钉唤起',
                            tip: '<a class="color-brand" href="https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.WN76gC&treeId=176&articleId=106086&docType=1" target="_blank"  rel="noopener noreferrer">钉钉PC端统一跳转协议</a>',
                            path: '/all/dingding',
                            icon: '&#xe677;'
                        }, {
                            name: '万象客服问答',
                            tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                            path: '/wanxiang/index',
                            icon: '&#xe767;'
                        }]
                }, {
                    name: '数据展示',
                    subs: [{
                            name: '浮层',
                            tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），mxDialogGroup（内容分组显示）',
                            path: '/dialog/index',
                            icon: '&#xe7ff;'
                        }, {
                            name: '缩略图和预览',
                            tip: '支持图片，视频，html，文件链，套图（大小图）',
                            path: '/preview/index',
                            icon: '&#xe755;'
                        }, {
                            name: '轮播',
                            path: '/carousel/index',
                            icon: '&#xe78b;'
                        }]
                }, {
                    name: '样式',
                    subs: [{
                            name: '常用',
                            path: '/style/index',
                            icon: '&#xe62c;'
                        }, {
                            name: 'checkbox',
                            tip: '包装indeterminate状态，无需操作dom',
                            path: '/checkbox/index',
                            icon: '&#xe63f;'
                        }, {
                            name: '标题',
                            path: '/title/index',
                            icon: '&#xe786;'
                        }, {
                            name: '打标',
                            path: '/effects/icon',
                            icon: '&#xe600;'
                        }, {
                            name: '提示公告',
                            path: '/effects/notice',
                            icon: '&#xe662;'
                        }, {
                            name: '评分',
                            path: '/effects/star',
                            icon: '&#xe646;'
                        }, {
                            name: '进度比例',
                            tip: '条型，刻度型',
                            path: '/effects/progress',
                            icon: '&#xe6e4;'
                        }, {
                            name: '各种动效',
                            path: '/effects/anim',
                            icon: '&#xe66b;'
                        }, {
                            name: '空状态',
                            path: '/effects/empty',
                            icon: '&#xe685;'
                        }]
                }, {
                    name: '业务组件',
                    subs: [{
                            name: '阿里妈妈站点吊头',
                            path: '/header/index',
                            icon: '&#xe780;'
                        }, {
                            name: '阿里妈妈通用吊底',
                            path: '/footer/index',
                            icon: '&#xe617;'
                        }, {
                            name: '选择地域',
                            path: '/area/index',
                            icon: '&#xe663;'
                        }, {
                            name: '时段折扣',
                            path: '/duration/index',
                            icon: '&#xe67c;'
                        }, {
                            name: '时段选择',
                            path: '/hour/index',
                            icon: '&#xe67c;'
                        }]
                }],
            1: [{
                    subs: [{
                            name: '10分钟快速上手',
                            path: '/all/pro/init'
                        }, {
                            name: '定制主题 + 覆盖组件样式',
                            path: '/all/pro/theme'
                        }, {
                            name: '菜单配置',
                            path: '/all/pro/menu'
                        }, {
                            name: 'magix3跨项目公用view',
                            path: '/all/pro/cross'
                        }, {
                            name: '关于本地组件的约定',
                            path: '/all/pro/local'
                        }, {
                            name: 'chartpark图表',
                            tip: '接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=ru4x0jq" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>释剑</a>',
                            path: '/all/pro/chartpark'
                        }, {
                            name: '数据小站接入',
                            path: '/all/pro/data'
                        }, {
                            name: '淘宝登陆框接入',
                            tip: '接入文档<a rel="noopener noreferrer" href="https://lark.alipay.com/up/login-doc/xvgy82" target="_blank" class="link-brand">https://lark.alipay.com/up/login-doc/xvgy82</a>',
                            path: '/all/pro/login'
                        }, {
                            name: '页面监听参数变化回到顶部',
                            path: '/all/pro/top'
                        }]
                }],
            2: [{
                    subs: [{
                            name: '更新记录',
                            path: '/all/other/update'
                        }, {
                            name: '相关链接',
                            path: '/all/other/links'
                        }]
                }]
        };
        var curIndex = 0;
        if (path.indexOf('/all/other/') > -1) {
            // 脚手架相关内容
            curIndex = 2;
        }
        else if (path.indexOf('/all/pro/') > -1) {
            // 脚手架相关内容
            curIndex = 1;
        }
        headers[curIndex].cur = true;
        var list = map[curIndex];
        var suggests = [], //全局提示
        all = []; // 当前tab可选
        var _loop_1 = function (i_1) {
            map[i_1].forEach(function (item) {
                var subs = $.extend(true, [], item.subs);
                subs.forEach(function (sub) {
                    sub.name = headers[i_1].name + '&nbsp;-&nbsp;' + sub.name;
                });
                suggests = suggests.concat(subs);
            });
            if (i_1 == curIndex) {
                map[i_1].forEach(function (item, index) {
                    // 默认全部展开
                    item.index = index;
                    item.expand = true;
                    all = all.concat(item.subs);
                });
            }
        };
        for (var i_1 in map) {
            _loop_1(i_1);
        }
        var view = path.slice(1);
        var i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = '__test__' + view.slice(i);
        }
        else {
            view = 'mx-' + view.slice(0, i) + '/__test__' + view.slice(i);
        }
        // 当前路径所属组展开
        var curNames = [];
        list.forEach(function (item) {
            item.subs.forEach(function (sub) {
                if (sub.path == path) {
                    item.expand = true;
                    if (item.name) {
                        curNames.push(item.name);
                    }
                }
            });
        });
        var cur = {}, prev = {}, next = {};
        for (var index = 0; index < all.length; index++) {
            var sub = all[index];
            if (sub.path == path) {
                if (all[index - 1]) {
                    prev = all[index - 1];
                }
                if (all[index + 1]) {
                    next = all[index + 1];
                }
                curNames.push(sub.name);
                cur = {
                    name: curNames.join('&nbsp;-&nbsp;'),
                    tip: sub.tip
                };
            }
        }
        updater.digest({
            headers: headers,
            suggests: suggests,
            all: all,
            list: list,
            cur: cur,
            prev: prev,
            next: next,
            path: path,
            view: view,
            minHeight: $(window).height()
        });
        // 当前选中项滚动到可视范围之内
        var curNode = $('#' + that.id + ' ._zs_gallery___test___base_-nav._zs_gallery___test___base_-cur');
        if (curNode && curNode.length) {
            if (curNode[0].scrollIntoViewIfNeeded) {
                curNode[0].scrollIntoViewIfNeeded();
            }
            else if (curNode[0].scrollIntoView) {
                curNode[0].scrollIntoView();
            }
        }
    },
    'toggle<click>': function (e) {
        var updater = this.updater;
        var list = updater.get('list');
        list[e.params.index].expand = !list[e.params.index].expand;
        updater.digest({
            list: list
        });
    },
    'suggest<suggest>': function (e) {
        Magix.Router.to(e.selected.value);
    },
    '$win<scroll>': function (e) {
        var that = this;
        var mainNode = $('#' + that.id);
        var bodyNode = mainNode.find('._zs_gallery___test___base_-base-main');
        var scrollTop = $(window).scrollTop();
        var bodyTop = bodyNode.offset().top;
        if (scrollTop > bodyTop) {
            if (that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: true
            });
        }
        else {
            if (!that.updater.get('fixed')) {
                return;
            }
            that.updater.digest({
                fixed: false
            });
        }
    },
    '$win<resize>': function () {
        var that = this;
        clearTimeout(that.winResizeTimer);
        that.winResizeTimer = setTimeout(that.wrapAsync(function () {
            that.updater.set({
                minHeight: $(window).height()
            }).digest();
        }), 200);
    },
    'back<click>': function (e) {
        $(window).scrollTop(0);
    }
});

});