let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@72.html',
    render() {
        this.updater.digest({
            list: [{
                text: "<div>\n\t亲爱的cbp测试账号997掌柜：\n</div>\n<div>\n\t<span style=\"white-space:pre\">\t</span>AI智能助手发现您的计划昨日<span style=\"color:#ff0000;\">未获取到广告展现流量</span>，AI智能助手为您提供了一个优化建议，帮助您<span style=\"color:#ff0000;\">获取稳定的展现流量</span>（如已采纳，请忽略），一键<span style=\"color:#00A145;\">智能托管</span>优质宝贝，算法全自动优化效果，太爽了！<a href=\"https://subway.simba.taobao.com/#!/manage/add/index?campType=8&addType=campaign\" target=\"_blank\"><span style=\"color:#3366ff;\">我要试试</span></a>\n</div>\n<div>\n\t<br />\n\t\n</div>\n<div>\n\t阿里妈妈\n</div>",
            }, {
                text: `<div>文案</div>
                    <div>文案</div>
                    <a class="color-brand" href="https://www.taobao.com/" data-spm-click="gostr=/alimama_bp.4.1;locaid=de6a622e4">链接1</a>
                    <div>文案</div>
                    <div>文案</div>
                    <a class="color-brand" href="https://www.tmall.com/" data-spm-click="gostr=/alimama_bp.4.1;locaid=de0e02c98">链接2</a>
                `
            }, {
                text: "<span style=\"font-size:16px;\"><span style=\"font-family:微软雅黑;\">掌柜您好</span><br /></span><div class=\"lake-content\" typography=\"classic\"><span class=\"ne-text\"><span style=\"font-size:16px;\"><span style=\"white-space:pre\">\t</span>欢迎您将投放过程中遇到的问题或建议填写在下方问卷内，我们将根据您的反馈不断进行产品优化，感谢您的支持。</span></span></div><span style=\"font-size:16px;\"><span style=\"font-family:微软雅黑;\"><span style=\"white-space:pre\">\t</span><a href=\"https://www.yuque.com/u209206/wyiadn/lrun18\" target=\"_blank\"><strong><span style=\"color:#3366ff;\">常驻入口：https://www.yuque.com/u209206/wyiadn/lrun18</span></strong></a><br /><br /></span></span><div style=\"text-align: right;\"><span style=\"font-family: Arial, Helvetica, sans-serif;\">阿里妈妈引力魔方</span></div>",
            }, {
                text: "<p class=\"ne-p\" id=\"u70381c16\" style=\"margin: 0px; padding: 0px;\"><span class=\" __aliyun_node_has_color __aliyun_node_has_color\" style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px;\"><span style=\"font-size:16px;\">掌柜您好</span></span></p><p class=\"ne-p\" id=\"ue7823183\" style=\"margin: 0px; padding: 0px;\"><span class=\" __aliyun_node_has_color __aliyun_node_has_color\" style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px;\"><span style=\"font-size:16px;\"><span style=\"white-space:pre\">\t</span>随着产品不断升级迭代，<strong>超级推荐&amp;超级钻展<span style=\"color:#ff0000;\">将于1月20日起逐步下线，届时旧平台中流量将逐渐减小</span>，若您在超级推荐&amp;钻展中仍有在投的计划，请尽快转移至引力魔方内，避免影响您店铺流量获取！</strong></span></span></p><p class=\"ne-p\" id=\"u69bcc638\" style=\"margin: 0px; padding: 0px;\"><span class=\" __aliyun_node_has_color __aliyun_node_has_color\" style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px;\"><span style=\"font-size:16px;\"><span style=\"white-space:pre\">\t</span>同时引力魔方在1月&amp;2月将打造全新的产品能力，包括促进加购与成交下提供分人群/资源位出价、支持营销目标切换、人群经营洞察&amp;报表引导提效等等，为您在引力魔方内提供更佳的投放体验，敬请期待！</span></span></p><p class=\"ne-p\" id=\"u42b07a1b\" style=\"text-align: right; margin: 0px; padding: 0px;\"><span class=\" __aliyun_node_has_color __aliyun_node_has_color\" style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px;\"><span style=\"font-size:16px;\">阿里妈妈引力魔方</span></span></p>"
            }]
        });
    }
});