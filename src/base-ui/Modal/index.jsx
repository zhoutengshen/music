import React from "react";
import ReactDOM from "react-dom";
import { ModalWraper } from "./style";
const Modal = (props) => {
    let { el, children, onClick, style } = props;
    if (!el && document) {
        if (!document.getElementById("portalModalId")) {
            el = document.createElement('div');
            el.id = "portalModalId";
            document.body.appendChild(el);
        } else {
            el = document.getElementById("portalModalId");
        }
    }
    const isValidElement = React.isValidElement(children);
    return ReactDOM.createPortal(<ModalWraper style={style} onClick={onClick}>{isValidElement ? children : null}</ModalWraper>, el);
}

export default Modal;