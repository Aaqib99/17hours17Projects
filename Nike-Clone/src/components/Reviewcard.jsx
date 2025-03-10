import { star } from "../assets/assets/icons";

const Reviewcard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
      <div className="flex justify-center flex-col items-center">
        <img
          src={star}
          alt="star"
          height={24}
          width={24}
          className="object-contain m-0 text"
        />
        <p className="text-center ">{rating}</p>
        <p className="text-center font-bold ">{customerName}</p>
      </div>
    </div>
  );
};
export default Reviewcard;
