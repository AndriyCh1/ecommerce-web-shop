import React, { useEffect, useState } from 'react';
import { ICartItemInfo } from '../assets/fake-data/products';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import numberWithCommas from '../utils/numberWithCommas';
import { removeItem, updateItem } from '../redux/shopping-cart/cart-item-slice';

interface IProps {
  item: ICartItemInfo;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState(item);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setCartItem(item);
    setQuantity(item.quantity);
  }, [item]);

  const updateQuantity = (opt: string) => {
    if (opt === '+') {
      dispatch(updateItem({...cartItem, quantity: quantity + 1}))
    }

    if (opt === '-') {
      dispatch(updateItem({...cartItem, quantity: quantity - 1 < 1 ? 1 : quantity - 1}))
    }
  };

  const removeCartItem = () => {
    dispatch(removeItem(cartItem))
    console.log("removeCartItem");
  };

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={cartItem.product.image01} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${cartItem.slug}`}>
            {`${cartItem.product.title} - ${cartItem.color} - ${cartItem.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">{numberWithCommas(Number(cartItem.price))}</div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">{quantity}</div>
            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart__item__del" onClick={removeCartItem}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
