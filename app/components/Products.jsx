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
  return (
    <>
      {nutellaDonuts.length > 0 && (
        <>
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-pink-400">
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
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold">
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
          <h2 className="text-2xl my-8 text-center leading-relaxed mx-2 sm:mx-auto font-semibold text-volky">
            ¡CHOCOLATE!
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
            {chocoDonuts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
