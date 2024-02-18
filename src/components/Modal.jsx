/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

import Button from "./Button";

const Modal = forwardRef(({ children, btnText }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));

  return createPortal(
    <dialog ref={dialog} className="p-3 rounded-md font-bold min-w-80 ">
      {children}
      <form method="dialog" className="text-end my-3">
        <Button>{btnText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-portal")
  );
});

export default Modal;
