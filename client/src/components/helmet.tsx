import React from 'react';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Helmet: React.FC<IProps> = ({title, children}) => {
  document.title = 'Yolo - ' + title;
  return (
    <div>
      {children}
    </div>
  );
};

export default Helmet;