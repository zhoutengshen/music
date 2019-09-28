import React, { cloneElement } from "react";

export default ({ children, render = <div />, ...restProps }) => {
    const newEl = cloneElement(render, {
        children
    });
    return newEl;
}