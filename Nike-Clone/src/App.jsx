import {
  Footer,
  Customerreview,
  PopularProducts,
  Services,
  SpecialOffer,
  Hero,
  Superquailty,
  Subscribe,
  Navbar,
} from "./components/index";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <Superquailty />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <Customerreview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t ">
        <Footer />
      </section>
    </main>
  );
};
export default App;
