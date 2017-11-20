/*
ver:1.3.7
*/
let Magix = require('magix');
let StorageService = {},
    StorageUpdateTime,
    Backend, Test = false,
    StorageLink,
    StorageData = {};
Backend = 'localStorage';


let UpdateStorage = () => {
    let updateTime = (+new Date()).toString();
    let dataString = JSON.stringify(StorageData);
    StorageService['@{store.data}'] = dataString;
    StorageService['@{update.time}'] = updateTime;
    if ('@{user.data}' == Backend) {
        StorageLink.setAttribute('@{update.time}', updateTime);
        StorageLink.setAttribute('@{store.data}', dataString);
        StorageLink.save('@{storage}');
    }
};

let StorageAPI = Magix.mix({
    set(key, value) {
        StorageData[key] = value;
        UpdateStorage();
    },
    get(key) {
        return StorageData[key];
    },
    del(key) {
        delete StorageData[key];
        UpdateStorage();
    }
}, Magix.Event);
if (Backend in window) {
    try {
        localStorage.setItem(Backend, Magix.guid());
        Test = true;
        localStorage.removeItem(Backend);
    } catch (ignore) { }
}
if (Test) {
    StorageService = localStorage;
    StorageUpdateTime = StorageService['@{update.time}'];
} else {
    Backend = 'globalStorage';
    if (Backend in window) {
        try {
            let globalStorage = window[Backend];
            StorageService = 'localhost' == location.hostname ? globalStorage['@{localhost.localdomain}'] : globalStorage[location.hostname];
            StorageUpdateTime = StorageService['@{update.time}'];
        } catch (n) { }
    } else {
        StorageLink = document.createElement('link');
        if (StorageLink.addBehavior) {
            StorageLink.style.behavior = 'url(#default#userData)';
            document.getElementsByTagName('head')[0].appendChild(StorageLink);
            try {
                StorageLink.load('@{storage}');
            } catch (i) {
                StorageLink.setAttribute('@{storage}', '{}');
                StorageLink.save('@{storage}');
                StorageLink.load('@{storage}');
            }
            let data = '{}';
            try {
                data = StorageLink.getAttribute('@{storage}');
                StorageUpdateTime = StorageLink.getAttribute('@{update.time}');
            } catch (g) { }
            Backend = '@{user.data}';
            StorageService['@{store.data}'] = data;
        }
    }
}
let CheckedChange = () => {
    var currentUpdate;
    clearTimeout(CheckedChange.timer);
    CheckedChange.timer = setTimeout(function () {
        if ('@{user.data}' == Backend) {
            StorageLink.load('@{storage}');
            try {
                currentUpdate = StorageLink.getAttribute('@{update.time}');
            } catch (t) { }
        } else {
            currentUpdate = StorageService['@{update.time}'];
        }
        if (currentUpdate) {
            if (currentUpdate != StorageUpdateTime) {
                StorageUpdateTime = currentUpdate;
                let newData, dataString = '{}';
                if ('@{user.data}' == Backend) {
                    StorageLink.load('@{storage}');
                    try {
                        dataString = StorageLink.getAttribute('@{storage}');
                    } catch (t) { }
                    StorageService['@{store.data}'] = dataString;
                }
                newData = JSON.parse(StorageService['@{store.data}']);
                let keys = Magix.keys(StorageData).concat(Magix.keys(newData)),
                    locker = {};
                for (let key of keys) {
                    if (locker[key] !== 1) {
                        locker[key] = 1;
                        let value1 = JSON.stringify(StorageData[key]);
                        let value2 = JSON.stringify(newData[key]);
                        if (value2 != value1) {
                            StorageAPI.fire('change', {
                                key,
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
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            CheckedChange();
        }
    }, false);
}
if (Backend == '@{user.data}') {
    setInterval(CheckedChange, 1000);
} else {
    if ('addEventListener' in window) {
        window.addEventListener('storage', CheckedChange, false);
    } else {
        document.attachEvent('onstorage', CheckedChange);
    }
}
if (StorageService['@{store.data}']) {
    try {
        StorageData = JSON.parse(StorageService['@{store.data}']);
    } catch (e) {
        StorageService['@{store.data}'] = '{}';
    }
} else {
    StorageService['@{store.data}'] = '{}';
}
module.exports = StorageAPI;