import React from "react";
import { Form, Link } from "@remix-run/react";
export default function AdminHeader() {
  return (
    <header className="flex justify-between p-3 items-center bg-soet">
      <Link to="/admin/orders">Ordenes</Link>
      <Link to="/admin/addProduct">Agregar producto</Link>
      <Link to="/admin/ProductosDisponibles">Cambiar disponibilidad</Link>
      <Link to="/admin/cambiarLocalizacion">Cambiar ubicacion</Link>
      <Form method="post" action="/admin/delete">
        <button>Eliminar ordenes cerradas</button>
      </Form>
    </header>
  );
}
