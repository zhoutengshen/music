//防抖
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
//节流
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

//重置浏览器的baseFontSize
export const reComputedClientWidth = () => {
    window.onresize = throttl(() => {
        const dcm = document.documentElement;
        const baseWidth = 375;
        const baseFontSize = (document.documentElement.getBoundingClientRect().width / baseWidth * 10) / 10000 * 10000;
        dcm.style.fontSize = baseFontSize + 'px';
    }, 200);
}

//随机字符串
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
//设备判断
export const deviceType = (() => {
    let type = "";
    if (global.window) {
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
        //非浏览器环境
        type = "pc"
    }
    return () => type;
})();

// 计算单位转换
export const unitConver = (playCount, fixed = 2) => {
    if (playCount > 10000 * 10000) {
        return Number(playCount / 10000 / 10000).toFixed(fixed) + '亿'
    } else if (playCount > 10000) {
        return Number(playCount / 10000).toFixed(fixed) + '万'
    } else {
        return playCount;
    }
}


export const pxToRem = (px) => {
}
// rem转化为px
export const remToPx = (() => {
    //映射表
    const mapTable = {
    }
    //利用闭包特性缓存fontSize
    let fontSize = undefined;
    return (rem, cache = false) => {
        if (mapTable[rem]) {
            return mapTable[rem];
        } else {
            console.log(mapTable)
            const remVal = parseFloat(rem);
            fontSize = fontSize || document.documentElement.style.fontSize;
            const reult = parseFloat(fontSize) * remVal;
            mapTable[rem] = reult;
            return reult;
        }

    }
})();
//将秒转化为标准时分秒
export const timeConverse = (second) => {
    second = Math.round(second);
    if (second < 60) {
        return `0 : ${second >= 10 ? second : '0' + second}`;
    } else if (second < 60 * 60) {
        const minute = second / 60 | 0;
        return minute + " : " + ((second % 60) >= 10 ? (second % 60) : '0' + (second % 60));
    } else if (second < 60 * 60 * 24) {
        let hour = second / 60 / 60 | 0;
        let minute = second / 60 % 60;
        let secondRest = second / 60 / 60 % 60;
        hour = secondRest >= 10 ? secondRest : '0' + secondRest;
        return `${hour} : ${minute} : ${secondRest}`;
    }
}

