import React from "react";
import { useLoaderData } from "@remix-run/react";
import { useInView } from "react-intersection-observer";
export default function Presentation() {
  const { isOpen, dollar, pinky, volky } = useLoaderData();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <div className=" w-full">
        <div className="bg-[url('/images/portada.jpg')] bg-no-repeat bg-cover bg-center h-[50vh] w-full"></div>
        <h1 className="text-3xl font-amarillo text-center leading-relaxed mx-2 sm:mx-auto mt-20 text-darkVolky">
          No compartirlas sería imperdonable
        </h1>

        <h2 className="text-2xl my-20 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-darkVolky">
          Disponibles de jueves a lunes.
        </h2>
      </div>
      {isOpen && (
        <h2 className="text-2xl mb-6 text-center leading-relaxed mx-4 p-6">
          ATENCIÓN: En este momento nos encontramos cerrados, ¡puedes mirar
          nuestros productos y decidir cual probar cuando volvamos!
        </h2>
      )}
      {!isOpen && (
        <>
          <h2 className="text-2xl my-10 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-darkVolky">
            EL CAMBIO DE HOY ES: Bs{dollar}
          </h2>
          <div className="flex items-center justify-around w-[75vw]">
            <div
              className={`rounded-xl bg-darkVolky p-4 text-off w-72 text-center ${
                inView
                  ? "opacity-100 animate-bounceOnce ease-out"
                  : "opacity-0 transition-none"
              }`}
              ref={ref}
            >
              <div>Volky: {volky.lugarActual}</div>
            </div>
            <div
              className={`rounded-xl bg-soet p-4 text-off w-72 text-center ${
                inView
                  ? "opacity-100 animate-bounceOnce ease-out"
                  : "opacity-0 transition-none"
              }`}
              ref={ref}
            >
              <div>Pinky: {pinky.lugarActual}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
