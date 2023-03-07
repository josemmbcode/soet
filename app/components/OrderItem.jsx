import React from "react";

export default function OrderItem({ item }) {
  return (
    <div className="flex justify-between items-center m-3">
      <div className="flex items-center justify-evenly">
        <div className="h-16 w-16 overflow-hidden rounded-lg">
          <img className="object-cover" src={item.imgUrl} />
        </div>
        <p className="text-center flex-1 mx-1 capitalize">{item.name}</p>
        <p className="text-center flex-1 mx-1">x{item.quantity}</p>
      </div>
      <h1>${item.total}</h1>
    </div>
  );
}
