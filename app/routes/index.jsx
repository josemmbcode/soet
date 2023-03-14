import { getAvailableProducts } from "../data/products.server";
import Presentation from "../components/Presentation";
import Products from "../components/Products";
export default function Index() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Presentation />
      <Products />
    </div>
  );
}

export async function loader() {
  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Caracas",
    weekday: "long",
  });

  const daysOpen = ["Thursday", "Friday", "Saturday", "Sunday"];

  const isOpen = daysOpen.includes(date);
  return { products: await getAvailableProducts(), isOpen: isOpen };
}
