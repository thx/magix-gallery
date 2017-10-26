/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-storage/index',["magix"],function(require,exports,module){
/*Magix*/

/*
ver:1.3.1
*/
var Magix = require('magix');
var StorageService = {}, StorageUpdateTime, Backend, Test = false, StorageLink, StorageData = {};
Backend = 'localStorage';
var UpdateStorage = function () {
    var updateTime = (+new Date()).toString();
    var dataString = JSON.stringify(StorageData);
    StorageService['_du'] = dataString;
    StorageService['_dv'] = updateTime;
    if ('_dw' == Backend) {
        StorageLink.setAttribute('_dv', updateTime);
        StorageLink.setAttribute('_du', dataString);
        StorageLink.save('_dx');
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
    StorageUpdateTime = StorageService['_dv'];
}
else {
    Backend = 'globalStorage';
    if (Backend in window) {
        try {
            var globalStorage = window[Backend];
            StorageService = 'localhost' == location.hostname ? globalStorage['_dy'] : globalStorage[location.hostname];
            StorageUpdateTime = StorageService['_dv'];
        }
        catch (n) { }
    }
    else {
        StorageLink = document.createElement('link');
        if (StorageLink.addBehavior) {
            StorageLink.style.behavior = 'url(#default#userData)';
            document.getElementsByTagName('head')[0].appendChild(StorageLink);
            try {
                StorageLink.load('_dx');
            }
            catch (i) {
                StorageLink.setAttribute('_dx', '{}');
                StorageLink.save('_dx');
                StorageLink.load('_dx');
            }
            var data = '{}';
            try {
                data = StorageLink.getAttribute('_dx');
                StorageUpdateTime = StorageLink.getAttribute('_dv');
            }
            catch (g) { }
            Backend = '_dw';
            StorageService['_du'] = data;
        }
    }
}
var CheckedChange = function () {
    var currentUpdate;
    clearTimeout(CheckedChange.timer);
    CheckedChange.timer = setTimeout(function () {
        if ('_dw' == Backend) {
            StorageLink.load('_dx');
            try {
                currentUpdate = StorageLink.getAttribute('_dv');
            }
            catch (t) { }
        }
        else {
            currentUpdate = StorageService['_dv'];
        }
        if (currentUpdate) {
            if (currentUpdate != StorageUpdateTime) {
                StorageUpdateTime = currentUpdate;
                var newData = void 0, dataString = '{}';
                if ('_dw' == Backend) {
                    StorageLink.load('_dx');
                    try {
                        dataString = StorageLink.getAttribute('_dx');
                    }
                    catch (t) { }
                    StorageService['_du'] = dataString;
                }
                newData = JSON.parse(StorageService['_du']);
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
if (Backend == '_dw') {
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
if (StorageService['_du']) {
    try {
        StorageData = JSON.parse(StorageService['_du']);
    }
    catch (e) {
        StorageService['_du'] = '{}';
    }
}
else {
    StorageService['_du'] = '{}';
}
module.exports = StorageAPI;

});