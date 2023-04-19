import { Form } from "@remix-run/react";
import React from "react";
import AdminHeader from "../../components/AdminHeader";
import { useNavigation } from "@remix-run/react";
import { requireUserSession } from "../../data/auth.server";
import { changeDollar, changeEmergencyClose } from "../../data/products.server";
import { redirect } from "@remix-run/node";
function options() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <>
      <AdminHeader />
      <div>
        <Form
          method="post"
          className="mx-auto my-8 rounded-lg bg-volky shadow-md text-center max-w-sm p-8"
        >
          <p className="m-1">
            <label className="block mb-2" htmlFor="cambio">
              Cambio del dia:
            </label>
            <input
              type="text"
              id="cambio"
              name="cambio"
              className="block mb-2 p-2 rounded-md w-full"
              required
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
      </div>
      <div>
        <Form
          className="mx-auto my-8 rounded-lg bg-volky shadow-md text-center max-w-sm p-8"
          method="post"
        >
          <p className="m-1">
            <label className="m-1" htmlFor="cerrado">
              Abierto?
            </label>
            <select id="cerrado" name="cerrado">
              <option value={true}>Si</option>
              <option value={false}> No</option>
            </select>
          </p>
          <button
            className="rounded-md self-center mr-4 bg-taller p-2"
            type="submit"
          >
            Cambiar
          </button>
        </Form>
      </div>
    </>
  );
}

export default options;

export async function action({ request }) {
  await requireUserSession(request);
  const formData = await request.formData();
  const changeData = Object.fromEntries(formData);
  if (changeData.cambio) {
    try {
      await changeDollar(changeData.cambio);
    } catch (error) {
      throw error;
    }
  } else {
    const isClosed = changeData.cerrado === "true";
    try {
      await changeEmergencyClose(isClosed);
    } catch (error) {
      throw error;
    }
  }

  return redirect("/admin/orders");
}

export async function loader({ request }) {
  return await requireUserSession(request);
}
