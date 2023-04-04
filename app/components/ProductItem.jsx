import React from "react";
import { cartActions } from "../store/cart";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
    <div className=" m-6 overflow-hidden rounded-lg hover:shadow-slate-500 hover:shadow-md transition-shadow duration-200 relative group">
      <div className="overflow-hidden group-hover:opacity-50 w-40 h-36 sm:w-60 sm:h-64 object-cover object-center">
        <LazyLoadImage
          className="object-cover object-center h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={product.imgUrl}
        />
      </div>
      <div className="flex flex-col justify-center px-1 border-b-2 border-b-soet border-x-2 border-x-soet rounded-b-lg overflow-hidden m-0">
        <div className="flex justify-between capitalize">
          <p className="p-1 m-0 text-sm sm:text-base max-sm:h-11 font-medium">
            {product.name}
          </p>
          <h2 className="font-bold text-lg p-1">${product.price}</h2>
        </div>
        {product.description ? (
          <div className="p-1 text-xs text-justify h-20 sm:h-12 self-center justify-self-center">
            <p className="align-middle">{product.description}</p>
          </div>
        ) : (
          <div className="p-1 text-xs text-justify h-20 sm:h-12 self-center justify-self-center">
            <p>Topping de sabrosos dulces</p>
          </div>
        )}
      </div>
      <div className="overflow-hidden block h-20 w-20 border-none absolute bottom-0 top-0 right-0 left-0 m-auto">
        <button
          onClick={addToCartHandler}
          className="p-2 bg-volky text-stone-100 hover:shadow-xl rounded-lg shadow-slate-800 transition-shadow duration-200 ml-3 sm:ml-2 hidden group-hover:block"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}
