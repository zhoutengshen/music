export const debounce = function (func = () => { }, delay = 0) {
    let isWaiting = true;
    let timerId = -1;
    return function (...rest) {
        clearTimeout(timerId);
        if (!isWaiting) {
            isWaiting = true;
            return func(...rest);
        } else {
            timerId = setTimeout(() => {
                isWaiting = false;
            }, delay);
        }

    }
}

export const throttl = function (func, delay) {
    let preTime = Number.MIN_VALUE;
    return function (...rest) {
        const nowTime = Date.now();
        if (nowTime - preTime > delay) {
            preTime = nowTime;
            return func(rest);
        }
    }
}


export const reComputedClientWidth = () => {
    window.onresize = throttl(() => {
        const dcm = document.documentElement;
        const baseWidth = 375;
        const baseFontSize = (document.documentElement.getBoundingClientRect().width / baseWidth * 10) / 10000 * 10000;
        dcm.style.fontSize = baseFontSize + 'px';
    }, 200);
}


export const ramdomStr = (
    () => {
        let ascalStr = "";
        const chart_A_ascal = "A".charCodeAt();
        const chart_z_ascal = "z".charCodeAt();
        for (let i = chart_A_ascal; i <= chart_z_ascal; i++) {
            ascalStr += String.fromCharCode(i);
        }
        return (lenth = 10) => {
            let targeStr = "";
            let randomIndex = 0
            for (let i = 0; i < lenth; i++) {
                randomIndex = Math.random(0, 1) * (chart_z_ascal - chart_A_ascal) | 0;
                targeStr += ascalStr[randomIndex]
            }
            return targeStr;
        }
    }
)();

export const deviceType = (() => {
    let type = "";
    if (!global) {
        const useAgen = window.navigator.userAgent;
        const isIos = /.+iPhone.+/i;
        const isIpad = /.+iPad.+/i;
        const isAndroid = /.+Android.+/i;
        if (isIos.test(useAgen)) {
            type = "ios";
        } else if (isIpad.test(useAgen)) {
            type = "ipad";
        } else if (isAndroid.test(useAgen)) {
            type = "android";
        } else {
            type = "pc";
        }
    } else {
        type = "pc"
    }
    return () => type;
})();