import React from "react";
import { scrollConsumer as ScrollConsumer } from "./context";
const pluginOptionsName = [
    "infinity",
    "pullDownRefresh",
    "pullUpLoad",
];
const scrollHoc = (Component, plugin) => {
    return React.forwardRef((props, ref) => {
        return (
            <React.Fragment>
                <ScrollConsumer>
                    {({ BScroll, bSrollInstance, pluginOptions }) => {
                        //没实例化
                        if (!(bSrollInstance instanceof BScroll)) {
                            if (plugin) {
                                BScroll.use(plugin);
                            }
                            pluginOptionsName.forEach(name => {
                                if (props[name]) {
                                    pluginOptions[name] = props[name];
                                }
                            });
                        }
                        BScroll.use(plugin);
                        return <Component ref={ref}  {...props} BScroll={BScroll} bSrollInstance={bSrollInstance} />;
                    }}
                </ScrollConsumer>
            </React.Fragment>
        )
    });
}
export default scrollHoc;