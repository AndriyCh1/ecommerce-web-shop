import React, { useEffect, useState } from 'react';
import Button from './button';
import numberWithCommas from '../utils/numberWithCommas';
import { useNavigate } from 'react-router-dom';

interface IProduct {
  title: string;
  price: string;
  image01: any;
  image02: any;
  categorySlug: string;
  colors: string[];
  slug: string;
  size: string[];
  description: string;
}

interface IProps {
  product: IProduct;
}

const ProductView: React.FC<IProps> = ({ product }) => {
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const updateQuantity = (type: string) => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor('');
    setSize('');
  }, [product]);

  const check = () => {
    let res = true;
    if (color === '') {
      alert('Vui long chin mau sac!');
      return false;
    }

    if (size === '') {
      alert('Vui long chin kich sac!');
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      console.log({ color, size, quantity });
    }
  };

  const goToCart = () => {
    if (check()) {
      navigate('/cart');
    }
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product-description__title">Chi tief san pham</div>
          <div className="product-description__content">{product.description}</div>
          <div className="product-description__toggle">
            <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {descriptionExpand ? 'Thu gon' : 'Xem them'}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <div className="product__info__item__price">
            {numberWithCommas(Number(product.price))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Mau sac</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kich co</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">So luong</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('minus')}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">{quantity}</div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('plus')}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>them vao gio</Button>
          <Button onClick={() => goToCart()}>mu ngay</Button>
        </div>
      </div>
      <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
        <div className="product-description__title">Chi tief san pham</div>
        <div className="product-description__content">{product.description}</div>
        <div className="product-description__toggle">
          <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
            {descriptionExpand ? 'Thu gon' : 'Xem them'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
