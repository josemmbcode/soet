import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
function Error({ title, children }) {
  return (
    <div className="text-center flex flex-col items-center p-5">
      <div className="text-5xl text-center mx-auto">
        <FaExclamationCircle />
      </div>
      <h2 className="m-2 text-5xl pb-20">{title}</h2>
      {children}
    </div>
  );
}

export default Error;
