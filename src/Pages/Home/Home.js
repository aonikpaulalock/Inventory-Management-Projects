import React from 'react';
import About from './About';
import Available from './Available';
import Banner from './Banner';
import Contact from './Contact';
import Inventorys from './Inventory/Inventorys';
import Reviews from './Reviews';

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Inventorys/>
      <Reviews/>
      <Available/>
      <Contact/>
    </>
  );
};

export default Home;