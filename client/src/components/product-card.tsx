import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import numberWithCommas from '../utils/numberWithCommas';

interface IProps {
  img01: string;
  img02: string;
  name: string;
  price: number;
  slug: string;
}

const ProductCard: React.FC<IProps> = ({ img01, img02, name, price, slug }) => {
  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__image">
          <img src={img01} alt="" />
          <img src={img02} alt="" />
        </div>
        <h3 className="product-card__name">{name}</h3>
        <div className='product-card__price'>
          {numberWithCommas(price)}
          <span className='product-card__price__old'>
            <del>{numberWithCommas(399900)}</del>
          </span>
        </div>
      </Link>
      <div className='product-card__btn'>
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
        >
          chon mua
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
