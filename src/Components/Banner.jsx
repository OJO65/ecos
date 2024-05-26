import { faAppleWhole, faBaby, faBasketball, faBlenderPhone, faComputer, faHome, faListDots, faMedkit, faMobilePhone, faShirt, faShoppingBag, faTelevision } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Banner = () => {
  return (
    <div>
     <div className='border w-1/6 m-2 p-2 text-sm rounded-md bg-white'>
        <ul className='p-2'>
            <li className='py-2'><FontAwesomeIcon icon={faShoppingBag} className='mr-2'/> Official Stores</li>
            <li className='py-2'><FontAwesomeIcon icon={faMobilePhone} className='mr-2'/> Phones & Tablets</li>
            <li className='py-2'><FontAwesomeIcon icon={faTelevision} className='mr-2'/>Tvs & Audio</li>
            <li className='py-2'><FontAwesomeIcon icon={faBlenderPhone} className='mr-2'/>Appliances</li>
            <li className='py-2'><FontAwesomeIcon icon={faMedkit} className='mr-2'/>Health & Beauty</li>
            <li className='py-2'><FontAwesomeIcon icon={faHome} className='mr-2'/>Home & Office</li>
            <li className='py-2'><FontAwesomeIcon icon={faShirt} className='mr-2'/>Fashion</li>
            <li className='py-2'><FontAwesomeIcon icon={faComputer} className='mr-2'/>Computing</li>
            <li className='py-2'><FontAwesomeIcon icon={faAppleWhole} className='mr-2'/>Supermarket</li>
            <li className='py-2'><FontAwesomeIcon icon={faBaby} className='mr-2'/>Baby Products</li>
            <li className='py-2'><FontAwesomeIcon icon={faBasketball} className='mr-2'/>Sporting Goods</li>
            <li className='py-2'><FontAwesomeIcon icon={faListDots} className='mr-2'/>Other categories</li>
        </ul>
        </div> 
    </div>
  )
}

export default Banner;
