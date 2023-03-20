import React from "react";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isBusinessOpen } from "../../data/utils.server";
import { redirect } from "react-router";
import { RiBankCard2Line } from "react-icons/ri";
import { useSearchParams } from "@remix-run/react";
import { SiZelle } from "react-icons/si";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { dollarToday } from "../../data/products.server";
import { useLoaderData } from "@remix-run/react";
export default function Payment() {
  const [searchParams] = useSearchParams();
  const orderTotal = searchParams.get("total");
  const dollar = useLoaderData()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.replaceCart({ items: [] }));
  }, []);
  return (
    <div>
      <h2 className="text-center sm:mx-auto mt-16 text-3xl mx-8">
        ¡Gracias por preferirnos!
      </h2>
      <h2 className="text-center sm:mx-auto mt-16 text-3xl mx-8">
        El total de su orden es ${orderTotal}
      </h2>
      <h2 className="text-center sm:mx-auto mt-16 text-3xl mx-8">
        El cambio hoy es: Bs.{dollar}
      </h2>
      <h2 className="text-center sm:mx-auto mt-16 text-3xl h-32 mx-8">
        CONTAMOS CON LOS SIGUIENTES MÉTODOS DE PAGO
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center bg-taller">
        <div className="rounded-lg m-8 bg-pearl p-4 h-44 flex-1 text-center w-56 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
            <p className="font-bold mr-1">Transferencia en Bs Banesco</p>
            <RiBankCard2Line />
          </div>
          <p>01340039370391055349</p> <p>26709463</p>
          <p>Julieth Valbuena</p>
          <p>Pago Movil Banesco</p>
          <p>04146808539</p>
        </div>
        <div className="rounded-lg m-8 bg-pearl p-4 h-44 flex-1 text-center w-56 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
            <p className="font-bold mr-1">Zelle</p>
            <SiZelle />
          </div>
          <p>Jesús Chacin</p>
          <p>Jchacingudino21@gmail.com</p>
        </div>
        <div className="rounded-lg m-8 bg-pearl p-4 h-44 flex-1 text-center w-56 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
            <p className="font-bold mr-1">Reserve</p>
            <FaRegMoneyBillAlt />
          </div>
          <p>Jesuschacing</p>
        </div>
      </div>
      <RiErrorWarningLine className="text-5xl text-soet text-center mx-auto mt-8" />
      <h2 className="text-center sm:mx-auto text-2xl my-4 mx-8">
        POR FAVOR ENVIAR CAPTURA AL 0424-6813058, INDIQUE SU NOMBRE Y APELLIDO
        PARA IDENTIFICAR LA ORDEN
      </h2>
      <h2 className="text-center sm:mx-auto text-xl mb-4 mx-8">
        El pedido será procesado una vez la captura sea recibida.
      </h2>
    </div>
  );
}

export async function loader() {
  const isOpen = await isBusinessOpen();
  const dollarValue = await dollarToday();
  if (!isOpen) {
    return redirect("/");
  } else return dollarValue;
}

export function headers() {
  return {
    "Cache-Control": "max-age=3600",
  };
}
