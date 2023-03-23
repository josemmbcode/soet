import React from "react";
import ProductItem from "./ProductItem";
import { useLoaderData } from "@remix-run/react";
export default function Products() {
  const { products } = useLoaderData();
  const nutellaDonuts = products.filter((donut) => donut.tipo === "nutella");
  const cremaDonuts = products.filter(
    (donut) => donut.tipo === "crema pastelera"
  );
  const chocoDonuts = products.filter((donut) => donut.tipo === "chocolate");
  const arequipeDonuts = products.filter((donut) => donut.tipo === "arequipe");
  const specialDonuts = products.filter((donut) => donut.tipo === "especial");
  return (
    <>
      {nutellaDonuts.length > 0 && (
        <>
          <h2 className="text-2xl mb-1 mt-40 sm:my-6 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-pink-400">
            RELLENAS DE NUTELLA
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
            {nutellaDonuts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {cremaDonuts.length > 0 && (
        <>
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-taller">
            CREMA PASTELERA
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
            {cremaDonuts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {chocoDonuts.length > 0 && (
        <>
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-darkVolky">
            ¡CHOCOLATE!
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
            {chocoDonuts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {arequipeDonuts.length > 0 && (
        <>
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-amber-800">
            ¡AREQUIPE!
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
            {arequipeDonuts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {specialDonuts.length > 0 && (
        <>
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-gray-800">
            PRUEBA NUESTROS RELLENOS ESPECIALES
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
            {specialDonuts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
