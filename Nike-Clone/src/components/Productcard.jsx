import { star } from "../assets/assets/icons";

const Productcard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col ">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] bg-white rounded-md shadow-custom"
      />
      <div className="flex justify-start">
        <img src={star} alt="rat" height={24} width={24} />
        <p className="text-l font-montserrat leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-1 font-palanquin">{name}</h3>
      <p className="text-coral-red font-montserrat">{price}</p>
    </div>
  );
};
export default Productcard;
