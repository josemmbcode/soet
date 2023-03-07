import React from "react";
import { getOrdersPlaced } from "../../data/products.server";
import { useLoaderData } from "react-router";

export default function orders() {
  const orders = useLoaderData();

  return (
    <table className="w-full">
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
          const test = JSON.parse(order.resumen);
          const display = test.map((orden) => (
            <div key={orden.id}>
              <p>{orden.name}</p>
              <p>{orden.quantity}</p>
            </div>
          ));
          return (
            <tr key={order.id} className="border border-black">
              <td>{order.id}</td>
              <td>
                {order.nombre}-{order.apellido}
              </td>
              <th>{order.contacto}</th>
              <th>{order.entrega}</th>
              <th>{order.carro}</th>
              <th>{order.direccion}</th>
              <th>{order.referencia}</th>
              <th>{order.sector}</th>
              <th>{order.total}</th>
              <th>{display}</th>
              <th>{order.pagada ? "si" : "no"}</th>
              <th>{order.cerrada ? "si" : "no"}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export async function loader() {
  return getOrdersPlaced();
}
