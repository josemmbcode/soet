import { redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import React, { useState } from "react";
import { FaMotorcycle } from "react-icons/fa";
import { GiDonut } from "react-icons/gi";
import { validateInput } from "../../data/validation.server";
import { useSelector } from "react-redux";
import { placeOrder } from "../../data/products.server";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
export default function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const validationErrors = useActionData();
  const total = useSelector((state) => state.cart.total);
  const orderSummary = useSelector((state) => state.cart.items);
  const resumen = JSON.stringify(orderSummary);
  function showForm(event) {
    setSelectedMethod(event.target.value);
  }
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <Form
        className="mx-auto flex flex-col items-center my-4 flex-1 sm:flex-[2_1_0%]"
        method="post"
      >
        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="flex flex-col flex-1 mx-1">
            <label className="text-center" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              className="px-2 py-1 border border-soet"
              type={"text"}
              name="nombre"
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
              name="apellido"
            />
          </div>
        </div>
        <label htmlFor="info" className="text-center">
          Numero de telefono
        </label>
        <input
          type="text"
          id="info"
          name="contacto"
          className="w-full sm:w-1/2 px-2 py-1 border border-soet"
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
            />
            <div className="w-1/2 sm:w-1/3 flex justify-center">
              <div className="flex flex-col flex-1 mx-1">
                <label className="text-center" htmlFor="punto">
                  Punto de referencia
                </label>
                <input
                  id="punto"
                  className="px-2 py-1 border border-soet"
                  type="text"
                  name="Referencia"
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
                  name="sector"
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
            <div className="text-center font-bold">
              <h1 className="p-4 m-auto">
                El pedido puede ser retirado en nuestras direcciones:{" "}
              </h1>
              <div className=" bg-volky w-full sm:w-1/2 px-2 py-1 mx-auto my-1 rounded-2xl flex items-center">
                <input
                  type="radio"
                  className="mx-1"
                  id="rb1"
                  name="carro"
                  value="volky"
                />
                <label className="text-justify" htmlFor="rb1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium atque, porro, obcaecati officiis cupiditate quod
                  eius vitae veniam aliquid magni, perspiciatis voluptate
                  expedita facere cum ad delectus sapiente? Cupiditate, impedit?
                </label>
              </div>
              <div className=" bg-soet w-full sm:w-1/2 px-2 py-1 mx-auto my-1 rounded-2xl flex items-center">
                <input
                  type="radio"
                  className="mx-1"
                  id="rb2"
                  name="carro"
                  value="pinky"
                />
                <label className="text-justify" htmlFor="rb2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium atque, porro, obcaecati officiis cupiditate quod
                  eius vitae veniam aliquid magni, perspiciatis voluptate
                  expedita facere cum ad delectus sapiente? Cupiditate, impedit?
                </label>
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
        <input type="hidden" name="total" value={total} />
        <input type="hidden" name="resumen" value={resumen} />
      </Form>
      <OrderSummary summary={orderSummary} total={total} />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const orderData = Object.fromEntries(formData);

  try {
    validateInput(orderData);
  } catch (error) {
    return error;
  }

  try {
    await placeOrder(orderData);
  } catch (error) {
    throw error;
  }
  return redirect("/Cart/Payment");
}
