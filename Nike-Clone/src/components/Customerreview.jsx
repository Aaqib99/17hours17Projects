import { reviews } from "../constants/data";
import Reviewcard from "./Reviewcard";

const Customerreview = () => {
  return (
    <section>
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red"> Customers </span>say?
      </h3>
      <p className="info-text text-center mt-4 max-w-lg m-auto">
        Hear about stories from our satisfies customers about their exceptional
        experiences with us
      </p>
      <div className="mt-24 flex flex-1 flex-row flex-wrap justify-evenly">
        {reviews.map((review) => (
          <Reviewcard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};
export default Customerreview;
