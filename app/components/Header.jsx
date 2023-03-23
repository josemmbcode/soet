import { Link } from "@remix-run/react";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  return (
    <header className="flex justify-between p-3 items-center bg-soet">
      <Link to="/">
        <img className="h-24 ml-6" src="/images/a3 (1).png" alt="soet logo" />
      </Link>
      <Link to="/cart" className="relative mr-8 pt-3">
        <FaShoppingBag className="text-2xl text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-volky font-bold rounded-3xl text-sm px-1 py-0">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
}
