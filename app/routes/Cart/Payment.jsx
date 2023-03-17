import React from "react";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isBusinessOpen } from "../../data/utils.server";
import { redirect } from "react-router";
export default function Payment() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.replaceCart({ items: [] }));
  }, []);
  return <div>Payment</div>;
}

export function loader() {
  const isOpen = isBusinessOpen();
  if (!isOpen) {
    return redirect("/");
  }

  else return null
}

export function headers() {
  return {
    "Cache-Control": "max-age=3600",
  };
}
