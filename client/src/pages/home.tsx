import React from 'react';
import Helmet from '../components/helmet';
import HeroSlider from '../components/hero-slider';
import heroSliderData from '../assets/fake-data/hero-slider';

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider data={heroSliderData} hasControls={true} auto={false} timeOut={2000} />
    </Helmet>
  );
};

export default Home;
