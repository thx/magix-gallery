let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(options) {
        let that = this;
        that.options = options
        that.fb = window.Feedback
        if (that.fb) {
            that.fb.config({
                nickname: window.UserInfo.loginUser.nickname,
                forms: [{
                    id: 15
                }, {
                    hook: that.id, //绑定到对应的节点
                    id: that.options.feedId
                }]
            });
        }
        that.on('destroy', function () {
            if (that.fb) {
                that.fb.config({
                    nickname: window.UserInfo.loginUser.nickname,
                    forms: [{
                        id: 15
                    }]
                });
            }
        })
    },
    render() {
        let that = this;

        that.updater.digest({
            viewId: that.id,
            content: that.options.content
        })
    }
});
