import { Form, Link } from "@remix-run/react";
import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { GiDonut } from "react-icons/gi";
export default function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState("");

  function showForm(event) {
    setSelectedMethod(event.target.value);
  }
  return (
    <Form className="mx-auto w-screen flex flex-col items-center my-4">
      <label htmlFor="info" className="text-center">
        Informacion de contacto (Numero de telefono o correo electronico)
      </label>

      <input
        type={"text"}
        id="info"
        className="w-1/2 sm:w-1/3 px-2 py-1 border border-soet"
      />
      <div className="flex justify-center items-center">
        <FaMotorcycle />
        <label className="mr-3">
          <input
            type="radio"
            value="delivery"
            name="entrega"
            onChange={showForm}
            className="mx-1"
          />
          Delivery
        </label>
        <GiDonut className="ml-3" />
        <label className="">
          <input
            type="radio"
            value="retiro"
            name="entrega"
            onChange={showForm}
            className="mx-1"
          />
          Retiro
        </label>
      </div>
      {selectedMethod === "delivery" && (
        <>
          <div className="w-1/2 sm:w-1/3 flex justify-center">
            <div className="flex flex-col flex-1 mx-1">
              <label className="text-center" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                className="px-2 py-1 border border-soet"
                type={"text"}
              />
            </div>
            <div className="flex flex-col flex-1 mx-1">
              <label className="text-center" htmlFor="apellido">
                Apellido
              </label>
              <input
                id="apellido"
                className="px-2 py-1 border border-soet"
                type={"text"}
              />
            </div>
          </div>
          <label className="text-center" htmlFor="direccion">
            Direccion
          </label>
          <input
            id="direccion"
            className="w-1/2 sm:w-1/3 px-2 py-1 border border-soet"
            type={"text"}
          />
          <div className="w-1/2 sm:w-1/3 flex justify-center">
            <div className="flex flex-col flex-1 mx-1">
              <label className="text-center" htmlFor="punto">
                Punto de referencia
              </label>
              <input
                id="punto"
                className="px-2 py-1 border border-soet"
                type={"text"}
              />
            </div>
            <div className="flex flex-col flex-1 mx-1">
              <label className="text-center" htmlFor="sector">
                Sector, Villa o Urbanizacion
              </label>
              <input
                id="sector"
                className="px-2 py-1 border border-soet"
                type={"text"}
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-lg w-1/2 sm:w-1/3 border bg-soet text-center font-semibold my-3 px-2 py-1"
          >
            Continuar
          </button>
          <Link className="rounded-lg w-1/2 sm:w-1/3 border border-soet text-center font-semibold my-3 px-2 py-1">
            Regresar
          </Link>
        </>
      )}

      {selectedMethod === "retiro" && (
        <>
          <div className="h-32 border border-soet text-center font-bold">
            <h1 className="p-4 m-auto">
              El pedido puede ser retirado en nuestra direccion:{" "}
            </h1>
          </div>
          <button
            type="submit"
            className="rounded-lg w-1/2 sm:w-1/3 border bg-soet text-center font-semibold my-3 px-2 py-1"
          >
            Continuar
          </button>
          <Link className="rounded-lg w-1/2 sm:w-1/3 border border-soet text-center font-semibold my-3 px-2 py-1">
            Regresar
          </Link>
        </>
      )}
    </Form>
  );
}
