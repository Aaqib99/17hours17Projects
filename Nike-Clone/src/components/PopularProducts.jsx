import { products } from "../constants/data";
import Productcard from "./Productcard";

const PopularProducts = () => {
  return (
    <section className="max-container">
      <div id="products" className="flex align-middle items-center flex-col">
        <h1 className="mt-4 text-4xl font-montserrat text-center">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-slate-gray font-montserrat lg:max-w-lg mt-4 text-center">
          Experience top-notch quality and style after selections. Discover a
          world of comfort, design, and value
        </p>
      </div>
      <div className="flex gap-4 flex-wrap align-middle justify-center mt-8   ">
        {products.map((product) => (
          <Productcard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
