import React from "react";
import { useLoaderData } from "@remix-run/react";
export default function Presentation() {
  const { isOpen } = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl font-amarillo my-8 text-center leading-relaxed mx-4 sm:mx-auto">
        No compartirlas sería imperdonable
      </h1>
      <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold">
        Disponibles de jueves a lunes.
      </h2>
      {!isOpen && (
        <h2 className="text-2xl my-8 text-justify leading-relaxed mx-4 sm:mx-auto p-4">
          ATENCIÓN: En este momento nos encontramos cerrados, ¡Puedes mirar
          nuestros productos y decidir cual probar cuando volvamos!
        </h2>
      )}
    </div>
  );
}
