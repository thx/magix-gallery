/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-monitor/index",["$"],(require,exports,module)=>{
/*$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var $ = require("$");
var ICounter = 0;
var Instances = [];
var Doc = $(document);
var Win = $(window);
var Watcher = function (e) {
    for (var i = Instances.length; i--;) {
        var info = Instances[i];
        if (info['__dI']) {
            Instances.splice(i, 1);
        }
        else {
            var view = info['__dJ'];
            if (e.type == 'resize' || !view['__j'](e.target)) {
                view['__a']();
            }
        }
    }
};
var Remove = function (view) {
    var info = Instances[view.id];
    if (info) {
        info['__dI'] = true;
    }
    delete Instances[view.id];
};
module.exports = {
    '__l': function (view) {
        Remove(view);
        var info = {
            '__dJ': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '__g': Remove,
    '__d': function () {
        if (!ICounter) {
            Doc.on('mousedown keyup', Watcher);
            Win.on('resize', Watcher);
        }
        ICounter++;
    },
    '__h': function () {
        if (ICounter > 0) {
            ICounter--;
            if (!ICounter) {
                Doc.off('mousedown keyup', Watcher);
                Win.off('resize', Watcher);
            }
        }
    }
};

});