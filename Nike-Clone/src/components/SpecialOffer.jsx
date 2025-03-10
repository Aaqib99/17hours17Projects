import { arrowRight } from "../assets/assets/icons";
import { offer } from "../assets/assets/images";
import Button from "./Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-end  items-center flex-row max-container max-xl:flex-col-reverse  ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col    ">
        <h1 className="text-center font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm m-auto">
          Discover the perfect blend of performance and style with our Nike
          Special Offers! Elevate your game and step into the spotlight with
          exclusive discounts on the latest footwear, apparel, and accessories.
          Whether you're hitting the gym, the streets, or both, Nike has you
          covered.
        </p>

        <div className="flex gap-4 m-auto">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundcolor="bg-white"
            bordercolor="border-slate-gray"
            textcolor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
