import React from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
  },
  {
    id: 2,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
  },
  {
    id: 3,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/wQ01XLB/IMG-8161-1.jpg",
  },
  {
    id: 4,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
  },
  {
    id: 5,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
  },
  {
    id: 6,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
  },
  {
    id: 7,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
  },
];
export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
