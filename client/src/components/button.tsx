import React from 'react';

interface IProps {
  backgroundColor?: string;
  size?: string;
  icon?: string;
  animate?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = (props) => {
  const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main';
  const size = props.size ? 'btn-' + props.size : '';
  const animate = props.animate ? 'btn-animate' : '';

  const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
    if (props.onClick) props.onClick(); // works
  };

  return (
    <button className={`btn ${bg} ${size} ${animate}`} onClick={handleClick}>
      <span className="btn__txt">{props.children}</span>
      {props.icon ? (
        <span className="btn__icon">
          <i className={`${props.icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
};

export default Button;
