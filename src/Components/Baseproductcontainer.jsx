import React from 'react';

const Baseproductcontainer = ({ items, itemRenderer }) => {
  return (
    <div className='bg-white ml-[20px] mr-[20px] rounded-lg'>
      <header className='bg-blue-500 text-lg font-semibold text-center p-3'>
        <h1>Top Deals For You | Shop Now</h1>
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-2'>
        {items.map((item, index) => (
          <div key={index}>
            {itemRenderer(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Baseproductcontainer;
