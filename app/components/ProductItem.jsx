import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className=" m-6 overflow-hidden rounded-lg hover:shadow-slate-500 hover:shadow-md transition-shadow duration-200">
      <div className="overflow-hidden flex-shrink-0">
        <img className="h-full w-full object-cover" src={product.imgUrl} />
      </div>
      <div className="flex justify-between p-3 capitalize border-x-2 border-soet">
        <p>{product.name}</p>
        <h2 className="font-bold text-lg">${product.price}</h2>
      </div>
      <div className="border-x-2 border-b-2 rounded-b-lg border-soet flex flex-row justify-end items-center">
        <button className="p-1 bg-soet rounded-md mr-1 mb-1 text-stone-100">
          Añadir
        </button>
      </div>
    </div>
  );
}
