import { Form, Link, useActionData } from "@remix-run/react";
import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { GiDonut } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useLoaderData } from "@remix-run/react";
import { cartActions } from "../store/cart";
import { useDispatch } from "react-redux";
export default function CheckoutForm() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const dispatch = useDispatch();
  const validationErrors = useActionData();
  const total = useSelector((state) => state.cart.grandTotal);
  const subtotal = useSelector((state) => state.cart.total);
  const orderSummary = useSelector((state) => state.cart.items);
  const delivery = useSelector((state) => state.cart.delivery);
  const resumen = JSON.stringify(orderSummary);
  function showForm(event) {
    setSelectedMethod(event.target.value);
  }
  const { volky, pinky, taller } = useLoaderData();

  function deliveryCalculatorHandler(e) {
    dispatch(cartActions.changeDelivery(e.target.value));
  }
  return (
    <Form
      className="mx-auto flex flex-col items-center my-4 flex-1 sm:flex-[2_1_0%]"
      method="post"
    >
      <div className="h-20 w-20 flex justify-center items-center">
        <img src="/images/a1.png" className="h-full w-full brightness-75" />
      </div>
      <label className="text-center" htmlFor="nombre">
        Nombre
      </label>
      <input
        id="nombre"
        className="sm:w-1/2 px-2 py-1 border border-soet"
        type={"text"}
        name="nombre"
      />
      <label className="text-center" htmlFor="apellido">
        Apellido
      </label>
      <input
        id="apellido"
        className="sm:w-1/2 px-2 py-1 border border-soet"
        type={"text"}
        name="apellido"
      />
      <label htmlFor="info" className="text-center">
        Numero de telefono
      </label>
      <input
        type="text"
        id="info"
        name="contacto"
        className=" sm:w-1/2 px-2 py-1 border border-soet"
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
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error} className="text-red-500">
              {error}
            </li>
          ))}
        </ul>
      )}
      {selectedMethod === "delivery" && (
        <>
          <label className="text-center" htmlFor="direccion">
            Direccion
          </label>
          <input
            id="direccion"
            className="w-full sm:w-1/2 px-2 py-1 border border-soet"
            type="text"
            name="direccion"
            required
          />
          <label className="text-center" htmlFor="punto">
            Punto de referencia
          </label>
          <input
            id="punto"
            className="w-full sm:w-1/2 px-2 py-1 border border-soet"
            type="text"
            name="Referencia"
            required
          />

          <label className="text-center" htmlFor="sector">
            Sector, Villa o Urbanizacion
          </label>
          <input
            id="sector"
            className="w-full sm:w-1/2 px-2 py-1 border border-soet"
            type={"text"}
            name="sector"
            required
          />

          <p className="text-center">
            INSTRUCCIONES: Calcular con la app de MAPAS la distancia desde el
            carrito abierto más cercano hasta el punto de entrega deseado.
          </p>
          <p className="text-center">
            NOTA: El precio total del delivery será verificado antes de
            confirmar la orden.
          </p>
          <label className="text-center" htmlFor="distancia">
            Distancia
          </label>
          <input
            id="distancia"
            className="w-full sm:w-1/2 px-2 py-1 border border-soet"
            type={"text"}
            name="distancia"
            onChange={deliveryCalculatorHandler}
            required
          />

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
          <div className="text-center font-bold w-2/3 sm:w-1/2">
            <h1 className="p-4 m-auto">
              El pedido puede ser retirado en nuestras direcciones:
            </h1>
            {volky.abierto && (
              <div className=" bg-volky sm:w-1/2 px-2 py-1 mx-auto my-1 rounded-2xl flex items-center">
                <input
                  type="radio"
                  className="mx-1"
                  id="rb1"
                  name="carro"
                  value="volky"
                />
                <label className="text-justify" htmlFor="rb1">
                  {volky.lugarActual}
                </label>
              </div>
            )}
            {pinky.abierto && (
              <div className=" bg-soet sm:w-1/2 px-2 py-1 mx-auto my-1 rounded-2xl flex items-center">
                <input
                  type="radio"
                  className="mx-1"
                  id="rb2"
                  name="carro"
                  value="pinky"
                />
                <label className="text-justify" htmlFor="rb2">
                  {pinky.lugarActual}
                </label>
              </div>
            )}
            {taller.abierto && (
              <div className=" bg-taller sm:w-1/2 px-2 py-1 mx-auto my-1 rounded-2xl flex items-center">
                <input
                  type="radio"
                  className="mx-1"
                  id="rb3"
                  name="carro"
                  value="taller"
                />
                <label className="text-justify" htmlFor="rb3">
                  {taller.lugarActual}
                </label>
              </div>
            )}
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
      <input type="hidden" name="total" value={total} />
      <input type="hidden" name="resumen" value={resumen} />
      <input type="hidden" name="subtotal" value={subtotal} />
      <input type="hidden" name="delivery" value={delivery} />
    </Form>
  );
}
