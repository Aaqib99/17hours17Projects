const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className=" bg-coral-red flex w-11 h-11 justify-center items-center  rounded-full ">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 text-l break-words font-montserrat leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};
export default ServiceCard;
