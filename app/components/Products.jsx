import React from "react";
import ProductItem from "./ProductItem";
import { useLoaderData } from "@remix-run/react";
export default function Products() {
  const { products } = useLoaderData();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
