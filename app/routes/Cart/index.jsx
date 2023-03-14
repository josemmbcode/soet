import React from "react";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "@remix-run/react";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  return (
    <div className="flex flex-col items-center justify-start my-4 mx-3 h-auto sm:mx-32 py-0 border border-soet rounded-2xl">
      <div className="flex w-full mt-3 items-center justify-center  py-1">
        <div className="w-16 sm:w-52  flex-1 text-center border-b border-soet">
          Foto
        </div>
        <div className="w-0 flex-1 text-center border-b border-soet">
          Producto
        </div>
        <div className="w-0 flex-1 text-center border-b border-soet">
          Precio
        </div>
        <div className="w-0 flex-1 text-center border-b border-soet">
          Cantidad
        </div>
        <div className="w-0 flex-1 text-center border-b border-soet">Total</div>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="font-extrabold flex-1 self-end text-center mr-14 p-3">
        Total:${total}
      </div>
      <Link
        to="Checkout"
        className="bg-soet m-4 rounded-full p-2 border border-soet self-end "
      >
        Continuar
      </Link>
    </div>
  );
}
