import React from "react";
import AuthForm from "../../components/AuthForm";
import { validateCredentials } from "../../data/validation.server";
import { login, signup } from "../../data/auth.server";
import { redirect } from "@remix-run/node";
export default function index() {
  return <AuthForm />;
}

export async function action({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    return await login(credentials);
  } catch (error) {
    if (error.status === 401) {
      return { credentials: error.message };
    }
  }
}
