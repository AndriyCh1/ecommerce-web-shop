import React from 'react';
import { Link } from 'react-router-dom';

import Grid from './grid';
import logo from '../assets/images/Logo-2.png';

const footerAboutLinks = [
  {
    display: 'Giqi thieu',
    path: '/about',
  },
  {
    display: 'Lien me',
    path: '/about',
  },
  {
    display: 'Tuyen dung',
    path: '/about',
  },
  {
    display: 'Tin tuc',
    path: '/about',
  },
  {
    display: 'He thong cua hang',
    path: '/about',
  },
];

const footerCustomerLinks = [
  {
    display: 'Chinh sach doi tra',
    path: '/about',
  },
  {
    display: 'Chinh sach bao hanh',
    path: '/about',
  },
  {
    display: 'Chinh sach hoan tien',
    path: '/about',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tont dai ho tro</div>
            <div className="footer__content">
              <p>
                Lien he dat hang <strong>0123456789</strong>
              </p>
              <p>
                Thach mac don hang <strong>0123456789</strong>
              </p>
              <p>
                Gop y, khieu nai <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Ve Yolo</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Cham soc khac hang</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to={'/'}>
                <img src={logo} className="footer__logo" alt="logo" />
              </Link>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, tenetur!</p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
