import React from "react";9
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <Hero/>
      <CategoryMenu />
      <FoodItems />
      <Cart />  
    </>
  );
};

export default Home;
