import { requireUserSession } from "../../data/auth.server";
import { deleteClosedOrders } from "../../data/products.server";

export async function action({ request }) {
  await requireUserSession(request);
  return await deleteClosedOrders();
}
