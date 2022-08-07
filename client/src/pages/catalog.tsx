import React from 'react';
import Helmet from '../components/helmet';
import Grid from '../components/grid';
import ProductCard from '../components/product-card';

import productData from '../assets/fake-data/products';
import category from '../assets/fake-data/category';
import CheckBox from '../components/check-box';
import productColor from '../assets/fake-data/product-color';
import productSize from '../assets/fake-data/product-size';
import Button from '../components/button';

const Catalog = () => {
  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">danh muc san pham</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox label={item.display}></CheckBox>
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">mau sac</div>
            <div className="catalog__filter__widget__content">
              {productColor.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox label={item.display}></CheckBox>
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">kich co</div>
            <div className="catalog__filter__widget__content">
              {productSize.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox label={item.display}></CheckBox>
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget__title">
            <div className="catalog__filter__widget__content">
              <Button size='sm'>xoa bo loc</Button>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((item, index) => (
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
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
