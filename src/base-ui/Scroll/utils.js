export const initMethods = (methods, ctx, bSrollInstance) => {
    methods.forEach(methodName => {
        ctx[methodName] = (...params) => {
            if (bSrollInstance[methodName] && bSrollInstance[methodName] instanceof Function) {
                bSrollInstance[methodName](...params);
            }
        }
    });
}

export const initHooks = (hooks, ctx, bSrollInstance, proxys = {}) => {
    hooks.forEach(hookName => {
        const name = hookName.slice(0, 1).toUpperCase() + hookName.slice(1);
        if (ctx.props['on' + name] && ctx.props['on' + name] instanceof Function) {
            bSrollInstance.on(hookName, (...prams) => {
                //允许外部调用返回一个promise
                const pm = ctx.props['on' + name](...prams);//return promise
                if (proxys[hookName] && proxys[hookName] instanceof Function) {
                    proxys[hookName](pm);
                }
            });
        }
    });
}