import { Link } from "@remix-run/react";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
export default function Header() {
  return (
    <header className="flex justify-between p-3 items-center bg-soet">
      <Link to="/">
        <img className="h-24 ml-6" src="/images/a3 (1).png" alt="soet logo" />
      </Link>
      <Link to="/cart">
        <FaShoppingBag className="text-2xl mr-9" />
      </Link>
    </header>
  );
}
