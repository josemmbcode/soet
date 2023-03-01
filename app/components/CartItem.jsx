import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="flex h-1/3 w-full items-center justify-center">
      <div className="flex flex-1 h-40 w-40 sm:h-52 sm:w-52 justify-center items-center px-2">
        <img
          src={item.imgUrl}
          className="h-3/4 object-cover border border-black rounded-2xl"
        />
      </div>
      <div className="font-bold flex-1 text-center">{item.name}</div>
      <div className="font-extrabold flex-1 text-center">${item.price}</div>
      <div className="font-extrabold flex-1 text-center">{item.quantity}</div>
      <div className="font-extrabold flex-1 text-center">${item.total}</div>
    </div>
  );
}
