import { redirect } from "@remix-run/node";
import { validateInput } from "../../data/validation.server";
import { useSelector } from "react-redux";
import {
  getLocation,
  getProduct,
  placeOrder,
} from "../../data/products.server";
import OrderSummary from "../../components/OrderSummary";
import CheckoutForm from "../../components/CheckoutForm";
import { isBusinessOpen } from "../../data/utils.server";
import EmptyCar from "../../components/EmptyCar";
export default function Checkout() {
  const total = useSelector((state) => state.cart.total);
  const orderSummary = useSelector((state) => state.cart.items);

  return (
    <>
      {orderSummary.length === 0 && <EmptyCar />}
      {orderSummary.length > 0 && (
        <div className="flex flex-col-reverse sm:flex-row">
          <CheckoutForm />
          <OrderSummary summary={orderSummary} total={total} />
        </div>
      )}
    </>
  );
}

export async function loader() {
  const isOpen = isBusinessOpen();
  if (!isOpen) {
    return redirect("/");
  }
  const volky = await getLocation("volky");
  const pinky = await getLocation("pinky");
  return { volky, pinky };
}

export async function action({ request }) {
  const formData = await request.formData();
  const orderData = Object.fromEntries(formData);
  const resumen = JSON.parse(orderData.resumen);
  let totalCalculated = 0;
  const promises = [];
  for (let element of resumen) {
    promises.push(
      new Promise(async (resolve) => {
        const product = await getProduct(element.id);
        resolve(product.price * element.quantity);
      })
    );
  }

  await Promise.all(promises).then((values) => {
    values.map((value) => (totalCalculated += value));
  });

  if (totalCalculated == orderData.total) {
    try {
      validateInput(orderData);
    } catch (error) {
      return error;
    }
    try {
      await placeOrder(orderData);
    } catch (error) {
      throw error;
    }
    return redirect("/Cart/Payment");
  } else {
    return { error: "Ha ocurrido un error" };
  }
}
