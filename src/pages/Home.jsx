import React from 'react';
import Hero from '../components/Hero';
import Cardlayout from '../components/Cardlayout';
import PopularProducts from '../components/PopularProducts';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cardlayout/>
      <PopularProducts/>
    </div>
  )
}

export default Home
