import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="flex h-1/3 w-full  border-soet rounded-md border-2 my-3 items-center justify-center">
      <div className="flex flex-1 h-full justify-center items-center px-2">
        <img
          src={item.imgUrl}
          className="h-3/4 border border-black rounded-2xl"
        />
      </div>
      <div className="font-bold flex-1 text-center">{item.name}</div>
      <div className="font-extrabold flex-1 text-center">{item.quantity}</div>
    </div>
  );
}
