import AuthForm from "../../components/AuthForm";
import { validateCredentials } from "../../data/validation.server";
import { getUserFromSession, login } from "../../data/auth.server";

export default function index() {
  return <AuthForm />;
}

export async function loader({ request }) {
  return getUserFromSession(request);
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
