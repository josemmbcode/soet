import React from "react";
import { Form, useNavigation } from "@remix-run/react";
import { createProduct } from "../../data/products.server";
import { redirect } from "@remix-run/node";
import { requireUserSession } from "../../data/auth.server";
import AdminHeader from "../../components/AdminHeader";
export default function addProduct() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <>
      <AdminHeader />
      <Form
        method="post"
        className="mx-auto my-8 rounded-lg bg-volky shadow-md text-center max-w-sm p-8"
      >
        <p className="m-1">
          <label className="block mb-2" htmlFor="nombre">
            Nombre del producto
          </label>
          <input
            className="block mb-2 p-2 rounded-md w-full"
            type="text"
            id="nombre"
            name="name"
            required
          />
        </p>
        <p className="m-1">
          <label className="block mb-2" htmlFor="precio">
            Precio
          </label>
          <input
            type="text"
            id="precio"
            name="price"
            className="block mb-2 p-2 rounded-md w-full"
            required
          />
        </p>
        <p className="m-1">
          <label className="block mb-2" htmlFor="imagen">
            Link de la imagen
          </label>
          <input
            type="text"
            id="imagen"
            name="imgUrl"
            className="block mb-2 p-2 rounded-md w-full"
          />
        </p>
        <p className="m-1">
          <label className="block mb-2" htmlFor="relleno">
            Relleno?
          </label>
          <input
            type="text"
            id="relleno"
            name="tipo"
            className="block mb-2 p-2 rounded-md w-full"
          />
        </p>
        <div className="mt-8 items-center gap-4 flex flex-col">
          <button
            disabled={isSubmitting}
            className="rounded-lg bg-soet font-bold mx-2 w-full"
          >
            {isSubmitting ? "Autorizando..." : "Insertar"}
          </button>
        </div>
      </Form>
    </>
  );
}

export async function loader({ request }) {
  return await requireUserSession(request);
}

export async function action({ request }) {
  await requireUserSession(request);
  const formData = await request.formData();
  const productData = Object.fromEntries(formData);

  try {
    await createProduct(productData);
  } catch (error) {
    throw error;
  }

  return redirect("/");
}
