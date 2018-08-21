/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-monitor/index",["$"],(require,exports,module)=>{
/*$*/

var $ = require("$");
var ICounter = 0;
var Instances = [];
var Doc = $(document);
var Win = $(window);
var Watcher = function (e) {
    for (var i = Instances.length; i--;) {
        var info = Instances[i];
        if (info['@{destroyed}']) {
            Instances.splice(i, 1);
        }
        else {
            var view = info['@{view}'];
            if (e.type == 'resize' || !view['@{inside}'](e.target)) {
                view['@{hide}']();
            }
        }
    }
};
var Remove = function (view) {
    var info = Instances[view.id];
    if (info) {
        info['@{destroyed}'] = true;
    }
    delete Instances[view.id];
};
module.exports = {
    '@{add}': function (view) {
        Remove(view);
        var info = {
            '@{view}': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '@{remove}': Remove,
    '@{setup}': function () {
        if (!ICounter) {
            Doc.on('mousedown keyup', Watcher);
            Win.on('resize', Watcher);
        }
        ICounter++;
    },
    '@{teardown}': function () {
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