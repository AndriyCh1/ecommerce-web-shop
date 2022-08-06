import React from 'react';
import { Link } from 'react-router-dom';

import Helmet from '../components/helmet';
import HeroSlider from '../components/hero-slider';
import heroSliderData from '../assets/fake-data/hero-slider';
import Section, { SectionTitle, SectionBody } from '../components/section';
import policy from '../assets/fake-data/policy';
import PolicyCard from '../components/policy-card';
import Grid from '../components/grid';
import productData from '../assets/fake-data/products';
import ProductCard from '../components/product-card';

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider data={heroSliderData} hasControls={true} auto={false} timeOut={2000} />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>top san pham ban chay trong</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
