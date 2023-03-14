import React from "react";
import { useLoaderData } from "@remix-run/react";
export default function Presentation() {
  const { isOpen } = useLoaderData();
  return (
    <div className="w-screen px-4">
      <h1 className="text-5xl font-amarillo my-8 text-center leading-relaxed mx-2 sm:mx-auto">
        No compartirlas sería imperdonable{" "}
      </h1>
      <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto">
        Disponibles de jueves a domingo.
      </h2>
      {!isOpen && (
        <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto">
          ATENCIÓN: Hoy nos encontramos cerrados, ¡Puedes mirar nuestros
          productos y decidir cual probar cuando volvamos!
        </h2>
      )}
    </div>
  );
}
