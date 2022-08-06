import React from 'react';
import Helmet from '../components/helmet';
import HeroSlider from '../components/hero-slider';
import heroSliderData from '../assets/fake-data/hero-slider';
import Section, { SectionTitle, SectionBody } from '../components/section';
import policy from '../assets/fake-data/policy';
import PolicyCard from '../components/policy-card';
import Grid from '../components/grid';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider data={heroSliderData} hasControls={true} auto={false} timeOut={2000} />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy">
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
