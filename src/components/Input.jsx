/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";

const Input = forwardRef(({ label, isTextarea, type, ...props }, ref) => {
  const INPUT_CLASSES =
    "text-xl rounded-xl w-80 p-3 bg-green-100 border-green-900 cursor-text";

  return (
    <p className="flex flex-col gap-1">
      <label htmlFor={label} className="font-bold text-green-950">
        {label}
      </label>
      {isTextarea ? (
        <textarea id={label} name={label} className={INPUT_CLASSES}></textarea>
      ) : (
        <input
          {...props}
          ref={ref}
          id={label}
          name={label}
          className={INPUT_CLASSES}
          type={type}
        ></input>
      )}
    </p>
  );
});

export default Input;
