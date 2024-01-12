import { lazy } from 'react';
export var MainPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./MainPage')); }, 1500);
}); });
