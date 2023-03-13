import React from "react";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Payment() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.replaceCart({ items: [] }));
  }, []);
  return <div>Payment</div>;
}
