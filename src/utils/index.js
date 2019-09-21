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