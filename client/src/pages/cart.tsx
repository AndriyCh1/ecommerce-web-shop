import React, { useEffect, useState } from 'react';
import productData, { ICartItemInfo } from '../assets/fake-data/products';
import { useAppSelector } from '../redux/store';
import Helmet from '../components/helmet';
import numberWithCommas from '../utils/numberWithCommas';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart-item';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState<ICartItemInfo[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
    setTotalPrice(
      cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0),
    );

    console.log(productData.getCartItemsInfo(cartItems), "cartProducts");
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Ban dang go {totalProducts} san pham trong gio hang</p>
            <div className="cart__info__txt__price">
              <span>Thanh tien</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">dat hang</Button>
            <Link to="/catalog">
              <Button> tiep tuc mua hang</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
