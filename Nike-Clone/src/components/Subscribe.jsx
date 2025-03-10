import Button from "./Button";
const Subscribe = () => {
  return (
    <section className="flex justify-center items-center gap-10 max-lg:flex-col ">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red"> Updates </span>and
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-20 p-2.5 sm:border sm:border-slate-gray rounded-full justify-between">
        <input type="text" placeholder="Subscribe" />
        <div>
          <Button label="Sign up" />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
