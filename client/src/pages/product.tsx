import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Helmet from '../components/helmet';
import Section, { SectionBody, SectionTitle } from '../components/section';
import ProductCard from '../components/product-card';
import Grid from '../components/grid';

import productData from '../assets/fake-data/products';
import ProductView from '../components/product-view';

const Product: React.FC = () => {
  const params = useParams() as { slug: string };

  const product = productData.getProductBySlug(params.slug);
  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product ? product.title : ''}>
      <Section>
        <SectionBody>{product && <ProductView product={product} />}</SectionBody>
      </Section>
      <Section>
        <SectionTitle>Kham pha them</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
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

export default Product;
