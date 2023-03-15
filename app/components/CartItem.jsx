import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        price: item.price,
        name: item.name,
        imgUrl: item.imgUrl,
      })
    );
  };
  return (
    <div className="flex h-1/3 w-full items-center justify-center border-b border-soet py-1">
      <div className="flex flex-1 h-40 w-16 sm:h-52 sm:w-52 justify-center items-center px-2">
        <img src={item.imgUrl} className="h-3/5 object-cover rounded-2xl" />
      </div>
      <div className="font-bold w-0 flex-1 text-center capitalize">
        {`${item.name} relleno de ${item.relleno}`}
      </div>
      <div className="w-0 font-extrabold flex-1 text-center">${item.price}</div>
      <div className="w-0 font-extrabold flex-1 whitespace-nowrap sm:flex-1 text-center">
        <button
          onClick={removeItemHandler}
          className="text-pink-500 text-2xl mx-2 text-center"
        >
          -
        </button>
        {item.quantity}
        <button
          onClick={addToCartHandler}
          className="text-pink-500 text-2xl mx-2 text-center"
        >
          +
        </button>
      </div>
      <div className="w-0 font-extrabold flex-1 text-center">${item.total}</div>
    </div>
  );
}
