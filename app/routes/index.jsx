import { dollarToday, getAvailableProducts } from "../data/products.server";
import Presentation from "../components/Presentation";
import Products from "../components/Products";
import { emergencyClosure } from "../data/products.server";
import { getLocation } from "../data/products.server";
export default function Index() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Presentation />
      <Products />
    </div>
  );
}

export async function loader() {
  const isOpen = await emergencyClosure();
  const volky = await getLocation("volky");
  const pinky = await getLocation("pinky");
  return {
    products: await getAvailableProducts(),
    isOpen: isOpen,
    dollar: await dollarToday(),
    pinky,
    volky,
  };
}

export function headers() {
  return {
    "Cache-Control": "max-age=60",
  };
}
