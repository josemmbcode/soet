import React from "react";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
const DUMMY_CART = [
  {
    id: 1,
    name: "Chocolate",
    price: 12,
    imgUrl: "https://i.ibb.co/Cn5GNXP/unnamed.jpg",
    quantity: 2,
    total: 24,
  },
  {
    id: 2,
    name: "Flips",
    price: 12,
    imgUrl: "https://i.ibb.co/wQ01XLB/IMG-8161-1.jpg",
    quantity: 1,
    total: 12,
  },
];
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = 12;
  return (
    <div className="flex flex-col items-center justify-start my-4 mx-3 h-auto sm:mx-32 py-0 border border-soet rounded-2xl">
      <div className="flex w-full mt-3 items-center justify-center  py-1">
        <div className="flex-1 text-center border-b border-soet">Foto</div>
        <div className="flex-1 text-center border-b border-soet">Producto</div>
        <div className="flex-1 text-center border-b border-soet">Precio</div>
        <div className="flex-1 text-center border-b border-soet">Cantidad</div>
        <div className="flex-1 text-center border-b border-soet">Total</div>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="font-extrabold flex-1 self-end text-center mr-14 p-3">
        Total:${total}
      </div>
    </div>
  );
}
