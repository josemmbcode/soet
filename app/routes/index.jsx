import { getAvailableProducts } from "../data/products.server";
import Presentation from "../components/Presentation";
import Products from "../components/Products";
import { isBusinessOpen } from "../data/utils.server";
export default function Index() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Presentation />
      <Products />
    </div>
  );
}

export async function loader() {
  const isOpen = await isBusinessOpen();
  return { products: await getAvailableProducts(), isOpen: isOpen };
}

export function headers() {
  return {
    "Cache-Control": "max-age=60",
  };
}
