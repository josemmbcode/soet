import React from "react";
import { useLoaderData } from "@remix-run/react";
export default function Presentation() {
  const { isOpen } = useLoaderData();
  return (
    <>
    <div className=" w-full">
      <div className="bg-[url('/images/portada.jpg')] bg-no-repeat bg-cover bg-center h-[50vh] w-full">

      </div> 
      <h1 className="text-3xl font-amarillo text-center leading-relaxed mx-2 sm:mx-auto mt-20 text-darkVolky">
          No compartirlas sería imperdonable
        </h1>

        <h2 className="text-2xl my-20 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-darkVolky">
          Disponibles de jueves a lunes.
        </h2>
    </div>
          {!isOpen && (
            <h2 className="text-2xl mb-6 text-center leading-relaxed mx-4 p-6">
              ATENCIÓN: En este momento nos encontramos cerrados, ¡puedes mirar
              nuestros productos y decidir cual probar cuando volvamos!
            </h2>
          )}
          </>
  );
}
