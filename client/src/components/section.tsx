import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Section: React.FC<IProps> = ({children}) => {
  return (
    <div className="section">
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<IProps> = ({children}) => {
  return (
    <div className="section__title">
      {children}
    </div>
  );
};

export const SectionBody: React.FC<IProps> = ({children}) => {
  return (
    <div className="section__body">
      {children}
    </div>
  );
};

export default Section;