import React, { useCallback, useEffect, useRef, useState } from 'react';
import Helmet from '../components/helmet';
import CheckBox from '../components/check-box';
import Button from '../components/button';
import InfinityList from '../components/infinity-list';

import productData from '../assets/fake-data/products';
import category from '../assets/fake-data/category';
import productColor from '../assets/fake-data/product-color';
import productSize from '../assets/fake-data/product-size';

interface IFilter {
  category: string[];
  color: string[];
  size: string[];
}

const Catalog = () => {
  const initFilter: IFilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState<IFilter>(initFilter);

  const filterSelect = (type: string, checked: boolean, item: any) => {
    if (checked) {
      switch (type) {
        case 'CATEGORY':
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
          break;
        case 'COLOR':
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case 'SIZE':
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case 'CATEGORY':
          const newCategory = filter.category.filter((e) => e !== item.categorySlug);
          setFilter({ ...filter, category: newCategory });
          break;
        case 'COLOR':
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case 'SIZE':
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
          break;
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((color) => filter.size.includes(color));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, setProducts]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    if (filterRef && filterRef.current) {
      filterRef.current.classList.toggle('active');
    }
  }

  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          <div className='catalog__filter__close' onClick={toggleFilter}>
            <i className='bx bx-left-arrow-alt'></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">danh muc san pham</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect('CATEGORY', Boolean(input?.checked), item)}
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">mau sac</div>
            <div className="catalog__filter__widget__content">
              {productColor.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect('COLOR', Boolean(input?.checked), item)}
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">kich co</div>
            <div className="catalog__filter__widget__content">
              {productSize.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect('SIZE', Boolean(input?.checked), item)}
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget__title">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                xoa bo loc
              </Button>
            </div>
          </div>
        </div>
        <div className='catalog__filter__toggle'>
          <Button size='sm' onClick={toggleFilter}>vo  loc</Button>
        </div>
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
