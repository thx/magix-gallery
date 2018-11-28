//#gallery-config
module.exports = {
    'mx-im.ww'(i) {
        //旺旺
        let a = i.seprateAttrs('a');
        return `<a target="_blank" href="//awp.taobao.com/bs/wwlight.html?ver=3&touid=${a.viewAttrsMap.uid}&siteid=cntaobao&status=2&charset=utf-8" ${a.attrs}>
            <img src="//amos.alicdn.com/online.aw?v=2&uid=${a.viewAttrsMap.uid}&site=cntaobao&s=2&charset=utf-8"/>
        </a>`;
    },
    'mx-im.dd'(i) {
        //钉钉
        let a = i.seprateAttrs('a');
        return `<a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=${a.viewAttrsMap.uid}" ${a.attrs}>
        <i class="mc-iconfont color-brand">&#xe677;</i>${a.viewAttrsMap.uname}
    </a>`;
    }
}