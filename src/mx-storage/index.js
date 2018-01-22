/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-storage/index",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.1
*/
var Magix = require("magix");
var StorageService = {}, StorageUpdateTime, Backend, Test = false, StorageLink, StorageData = {};
Backend = 'localStorage';
var UpdateStorage = function () {
    var updateTime = (+new Date()).toString();
    var dataString = JSON.stringify(StorageData);
    StorageService['__eL'] = dataString;
    StorageService['__eM'] = updateTime;
    if ('__eN' == Backend) {
        StorageLink.setAttribute('__eM', updateTime);
        StorageLink.setAttribute('__eL', dataString);
        StorageLink.save('__eO');
    }
};
var StorageAPI = Magix.mix({
    set: function (key, value) {
        StorageData[key] = value;
        UpdateStorage();
    },
    get: function (key) {
        return StorageData[key];
    },
    del: function (key) {
        delete StorageData[key];
        UpdateStorage();
    }
}, Magix.Event);
if (Backend in window) {
    try {
        localStorage.setItem(Backend, Magix.guid());
        Test = true;
        localStorage.removeItem(Backend);
    }
    catch (ignore) { }
}
if (Test) {
    StorageService = localStorage;
    StorageUpdateTime = StorageService['__eM'];
}
else {
    Backend = 'globalStorage';
    if (Backend in window) {
        try {
            var globalStorage = window[Backend];
            StorageService = 'localhost' == location.hostname ? globalStorage['__eP'] : globalStorage[location.hostname];
            StorageUpdateTime = StorageService['__eM'];
        }
        catch (n) { }
    }
    else {
        StorageLink = document.createElement('link');
        if (StorageLink.addBehavior) {
            StorageLink.style.behavior = 'url(#default#userData)';
            document.getElementsByTagName('head')[0].appendChild(StorageLink);
            try {
                StorageLink.load('__eO');
            }
            catch (i) {
                StorageLink.setAttribute('__eO', '{}');
                StorageLink.save('__eO');
                StorageLink.load('__eO');
            }
            var data = '{}';
            try {
                data = StorageLink.getAttribute('__eO');
                StorageUpdateTime = StorageLink.getAttribute('__eM');
            }
            catch (g) { }
            Backend = '__eN';
            StorageService['__eL'] = data;
        }
    }
}
var CheckedChange = function () {
    var currentUpdate;
    clearTimeout(CheckedChange.timer);
    CheckedChange.timer = setTimeout(function () {
        if ('__eN' == Backend) {
            StorageLink.load('__eO');
            try {
                currentUpdate = StorageLink.getAttribute('__eM');
            }
            catch (t) { }
        }
        else {
            currentUpdate = StorageService['__eM'];
        }
        if (currentUpdate) {
            if (currentUpdate != StorageUpdateTime) {
                StorageUpdateTime = currentUpdate;
                var newData = void 0, dataString = '{}';
                if ('__eN' == Backend) {
                    StorageLink.load('__eO');
                    try {
                        dataString = StorageLink.getAttribute('__eO');
                    }
                    catch (t) { }
                    StorageService['__eL'] = dataString;
                }
                newData = JSON.parse(StorageService['__eL']);
                var keys = Magix.keys(StorageData).concat(Magix.keys(newData)), locker = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (locker[key] !== 1) {
                        locker[key] = 1;
                        var value1 = JSON.stringify(StorageData[key]);
                        var value2 = JSON.stringify(newData[key]);
                        if (value2 != value1) {
                            StorageAPI.fire('change', {
                                key: key,
                                from: StorageData[key],
                                to: newData[key]
                            });
                        }
                    }
                }
                StorageData = newData;
            }
        }
    }, 25);
};
if ('addEventListener' in window) {
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            CheckedChange();
        }
    }, false);
}
if (Backend == '__eN') {
    setInterval(CheckedChange, 1000);
}
else {
    if ('addEventListener' in window) {
        window.addEventListener('storage', CheckedChange, false);
    }
    else {
        document.attachEvent('onstorage', CheckedChange);
    }
}
if (StorageService['__eL']) {
    try {
        StorageData = JSON.parse(StorageService['__eL']);
    }
    catch (e) {
        StorageService['__eL'] = '{}';
    }
}
else {
    StorageService['__eL'] = '{}';
}
module.exports = StorageAPI;

});