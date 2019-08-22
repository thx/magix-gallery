/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/base",["magix","$","./edit/logo","mx-suggest/index","mx-popover/index","mx-title/index"],(require,exports,module)=>{
/*Magix,$*/
require("./edit/logo");
require("mx-suggest/index");
require("mx-popover/index");
require("mx-title/index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle(["_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl_mx-style_index_","@charset \"UTF-8\";\n/* css3变量 跟 less变量 一一对应 */\n/* 说明文档：https://thx.github.io/magix-gallery/#!/all/pro/cross */\n:root {\n  --line-height: 1.5;\n  --font-size: 12px;\n  --input-height: calc(var(--font-size) + 20px);\n  --input-small-height: calc(var(--font-size) + 14px);\n  --color-brand: #4d7fff;\n  --color-brand-hover: #4470e0;\n  --color-brand-vs: #14c9ce;\n  --color-brand-light: #dfe8ff;\n  --color-brand-opacity: #edf2ff;\n  --color-brand-text: #ffffff;\n  --color-brand-text-hover: #ffffff;\n  --color-border: #e6e6e6;\n  --border-radius: 4px;\n  --border-highlight: #e6e6e6;\n  --border-highlight-hover: #ccc;\n  --btn-border-radius: var(--border-radius);\n  --btn-brand: var(--color-brand);\n  --btn-brand-gradient: var(--color-brand);\n  --btn-brand-hover: var(--color-brand-hover);\n  --btn-brand-gradient-hover: var(--color-brand-hover);\n  --btn-brand-text: var(--color-brand-text);\n  --btn-brand-text-hover: var(--color-brand-text-hover);\n  --btn-text: #333;\n  --btn-text-hover: #333;\n  --btn-border: var(--color-brand);\n  --btn-border-hover: var(--color-brand);\n  --btn-bg: var(--color-brand-opacity);\n  --btn-bg-hover: var(--color-brand-light);\n  --color-warn: #ffb400;\n  --color-red: #a40100;\n  --color-orange: #ff5500;\n  --color-green: #51a300;\n  --color-blue: #4d7fff;\n  --color-disabled: #eee;\n  --color-bg: #fafafa;\n  --color-bg-hover: #eee;\n  --duration: 0.25s;\n  --app-brand: var(--color-brand);\n  --app-brand-gradient: var(--color-brand);\n  --app-nav-bg: #303a58;\n  --app-bg: #e8ebf2;\n}\n/*css3变量覆盖*/\n/* @dependent: ./index.less */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, Arial, \"Microsoft Yahei\", \"Hiragino Sans GB\", \"Heiti SC\", \"WenQuanYi Micro Hei\", sans-serif;\n  color: #333;\n  font-size: var(--font-size);\n  -webkit-font-smoothing: antialiased;\n  line-height: var(--line-height);\n}\nbody,\ndl,\ndd,\nul,\nol,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nfigure,\nhr,\nthead,\ntbody,\ntfoot,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nul,\nol {\n  list-style-type: none;\n  list-style-image: none;\n}\na {\n  text-decoration: none;\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\na:focus {\n  outline: 0 none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow: auto;\n}\nq {\n  quotes: none;\n}\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\nsmall {\n  font-size: 85.7%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nth {\n  text-align: left;\n  font-weight: inherit;\n}\nimg {\n  border-style: none;\n  width: auto\\9;\n  height: auto;\n  max-width: 100%;\n  vertical-align: middle;\n  -ms-interpolation-mode: bicubic;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border-style: none;\n  white-space: normal;\n  *margin-left: -7px;\n}\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: middle;\n  *vertical-align: middle;\n}\ninput,\nbutton {\n  *overflow: visible;\n}\nbutton {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n     -moz-appearance: button;\n          appearance: button;\n  cursor: pointer;\n}\n/**\n* 重置按钮禁用时光标样式\n*/\nbutton[disabled],\ninput[disabled] {\n  cursor: not-allowed;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  margin-top: -2px;\n  padding: 0;\n  *height: 12px;\n  *width: 12px;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input {\n    line-height: normal !important;\n  }\n}\n/**\n* 1. 修正未定义为「inline-block」的元素\n* 2. 修正 Chrome、Firefox、Opera 中 「progress」元素 vertical-align 默认值不一致\n*/\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\nhtml {\n  box-sizing: border-box;\n}\n* {\n  box-sizing: inherit;\n}\n*:before,\n*:after {\n  box-sizing: inherit;\n}\ninput:focus,\ntextarea:focus,\na:focus,\nbutton:focus {\n  outline: none;\n  resize: none;\n}\na {\n  color: #333;\n  text-decoration: none;\n  transition: all var(--duration);\n}\na:hover {\n  color: var(--color-brand);\n}\na:hover,\na:focus,\na:active,\na:visited {\n  outline: 0;\n  text-decoration: none;\n}\na.link-light,\na.link-light:visited,\na.link-light:focus,\na.link-light:active {\n  color: #999;\n}\na.link-light:hover {\n  color: #666;\n}\na.link-grey,\na.link-grey:visited,\na.link-grey:focus,\na.link-grey:active {\n  color: #666;\n}\na.link-grey:hover {\n  color: #333;\n}\na.link-brand,\na.link-brand:visited,\na.link-brand:focus,\na.link-brand:active {\n  color: var(--color-brand);\n}\na.link-brand:hover {\n  color: var(--color-brand-hover);\n}\nlabel {\n  cursor: pointer;\n  display: inline-block;\n  max-width: 100%;\n  font-weight: 400;\n}\n[mx-view] item {\n  display: none;\n}\n/*文字选中样式*/\n::-moz-selection,\n::-moz-selection {\n  background-color: var(--color-brand-opacity);\n  color: white;\n}\n::selection,\n::-moz-selection {\n  background-color: var(--color-brand-opacity);\n  color: white;\n}\n/* @dependent: ./index.less */\n.btn,\n.mx-btn {\n  position: relative;\n  display: inline-block;\n  height: var(--input-height);\n  margin-bottom: 0;\n  padding: 0 10px;\n  font-size: var(--font-size);\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n  line-height: calc(var(--input-height) - 2px);\n  border-radius: var(--btn-border-radius);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--btn-border);\n  background-color: var(--btn-bg);\n  background-image: none;\n  color: var(--btn-text);\n  transition: border-color var(--duration), background-color var(--duration), color var(--duration);\n}\n.btn .btn-tag,\n.mx-btn .btn-tag {\n  margin-left: -12px;\n}\n.btn:hover,\n.mx-btn:hover,\n.btn.hover,\n.mx-btn.hover,\n.btn:active,\n.mx-btn:active {\n  border-color: var(--btn-border-hover);\n  background-color: var(--btn-bg-hover);\n  background-image: none;\n  color: var(--btn-text-hover);\n}\n.btn.btn-small,\n.mx-btn.btn-small {\n  height: var(--input-small-height);\n  line-height: calc(var(--input-small-height) - 2px);\n}\n.btn.btn-brand,\n.mx-btn.btn-brand {\n  padding: 0 11px;\n  line-height: var(--input-height);\n  border-width: 0;\n  background-color: var(--btn-brand);\n  background-image: linear-gradient(to right, transparent, var(--btn-brand-gradient));\n  color: var(--btn-brand-text);\n}\n.btn.btn-brand:hover,\n.mx-btn.btn-brand:hover,\n.btn.btn-brand.hover,\n.mx-btn.btn-brand.hover,\n.btn.btn-brand:active,\n.mx-btn.btn-brand:active {\n  line-height: var(--input-height);\n  border-width: 0;\n  background-color: var(--btn-brand-hover);\n  color: var(--btn-brand-text-hover);\n}\n.btn.btn-brand.btn-small,\n.mx-btn.btn-brand.btn-small {\n  line-height: var(--input-small-height);\n}\n.btn.btn-brand .btn-tag,\n.mx-btn.btn-brand .btn-tag {\n  background-color: #ff0000;\n}\n.btn.btn-brand .btn-tag .btn-tag-arrow,\n.mx-btn.btn-brand .btn-tag .btn-tag-arrow {\n  border-color: #ff0000 transparent transparent #ff0000;\n}\n.btn.btn-white,\n.mx-btn.btn-white {\n  border-color: #fff;\n  background-color: #fff;\n  background-image: none;\n}\n.btn.btn-white:hover,\n.mx-btn.btn-white:hover,\n.btn.btn-white.hover,\n.mx-btn.btn-white.hover,\n.btn.btn-white:active,\n.mx-btn.btn-white:active {\n  border-color: var(--color-bg);\n  background-color: var(--color-bg);\n  background-image: none;\n}\n.btn[disabled],\n.mx-btn[disabled],\n.btn[disabled]:hover,\n.mx-btn[disabled]:hover,\n.btn[disabled].hover,\n.mx-btn[disabled].hover,\n.btn[disabled]:active,\n.mx-btn[disabled]:active,\n.btn.btn-disabled,\n.mx-btn.btn-disabled,\n.btn.btn-disabled:hover,\n.mx-btn.btn-disabled:hover,\n.btn.btn-disabled.hover,\n.mx-btn.btn-disabled.hover,\n.btn.btn-disabled:active,\n.mx-btn.btn-disabled:active {\n  cursor: not-allowed;\n  line-height: calc(var(--input-height) - 2px);\n  border-width: 1px;\n  border-color: var(--color-border);\n  background-color: var(--color-disabled);\n  background-image: none;\n  color: #999;\n}\n.btn[disabled].btn-small,\n.mx-btn[disabled].btn-small,\n.btn[disabled]:hover.btn-small,\n.mx-btn[disabled]:hover.btn-small,\n.btn[disabled].hover.btn-small,\n.mx-btn[disabled].hover.btn-small,\n.btn[disabled]:active.btn-small,\n.mx-btn[disabled]:active.btn-small,\n.btn.btn-disabled.btn-small,\n.mx-btn.btn-disabled.btn-small,\n.btn.btn-disabled:hover.btn-small,\n.mx-btn.btn-disabled:hover.btn-small,\n.btn.btn-disabled.hover.btn-small,\n.mx-btn.btn-disabled.hover.btn-small,\n.btn.btn-disabled:active.btn-small,\n.mx-btn.btn-disabled:active.btn-small {\n  line-height: calc(var(--input-small-height) - 2px);\n}\n.btn[disabled] .btn-tag,\n.mx-btn[disabled] .btn-tag,\n.btn[disabled]:hover .btn-tag,\n.mx-btn[disabled]:hover .btn-tag,\n.btn[disabled].hover .btn-tag,\n.mx-btn[disabled].hover .btn-tag,\n.btn[disabled]:active .btn-tag,\n.mx-btn[disabled]:active .btn-tag,\n.btn.btn-disabled .btn-tag,\n.mx-btn.btn-disabled .btn-tag,\n.btn.btn-disabled:hover .btn-tag,\n.mx-btn.btn-disabled:hover .btn-tag,\n.btn.btn-disabled.hover .btn-tag,\n.mx-btn.btn-disabled.hover .btn-tag,\n.btn.btn-disabled:active .btn-tag,\n.mx-btn.btn-disabled:active .btn-tag {\n  background-color: #ccc;\n}\n.btn[disabled] .btn-tag .btn-tag-arrow,\n.mx-btn[disabled] .btn-tag .btn-tag-arrow,\n.btn[disabled]:hover .btn-tag .btn-tag-arrow,\n.mx-btn[disabled]:hover .btn-tag .btn-tag-arrow,\n.btn[disabled].hover .btn-tag .btn-tag-arrow,\n.mx-btn[disabled].hover .btn-tag .btn-tag-arrow,\n.btn[disabled]:active .btn-tag .btn-tag-arrow,\n.mx-btn[disabled]:active .btn-tag .btn-tag-arrow,\n.btn.btn-disabled .btn-tag .btn-tag-arrow,\n.mx-btn.btn-disabled .btn-tag .btn-tag-arrow,\n.btn.btn-disabled:hover .btn-tag .btn-tag-arrow,\n.mx-btn.btn-disabled:hover .btn-tag .btn-tag-arrow,\n.btn.btn-disabled.hover .btn-tag .btn-tag-arrow,\n.mx-btn.btn-disabled.hover .btn-tag .btn-tag-arrow,\n.btn.btn-disabled:active .btn-tag .btn-tag-arrow,\n.mx-btn.btn-disabled:active .btn-tag .btn-tag-arrow {\n  border-color: #ccc transparent transparent #ccc;\n}\n.mx-btn {\n  display: inline-flex;\n  align-items: center;\n}\n.mx-btn.mx-btn-custom {\n  border-color: var(--mx-btn-custom-color);\n  background-color: var(--mx-btn-custom-color);\n  background-image: none;\n  color: var(--mx-btn-custom-color-text);\n}\n.mx-btn.mx-btn-custom:hover,\n.mx-btn.mx-btn-custom.hover,\n.mx-btn.mx-btn-custom:active {\n  border-color: var(--mx-btn-custom-color-hover);\n  background-color: var(--mx-btn-custom-color-hover);\n  background-image: none;\n  color: var(--mx-btn-custom-color-hover-text);\n}\n/* @dependent: ./index.less */\n.dialog-header,\n.dialog-body {\n  padding: 16px 24px;\n}\n.dialog-header {\n  border-bottom: 1px solid var(--color-border);\n}\n.dialog-header .header-name {\n  font-size: 16px;\n}\n.dialog-footer {\n  padding: 10px 24px;\n  text-align: left;\n  border-top: 1px solid var(--color-border);\n}\n/* @dependent: ./index.less */\n::-moz-placeholder,\n::-moz-placeholder,\n:-ms-input-placeholder,\n::-webkit-input-placeholder {\n  opacity: 1;\n  color: #999;\n}\n::placeholder,\n::-moz-placeholder,\n:-ms-input-placeholder,\n::-webkit-input-placeholder {\n  opacity: 1;\n  color: #999;\n}\ninput,\ntextarea,\n.input,\n.textarea {\n  display: inline-block;\n  max-width: 100%;\n  font-size: var(--font-size);\n  border-color: var(--border-highlight);\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  background-color: #fff;\n  background-image: none;\n  box-shadow: none;\n  box-sizing: border-box;\n  transition: border-color var(--duration) ease-out;\n  color: #333;\n  outline: none;\n}\ninput:hover,\ntextarea:hover,\n.input:hover,\n.textarea:hover {\n  border-color: var(--border-highlight-hover);\n}\ninput:focus,\ntextarea:focus,\n.input:focus,\n.textarea:focus {\n  border-color: var(--color-brand);\n}\ninput[disabled],\ntextarea[disabled],\n.input[disabled],\n.textarea[disabled],\ninput[disabled]:hover,\ntextarea[disabled]:hover,\n.input[disabled]:hover,\n.textarea[disabled]:hover,\ninput[disabled]:focus,\ntextarea[disabled]:focus,\n.input[disabled]:focus,\n.textarea[disabled]:focus,\ninput[readonly],\ntextarea[readonly],\n.input[readonly],\n.textarea[readonly],\ninput[readonly]:hover,\ntextarea[readonly]:hover,\n.input[readonly]:hover,\n.textarea[readonly]:hover,\ninput[readonly]:focus,\ntextarea[readonly]:focus,\n.input[readonly]:focus,\n.textarea[readonly]:focus {\n  cursor: not-allowed;\n  border-color: var(--color-border);\n  background-color: var(--color-disabled);\n  color: #999;\n}\ninput,\n.input {\n  height: var(--input-height);\n  line-height: calc(var(--input-height) - 2px);\n  padding: 0 8px;\n}\ntextarea,\n.textarea {\n  line-height: calc(var(--font-size) + 8px);\n  padding: 8px;\n}\n.input-focus,\n.textarea-focus {\n  border-color: var(--color-brand);\n}\n.input-small {\n  height: var(--input-small-height);\n  line-height: calc(var(--input-small-height) - 2px);\n}\n@-webkit-keyframes checkboxAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  100% {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n  }\n}\n@keyframes checkboxAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  100% {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n  }\n}\n@-webkit-keyframes checkboxBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.8);\n    -webkit-transform: scale(1.8);\n    opacity: 0;\n  }\n}\n@keyframes checkboxBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.8);\n    -webkit-transform: scale(1.8);\n    opacity: 0;\n  }\n}\n:root {\n  --mx-checkbox-color: #ccc;\n  --mx-checkbox-size: calc(var(--font-size) + 2px);\n}\ninput[type=\"checkbox\"],\n.checkbox {\n  width: var(--mx-checkbox-size);\n  height: var(--mx-checkbox-size);\n  margin-right: 4px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  vertical-align: middle;\n  background-color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--mx-checkbox-color);\n  cursor: pointer;\n  border-radius: 2px;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color var(--duration), background-color var(--duration);\n}\ninput[type=\"checkbox\"]:focus,\n.checkbox:focus {\n  border-color: var(--mx-checkbox-color);\n}\ninput[type=\"checkbox\"]:hover,\n.checkbox:hover {\n  border-color: var(--color-brand);\n}\ninput[type=\"checkbox\"]:checked,\n.checkbox:checked,\ninput[type=\"checkbox\"].checked,\n.checkbox.checked {\n  border-color: var(--color-brand);\n  background-color: var(--color-brand);\n}\ninput[type=\"checkbox\"]:checked:after,\n.checkbox:checked:after,\ninput[type=\"checkbox\"].checked:after,\n.checkbox.checked:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  background-image: url(https://img.alicdn.com/tps/TB1bSBzLVXXXXXfXFXXXXXXXXXX-1000-1000.svg);\n  background-size: 100%;\n  color: white;\n}\ninput[type=\"checkbox\"]:disabled,\n.checkbox:disabled,\ninput[type=\"checkbox\"].disabled,\n.checkbox.disabled {\n  border-color: var(--color-border);\n  background-color: var(--color-bg);\n}\ninput[type=\"checkbox\"]:disabled:checked,\n.checkbox:disabled:checked,\ninput[type=\"checkbox\"].disabled:checked,\n.checkbox.disabled:checked,\ninput[type=\"checkbox\"]:disabled.checked,\n.checkbox:disabled.checked,\ninput[type=\"checkbox\"].disabled.checked,\n.checkbox.disabled.checked {\n  border-color: var(--mx-checkbox-color);\n  background-color: var(--mx-checkbox-color);\n}\ninput[type=\"checkbox\"]:indeterminate,\n.checkbox:indeterminate,\ninput[type=\"checkbox\"].indeterminate,\n.checkbox.indeterminate {\n  border-color: var(--color-brand);\n  background-color: var(--color-brand);\n}\ninput[type=\"checkbox\"]:indeterminate:after,\n.checkbox:indeterminate:after,\ninput[type=\"checkbox\"].indeterminate:after,\n.checkbox.indeterminate:after {\n  content: '';\n  display: block;\n  height: calc(var(--mx-checkbox-size) / 6);\n  width: calc(var(--mx-checkbox-size) - 6px);\n  margin: 40% auto;\n  background-color: #fff;\n}\ninput[type=\"checkbox\"]:indeterminate:disabled,\n.checkbox:indeterminate:disabled,\ninput[type=\"checkbox\"].indeterminate:disabled,\n.checkbox.indeterminate:disabled,\ninput[type=\"checkbox\"]:indeterminate.disabled,\n.checkbox:indeterminate.disabled,\ninput[type=\"checkbox\"].indeterminate.disabled,\n.checkbox.indeterminate.disabled {\n  border-color: var(--mx-checkbox-color);\n  background-color: var(--mx-checkbox-color);\n}\ninput[type=\"checkbox\"].anim-checkbox,\n.checkbox.anim-checkbox {\n  position: relative;\n}\ninput[type=\"checkbox\"].anim-checkbox:checked:after,\n.checkbox.anim-checkbox:checked:after {\n  -webkit-animation: checkboxAfter var(--duration) ease-out;\n  animation: checkboxAfter var(--duration) ease-out;\n}\ninput[type=\"checkbox\"].anim-checkbox:checked:before,\n.checkbox.anim-checkbox:checked:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  border: 1px solid var(--color-brand);\n  -webkit-animation: checkboxBefore var(--duration) ease-out;\n  animation: checkboxBefore var(--duration) ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\ninput[type=\"checkbox\"].anim-checkbox:disabled:checked:before,\n.checkbox.anim-checkbox:disabled:checked:before {\n  content: none;\n}\n@-webkit-keyframes radioAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.5);\n    -webkit-transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes radioAfter {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.5);\n    -webkit-transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes radioBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.6);\n    -webkit-transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes radioBefore {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.6);\n    -webkit-transform: scale(1.6);\n    opacity: 0;\n  }\n}\ninput[type=\"radio\"],\n.radio {\n  position: relative;\n  width: var(--mx-checkbox-size);\n  height: var(--mx-checkbox-size);\n  margin-right: 4px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--mx-checkbox-color);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  border-radius: 50%;\n  outline: none;\n  transition: border-color var(--duration);\n}\ninput[type=\"radio\"]:focus,\n.radio:focus {\n  border-color: var(--mx-checkbox-color);\n}\ninput[type=\"radio\"]:hover,\n.radio:hover {\n  border-color: var(--color-brand);\n}\ninput[type=\"radio\"]:checked,\n.radio:checked {\n  background-color: var(--color-brand);\n  border-color: var(--color-brand);\n}\ninput[type=\"radio\"]:checked:after,\n.radio:checked:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin-top: -3px;\n  margin-left: -3px;\n  border-radius: 50%;\n  background-color: #fff;\n}\ninput[type=\"radio\"]:checked:hover,\n.radio:checked:hover {\n  border-color: var(--color-brand);\n}\ninput[type=\"radio\"]:disabled,\n.radio:disabled {\n  background-color: var(--color-bg);\n  border-color: var(--color-border);\n}\ninput[type=\"radio\"]:disabled:hover,\n.radio:disabled:hover {\n  border-color: var(--color-border);\n}\ninput[type=\"radio\"]:disabled:after,\n.radio:disabled:after {\n  background-color: var(--mx-checkbox-color);\n}\ninput[type=\"radio\"].anim-radio,\n.radio.anim-radio {\n  position: relative;\n  width: calc(var(--mx-checkbox-size) + 2px);\n  height: calc(var(--mx-checkbox-size) + 2px);\n}\ninput[type=\"radio\"].anim-radio:checked,\n.radio.anim-radio:checked {\n  background-color: #fff;\n  border-color: var(--color-brand);\n}\ninput[type=\"radio\"].anim-radio:checked:after,\n.radio.anim-radio:checked:after {\n  background-color: var(--color-brand);\n  -webkit-animation: radioAfter var(--duration) ease-out;\n  animation: radioAfter var(--duration) ease-out;\n}\ninput[type=\"radio\"].anim-radio:checked:before,\n.radio.anim-radio:checked:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  border: 1px solid var(--color-brand);\n  -webkit-animation: radioBefore var(--duration) ease-out;\n  animation: radioBefore var(--duration) ease-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\ninput[type=\"radio\"].anim-radio:disabled,\n.radio.anim-radio:disabled {\n  background-color: var(--color-bg);\n  border-color: var(--color-border);\n}\ninput[type=\"radio\"].anim-radio:disabled:hover,\n.radio.anim-radio:disabled:hover {\n  border-color: var(--color-border);\n}\ninput[type=\"radio\"].anim-radio:disabled:after,\n.radio.anim-radio:disabled:after {\n  background-color: var(--mx-checkbox-color);\n}\ninput[type=\"radio\"].anim-radio:disabled:checked:before,\n.radio.anim-radio:disabled:checked:before {\n  content: none;\n}\n.form {\n  --mx-form-label-size: calc(var(--font-size) * 8);\n}\n.form .form-item {\n  position: relative;\n  padding-left: var(--mx-form-label-size);\n  margin-bottom: 30px;\n}\n.form .form-item .form-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--mx-form-label-size);\n  line-height: var(--input-height);\n  vertical-align: top;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  cursor: default;\n  color: #666;\n}\n.form .form-item .form-label.label-right {\n  text-align: right;\n}\n.form .form-item .form-label.label-right.form-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: '*';\n  font-family: SimSun;\n  line-height: 1;\n  color: var(--color-red);\n}\n.form .form-item .form-content {\n  position: relative;\n  min-height: var(--input-height);\n  line-height: var(--input-height);\n}\n.form .form-item:last-child {\n  margin-bottom: 0;\n}\n.form .form-footer {\n  margin-left: var(--mx-form-label-size);\n}\n.form.small-form .form-item {\n  margin-bottom: 20px;\n}\n.form.small-form .form-item:last-child {\n  margin-bottom: 0;\n}\n.form.align-right .form-label {\n  padding-right: 20px;\n  text-align: right;\n}\n.form-4 {\n  --mx-form-label-size: calc(var(--font-size) * 4);\n}\n.form-6 {\n  --mx-form-label-size: calc(var(--font-size) * 6);\n}\n.form-8 {\n  --mx-form-label-size: calc(var(--font-size) * 8);\n}\n.form-10 {\n  --mx-form-label-size: calc(var(--font-size) * 10);\n}\n/* @dependent: ./index.less */\n@font-face {\n  font-family: 'mc-iconfont';\n  /* project id 386526 */\n  src: url('//at.alicdn.com/t/font_386526_tgm0ifbso9n.eot');\n  src: url('//at.alicdn.com/t/font_386526_tgm0ifbso9n.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_386526_tgm0ifbso9n.woff2') format('woff2'), url('//at.alicdn.com/t/font_386526_tgm0ifbso9n.woff') format('woff'), url('//at.alicdn.com/t/font_386526_tgm0ifbso9n.ttf') format('truetype'), url('//at.alicdn.com/t/font_386526_tgm0ifbso9n.svg#iconfont') format('svg');\n}\n.mc-iconfont {\n  display: inline-block;\n  position: relative;\n  font-family: \"mc-iconfont\";\n  font-style: normal;\n  font-size: 16px;\n  font-weight: normal;\n  font-variant: normal;\n  font-display: fallback;\n  line-height: 1;\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* @dependent: ./index.less */\n@-webkit-keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.loading {\n  width: 150px;\n  margin: 0 auto;\n  line-height: 0;\n  text-align: center;\n}\n.loading:before,\n.loading:after {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  content: \"\";\n  background-color: var(--color-border);\n  border-radius: 50%;\n  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;\n          animation: sk-bouncedelay 1s infinite ease-in-out both;\n}\n.loading:before {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n}\n.loading .loading-anim {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin: 0 10px;\n  background-color: var(--color-border);\n  border-radius: 50%;\n  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;\n          animation: sk-bouncedelay 1s infinite ease-in-out both;\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n}\n.mx-loading-bg-brand {\n  background-color: var(--color-brand);\n}\n.mx-loading-bg-grey {\n  background-color: var(--color-border);\n}\n/*** square ***/\n@-webkit-keyframes square-anim {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n@keyframes square-anim {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n.mx-loading-square {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  -webkit-animation: square-anim 1.2s infinite ease-in-out;\n          animation: square-anim 1.2s infinite ease-in-out;\n}\n/*** Double Bounce ***/\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n.mx-loading-double-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.4;\n  -webkit-animation: bounce 2s infinite ease-in-out;\n          animation: bounce 2s infinite ease-in-out;\n}\n.mx-loading-double-circle2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n/*** Rectangle Bounce ***/\n@-webkit-keyframes rectangle-anim {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n  }\n}\n@keyframes rectangle-anim {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n  }\n}\n.mx-loading-rects {\n  text-align: center;\n  height: 100%;\n}\n.mx-loading-rects .mx-loading-rect {\n  display: inline-block;\n  height: 100%;\n  width: 4px;\n  border-radius: 2px;\n  margin-right: 2px;\n  -webkit-animation: rectangle-anim 1.2s infinite ease-in-out;\n          animation: rectangle-anim 1.2s infinite ease-in-out;\n}\n.mx-loading-rects .mx-loading-rect2 {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n.mx-loading-rects .mx-loading-rect3 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n.mx-loading-rects .mx-loading-rect4 {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n.mx-loading-rects .mx-loading-rect5 {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n/*** Wandering Cubes ***/\n@-webkit-keyframes cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n.mx-loading-cube1,\n.mx-loading-cube2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  -webkit-animation: cubemove 1.8s infinite ease-in-out;\n          animation: cubemove 1.8s infinite ease-in-out;\n}\n.mx-loading-cube2 {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n/***** Pulse *****/\n@-webkit-keyframes scaleout {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes scaleout {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n.mx-loading-pulse {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  -webkit-animation: scaleout 1s infinite ease-in-out;\n          animation: scaleout 1s infinite ease-in-out;\n}\n/*** Chasing dots ***/\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.mx-loading-dots {\n  position: relative;\n  text-align: center;\n  height: 100%;\n  -webkit-animation: rotate 2s infinite linear;\n          animation: rotate 2s infinite linear;\n}\n.mx-loading-dots .mx-loading-dot1,\n.mx-loading-dots .mx-loading-dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  border-radius: 100%;\n  -webkit-animation: bounce 2s infinite ease-in-out;\n          animation: bounce 2s infinite ease-in-out;\n}\n.mx-loading-dots .mx-loading-dot2 {\n  top: auto;\n  bottom: 0px;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n/***** Three-bounce ***/\n@-webkit-keyframes bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@keyframes bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.mx-loading-three-bounce {\n  display: inline-block;\n  width: 30%;\n  height: 30%;\n  margin-right: 5%;\n  border-radius: 50%;\n  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n          animation: bouncedelay 1.4s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.mx-loading-three-bounce:last-child {\n  margin-right: 0;\n}\n.mx-loading-three-bounce1 {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n}\n.mx-loading-three-bounce2 {\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n}\n/***** Circle spinner ***/\n.mx-loading-spinner-circle {\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  position: absolute;\n  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n  animation: bouncedelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.mx-loading-spinner-circle1 {\n  top: 0;\n  left: 0;\n}\n.mx-loading-spinner-circle2 {\n  top: 0;\n  right: 0;\n}\n.mx-loading-spinner-circle3 {\n  right: 0;\n  bottom: 0;\n}\n.mx-loading-spinner-circle4 {\n  left: 0;\n  bottom: 0;\n}\n.mx-loading-spinner {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.mx-loading-spinner1 .mx-loading-spinner-circle2 {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n.mx-loading-spinner1 .mx-loading-spinner-circle3 {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n.mx-loading-spinner1 .mx-loading-spinner-circle4 {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.mx-loading-spinner2 {\n  transform: rotateZ(45deg);\n}\n.mx-loading-spinner2 .mx-loading-spinner-circle1 {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n.mx-loading-spinner2 .mx-loading-spinner-circle2 {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n.mx-loading-spinner2 .mx-loading-spinner-circle3 {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n.mx-loading-spinner2 .mx-loading-spinner-circle4 {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n.mx-loading-spinner3 {\n  transform: rotateZ(90deg);\n}\n.mx-loading-spinner3 .mx-loading-spinner-circle1 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n.mx-loading-spinner3 .mx-loading-spinner-circle2 {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n.mx-loading-spinner3 .mx-loading-spinner-circle3 {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n.mx-loading-spinner3 .mx-loading-spinner-circle4 {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n}\n/* @dependent: ./index.less */\n/* 常用字号 */\n.fontsize-12 {\n  font-size: 12px;\n}\n.fontsize-14 {\n  font-size: 14px;\n}\n.fontsize-16 {\n  font-size: 16px;\n}\n.fontsize-18 {\n  font-size: 18px;\n}\n.fontsize-20 {\n  font-size: 20px;\n}\n.fontsize-22 {\n  font-size: 22px;\n}\n.fontsize-24 {\n  font-size: 24px;\n}\n.fontsize-26 {\n  font-size: 26px;\n}\n.fontsize-28 {\n  font-size: 28px;\n}\n.fontsize-30 {\n  font-size: 30px;\n}\n.fontsize-32 {\n  font-size: 32px;\n}\n.fontsize-34 {\n  font-size: 34px;\n}\n.fontsize-36 {\n  font-size: 36px;\n}\n.fontsize-38 {\n  font-size: 38px;\n}\n.fontsize-40 {\n  font-size: 40px;\n}\n/* 常用字号 */\n.lh14 {\n  line-height: 14px;\n}\n.lh16 {\n  line-height: 16px;\n}\n.lh18 {\n  line-height: 18px;\n}\n.lh20 {\n  line-height: 20px;\n}\n.lh22 {\n  line-height: 22px;\n}\n.lh24 {\n  line-height: 24px;\n}\n.lh26 {\n  line-height: 26px;\n}\n.lh28 {\n  line-height: 28px;\n}\n.lh30 {\n  line-height: 30px;\n}\n.lh32 {\n  line-height: 32px;\n}\n.lh34 {\n  line-height: 34px;\n}\n.lh36 {\n  line-height: 36px;\n}\n/*常用宽度*/\n.w60 {\n  width: 60px;\n}\n.w70 {\n  width: 70px;\n}\n.w80 {\n  width: 80px;\n}\n.w90 {\n  width: 90px;\n}\n.w100 {\n  width: 100px;\n}\n.w110 {\n  width: 110px;\n}\n.w120 {\n  width: 120px;\n}\n.w130 {\n  width: 130px;\n}\n.w140 {\n  width: 140px;\n}\n.w150 {\n  width: 150px;\n}\n.w160 {\n  width: 160px;\n}\n.w170 {\n  width: 170px;\n}\n.w180 {\n  width: 180px;\n}\n.w190 {\n  width: 190px;\n}\n.w200 {\n  width: 200px;\n}\n.w210 {\n  width: 210px;\n}\n.w220 {\n  width: 220px;\n}\n.w230 {\n  width: 230px;\n}\n.w240 {\n  width: 240px;\n}\n.w250 {\n  width: 250px;\n}\n.w260 {\n  width: 260px;\n}\n.w270 {\n  width: 270px;\n}\n.w280 {\n  width: 280px;\n}\n.w290 {\n  width: 290px;\n}\n.w300 {\n  width: 300px;\n}\n.w310 {\n  width: 310px;\n}\n.w320 {\n  width: 320px;\n}\n.w330 {\n  width: 330px;\n}\n.w340 {\n  width: 340px;\n}\n.w350 {\n  width: 350px;\n}\n.w360 {\n  width: 360px;\n}\n.w370 {\n  width: 370px;\n}\n.w380 {\n  width: 380px;\n}\n.w390 {\n  width: 390px;\n}\n.w400 {\n  width: 400px;\n}\n.w410 {\n  width: 410px;\n}\n.w420 {\n  width: 420px;\n}\n.w430 {\n  width: 430px;\n}\n.w440 {\n  width: 440px;\n}\n.w450 {\n  width: 450px;\n}\n.w460 {\n  width: 460px;\n}\n.w470 {\n  width: 470px;\n}\n.w480 {\n  width: 480px;\n}\n.w490 {\n  width: 490px;\n}\n.w500 {\n  width: 500px;\n}\n/*常用高度*/\n.h50 {\n  height: 50px;\n}\n.h60 {\n  height: 60px;\n}\n.h70 {\n  height: 70px;\n}\n.h80 {\n  height: 80px;\n}\n.h90 {\n  height: 90px;\n}\n.h100 {\n  height: 100px;\n}\n.h110 {\n  height: 110px;\n}\n.h120 {\n  height: 120px;\n}\n.h130 {\n  height: 130px;\n}\n.h140 {\n  height: 140px;\n}\n.h150 {\n  height: 150px;\n}\n.h160 {\n  height: 160px;\n}\n.h170 {\n  height: 170px;\n}\n.h180 {\n  height: 180px;\n}\n.h190 {\n  height: 190px;\n}\n.h200 {\n  height: 200px;\n}\n.h210 {\n  height: 210px;\n}\n.h220 {\n  height: 220px;\n}\n.h230 {\n  height: 230px;\n}\n.h240 {\n  height: 240px;\n}\n.h250 {\n  height: 250px;\n}\n.h260 {\n  height: 260px;\n}\n.h270 {\n  height: 270px;\n}\n.h280 {\n  height: 280px;\n}\n.h290 {\n  height: 290px;\n}\n.h300 {\n  height: 300px;\n}\n.h310 {\n  height: 310px;\n}\n.h320 {\n  height: 320px;\n}\n/*常用最小宽度*/\n.min-width-10 {\n  min-width: 10px;\n}\n.min-width-20 {\n  min-width: 20px;\n}\n.min-width-30 {\n  min-width: 30px;\n}\n.min-width-40 {\n  min-width: 40px;\n}\n.min-width-50 {\n  min-width: 50px;\n}\n.min-width-60 {\n  min-width: 60px;\n}\n.min-width-70 {\n  min-width: 70px;\n}\n.min-width-80 {\n  min-width: 80px;\n}\n.min-width-90 {\n  min-width: 90px;\n}\n.min-width-100 {\n  min-width: 100px;\n}\n.min-width-110 {\n  min-width: 110px;\n}\n.min-width-120 {\n  min-width: 120px;\n}\n.min-width-130 {\n  min-width: 130px;\n}\n.min-width-140 {\n  min-width: 140px;\n}\n.min-width-150 {\n  min-width: 150px;\n}\n.min-width-160 {\n  min-width: 160px;\n}\n.min-width-170 {\n  min-width: 170px;\n}\n.min-width-180 {\n  min-width: 180px;\n}\n.min-width-190 {\n  min-width: 190px;\n}\n.min-width-200 {\n  min-width: 200px;\n}\n.min-width-210 {\n  min-width: 210px;\n}\n.min-width-220 {\n  min-width: 220px;\n}\n.min-width-230 {\n  min-width: 230px;\n}\n.min-width-240 {\n  min-width: 240px;\n}\n.min-width-250 {\n  min-width: 250px;\n}\n.min-width-260 {\n  min-width: 260px;\n}\n.min-width-270 {\n  min-width: 270px;\n}\n.min-width-280 {\n  min-width: 280px;\n}\n.min-width-290 {\n  min-width: 290px;\n}\n.min-width-300 {\n  min-width: 300px;\n}\n.min-width-310 {\n  min-width: 310px;\n}\n.min-width-320 {\n  min-width: 320px;\n}\n/*常用最大宽度*/\n.max-width-100 {\n  max-width: 100px;\n}\n.max-width-200 {\n  max-width: 200px;\n}\n.max-width-300 {\n  max-width: 300px;\n}\n.max-width-400 {\n  max-width: 400px;\n}\n.max-width-500 {\n  max-width: 500px;\n}\n.max-width-600 {\n  max-width: 600px;\n}\n.max-width-700 {\n  max-width: 700px;\n}\n.max-width-800 {\n  max-width: 800px;\n}\n.max-width-900 {\n  max-width: 900px;\n}\n.max-width-1000 {\n  max-width: 1000px;\n}\n/*常用最小高度*/\n.min-height-10 {\n  min-height: 10px;\n}\n.min-height-20 {\n  min-height: 20px;\n}\n.min-height-30 {\n  min-height: 30px;\n}\n.min-height-40 {\n  min-height: 40px;\n}\n.min-height-50 {\n  min-height: 50px;\n}\n.min-height-60 {\n  min-height: 60px;\n}\n.min-height-70 {\n  min-height: 70px;\n}\n.min-height-80 {\n  min-height: 80px;\n}\n.min-height-90 {\n  min-height: 90px;\n}\n.min-height-100 {\n  min-height: 100px;\n}\n.min-height-110 {\n  min-height: 110px;\n}\n.min-height-120 {\n  min-height: 120px;\n}\n.min-height-130 {\n  min-height: 130px;\n}\n.min-height-140 {\n  min-height: 140px;\n}\n.min-height-150 {\n  min-height: 150px;\n}\n.min-height-160 {\n  min-height: 160px;\n}\n.min-height-170 {\n  min-height: 170px;\n}\n.min-height-180 {\n  min-height: 180px;\n}\n.min-height-190 {\n  min-height: 190px;\n}\n.min-height-200 {\n  min-height: 200px;\n}\n.min-height-210 {\n  min-height: 210px;\n}\n.min-height-220 {\n  min-height: 220px;\n}\n.min-height-230 {\n  min-height: 230px;\n}\n.min-height-240 {\n  min-height: 240px;\n}\n.min-height-250 {\n  min-height: 250px;\n}\n.min-height-260 {\n  min-height: 260px;\n}\n.min-height-270 {\n  min-height: 270px;\n}\n.min-height-280 {\n  min-height: 280px;\n}\n.min-height-290 {\n  min-height: 290px;\n}\n.min-height-300 {\n  min-height: 300px;\n}\n.min-height-310 {\n  min-height: 310px;\n}\n.min-height-320 {\n  min-height: 320px;\n}\n/*常用最大高度*/\n.max-height-100 {\n  max-height: 100px;\n}\n.max-height-200 {\n  max-height: 200px;\n}\n.max-height-300 {\n  max-height: 300px;\n}\n.max-height-400 {\n  max-height: 400px;\n}\n.max-height-500 {\n  max-height: 500px;\n}\n.max-height-600 {\n  max-height: 600px;\n}\n.max-height-700 {\n  max-height: 700px;\n}\n.max-height-800 {\n  max-height: 800px;\n}\n.max-height-900 {\n  max-height: 900px;\n}\n.max-height-1000 {\n  max-height: 1000px;\n}\n/*间距规范 8*n */\n.mt8 {\n  margin-top: 8px;\n}\n.mr8 {\n  margin-right: 8px;\n}\n.mb8 {\n  margin-bottom: 8px;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.pt8 {\n  padding-top: 8px;\n}\n.pr8 {\n  padding-right: 8px;\n}\n.pb8 {\n  padding-bottom: 8px;\n}\n.pl8 {\n  padding-left: 8px;\n}\n.mt16 {\n  margin-top: 16px;\n}\n.mr16 {\n  margin-right: 16px;\n}\n.mb16 {\n  margin-bottom: 16px;\n}\n.ml16 {\n  margin-left: 16px;\n}\n.pt16 {\n  padding-top: 16px;\n}\n.pr16 {\n  padding-right: 16px;\n}\n.pb16 {\n  padding-bottom: 16px;\n}\n.pl16 {\n  padding-left: 16px;\n}\n.mt24 {\n  margin-top: 24px;\n}\n.mr24 {\n  margin-right: 24px;\n}\n.mb24 {\n  margin-bottom: 24px;\n}\n.ml24 {\n  margin-left: 24px;\n}\n.pt24 {\n  padding-top: 24px;\n}\n.pr24 {\n  padding-right: 24px;\n}\n.pb24 {\n  padding-bottom: 24px;\n}\n.pl24 {\n  padding-left: 24px;\n}\n.mt32 {\n  margin-top: 32px;\n}\n.mr32 {\n  margin-right: 32px;\n}\n.mb32 {\n  margin-bottom: 32px;\n}\n.ml32 {\n  margin-left: 32px;\n}\n.pt32 {\n  padding-top: 32px;\n}\n.pr32 {\n  padding-right: 32px;\n}\n.pb32 {\n  padding-bottom: 32px;\n}\n.pl32 {\n  padding-left: 32px;\n}\n.mt40 {\n  margin-top: 40px;\n}\n.mr40 {\n  margin-right: 40px;\n}\n.mb40 {\n  margin-bottom: 40px;\n}\n.ml40 {\n  margin-left: 40px;\n}\n.pt40 {\n  padding-top: 40px;\n}\n.pr40 {\n  padding-right: 40px;\n}\n.pb40 {\n  padding-bottom: 40px;\n}\n.pl40 {\n  padding-left: 40px;\n}\n.mt48 {\n  margin-top: 48px;\n}\n.mr48 {\n  margin-right: 48px;\n}\n.mb48 {\n  margin-bottom: 48px;\n}\n.ml48 {\n  margin-left: 48px;\n}\n.pt48 {\n  padding-top: 48px;\n}\n.pr48 {\n  padding-right: 48px;\n}\n.pb48 {\n  padding-bottom: 48px;\n}\n.pl48 {\n  padding-left: 48px;\n}\n/*常用margin*/\n.mt5 {\n  margin-top: 5px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.mb5 {\n  margin-bottom: 5px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.mt15 {\n  margin-top: 15px;\n}\n.mr15 {\n  margin-right: 15px;\n}\n.mb15 {\n  margin-bottom: 15px;\n}\n.ml15 {\n  margin-left: 15px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.mt25 {\n  margin-top: 25px;\n}\n.mr25 {\n  margin-right: 25px;\n}\n.mb25 {\n  margin-bottom: 25px;\n}\n.ml25 {\n  margin-left: 25px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.mr30 {\n  margin-right: 30px;\n}\n.mb30 {\n  margin-bottom: 30px;\n}\n.ml30 {\n  margin-left: 30px;\n}\n.mt35 {\n  margin-top: 35px;\n}\n.mr35 {\n  margin-right: 35px;\n}\n.mb35 {\n  margin-bottom: 35px;\n}\n.ml35 {\n  margin-left: 35px;\n}\n.mt40 {\n  margin-top: 40px;\n}\n.mr40 {\n  margin-right: 40px;\n}\n.mb40 {\n  margin-bottom: 40px;\n}\n.ml40 {\n  margin-left: 40px;\n}\n.mt45 {\n  margin-top: 45px;\n}\n.mr45 {\n  margin-right: 45px;\n}\n.mb45 {\n  margin-bottom: 45px;\n}\n.ml45 {\n  margin-left: 45px;\n}\n.mt50 {\n  margin-top: 50px;\n}\n.mr50 {\n  margin-right: 50px;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n.ml50 {\n  margin-left: 50px;\n}\n.mt55 {\n  margin-top: 55px;\n}\n.mr55 {\n  margin-right: 55px;\n}\n.mb55 {\n  margin-bottom: 55px;\n}\n.ml55 {\n  margin-left: 55px;\n}\n.mt60 {\n  margin-top: 60px;\n}\n.mr60 {\n  margin-right: 60px;\n}\n.mb60 {\n  margin-bottom: 60px;\n}\n.ml60 {\n  margin-left: 60px;\n}\n.mt65 {\n  margin-top: 65px;\n}\n.mr65 {\n  margin-right: 65px;\n}\n.mb65 {\n  margin-bottom: 65px;\n}\n.ml65 {\n  margin-left: 65px;\n}\n.mt70 {\n  margin-top: 70px;\n}\n.mr70 {\n  margin-right: 70px;\n}\n.mb70 {\n  margin-bottom: 70px;\n}\n.ml70 {\n  margin-left: 70px;\n}\n.mt75 {\n  margin-top: 75px;\n}\n.mr75 {\n  margin-right: 75px;\n}\n.mb75 {\n  margin-bottom: 75px;\n}\n.ml75 {\n  margin-left: 75px;\n}\n.mt80 {\n  margin-top: 80px;\n}\n.mr80 {\n  margin-right: 80px;\n}\n.mb80 {\n  margin-bottom: 80px;\n}\n.ml80 {\n  margin-left: 80px;\n}\n.mt85 {\n  margin-top: 85px;\n}\n.mr85 {\n  margin-right: 85px;\n}\n.mb85 {\n  margin-bottom: 85px;\n}\n.ml85 {\n  margin-left: 85px;\n}\n.mt90 {\n  margin-top: 90px;\n}\n.mr90 {\n  margin-right: 90px;\n}\n.mb90 {\n  margin-bottom: 90px;\n}\n.ml90 {\n  margin-left: 90px;\n}\n.mt95 {\n  margin-top: 95px;\n}\n.mr95 {\n  margin-right: 95px;\n}\n.mb95 {\n  margin-bottom: 95px;\n}\n.ml95 {\n  margin-left: 95px;\n}\n.mt100 {\n  margin-top: 100px;\n}\n.mr100 {\n  margin-right: 100px;\n}\n.mb100 {\n  margin-bottom: 100px;\n}\n.ml100 {\n  margin-left: 100px;\n}\n/*常用padding*/\n.pt5 {\n  padding-top: 5px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.pa5 {\n  padding: 5px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.pa10 {\n  padding: 10px;\n}\n.pt15 {\n  padding-top: 15px;\n}\n.pr15 {\n  padding-right: 15px;\n}\n.pb15 {\n  padding-bottom: 15px;\n}\n.pl15 {\n  padding-left: 15px;\n}\n.pa15 {\n  padding: 15px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n.pa20 {\n  padding: 20px;\n}\n.pt25 {\n  padding-top: 25px;\n}\n.pr25 {\n  padding-right: 25px;\n}\n.pb25 {\n  padding-bottom: 25px;\n}\n.pl25 {\n  padding-left: 25px;\n}\n.pa25 {\n  padding: 25px;\n}\n.pt30 {\n  padding-top: 30px;\n}\n.pr30 {\n  padding-right: 30px;\n}\n.pb30 {\n  padding-bottom: 30px;\n}\n.pl30 {\n  padding-left: 30px;\n}\n.pa30 {\n  padding: 30px;\n}\n.pt35 {\n  padding-top: 35px;\n}\n.pr35 {\n  padding-right: 35px;\n}\n.pb35 {\n  padding-bottom: 35px;\n}\n.pl35 {\n  padding-left: 35px;\n}\n.pa35 {\n  padding: 35px;\n}\n.pt40 {\n  padding-top: 40px;\n}\n.pr40 {\n  padding-right: 40px;\n}\n.pb40 {\n  padding-bottom: 40px;\n}\n.pl40 {\n  padding-left: 40px;\n}\n.pa40 {\n  padding: 40px;\n}\n.pt45 {\n  padding-top: 45px;\n}\n.pr45 {\n  padding-right: 45px;\n}\n.pb45 {\n  padding-bottom: 45px;\n}\n.pl45 {\n  padding-left: 45px;\n}\n.pa45 {\n  padding: 45px;\n}\n.pt50 {\n  padding-top: 50px;\n}\n.pr50 {\n  padding-right: 50px;\n}\n.pb50 {\n  padding-bottom: 50px;\n}\n.pl50 {\n  padding-left: 50px;\n}\n.pa50 {\n  padding: 50px;\n}\n.pt55 {\n  padding-top: 55px;\n}\n.pr55 {\n  padding-right: 55px;\n}\n.pb55 {\n  padding-bottom: 55px;\n}\n.pl55 {\n  padding-left: 55px;\n}\n.pa55 {\n  padding: 55px;\n}\n.pt60 {\n  padding-top: 60px;\n}\n.pr60 {\n  padding-right: 60px;\n}\n.pb60 {\n  padding-bottom: 60px;\n}\n.pl60 {\n  padding-left: 60px;\n}\n.pa60 {\n  padding: 60px;\n}\n.pt65 {\n  padding-top: 65px;\n}\n.pr65 {\n  padding-right: 65px;\n}\n.pb65 {\n  padding-bottom: 65px;\n}\n.pl65 {\n  padding-left: 65px;\n}\n.pa65 {\n  padding: 65px;\n}\n.pt70 {\n  padding-top: 70px;\n}\n.pr70 {\n  padding-right: 70px;\n}\n.pb70 {\n  padding-bottom: 70px;\n}\n.pl70 {\n  padding-left: 70px;\n}\n.pa70 {\n  padding: 70px;\n}\n.pt75 {\n  padding-top: 75px;\n}\n.pr75 {\n  padding-right: 75px;\n}\n.pb75 {\n  padding-bottom: 75px;\n}\n.pl75 {\n  padding-left: 75px;\n}\n.pa75 {\n  padding: 75px;\n}\n.pt80 {\n  padding-top: 80px;\n}\n.pr80 {\n  padding-right: 80px;\n}\n.pb80 {\n  padding-bottom: 80px;\n}\n.pl80 {\n  padding-left: 80px;\n}\n.pa80 {\n  padding: 80px;\n}\n.pt85 {\n  padding-top: 85px;\n}\n.pr85 {\n  padding-right: 85px;\n}\n.pb85 {\n  padding-bottom: 85px;\n}\n.pl85 {\n  padding-left: 85px;\n}\n.pa85 {\n  padding: 85px;\n}\n.pt90 {\n  padding-top: 90px;\n}\n.pr90 {\n  padding-right: 90px;\n}\n.pb90 {\n  padding-bottom: 90px;\n}\n.pl90 {\n  padding-left: 90px;\n}\n.pa90 {\n  padding: 90px;\n}\n.pt95 {\n  padding-top: 95px;\n}\n.pr95 {\n  padding-right: 95px;\n}\n.pb95 {\n  padding-bottom: 95px;\n}\n.pl95 {\n  padding-left: 95px;\n}\n.pa95 {\n  padding: 95px;\n}\n.pt100 {\n  padding-top: 100px;\n}\n.pr100 {\n  padding-right: 100px;\n}\n.pb100 {\n  padding-bottom: 100px;\n}\n.pl100 {\n  padding-left: 100px;\n}\n.pa100 {\n  padding: 100px;\n}\n.pt105 {\n  padding-top: 105px;\n}\n.pr105 {\n  padding-right: 105px;\n}\n.pb105 {\n  padding-bottom: 105px;\n}\n.pl105 {\n  padding-left: 105px;\n}\n.pa105 {\n  padding: 105px;\n}\n.pt110 {\n  padding-top: 110px;\n}\n.pr110 {\n  padding-right: 110px;\n}\n.pb110 {\n  padding-bottom: 110px;\n}\n.pl110 {\n  padding-left: 110px;\n}\n.pa110 {\n  padding: 110px;\n}\n.pt115 {\n  padding-top: 115px;\n}\n.pr115 {\n  padding-right: 115px;\n}\n.pb115 {\n  padding-bottom: 115px;\n}\n.pl115 {\n  padding-left: 115px;\n}\n.pa115 {\n  padding: 115px;\n}\n.pt120 {\n  padding-top: 120px;\n}\n.pr120 {\n  padding-right: 120px;\n}\n.pb120 {\n  padding-bottom: 120px;\n}\n.pl120 {\n  padding-left: 120px;\n}\n.pa120 {\n  padding: 120px;\n}\n.pt125 {\n  padding-top: 125px;\n}\n.pr125 {\n  padding-right: 125px;\n}\n.pb125 {\n  padding-bottom: 125px;\n}\n.pl125 {\n  padding-left: 125px;\n}\n.pa125 {\n  padding: 125px;\n}\n.pt130 {\n  padding-top: 130px;\n}\n.pr130 {\n  padding-right: 130px;\n}\n.pb130 {\n  padding-bottom: 130px;\n}\n.pl130 {\n  padding-left: 130px;\n}\n.pa130 {\n  padding: 130px;\n}\n.pt135 {\n  padding-top: 135px;\n}\n.pr135 {\n  padding-right: 135px;\n}\n.pb135 {\n  padding-bottom: 135px;\n}\n.pl135 {\n  padding-left: 135px;\n}\n.pa135 {\n  padding: 135px;\n}\n.pt140 {\n  padding-top: 140px;\n}\n.pr140 {\n  padding-right: 140px;\n}\n.pb140 {\n  padding-bottom: 140px;\n}\n.pl140 {\n  padding-left: 140px;\n}\n.pa140 {\n  padding: 140px;\n}\n.text-center,\n.tc {\n  text-align: center;\n}\n.text-right,\n.tr {\n  text-align: right;\n}\n.text-left,\n.tl {\n  text-align: left;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \"\";\n}\n.clearfix:after {\n  clear: both;\n}\n.border-radius,\n.radius {\n  border-radius: var(--border-radius);\n}\n.unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bold {\n  font-weight: bold;\n}\n.word-break {\n  word-break: break-all;\n}\n.font-tahoma {\n  font-family: \"Tahoma\";\n}\n.font-simhei {\n  font-family: \"SimHei\";\n}\n.color-c {\n  color: #ccc;\n}\n.color-3 {\n  color: #333;\n}\n.color-6 {\n  color: #666;\n}\n.color-9 {\n  color: #999;\n}\n.color-f {\n  color: #fff;\n}\n.color-brand {\n  color: var(--color-brand);\n}\n.color-h-3:hover {\n  color: #333;\n}\n.color-h-brand:hover {\n  color: var(--color-brand);\n}\n.color-brand-vs {\n  color: var(--color-brand-vs);\n}\n.color-error {\n  color: var(--color-red);\n}\n.color-red {\n  color: var(--color-red);\n}\n.color-green {\n  color: var(--color-green);\n}\n.color-warn {\n  color: var(--color-warn);\n}\n.bt-e6 {\n  border-top: 1px solid var(--color-border);\n}\n.bb-e6 {\n  border-bottom: 1px solid var(--color-border);\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-help {\n  cursor: help;\n}\n.cursor-move {\n  cursor: move;\n}\n.cursor-not-allow {\n  cursor: not-allowed;\n}\n.pa {\n  position: absolute;\n}\n.pr {\n  position: relative;\n}\n.ellipsis {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.inline {\n  display: inline;\n}\n.ib,\n.inline-block {\n  display: inline-block;\n}\n.none,\n.hide {\n  display: none;\n}\n.opacity0 {\n  opacity: 0;\n}\n.rotate180 {\n  transform: scaleX(-1);\n}\n/* 小位移 */\n.displacement-1 {\n  position: relative;\n  top: 1px;\n}\n.displacement-2 {\n  position: relative;\n  top: 2px;\n}\n.displacement-3 {\n  position: relative;\n  top: 3px;\n}\n/** \n * <div class=\"search-box\">\n *      <i class=\"iconfont search-icon\">&#xe651;</i>\n *      <input type=\"text\" class=\"input search-input\"/>\n * </div>\n */\n.search-box {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n}\n.search-box .search-icon {\n  position: absolute;\n  top: 0;\n  left: 1px;\n  width: var(--input-height);\n  height: var(--input-height);\n  line-height: var(--input-height);\n  text-align: center;\n  color: #999;\n  font-size: 18px;\n}\n.search-box .search-input {\n  width: 100%;\n  padding-left: var(--input-height);\n}\n.scroll-y {\n  overflow-y: auto;\n}\n.scroll-x {\n  overflow-x: auto;\n}\n.hidden-y {\n  overflow-y: hidden;\n}\n.hidden-x {\n  overflow-x: hidden;\n}\n/** \n * 空状态\n * <div class=\"empty-white\">\n *    <div><i class=\"mc-iconfont no-data\">&#xe685;</i></div>\n *    <div>提示</div>\n * </div>\n */\n.empty-white,\n.empty-area {\n  position: relative;\n  min-height: 200px;\n  padding-top: 40px;\n  text-align: center;\n  color: #999;\n}\n.empty-white .no-data,\n.empty-area .no-data {\n  height: 80px;\n  font-size: 60px;\n  color: #ccc;\n}\n.empty-white .empty-inner,\n.empty-area .empty-inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  height: 110px;\n  margin-top: -55px;\n  margin-left: -45%;\n}\n.empty-area {\n  background-color: var(--color-bg);\n}\n/*一级二级标题=*/\n.page-header {\n  position: relative;\n  margin-bottom: 20px;\n}\n.page-header .page-tip {\n  color: #999;\n}\n.page-header .header-filters {\n  position: absolute;\n  right: 0;\n  bottom: 12px;\n}\n.first-header,\n.second-header {\n  margin-right: 16px;\n  line-height: 32px;\n}\n.first-header {\n  font-size: 20px;\n}\n.second-header {\n  font-size: 16px;\n}\n/*表格底部翻页wrapper*/\n.pager-wrapper {\n  padding: 16px 24px;\n}\n.table-pager-wrapper {\n  padding: 16px 24px;\n  background-color: var(--color-bg);\n}\n/*提示信息*/\n.tip-content,\n.notice-content,\n.error-content {\n  position: relative;\n  padding: 10px 20px;\n}\n.error-content {\n  background-color: var(--color-red);\n  color: #fff;\n}\n.notice-content {\n  background-color: var(--color-warn);\n  color: #fff;\n}\n.tip-content {\n  background-color: var(--color-bg);\n  color: #999;\n  line-height: 18px;\n}\n.tip-content .tip-icon {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 18px;\n  line-height: 18px;\n  color: #ccc;\n}\n.tip-content.has-icon {\n  padding-left: 30px;\n}\n.tip-content.has-border {\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n}\n.tip-content.has-highlight {\n  color: #333;\n}\n.tip-content.has-highlight .tip-icon {\n  color: var(--color-brand);\n}\n/*打标*/\n.grey-solid-icon,\n.brand-solid-icon,\n.grey-hollow-icon,\n.brand-hollow-icon {\n  display: inline-block;\n  min-width: 32px;\n  height: 22px;\n  margin-right: -4px;\n  margin-left: -4px;\n  padding: 0 6px;\n  font-size: 12px;\n  transform: scale(0.72);\n  text-align: center;\n  font-weight: bold;\n  line-height: 20px;\n  border-width: 1px;\n  border-style: solid;\n}\n/*品牌色实心打标icon*/\n.brand-solid-icon,\n.brand-solid-icon:hover {\n  border-radius: 4px;\n  background-color: var(--color-brand);\n  border-color: var(--color-brand);\n  color: #fff;\n}\n/*灰色实心打标icon*/\n.grey-solid-icon,\n.grey-solid-icon:hover {\n  border-radius: 4px;\n  background-color: #ccc;\n  border-color: #ccc;\n  color: #fff;\n}\n/*品牌色空心打标*/\n.brand-hollow-icon,\n.brand-hollow-icon:hover {\n  border-radius: 10px;\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n}\n/*灰色空心打标*/\n.grey-hollow-icon,\n.grey-hollow-icon:hover {\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  color: #999;\n}\n/*卡片样式*/\n.grid {\n  background: #fff;\n  border-radius: var(--border-radius);\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  transition: box-shadow var(--duration) ease-out;\n}\n.grid .grid-title {\n  font-size: 16px;\n}\n.grid .grid-title > * {\n  max-height: 32px;\n}\n.grid:hover {\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.08);\n}\n.mx-tag {\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  z-index: 3;\n  display: inline-block;\n  height: 18px;\n  margin-top: calc(2px - var(--input-height));\n  padding-left: 4px;\n  padding-right: 4px;\n  line-height: 18px;\n  border-radius: var(--border-radius);\n  background-color: var(--color-brand);\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n.mx-tag .mx-tag-name {\n  display: inline-block;\n  transform: scale(0.92);\n}\n.mx-tag .mx-tag-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 4px;\n  top: 18px;\n  border-width: 3px;\n  border-style: solid;\n  border-color: var(--color-brand) transparent transparent var(--color-brand);\n}\n/*上下浮动动画*/\n@-webkit-keyframes suspension {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes suspension {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n.mx-anim-suspension {\n  display: inline-block;\n  -webkit-animation: suspension 1.4s ease-out infinite;\n          animation: suspension 1.4s ease-out infinite;\n}\n/*dropdown类trigger+下拉列表类通用样式*/\n/*渐显下拉动画*/\n@-webkit-keyframes fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/*渐显上拉动画*/\n@-webkit-keyframes fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n.mx-trigger {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: var(--input-height);\n  padding: 0 25px 0 10px;\n  line-height: calc(var(--input-height) - 2px);\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all var(--duration);\n  border-radius: var(--border-radius);\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--border-highlight);\n  background-color: #fff;\n}\n.mx-trigger .mx-trigger-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mx-trigger .mx-trigger-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: var(--border-highlight);\n  transition: all var(--duration);\n}\n.mx-trigger.mx-trigger-open .mx-trigger-arrow {\n  transform: rotate(180deg);\n  margin-top: -15px;\n}\n.mx-shadow,\n.mx-output {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n.mx-output {\n  display: none;\n  position: absolute;\n  left: 0;\n  z-index: 999999;\n  min-width: 100%;\n  max-width: 280%;\n  border-radius: var(--border-radius);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n}\n.mx-output.mx-output-bottom {\n  top: 100%;\n  margin-top: 10px;\n}\n.mx-output.mx-output-bottom.mx-output-open {\n  display: block;\n  -webkit-animation: fade-in-down var(--duration) ease-out;\n          animation: fade-in-down var(--duration) ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.mx-output.mx-output-top {\n  bottom: 100%;\n  margin-bottom: 10px;\n}\n.mx-output.mx-output-top.mx-output-open {\n  display: block;\n  -webkit-animation: fade-in-up var(--duration) ease-out;\n          animation: fade-in-up var(--duration) ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.mx-output .mx-output-search {\n  padding: 10px 10px 0 10px;\n}\n.mx-output .mx-output-list {\n  max-height: 300px;\n  padding: 8px 10px;\n  overflow: auto;\n}\n.mx-output .mx-output-item {\n  padding: 2px 0;\n}\n.mx-output .mx-output-header {\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  padding-left: 2px;\n  padding-right: 2px;\n  color: #999;\n  cursor: default;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mx-output .mx-output-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  height: var(--input-small-height);\n  line-height: var(--input-small-height);\n  border-radius: var(--border-radius);\n  transition: all var(--duration);\n  cursor: pointer;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mx-output .mx-output-link:hover {\n  background-color: var(--color-bg-hover);\n}\n.mx-output .mx-output-link.mx-output-link-active,\n.mx-output .mx-output-link.mx-output-link-active:hover,\n.mx-output .mx-output-link.mx-output-link-active:active,\n.mx-output .mx-output-link.mx-output-link-active:focus {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n.mx-output .mx-output-link.mx-output-link-disabled,\n.mx-output .mx-output-link.mx-output-link-disabled:hover,\n.mx-output .mx-output-link.mx-output-link-disabled:active,\n.mx-output .mx-output-link.mx-output-link-disabled:focus {\n  color: #999;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.mx-output-footer {\n  padding: 10px;\n  border-top: 1px solid var(--color-border);\n  text-align: left;\n}\n.dropdown .mx-output,\n[mx-view*=\"mx-dropdown/index\"] .mx-output,\n[mx-view*=\"mx-dropdown/bd\"] .mx-output,\n[mx-view*=\"mx-dropdown/multiple\"] .mx-output {\n  max-width: 160%;\n}\n.dropdown[mx-view*=\"small=true\"],\n[mx-view*=\"mx-dropdown/index\"][mx-view*=\"small=true\"],\n[mx-view*=\"mx-dropdown/bd\"][mx-view*=\"small=true\"],\n[mx-view*=\"mx-dropdown/multiple\"][mx-view*=\"small=true\"] {\n  min-height: var(--input-small-height);\n}\n.dropdown[mx-view*=\"small=true\"] .mx-trigger,\n[mx-view*=\"mx-dropdown/index\"][mx-view*=\"small=true\"] .mx-trigger,\n[mx-view*=\"mx-dropdown/bd\"][mx-view*=\"small=true\"] .mx-trigger,\n[mx-view*=\"mx-dropdown/multiple\"][mx-view*=\"small=true\"] .mx-trigger {\n  height: var(--input-small-height);\n  line-height: calc(var(--input-small-height) - 2px);\n}\n.dropdown,\n[mx-view*=\"mx-dropdown/index\"],\n[mx-view*=\"mx-dropdown/bd\"],\n[mx-view*=\"mx-dropdown/multiple\"],\n[mx-view*=\"mx-time/index\"],\n[mx-view*=\"mx-cascade/index\"],\n[mx-view*=\"mx-calendar/rangepicker\"],\n[mx-view*=\"mx-calendar/datepicker\"],\n[mx-view*=\"mx-color/picker\"],\n[mx-view*=\"mx-status/index\"],\n[mx-view*=\"mx-status/dropdown\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  min-height: var(--input-height);\n  vertical-align: middle;\n}\n.dropdown:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/index\"]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/bd\"]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/multiple\"]:hover .mx-trigger,\n[mx-view*=\"mx-time/index\"]:hover .mx-trigger,\n[mx-view*=\"mx-cascade/index\"]:hover .mx-trigger,\n[mx-view*=\"mx-calendar/rangepicker\"]:hover .mx-trigger,\n[mx-view*=\"mx-calendar/datepicker\"]:hover .mx-trigger,\n[mx-view*=\"mx-color/picker\"]:hover .mx-trigger,\n[mx-view*=\"mx-status/index\"]:hover .mx-trigger,\n[mx-view*=\"mx-status/dropdown\"]:hover .mx-trigger {\n  border-color: var(--border-highlight-hover);\n}\n.dropdown:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/index\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/bd\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/multiple\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-time/index\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-cascade/index\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/rangepicker\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/datepicker\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-color/picker\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/index\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/dropdown\"]:hover .mx-trigger .mx-trigger-arrow {\n  color: var(--border-highlight-hover);\n}\n.dropdown[mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-dropdown/index\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-dropdown/bd\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-dropdown/multiple\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-time/index\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-cascade/index\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-color/picker\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-status/index\"][mx-view*=\"disabled=true\"] .mx-trigger,\n[mx-view*=\"mx-status/dropdown\"][mx-view*=\"disabled=true\"] .mx-trigger,\n.dropdown[mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/bd\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/multiple\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-time/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-cascade/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-color/picker\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-status/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n[mx-view*=\"mx-status/dropdown\"][mx-view*=\"disabled=true\"]:hover .mx-trigger,\n.dropdown[mx-disabled] .mx-trigger,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-time/index\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-cascade/index\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-calendar/datepicker\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-color/picker\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-status/index\"][mx-disabled] .mx-trigger,\n[mx-view*=\"mx-status/dropdown\"][mx-disabled] .mx-trigger,\n.dropdown[mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-time/index\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-cascade/index\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-calendar/datepicker\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-color/picker\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-status/index\"][mx-disabled]:hover .mx-trigger,\n[mx-view*=\"mx-status/dropdown\"][mx-disabled]:hover .mx-trigger {\n  border-color: var(--color-border);\n  background-color: var(--color-disabled);\n  cursor: not-allowed;\n  color: #999;\n}\n.dropdown[mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-time/index\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-cascade/index\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-color/picker\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/index\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/dropdown\"][mx-view*=\"disabled=true\"] .mx-trigger .mx-trigger-arrow,\n.dropdown[mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-time/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-cascade/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/datepicker\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-color/picker\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/index\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/dropdown\"][mx-view*=\"disabled=true\"]:hover .mx-trigger .mx-trigger-arrow,\n.dropdown[mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-time/index\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-cascade/index\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/datepicker\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-color/picker\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/index\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/dropdown\"][mx-disabled] .mx-trigger .mx-trigger-arrow,\n.dropdown[mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-time/index\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-cascade/index\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/rangepicker\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-calendar/datepicker\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-color/picker\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/index\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow,\n[mx-view*=\"mx-status/dropdown\"][mx-disabled]:hover .mx-trigger .mx-trigger-arrow {\n  color: #ccc;\n}\n/* @dependent: ./index.less */\n.table {\n  width: 100%;\n}\n.table thead {\n  background-color: var(--color-bg);\n}\n.table thead tr th {\n  height: 60px;\n  padding: 0 8px;\n  color: #999;\n  border: none;\n}\n.table thead tr th:first-child {\n  padding-left: 16px;\n}\n.table thead tr th:last-child {\n  padding-right: 16px;\n}\n.table thead tr th.field-group {\n  height: 30px;\n  padding: 2px 8px 0;\n}\n.table thead tr th.field-group .group-name {\n  line-height: 26px;\n  padding-bottom: 2px;\n  border-bottom: 1px solid var(--color-border);\n}\n.table thead tr th.field-item {\n  height: 30px;\n  padding: 0 8px;\n}\n.table tbody {\n  background-color: #fff;\n}\n.table tbody tr td {\n  padding: 16px 8px;\n  color: #333;\n  border-top: 1px solid var(--color-border);\n  border-bottom: none;\n  transition: background-color var(--duration) ease-out;\n}\n.table tbody tr td:first-child {\n  padding-left: 16px;\n}\n.table tbody tr td:last-child {\n  padding-right: 16px;\n}\n.table tbody tr td.sub-mask {\n  background-color: #fff;\n  border-right: 1px solid var(--color-brand-light);\n  border-top: 0 none;\n}\n.table tbody tr td.sub-mask-first {\n  border-top: 1px solid var(--color-border);\n  border-bottom: 0 none;\n}\n.table tbody tr td .operations {\n  opacity: 0;\n  transition: opacity var(--duration) ease-out;\n}\n.table tbody tr:first-child td {\n  border-top: 0 none;\n}\n.table tbody tr:hover td,\n.table tbody tr.hover-tr td {\n  background-color: var(--color-brand-opacity);\n}\n.table tbody tr:hover td.sub-mask,\n.table tbody tr.hover-tr td.sub-mask {\n  background-color: #fff;\n}\n.table tbody tr:hover td .operations,\n.table tbody tr.hover-tr td .operations {\n  opacity: 1;\n}\n.table tbody tr.empty-tr td,\n.table tbody tr.empty-tr:hover td,\n.table tbody tr.empty-tr.hover-tr td,\n.table tbody tr.empty-tr.hover-tr:hover td {\n  height: 200px;\n  text-align: center;\n  color: #999;\n  background-color: var(--color-bg);\n}\n.table tbody tr.empty-tr td .no-data,\n.table tbody tr.empty-tr:hover td .no-data,\n.table tbody tr.empty-tr.hover-tr td .no-data,\n.table tbody tr.empty-tr.hover-tr:hover td .no-data {\n  font-size: 60px;\n  color: #ccc;\n}\n.table tbody tr.operation-tr {\n  display: none;\n}\n.table tbody tr.operation-tr td {\n  padding: 8px 16px;\n  border-top: 0 none;\n  background-color: var(--color-brand-light);\n}\n.table tbody tr.operation-tr td.sub-mask {\n  background-color: #fff;\n}\n.table tbody tr.operation-tr.operation-tr-open {\n  display: table-row;\n}\n.table tbody tr.thead,\n.table tbody tr.thead:hover,\n.table tbody tr.thead.hover-tr {\n  background-color: var(--color-bg);\n}\n.table tbody tr.thead td,\n.table tbody tr.thead:hover td,\n.table tbody tr.thead.hover-tr td {\n  height: 60px;\n  padding: 0 8px;\n  color: #999;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 0 none;\n  background-color: transparent;\n}\n.table tbody tr.thead td.sub-mask,\n.table tbody tr.thead:hover td.sub-mask,\n.table tbody tr.thead.hover-tr td.sub-mask {\n  background-color: #fff;\n}\n.table tfoot tr td {\n  padding: 16px;\n  background-color: var(--color-bg);\n  border: none;\n}\n"]);
Magix.applyStyle(["_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_","._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1 {\n  float: left;\n  width: 34%;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 {\n  float: left;\n  width: 66%;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-four1 {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-four3 {\n  float: left;\n  width: 75%;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half {\n  float: left;\n  width: 50%;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right {\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-left {\n  border-right: 1px solid var(--color-border);\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  transition: border-color var(--duration);\n  box-shadow: 0 none;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example-highlight {\n  border: 1px solid rgba(77, 127, 255, 0.3);\n  box-shadow: 0 1px 2px rgba(77, 127, 255, 0.3);\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title {\n  position: absolute;\n  top: -14px;\n  left: 10px;\n  height: 28px;\n  padding: 0 10px;\n  line-height: 28px;\n  background-color: #fff;\n  color: #999;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content {\n  position: relative;\n  padding: 20px 20px 25px 20px;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc {\n  position: relative;\n  padding: 25px 0 25px 20px;\n  border-top: 1px solid var(--color-border);\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper {\n  opacity: 0;\n  position: absolute;\n  top: 6px;\n  right: 0;\n  z-index: 10;\n  transition: opacity var(--duration);\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon {\n  width: 36px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 20px;\n  color: #999;\n  text-align: center;\n  cursor: pointer;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip {\n  display: none;\n  position: absolute;\n  top: -34px;\n  left: -30px;\n  width: 86px;\n  height: 30px;\n  color: #fff;\n  text-align: center;\n  background-color: rgba(33, 33, 33, 0.72);\n  border-radius: var(--border-radius);\n  line-height: 30px;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip-icon {\n  float: left;\n  margin-left: 5px;\n  height: 30px;\n  color: var(--color-green);\n  line-height: 30px;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper:hover ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip {\n  display: block;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc:hover ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper {\n  opacity: 1;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example ._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-top-none {\n  border-top: 0 none;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table {\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table tbody tr td {\n  background-color: #fff;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table tbody tr td:first-child {\n  padding-left: 8px;\n}\n._zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-table tbody tr:hover td {\n  background-color: #fff;\n}\n"]);
Magix.applyStyle("_zs_gallery_examples_base_","._zs_gallery_examples_base_-test,\n._zs_gallery_examples_base_-test1,\n._zs_gallery_examples_base_-test2,\n._zs_gallery_examples_base_-test3 {\n  width: 100px;\n  height: 100px;\n}\n._zs_gallery_examples_base_-test {\n  background-color: #ff831b;\n}\n._zs_gallery_examples_base_-test1 {\n  background-color: rgba(255, 131, 27, 0.2);\n}\n._zs_gallery_examples_base_-test2 {\n  background-color: rgba(255, 131, 27, 0.1);\n}\n._zs_gallery_examples_base_-test3 {\n  background-color: #f07b19;\n}\n._zs_gallery_examples_base_-base-header {\n  position: relative;\n  height: 52px;\n  padding-top: 10px;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  background-color: #fff;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo {\n  position: relative;\n  float: left;\n  width: 220px;\n  padding-left: 24px;\n  cursor: pointer;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo ._zs_gallery_examples_base_-logo-img {\n  position: absolute;\n  top: 50%;\n  width: 38px;\n  height: 32px;\n  margin-top: -16px;\n  background-color: var(--color-brand);\n  background-image: linear-gradient(to right, var(--color-brand), var(--color-brand-gradient));\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo ._zs_gallery_examples_base_-logo-img img {\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo ._zs_gallery_examples_base_-logo-name {\n  padding-left: 48px;\n  line-height: 32px;\n  font-size: 18px;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo ._zs_gallery_examples_base_-logo-update {\n  position: absolute;\n  z-index: 100;\n  width: 180px;\n  top: 100%;\n  left: 20px;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo ._zs_gallery_examples_base_-logo-update ._zs_gallery_examples_base_-update-icon {\n  color: var(--color-brand);\n  font-size: 24px;\n  transform: rotate(90deg);\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-logo ._zs_gallery_examples_base_-logo-update ._zs_gallery_examples_base_-update-info {\n  margin-top: 5px;\n  padding: 16px;\n  background-color: var(--color-brand);\n  border-radius: var(--border-radius);\n  color: #fff;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-header-line {\n  position: absolute;\n  top: 50%;\n  left: 220px;\n  width: 0;\n  height: 20px;\n  border-left: 1px solid var(--color-border);\n  margin-top: -10px;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-search {\n  float: left;\n  padding-left: 10px;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-base-search input {\n  border: 0 none;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-header-tabs {\n  position: relative;\n  float: right;\n  margin-right: 120px;\n  line-height: 32px;\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-header-tabs ._zs_gallery_examples_base_-header-tab {\n  position: relative;\n  float: left;\n  margin: 0 10px;\n  padding: 0 20px 8px 20px;\n  font-size: 14px;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_examples_base_-base-header ._zs_gallery_examples_base_-header-tabs ._zs_gallery_examples_base_-header-tab._zs_gallery_examples_base_-cur {\n  color: var(--color-brand);\n  border-bottom: 2px solid var(--color-brand);\n}\n._zs_gallery_examples_base_-base-left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 19;\n  width: 220px;\n  padding-bottom: 10px;\n  border-right: 1px solid var(--color-border);\n  overflow-y: auto;\n  transition: left var(--duration);\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav,\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-title {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  line-height: 38px;\n  cursor: pointer;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav {\n  height: 0;\n  border-left: 4px solid transparent;\n  transition: background-color var(--duration), height var(--duration), color var(--duration);\n  overflow: hidden;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav ._zs_gallery_examples_base_-sub-icon {\n  position: absolute;\n  top: 0;\n  left: 30px;\n  height: 38px;\n  line-height: 36px;\n  font-size: 18px;\n  color: #999;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav:hover ._zs_gallery_examples_base_-sub-icon {\n  color: var(--color-brand);\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav._zs_gallery_examples_base_-cur {\n  color: var(--color-brand);\n  border-left: 4px solid var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav._zs_gallery_examples_base_-cur ._zs_gallery_examples_base_-sub-icon {\n  color: var(--color-brand);\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav._zs_gallery_examples_base_-sub {\n  padding-left: 52px;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-nav._zs_gallery_examples_base_-expand {\n  height: 38px;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-title {\n  height: 38px;\n  cursor: pointer;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-title ._zs_gallery_examples_base_-title-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 24px;\n  transition: transform var(--duration);\n  color: #999;\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-title:hover ._zs_gallery_examples_base_-title-icon {\n  color: var(--color-brand);\n}\n._zs_gallery_examples_base_-base-left ._zs_gallery_examples_base_-title._zs_gallery_examples_base_-expand ._zs_gallery_examples_base_-title-icon {\n  top: 10px;\n  transform: rotate(180deg);\n}\n._zs_gallery_examples_base_-base-left._zs_gallery_examples_base_-fixed {\n  position: fixed;\n}\n._zs_gallery_examples_base_-base {\n  position: relative;\n  margin-top: 18px;\n  padding-left: 220px;\n  transition: padding-left var(--duration);\n}\n._zs_gallery_examples_base_-base._zs_gallery_examples_base_-close {\n  padding-left: 0;\n}\n._zs_gallery_examples_base_-base._zs_gallery_examples_base_-close ._zs_gallery_examples_base_-base-left {\n  left: -220px;\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-content {\n  padding: 20px 0 40px 20px;\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts {\n  margin-right: 20px;\n  margin-left: 20px;\n  padding: 20px 0 40px 0;\n  border-top: 1px solid var(--color-border);\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-prev,\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-next {\n  position: relative;\n  height: 22px;\n  line-height: 22px;\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-prev ._zs_gallery_examples_base_-context-icon,\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-next ._zs_gallery_examples_base_-context-icon {\n  position: absolute;\n  top: 0;\n  line-height: 22px;\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-prev {\n  float: left;\n  padding-left: 20px;\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-prev ._zs_gallery_examples_base_-context-icon {\n  left: 0;\n  transform: rotate(-90deg);\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-next {\n  float: right;\n  padding-right: 20px;\n}\n._zs_gallery_examples_base_-base-main ._zs_gallery_examples_base_-contexts ._zs_gallery_examples_base_-next ._zs_gallery_examples_base_-context-icon {\n  right: 0;\n  transform: rotate(90deg);\n}\n._zs_gallery_examples_base_-fixes {\n  position: fixed;\n  right: 0;\n  bottom: 60px;\n  z-index: 20;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix {\n  position: relative;\n  display: block;\n  width: 36px;\n  height: 36px;\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix ._zs_gallery_examples_base_-fix-tip,\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix ._zs_gallery_examples_base_-fix-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 36px;\n  line-height: 36px;\n  transition: all var(--duration);\n  background-color: #fff;\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix ._zs_gallery_examples_base_-fix-tip {\n  z-index: 21;\n  width: 70px;\n  color: #fff;\n  text-align: right;\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix ._zs_gallery_examples_base_-fix-icon {\n  z-index: 22;\n  width: 36px;\n  border-width: 1px 0 0 1px;\n  border-color: var(--color-border);\n  border-style: solid;\n  font-size: 22px;\n  color: #ccc;\n  text-align: center;\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix:hover {\n  opacity: 0.95;\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix:hover ._zs_gallery_examples_base_-fix-icon {\n  background-color: var(--color-brand);\n  border-color: var(--color-brand);\n  color: #fff;\n}\n._zs_gallery_examples_base_-fixes ._zs_gallery_examples_base_-fix:hover ._zs_gallery_examples_base_-fix-tip {\n  background-color: var(--color-brand);\n  left: -70px;\n}\n@-webkit-keyframes _zs_gallery_examples_base_-fade-in {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_examples_base_-fade-in {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n._zs_gallery_examples_base_-breath-light {\n  position: absolute;\n  top: 8px;\n  right: 0;\n  width: 16px;\n  height: 16px;\n}\n._zs_gallery_examples_base_-breath-light::after {\n  content: ' ';\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: var(--color-brand);\n  opacity: 0.4;\n}\n._zs_gallery_examples_base_-breath-light::before {\n  content: ' ';\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-top: -3px;\n  margin-left: -3px;\n  background-color: var(--color-brand);\n  -webkit-animation: _zs_gallery_examples_base_-fade-in 1s linear infinite;\n          animation: _zs_gallery_examples_base_-fade-in 1s linear infinite;\n}\n._zs_gallery_examples_base_-white-light {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n}\n._zs_gallery_examples_base_-white-light::after {\n  content: ' ';\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #fff;\n  opacity: 0.4;\n}\n._zs_gallery_examples_base_-white-light::before {\n  content: ' ';\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  margin-top: -3px;\n  margin-left: -3px;\n  background-color: #fff;\n  -webkit-animation: _zs_gallery_examples_base_-fade-in 1s linear infinite;\n          animation: _zs_gallery_examples_base_-fade-in 1s linear infinite;\n}\n");
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
} ; var $g = '', $_temp, $p = '', theme = $$.theme, suggests = $$.suggests, headers = $$.headers, count = $$.count, fixed = $$.fixed, minHeight = $$.minHeight, list = $$.list, path = $$.path, cur = $$.cur, view = $$.view, prev = $$.prev, next = $$.next; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya:_" class="_zs_gallery_examples_base_-base-header"><div mxs="_zs_gallerya:_" class="_zs_gallery_examples_base_-header-line"></div><div mxa="_zs_gallerya:a" class="_zs_gallery_examples_base_-base-logo"><div mxs="_zs_gallerya:a" mx-click="' + $viewId + 'showPicker()"><div class="_zs_gallery_examples_base_-logo-img"><img src="https://img.alicdn.com/tfs/TB1qRnywVzqK1RjSZFoXXbfcXXa-432-355.png"></div><div class="_zs_gallery_examples_base_-logo-name">Magix Galleries</div></div><div class="mx-output mx-output-bottom ';
    $line = 11;
    $art = 'if theme.show';
    ;
    $expr = '<%if (theme.show) {%>';
    if (theme.show) {
        ;
        $p += ' mx-output-open ';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" style="left:24px;" mx-view="examples/edit/logo?color=';
    $line = 13;
    $art = '=theme.color';
    ;
    $p += ($expr = '<%!$eu(theme.color)%>', $eu(theme.color)) + '" mx-change="' + $viewId + 'changeColors()"></div>';
    $line = 15;
    $art = 'if theme.update';
    ;
    $expr = '<%if (theme.update) {%>';
    if (theme.update) {
        ;
        $p += '<div mxs="_zs_gallerya:b" class="_zs_gallery_examples_base_-logo-update"><div class="text-right"><i class="mc-iconfont _zs_gallery_examples_base_-update-icon">&#xe660;</i></div><div class="_zs_gallery_examples_base_-update-info"><span class="_zs_gallery_examples_base_-white-light mr5"></span>点击logo快速切换主题</div></div>';
        $line = 22;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_gallerya:b" class="_zs_gallery_examples_base_-base-search"><div mxv="suggests" class="w260" mx-suggest="' + $viewId + 'suggest()" mx-view="mx-suggest/index?placeholder=%E6%90%9C%E7%B4%A2&list=';
    $line = 27;
    $art = '@suggests';
    ;
    $p += ($expr = '<%@suggests%>', $i($$ref, suggests)) + '&type=all"></div></div><div mxa="_zs_gallerya:c" class="_zs_gallery_examples_base_-header-tabs clearfix">';
    $line = 32;
    $art = 'each headers as h';
    ;
    $expr = '<%for (var $art_imkfvvbx$art_i = 0, $art_cdfbsnmkx$art_c = headers.length; $art_imkfvvbx$art_i < $art_cdfbsnmkx$art_c; $art_imkfvvbx$art_i++) {    var h = headers[$art_imkfvvbx$art_i]%>';
    for (var $art_imkfvvbx$art_i = 0, $art_cdfbsnmkx$art_c = headers.length; $art_imkfvvbx$art_i < $art_cdfbsnmkx$art_c; $art_imkfvvbx$art_i++) {
        var h = headers[$art_imkfvvbx$art_i];
        $p += '<a ';
        $line = 33;
        $art = 'if h.new';
        ;
        $expr = '<%if (h["new"]) {%>';
        if (h["new"]) {
            ;
            $p += ' mx-click="' + $viewId + 'readed({id:\'';
            $line = 33;
            $art = '=h.id';
            ;
            $p += ($expr = '<%=$eq(h.id)%>', $e($eq(h.id))) + '\'})" ';
            $line = 33;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 33;
        $art = 'if h.outer';
        ;
        $expr = '<%if (h.outer) {%>';
        if (h.outer) {
            ;
            $p += ' href="';
            $line = 33;
            $art = '=h.outer';
            ;
            $p += ($expr = '<%=h.outer%>', $e(h.outer)) + '" target="_blank" rel="noopener noreferrer" ';
            $line = 33;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' href="#!';
            $line = 33;
            $art = '=h.path';
            ;
            $p += ($expr = '<%=h.path%>', $e(h.path)) + '" ';
            $line = 33;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' class="_zs_gallery_examples_base_-header-tab ';
        $line = 33;
        $art = 'if h.cur';
        ;
        $expr = '<%if (h.cur) {%>';
        if (h.cur) {
            ;
            $p += ' _zs_gallery_examples_base_-cur ';
            $line = 33;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '">';
        $line = 34;
        $art = '=h.name';
        ;
        $p += ($expr = '<%=h.name%>', $e(h.name)) + ' ';
        $line = 35;
        $art = 'if h.new';
        ;
        $expr = '<%if (h["new"]) {%>';
        if (h["new"]) {
            ;
            $p += '<span class="_zs_gallery_examples_base_-breath-light" mx-view="mx-popover/index?content=';
            $line = 38;
            $art = '=h.new';
            ;
            $p += ($expr = '<%!$eu(h["new"])%>', $eu(h["new"])) + '&auto=true"></span>';
            $line = 40;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</a>';
        $line = 42;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv class="_zs_gallery_examples_base_-base ';
    $line = 45;
    $art = 'if count == 1';
    ;
    $expr = '<%if (count == 1) {%>';
    if (count == 1) {
        ;
        $p += ' _zs_gallery_examples_base_-close ';
        $line = 45;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><div class="_zs_gallery_examples_base_-base-left ';
    $line = 46;
    $art = 'if fixed';
    ;
    $expr = '<%if (fixed) {%>';
    if (fixed) {
        ;
        $p += ' _zs_gallery_examples_base_-fixed ';
        $line = 46;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" style="height: ';
    $line = 46;
    $art = '=minHeight';
    ;
    $p += ($expr = '<%=minHeight%>', $e(minHeight)) + 'px;">';
    $line = 47;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ibedvxjws$art_i = 0, $art_cwdykdjj$art_c = list.length; $art_ibedvxjws$art_i < $art_cwdykdjj$art_c; $art_ibedvxjws$art_i++) {    var item = list[$art_ibedvxjws$art_i]%>';
    for (var $art_ibedvxjws$art_i = 0, $art_cwdykdjj$art_c = list.length; $art_ibedvxjws$art_i < $art_cwdykdjj$art_c; $art_ibedvxjws$art_i++) {
        var item = list[$art_ibedvxjws$art_i];
        $p += ' ';
        $line = 48;
        $art = 'if item.name';
        ;
        $expr = '<%if (item.name) {%>';
        if (item.name) {
            ;
            $p += '<span class="_zs_gallery_examples_base_-title ';
            $line = 49;
            $art = 'if !item.close';
            ;
            $expr = '<%if (!item.close) {%>';
            if (!item.close) {
                ;
                $p += ' _zs_gallery_examples_base_-expand ';
                $line = 49;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + 'toggle({index:';
            $line = 50;
            $art = '=item.index';
            ;
            $p += ($expr = '<%=item.index%>', $e(item.index)) + '})">';
            $line = 51;
            $art = '!item.name';
            ;
            $p += ($expr = '<%!item.name%>', $n(item.name)) + '<i mxs="_zs_gallerya:c" class="mc-iconfont _zs_gallery_examples_base_-title-icon">&#xe692;</i></span>';
            $line = 54;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 55;
        $art = 'each item.subs as sub';
        ;
        $expr = '<%for (var $art_ipywvjqeutm$art_i = 0, $art_objzjaqehk$art_obj = item.subs, $art_cwckqgweyb$art_c = $art_objzjaqehk$art_obj.length; $art_ipywvjqeutm$art_i < $art_cwckqgweyb$art_c; $art_ipywvjqeutm$art_i++) {        var sub = $art_objzjaqehk$art_obj[$art_ipywvjqeutm$art_i]%>';
        for (var $art_ipywvjqeutm$art_i = 0, $art_objzjaqehk$art_obj = item.subs, $art_cwckqgweyb$art_c = $art_objzjaqehk$art_obj.length; $art_ipywvjqeutm$art_i < $art_cwckqgweyb$art_c; $art_ipywvjqeutm$art_i++) {
            var sub = $art_objzjaqehk$art_obj[$art_ipywvjqeutm$art_i];
            $p += '<a class="_zs_gallery_examples_base_-nav ';
            $line = 56;
            $art = 'if (sub.path == path)';
            ;
            $expr = '<%if (sub.path == path) {%>';
            if (sub.path == path) {
                ;
                $p += ' _zs_gallery_examples_base_-cur ';
                $line = 56;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 56;
            $art = 'if item.name';
            ;
            $expr = '<%if (item.name) {%>';
            if (item.name) {
                ;
                $p += ' _zs_gallery_examples_base_-sub ';
                $line = 56;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 56;
            $art = 'if !item.close';
            ;
            $expr = '<%if (!item.close) {%>';
            if (!item.close) {
                ;
                $p += ' _zs_gallery_examples_base_-expand ';
                $line = 56;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" href="#!';
            $line = 57;
            $art = '=sub.path';
            ;
            $p += ($expr = '<%=sub.path%>', $e(sub.path)) + '"><i mxa="_zs_gallerya:d" class="mc-iconfont _zs_gallery_examples_base_-sub-icon">';
            $line = 58;
            $art = '!sub.icon';
            ;
            $p += ($expr = '<%!sub.icon%>', $n(sub.icon)) + '</i>';
            $line = 59;
            $art = '!sub.name';
            ;
            $p += ($expr = '<%!sub.name%>', $n(sub.name)) + '</a>';
            $line = 61;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 62;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_gallerya:e" class="_zs_gallery_examples_base_-base-main"><div mxv mxa="_zs_gallerya:f" class="_zs_gallery_examples_base_-content"><div mxv="cur" ';
    $line = 67;
    $art = 'if cur.tip';
    ;
    $expr = '<%if (cur.tip) {%>';
    if (cur.tip) {
        ;
        $p += ' ';
        $line = 67;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' mx-view="mx-title/index?content=';
    $line = 66;
    $art = '=cur.name';
    ;
    $p += ($expr = '<%!$eu(cur.name)%>', $eu(cur.name)) + '&tip=';
    $line = 67;
    $art = '@cur.tip';
    ;
    $p += ($expr = '<%@cur.tip%>', $i($$ref, cur.tip)) + '"></div><div mx-view="';
    $line = 69;
    $art = '=view';
    ;
    $p += ($expr = '<%=view%>', $e(view)) + '"><div mxs="_zs_gallerya:d" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div></div>';
    $line = 73;
    $art = 'if count > 1';
    ;
    $expr = '<%if (count > 1) {%>';
    if (count > 1) {
        ;
        $p += '<div mxa="_zs_gallerya:g" class="_zs_gallery_examples_base_-contexts clearfix">';
        $line = 75;
        $art = 'if prev.path';
        ;
        $expr = '<%if (prev.path) {%>';
        if (prev.path) {
            ;
            $p += '<a href="#!';
            $line = 76;
            $art = '=prev.path';
            ;
            $p += ($expr = '<%=prev.path%>', $e(prev.path)) + '" class="_zs_gallery_examples_base_-prev link-brand"><i mxs="_zs_gallerya:e" class="mc-iconfont _zs_gallery_examples_base_-context-icon">&#xe63a;</i>上一篇：';
            $line = 78;
            $art = '!prev.name';
            ;
            $p += ($expr = '<%!prev.name%>', $n(prev.name)) + '</a>';
            $line = 80;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 81;
        $art = 'if next.path';
        ;
        $expr = '<%if (next.path) {%>';
        if (next.path) {
            ;
            $p += '<a href="#!';
            $line = 82;
            $art = '=next.path';
            ;
            $p += ($expr = '<%=next.path%>', $e(next.path)) + '" class="_zs_gallery_examples_base_-next link-brand"><i mxs="_zs_gallerya:e" class="mc-iconfont _zs_gallery_examples_base_-context-icon">&#xe63a;</i>下一篇：';
            $line = 84;
            $art = '!next.name';
            ;
            $p += ($expr = '<%!next.name%>', $n(next.name)) + '</a>';
            $line = 86;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 88;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxs="_zs_gallerya:f" class="_zs_gallery_examples_base_-fixes"><span class="_zs_gallery_examples_base_-fix" mx-view="mx-popover/index?content=%3Cdiv%20style%3D%27height%3A%20260px%3B%27%3E%3Cimg%20src%3D%27%2F%2Fimg.alicdn.com%2Ftfs%2FTB1QnJbNXzqK1RjSZFvXXcB7VXa-1056-1262.jpg%27%20style%3D%27width%3A100%25%3B%27%20%2F%3E%3C%2Fdiv%3E&width=240&placement=left&align=bottom"><i class="mc-iconfont _zs_gallery_examples_base_-fix-icon">&#xe677;</i></span><a href="https://aone.alibaba-inc.com/project/768817/req?akProjectId=768817&spm=a2o8d.rdc_projecthome.0.0.70b27a26750VTM" target="_blank" rel="noopener noreferrer" class="_zs_gallery_examples_base_-fix"><i class="mc-iconfont _zs_gallery_examples_base_-fix-icon">&#xe64f;</i><span class="_zs_gallery_examples_base_-fix-tip">给我提需求</span></a><a href="https://aone.alibaba-inc.com/project/768817/issue?spm=a2o8d.corp_prod_req_list.0.0.3e646b88s8ezBH" target="_blank" rel="noopener noreferrer" class="_zs_gallery_examples_base_-fix"><i class="mc-iconfont _zs_gallery_examples_base_-fix-icon">&#xe63d;</i><span class="_zs_gallery_examples_base_-fix-tip">帮我找bug</span></a><a href="javascript:;" class="_zs_gallery_examples_base_-fix" mx-click="' + $viewId + 'back()"><i class="mc-iconfont _zs_gallery_examples_base_-fix-icon">&#xe62d;</i><span class="_zs_gallery_examples_base_-fix-tip">回到顶部</span></a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/base.html';
    throw msg;
} return $p; },
    init: function () {
        this.observeLocation({
            path: true
        });
        this.$map = {};
    },
    render: function () {
        $(window).scrollTop(0);
        var that = this;
        var updater = that.updater;
        // 当前路径
        var loc = Magix.Router.parse();
        var path = loc.path;
        var headers = [{
                id: 'gallery',
                name: '组件',
                path: '/form/mixins',
                paths: [{
                        subs: [{
                                name: '更新记录',
                                path: '/all/update'
                            }]
                    }, {
                        name: '基础规范',
                        subs: [{
                                name: '双向绑定约定',
                                tip: '下述详细说明如何写一个支持多参数且数据双向绑定的组件',
                                path: '/all/bind',
                                icon: '&#xe6d1;'
                            },
                            // {
                            //     name: 'leaveTip和leaveConfirm',
                            //     tip: '页面有变化且未保存时，用户提示 + 二次确认',
                            //     path: '/all/leave',
                            //     icon: '&#xe622;'
                            // }, 
                            {
                                name: '_config说明',
                                path: '/all/config',
                                icon: '&#xe64f;'
                            }, {
                                name: '相关文档链接',
                                path: '/all/links',
                                icon: '&#xe60d;'
                            }]
                        // {
                        //     name: '关于兼容性',
                        //     path: '/all/compatibility',
                        //     icon: '&#xe9e5;'
                        // }
                    }, {
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
                            }, {
                                name: '表单样式',
                                path: '/form/style',
                                icon: '&#xe62c;'
                            }]
                        // {
                        //     name: '异常情况记录',
                        //     path: '/form/error',
                        //     icon: '&#xe611;'
                        // }
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
                                name: '操作项在下方',
                                path: '/table/index3',
                                icon: '&#xe7b5;'
                            }, {
                                name: '操作项在同一行',
                                path: '/table/index4',
                                icon: '&#xe7b5;'
                            }, {
                                name: '表头吸顶',
                                path: '/table/index11',
                                icon: '&#xe641;'
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
                            }, {
                                name: '筛选项同表头一起吸顶',
                                path: '/table/index12',
                                icon: '&#xe641;'
                            }]
                    }, {
                        name: '数据交互',
                        subs: [{
                                name: '下拉框（单选）',
                                tip: '支持click展开和hover展开两种形式；下拉列表在组件内；支持双向绑定',
                                path: '/dropdown/index',
                                icon: '&#xe7a4;'
                            }, {
                                name: '下拉框（多选）',
                                tip: '支持click展开和hover展开两种形式；下拉列表在组件内；支持双向绑定',
                                path: '/dropdown/multiple',
                                icon: '&#xe7a4;'
                            }, {
                                name: '下拉框（追加到body版）',
                                tip: '支持click展开和hover展开两种形式',
                                path: '/dropdown/bd',
                                icon: '&#xe7a4;'
                            }, {
                                name: '日历（选择单日）',
                                tip: '支持双向绑定',
                                path: '/calendar/index',
                                icon: '&#xe60e;'
                            }, {
                                name: '日历（选择时间段）',
                                tip: '支持双向绑定',
                                path: '/calendar/range',
                                icon: '&#xe60e;'
                            }, {
                                name: '时分秒选择',
                                tip: '支持双向绑定',
                                path: '/time/index',
                                icon: '&#xe604;'
                            }, {
                                name: '分页',
                                path: '/pagination/index',
                                icon: '&#xe61a;'
                            }, {
                                name: '底边线tab切换',
                                tip: '一般适用于一级导航，支持双向绑定',
                                path: '/tabs/index',
                                icon: '&#xe62a;'
                            }, {
                                name: '盒状分组',
                                tip: '一般适用于快捷筛选，支持双向绑定',
                                path: '/tabs/box',
                                icon: '&#xe62a;'
                            }, {
                                name: '可编辑内容',
                                tip: 'hover显示编辑按钮',
                                path: '/editor/index',
                                icon: '&#xe698;'
                            }, {
                                name: '搜索',
                                tip: '支持选择类型搜索和普通搜索',
                                path: '/search/index',
                                icon: '&#xe651;'
                            }, {
                                name: '可选项提示suggest',
                                tip: '支持双向绑定',
                                path: '/suggest/index',
                                icon: '&#xe654;'
                            }, {
                                name: '开关',
                                tip: '支持双向绑定',
                                path: '/switch/index',
                                icon: '&#xe72c;'
                            }, {
                                name: '树状结构',
                                tip: '支持双向绑定',
                                path: '/tree/index',
                                icon: '&#xe62b;'
                            }, {
                                name: '级联选择',
                                tip: '支持双向绑定',
                                path: '/cascade/index',
                                icon: '&#xe60a;'
                            }, {
                                name: '二级单选',
                                path: '/secradio/index',
                                icon: '&#xe657;'
                            }, {
                                name: '标签选择',
                                tip: '支持双向绑定',
                                path: '/taginput/index',
                                icon: '&#xe794;'
                            }, {
                                name: 'popmenu更多菜单',
                                path: '/popmenu/index',
                                icon: '&#xe62c;'
                            }, {
                                name: '上传',
                                path: '/uploader/index',
                                icon: '&#xe63c;'
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
                            }, {
                                name: '拖动排序',
                                path: '/dragsort/index',
                                icon: '&#xe64d;'
                            }, {
                                name: '复制',
                                tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://clipboardjs.com/" class="color-brand">https://clipboardjs.com/</a> 代码',
                                path: '/copy/index',
                                icon: '&#xe610;'
                            }, {
                                name: '颜色选择',
                                path: '/color/index',
                                icon: '&#xe720;'
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
                                name: '全局提示',
                                path: '/gtip/index',
                                icon: '&#xe662;'
                            }, {
                                name: '异常页面',
                                tip: '404找不到页面',
                                path: '/error/index',
                                icon: '&#xe611;'
                            }, {
                                name: 'feedback',
                                tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/uxradar/openapi/idgcdi" target="_blank"  rel="noopener noreferrer">UX Radar接入文档</a>',
                                path: '/feedback/index',
                                icon: '&#xe613;'
                            }, {
                                name: '万象客服问答',
                                tip: '<a class="color-brand" href="https://yuque.antfin-inc.com/wanxiang/technology/description" target="_blank"  rel="noopener noreferrer">服务窗接入wiki文档</a>',
                                path: '/wanxiang/index',
                                icon: '&#xe767;'
                            }, {
                                name: '钉钉唤起',
                                tip: '<a class="color-brand" href="https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.WN76gC&treeId=176&articleId=106086&docType=1" target="_blank"  rel="noopener noreferrer">钉钉PC端统一跳转协议</a>',
                                path: '/im/dingding',
                                icon: '&#xe677;'
                            }, {
                                name: '旺旺点灯',
                                tip: '<a class="color-brand" href="http://gitlab.alibaba-inc.com/aliww/web.ww" target="_blank"  rel="noopener noreferrer">接入说明</a>',
                                path: '/im/wangwang',
                                icon: '&#xe75c;'
                            }]
                    }, {
                        name: '数据展示',
                        subs: [{
                                name: '图表',
                                tip: 'chartpark图表使用示例',
                                path: '/chart/index',
                                icon: '&#xe670;'
                            }, {
                                name: '浮层',
                                tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），点击空白处自动关闭浮层',
                                path: '/dialog/index',
                                icon: '&#xe7ff;'
                            }, {
                                name: '全屏右出浮层',
                                tip: 'Magix.View上挂载mxModal',
                                path: '/dialog/modal',
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
                            }, {
                                name: '折叠面板',
                                tip: '可以折叠/展开的内容区域',
                                path: '/collapse/index',
                                icon: '&#xe6a0;'
                            }]
                    }, {
                        name: '流程类',
                        subs: [{
                                name: '侧边导航分步流程',
                                path: '/main/index',
                                icon: '&#xe64c;'
                            }, {
                                name: '简单横向分步流程',
                                path: '/main/hor',
                                icon: '&#xe690;'
                            }, {
                                name: '简单纵向分步流程',
                                path: '/main/ver',
                                icon: '&#xe65e;'
                            }]
                    }, {
                        name: '样式',
                        subs: [{
                                name: '布局',
                                tip: '基于display:flex实现，简化api',
                                path: '/grid/index',
                                icon: '&#xe6b4;'
                            }, {
                                name: 'trigger + 展开项',
                                tip: '使用组件内置class实现一个类似于dropdown，下拉框内容自定义的模块',
                                path: '/style/trigger',
                                icon: '&#xeb94;'
                            }, {
                                name: 'checkbox',
                                tip: '包装indeterminate状态，只负责对样式进行控制',
                                path: '/checkbox/index',
                                icon: '&#xe63f;'
                            }, {
                                name: '按钮',
                                path: '/btn/index',
                                icon: '&#xe691;'
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
                                name: '条型进度比例',
                                tip: '支持渐变',
                                path: '/effects/progress1',
                                icon: '&#xe6e4;'
                            }, {
                                name: '刻度型进度比例',
                                path: '/effects/progress2',
                                icon: '&#xe6e4;'
                            }, {
                                name: '圆形进度比例',
                                path: '/effects/progress3',
                                icon: '&#xe6e4;'
                            }, {
                                name: '空状态',
                                path: '/effects/empty',
                                icon: '&#xe685;'
                            }, {
                                name: '浏览器兼容提示',
                                path: '/effects/ua',
                                icon: '&#xe631;'
                            }, {
                                name: 'checkbox + radio + input',
                                path: '/style/index',
                                icon: '&#xe62c;'
                            }, {
                                name: '标题',
                                path: '/title/index',
                                icon: '&#xe786;'
                            }, {
                                name: '各种动效',
                                path: '/effects/anim',
                                icon: '&#xe66b;'
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
                    }]
            }, {
                id: 'scaffold',
                name: '脚手架',
                path: '/all/pro/init',
                paths: [{
                        subs: [{
                                name: '10分钟快速上手',
                                path: '/all/pro/init'
                            }, {
                                name: '菜单配置',
                                path: '/all/pro/menu'
                            }, {
                                name: 'Magix跨项目公用view',
                                tip: 'Magix的微前端之路',
                                path: '/all/pro/cross'
                            }, {
                                name: '关于本地组件的约定',
                                path: '/all/pro/local'
                            }, {
                                name: '覆盖组件样式',
                                path: '/all/pro/styles'
                            }, {
                                name: 'chartpark图表',
                                tip: '<a href="https://chartpark.alibaba-inc.com/" target="_blank" rel="noopener noreferrer" class="color-brand">https://chartpark.alibaba-inc.com/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=ru4x0jq" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>释剑</a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>',
                                path: '/all/pro/chartpark'
                            }, {
                                name: '数据小站接入',
                                tip: '<a href="http://data.alimama.net/" target="_blank" rel="noopener noreferrer" class="color-brand">http://data.alimama.net/</a>，接口人<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=y8e7um3" class="ml5"><i class="mc-iconfont color-brand fontsize-18 displacement-2">&#xe677;</i>浩添</a>',
                                path: '/all/pro/data'
                            }, {
                                name: '淘宝登陆框接入',
                                tip: '接入文档<a rel="noopener noreferrer" href="https://lark.alipay.com/up/login-doc/xvgy82" target="_blank" class="link-brand">https://lark.alipay.com/up/login-doc/xvgy82</a>',
                                path: '/all/pro/login'
                            }, {
                                name: '页面监听参数变化回到顶部',
                                path: '/all/pro/top'
                            }]
                    }]
            }, {
                id: 'edit',
                name: '在线编辑',
                // new: that.getCookie('header_edit') ? '' : '在线调整颜色，快速生成项目预览，定制专属配色方案',
                path: '/all/edit/index',
                paths: [{
                        subs: [{
                                name: '在线编辑',
                                path: '/all/edit/index'
                            }]
                    }]
            }, {
                id: 'pro',
                name: 'PRO',
                // new: that.getCookie('header_pro') ? '' : '广告投放bp完整示例，借助rap模拟真实应用',
                outer: 'https://thx.github.io/magix-gallery/pro.html'
            }];
        var pathMap = {}, // 路径index映射
        suggests = []; //全局提示
        headers.forEach(function (header, i) {
            (header.paths || []).forEach(function (item) {
                var subs = $.extend(true, [], item.subs);
                subs.forEach(function (sub) {
                    sub.text = header.name + ' - ' + sub.name;
                    sub.value = sub.path;
                    sub.value = 'mx-' + sub.value.slice(1);
                    pathMap[sub.path] = i;
                });
                suggests = suggests.concat(subs);
            });
        });
        var curIndex = pathMap[path];
        headers[curIndex].cur = true;
        // 当前tab可选
        var list = headers[curIndex].paths;
        var all = [];
        list.forEach(function (item, index) {
            // 默认全部展开
            item.index = index;
            item.close = that.$map[item.subs[0].path] || false;
            all = all.concat(item.subs);
        });
        var view = path.slice(1);
        var i = view.indexOf('/');
        if (path.indexOf('/all/') > -1) {
            view = 'examples' + view.slice(i);
        }
        else {
            view = 'mx-' + view.slice(0, i) + '/examples' + view.slice(i);
        }
        // 当前路径所属组展开
        var curNames = [];
        var count = 0;
        list.forEach(function (item) {
            item.subs.forEach(function (sub) {
                count++;
                if (sub.path == path) {
                    item.close = false;
                    that.$map[item.subs[0].path] = false;
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
        var theme = {
            show: false,
            update: false,
            // update: !that.getCookie('gallery_theme'),
            color: that.getCookie('gallery_theme_color') || '#51a300'
        };
        // 30天过期
        that.setCookie('gallery_theme', true, "h" + 24 * 30);
        updater.digest({
            headers: headers,
            suggests: suggests,
            all: all,
            count: count,
            list: list,
            cur: cur,
            prev: prev,
            next: next,
            path: path,
            view: view,
            minHeight: $(window).height(),
            theme: theme
        });
        // 当前选中项滚动到可视范围之内
        var curNode = $('#' + that.id + ' ._zs_gallery_examples_base_-nav._zs_gallery_examples_base_-cur');
        if (curNode && curNode.length) {
            if (curNode[0].scrollIntoViewIfNeeded) {
                curNode[0].scrollIntoViewIfNeeded();
            }
            else if (curNode[0].scrollIntoView) {
                curNode[0].scrollIntoView();
            }
        }
    },
    'showPicker<click>': function (e) {
        var id = 'gallery_theme';
        var theme = this.updater.get('theme');
        theme.show = true;
        theme.update = false;
        this.updater.digest(theme);
    },
    'changeColors<change>': function (e) {
        if (e.brand) {
            // 自定义的配色方案保留
            // 30天过期
            var h = 24 * 30;
            this.setCookie('gallery_theme_color', e.brand, "h" + h);
        }
        var colors = e.colors;
        for (var key in colors) {
            document.body.style.setProperty(key, colors[key]);
        }
        var theme = this.updater.get('theme');
        theme.show = false;
        this.updater.digest(theme);
    },
    '$doc<click>': function (event) {
        var that = this;
        var theme = that.updater.get('theme');
        if (theme.show) {
            var node = $('#' + that.id + ' ._zs_gallery_examples_base_-base-logo');
            var target = event.target;
            if (!Magix.inside(target, node[0])) {
                theme.show = false;
                that.updater.digest(theme);
            }
        }
    },
    'toggle<click>': function (e) {
        var that = this;
        var updater = that.updater;
        var list = updater.get('list');
        var index = e.params.index;
        list[index].close = !list[index].close;
        that.$map[list[index].subs[0].path] = list[index].close;
        updater.digest({
            list: list
        });
    },
    'suggest<suggest>': function (e) {
        var value = e.selected.value;
        Magix.Router.to(value.replace('mx-', '/'));
    },
    '$win<scroll>': function (e) {
        var that = this;
        var mainNode = $('#' + that.id);
        var bodyNode = mainNode.find('._zs_gallery_examples_base_-base-main');
        var leftNode = mainNode.find('._zs_gallery_examples_base_-base-left');
        var scrollTop = $(window).scrollTop();
        var bodyTop = bodyNode.offset().top;
        var fixed = that.updater.get('fixed');
        if (scrollTop > bodyTop) {
            if (fixed) {
                return;
            }
            that.updater.set({
                fixed: true
            });
            leftNode.addClass('_zs_gallery_examples_base_-fixed');
        }
        else {
            if (!fixed) {
                return;
            }
            that.updater.set({
                fixed: false
            });
            leftNode.removeClass('_zs_gallery_examples_base_-fixed');
        }
    },
    '$win<resize>': function () {
        var that = this;
        var winHeight = $(window).height();
        var mainNode = $('#' + that.id);
        var leftNode = mainNode.find('._zs_gallery_examples_base_-base-left');
        that.updater.set({
            minHeight: winHeight
        });
        leftNode.css('height', winHeight);
    },
    'back<click>': function (e) {
        $(window).scrollTop(0);
    },
    /**
     * 导航提示本地更新
     */
    'readed<click>': function (e) {
        var id = e.params.id;
        // 30天过期
        var h = 24 * 30;
        this.setCookie("header_" + id, true, "h" + h);
    },
    getCookie: function (name) {
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        var arr = document.cookie.match(reg);
        if (arr && arr.length) {
            return unescape(arr[2]);
        }
        else {
            return null;
        }
    },
    setCookie: function (name, value, time) {
        //这是有设定过期时间的使用示例：
        //s20是代表20秒
        //h是指小时，如12小时则是：h12
        //d是天数，30天则：d30
        var getsec = function (str) {
            var sec;
            var str1 = str.substring(1, str.length) * 1;
            var str2 = str.substring(0, 1);
            switch (str2) {
                case 's':
                    sec = str1 * 1000;
                    break;
                case 'h':
                    sec = str1 * 60 * 60 * 1000;
                    break;
                case 'd':
                    sec = str1 * 24 * 60 * 60 * 1000;
                    break;
            }
            return sec;
        };
        // time过期时间
        var strsec = getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    }
});

});