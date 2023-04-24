import React from "react";
import { closeOrder, getOrdersPlaced } from "../../data/products.server";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { requireUserSession } from "../../data/auth.server";
import AdminHeader from "../../components/AdminHeader";

export default function orders() {
  const fetcher = useFetcher();
  const orders = useLoaderData();
  async function modifyOrderHandler(parameter, id, e) {
    const orderState = e.target.value === "si";
    fetcher.submit(
      { data: JSON.stringify({ parameter, orderState, id }) },
      { method: "post" }
    );
  }

  return (
    <>
      <AdminHeader />
      <table className="w-full text-center max-md:block">
        <tbody className="max-md:block">
          <tr className="max-md:block max-md:absolute max-md:top-[-9999px] max-md:left-[-9999px]">
            <th>Nombre y Apellido</th>
            <th>Telefono</th>
            <th>Entrega</th>
            <th>Carro</th>
            <th>direccion</th>
            <th>Pto Ref</th>
            <th>Sector</th>
            <th>Delivery</th>
            <th>Total ($)</th>
            <th>Resumen</th>
            <th>Pagada?</th>
            <th>Cerrada?</th>
          </tr>
          {orders.map((order) => {
            const resumen = JSON.parse(order.resumen);
            const orderDetails = resumen.map((orden) => (
              <div
                key={orden.id}
                className="flex flex-row text-center justify-center items-center"
              >
                <p>{`${orden.quantity} ${orden.name} de ${orden.relleno}`}</p>
              </div>
            ));
            return (
              <tr
                key={order.id}
                className="border border-black px-0 max-md:border-gray-400 max-md:block"
              >
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.nombre}-{order.apellido}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.contacto}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.entrega}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.carro}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.direccion}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.referencia}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.sector}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  {order.delivery}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  ${order.total}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left lg:w-64">
                  {orderDetails}
                </td>
                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  <select
                    value={order.pagada ? "si" : "no"}
                    onChange={modifyOrderHandler.bind(this, "pagada", order.id)}
                  >
                    <option value="no">No</option>
                    <option value="si">Si</option>
                  </select>
                </td>

                <td className="max-md:block max-md:border-none max-md:border-b max-md:border-gray-600 max-md:relative max-md:pl-[50%] max-md:whitespace-normal max-md:text-left">
                  <select
                    value={order.cerrada ? "si" : "no"}
                    onChange={modifyOrderHandler.bind(
                      this,
                      "cerrada",
                      order.id
                    )}
                  >
                    <option value="no">No</option>
                    <option value="si">Si</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export async function loader({ request }) {
  await requireUserSession(request);
  return getOrdersPlaced();
}

export async function action({ request }) {
  await requireUserSession(request);
  const formData = await request.formData();
  const object = JSON.parse(formData.get("data"));
  return await closeOrder(object.parameter, object.orderState, object.id);
}
