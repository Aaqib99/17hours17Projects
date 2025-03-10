import Button from "./Button";
import { shoe8 } from "../assets/assets/images";
const Superquailty = () => {
  return (
    <section
      id="about-us"
      className="flex mt-16 justify-center   max-lg:flex-col items-center"
    >
      <div className="flex flex-1 flex-col ">
        <h1 className="mt-10 font-palanquin text-4xl ">
          <span className="  relative pr-10">
            We Provide You
            <br />
          </span>
          <span className="text-coral-red mt-3 pr-2">Super </span>
          <span className="text-coral-red mt-3 pr-2">Quality </span>
          Shoes
        </h1>
        <p className="info-text mt-4">
          Ensuring permium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-slate-gray text-lg leading-8   sm:max-w-sm">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-12">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default Superquailty;
