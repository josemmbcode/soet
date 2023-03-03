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
    <div className="flex h-1/3 w-full items-center justify-center">
      <div className="flex flex-1 h-40 w-40 sm:h-52 sm:w-52 justify-center items-center px-2">
        <img
          src={item.imgUrl}
          className="h-3/4 object-cover border border-black rounded-2xl"
        />
      </div>
      <div className="font-bold flex-1 text-center">{item.name}</div>
      <div className="font-extrabold flex-1 text-center">${item.price}</div>
      <div className="font-extrabold flex-1 text-center">
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
      <div className="font-extrabold flex-1 text-center">${item.total}</div>
    </div>
  );
}
