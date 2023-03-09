import {
  Form,
  useNavigation,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import React from "react";

function AuthForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const validationErrors = useActionData();
  const userId = useLoaderData();
  return (
    <>
      {!userId && (
        <Form
          method="post"
          className="mx-auto my-8 rounded-lg bg-volky shadow-md text-center max-w-sm p-8"
        >
          {validationErrors && (
            <ul>
              {Object.values(validationErrors).map((error) => (
                <li key={error} className="text-red-500">
                  {error}
                </li>
              ))}
            </ul>
          )}
          <p className="m-1">
            <label className="block mb-2" htmlFor="email">
              Correo
            </label>
            <input
              className="block mb-2 p-2 rounded-md w-full"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="m-1">
            <label className="block mb-2" htmlFor="password">
              Clave
            </label>
            <input
              type="password"
              id="password"
              name="password"
              minLength={7}
              className="block mb-2 p-2 rounded-md w-full"
            />
          </p>
          <div className="mt-8 items-center gap-4 flex flex-col">
            <button
              disabled={isSubmitting}
              className="rounded-lg bg-soet font-bold mx-2 w-full"
            >
              {isSubmitting ? "Autorizando..." : "Entrar"}
            </button>
          </div>
        </Form>
      )}
      {userId && (
        <Form
          className="mx-auto my-8 rounded-lg bg-volky shadow-md text-center max-w-sm p-8"
          action="/logout"
          method="post"
        >
          <button>Salir</button>
        </Form>
      )}
    </>
  );
}

export default AuthForm;
