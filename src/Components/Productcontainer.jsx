import React from 'react'
import wash from '../Assets/img/productcontainer/wash.jpg';
import mobile from '../Assets/img/productcontainer/mobileaccessories.jpg';
import small from '../Assets/img/productcontainer/smallappliances.jpg';
import light from '../Assets/img/productcontainer/lighting.jpg';
import mens from '../Assets/img/productcontainer/mens.jpg';
import booze from '../Assets/img/productcontainer/booze.jpg';
import sonar from '../Assets/img/productcontainer/sonardispenser.jpg';
import wktv from '../Assets/img/productcontainer/wktv.jpg';
import roch from '../Assets/img/productcontainer/rochfridge.jpg';
import hikers from '../Assets/img/productcontainer/hikerstv.jpg';
import xiomi from '../Assets/img/productcontainer/xiaomiredmi.jpg';
import garnier from '../Assets/img/productcontainer/vitaminc.jpg';
import Baseproductcontainer from './Baseproductcontainer';

const Productcontainer = () => {
  productitems = [
    {
      imgSrc: wash
    },
    {
      imgSrc: mobile
    },
    {
      imgSrc: small
    },
    {
      imgSrc: light
    },
    {
      imgSrc: mens
    },
    {
      imgSrc: booze
    },
    {
      imgSrc: sonar
    },
    {
      imgSrc: wktv
    },
    {
      imgSrc: roch
    },
    {
      imgSrc: hikers
    },
    {
      imgSrc: xiomi
    },
    {
      imgSrc: garnier
    },
  ];

    const renderItem = (item) => (
        <div>
          <img src={item.imgSrc} />
        </div>
    );

  return (
    <div>
      
    </div>
  );

  return <Baseproductcontainer />

}

export default Productcontainer;
