// 这里使用Provider-Consumer组件设计模式,为Scroll提供上下文
//文章参考 https://juejin.im/post/5cf8df8ff265da1bce3dc112
import { createContext } from "react";
const scrollContext = createContext();
export const scrollProvider = scrollContext.Provider;
export const scrollConsumer = scrollContext.Consumer;