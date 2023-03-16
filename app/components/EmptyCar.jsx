import { Link } from "@remix-run/react";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
function EmptyCar() {
  return (
    <div className="text-center flex flex-col items-center p-5 h-96">
      <div className="text-5xl text-center mx-auto mt-12 text-volky">
        <FaExclamationCircle />
      </div>
      <h2 className="m-2 text-2xl pb-20">
        Tu carrito esta vacío, empieza a agregar productos.
      </h2>
      <Link to="/" className="m-2 text-lg pb-20">
        Ir al menú
      </Link>
    </div>
  );
}

export default EmptyCar;
