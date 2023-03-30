import React from "react";
import { cartActions } from "../store/cart";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'
export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        name: product.name,
        relleno: product.tipo,
        imgUrl: product.imgUrl,
      })
    );
  };
  return (
    <div className=" m-6 overflow-hidden rounded-lg hover:shadow-slate-500 hover:shadow-md transition-shadow duration-200 sm:relative group">
      <div className="overflow-hidden flex-shrink-0 group-hover:opacity-50 w-40 h-36 sm:w-60 sm:h-64 object-cover object-center">
        <LazyLoadImage className="object-cover object-center h-full w-full" style={{objectFit:"cover",objectPosition:'center'}} src={product.imgUrl}/>
      </div>
      <div className="flex justify-between p-2 capitalize sm:border-b-2 sm:border-b-soet border-x-2 border-x-soet sm:rounded-b-lg overflow-hidden max-sm:h-24 m-0">
        <p className="p-1 m-0">{product.name}</p>
        <h2 className="font-bold text-lg">${product.price}</h2>
      </div>
      <div className="overflow-hidden flex justify-end  sm:block   border-b-2 sm:h-20 sm:w-20 border-b-soet border-x-2 border-x-soet rounded-b-lg sm:border-none sm:absolute sm:bottom-0 sm:top-0 sm:right-0 sm:left-0 sm:m-auto m-0">
        <button
          onClick={addToCartHandler}
          className="sm:p-2 p-1 max-sm:text-sm bg-volky text-stone-100 block hover:shadow-xl rounded-lg shadow-slate-800 transition-shadow duration-200 m-2 sm:hidden group-hover:block"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}
