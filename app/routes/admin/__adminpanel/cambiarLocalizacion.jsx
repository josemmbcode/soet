import React from "react";
import { requireUserSession } from "../../../data/auth.server";
import { Form, useLoaderData } from "@remix-run/react";
import { getLocation, updateLocation } from "../../../data/products.server";
import { redirect } from "@remix-run/node";
export default function cambiarLocalizacion() {
  const { pinky, volky } = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-pearl max-w-lg mx-auto my-6 p-4">
      <div className="flex flex-1 justify-between items-center my-8">
        <Form method="post" className="flex flex-col">
          <p className="m-1">
            <label className="block mb-2 text-center" htmlFor="volky">
              Volky:
            </label>
            <input
              className="block mb-2 p-2 rounded-md w-full focus:outline-volky"
              type="text"
              id="volky"
              name="location"
              required
            />
          </p>
          <input type="hidden" value={"volky"} name="nombre" />
          <button className="rounded-md self-center mr-4 bg-volky p-2">
            Cambiar
          </button>
        </Form>
        <div className="mx-8">
          <h1>Localizacion actual:</h1>
          <p>{volky.lugarActual}</p>
        </div>
      </div>

      <div className="flex flex-1 justify-between items-center">
        <Form method="post" className="flex flex-col">
          <p className="m-1">
            <label className="block mb-2 text-center" htmlFor="pinky">
              Pinky:
            </label>
            <input
              className="block mb-2 p-2 rounded-md w-full focus:outline-soet"
              type="text"
              id="pinky"
              name="location"
              required
            />
          </p>
          <input type="hidden" value={"pinky"} name="nombre" />
          <button className="rounded-md self-center mr-4 bg-soet p-2">
            Cambiar
          </button>
        </Form>
        <div className="mx-8">
          <h1>Localizacion actual:</h1>
          <p>{pinky.lugarActual}</p>
        </div>
      </div>
    </div>
  );
}

export async function loader({ request }) {
  await requireUserSession(request);
  const volky = await getLocation("volky");
  const pinky = await getLocation("pinky");
  return { volky, pinky };
}

export async function action({ request }) {
  await requireUserSession(request);
  const formData = await request.formData();
  const newLocation = Object.fromEntries(formData);
  console.log(newLocation);
  try {
    await updateLocation(newLocation.nombre, newLocation.location);
  } catch (error) {
    throw error;
  }

  return redirect("/");
}
