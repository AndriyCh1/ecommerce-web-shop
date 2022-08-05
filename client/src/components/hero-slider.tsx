import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface IHeroItem {
  title: string;
  description: string;
  img: any;
  color: string;
  path: string;
}

interface IProps {
  data: IHeroItem[];
  hasControls?: boolean;
  auto?: boolean;
  timeOut?: number;
}

interface IHeroItemProps {
  item: IHeroItem;
  isActive: boolean;
}

const HeroSlider: React.FC<IProps> = ({ data, auto, timeOut = 3000, hasControls = false }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlideIndex + 1 === data.length ? 0 : activeSlideIndex + 1;
    setActiveSlideIndex(index);
  }, [activeSlideIndex, data]);

  const prevSlide = useCallback(() => {
    const index = activeSlideIndex - 1 < data.length - 1 ? 0 : activeSlideIndex - 1;
    setActiveSlideIndex(index);
  }, [activeSlideIndex, data]);

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);

      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut]);

  return (
    <div className="hero-slider">
      {data.map((item, index) => (
        <HeroSliderItem key={index} item={item} isActive={index === activeSlideIndex} />
      ))}
      {hasControls ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slider__control__item">
            <div className="index">
              {activeSlideIndex + 1}/{data.length}
            </div>
          </div>
          <div className="hero-slider__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const HeroSliderItem: React.FC<IHeroItemProps> = ({ item, isActive }) => (
  <div className={`hero-slider__item ${isActive ? 'active' : ''}`}>
    <div className="hero-slider__item__info">
      <div className={`hero-slider__item__info__title color-${item.color}`}>
        <span>{item.title}</span>
      </div>
      <div className="hero-slider__item__info__description">
        <span>{item.description}</span>
      </div>
      <div className="hero-slider__item__info__btn">
        <Link to={item.path}>
          <button>xem chi tiet</button>
        </Link>
      </div>
    </div>
    <div className="hero-slider__item__image">
      <div className={`shape bg-${item.color}`}></div>
      <img src={item.img} alt="hero" />
    </div>
  </div>
);
export default HeroSlider;
