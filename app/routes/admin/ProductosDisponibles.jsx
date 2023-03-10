import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import { requireUserSession } from "../../data/auth.server";
import { getProducts, updateProduct } from "../../data/products.server";

export default function ProductosDisponibles() {
  const productos = useLoaderData();
  const fetcher = useFetcher();
  async function changeAvailabilityHandler(id, e) {
    const isAvailable = e.target.value === "si";
    fetcher.submit(
      { data: JSON.stringify({ disponible: "disponible", isAvailable, id }) },
      { method: "post" }
    );
  }
  return (
    <table>
      <tbody>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Disponible</th>
        </tr>
        {productos.map((producto) => {
          return (
            <tr key={producto.id} className="border border-black">
              <td>{producto.name}</td>
              <td>{producto.price}</td>
              <td>
                <select
                  value={producto.disponible ? "si" : "no"}
                  onChange={changeAvailabilityHandler.bind(this, producto.id)}
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
  return getProducts();
}

export async function action({ request }) {
  await requireUserSession(request);
  const formData = await request.formData();
  const object = JSON.parse(formData.get("data"));
  return await updateProduct(object.id, object.disponible, object.isAvailable);
}
