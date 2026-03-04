import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import HeroBanner from "./HeroBanner";

const Home = () => {
  return (
    <main>
      {/* <Hero /> */}
      <HeroBanner/>
      <Categories />
      <NewArrival />
      {/* <PromoBanner /> */}
      {/* <BestSeller /> */}
      {/* <CounDown /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
