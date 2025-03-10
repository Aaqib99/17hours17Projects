import { services } from "../constants/data";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <section className="flex gap-9 justify-evenly flex-wrap ">
      {services.map((services) => (
        <ServiceCard key={services.label} {...services} />
      ))}
    </section>
  );
};
export default Services;
