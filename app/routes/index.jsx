import { createProduct, getProducts } from "../data/products.server";
import { useLoaderData } from "@remix-run/react";
import Presentation from "../components/Presentation";
import Products from "../components/Products";
export default function Index() {
  const products = useLoaderData();
  return (
    <div className="flex justify-center flex-col items-center">
      <Presentation />
      <Products products={products} />
    </div>
  );
}

export async function loader() {
  return getProducts();
}
