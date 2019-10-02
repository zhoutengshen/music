export const initMethods = (methods, ctx, bSrollInstance) => {
    methods.forEach(methodName => {
        //特殊处理off事件
        if (methodName === "off") {
            ctx["off"] = (type, fn) => {
                let registeredHooks = bSrollInstance.registeredHooks || {};
                const targetFunc = registeredHooks[fn];
                (targetFunc && bSrollInstance["off"](type, targetFunc));
            }
        } else {
            ctx[methodName] = (...params) => {
                if (bSrollInstance[methodName] && bSrollInstance[methodName] instanceof Function) {
                    bSrollInstance[methodName](...params);
                }
            }
        }
    });
}
export const initHooks = (hooks, ctx, bSrollInstance, proxys = {}) => {
    let registeredHooks = bSrollInstance.registeredHooks || {};
    hooks.forEach(hookName => {
        const name = hookName.slice(0, 1).toUpperCase() + hookName.slice(1);
        const ctxFunc = ctx.props['on' + name];
        //只允许注册一个相同的钩子函数
        if (!registeredHooks[ctxFunc] && ctxFunc && ctxFunc instanceof Function) {
            const registeredFunc = (...prams) => {
                //允许外部调用返回一个promise
                const pm = ctxFunc.bind(ctx)(...prams);//return promise
                if (proxys[hookName] && proxys[hookName] instanceof Function) {
                    proxys[hookName](pm);
                }
            }
            registeredHooks[ctxFunc] = registeredFunc;
            bSrollInstance.on(hookName, registeredFunc, ctx);
        }
    });
    bSrollInstance.registeredHooks = registeredHooks;
}