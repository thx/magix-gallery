/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
        if (info['__cf']) {
            Instances.splice(i, 1);
        }
        else {
            var view = info['__cg'];
            if (e.type == 'resize' || !view['__k'](e.target)) {
                view['__m']();
            }
        }
    }
};
var Remove = function (view) {
    var info = Instances[view.id];
    if (info) {
        info['__cf'] = true;
    }
    delete Instances[view.id];
};
module.exports = {
    '__p': function (view) {
        Remove(view);
        var info = {
            '__cg': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '__g': Remove,
    '__f': function () {
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