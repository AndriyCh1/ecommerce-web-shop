import React from 'react';

interface IProps {
  col: number;
  mdCol?: number;
  smCol?: number;
  gap?: number;
  children: React.ReactNode;
}

const Grid: React.FC<IProps> = (props) => {
  const style = {
    gap: props.gap ? `{gap}px` : '0'
  }

  const col = props.col ? `grid-col-${props.col}'` : '';
  const mdCol = props.mdCol ? `grid-col-${props.mdCol}'` : '';
  const smCol = props.smCol ? `grid-col-${props.smCol}'` : '';

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
      {props.children}
    </div>
  );
};


export default Grid;