/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-storage/index",["magix"],(require,exports,module)=>{
/*Magix*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var StorageService = {}, StorageUpdateTime, Backend, Test = false, StorageLink, StorageData = {};
Backend = 'localStorage';
var UpdateStorage = function () {
    var updateTime = (+new Date()).toString();
    var dataString = JSON.stringify(StorageData);
    StorageService['@{store.data}'] = dataString;
    StorageService['@{update.time}'] = updateTime;
    if ('@{user.data}' == Backend) {
        StorageLink.setAttribute('@{update.time}', updateTime);
        StorageLink.setAttribute('@{store.data}', dataString);
        StorageLink.save('@{storage}');
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
    StorageUpdateTime = StorageService['@{update.time}'];
}
else {
    Backend = 'globalStorage';
    if (Backend in window) {
        try {
            var globalStorage = window[Backend];
            StorageService = 'localhost' == location.hostname ? globalStorage['@{localhost.localdomain}'] : globalStorage[location.hostname];
            StorageUpdateTime = StorageService['@{update.time}'];
        }
        catch (n) { }
    }
    else {
        StorageLink = document.createElement('link');
        if (StorageLink.addBehavior) {
            StorageLink.style.behavior = 'url(#default#userData)';
            document.getElementsByTagName('head')[0].appendChild(StorageLink);
            try {
                StorageLink.load('@{storage}');
            }
            catch (i) {
                StorageLink.setAttribute('@{storage}', '{}');
                StorageLink.save('@{storage}');
                StorageLink.load('@{storage}');
            }
            var data = '{}';
            try {
                data = StorageLink.getAttribute('@{storage}');
                StorageUpdateTime = StorageLink.getAttribute('@{update.time}');
            }
            catch (g) { }
            Backend = '@{user.data}';
            StorageService['@{store.data}'] = data;
        }
    }
}
var CheckedChange = function () {
    var currentUpdate;
    clearTimeout(CheckedChange.timer);
    CheckedChange.timer = setTimeout(function () {
        if ('@{user.data}' == Backend) {
            StorageLink.load('@{storage}');
            try {
                currentUpdate = StorageLink.getAttribute('@{update.time}');
            }
            catch (t) { }
        }
        else {
            currentUpdate = StorageService['@{update.time}'];
        }
        if (currentUpdate) {
            if (currentUpdate != StorageUpdateTime) {
                StorageUpdateTime = currentUpdate;
                var newData = void 0, dataString = '{}';
                if ('@{user.data}' == Backend) {
                    StorageLink.load('@{storage}');
                    try {
                        dataString = StorageLink.getAttribute('@{storage}');
                    }
                    catch (t) { }
                    StorageService['@{store.data}'] = dataString;
                }
                newData = JSON.parse(StorageService['@{store.data}']);
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
if (Backend == '@{user.data}') {
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
if (StorageService['@{store.data}']) {
    try {
        StorageData = JSON.parse(StorageService['@{store.data}']);
    }
    catch (e) {
        StorageService['@{store.data}'] = '{}';
    }
}
else {
    StorageService['@{store.data}'] = '{}';
}
module.exports = StorageAPI;

});