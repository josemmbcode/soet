import React from "react";
import CartItem from "../../components/CartItem";

const DUMMY_CART = [
  {
    id: 1,
    name: "chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "flips",
    price: 12,
    imgUrl: "https://i.ibb.co/wQ01XLB/IMG-8161-1.jpg",
    quantity: 1,
  },
];
export default function Cart() {
  return (
    <div className="flex flex-col items-center mx-3 h-screen sm:mx-32">
      {DUMMY_CART.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
