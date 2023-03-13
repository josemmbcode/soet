import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-volky sticky top-[100vh] p-6">
      <div className="flex flex-col items-center sm:items-start justify-center">
        <img className="h-24 sm:ml-6" src="/images/a3 (1).png" alt="soet logo" />
        <div className="flex sm:ml-14 my-4 space-x-2">
          <button>
            <BsWhatsapp className="text-white" />
          </button>
          <button>
            <BsInstagram className="text-white" />
          </button>
        </div>
      </div>
      <p className="text-center text-white">
        Copyright &copy; {new Date().getFullYear()} Soet Postres
      </p>
    </footer>
  );
}
