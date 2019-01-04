/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/base",["magix","$","mx-suggest/index","mx-title/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-suggest/index");
require("mx-title/index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallerya",".mx-shadow{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}body,html{font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;color:#333;font-size:12px;-webkit-font-smoothing:antialiased;line-height:1.5}body,dd,dl,fieldset,figure,form,h1,h2,h3,h4,h5,h6,hr,html,input,legend,ol,p,pre,tbody,td,textarea,tfoot,th,thead,ul{margin:0;padding:0}ol,ul{list-style-type:none;list-style-image:none}a{background-color:transparent}a:active,a:hover{outline-width:0}a:focus{outline:0 none}h1,h2,h3,h4,h5,h6{font-weight:400}h1{font-size:36px}h2{font-size:30px}h3{font-size:22px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}b,strong{font-weight:700}hr{box-sizing:content-box;height:0}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word;overflow:auto}q{quotes:none}q:after,q:before{content:\"\";content:none}small{font-size:85.7%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}table{border-collapse:collapse;border-spacing:0}th{text-align:left;font-weight:inherit}img{border-style:none;width:auto\\9;height:auto;max-width:100%;vertical-align:top;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border-style:none;white-space:normal;*margin-left:-7px}button,input,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:middle;*vertical-align:middle}button,input{*overflow:visible}button{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:not-allowed}input[type=checkbox],input[type=radio]{box-sizing:border-box;margin-top:-2px;padding:0;*height:12px;*width:12px}button::-moz-focus-inner,input::-moz-focus-inner{border-style:none;padding:0}textarea{overflow:auto;resize:vertical}@media screen and (-webkit-min-device-pixel-ratio:0){input{line-height:normal!important}}input::-moz-placeholder,textarea::-moz-placeholder{color:#a9a9a9;opacity:1}audio,canvas,video{display:inline-block;vertical-align:baseline}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}a:focus,button:focus,input:focus,textarea:focus{outline:none;resize:none}a{color:#333;text-decoration:none;transition:all .25s}a:hover{color:#4d7fff}a:active,a:focus,a:hover,a:visited{outline:0;text-decoration:none}a.link-light,a.link-light:active,a.link-light:focus,a.link-light:visited{color:#999}a.link-grey,a.link-grey:active,a.link-grey:focus,a.link-grey:visited,a.link-light:hover{color:#666}a.link-grey:hover{color:#333}a.link-brand,a.link-brand:active,a.link-brand:focus,a.link-brand:visited{color:#4d7fff}a.link-brand:hover{color:#4775eb}label{cursor:pointer;display:inline-block;max-width:100%;font-weight:400}[mx-view] item{display:none}::-moz-selection{background-color:#4775eb;color:#fff}::-moz-selection,::selection{background-color:#4775eb;color:#fff}.btn{display:inline-block;height:32px;margin-bottom:0;padding:0 12px;line-height:30px;border-radius:4px;font-size:12px;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;transition:all .25s ease-out;color:#333;background-color:#e6e6e6;border:1px solid #e6e6e6;background-image:none}.btn.hover,.btn:active,.btn:hover{color:#333;background-color:#ccc;border-color:#ccc}.btn.btn-small{height:26px;line-height:24px}.btn.btn-brand{color:#fff;background-color:#4d7fff;border-color:#4d7fff}.btn.btn-brand.hover,.btn.btn-brand:active,.btn.btn-brand:hover{color:#fff;background-color:#4775eb;border-color:#4775eb}.btn.btn-white{background-color:#fff;border-color:#fff;background-image:none}.btn.btn-white.hover,.btn.btn-white:active,.btn.btn-white:hover{background-color:#fafafa;border-color:#fafafa;background-image:none}.btn.btn-disabled,.btn[disabled],.btn[disabled].hover,.btn[disabled]:active,.btn[disabled]:hover{opacity:.5;cursor:not-allowed;color:#333;background-color:#eee;border-color:#e6e6e6;background-image:none}.dialog-header{padding:16px 24px;border-bottom:1px solid #e6e6e6;color:#333}.dialog-header .header-name{font-size:16px}.dialog-body{padding:16px 24px}.dialog-footer{padding:10px 24px;text-align:left;border-top:1px solid #e6e6e6}:-ms-input-placeholder,::-moz-placeholder,::-webkit-input-placeholder,::placeholder{color:#999}.input,.textarea,input,textarea{display:inline-block;max-width:100%;font-size:12px;border:1px solid #e6e6e6;border-radius:4px;background-color:#fff;background-image:none;box-shadow:none;box-sizing:border-box;transition:border-color .25s ease-out;color:#333;outline:none}.input:hover,.textarea:hover,input:hover,textarea:hover{border-color:#ccc}.input:focus,.textarea:focus,input:focus,textarea:focus{border-color:#4d7fff}.input[disabled],.input[disabled]:focus,.input[disabled]:hover,.input[readonly],.input[readonly]:focus,.input[readonly]:hover,.textarea[disabled],.textarea[disabled]:focus,.textarea[disabled]:hover,.textarea[readonly],.textarea[readonly]:focus,.textarea[readonly]:hover,input[disabled],input[disabled]:focus,input[disabled]:hover,input[readonly],input[readonly]:focus,input[readonly]:hover,textarea[disabled],textarea[disabled]:focus,textarea[disabled]:hover,textarea[readonly],textarea[readonly]:focus,textarea[readonly]:hover{border-color:#e6e6e6;cursor:not-allowed;background-color:#fafafa;color:#999}.input,input{height:32px;line-height:30px;padding:0 9px}.textarea,textarea{line-height:22px;padding:8px}.input-focus,.textarea-focus{border-color:#4d7fff}.input-small{height:26px;line-height:24px}@-webkit-keyframes checkboxAfter{0%{transform:scale(0);-webkit-transform:scale(0)}to{transform:scale(1.1);-webkit-transform:scale(1.1)}}@keyframes checkboxAfter{0%{transform:scale(0);-webkit-transform:scale(0)}to{transform:scale(1.1);-webkit-transform:scale(1.1)}}@-webkit-keyframes checkboxBefore{0%{transform:scale(1);-webkit-transform:scale(1);opacity:.5}to{transform:scale(1.8);-webkit-transform:scale(1.8);opacity:0}}@keyframes checkboxBefore{0%{transform:scale(1);-webkit-transform:scale(1);opacity:.5}to{transform:scale(1.8);-webkit-transform:scale(1.8);opacity:0}}.checkbox,input[type=checkbox]{width:14px;height:14px;margin-right:4px;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;background-color:#fff;border:1px solid #ccc;cursor:pointer;border-radius:2px;box-sizing:border-box;outline:none;transition:border-color .25s,background-color .25s}.checkbox:focus,input[type=checkbox]:focus{border-color:#ccc}.checkbox:hover,input[type=checkbox]:hover{border-color:#4d7fff}.checkbox.checked,.checkbox:checked,input[type=checkbox].checked,input[type=checkbox]:checked{border-color:#4d7fff;background-color:#4d7fff}.checkbox.checked:after,.checkbox:checked:after,input[type=checkbox].checked:after,input[type=checkbox]:checked:after{content:\"\";display:block;width:100%;height:100%;border-radius:2px;background-image:url(https://img.alicdn.com/tps/TB1bSBzLVXXXXXfXFXXXXXXXXXX-1000-1000.svg);background-size:100%;color:#fff}.checkbox.disabled,.checkbox:disabled,input[type=checkbox].disabled,input[type=checkbox]:disabled{border-color:#e6e6e6;background-color:#fafafa}.checkbox.disabled.checked,.checkbox.disabled:checked,.checkbox:disabled.checked,.checkbox:disabled:checked,input[type=checkbox].disabled.checked,input[type=checkbox].disabled:checked,input[type=checkbox]:disabled.checked,input[type=checkbox]:disabled:checked{border-color:#ccc;background-color:#ccc}.checkbox.indeterminate,.checkbox:indeterminate,input[type=checkbox].indeterminate,input[type=checkbox]:indeterminate{background-color:#4d7fff;border-color:#4d7fff}.checkbox.indeterminate:after,.checkbox:indeterminate:after,input[type=checkbox].indeterminate:after,input[type=checkbox]:indeterminate:after{content:\"\";display:block;height:2px;width:8px;margin:40% auto;background-color:#fff}.checkbox.indeterminate.disabled,.checkbox.indeterminate:disabled,.checkbox:indeterminate.disabled,.checkbox:indeterminate:disabled,input[type=checkbox].indeterminate.disabled,input[type=checkbox].indeterminate:disabled,input[type=checkbox]:indeterminate.disabled,input[type=checkbox]:indeterminate:disabled{border-color:#ccc;background-color:#ccc}.checkbox.anim-checkbox,input[type=checkbox].anim-checkbox{position:relative}.checkbox.anim-checkbox:checked:after,input[type=checkbox].anim-checkbox:checked:after{-webkit-animation:checkboxAfter .25s ease-out;animation:checkboxAfter .25s ease-out}.checkbox.anim-checkbox:checked:before,input[type=checkbox].anim-checkbox:checked:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:2px;border:1px solid #4d7fff;-webkit-animation:checkboxBefore .25s ease-out;animation:checkboxBefore .25s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.checkbox.anim-checkbox:disabled:checked:before,input[type=checkbox].anim-checkbox:disabled:checked:before{content:none}@-webkit-keyframes radioAfter{0%{transform:scale(0);-webkit-transform:scale(0);opacity:0}50%{transform:scale(1.5);-webkit-transform:scale(1.5)}to{transform:scale(1);-webkit-transform:scale(1);opacity:1}}@keyframes radioAfter{0%{transform:scale(0);-webkit-transform:scale(0);opacity:0}50%{transform:scale(1.5);-webkit-transform:scale(1.5)}to{transform:scale(1);-webkit-transform:scale(1);opacity:1}}@-webkit-keyframes radioBefore{0%{transform:scale(1);-webkit-transform:scale(1);opacity:.7}to{transform:scale(1.6);-webkit-transform:scale(1.6);opacity:0}}@keyframes radioBefore{0%{transform:scale(1);-webkit-transform:scale(1);opacity:.7}to{transform:scale(1.6);-webkit-transform:scale(1.6);opacity:0}}.radio,input[type=radio]{position:relative;width:14px;height:14px;margin-right:4px;border:1px solid #ccc;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;cursor:pointer;vertical-align:middle;box-sizing:border-box;border-radius:50%;outline:none;transition:border-color .25s}.radio:focus,input[type=radio]:focus{border-color:#ccc}.radio:hover,input[type=radio]:hover{border-color:#4d7fff}.radio:checked,input[type=radio]:checked{background-color:#4d7fff;border-color:#4d7fff}.radio:checked:after,input[type=radio]:checked:after{content:\"\";position:absolute;top:3px;left:3px;width:6px;height:6px;border-radius:100%;background-color:#fff}.radio:checked:hover,input[type=radio]:checked:hover{border-color:#4d7fff}.radio:disabled,input[type=radio]:disabled{background-color:#fafafa;border-color:#e6e6e6}.radio:disabled:hover,input[type=radio]:disabled:hover{border-color:#e6e6e6}.radio:disabled:after,input[type=radio]:disabled:after{background-color:#ccc}.radio.anim-radio,input[type=radio].anim-radio{position:relative;width:16px;height:16px}.radio.anim-radio:checked,input[type=radio].anim-radio:checked{background-color:#fff;border-color:#4d7fff}.radio.anim-radio:checked:after,input[type=radio].anim-radio:checked:after{top:4px;left:4px;background-color:#4d7fff;-webkit-animation:radioAfter .25s ease-out;animation:radioAfter .25s ease-out}.radio.anim-radio:checked:before,input[type=radio].anim-radio:checked:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;border:1px solid #4d7fff;-webkit-animation:radioBefore .25s ease-out;animation:radioBefore .25s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.radio.anim-radio:disabled,input[type=radio].anim-radio:disabled{background-color:#fafafa;border-color:#e6e6e6}.radio.anim-radio:disabled:hover,input[type=radio].anim-radio:disabled:hover{border-color:#e6e6e6}.radio.anim-radio:disabled:after,input[type=radio].anim-radio:disabled:after{background-color:#ccc}.radio.anim-radio:disabled:checked:before,input[type=radio].anim-radio:disabled:checked:before{content:none}.form .form-item{position:relative;padding-left:96px;margin-bottom:30px}.form .form-item .form-label{position:absolute;top:0;left:0;width:96px;line-height:32px;vertical-align:top;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis;text-align:left;cursor:default;color:#666}.form .form-item .form-label.label-right{text-align:right}.form .form-item .form-label.label-right.form-required:before{display:inline-block;margin-right:4px;content:\"*\";font-family:SimSun;line-height:1;color:#a40100}.form .form-item .form-content{position:relative;min-height:32px;line-height:32px}.form .form-item:last-child{margin-bottom:0}.form .form-footer{margin-left:96px}.form.small-form .form-item{margin-bottom:20px}.form.small-form .form-item:last-child{margin-bottom:0}.form.align-right .form-label{padding-right:20px;text-align:right}.form-4 .form-item{padding-left:48px}.form-4 .form-item .form-label{width:48px}.form-4 .form-footer{margin-left:48px}.form-6 .form-item{padding-left:72px}.form-6 .form-item .form-label{width:72px}.form-6 .form-footer{margin-left:72px}.form-8 .form-item{padding-left:96px}.form-8 .form-item .form-label{width:96px}.form-8 .form-footer{margin-left:96px}.form-10 .form-item{padding-left:120px}.form-10 .form-item .form-label{width:120px}.form-10 .form-footer{margin-left:120px}@font-face{font-family:mx-iconfont;src:url(//at.alicdn.com/t/font_386526_09jqt2p4ru9x.eot);src:url(//at.alicdn.com/t/font_386526_09jqt2p4ru9x.eot#iefix) format(\"embedded-opentype\"),url(//at.alicdn.com/t/font_386526_09jqt2p4ru9x.woff) format(\"woff\"),url(//at.alicdn.com/t/font_386526_09jqt2p4ru9x.ttf) format(\"truetype\"),url(//at.alicdn.com/t/font_386526_09jqt2p4ru9x.svg#iconfont) format(\"svg\")}.mc-iconfont{display:inline-block;position:relative;font-family:mx-iconfont;font-style:normal;font-size:16px;font-weight:400;font-variant:normal;font-display:fallback;line-height:1;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@-webkit-keyframes sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.loading{width:150px;margin:0 auto;line-height:0;text-align:center}.loading:after,.loading:before{display:inline-block;width:14px;height:14px;content:\"\";background-color:#e6e6e6;border-radius:50%;-webkit-animation:sk-bouncedelay 1s ease-in-out infinite both;animation:sk-bouncedelay 1s ease-in-out infinite both}.loading:before{-webkit-animation-delay:-.32s;animation-delay:-.32s}.loading .loading-anim{display:inline-block;width:14px;height:14px;margin:0 10px;background-color:#e6e6e6;border-radius:50%;-webkit-animation:sk-bouncedelay 1s ease-in-out infinite both;animation:sk-bouncedelay 1s ease-in-out infinite both;-webkit-animation-delay:-.16s;animation-delay:-.16s}@keyframes fade-in-down{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes fade-in-down{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes fade-in-up{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes fade-in-up{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes suspension{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes suspension{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes loading-dots{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes loading-dots{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes loading-dots-rev{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes loading-dots-rev{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}.fontsize-12{font-size:12px}.fontsize-14{font-size:14px}.fontsize-16{font-size:16px}.fontsize-18{font-size:18px}.fontsize-20{font-size:20px}.fontsize-22{font-size:22px}.fontsize-24{font-size:24px}.fontsize-26{font-size:26px}.fontsize-28{font-size:28px}.fontsize-30{font-size:30px}.fontsize-32{font-size:32px}.fontsize-34{font-size:34px}.fontsize-36{font-size:36px}.fontsize-38{font-size:38px}.fontsize-40{font-size:40px}.lh14{line-height:14px}.lh16{line-height:16px}.lh18{line-height:18px}.lh20{line-height:20px}.lh22{line-height:22px}.lh24{line-height:24px}.lh26{line-height:26px}.lh28{line-height:28px}.lh30{line-height:30px}.lh32{line-height:32px}.lh34{line-height:34px}.lh36{line-height:36px}.w60{width:60px}.w70{width:70px}.w80{width:80px}.w90{width:90px}.w100{width:100px}.w110{width:110px}.w120{width:120px}.w130{width:130px}.w140{width:140px}.w150{width:150px}.w160{width:160px}.w170{width:170px}.w180{width:180px}.w190{width:190px}.w200{width:200px}.w210{width:210px}.w220{width:220px}.w230{width:230px}.w240{width:240px}.w250{width:250px}.w260{width:260px}.w270{width:270px}.w280{width:280px}.w290{width:290px}.w300{width:300px}.w310{width:310px}.w320{width:320px}.w330{width:330px}.w340{width:340px}.w350{width:350px}.w360{width:360px}.w370{width:370px}.w380{width:380px}.w390{width:390px}.w400{width:400px}.w410{width:410px}.w420{width:420px}.w430{width:430px}.w440{width:440px}.w450{width:450px}.w460{width:460px}.w470{width:470px}.w480{width:480px}.w490{width:490px}.w500{width:500px}.h50{height:50px}.h60{height:60px}.h70{height:70px}.h80{height:80px}.h90{height:90px}.h100{height:100px}.h110{height:110px}.h120{height:120px}.h130{height:130px}.h140{height:140px}.h150{height:150px}.h160{height:160px}.h170{height:170px}.h180{height:180px}.h190{height:190px}.h200{height:200px}.h210{height:210px}.h220{height:220px}.h230{height:230px}.h240{height:240px}.h250{height:250px}.h260{height:260px}.h270{height:270px}.h280{height:280px}.h290{height:290px}.h300{height:300px}.h310{height:310px}.h320{height:320px}.min-width-10{min-width:10px}.min-width-20{min-width:20px}.min-width-30{min-width:30px}.min-width-40{min-width:40px}.min-width-50{min-width:50px}.min-width-60{min-width:60px}.min-width-70{min-width:70px}.min-width-80{min-width:80px}.min-width-90{min-width:90px}.min-width-100{min-width:100px}.min-width-110{min-width:110px}.min-width-120{min-width:120px}.min-width-130{min-width:130px}.min-width-140{min-width:140px}.min-width-150{min-width:150px}.min-width-160{min-width:160px}.min-width-170{min-width:170px}.min-width-180{min-width:180px}.min-width-190{min-width:190px}.min-width-200{min-width:200px}.min-width-210{min-width:210px}.min-width-220{min-width:220px}.min-width-230{min-width:230px}.min-width-240{min-width:240px}.min-width-250{min-width:250px}.min-width-260{min-width:260px}.min-width-270{min-width:270px}.min-width-280{min-width:280px}.min-width-290{min-width:290px}.min-width-300{min-width:300px}.min-width-310{min-width:310px}.min-width-320{min-width:320px}.max-width-100{max-width:100px}.max-width-200{max-width:200px}.max-width-300{max-width:300px}.max-width-400{max-width:400px}.max-width-500{max-width:500px}.max-width-600{max-width:600px}.max-width-700{max-width:700px}.max-width-800{max-width:800px}.max-width-900{max-width:900px}.max-width-1000{max-width:1000px}.max-height-100{max-height:100px}.max-height-200{max-height:200px}.max-height-300{max-height:300px}.max-height-400{max-height:400px}.max-height-500{max-height:500px}.max-height-600{max-height:600px}.max-height-700{max-height:700px}.max-height-800{max-height:800px}.max-height-900{max-height:900px}.max-height-1000{max-height:1000px}.mt8{margin-top:8px}.mr8{margin-right:8px}.mb8{margin-bottom:8px}.ml8{margin-left:8px}.pt8{padding-top:8px}.pr8{padding-right:8px}.pb8{padding-bottom:8px}.pl8{padding-left:8px}.mt16{margin-top:16px}.mr16{margin-right:16px}.mb16{margin-bottom:16px}.ml16{margin-left:16px}.pt16{padding-top:16px}.pr16{padding-right:16px}.pb16{padding-bottom:16px}.pl16{padding-left:16px}.mt24{margin-top:24px}.mr24{margin-right:24px}.mb24{margin-bottom:24px}.ml24{margin-left:24px}.pt24{padding-top:24px}.pr24{padding-right:24px}.pb24{padding-bottom:24px}.pl24{padding-left:24px}.mt32{margin-top:32px}.mr32{margin-right:32px}.mb32{margin-bottom:32px}.ml32{margin-left:32px}.pt32{padding-top:32px}.pr32{padding-right:32px}.pb32{padding-bottom:32px}.pl32{padding-left:32px}.mt48{margin-top:48px}.mr48{margin-right:48px}.mb48{margin-bottom:48px}.ml48{margin-left:48px}.pt48{padding-top:48px}.pr48{padding-right:48px}.pb48{padding-bottom:48px}.pl48{padding-left:48px}.mt5{margin-top:5px}.mr5{margin-right:5px}.mb5{margin-bottom:5px}.ml5{margin-left:5px}.mt10{margin-top:10px}.mr10{margin-right:10px}.mb10{margin-bottom:10px}.ml10{margin-left:10px}.mt15{margin-top:15px}.mr15{margin-right:15px}.mb15{margin-bottom:15px}.ml15{margin-left:15px}.mt20{margin-top:20px}.mr20{margin-right:20px}.mb20{margin-bottom:20px}.ml20{margin-left:20px}.mt25{margin-top:25px}.mr25{margin-right:25px}.mb25{margin-bottom:25px}.ml25{margin-left:25px}.mt30{margin-top:30px}.mr30{margin-right:30px}.mb30{margin-bottom:30px}.ml30{margin-left:30px}.mt35{margin-top:35px}.mr35{margin-right:35px}.mb35{margin-bottom:35px}.ml35{margin-left:35px}.mt40{margin-top:40px}.mr40{margin-right:40px}.mb40{margin-bottom:40px}.ml40{margin-left:40px}.mt45{margin-top:45px}.mr45{margin-right:45px}.mb45{margin-bottom:45px}.ml45{margin-left:45px}.mt50{margin-top:50px}.mr50{margin-right:50px}.mb50{margin-bottom:50px}.ml50{margin-left:50px}.mt55{margin-top:55px}.mr55{margin-right:55px}.mb55{margin-bottom:55px}.ml55{margin-left:55px}.mt60{margin-top:60px}.mr60{margin-right:60px}.mb60{margin-bottom:60px}.ml60{margin-left:60px}.mt65{margin-top:65px}.mr65{margin-right:65px}.mb65{margin-bottom:65px}.ml65{margin-left:65px}.mt70{margin-top:70px}.mr70{margin-right:70px}.mb70{margin-bottom:70px}.ml70{margin-left:70px}.mt75{margin-top:75px}.mr75{margin-right:75px}.mb75{margin-bottom:75px}.ml75{margin-left:75px}.mt80{margin-top:80px}.mr80{margin-right:80px}.mb80{margin-bottom:80px}.ml80{margin-left:80px}.mt85{margin-top:85px}.mr85{margin-right:85px}.mb85{margin-bottom:85px}.ml85{margin-left:85px}.mt90{margin-top:90px}.mr90{margin-right:90px}.mb90{margin-bottom:90px}.ml90{margin-left:90px}.mt95{margin-top:95px}.mr95{margin-right:95px}.mb95{margin-bottom:95px}.ml95{margin-left:95px}.mt100{margin-top:100px}.mr100{margin-right:100px}.mb100{margin-bottom:100px}.ml100{margin-left:100px}.pt5{padding-top:5px}.pr5{padding-right:5px}.pb5{padding-bottom:5px}.pl5{padding-left:5px}.pa5{padding:5px}.pt10{padding-top:10px}.pr10{padding-right:10px}.pb10{padding-bottom:10px}.pl10{padding-left:10px}.pa10{padding:10px}.pt15{padding-top:15px}.pr15{padding-right:15px}.pb15{padding-bottom:15px}.pl15{padding-left:15px}.pa15{padding:15px}.pt20{padding-top:20px}.pr20{padding-right:20px}.pb20{padding-bottom:20px}.pl20{padding-left:20px}.pa20{padding:20px}.pt25{padding-top:25px}.pr25{padding-right:25px}.pb25{padding-bottom:25px}.pl25{padding-left:25px}.pa25{padding:25px}.pt30{padding-top:30px}.pr30{padding-right:30px}.pb30{padding-bottom:30px}.pl30{padding-left:30px}.pa30{padding:30px}.pt35{padding-top:35px}.pr35{padding-right:35px}.pb35{padding-bottom:35px}.pl35{padding-left:35px}.pa35{padding:35px}.pt40{padding-top:40px}.pr40{padding-right:40px}.pb40{padding-bottom:40px}.pl40{padding-left:40px}.pa40{padding:40px}.pt45{padding-top:45px}.pr45{padding-right:45px}.pb45{padding-bottom:45px}.pl45{padding-left:45px}.pa45{padding:45px}.pt50{padding-top:50px}.pr50{padding-right:50px}.pb50{padding-bottom:50px}.pl50{padding-left:50px}.pa50{padding:50px}.pt55{padding-top:55px}.pr55{padding-right:55px}.pb55{padding-bottom:55px}.pl55{padding-left:55px}.pa55{padding:55px}.pt60{padding-top:60px}.pr60{padding-right:60px}.pb60{padding-bottom:60px}.pl60{padding-left:60px}.pa60{padding:60px}.pt65{padding-top:65px}.pr65{padding-right:65px}.pb65{padding-bottom:65px}.pl65{padding-left:65px}.pa65{padding:65px}.pt70{padding-top:70px}.pr70{padding-right:70px}.pb70{padding-bottom:70px}.pl70{padding-left:70px}.pa70{padding:70px}.pt75{padding-top:75px}.pr75{padding-right:75px}.pb75{padding-bottom:75px}.pl75{padding-left:75px}.pa75{padding:75px}.pt80{padding-top:80px}.pr80{padding-right:80px}.pb80{padding-bottom:80px}.pl80{padding-left:80px}.pa80{padding:80px}.pt85{padding-top:85px}.pr85{padding-right:85px}.pb85{padding-bottom:85px}.pl85{padding-left:85px}.pa85{padding:85px}.pt90{padding-top:90px}.pr90{padding-right:90px}.pb90{padding-bottom:90px}.pl90{padding-left:90px}.pa90{padding:90px}.pt95{padding-top:95px}.pr95{padding-right:95px}.pb95{padding-bottom:95px}.pl95{padding-left:95px}.pa95{padding:95px}.pt100{padding-top:100px}.pr100{padding-right:100px}.pb100{padding-bottom:100px}.pl100{padding-left:100px}.pa100{padding:100px}.pt105{padding-top:105px}.pr105{padding-right:105px}.pb105{padding-bottom:105px}.pl105{padding-left:105px}.pa105{padding:105px}.pt110{padding-top:110px}.pr110{padding-right:110px}.pb110{padding-bottom:110px}.pl110{padding-left:110px}.pa110{padding:110px}.pt115{padding-top:115px}.pr115{padding-right:115px}.pb115{padding-bottom:115px}.pl115{padding-left:115px}.pa115{padding:115px}.pt120{padding-top:120px}.pr120{padding-right:120px}.pb120{padding-bottom:120px}.pl120{padding-left:120px}.pa120{padding:120px}.pt125{padding-top:125px}.pr125{padding-right:125px}.pb125{padding-bottom:125px}.pl125{padding-left:125px}.pa125{padding:125px}.pt130{padding-top:130px}.pr130{padding-right:130px}.pb130{padding-bottom:130px}.pl130{padding-left:130px}.pa130{padding:130px}.pt135{padding-top:135px}.pr135{padding-right:135px}.pb135{padding-bottom:135px}.pl135{padding-left:135px}.pa135{padding:135px}.pt140{padding-top:140px}.pr140{padding-right:140px}.pb140{padding-bottom:140px}.pl140{padding-left:140px}.pa140{padding:140px}.tc,.text-center{text-align:center}.text-right,.tr{text-align:right}.text-left,.tl{text-align:left}.clearfix:after,.clearfix:before{display:table;content:\"\"}.clearfix:after{clear:both}.border-radius{border-radius:4px}.unselectable{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bold{font-weight:700}.word-break{word-break:break-all}.font-tahoma{font-family:Tahoma}.color-c{color:#ccc}.color-3{color:#333}.color-6{color:#666}.color-9{color:#999}.color-f{color:#fff}.color-brand{color:#4d7fff}.color-h-3:hover{color:#333}.color-h-brand:hover{color:#4d7fff}.color-brand-vs{color:#14c9ce}.color-error,.color-red{color:#a40100}.color-green{color:#51a300}.color-warn{color:#ffb400}.bb-e6{border-bottom:1px solid #e6e6e6}.bg{background-color:#fafafa}.radius{border-radius:4px}.fl{float:left}.fr{float:right}.cursor-pointer{cursor:pointer}.cursor-help{cursor:help}.cursor-move{cursor:move}.cursor-not-allow{cursor:not-allowed}.pa{position:absolute}.pr{position:relative}.ellipsis{white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}.inline{display:inline}.ib,.inline-block{display:inline-block}.hide,.none{display:none}.opacity0{opacity:0}.rotate180{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.displacement-1{position:relative;top:1px}.displacement-2{position:relative;top:2px}.displacement-3{position:relative;top:3px}.search-box{display:inline-block;position:relative;width:100%}.search-box .search-icon{position:absolute;top:0;left:1px;width:32px;height:32px;line-height:32px;text-align:center;color:#999;font-size:18px}.search-box .search-input{width:100%;padding-left:32px}.scroll-y{overflow-y:auto}.scroll-x{overflow-x:auto}.hidden-y{overflow-y:hidden}.hidden-x{overflow-x:hidden}.empty-area,.empty-white{height:200px;padding-top:40px;text-align:center;color:#999}.empty-area .no-data,.empty-white .no-data{height:80px;line-height:80px;font-size:60px;color:#ccc}.empty-area{background-color:#fafafa}.error-content,.notice-content,.tip-content{padding:10px 20px}.error-content{background-color:#edcccc;color:#a40100;text-align:center}.notice-content{background-color:#fff8e6;color:#f50;text-align:center}.tip-content{position:relative;background-color:#fafafa;color:#999;line-height:18px}.tip-content .tip-icon{position:absolute;top:12px;left:10px;color:#ccc}.tip-content.has-icon{padding-left:30px}.tip-content.has-border{border-radius:4px;border:1px solid #e6e6e6}.tip-content.has-highlight{color:#333}.tip-content.has-highlight .tip-icon{color:#4d7fff}.tip-content.in-dialog{padding-left:54px;padding-right:40px}.tip-content.in-dialog .tip-icon{left:34px}.brand-hollow-icon,.brand-solid-icon,.grey-hollow-icon,.grey-solid-icon{display:inline-block;min-width:32px;height:22px;padding:0 6px;font-size:12px;-webkit-transform:scale(.88);transform:scale(.88);text-align:center;font-weight:700;line-height:20px;border-width:1px;border-style:solid}.brand-solid-icon,.brand-solid-icon:hover{border-radius:4px;background-color:#4d7fff;border-color:#4d7fff;color:#fff}.grey-solid-icon,.grey-solid-icon:hover{border-radius:4px;background-color:#ccc;border-color:#ccc;color:#fff}.brand-hollow-icon,.brand-hollow-icon:hover{border-radius:10px;border-color:#4d7fff;color:#4d7fff}.grey-hollow-icon,.grey-hollow-icon:hover{border-radius:10px;border:1px solid #999;color:#999}.grid{background:#fff;border-radius:4px;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);transition:box-shadow .25s ease-out}.grid:hover{box-shadow:0 4px 6px 0 rgba(0,0,0,.08)}.mx-anim-suspension{display:inline-block;animation:suspension 1.4s ease-out infinite;-webkit-animation:suspension 1.4s ease-out infinite;-ms-animation:suspension 1.4s ease-out infinite;-moz-animation:suspension 1.4s ease-out infinite;-o-animation:suspension 1.4s ease-out infinite;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;-ms-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-o-animation-fill-mode:forwards}.mx-anim-loading{position:relative;margin:0 8px}.mx-anim-loading,.mx-anim-loading:after{display:inline-block;width:4px;height:4px;background-color:#fff;vertical-align:middle;border-radius:50%}.mx-anim-loading:after{content:\"\";position:absolute;left:-8px;top:0;animation:loading-dots .6s linear 0s infinite;-webkit-animation:loading-dots .6s linear 0s infinite;-ms-animation:loading-dots .6s linear 0s infinite;-moz-animation:loading-dots .6s linear 0s infinite;-o-animation:loading-dots .6s linear 0s infinite;animation-fill-mode:none;-webkit-animation-fill-mode:none;-ms-animation-fill-mode:none;-moz-animation-fill-mode:none;-o-animation-fill-mode:none}.mx-anim-loading:before{content:\"\";display:inline-block;width:4px;height:4px;background-color:#fff;vertical-align:middle;border-radius:50%;position:absolute;left:8px;top:0;animation:loading-dots-rev .6s linear 0s infinite;-webkit-animation:loading-dots-rev .6s linear 0s infinite;-ms-animation:loading-dots-rev .6s linear 0s infinite;-moz-animation:loading-dots-rev .6s linear 0s infinite;-o-animation:loading-dots-rev .6s linear 0s infinite;animation-fill-mode:none;-webkit-animation-fill-mode:none;-ms-animation-fill-mode:none;-moz-animation-fill-mode:none;-o-animation-fill-mode:none}.table{width:100%}.table thead{background-color:#fafafa}.table thead tr th{height:60px;padding:0 8px;color:#999;border:none}.table thead tr th:first-child{padding-left:15px}.table thead tr th:last-child{padding-right:15px}.table thead tr th.field-group{height:40px;padding:6px 10px 0}.table thead tr th.field-group .group-name{line-height:28px;padding-bottom:6px;border-bottom:1px solid #ebebeb}.table thead tr th.field-item{height:40px;padding:0 10px}.table tbody{background-color:#fff}.table tbody tr td{padding:20px 8px;color:#333;border-top:none;border-bottom:1px solid #ebebeb;transition:background-color .25s ease-out}.table tbody tr td:first-child{padding-left:15px}.table tbody tr td:last-child{padding-right:15px}.table tbody tr td.sub-mask{background-color:#fff;border-right:1px solid #d8e3ff;border-bottom:0}.table tbody tr td.sub-mask-last{border-bottom:1px solid #ebebeb}.table tbody tr td .operations{opacity:0;transition:opacity .25s ease-out}.table tbody tr.last-tr td,.table tbody tr:last-child td{border-bottom:0}.table tbody tr.hover-tr td,.table tbody tr:hover td{background-color:#f6f9ff}.table tbody tr.hover-tr td.sub-mask,.table tbody tr:hover td.sub-mask{background-color:#fff}.table tbody tr.hover-tr td .operations,.table tbody tr:hover td .operations{opacity:1}.table tbody tr.empty-tr.hover-tr:hover td,.table tbody tr.empty-tr.hover-tr td,.table tbody tr.empty-tr:hover td,.table tbody tr.empty-tr td{height:200px;text-align:center;color:#999;background-color:#fafafa}.table tbody tr.empty-tr.hover-tr:hover td .no-data,.table tbody tr.empty-tr.hover-tr td .no-data,.table tbody tr.empty-tr:hover td .no-data,.table tbody tr.empty-tr td .no-data{font-size:60px;color:#ccc}.table tbody tr.next-operation-tr-open td{border-bottom:0}.table tbody tr.operation-tr{display:none}.table tbody tr.operation-tr td{padding:8px 20px;background-color:#eaf0ff}.table tbody tr.operation-tr td.sub-mask{background-color:#fff}.table tbody tr.operation-tr.operation-tr-open{display:table-row}.table tbody tr.thead,.table tbody tr.thead.hover-tr,.table tbody tr.thead:hover{background-color:#fafafa}.table tbody tr.thead.hover-tr td,.table tbody tr.thead:hover td,.table tbody tr.thead td{height:60px;padding:0 8px;color:#999;border-bottom:0;background-color:transparent}.table tbody tr.thead.hover-tr td.sub-mask,.table tbody tr.thead:hover td.sub-mask,.table tbody tr.thead td.sub-mask{background-color:#fff}.table tfoot tr td{padding:15px;background-color:#fafafa;border:none}.page-header{position:relative;margin-bottom:20px}.page-header .page-tip{color:#999}.page-header .header-filters{position:absolute;right:0;bottom:12px}.first-header,.second-header{margin-right:16px;line-height:32px}.first-header{font-size:20px}.second-header{font-size:16px}.table-pager-wrapper{padding:15px;background-color:#fafafa}:root{--color-brand:#4d7fff;--color-brand-vs:#14c9ce;--color-brand-light:#d8e3ff;--color-brand-opacity:#f6f9ff;--color-brand-text:#fff;--color-brand-text-hover:#fff;--color-border:#e6e6e6;--color-border-hover:#ccc;--border-radius:4px;--table-color-border:#ebebeb;--table-operation-color-bg:#f2f5fc;--btn-border-radius:4px;--btn-brand:#4d7fff;--btn-brand-gradient:#4d7fff;--btn-brand-hover:#4776ed;--btn-brand-gradient-hover:#4776ed;--line-height:1.5;--font-size:12px;--color-primary:#333;--color-secondary:#666;--color-third:#999;--color-hover:#f0f0f0;--color-warn:#ffb400;--color-red:#a40100;--color-orange:#f50;--color-green:#51a300;--color-blue:#4d7fff;--color-disabled:#eee;--color-bg:#fafafa;--color-bg-hover:#ccc;--input-height:32px;--input-small-height:26px;--duration:0.25s;--color-brand-hover:#4776ed}");
Magix.applyStyle("_zs_gallery_","._zs_gallery_{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerya{float:left;width:34%}._zs_galleryb{float:left;width:66%}._zs_galleryc{float:left;width:25%}._zs_galleryd{float:left;width:75%}._zs_gallerye{float:left;width:50%}._zs_galleryf{border-left:1px solid #e6e6e6}._zs_galleryg{border-right:1px solid #e6e6e6}._zs_galleryh{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;border-radius:4px;transition:border-color .25s;box-shadow:0 none}._zs_galleryh._zs_galleryi{border:1px solid rgba(77,127,255,.3);box-shadow:0 1px 2px rgba(77,127,255,.3)}._zs_galleryh ._zs_galleryj{position:absolute;top:-14px;left:10px;height:28px;padding:0 10px;line-height:28px;background-color:#fff;color:#999}._zs_galleryh ._zs_galleryk{position:relative;padding:20px 20px 25px}._zs_galleryh ._zs_galleryl{position:relative;padding:25px 0 25px 20px;border-top:1px solid #e6e6e6}._zs_galleryh ._zs_galleryl ._zs_gallerym{opacity:0;position:absolute;top:6px;right:0;z-index:10;transition:opacity .25s}._zs_galleryh ._zs_galleryl ._zs_gallerym ._zs_galleryn{width:36px;height:22px;line-height:22px;font-size:20px;color:#999;text-align:center;cursor:pointer}._zs_galleryh ._zs_galleryl ._zs_gallerym ._zs_galleryo{display:none;position:absolute;top:-34px;left:-30px;width:86px;height:30px;color:#fff;text-align:center;background-color:rgba(33,33,33,.72);border-radius:4px;line-height:30px}._zs_galleryh ._zs_galleryl ._zs_gallerym ._zs_galleryo ._zs_galleryp{float:left;margin-left:5px;height:30px;color:#51a300;line-height:30px}._zs_galleryh ._zs_galleryl ._zs_gallerym:hover ._zs_galleryo{display:block}._zs_galleryh ._zs_galleryl:hover ._zs_gallerym{opacity:1}._zs_galleryh ._zs_galleryl._zs_galleryq{border-top:0}._zs_galleryr{border:1px solid #e6e6e6}._zs_galleryr tbody tr td{background-color:#fff}._zs_galleryr tbody tr td:first-child{padding-left:8px}._zs_galleryr tbody tr:hover td{background-color:#fff}");
Magix.applyStyle("_zs_galleryb","._zs_gallerys{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryt{position:relative;height:52px;padding-top:10px;box-shadow:0 2px 4px rgba(51,51,51,.08);background-color:#fff}._zs_galleryt ._zs_galleryu{position:relative;float:left;width:240px;padding-left:24px}._zs_galleryt ._zs_galleryu ._zs_galleryv{position:absolute;top:50%;width:38px;height:32px;margin-top:-16px;background-image:linear-gradient(90deg,#4d7fff,#4d7fff)}._zs_galleryt ._zs_galleryu ._zs_galleryv img{width:100%;height:100%}._zs_galleryt ._zs_galleryu ._zs_galleryw{padding-left:48px;line-height:32px;font-size:18px}._zs_galleryt ._zs_galleryx{position:absolute;top:50%;left:240px;width:0;height:20px;border-left:1px solid #e6e6e6;margin-top:-10px}._zs_galleryt ._zs_galleryy{float:left;padding-left:10px}._zs_galleryt ._zs_galleryy input{border:0}._zs_galleryt ._zs_galleryz{float:right;margin-right:140px;line-height:32px}._zs_galleryt ._zs_galleryz ._zs_galleryA{float:left;padding:0 20px 8px;font-size:14px;border-bottom:2px solid transparent;cursor:pointer;transition:all .25s}._zs_galleryt ._zs_galleryz ._zs_galleryA._zs_galleryB{color:#4d7fff;border-bottom:2px solid #4d7fff}._zs_galleryC{position:relative;margin-top:18px;padding-left:240px}._zs_galleryD{position:absolute;top:0;left:0;z-index:19;width:240px;padding-bottom:10px;border-right:1px solid #e6e6e6;overflow-y:auto}._zs_galleryD ._zs_galleryE,._zs_galleryD ._zs_galleryF{display:block;position:relative;padding-left:20px;line-height:38px;cursor:pointer}._zs_galleryD ._zs_galleryE{height:0;border-left:4px solid transparent;transition:background-color .25s,height .25s,color .25s;overflow:hidden}._zs_galleryD ._zs_galleryE ._zs_galleryG{position:absolute;top:0;left:30px;height:38px;line-height:36px;font-size:18px;color:#999}._zs_galleryD ._zs_galleryE:hover,._zs_galleryD ._zs_galleryE:hover ._zs_galleryG{color:#4d7fff}._zs_galleryD ._zs_galleryE._zs_galleryB{color:#4d7fff;border-left:4px solid #4d7fff;background-color:#f6f9ff}._zs_galleryD ._zs_galleryE._zs_galleryB ._zs_galleryG{color:#4d7fff}._zs_galleryD ._zs_galleryE._zs_galleryH{padding-left:52px}._zs_galleryD ._zs_galleryE._zs_galleryI{height:38px}._zs_galleryD ._zs_galleryF{height:38px;cursor:pointer}._zs_galleryD ._zs_galleryF ._zs_galleryJ{position:absolute;top:10px;right:10px;font-size:24px;transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;color:#999}._zs_galleryD ._zs_galleryF:hover ._zs_galleryJ{color:#4d7fff}._zs_galleryD ._zs_galleryF._zs_galleryI ._zs_galleryJ{top:10px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryD._zs_galleryK{position:fixed}._zs_galleryL ._zs_galleryM{padding:20px 0 40px 20px}._zs_galleryL ._zs_galleryN{margin-right:20px;margin-left:20px;padding:20px 0 40px;border-top:1px solid #e6e6e6}._zs_galleryL ._zs_galleryN ._zs_galleryO,._zs_galleryL ._zs_galleryN ._zs_galleryP{position:relative;height:22px;line-height:22px}._zs_galleryL ._zs_galleryN ._zs_galleryO ._zs_galleryQ,._zs_galleryL ._zs_galleryN ._zs_galleryP ._zs_galleryQ{position:absolute;top:0;line-height:22px}._zs_galleryL ._zs_galleryN ._zs_galleryP{float:left;padding-left:20px}._zs_galleryL ._zs_galleryN ._zs_galleryP ._zs_galleryQ{left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}._zs_galleryL ._zs_galleryN ._zs_galleryO{float:right;padding-right:20px}._zs_galleryL ._zs_galleryN ._zs_galleryO ._zs_galleryQ{right:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}._zs_galleryR{position:fixed;right:0;bottom:60px;z-index:20;border-bottom:1px solid #e6e6e6}._zs_galleryR ._zs_galleryS{position:relative;display:block;width:36px;height:36px}._zs_galleryR ._zs_galleryS ._zs_galleryT,._zs_galleryR ._zs_galleryS ._zs_galleryU{position:absolute;top:0;left:0;height:36px;line-height:36px;transition:all .25s;background-color:#fff}._zs_galleryR ._zs_galleryS ._zs_galleryU{z-index:21;width:70px;color:#fff;text-align:right}._zs_galleryR ._zs_galleryS ._zs_galleryT{z-index:22;width:36px;border-color:#e6e6e6;border-style:solid;border-width:1px 0 0 1px;font-size:22px;color:#ccc;text-align:center}._zs_galleryR ._zs_galleryS:hover{opacity:.95}._zs_galleryR ._zs_galleryS:hover ._zs_galleryT{background-color:#4d7fff;border-color:#4d7fff;color:#fff}._zs_galleryR ._zs_galleryS:hover ._zs_galleryU{background-color:#4d7fff;left:-70px}");
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
} ; var $g = '', $_temp, $p = '', cusSuggest = $$.cusSuggest, suggests = $$.suggests, headers = $$.headers, fixed = $$.fixed, minHeight = $$.minHeight, list = $$.list, path = $$.path, cur = $$.cur, view = $$.view, prev = $$.prev, next = $$.next; $p += '<div mxv mxa="_zs_gallerya:_" class="_zs_galleryt"><div mxs="_zs_gallerya:_" class="_zs_galleryx"></div><div mxs="_zs_gallerya:a" class="_zs_galleryu"><span class="_zs_galleryv"><img src="https://img.alicdn.com/tfs/TB1qRnywVzqK1RjSZFoXXbfcXXa-432-355.png"></span><span class="_zs_galleryw">Magix Galleries</span></div><div mxv mxa="_zs_gallerya:a" class="_zs_galleryy"><div mxv="suggests" class="w260" mx-suggest="' + $viewId + 'suggest()" mx-view="mx-suggest/index?selected=' + $eu(cusSuggest) + '&placeholder=%E6%90%9C%E7%B4%A2&list=' + $i($$ref, suggests) + '&listText=name&listValue=path&type=all"></div></div><div mxa="_zs_gallerya:b" class="_zs_galleryz clearfix">'; for (var $art_ikqvrzgbi$art_i = 0, $art_cgocofbfot$art_c = headers.length; $art_ikqvrzgbi$art_i < $art_cgocofbfot$art_c; $art_ikqvrzgbi$art_i++) {
    var h = headers[$art_ikqvrzgbi$art_i];
    $p += '<a href="#!' + $e(h.path) + '" class="_zs_galleryA ';
    if (h.cur) {
        ;
        $p += ' _zs_galleryB ';
    }
    ;
    $p += '">' + $e(h.name) + '</a>';
} ; $p += '</div></div><div mxv mxa="_zs_gallerya:c" class="_zs_galleryC"><div class="_zs_galleryD '; if (fixed) {
    ;
    $p += ' _zs_galleryK ';
} ; $p += '" style="height: ' + $e(minHeight) + 'px;">'; for (var $art_icvulyyupu$art_i = 0, $art_clfmdjyr$art_c = list.length; $art_icvulyyupu$art_i < $art_clfmdjyr$art_c; $art_icvulyyupu$art_i++) {
    var item = list[$art_icvulyyupu$art_i];
    $p += ' ';
    if (item.name) {
        ;
        $p += '<span class="_zs_galleryF ';
        if (!item.close) {
            ;
            $p += ' _zs_galleryI ';
        }
        ;
        $p += '" mx-click="' + $viewId + 'toggle({index:' + $e(item.index) + '})">' + $n(item.name) + '<i mxs="_zs_gallerya:b" class="mc-iconfont _zs_galleryJ">&#xe692;</i></span>';
    }
    ;
    $p += ' ';
    for (var $art_iukted$art_i = 0, $art_objvenabxl$art_obj = item.subs, $art_cxrdjrbig$art_c = $art_objvenabxl$art_obj.length; $art_iukted$art_i < $art_cxrdjrbig$art_c; $art_iukted$art_i++) {
        var sub = $art_objvenabxl$art_obj[$art_iukted$art_i];
        $p += '<a class="_zs_galleryE ';
        if (sub.path == path) {
            ;
            $p += ' _zs_galleryB ';
        }
        ;
        $p += ' ';
        if (item.name) {
            ;
            $p += ' _zs_galleryH ';
        }
        ;
        $p += ' ';
        if (!item.close) {
            ;
            $p += ' _zs_galleryI ';
        }
        ;
        $p += '" href="#!' + $e(sub.path) + '"><i mxa="_zs_gallerya:d" class="mc-iconfont _zs_galleryG">' + $n(sub.icon) + '</i>' + $n(sub.name) + '</a>';
    }
    ;
    $p += ' ';
} ; $p += '</div><div mxv mxa="_zs_gallerya:e" class="_zs_galleryL"><div mxv mxa="_zs_gallerya:f" class="_zs_galleryM"><div mxv="cur" '; if (cur.tip) {
    ;
    $p += ' ';
} ; $p += ' mx-view="mx-title/index?content=' + $eu(cur.name) + '&tip=' + $i($$ref, cur.tip) + '"></div><div mx-view="' + $e(view) + '"><div mxs="_zs_gallerya:c" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div></div><div mxa="_zs_gallerya:g" class="_zs_galleryN clearfix">'; if (prev.path) {
    ;
    $p += '<a href="#!' + $e(prev.path) + '" class="_zs_galleryP link-brand"><i mxs="_zs_gallerya:d" class="mc-iconfont _zs_galleryQ">&#xe63a;</i>上一篇：' + $n(prev.name) + '</a>';
} ; $p += ' '; if (next.path) {
    ;
    $p += '<a href="#!' + $e(next.path) + '" class="_zs_galleryO link-brand"><i mxs="_zs_gallerya:d" class="mc-iconfont _zs_galleryQ">&#xe63a;</i>下一篇：' + $n(next.name) + '</a>';
} ; $p += '</div></div></div><div mxs="_zs_gallerya:e" class="_zs_galleryR"><a href="https://aone.alibaba-inc.com/project/768817/req?akProjectId=768817&spm=a2o8d.rdc_projecthome.0.0.70b27a26750VTM" target="_blank" rel="noopener noreferrer" class="_zs_galleryS"><i class="mc-iconfont _zs_galleryT">&#xe64f;</i><span class="_zs_galleryU">给我提需求</span></a><a href="https://aone.alibaba-inc.com/project/768817/issue?spm=a2o8d.corp_prod_req_list.0.0.3e646b88s8ezBH" target="_blank" rel="noopener noreferrer" class="_zs_galleryS"><i class="mc-iconfont _zs_galleryT">&#xe63d;</i><span class="_zs_galleryU">帮我找bug</span></a><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s" class="_zs_galleryS"><i class="mc-iconfont _zs_galleryT">&#xe677;</i><span class="_zs_galleryU">钉我一下</span></a><a href="javascript:;" class="_zs_galleryS" mx-click="' + $viewId + 'back()"><i class="mc-iconfont _zs_galleryT">&#xe62d;</i><span class="_zs_galleryU">回到顶部</span></a></div>'; return $p; },
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
                    name: '基础规范',
                    subs: [{
                            name: '双向绑定约定',
                            tip: '下述详细说明如何写一个支持多参数且数据双向绑定的组件',
                            path: '/all/bind',
                            icon: '&#xe6d1;'
                        }, {
                            name: '_config说明',
                            path: '/all/config',
                            icon: '&#xe64f;'
                        }]
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
                            tip: '支持click展开和hover展开两种形式；下拉列表在组件内',
                            path: '/dropdown/index',
                            icon: '&#xe7a4;'
                        }, {
                            name: '下拉框（多选）',
                            tip: '支持click展开和hover展开两种形式；下拉列表在组件内',
                            path: '/dropdown/multiple',
                            icon: '&#xe7a4;'
                        },
                        // {
                        //     name: '下拉框（追加到body版）',
                        //     tip: '支持click展开和hover展开两种形式',
                        //     path: '/dropdown/dd',
                        //     icon: '&#xe7a4;'
                        // }, 
                        {
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
                            path: '/tree/index',
                            icon: '&#xe62b;'
                        }, {
                            name: '级联选择',
                            path: '/cascade/index',
                            icon: '&#xe60a;'
                        }, {
                            name: '二级单选',
                            path: '/secradio/index',
                            icon: '&#xe657;'
                        }, {
                            name: '标签选择',
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
                            name: '复制',
                            tip: '该组件引入了第三方 <a rel="noopener noreferrer" target="_blank" href="https://zenorocha.github.io/clipboard.js" class="color-brand">https://zenorocha.github.io/clipboard.js</a> 代码',
                            path: '/copy/index',
                            icon: '&#xe610;'
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
                            name: '浮层',
                            tip: 'Magix.View上挂载mxDialog（新开浮层），alert（提醒），confirm（二次确认），mxDialogGroup（内容分组显示）',
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
                            name: 'checkbox',
                            tip: '包装indeterminate状态，只负责对样式进行控制',
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
                        }, {
                            name: '其他常用',
                            path: '/style/index',
                            icon: '&#xe62c;'
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
                    sub.name = headers[i_1].name + ' - ' + sub.name;
                });
                suggests = suggests.concat(subs);
            });
            if (i_1 == curIndex) {
                map[i_1].forEach(function (item, index) {
                    // 默认全部展开
                    item.index = index;
                    item.close = that.$map[item.subs[0].path] || false;
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
        updater.digest({
            cusSuggest: '',
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
        var curNode = $('#' + that.id + ' ._zs_galleryE._zs_galleryB');
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
        Magix.Router.to(e.selected.value);
    },
    '$win<scroll>': function (e) {
        var that = this;
        var mainNode = $('#' + that.id);
        var bodyNode = mainNode.find('._zs_galleryL');
        var leftNode = mainNode.find('._zs_galleryD');
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
            leftNode.addClass('_zs_galleryK');
        }
        else {
            if (!fixed) {
                return;
            }
            that.updater.set({
                fixed: false
            });
            leftNode.removeClass('_zs_galleryK');
        }
    },
    '$win<resize>': function () {
        var that = this;
        var winHeight = $(window).height();
        var mainNode = $('#' + that.id);
        var leftNode = mainNode.find('._zs_galleryD');
        that.updater.set({
            minHeight: winHeight
        });
        leftNode.css('height', winHeight);
        // clearTimeout(that.winResizeTimer);
        // that.winResizeTimer = setTimeout(that.wrapAsync(() => {
        //     that.updater.set({
        //         minHeight: $(window).height()
        //     }).digest();
        // }), 200);
    },
    'back<click>': function (e) {
        $(window).scrollTop(0);
    }
});

});