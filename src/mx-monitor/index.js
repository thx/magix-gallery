/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-monitor/index',["$"],function(require,exports,module){
/*$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var $ = require('$');
var ICounter = 0;
var Instances = [];
var Doc = $(document);
var Win = $(window);
var Watcher = function (e) {
    for (var i = Instances.length; i--;) {
        var info = Instances[i];
        if (info['_cw']) {
            Instances.splice(i, 1);
        }
        else {
            var view = info['_cx'];
            if (e.type != 'mousedown' || !view['_i'](e.target)) {
                view['_a']();
            }
        }
    }
};
var Remove = function (view) {
    var info = Instances[view.id];
    if (info) {
        info['_cw'] = true;
    }
    delete Instances[view.id];
};
module.exports = {
    '_k': function (view) {
        Remove(view);
        var info = {
            '_cx': view
        };
        Instances.push(info);
        Instances[view.id] = info;
    },
    '_f': Remove,
    '_d': function () {
        if (!ICounter) {
            Doc.on('mousedown', Watcher);
            Win.on('resize', Watcher);
        }
        ICounter++;
    },
    '_g': function () {
        if (ICounter > 0) {
            ICounter--;
            if (!ICounter) {
                Doc.off('mousedown', Watcher);
                Win.off('resize', Watcher);
            }
        }
    }
};

});