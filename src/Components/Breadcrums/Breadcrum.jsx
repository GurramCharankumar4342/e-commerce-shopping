import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      <span>Home</span>
      <img src={arrow_icon} alt="arrow icon" />
      <span>SHOP</span>
      <img src={arrow_icon} alt="arrow icon" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="arrow icon" />
      <span className='pname'>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
