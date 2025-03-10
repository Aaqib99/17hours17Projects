const Button = ({
  label,
  iconURL,
  bordercolor,
  textcolor,
  backgroundcolor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundcolor
          ? `${backgroundcolor} ${textcolor} ${bordercolor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="img" className="ml-2 rounded-full w-4 h-4" />
      )}
    </button>
  );
};
export default Button;
