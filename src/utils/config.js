const STORAGE_SETTING = 'settings';
const STORAGE_TOKEN = 'news-token';
const STORAGE_LANGUAGE = 'i18n';
export const STORAGE_APP = 'news-app';

/**
 * =========== Storage ===========
 */
const getStorage = (storageName, isParse = true) => {
    const rawValue = localStorage.getItem(storageName);

    if (rawValue === null) {
        return null;
    }

    return isParse ? JSON.parse(rawValue) : rawValue;
};

const setStorage = (storageName, value, isStringify = true) => {
    const rawValue = isStringify ? JSON.stringify(value) : value;
    localStorage.setItem(storageName, rawValue);
};

const updateStorage = (storageName, value) => {
    let initValues = getStorage(storageName);

    if (initValues === null) initValues = {};

    const newValues = Object.assign({}, initValues, value);

    localStorage.setItem(storageName, JSON.stringify(newValues));
};

const removeStorage = (storageName) => {
    localStorage.removeItem(storageName);
};

/* ================= Token ================= */

export const configToken = {
    get() {
        return getStorage(STORAGE_TOKEN, false);
    },
    set(value) {
        setStorage(STORAGE_TOKEN, value, false);
    },
    remove() {
        removeStorage(STORAGE_TOKEN);
    },
};

export const configSettings = {
    get() {
        return getStorage(STORAGE_SETTING);
    },
    set(value) {
        setStorage(STORAGE_SETTING, value);
    },
    remove() {
        removeStorage(STORAGE_SETTING);
    },
};

/* ================= Language ================= */
export const configLanguage = {
    get() {
        return getStorage(STORAGE_LANGUAGE, false);
    },
    set(value) {
        return setStorage(STORAGE_LANGUAGE, value, false);
    },
};

/* ================= Application Init ================= */
export const configAppInit = {
    get(key = '') {
        let values = getStorage(STORAGE_APP);
        if (values && key !== '') {
            return values[key];
        }

        return values;
    },
    set(value) {
        return updateStorage(STORAGE_APP, value);
    },
    remove(key = '') {
        removeStorage(STORAGE_APP);
    },
};
