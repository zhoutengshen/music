const pluginList = [
    "Pulldown"
]
const isPlugin = (type) => {
    for (let i = 0; i < pluginList.length; i++) {
        if (type.name === pluginList[i]) {
            return true;
        }
    }
    return false;
}

export const pluginCollector = (children, plugins = []) => {
    if (children) {
        for (let i = 0; i < children.length; i++) {
            if (isPlugin(children[i].type)) {
                plugins.push(children[i].type);
            }
            return pluginCollector(children[i].props.children, plugins);
        }
    }
    return Array.from(new Set(plugins));
}