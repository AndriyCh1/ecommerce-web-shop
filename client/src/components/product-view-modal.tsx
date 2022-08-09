import React, { useEffect, useState } from 'react';
import productData, { IProduct } from '../assets/fake-data/products';
import ProductView from './product-view';
import Button from './button';
import { useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/product-modal/product-modal-slice';

const ProductViewModal = () => {
  const dispatch = useDispatch();
  const productSlug = useAppSelector((state) => state.productModal.value);
  const [product, setProduct] = useState<IProduct | undefined>(undefined);

  useEffect(() => {
    if (productSlug) {
      setProduct(productData.getProductBySlug(productSlug));
    } else {
      setProduct(undefined);
    }
  }, [productSlug]);

  return (
    <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
      <div className="product-view__modal__content">
        {product && <ProductView product={product} />}
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => {
            dispatch(remove());
            console.log("clicked");
          }}>
            dong
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
