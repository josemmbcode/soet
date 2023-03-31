import React from "react";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "@remix-run/react";
import EmptyCar from "../../components/EmptyCar";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  return (
    <>
      {cartItems.length === 0 && <EmptyCar />}
      {cartItems.length > 0 && (
        <div className="flex flex-col items-center justify-start my-4 mx-3 h-auto md:mx-24 py-0 border border-volky rounded-2xl">
          <div className="flex w-full bg-volky text-white items-center justify-center  py-1 rounded-t-2xl -m-1 pt-3  border-4 border-volky">
            <div className="w-16 sm:w-52  flex-1 text-center px-2">Foto</div>
            <div className="w-0 flex-1 text-center ">Producto</div>
            <div className="w-0 flex-1 text-center ">Precio</div>
            <div className="w-0 flex-1 text-center ">Cantidad</div>
            <div className="w-0 flex-1 text-center ">Total</div>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="font-extrabold flex-1 self-end text-center mr-14 p-3">
            Total:${total}
          </div>
          <Link
            to="Checkout"
            className="bg-soet m-4 rounded-full p-2 border border-soet self-end text-off"
          >
            Continuar
          </Link>
        </div>
      )}
    </>
  );
}
