import Presentation from "../../components/Presentation";
import Products from "../../components/Products";

export default function Index() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Presentation/>
      <Products />
    </div>
  );
}
