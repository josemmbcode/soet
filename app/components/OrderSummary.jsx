import React from "react";
import OrderItem from "./OrderItem";

export default function OrderSummary({ summary, total }) {
  return (
    <div className="border border-soet rounded-xl flex-1 sm:flex-[1_2_0%] px-6 m-4 flex flex-col h-fit">
      <h1 className="text-center">Resumen de compra:</h1>
      {summary.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    <h2 className="font-bold self-end justify-self-end">Total: ${total}</h2>
    </div>
  );
}
