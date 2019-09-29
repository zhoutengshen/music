import React, { cloneElement } from "react";

export default ({ render = <div />, ...restProps }) => {
    const newEl = cloneElement(render, {
        ...restProps
    });
    return newEl;
}