import React from "react";
import { closeOrder, getOrdersPlaced } from "../../../data/products.server";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { requireUserSession } from "../../../data/auth.server";

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
    <table className="w-full text-center">
      <tbody> 
        <tr>
          <th>#</th>
          <th>Nombre y Apellido</th>
          <th>Telefono</th>
          <th>Entrega</th>
          <th>Carro</th>
          <th>direccion</th>
          <th>Pto Ref</th>
          <th>Sector</th>
          <th>Total ($)</th>
          <th>Resumen</th>
          <th>Pagada?</th>
          <th>Cerrada?</th>
        </tr>
        {orders.map((order) => {
          const resumen = JSON.parse(order.resumen);
          const orderDetails = resumen.map((orden) => (
            <div key={orden.id} className='flex flex-row text-center justify-center items-center'>
              <p>{orden.name}</p>
              <p>{orden.quantity}</p>
            </div>
          ));
          return (
            <tr key={order.id} className="border border-black px-0">
              <td>{order.id}</td>
              <td>
                {order.nombre}-{order.apellido}
              </td>
              <td>{order.contacto}</td>
              <td>{order.entrega}</td>
              <td>{order.carro}</td>
              <td>{order.direccion}</td>
              <td>{order.referencia}</td>
              <td>{order.sector}</td>
              <td>{order.total}</td>
              <td>{orderDetails}</td>
              <td>
                <select
                  value={order.pagada ? "si" : "no"}
                  onChange={modifyOrderHandler.bind(this, "pagada", order.id)}
                >
                  <option value="no">No</option>
                  <option value="si">Si</option>
                </select>
              </td>

              <td>
                <select
                  value={order.cerrada ? "si" : "no"}
                  onChange={modifyOrderHandler.bind(this, "cerrada", order.id)}
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
