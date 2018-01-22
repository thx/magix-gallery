/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/all",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__","body,dd,dl,fieldset,figure,form,h1,h2,h3,h4,h5,h6,hr,input,legend,ol,p,pre,tbody,td,textarea,tfoot,th,thead,ul{margin:0;padding:0}ol,ul{list-style-type:none;list-style-image:none}a{background-color:transparent}a:active,a:hover{outline-width:0}a:focus{outline:1px dotted}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;font-size:62.5%}body{font-size:14px;line-height:1.8}body,button,input,textarea{font-family:helvetica neue,arial,hiragino sans gb,stheiti,wenquanyi micro hei,sans-serif;-ms-text-autospace:ideograph-alpha ideograph-numeric ideograph-parenthesis;-ms-text-spacing:ideograph-alpha ideograph-numeric ideograph-parenthesis;text-spacing:ideograph-alpha ideograph-numeric ideograph-parenthesis}h1,h2,h3,h4,h5,h6{font-weight:400}h1{font-size:36px}h2{font-size:30px}h3{font-size:22px}h4{font-size:18px}h5{font-size:14px}h6{font-size:12px}b,strong{font-weight:700}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word;overflow:auto}q{quotes:none}q:after,q:before{content:\"\";content:none}small{font-size:85.7%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}table{border-collapse:collapse;border-spacing:0}th{text-align:left}td,th{border:1px solid #ddd;padding:8px 10px}th{font-weight:inherit;border-bottom-width:2px;border-bottom-color:#ccc}img{border-style:none;width:auto\\9;height:auto;max-width:100%;vertical-align:top;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border-style:none;white-space:normal;*margin-left:-7px}button,input,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:middle;*vertical-align:middle}button,input{*overflow:visible}button{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:not-allowed}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;*height:13px;*width:13px}button::-moz-focus-inner,input::-moz-focus-inner{border-style:none;padding:0}textarea{overflow:auto;resize:vertical}@media screen and (-webkit-min-device-pixel-ratio:0){input{line-height:normal!important}}input::-moz-placeholder,textarea::-moz-placeholder{color:#a9a9a9;opacity:1}label{cursor:pointer}audio,canvas,video{display:inline-block;vertical-align:baseline}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}a:focus,button:focus,input:focus,textarea:focus{outline:none;resize:none}a{color:#f96447;text-decoration:none}a:focus,a:hover{color:#d43b1c}a:active,a:focus,a:hover,a:visited{outline:0;text-decoration:none}label{cursor:default;max-width:100%}@font-face{font-family:_a;src:url(\"data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAcsAAsAAAAACqQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXOEjOY21hcAAAAYAAAACWAAACCs4hbhBnbHlmAAACGAAAAugAAAO0BG1azWhlYWQAAAUAAAAALwAAADYPpP4TaGhlYQAABTAAAAAcAAAAJAfeA4pobXR4AAAFTAAAABQAAAAkI+kAAGxvY2EAAAVgAAAAFAAAABQEcAVsbWF4cAAABXQAAAAfAAAAIAEYAF1uYW1lAAAFlAAAAUUAAAJtPlT+fXBvc3QAAAbcAAAATwAAAGizaRo4eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/ss4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDy7z9zwv4EhhrmB4RRQmBEkBwA4Ig2aeJzFkbsNwzAMRE+RP0IQwEEG8AReyl1Kl+68g5Eqy7m7NZyj6EZI6viEJ4AnkRJIADWAKAZRAeGNANNLbsh+xDX7FZ6KH7jLuWBmYseeIxeu3PZdZ7+8UkH55TIvIql6raoNWhnNV97fFM57utQt79MRJTEf6ItMjk2OnWN32Ds2SY6OTZiLow6Dq6Neg5uD9gPbdC1VAAB4nH1SO2sUURi9370zd3Zmd+48dh77yr4mO7MmutlsxkkR3DQ2GgtBCAhaCBY2SrAwjUUw5CEo+A/EoAgR1LBpArEUQVBs3MrCYEAbY+xsMnpHV0ghDsM9936cj+9xDhIR+rlDtkkOZVETjaOT6CxCQEehzvAQ1IKwhUfBrom2azESeEFN8uotcgLcOrWcThT6LpWoBgzKMFHrREELB3A87OIp6DhDAPli4ZzZKJnkHii5oLwUn8ZrYFe8ktY9Fp86Om11qtnUfMY086Z5J0VFMYWxoDG46jqyKCs0fihqBXu7cgRXIJMPCmfOq9WieWk1vDbUcGWAhQXIFqvs8bRRMPh/s+Bkzbykq6lcQfWGLZjfTeeymSH/E+If5rNG5AfxURpNJVMiyUFuhCZ9RFzH0oDWx8CvDzCchigcYKcCTmeACc/CqB/vUgqlfh9KlMa7ZxYZa2gNbZH5bJFjg7FFVf1XkPic3j+UfrD3/4RDwT8z3CIH5AbKowZCYuAHXTjegoCBVAa3E006Sa9R2OCxLkzyGAPy9aMkj7bFvc3NPZGfM0uRIH00RqoHmys9Qnorv09vRxKipZneN0H41uPE9qgs7WjVkZecsNwThN7ySg8Br79AhskC9wuSsWPRegCuH062x/l6HIvY8Syss3JTizWPMXirNctkJJ6NZ/mFwXdPa+rwRis3uR6QiEIu4s9cDwQ1wzNqds2YMGrkQry/Gu+Dvgo69EEfvNDfHPwS9pL6v8UKfG7FSuK/KFEMvxBNae0+NTPicyKTtLghwhdRXFsTlaz0jAhAN4j5t/YsbCGCUJbXfYLXD/jz+sAn78lrMoJaaIxTJcpXym3uJbbg6rcwLzQGLegCv0xz6CRL5z1gKpGtR7oQYJpWtUz6nW2/UosOg7agP1Uk2WKfnPQV6pZcejntfGaWLCnw4K7h7Kp2SqZzijInYd1Wv7j6baVQNHBTsD5kNC3zwRKa2CgWFN7eL0lutBh4nGNgZGBgAGLnEJdv8fw2Xxm4WRhA4JrTXQME/d+MhYG5AcjlYGACiQIAFvYJkgB4nGNgZGBgbvjfwBDDwgACQJKRARVwAgBHDwJyeJxjYWBgYH7JwMDCgBsDAB8LAQ0AAAAAAHYA2AEYAT4BWAF8AYoB2nicY2BkYGDgZAhkYGUAASYg5gJCBob/YD4DABGZAXYAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicbccxDoAgDAXQfkQEbsOR6gLVpAykCeH0xrj6tkeOPpn+JThs8NgRcCAiIRNmqMZ6ShjdhvU4hbUu6/4SLnE11pulvFM/RSvRA98yEWMA\") format(\"woff\")}.__,label{display:inline-block;font-weight:400}.__{font-family:_a;line-height:1;font-size:16px;font-style:normal;font-variant:normal;speak:none;position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}._a{margin-top:5px}._b{margin-top:10px}._c{margin-top:15px}._d{margin-top:20px}._e{margin-top:25px}._f{margin-top:30px}._g{margin-right:5px}._h{margin-right:10px}._i{margin-right:15px}._j{margin-right:20px}._k{margin-right:25px}._l{margin-right:30px}._m{margin-bottom:5px}._n{margin-bottom:10px}._o{margin-bottom:15px}._p{margin-bottom:20px}._q{margin-bottom:25px}._r{margin-bottom:30px}._s{margin-left:5px}._t{margin-left:10px}._u{margin-left:15px}._v{margin-left:20px}._w{margin-left:25px}._x{margin-left:30px}._y{padding-top:5px}._z{padding-top:10px}._A{padding-top:15px}._B{padding-top:20px}._C{padding-top:25px}._D{padding-top:30px}._E{padding-right:5px}._F{padding-right:10px}._G{padding-right:15px}._H{padding-right:20px}._I{padding-right:25px}._J{padding-right:30px}._K{padding-bottom:5px}._L{padding-bottom:10px}._M{padding-bottom:15px}._N{padding-bottom:20px}._O{padding-bottom:25px}._P{padding-bottom:30px}._Q{padding-left:5px}._R{padding-left:10px}._S{padding-left:15px}._T{padding-left:20px}._U{padding-left:25px}._V{padding-left:30px}._W{width:100%}._X{height:100%}._Y{text-align:right}._Z{text-align:left}._a_{text-align:center}._aa{float:left}._ab{float:right}html ._ac{display:inline-block}._ad{cursor:pointer}._ae{cursor:move}._af{position:absolute}._ag{position:relative}html ._ah{display:none}._ai:after,._ai:before{content:\" \";display:table}._ai:after{clear:both}._aj{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._ak::-webkit-scrollbar{width:10px;height:10px;overflow:auto}._ak::-webkit-scrollbar-thumb{background-color:#ccc;border-radius:6px;height:30px;border:2px solid #e5e5e5}._ak::-webkit-scrollbar-thumb:hover{background-color:#6a6a6a}._ak::-webkit-scrollbar-track{background-color:#e5e5e5}._al{white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}._am{color:#d2d2d2;cursor:not-allowed}._an{outline:none;display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;background-image:none;background-color:#eaeaea;white-space:nowrap;padding:9px 14px;font-size:14px;line-height:1;border:0;color:#333;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._an:focus,._an:hover{background-color:#ccc;color:#333}._ao{background-color:#f96447;color:#fff}._ao:focus,._ao:hover{background-color:#d43b1c;color:#fff}._an[disabled]{background-color:#fbfbfb}._an[disabled]:hover{border-color:#e6e6e6}::-webkit-input-placeholder{color:#999}:-ms-input-placeholder,::-ms-input-placeholder{color:#999}::placeholder{color:#999}::-moz-selection{background-color:rgba(243,123,99,.6)}::selection{background-color:rgba(243,123,99,.6)}._ap,._aq{caret-color:#f96447;display:inline-block;height:32px;padding:6px 9px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;border:1px solid #e6e6e6;background-color:#fff;color:#333;width:340px;vertical-align:middle;max-width:100%}._ap:hover,._aq:hover{border-color:#ccc}._ap:focus,._aq:focus,._ar,._ar:hover{border-color:#f96447!important}._aq{height:auto}._ap[disabled],._aq[disabled]{background-color:#fbfbfb}._ap[disabled]:hover,._aq[disabled]:hover{border-color:#e6e6e6}._as,._at{width:14px;height:14px;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;border-radius:2px;-webkit-transition:all .25s;transition:all .25s;background-color:#fff;border:1px solid #e6e6e6;margin-right:8px;cursor:pointer}._at{border-radius:50%}._as:checked,._as:indeterminate,._at:checked{background-color:#f96447;border-color:#f96447}._as:checked:after{content:\"\";display:block;margin:1px auto;height:8px;width:5px;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}._as:indeterminate:after{content:\"\";display:block;height:2px;width:8px;margin:40% auto;background-color:#fff}._at:checked:after{content:\"\";display:block;height:4px;width:4px;border-radius:50%;margin:4px auto;background-color:#fff}._as:disabled,._at:disabled{background-color:#fbfbfb;border-color:#e6e6e6}._as:disabled:after{border-color:rgba(0,0,0,.25)}._as:indeterminate:disabled:after,._at:disabled:after{background-color:rgba(0,0,0,.25)}._au{width:42px;height:21px;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;border-radius:10.5px;background-color:#eaeaea;margin-right:8px;cursor:pointer;position:relative}._au,._au:after{-webkit-transition:all .25s;transition:all .25s}._au:after{content:\"\";display:block;position:absolute;height:17px;width:17px;background:#fff;margin:2px;border-radius:50%;left:0}._au:disabled,._au:disabled:checked{background-color:#fbfbfb}._au:checked:after{margin-left:-20px;left:100%}._au:checked{background-color:#f96447}._av{margin-bottom:22px}._aw{height:32px;line-height:32px;text-align:right;width:140px;vertical-align:top;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}._ax:before{margin-right:4px;content:\"*\";font-family:SimSun;line-height:1;color:#f04134}._ax:before,._ay{display:inline-block}._ay{position:relative;min-height:32px;line-height:32px;margin-left:15px}._az{margin-left:155px}._aA{width:100%;border:1px solid #e6e6e6}._aA th{border:0 none;border-bottom:2px solid #e6e6e6;font-weight:700}._aA td{border:0 none;border-top:1px solid #e6e6e6}._aB tbody tr:nth-child(odd) td{background-color:rgba(0,0,0,.05)}._aA tfoot td{padding:0}._aC{padding:150px 0;margin:0 auto;width:150px;text-align:center;line-height:0}._aC:after,._aC:before{content:\"\"}._aC:after,._aC:before,._aD{width:14px;height:14px;background-color:#eaeaea;border-radius:100%;display:inline-block;-webkit-animation:__ 1s infinite ease-in-out both;animation:__ 1s infinite ease-in-out both}._aC:before{-webkit-animation-delay:-.32s;animation-delay:-.32s}._aD{margin:0 10px;-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes __{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes __{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}._aE{padding:15px 40px;border-bottom:1px solid #e6e6e6;color:#333;margin:0;line-height:1.42857143}._aF{padding:18px 40px}._aG{padding:15px 40px;text-align:left;border-top:1px solid #e6e6e6}");
Magix.applyStyle("_a","._aH{padding:50px}._aI h3{font-size:16px}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"<%if($$.inline){%>_aI<%}else{%>_aH<%}%>\" mx-view=\"<%=$$.view%>\"><div class=\"_aC\"><span class=\"_aD\"></span></div></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/hl",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
module.exports = Magix.View.extend({
    render: function () {
        var node = Magix.node(this.id);
        hljs.highlightBlock(node);
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/list",["magix","./test"],(require,exports,module)=>{
/*Magix*/
require("./test");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-view=\"__test__/test\"></div><a href=\"#!/mx-calendar/index\">mx-calendar/index(日历)</a><br><a href=\"#!/mx-calendar/datepicker\">mx-calendar/datepicker(日期选择)</a><br><a href=\"#!/mx-calendar/rangepicker\">mx-calendar/rangepicker(日期范围选择)</a><br><a href=\"#!/mx-carousel/index\">mx-carousel/index(轮播图)</a><br><a href=\"#!/mx-checkbox/linkage\">mx-checkbox/linkage(联动)</a><br><a href=\"#!/mx-checkbox/storestate\">mx-checkbox/storestate(保存状态)</a><br><a href=\"#!/mx-color/index\">mx-color/index(颜色)</a><br><a href=\"#!/mx-color/picker\">mx-color/picker(颜色选择)</a><br><a href=\"#!/mx-copy/index\">mx-copy/index(复制)</a><br><a href=\"#!/mx-day/index\">mx-day/index(快速日期选择)</a><br><a href=\"#!/mx-dialog/alert\">mx-dialog/alert(alert与confirm)</a><br><a href=\"#!/mx-dialog/index\">mx-dialog/index(加载普通view)</a><br><a href=\"#!/mx-dragselect/index\">mx-dragselect/index(拖动选取)</a><br><a href=\"#!/mx-dragsort/index\">mx-dragsort/index(拖动排序)</a><br><a href=\"#!/mx-dropdown/index\">mx-dropdown/index(单选下拉框)</a><br><a href=\"#!/mx-dropdown/multiple\">mx-dropdown/multiple(多选下拉框)</a><br><a href=\"#!/mx-effect/count\">mx-effect/count(效果库,数字动态改变)</a><br><a href=\"#!/mx-effect/dance\">mx-effect/dance(效果库,文字显示效果)</a><br><a href=\"#!/mx-effect/scroll\">mx-effect/scroll</a><br><a href=\"#!/mx-footer/index\">mx-footer/index(阿里妈妈通用页脚完整版)</a><br><a href=\"#!/mx-footer/index?mode=simple\">mx-footer/index?mode=simple(阿里妈妈通用页脚精简版)</a><br><a href=\"#!/mx-form/index\">mx-form/index(表单)</a><br><a href=\"#!/mx-gtip/index\">mx-gtip/index(提示)</a><br><a href=\"#!/mx-hour/day\">mx-hour/day(天小时)</a><br><a href=\"#!/mx-hour/week\">mx-hour/week(周小时)</a><br><a href=\"#!/mx-linkage/index\">mx-linkage/index(联动选择)</a><br><a href=\"#!/mx-loading/mask\">mx-loading/mask(加载动画)</a><br><a href=\"#!/mx-menu/index\">mx-menu/index</a><br><a href=\"#!/mx-number/index\">mx-number/index</a><br><a href=\"#!/mx-pagination/index\">mx-pagination/index(分页)</a><br><a href=\"#!/mx-popconfirm/index\">mx-popconfirm/index</a><br><a href=\"#!/mx-popmenu/index\">mx-popmenu/index</a><br><a href=\"#!/mx-popover/index\">mx-popover/index</a><br><a href=\"#!/mx-progress/index\">mx-progress/index</a><br><a href=\"#!/mx-rating/index\">mx-rating/index</a><br><a href=\"#!/mx-sitenav/index\">mx-sitenav/index(阿里妈妈站点通用吊顶)</a><br><a href=\"#!/mx-sitenav/index?mode=simple\">mx-sitenav/index?mode=simple(阿里妈妈站点通用吊顶简洁版)</a><br><a href=\"#!/mx-slider/index\">mx-slider/index(滑块)</a><br><a href=\"#!/mx-slider/range\">mx-slider/range(范围滑块)</a><br><a href=\"#!/mx-speech/index\">mx-speech/index(语音朗读)</a><br><a href=\"#!/mx-suggest/index\">mx-suggest/index</a><br><a href=\"#!/mx-table/index\">mx-table/index(表格)</a><br><a href=\"#!/mx-taginput/index\">mx-taginput/index(标签输入)</a><br><a href=\"#!/mx-time/index\">mx-time/index(时间)</a><br><a href=\"#!/mx-time/picker\">mx-time/picker(时间选取)</a><br><a href=\"#!/mx-tree/index\">mx-tree/index(tree)</a><br><a href=\"#!/mx-uploader/index\">mx-uploader/index(上传)</a><br>"},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar /&gt;</pre></div><h3 class=\"_f\">默认选中某天</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?selected=2018-01-01\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    selected=\"2018-01-01\"/&gt;</pre></div><h3 class=\"_f\">设置可选择的范围</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    selected=\"2017-08-12\"/&gt;</pre></div><h3 class=\"_f\">设置周二为一周的开始</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?weekStart=2\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    week-start=\"2\"/&gt;</pre></div><h3 class=\"_f\">带时分秒</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?timeType=all\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"all\"&gt;</pre></div><h3 class=\"_f\">带时分秒的选中</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"/&gt;</pre></div><h3 class=\"_f\">带时分秒,只能选择小时和分钟</h3><div class=\"_B _ai\"><div mx-view=\"mx-calendar/index?timeType=hour%2Cminute\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"hour,minute\"/&gt;</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowDatetime()\" mx-view=\"mx-calendar/index?timeType=all&selected=2018-08-08%2018%3A08%3A20\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/datepicker",["magix","mx-gtip/index","../datepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../datepicker");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar.datepicker</h2><h3>默认情形</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期\"><div mx-view=\"mx-calendar/datepicker\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择日期\"/&gt;</pre></div><h3 class=\"_f\">默认选中某天</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期\"><div mx-view=\"mx-calendar/datepicker?selected=2018-01-01\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择日期\"\n    selected=\"2018-01-01\"&gt;</pre></div><h3 class=\"_f\">从input中读取日期</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期\" value=\"2018-03-02\"><div mx-view=\"mx-calendar/datepicker\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择日期\"\n    value=\"2018-03-02\"&gt;</pre></div><h3 class=\"_f\">设置可选择的范围</h3><div class=\"_B _ai\"><input value=\"2017-08-12\" class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?min=2017-08-05&max=2017-08-22\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    value=\"2017-08-12\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">设置周二为一周的开始</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?weekStart=2\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    week-start=\"2\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">右下对齐</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?align=right\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    align=\"right\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">右上对齐</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?align=right&placement=top\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?timeType=all\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒的选中</h3><div class=\"_B _ai\"><input value=\"2018-08-08 18:08:20\" class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?timeType=all\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    time-type=\"all\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒,只能选择小时</h3><div class=\"_B _ai\"><input value=\"2018-08-08 18:08:20\" class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?timeType=hour\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    time-type=\"hour\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><input mx-change=\"\u001f\u001eshowDatetime()\" class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    time-type=\"all\"\n    selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div><h3 class=\"_f\">只选择年月</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02&placement=top\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.datepicker\n    class=\"input\"\n    date-type=\"year,month\"\n    selected=\"2010-02\"\n    placement=\"top\" /&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/rangepicker",["magix","mx-gtip/index","../rangepicker","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../rangepicker");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar.rangepicker</h2><h3>默认情形</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期范围\"><div mx-view=\"mx-calendar/rangepicker\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"/&gt;</pre></div><h3 class=\"_f\">指定开始结束日期</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期范围\"><div mx-view=\"mx-calendar/rangepicker?start=2018-01-01&end=2019-01-01\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    start=\"2018-01-01\"\n    end=\"2019-01-01\"/&gt;</pre></div><h3 class=\"_f\">不显示快捷日期</h3><div class=\"_B _ai\"><input class=\"_ap\" placeholder=\"请选择日期范围\"><div mx-view=\"mx-calendar/rangepicker?shortcuts=false\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    placeholder=\"请选择日期范围\"\n    shortcuts=\"false\"/&gt;</pre></div><h3 class=\"_f\">设置可选择的范围</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    min=\"2017-08-05\"\n    max=\"2017-08-22\"\n    start=\"2017-08-08\"\n    end=\"2017-08-20\"\n    shortcuts=\"false\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">右上对齐</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?align=right&placement=top\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    align=\"right\"\n    placement=\"top\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?timeType=all\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">带时分秒的选中</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?timeType=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    start=\"2017-07-07 18:08:08\"\n    end=\"2017-12-30 15:15:15\"\n    class=\"input\"/&gt;</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><input mx-change=\"\u001f\u001eshowDatetime()\" class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?timeType=all\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    time-type=\"all\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@rangepicker.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        console.log(e.dates);\n        this.gtipRT('日期：' + JSON.stringify(e.dates));\n    }\n});</pre></div><h3 class=\"_f\">只有年月</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-calendar/rangepicker?dateType=year%2Cmonth&start=2017-07&end=2017-12&formatter=YYYY-MM&shortcuts=false\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-calendar.rangepicker\n    class=\"input\"\n    date-type=\"year,month\"\n    start=\"2017-07\"\n    end=\"2017-12\"\n    formatter=\"YYYY-MM\"\n    shortcuts=\"false\" /&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-carousel</h2><h3>默认情形</h3><div class=\"_B _ai\"><div style=\"height:200px;background-color:#f96447;color:white\" mx-view=\"mx-carousel/index\"><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>1</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>2</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>3</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>4</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>5</h1></div></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-carousel style=\"height:200px;background-color:#f96447;color:white\"&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 class=\"_d\">初始显示第二帧并自动播放</h3><div class=\"_B _ai\"><div style=\"height:200px;background-color:#2e6859;color:white;width:500px;\" mx-view=\"mx-carousel/index?active=1&autoplay=true\"><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>1</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>2</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>3</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>4</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>5</h1></div></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-carousel style=\"height:200px;background-color:#2e6859;color:white;width:500px;\"　active=\"1\" autoplay=\"true\"&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 class=\"_d\">不显示缩略点</h3><div class=\"_B _ai\"><div style=\"height:200px;background-color:#f96447;color:white;width:500px;\" mx-view=\"mx-carousel/index?dots=false&autoplay=true&timing=cubic-bezier%28.57%2C-0.81%2C.22%2C1.76%29&duration=1s\"><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>1</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>2</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>3</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>4</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>5</h1></div></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-carousel\n        style=\"height:200px;background-color:#f96447;color:white;width:500px;\"\n        dots=\"false\"\n        autoplay=\"true\"\n        timing=\"cubic-bezier(.57,-0.81,.22,1.76)\"\n        duration=\"1s\"&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><h3 class=\"_d\">垂直模式</h3><div class=\"_B _ai\"><div style=\"height:200px;background-color:#f96447;color:white;width:500px;\" mx-view=\"mx-carousel/index?vertical=true&autoplay=true\"><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>1</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>2</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>3</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>4</h1></div><div style=\"text-align:center;line-height:200px\" class=\"_X _aa _ah\"><h1>5</h1></div></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-carousel style=\"height:200px;background-color:#f96447;color:white;width:500px;\" vertical=\"true\" autoplay=\"true\"&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;1&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;2&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;3&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;4&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel style=\"text-align:center;line-height:200px\"&gt;\n        &lt;h1&gt;5&lt;/h1&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/linkage",["magix","../linkage","../../mx-gtip/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../linkage");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"_B _ai\"><table class=\"_aA _aB\"><thead><tr><th><input type=\"checkbox\" class=\"_as\" linkage=\"example1\"></th><%for(var _=0;_<5;_++){%><th>示例字段<%=_%></th><%}%></tr></thead><tbody><%for(var a=0;a<10;a++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example1\" value=\"ex1_<%=a%>\"></td><%for(var b=0;b<5;b++){%><td>示例字段内容<%=b%></td><%}%></tr><%}%></tbody></table><div class=\"_ai\"><button type=\"button\" class=\"_ab _a _an _ao\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示示例1选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-checkbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@linkage.html',\n    mixins: [Linkage, GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showEx1&lt;click&gt;' () {\n        this.gtipRT(this.getSelectedIds('example1'));\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/storestate",["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip,StoreState*/
require("mx-pagination/index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../linkage");
var GTip = require("../../mx-gtip/index");
var StoreState = require("../storestate");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-checkbox</h2><div class=\"_B _ai\"><table class=\"_aA _aB\"><thead><tr><th><input type=\"checkbox\" class=\"_as\" linkage=\"example1\"></th><%for(var _=0;_<5;_++){%><th>示例字段<%=_%></th><%}%></tr></thead><tbody><%for(var a=0;a<$$.list1.length;a++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example1\" value=\"<%=$$.list1[a].id%>\"></td><%for(var b=0;b<5;b++){%><td><%=$$.list1[a]['f'+b]%></td><%}%></tr><%}%></tbody><tfoot><tr><td colspan=\"6\" mx-view=\"mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>\" mx-change=\"\u001f\u001echageList1()\" style=\"height:60px;\"></td></tr></tfoot></table><div class=\"_ai\"><button class=\"_ab _a _an _ao\" mx-click=\"\u001f\u001eshowEx1()\">显示选中的checkbox</button></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"&lt;%=list1[i].id%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i]['f'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-vframe\n                tag=\"td\"\n                colspan=\"6\"\n                path=\"app/gallery/mx-pagination/index\"\n                total=\"&lt;%@100%&gt;\"\n                step=\"3\"\n                page=\"&lt;%@list1Page%&gt;\"\n                size=\"&lt;%@list1Size%&gt;\"\n                mx-change=\"chageList1()\"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class=\"clearfix\"&gt;\n    &lt;button class=\"fr mt5 btn btn-brand\" mx-click=\"showEx1()\"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Linkage = require('app/gallery/mx-chekcbox/linkage');\nlet GTip = require('app/gallery/mx-gtip/index');\nlet StoreState = require('app/gallery/mx-chekcbox/storestate');\nmodule.exports = Magix.View.extend({\n    tmpl: '@storestate.html',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp['f' + i] = '字段内容' + j + '_' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me['$' + type];\n        let page = me['$' + type + 'Page'];\n        let size = me['$' + type + 'Size'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList('list1'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    'chageList1&lt;change&gt;' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    'showEx1&lt;click&gt;' () {\n        let list = this.getStoreState('example1');\n        if (list.length) {\n            this.gtipRT('选中的值：' + list.join(','));\n        } else {\n            this.gtipRT('请选择checkbox');\n        }\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"_B _ai\"><div mx-view=\"mx-color/index\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-color/&gt;</pre></div><h3 class=\"_f\">透明度</h3><div class=\"_B _ai\"><div mx-view=\"mx-color/index?showAlpha=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-color show-alpha=\"true\"/&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../picker");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color.picker</h2><h3>颜色选择</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-color/picker\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-color.picker class=\"input\" /&gt;</pre></div><div style=\"height: 300px;\"></div><h3 class=\"_f\">透明度</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-color/picker?showAlpha=true\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-color.picker show-alpha=\"true\" class=\"input\" /&gt;</pre></div><div style=\"height: 300px;\"></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/index",["magix","../../mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-copy</h2><div class=\"_B _ai\"><div id=\"text_<%=$$.viewId%>\">这里是要复制的<span style=\"font-weight:bold\">内容</span>的节点</div><button type=\"button\" class=\"_an _ao _j\" mx-success=\"\u001f\u001edone()\" mx-error=\"\u001f\u001ebad()\" mx-view=\"mx-copy/index?copyNode=text_<%!$eu($$.viewId)%>\">复制</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;div id=\"text_&lt;%=viewId%&gt;\"&gt;\n    这里是要复制的&lt;span style=\"font-weight:bold\"&gt;内容&lt;/span&gt;的节点\n&lt;/div&gt;\n&lt;mx-copy\n    copy-node=\"text_&lt;%=viewId%&gt;\"\n    tag=\"button\"\n    type=\"button\"\n    class=\"btn btn-brand mr20\"\n    mx-success=\"done()\"\n    mx-error=\"bad()\"&gt;\n        复制\n    &lt;/mx-copy&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'done&lt;success&gt;'() {\n        this.gtipRT('复制成功～');\n    },\n    'bad&lt;error&gt;'() {\n        this.gtipRT('复制失败～');\n    }\n});    \n</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragselect/__test__/index",["magix","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_b","._aJ{width:500px;cursor:default}._aJ li{width:100px;height:100px;text-align:center;float:left;line-height:100px;background:#f8f6f6;border:1px solid #fff;margin:10px}._aJ li[select]{background:#ccc}._aJ ._aK{border:1px solid #eb5685;background:#813742;opacity:.5;color:#fff}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragselect</h2><h3>默认示例</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragselect/index\" class=\"_aJ _aa\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\"&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n    &lt;li&gt;123&lt;/li&gt;\n    &lt;li&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n        me.$selected = {};\n    },\n    'show&lt;change&gt;'(e) {\n        let node = e.node;\n        let me = this;\n        if (!node.id) node.id = Magix.guid('mx_');\n        if (e.action == 'add') {\n            if (me.$selected[node.id]) {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n\n                me.$temp[node.id] = 1;\n            } else {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            }\n        } else if (e.action == 'remove') {\n            if (me.$temp[node.id]) {\n                $(node).css({\n                    opacity: 0.1\n                });\n                me.$selected[node.id] = node;\n                delete me.$temp[node.id];\n            } else {\n                $(node).css({\n                    opacity: 1\n                });\n                delete me.$selected[node.id];\n                me.$temp[node.id] = 1;\n            }\n        }\n        console.log(me.$selected);\n    },\n    'begin&lt;dragbegin&gt;'() {\n        this.$temp = {};\n    },\n    'end&lt;dragfinish&gt;'() {\n        delete this.$temp;\n    }\n});\n    </pre></div><h3 class=\"_f\">部分不能选择</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragselect/index?selector=li%5Bselect%21%3Dfalse%5D\" class=\"_aJ _aa\" mx-change=\"\u001f\u001eshow()\" mx-dragbegin=\"\u001f\u001ebegin()\" mx-dragfinish=\"\u001f\u001eend()\" test=\"@$hor\"><li>123</li><li>456</li><li>123</li><li>456</li><li>123</li><li>456</li><li select=\"false\">123</li><li select=\"false\">456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"mx-dragselect/index\" class=\"hor fl\" mx-change=\"show()\" mx-dragbegin=\"begin()\" mx-dragfinish=\"end()\" view-selector=\"li[select!=false]\"&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li&gt;123&lt;/li&gt;\n        &lt;li&gt;456&lt;/li&gt;\n        &lt;li select=\"false\"&gt;123&lt;/li&gt;\n        &lt;li select=\"false\"&gt;456&lt;/li&gt;\n    &lt;/ul&gt;</pre></div>"},
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
                $(node).removeClass('_aK');
                delete me.$selected[node.id];
                if (e.mode == 'drag') {
                    me.$temp[node.id] = 1;
                }
            }
            else {
                $(node).addClass('_aK');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
        }
        else if (e.action == 'remove') {
            if (me.$temp[node.id]) {
                $(node).addClass('_aK');
                me.$selected[node.id] = node;
                if (e.mode == 'drag') {
                    delete me.$temp[node.id];
                }
            }
            else {
                $(node).removeClass('_aK');
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("_c","._aL{width:300px;cursor:default}._aL li{line-height:30px;padding:10px}._aL li:nth-child(odd){background-color:rgba(172,236,182,.5)}._aL span{cursor:move;margin-right:10px;display:inline-block;height:100%}._aM{background:#f8f6f6;height:120px;overflow:auto;width:200px}._aN,._aM{cursor:default}._aN{width:100%}._aN li{width:100px;height:60px;text-align:center;float:left;line-height:60px;background:#f8f6f6;border-right:1px solid #fff}._aN li[ds-draggable=false]{background:#ccc}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dragsort</h2><h3>默认示例</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"_aL _aa\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div class=\"_ab\"><table class=\"_aA _aB\"><thead><tr><th><input type=\"checkbox\" class=\"_as\" linkage=\"example1\"></th><%for(var _=0;_<3;_++){%><th>示例字段<%=_%></th><%}%></tr></thead><tbody mx-view=\"mx-dragsort/index\"><%for(var a=0;a<10;a++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example1\" value=\"ex1_<%=a%>\"></td><%for(var b=0;b<3;b++){%><td><%=a%>示例字段内容<%=b%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left fl\" view-selector=\"span\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class=\"fr\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view=\"app/gallery/mx-dragsort/index\"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 class=\"_f\">水平拖动</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"_aN _aa\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"_f\">四个方向</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=true\" class=\"_aN _aa\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"true\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"_f\">滚动容器和窗口</h3><h4>拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?selector=span\" class=\"_aL _aM _aa _ak\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 class=\"_f\">跨容器拖动</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?drops=_def&selector=span\" class=\"_aL _aM _aa _ak\" id=\"_abc\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view=\"mx-dragsort/index?selector=span&drops=_abc\" class=\"_aL _aM _aa _ak _x\" id=\"_def\"></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" view-drops=\"_def\" view-selector=\"span\" id=\"_abc\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view=\"mx-dragsort/index\" class=\"left left1 fl scrollable ml30\" id=\"_def\" view-selector=\"span\" view-drops=\"_abc\"&gt;\n&lt;/ul&gt;</pre></div><h3 class=\"_f\">拖出容器删除</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?sort=false\" class=\"_aL _aM _aa _ak\" mx-enterzone=\"\u001f\u001estop()\" mx-leavezone=\"\u001f\u001eok()\" mx-dragfinish=\"\u001f\u001edel()\"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"left left1 fl scrollable\" mx-enterzone=\"stop()\" mx-leavezone=\"ok()\" mx-dragfinish=\"del()\" view-sort=\"false\"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.less');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'stop&lt;enterzone&gt;'(e) {\n        e.changePointer(false);\n    },\n    'ok&lt;leavezone&gt;'(e) {\n        e.changePointer(true);\n    },\n    'del&lt;dragfinish&gt;'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 class=\"_f\">部分不能拖动及排序</h3><div class=\"_B _ai\"><ul mx-view=\"mx-dragsort/index?horizonal=true&vertical=false\" class=\"_aN _aa\"><li ds-draggable=\"false\"><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable=\"false\"><span>move</span>456</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;ul mx-view=\"app/gallery/mx-dragsort/index\" class=\"hor fl\" view-horizonal=\"true\" view-vertical=\"false\"&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable=\"false\"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div>"},
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
        if (e.moved && e.outZone) {
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-day</h2><h3>展示</h3><div class=\"_B _ai\"><div style=\"width:800px\" mx-change=\"\u001f\u001eshowDays()\" mx-view=\"mx-day/index?years=<%@$$.years%>&selectedYear=2002&selectedDays=<%@{'2012':'0011,,0011,1100'}%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-day\n    years=\"&lt;%@years%&gt;\"\n    selected-year=\"2002\"\n    selected-days=\"&lt;%@{'2012':'0011,,0011,1100'}%&gt;\"\n    style=\"width:800px\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/alert",["magix","mx-dialog/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Dialog = require("mx-dialog/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dialog</h2><h3>alert与confirm</h3><div class=\"_B _ai\"><button type=\"button\" class=\"_an _ao _j\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"_an _ao _j\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/index",["magix","mx-dialog/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Dialog = require("mx-dialog/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<%if($$.inDialog){%><div class=\"_aE\">加载view测试</div><div class=\"_aF\"><%}%><h2>mx-dialog</h2><h3>加载普通view</h3><div class=\"_B _ai\"><button type=\"button\" class=\"_an _ao _j\" mx-click=\"\u001f\u001eview()\">view</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"view()\"&gt;view&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'view&lt;click&gt;' () {\n        this.mxDialog('path/to/view', {\n            width: 900\n        });\n    }\n});</pre></div><%if($$.inDialog){%></div><div class=\"_aG\">dialog footer</div><%}%>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown</h2><h3>默认</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowWeek()\" style=\"width:150px;\" mx-view=\"mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i></div><button mx-click=\"\u001f\u001etest()\" class=\"_an _s _ao\">toggle searchbox</button><div mx-change=\"\u001f\u001eshowWeek()\" class=\"_v\" style=\"width:150px;border-radius: 4px 0 0 4px;\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&disabled=true\"><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i></div><div mx-change=\"\u001f\u001eshowWeek()\" style=\"width:150px;margin-left:-1px; border-radius: 0 4px 4px 0\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-dropdown\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"_f\">单选带分组</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowWeek()\" class=\"_aa\" style=\"width:150px;\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i group=\"true\" class=\"_ah\">本周日期</i><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i><i group=\"true\" class=\"_ah\">下周日期</i><i value=\"next-mon\" class=\"_ah\">下周一</i><i value=\"next-wed\" class=\"_ah\">下周三</i><i value=\"next-thu\" class=\"_ah\">下周四</i><i value=\"next-fri\" class=\"_ah\">下周五</i><i value=\"next-sat\" class=\"_ah\">下周六</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-dropdown\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;mx-dropdown.item group=\"true\"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group=\"true\"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-mon\"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-wed\"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-thu\"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-fri\"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-sat\"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"_f\">动态数据并设置选中</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowUser()\" class=\"_aa\" style=\"width:200px;\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre lang=\"html\" mx-view=\"__test__/hl\">&lt;mx-dropdown\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUser()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-dropdown&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    'showUser&lt;change&gt;' (e) {\n        this.gtipRB('name:' + e.text + ',id:' + e.value);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/multiple",["magix","mx-gtip/index","../multiple","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../multiple");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown.multiple</h2><h3 class=\"_f\">默认</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowWeeks()\" class=\"_aa\" style=\"width:150px;\" mx-view=\"mx-dropdown/multiple?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"_f\">多选带分组</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowWeeks()\" class=\"_aa\" style=\"width:150px;\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\"><i group=\"true\" class=\"_ah\">本周日期</i><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i><i group=\"true\" class=\"_ah\">下周日期</i><i value=\"next-mon\" class=\"_ah\">下周一</i><i value=\"next-wed\" class=\"_ah\">下周三</i><i value=\"next-thu\" class=\"_ah\">下周四</i><i value=\"next-fri\" class=\"_ah\">下周五</i><i value=\"next-sat\" class=\"_ah\">下周六</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;mx-dropdown.item group=\"true\"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group=\"true\"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-mon\"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-wed\"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-thu\"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-fri\"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"next-sat\"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"_f\">动态数据并设置选中</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowUsers()\" class=\"_aa\" style=\"width:200px;\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.usersSelected%>&list=<%@$$.userList%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre lang=\"html\" mx-view=\"__test__/hl\">&lt;mx-dropdown.multiple\n    searchbox=\"true\"\n    empty-text=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    selected=\"&lt;%@ usersSelected %&gt;\"\n    list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUsers()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/mx-dropdown.multiple&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    'showUsers&lt;change&gt;' (e) {\n        this.gtipRB('user ids:' + e.values);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/count",["magix","../../mx-form/index","../count","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../count");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../../mx-form/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect count</h2><div class=\"_B _ai\"><input class=\"_ap\" mx-view=\"mx-effect/count?value=<%!$eu($$.toNumber)%>\"><div mx-view=\"mx-effect/count?value=<%@$$.toNumber%>&duration=2000&fixed=2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px;\"></div><button class=\"_an _ao _s\" type=\"button\" mx-click=\"\u001f\u001echangeNumber({i:true})\">increase number</button><button class=\"_an _ao _s\" type=\"button\" mx-click=\"\u001f\u001echangeNumber()\">decrease number</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;input class=\"input\" mx-view=\"mx-effect/count\" view-value=\"&lt;%@toNumber%&gt;\"&gt;\n&lt;div mx-view=\"mx-effect/count\" view-value=\"&lt;%@toNumber%&gt;\" view-duration=\"2000\" view-fixed=\"2\" style=\"font-size: 30px;line-height: 50px;letter-spacing: 2px;\"&gt;&lt;/div&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber({i:true})\"&gt;increase number&lt;/button&gt;\n&lt;button class=\"btn btn-brand ml5\" type=\"button\" mx-click=\"changeNumber()\"&gt;decrease number&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    'changeNumber&lt;click&gt;'(e) {\n        let me = this;\n        let to = me.updater.get('toNumber');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/dance",["magix","../../mx-form/index","../dance","mx-dropdown/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Form*/
require("../dance");
require("mx-dropdown/index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../../mx-form/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect dance</h2><div class=\"_B _ai\"><div mx-view=\"mx-effect/dance?value=<%!$eu($$.content)%>&duration=<%!$eu($$.duration)%>&dance=<%!$eu($$.dance)%>\"></div><div mx-ssid=\"\u001f0\" style=\"width:180px\" mx-change=\"\u001f\u001e__b({c:[{p:'duration',f:{refresh:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8D%95%E5%AD%97%E6%95%88%E6%9E%9C%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4&selected=<%@$$.duration%>\"><i value=\"10\" class=\"_ah\">10ms</i><i value=\"30\" class=\"_ah\">30ms</i><i value=\"60\" class=\"_ah\">60ms</i><i value=\"90\" class=\"_ah\">90ms</i><i value=\"120\" class=\"_ah\">120ms</i></div><div mx-ssid=\"\u001f1\" style=\"width:180px\" class=\"_t\" mx-change=\"\u001f\u001e__b({c:[{p:'dance',f:{refresh:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-dropdown/index?emptyText=%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C&selected=<%@$$.dance%>\"><i value=\"d1\" class=\"_ah\">效果一</i><i value=\"d2\" class=\"_ah\">效果二</i><i value=\"d3\" class=\"_ah\">效果三</i><i value=\"d4\" class=\"_ah\">效果四</i><i value=\"d5\" class=\"_ah\">效果五</i><i value=\"d6\" class=\"_ah\">效果六</i><i value=\"d7\" class=\"_ah\">效果七</i><i value=\"d8\" class=\"_ah\">效果八</i><i value=\"d9\" class=\"_ah\">效果九</i><i value=\"d10\" class=\"_ah\">效果十</i><i value=\"d11\" class=\"_ah\">效果十一</i></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;mx-effect.dance value=\"&lt;%=content%&gt;\" duration=\"&lt;%=duration%&gt;\" dance=\"&lt;%=dance%&gt;\"  /&gt;\n&lt;mx-dropdown empty-text=\"单字效果间隔时间\" style=\"width:180px\" selected=\"&lt;%:duration({refresh:true})%&gt;\"&gt;\n    &lt;mx-dropdown.item value=\"10\"&gt;10ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"30\"&gt;30ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"60\"&gt;60ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"90\"&gt;90ms&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"120\"&gt;120ms&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n&lt;mx-dropdown empty-text=\"动画效果\" style=\"width:180px\" class=\"ml10\" selected=\"&lt;%:dance({refresh:true})%&gt;\"&gt;\n    &lt;mx-dropdown.item value=\"d1\"&gt;效果一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d2\"&gt;效果二&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d3\"&gt;效果三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d4\"&gt;效果四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d5\"&gt;效果五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d6\"&gt;效果六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d7\"&gt;效果七&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d8\"&gt;效果八&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d9\"&gt;效果九&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d10\"&gt;效果十&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value=\"d11\"&gt;效果十一&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;\n    </pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            content: '你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。',\n            dance: 'd1',\n            duration: '60'\n        });\n    }\n});\n    \n    </pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/__test__/scroll",["magix","../scroll","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../scroll");
require("__test__/hl");
/*
ver:2.0.1
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-effect scroll</h2><div class=\"_B _ai\"><div mx-view=\"mx-effect/scroll?value=<%@$$.value%>\"></div><button type=\"button\" mx-click=\"\u001f\u001eupdate()\" class=\"_an _ao _v\">update</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;mx-effect.scroll value=\"&lt;%@value%>\" /&gt;\n&lt;button type=\"button\" mx-click=\"update()\" class=\"btn btn-brand ml20\"&gt;update&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@scroll.html',\n    render() {\n        this.updater.digest({\n            value: 100\n        });\n        setInterval(() => {\n            let v = (Math.random() * 20) + this.updater.get('value');\n            this.updater.digest({\n                value: v\n            });\n        }, 1000);\n    },\n    'update&lt;click&gt;'() {\n        this.updater.digest({\n            value: this.updater.get('value') - 20\n        });\n    }\n}); \n    </pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-footer</h2><div class=\"_B _ai\"><div mx-view=\"mx-footer/index?mode=<%!$eu($$.mode)%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><%if($$.mode=='simple'){%><pre mx-view=\"__test__/hl\">\n&lt;mx-footer mode=\"simple\" /&gt;</pre><%}else{%><pre mx-view=\"__test__/hl\">\n&lt;mx-footer /&gt;</pre><%}%></div>"},
    render: function () {
        var me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
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
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-form</h2><h3>示例表单</h3><div class=\"_B _ai\"><div style=\"width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;\"><div class=\"_av _ai\"><label class=\"_aw _ax\">活动名称：</label><div class=\"_ay\"><input mx-ssid=\"\u001f0\" class=\"_ap\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e__b({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b({m:'___',a:{}})\"></div></div><div class=\"_av _ai\"><label class=\"_aw\">色彩：</label><div class=\"_ay\"><input class=\"_ap\"><div mx-view=\"mx-color/picker\" class=\"_af _ah\"></div></div></div><div class=\"_av\"><label class=\"_aw _ax\">标签：</label><div class=\"_ay\"><div mx-ssid=\"\u001f1\" mx-change=\"\u001f\u001e__b({c:[{p:'tags',f:{required:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\"></div></div></div><div class=\"_av\"><label class=\"_aw _ax\">活动时间：</label><div class=\"_ay\"><div mx-ssid=\"\u001f2\" mx-change=\"\u001f\u001e__b({c:[{p:'day',f:{required:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" style=\"width:180px;\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\"><i value=\"mon\" class=\"_ah\">周一</i><i value=\"wed\" class=\"_ah\">周三</i><i value=\"thu\" class=\"_ah\">周四</i><i value=\"fri\" class=\"_ah\">周五</i><i value=\"sat\" class=\"_ah\">周六</i></div><span class=\"_ac _s _g\">-</span><input mx-ssid=\"\u001f3\" class=\"_ap\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"<%=$$.time%>\" mx-change=\"\u001f\u001e__b({c:[{p:'time',f:{required:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"><div mx-view=\"mx-time/picker\" class=\"_af _ah\"></div></div></div><div class=\"_av\"><label class=\"_aw\">checkbox：</label><div class=\"_ay\"><label class=\"_h _am\"><input type=\"checkbox\" name=\"cb\" value=\"c1\" class=\"_as\" mx-change=\"\u001f\u001e__b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" disabled=\"disabled\" <%if($$.checkbox.indexOf('c1')>-1){%>checked<%}%>>c1</label><label class=\"_h\"><input type=\"checkbox\" name=\"cb\" value=\"c2\" class=\"_as\" mx-change=\"\u001f\u001e__b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" <%if($$.checkbox.indexOf('c2')>-1){%>checked<%}%>>c2</label><label class=\"_h\"><input type=\"checkbox\" mx-change=\"\u001f\u001e__b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" name=\"cb\" value=\"c3\" class=\"_au\" disabled=\"disabled\">c3</label><label class=\"_h\"><input type=\"checkbox\" mx-change=\"\u001f\u001e__b({c:[{p:'checkbox'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" name=\"cb\" value=\"c4\" class=\"_au\" <%if($$.checkbox.indexOf('c4')>-1){%>checked<%}%>>c4</label></div></div><div class=\"_av\"><label class=\"_aw\">radio：</label><div class=\"_ay\"><label class=\"_h _am\"><input checked=\"checked\" disabled=\"disabled\" type=\"radio\" mx-change=\"\u001f\u001e__b({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" value=\"r1\" class=\"_at\" name=\"magix\">r1</label><label class=\"_h\"><input type=\"radio\" mx-change=\"\u001f\u001e__b({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" value=\"r2\" class=\"_at\" name=\"magix\">r2</label><label class=\"_h\"><input type=\"radio\" mx-change=\"\u001f\u001e__b({c:[{p:'radio'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" value=\"r3\" class=\"_at\" name=\"magix\">r3</label></div></div><div class=\"_av\"><label class=\"_aw\">日期：</label><div class=\"_ay\"><input class=\"_ap\" placeholder=\"请选择开始日期\" value=\"<%=$$.dateStart%>\" mx-change=\"\u001f\u001e__b({c:[{p:'dateStart'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" style=\"width:162px;\"><div mx-view=\"mx-calendar/datepicker\" class=\"_af _ah\"></div><span class=\"_ac _s _g\">-</span><input class=\"_ap\" placeholder=\"请选择结束日期\" value=\"<%=$$.dateEnd%>\" mx-change=\"\u001f\u001e__b({c:[{p:'dateEnd'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" style=\"width:162px;\"><div mx-view=\"mx-calendar/datepicker\" class=\"_af _ah\"></div></div></div><div class=\"_av\"><label class=\"_aw\">范围日期：</label><div class=\"_ay\"><input class=\"_ap\" placeholder=\"请选择开始日期\" value=\"<%=$$.dates%>\" mx-change=\"\u001f\u001e__b({c:[{p:'dates'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" style=\"width:340px;\"><div mx-view=\"mx-calendar/rangepicker\" class=\"_af _ah\"></div></div></div><div class=\"_av\"><label class=\"_aw\">范围：</label><div class=\"_ay\"><div mx-change=\"\u001f\u001e__b({c:[{p:'range'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\"></div></div></div><div class=\"_av\"><label class=\"_aw\">数字：</label><div class=\"_ay\"><div mx-change=\"\u001f\u001e__b({c:[{p:'number'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" class=\"_ap _ag\" mx-view=\"mx-number/index?value=<%@$$.number%>\"></div></div></div><div class=\"_av\"><label class=\"_aw\">范围：</label><div class=\"_ay\"><div mx-change=\"\u001f\u001e__b({c:[{p:'range1'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\"></div></div></div><div class=\"_av\"><label class=\"_aw\">进度条：</label><div class=\"_ay\"><div mx-view=\"mx-progress/index?value=0.35\"></div></div></div><div class=\"_av\"><label class=\"_aw\">封面：</label><div class=\"_ay\"><button class=\"_an _ao\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\">上传文件</button></div></div><div class=\"_av\"><label class=\"_aw\">备注：</label><div class=\"_ay\"><textarea mx-ssid=\"\u001f4\" class=\"_aq\" rows=\"8\" mx-change=\"\u001f\u001e__b({c:[{p:'mark',f:{maxLength:10}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"><%=$$.mark%></textarea></div></div><div mx-ssid=\"\u001f5\" mx-view=\"mx-form/__test__/sub?nameX1=<%@$$.name_x1%>\" mx-change=\"\u001f\u001e__b({c:[{p:'name_x1',f:{from:'nameX1'}},{p:'de',f:{from:'name_sub1'}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"></div><div class=\"_az\"><button class=\"_an _ao\" mx-click=\"\u001f\u001eisValid()\">isValid</button><button class=\"_an _ao _t\" mx-click=\"\u001f\u001egetData()\">getData</button></div></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;div style=\"width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;\">\n    &lt;div class=\"form-item clearfix\"&gt;\n        &lt;label class=\"form-label form-required\"&gt;活动名称：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;&lt;input class=\"input\" placeholder=\"请填写活动名称\" value=\"&lt;%:name{required:true,blength:[20,50]}%&gt;\" mx-focusin=\"___()\" /&gt;&lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"form-item clearfix\"&gt;\n        &lt;label class=\"form-label\"&gt;色彩：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-color.picker class=\"input\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label form-required\"&gt;标签：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-taginput\n                list=\"&lt;%@list%&gt;\"\n                placeholder=\"请选择标签\"\n                selected=\"&lt;%:tags{required:true}%&gt;\"\n            /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label form-required\"&gt;活动时间：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-dropdown\n                searchbox=\"true\"\n                empty-text=\"请选择日期\"\n                selected=\"&lt;%:day{required:true}%&gt;\" style=\"width:180px;\"&gt;\n                &lt;mx-dropdown.item value=\"mon\"&gt;周一&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value=\"wed\"&gt;周三&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value=\"thu\"&gt;周四&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value=\"fri\"&gt;周五&lt;/mx-dropdown.item&gt;\n                &lt;mx-dropdown.item value=\"sat\"&gt;周六&lt;/mx-dropdown.item&gt;\n            &lt;/mx-dropdown&gt;\n            &lt;span class=\"ib ml5 mr5\"&gt;\n            -&lt;/span&gt;\n            &lt;mx-time.picker class=\"input\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"&lt;%:time{required:true}%&gt;\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;checkbox：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;label class=\"mr10 disabled\"&gt;\n                &lt;native.input type=\"checkbox\" name=\"cb\" value=\"c1\" class=\"checkbox\" &lt;%:checkbox%&gt; disabled checked=\"&lt;%=checkbox.indexOf('c1')&gt;-1%&gt;\" /&gt;c1\n            &lt;/label&gt;\n            &lt;label class=\"mr10\"&gt;\n                &lt;native.input type=\"checkbox\" name=\"cb\" value=\"c2\" class=\"checkbox\" &lt;%:checkbox%&gt;  checked=\"&lt;%=checkbox.indexOf('c2')&gt;-1%&gt;\" /&gt;c2\n            &lt;/label&gt;\n            &lt;label class=\"mr10\"&gt;\n                &lt;input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c3\" class=\"switch\" disabled /&gt;c3\n            &lt;/label&gt;\n            &lt;label class=\"mr10\"&gt;\n                &lt;native.input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c4\" class=\"switch\" checked=\"&lt;%=checkbox.indexOf('c4')&gt;-1%&gt;\"  /&gt;c4\n            &lt;/label&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;radio：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;label class=\"mr10 disabled\"&gt;\n                &lt;native.input checked disabled type=\"radio\" &lt;%:radio%&gt; value=\"r1\" class=\"radio\" name=\"magix\" /&gt;r1\n            &lt;/label&gt;\n            &lt;label class=\"mr10\"&gt;\n                &lt;input type=\"radio\" &lt;%:radio%&gt; value=\"r2\" class=\"radio\" name=\"magix\" /&gt;r2\n            &lt;/label&gt;\n            &lt;label class=\"mr10\"&gt;\n                &lt;input type=\"radio\" &lt;%:radio%&gt; value=\"r3\" class=\"radio\" name=\"magix\" /&gt;r3\n            &lt;/label&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;日期：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择开始日期\" value=\"&lt;%:dateStart%&gt;\" style=\"width:162px;\"/&gt;\n            &lt;span class=\"ib ml5 mr5\"&gt;\n            -&lt;/span&gt;\n            &lt;mx-calendar.datepicker class=\"input\" placeholder=\"请选择结束日期\" value=\"&lt;%:dateEnd%&gt;\" style=\"width:162px;\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;范围日期：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-calendar.rangepicker class=\"input\" placeholder=\"请选择开始日期\" value=\"&lt;%:dates%&gt;\" style=\"width:340px;\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-slider\n                max=\"200\"\n                min=\"20\"\n                value=\"&lt;%:range%&gt;\"\n                step=\"0.2\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;数字：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-number value=\"&lt;%:number%&gt;\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-slider.range\n                max=\"500\"\n                min=\"200\"\n                value=\"&lt;%:range1%&gt;\"\n                step=\"10\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;进度条：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;mx-progress value=\"0.35\"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;封面：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;button\n                class=\"btn btn-brand\"\n                mx-view=\"mx-uploader/index\"\n                view-action=\"./\"\n                view-name=\"file1\"\n                view-multiple=\"true\"\n            &gt;上传文件&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"form-item\"&gt;\n        &lt;label class=\"form-label\"&gt;备注：&lt;/label&gt;\n        &lt;div class=\"form-content\"&gt;\n            &lt;textarea class=\"textarea\" rows=\"8\"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;mx-vframe src=\"@./sub\" name-x1=\"&lt;%:name_x1{from:'nameX1'}%&gt;\" &lt;%:de{from:'name_sub1'}%&gt;&gt;&lt;/mx-vframe&gt;\n    &lt;div class=\"form-footer\"&gt;\n        &lt;button class=\"btn btn-brand\" mx-click=\"isValid()\"&gt;isValid&lt;/button&gt;\n        &lt;button class=\"btn btn-brand ml10\" mx-click=\"getData()\"&gt;getData&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    'isValid&lt;click&gt;' () {\n        console.log(this.isValid());\n    },\n    'getData&lt;click&gt;' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark');\n        console.log(data);\n    }\n});</pre></div>"},
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
    '___<focusin>': function (e) {
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub",["magix","../index","./sub1"],(require,exports,module)=>{
/*Magix,Form*/
require("./sub1");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_av _ai\"><label class=\"_aw _ax\">活动名称：</label><div class=\"_ay\"><input mx-ssid=\"\u001f0\" class=\"_ap\" placeholder=\"请填写活动名称\" value=\"<%=$$.nameX1%>\" mx-change=\"\u001f\u001e__b({c:[{p:'nameX1',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"></div></div><div mx-ssid=\"\u001f1\" mx-view=\"mx-form/__test__/sub1\" mx-change=\"\u001f\u001e__b({c:[{p:'name_sub1',f:{from:'name'}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub1",["magix","../index"],(require,exports,module)=>{
/*Magix,Form*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_av _ai\"><label class=\"_aw _ax\">活动名称：</label><div class=\"_ay\"><input mx-ssid=\"\u001f0\" class=\"_ap\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e__b({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"></div></div>"},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/__test__/index",["magix","mx-gtip/index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-gtip</h2><div class=\"_B _ai\"><button class=\"_an _aa\" mx-click=\"\u001f\u001ert()\">右上角提示</button><button class=\"_an _aa _t\" mx-click=\"\u001f\u001erb()\">右下角提示</button><button class=\"_an _aa _t\" mx-click=\"\u001f\u001elt();\">左上角提示</button><button class=\"_an _aa _t\" mx-click=\"\u001f\u001elb();\">左下角提示</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button class=\"btn fl\" mx-click=\"rt()\"&gt;右上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"rb()\"&gt;右下角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lt();\"&gt;左上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lb();\"&gt;左下角提示&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'rt&lt;click&gt;' () {\n        this.gtipRT('右上角，消息内容' + Date.now());\n    },\n    'rb&lt;click&gt;' () {\n        this.gtipRB('右下角，消息内容' + Date.now());\n    },\n    'lt&lt;click&gt;' () {\n        this.gtipLT('左上角，消息内容' + Date.now());\n    },\n    'lb&lt;click&gt;' () {\n        this.gtipLB('左下角，消息内容' + Date.now());\n    },\n    'rtt&lt;click&gt;' (e) {\n        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/day",["magix","../day","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../day");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>天小时选取组件</h3><div class=\"_B _ai\"><div style=\"width:600px\" mx-change=\"\u001f\u001eshow()\" mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-hour.day\n    hours=\"00001111011\"\n    style=\"width:600px\" mx-change=\"show()\"/&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/week",["magix","../week","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../week");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour.week</h2><h3 class=\"_f\">周小时选取组件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshow()\" style=\"width:800px\" mx-view=\"mx-hour/week?days=%2C001111%2C%2C%2C00000000111111001\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-hour.week\n    days=\",001111,,,00000000111111001\"\n    mx-change=\"show()\"\n    style=\"width:800px\"/&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-linkage/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-linkage</h2><h3>默认情形</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%9C%81%E5%B8%82%E5%8C%BA\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    placeholder=\"请选择省市区\" /&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            headers: ['省份', '城市', '地区'],\n            list: [{\n                id: 1,\n                text: '浙江省'\n            }, {\n                id: 2,\n                text: '河南省'\n            }, {\n                id: 3,\n                text: '杭州市',\n                pId: 1\n            }, {\n                id: 4,\n                text: '周口市',\n                pId: 2\n            }, {\n                id: 5,\n                text: '安徽省'\n            }, {\n                id: 6,\n                text: '新疆维吾尔自治区'\n            }, {\n                id: 7,\n                pId: 3,\n                text: '余杭区'\n            }, {\n                id: 8,\n                text: '湖州市',\n                pId: 1\n            }, {\n                id: 9,\n                text: '长吉县',\n                pId: 8\n            }]\n        });\n    }\n});</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowValue()\" mx-view=\"mx-linkage/index?list=<%@$$.list%>&selected=1%2C3&splitter=-&headers=<%@$$.headers%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-linkage\n    list=\"&lt;%@list%&gt;\"\n    selected=\"1,3\"\n    splitter='-'\n    headers=\"&lt;%@headers%&gt;\"\n    disabled=\"true\"\n    placeholder=\"请选择分类\" /&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/mask",["magix","../mask","__test__/hl"],(require,exports,module)=>{
/*Magix,MLoading*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var MLoading = require("../mask");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-loading</h2><h3>mask mixin</h3><div class=\"_B _ai\"><p>loading mixin只要view启用即可，不需要修改view中的任何方法即可完成相应的效果</p><p>通常某个view首次渲染时我们会在节点内部增加一个loading动画，而在view后续渲染时，不能把内容整个销毁换成动画，这个成本太高了。</p><p>为了解决后续也能显示一个加载动画，可启用该mixin，解决后续的动画显示。</p><p class=\"_b _n\">第<%=$$.count%>次渲染页面</p><button mx-click=\"\u001f\u001erefresh()\" class=\"_an _ao _b\">点此按钮2s后重新渲染当前view</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">\n&lt;p class=\"mt10 mb10\"&gt;\n    第&lt;%=count%&gt;次渲染页面\n&lt;/p&gt;\n&lt;button mx-click=\"refresh()\" class=\"btn btn-brand mt10\"&gt;点此按钮2s后重新渲染当前view&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet MLoading = require('app/gallery/loading/mask');\nmodule.exports = Magix.View.extend({\n    tmpl: '@mask.html',\n    mixins: [MLoading],\n    init() {\n        this.count = 1;\n    },\n    render() {\n        let me = this;\n        setTimeout(me.wrapAsync(() => {\n            me.updater.digest({\n                count: this.count++\n            });\n        }), 2e3);\n    },\n    'refresh&lt;click&gt;' () {\n        this.render();\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-menu/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Menu*/
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Menu = require("../index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-menu</h2><h3>展示</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-menu/index?list=<%@$$.list%>&width=200\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-menu.index\n    list=\"&lt;%@list%&gt;\"\n    width=\"200\"\n&gt;&lt;/mx-menu.index&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div><h3 class=\"_f\">context menu</h3><div class=\"_B _ai\"><button class=\"_an _ao\" mx-contextmenu=\"\u001f\u001eshowcm()\">在这里点右键</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button class=\"btn btn-brand\" mx-contextmenu=\"showcm()\"&gt;在这里点右键&lt;/button&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Menu = require('../index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: '新建'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: '复制'\n            }, {\n                id: '0-1',\n                pId: '',\n                text: '删除'\n            }, {\n                id: 1,\n                pId: 0,\n                text: '新建word文件'\n            }, {\n                id: 2,\n                pId: 0,\n                text: '新建excel文件'\n            }, {\n                id: 3,\n                pId: 0,\n                text: '新建ppt文件'\n            }]\n        });\n    },\n    'showcm&lt;contextmenu&gt;'(e) {\n        e.preventDefault();\n        Menu.show(this, e, {\n            list: this.updater.get('list'),\n            picked(item) {\n                console.log(item);\n            },\n            width: 220\n        });\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-number/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-number</h2><h3>默认情形</h3><div class=\"_B _ai\"><div class=\"_ap _ag\" mx-view=\"mx-number/index\"></div><input class=\"_ap\"><br>下面这个是原生的number，用以对比<br><input type=\"number\" class=\"_ap\"><div style=\"color:#aaa;\">mx-number比原生多了按着shift键的变化比率，这个变化比率是可配置的<br>原生可以输入多个点小数点“.”和多个科学计数法“e”，而只有合法的数字才能取出值，否则会取到空字符串</div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-number /&gt;</pre></div><h3 class=\"_f\">最大值、最小值及step</h3><div class=\"_B _ai\"><div class=\"_ap _ag\" mx-view=\"mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\" /&gt;</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div class=\"_ap _ag\" mx-view=\"mx-number/index?disabled=true&value=20\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-number disabled=\"true\" value=\"20\" /&gt;</pre></div><h3 class=\"_f\">响应事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshow()\" class=\"_ap _ag\" mx-view=\"mx-number/index?max=10&min=-10&step=0.5&value=8.5\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-number\n    max=\"10\"\n    min=\"-10\"\n    step=\"0.5\"\n    value=\"8.5\"\n    mx-change=\"show()\" /&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        this.gtipRT('当前值：' + e.eventTarget.value);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","../index"],(require,exports,module)=>{
/*Magix*/
require("../index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-pagination/index?total=2000&step=3&page=<%!$eu($$.page)%>\"></div><button class=\"_an\" mx-click=\"\u001f\u001etest()\">test</button></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/index",["magix","../../mx-checkbox/linkage","../../mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Linkage,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../../mx-checkbox/linkage");
var GTip = require("../../mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popconfirm</h2><div class=\"_B _ai\"><table class=\"_aA _aB\"><thead><tr><th><input type=\"checkbox\" class=\"_as\" linkage=\"example1\"></th><%for(var _=0;_<5;_++){%><th>示例字段<%=_%></th><%}%><th>操作</th></tr></thead><tbody><%for(var a=0;a<10;a++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example1\" value=\"ex1_<%=a%>\"></td><%for(var b=0;b<5;b++){%><td>示例字段内容<%=b%></td><%}%><td><a mx-enter=\"\u001f\u001edel({id:<%=a%>})\" class=\"_ad\">删除</a><div mx-view=\"mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%EF%BC%9F\" class=\"_af _ah\"></div></td></tr><%}%></tbody></table></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;table class=\"table table-striped\"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;10;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n            &lt;mx-popconfirm content=\"确认删除？\" mx-enter=\"del({id:&lt;%=i%&gt;})\" class=\"cp\"&gt;删除&lt;/mx-popconfirm&gt;&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet Linkage = require('../../mx-checkbox/linkage');\nlet GTip = require('../../mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Linkage,GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'del&lt;enter&gt;' (e) {\n        this.gtipRT('delete:' + e.params.id);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/index",["magix","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_d","._aO{-webkit-box-shadow:0 3px 3px #eee;box-shadow:0 3px 3px #eee;list-style:none;margin:0;border:1px solid #e6e6e6;border-radius:4px;position:relative;background-color:#fff}._aP{color:#666;display:block;padding:0 7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;cursor:pointer}._aP:hover{color:#fff;background-color:#8383eb}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popmenu</h2><div class=\"_B _ai\"><button type=\"button\" class=\"_an _ao\" mx-view=\"mx-popmenu/index?related=%23menu_<%!$eu($$.viewId)%>\">显示更多菜单</button><ul class=\"_ah _aO\" id=\"menu_<%=$$.viewId%>\"><li class=\"_aP\" mx-click=\"\u001f\u001ehide()\">示例菜单1</li><li class=\"_aP\" mx-click=\"\u001f\u001ehide()\">示例菜单2</li><li class=\"_aP\" mx-click=\"\u001f\u001ehide()\">示例菜单3</li><li class=\"_aP\" mx-click=\"\u001f\u001ehide()\">示例菜单4</li><li class=\"_aP\" mx-click=\"\u001f\u001ehide()\">示例菜单5</li><li class=\"_aP\" mx-click=\"\u001f\u001ehide()\">示例菜单6</li></ul></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;button type=\"button\" class=\"btn btn-brand\" mx-view=\"app/gallery/mx-popmenu/index\" view-related=\"#menu_&lt;%=viewId%&gt;\"&gt;显示更多菜单&lt;/button&gt;\n    &lt;ul class=\"none menu\" id=\"menu_&lt;%=viewId%&gt;\"&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单1&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单2&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单3&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单4&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单5&lt;/li&gt;\n        &lt;li class=\"menu-item\" mx-click=\"hide()\"&gt;示例菜单6&lt;/li&gt;\n    &lt;/ul&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            viewId: me.id\n        });\n    },\n    'hide&lt;click&gt;' () {\n        $('#' + this.id + ' button').invokeView('&#x40;{hide}');\n    }\n});</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    'hide<click>': function () {
        $('#' + this.id + ' button').invokeView('__a');
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popover</h2><div class=\"_ai\" style=\"margin:100px;\"><button class=\"_an\">提示右</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9\" class=\"_af _ah\"></div><button class=\"_an _t\">提示上</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top\" class=\"_af _ah\"></div><button class=\"_an _t\">提示下</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom\" class=\"_af _ah\"></div><button class=\"_an _t\">提示左</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left\" class=\"_af _ah\"></div><button class=\"_an _t\">提示左,顶部对齐</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=top\" class=\"_af _ah\"></div><button class=\"_an _t\">提示右,顶部对齐</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=top\" class=\"_af _ah\"></div><button class=\"_an _t\">提示上,左对齐</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=left\" class=\"_af _ah\"></div><button class=\"_an _t\">提示上,右对齐</button><div mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=right\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-popover\n    tag=\"button\"\n    class=\"btn\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"&gt;\n    提示右\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"top\"&gt;\n    提示上\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"bottom\"&gt;\n    提示下\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"left\"&gt;\n    提示左\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"left\"\n    align=\"top\"&gt;\n    提示左,顶部对齐\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"right\"\n    align=\"top\"&gt;\n    提示右,顶部对齐\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"top\"\n    align=\"left\"&gt;\n    提示上,左对齐\n&lt;/mx-popover&gt;\n&lt;mx-popover\n    tag=\"button\"\n    class=\"btn ml10\"\n    content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    placement=\"top\"\n    align=\"right\"&gt;\n    提示上,右对齐\n&lt;/mx-popover&gt;</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-progress/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-progress</h2><h3>默认情形</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-progress/index?value=0.36\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-progress\n    value=\"0.36\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-progress/index?value=0.05&disabled=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-progress\n    value=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div>"},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-sitenav/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-sitenav</h2><div class=\"_B _ai\"><div style=\"height:50px;\" mx-view=\"mx-sitenav/index?mode=<%!$eu($$.mode)%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><%if($$.mode=='simple'){%><pre mx-view=\"__test__/hl\">\n&lt;mx-sitenav mode=\"simple\" style=\"height:50px;\" /&gt;</pre><%}else{%><pre mx-view=\"__test__/hl\">\n&lt;mx-sitenav style=\"height:50px;\" /&gt;</pre><%}%></div>"},
    render: function () {
        var me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"_f\">垂直</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&vertical=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    class=\"fl\"\n    vertical=\"true\"/&gt;</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"_f\">响应change事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowValue()\" class=\"_aa\" mx-view=\"mx-slider/index?max=200&min=0&value=130&step=5\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider\n    max=\"200\"\n    min=\"100\"\n    value=\"130\"\n    step=\"5\"\n    mx-change=\"showValue()\"\n    class=\"fl\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/range",["magix","mx-gtip/index","../range","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../range");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider.range</h2><h3>默认情形</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"_f\">垂直</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=<%!$eu($$.vertical)%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    vertical=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider.range\n    max=\"200\"\n    min=\"100\"\n    value=\"30,150\"\n    step=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"_f\">响应change事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowValue()\" class=\"_aa\" mx-view=\"mx-slider/range?max=500&min=200&value=210%2C350&step=10\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-slider.range\n    max=\"500\"\n    min=\"200\"\n    value=\"210,350\"\n    step=\"10\"\n    mx-change=\"showValue()\"\n    class=\"fl\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
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
ver:2.0.1
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
    tmpl: {"html":"<h2>mx-speech</h2><div class=\"_B\"><textarea class=\"_aq _p\" style=\"width:90%;height:200px;\" mx-change=\"\u001f\u001e__b({c:[{p:'examples.<%=$eq($$.lang)%>'}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\"><%=$$.examples[$$.lang]%></textarea><br><div mx-ssid=\"\u001f0\" mx-change=\"\u001f\u001e__b({c:[{p:'lang',f:{refresh:true}}]})\" mx-focusout=\"\u001f\u001e__b()\" mx-focusin=\"\u001f\u001e__b()\" mx-view=\"mx-dropdown/index?selected=<%@$$.lang%>\"><i value=\"zh-cn\" class=\"_ah\">中文</i><i value=\"en\" class=\"_ah\">英文</i></div><button type=\"button\" class=\"_an _ao _v\" mx-click=\"\u001f\u001espeak()\">朗读</button></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/index",["magix","mx-gtip/index","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip,$*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-suggest</h2><h3>默认情形</h3><div class=\"_B _ai\"><input class=\"_ap\" style=\"width:200px;\"><div mx-view=\"mx-suggest/index?list=<%@$$.list%>\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    }\n});</pre></div><h3 class=\"_f\">对象列表</h3><div class=\"_B _ai\"><input class=\"_ap\"><div mx-view=\"mx-suggest/index?list=<%@$$.list1%>&textKey=text&valueKey=id\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list1%&gt;\"\n    text-key=\"text\"\n    value-key=\"id\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">\nlet Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: [{\n                text: 'abc1',\n                id: 1\n            }, {\n                text: 'abc2',\n                id: 2\n            }, {\n                text: 'abc3',\n                id: 3\n            }, {\n                text: 'abc4',\n                id: 4\n            }, {\n                text: 'abc5',\n                id: 5\n            }, {\n                text: 'abc6',\n                id: 6\n            }, {\n                text: 'abc7',\n                id: 7\n            }, {\n                text: 'abc8',\n                id: 8\n            }, {\n                text: 'abc9',\n                id: 9\n            }, {\n                text: 'abc0',\n                id: 0\n            }]\n        });\n    }\n});</pre></div><h3 class=\"_f\">响应事件</h3><div class=\"_B _ai\"><input class=\"_ap\" mx-pick=\"\u001f\u001eshowPick()\" mx-showlist=\"\u001f\u001eshowList()\" mx-hidelist=\"\u001f\u001ehideList()\"><div mx-view=\"mx-suggest/index?list=<%@$$.list%>\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list%&gt;\"\n    mx-pick=\"showPick()\"\n    mx-showlist=\"showList()\"\n    mx-hidelist=\"hideList()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]\n        });\n    },\n    'showPick&lt;pick&gt;' (e) {\n        this.gtipRT('选中：' + e.item);\n    },\n    'showList&lt;showlist&gt;' () {\n        this.gtipRT('列表展示');\n    },\n    'hideList&lt;hidelist&gt;' () {\n        this.gtipRT('列表关闭');\n    }\n});</pre></div><h3 class=\"_f\">更新列表</h3><div class=\"_B _ai\"><input class=\"_ap\" mx-input=\"\u001f\u001eupdateList()\"><div mx-view=\"mx-suggest/index?list=<%@$$.list2%>\" class=\"_af _ah\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-suggest\n    class=\"input\"\n    list=\"&lt;%@list2%&gt;\"\n    mx-input=\"updateList()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet $ = require('$');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list2: []\n        });\n    },\n    'updateList&lt;input&gt;' (e) {\n        let target = $(e.eventTarget);\n        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];\n        let v = $.trim(target.val());\n        let newList = [];\n        if (v) {\n            if (v.indexOf('@') == -1) {\n                for (let a of list) {\n                    newList.push(v + '@' + a);\n                }\n            } else {\n                let parts = v.split('@');\n                for (let a of list) {\n                    if (a.indexOf(parts[1]) >= 0) {\n                        newList.push(parts[0] + '@' + a);\n                    }\n                }\n            }\n        }\n        target.invokeView('update', [newList]);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
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
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Linkage = require("../../mx-checkbox/linkage");
Magix.applyStyle("_e","._aQ{background:red}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-table</h2><h3>固定表头</h3><div class=\"_B _ai\"><div mx-view=\"mx-table/sticky\"><table class=\"_aA _aB\"><thead><tr><th colspan=\"3\">合并列测试</th><th colspan=\"3\">合并列测试</th></tr><tr><th><input type=\"checkbox\" class=\"_as\" linkage=\"example1\"></th><%for(var _=0;_<5;_++){%><th>示例字段<%=_%></th><%}%></tr></thead><tbody><%for(var a=0;a<10;a++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example1\" value=\"ex1_<%=a%>\"></td><%for(var b=0;b<5;b++){%><td>示例字段内容<%=b%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-vframe src=\"app/gallery/mx-table/sticky\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example1\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example1\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 class=\"_f\">固定列</h3><div class=\"_B _ai\"><div mx-view=\"mx-table/index?rwdRange=2%2C-1\"><table class=\"_aA _aB\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"_as\" linkage=\"example2\"></th><%for(var c=0;c<25;c++){%><th style=\"width:200px\">示例字段<%=c%></th><%}%><th style=\"width:100px\">操作</th><th style=\"width:200px\">操作</th></tr></thead><tbody><%for(var d=0;d<10;d++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example2\" value=\"ex1_<%=d%>\"></td><%for(var e=0;e<25;e++){%><td>示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容<%=e%></td><%}%><td><a href=\"#\">删除</a><br><a href=\"#\">报告</a><br><%if(d%3){%><a href=\"#\">代码</a><br><a href=\"#\">备注</a><br><a href=\"#\">更多</a><br><%}%></td><td>adf</td></tr><%}%></tbody></table></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-table rwd-range=\"2,-1\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example2\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n                &lt;th style=\"width:100px\"&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example2\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n                &lt;td&gt;\n                    &lt;a href=\"#\"&gt;删除&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;报告&lt;/a&gt;&lt;br /&gt;\n                    &lt;%if(i%3){%&gt;\n                    &lt;a href=\"#\"&gt;代码&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;备注&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href=\"#\"&gt;更多&lt;/a&gt;&lt;br /&gt;\n                    &lt;%}%&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><h3 class=\"_f\">固定列和表头</h3><div class=\"_B _ai\"><div mx-view=\"mx-table/index?rwdRange=2%2C-2&sticky=true&rowHoverClass=_aQ\"><table class=\"_aA _aB\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"_as\" linkage=\"example3\"></th><%for(var f=0;f<25;f++){%><th style=\"width:200px\">示例字段<%=f%></th><%}%></tr></thead><tbody><%for(var g=0;g<10;g++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example3\" value=\"ex1_<%=g%>\"></td><%for(var h=0;h<25;h++){%><td>示例字段内容<%=h%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-vframe src=\"app/gallery/mx-table/index\" rwd-range=\"2,-2\" sticky=\"true\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example3\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example3\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div><h3 class=\"_f\">自由组装</h3><div>当需要高度自定义时，可以使用该模式，按要求处理相应的内容即可</div><div class=\"_B _ai\"><div mx-view=\"mx-table/attach?sticky=true&rowHoverClass=_aQ\"><div table-role=\"main\"><table class=\"_aA _aB\" style=\"width:4140px\"><thead><tr><th rowspan=\"2\" style=\"width:140px\"></th><th rowspan=\"2\" style=\"width:2600px\">eee</th><th colspan=\"2\">bb</th><th colspan=\"3\">xxxx</th><th colspan=\"2\"></th></tr><tr><th style=\"width:200px;\">111</th><th style=\"width:200px;\">111</th><th style=\"width:200px;\">111</th><th style=\"width:200px;\">111</th><th style=\"width:200px;\">111</th><th style=\"width:200px;\"></th><th style=\"width:200px;\"></th></tr></thead><tbody><tr><td style=\"width:140px\"></td><td style=\"width:2600px\">1111</td><td style=\"width:200px\">2222</td><td style=\"width:200px\">333</td><td style=\"width:200px\">aaa</td><td style=\"width:200px\">1111</td><td style=\"width:200px\">2222</td><td style=\"width:200px\"></td><td style=\"width:200px\"></td></tr><tr><td></td><td>1111</td><td>2222</td><td>333<br>eeeeee</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr><tr><td></td><td>1111<br>aaaa</td><td>2222</td><td>333</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr></tbody></table></div><table class=\"_aA _aB\" table-role=\"left-sticky\" style=\"width:140px;\"><thead><tr><th style=\"width:140px;height:85px;\">aa</th></tr></thead><tbody><tr><td>aaa</td></tr><tr><td>aaa</td></tr><tr><td>aaa</td></tr></tbody></table><table class=\"_aA _aB\" style=\"width:400px;\" table-role=\"right-sticky\"><thead><tr><th colspan=\"2\">测试</th></tr><tr><th style=\"width:200px;\">测试1</th><th style=\"width:200px;\">测试2</th></tr></thead><tbody><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr></tbody></table></div></div><div style=\"color:red\">使用该模式需要注意以下几点<br>1. 请注意下面模板中的table-role属性，其中table-role=\"main\"一定放在div上，紧跟其后的是左右固定列的表格<br>2. 3个表格(左右固定的表格可以根据需要进行删除，比如只留右侧固定)需要自己算出占用的实际宽度<br>3. 请确保3个表格的thead保持同样的高度</div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-table.attach sticky=\"true\"&gt;\n    &lt;div table-role=\"main\"&gt;\n        &lt;table class=\"table table-striped\" style=\"width:4140px\"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th rowspan=\"2\" style=\"width:140px\"&gt;&lt;/th&gt;\n                    &lt;th rowspan=\"2\" style=\"width:2600px\"&gt;eee&lt;/th&gt;\n                    &lt;th colspan=\"2\"&gt;bb&lt;/th&gt;\n                    &lt;th colspan=\"3\"&gt;xxxx&lt;/th&gt;\n                    &lt;th colspan=\"2\"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;111&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;&lt;/th&gt;\n                    &lt;th style=\"width:200px;\"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td style=\"width:140px\"&gt;&lt;/td&gt;\n                    &lt;td style=\"width:2600px\"&gt;1111&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;2222&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;333&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;aaa&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;1111&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;2222&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;&lt;/td&gt;\n                    &lt;td style=\"width:200px\"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;br /&gt;eeeeee&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;br /&gt;aaaa&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/div&gt;\n    &lt;table class=\"table table-striped\" table-role=\"left-sticky\" style=\"width:140px;\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:140px;height:85px;\"&gt;aa&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class=\"table table-striped\" style=\"width:400px;\" table-role=\"right-sticky\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th colspan=\"2\"&gt;测试&lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:200px;\"&gt;测试1&lt;/th&gt;\n                &lt;th style=\"width:200px;\"&gt;测试2&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.attach&gt;</pre></div><h3 class=\"_f\">旧版</h3><div class=\"_B _ai\"><div mx-view=\"mx-table/rwd?rwdRange=2%2C-2\"><table class=\"_aA _aB\"><thead><tr><th style=\"width:50px\"><input type=\"checkbox\" class=\"_as\" linkage=\"example4\"></th><%for(var i=0;i<25;i++){%><th style=\"width:200px\">示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var j=0;j<10;j++){%><tr><td><input type=\"checkbox\" class=\"_as\" linkage-parent=\"example4\" value=\"ex1_<%=j%>\"></td><%for(var k=0;k<25;k++){%><td>示例字段内容<%=k%></td><%}%></tr><%}%></tbody></table></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-vframe src=\"app/gallery/mx-table/rwd\"&gt;\n    &lt;table class=\"table table-striped\"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style=\"width:50px\"&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage=\"example4\" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style=\"width:200px\"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type=\"checkbox\" class=\"checkbox\" linkage-parent=\"example4\" value=\"ex1_&lt;%=i%&gt;\" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-vframe&gt;</pre></div>"},
    mixins: [Linkage],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});
/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-taginput</h2><h3>默认情形</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"_f\">默认选中</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    selected=\"&lt;%@ selected %&gt;\"\n    placeholder=\"请选择分类\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    selected=\"&lt;%@ selected %&gt;\"\n    placeholder=\"请选择分类\"\n    disabled=\"true\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"_f\">数据列表为对象</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ userList %&gt;\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    placeholder=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowUserIds()\" class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ userList %&gt;\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    placeholder=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    mx-change=\"showUserIds()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10'],\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    'showUserIds&lt;change&gt;' (e) {\n        this.gtipRT('选中的用户ids:'+e.ids);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"_B _ai\"><div mx-change=\"\u001f\u001etest()\" mx-view=\"mx-time/index?time=00%3A12%3A13&types=minute%2Csecond\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-time\n    time=\"00:12:13\"\n    types=\"minute,second\"\n    mx-change=\"test()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'test&lt;change&gt;' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../picker");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var c = 10;
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time.picker</h2><div class=\"_B _ai\"><input value=\"<%=$$.time%>\" class=\"_ap\"><div mx-view=\"mx-time/picker?types=hour%2Cminute\" class=\"_af _ah\"></div><button mx-click=\"\u001f\u001eupdate()\">update</button></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-time.picker\n    value=\"18:26:00\"\n    class=\"input\"\n    types=\"hour,minute\" /&gt;</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-tree</h2><div class=\"_B _ai\" style=\"margin-left:30px;\"><div mx-view=\"mx-tree/index?list=<%@$$.list%>\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-tree list=\"&lt;%@list%&gt;\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: 'abc'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: 'abc-abc'\n            }, {\n                id: 1,\n                pId: 0,\n                text: 'def'\n            }, {\n                id: 2,\n                pId: 1,\n                text: 'aaa'\n            }, {\n                id: 3,\n                pId: 2,\n                text: 'bbb'\n            }]\n        });\n    }\n});</pre></div>"},
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
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-uploader/__test__/index",["magix","../index","mx-progress/index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("mx-progress/index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-uploader</h2><div class=\"_B _ai\"><div class=\"_an _ao _aa\" mx-start=\"\u001f\u001eshowStart()\" mx-error=\"\u001f\u001eshowError()\" mx-success=\"\u001f\u001eshowSuccess()\" mx-progress=\"\u001f\u001eshowProgress()\" mx-view=\"mx-uploader/index?path=mx-uploader%2Findex&action=.%2Findex.html&name=file1&multiple=true\">上传文件</div><div class=\"_aa _v\" mx-view=\"mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-uploader\n    class=\"btn btn-brand fl\"\n    action=\"./index.html\"\n    name=\"file1\"\n    multiple=\"true\"\n    mx-error=\"showError()\"\n    mx-success=\"showSuccess()\"\n    mx-progress=\"showProgress()\"\n&gt;上传文件&lt;/mx-uploader&gt;\n&lt;mx-progress value=\"&lt;%=percent%&gt;\" fixed=\"2\" class=\"fl ml20\" /&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    'showError&lt;error&gt;'(e) {\n        console.log(e.error);\n    },\n    'showSuccess&lt;success&gt;'(e) {\n        console.log(e.response);\n    },\n    'showProgress&lt;progress&gt;'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>"},
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