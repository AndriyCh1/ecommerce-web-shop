import React, { useEffect } from 'react';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Helmet: React.FC<IProps> = ({title, children}) => {
  document.title = 'Yolo - ' + title;

  useEffect(() => {window.scrollTo(0, 0)}, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default Helmet;