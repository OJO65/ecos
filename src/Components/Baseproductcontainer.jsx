import React from 'react';

const Baseproductcontainer = ({ items, itemRenderer }) => {
  return (
    <div>
      <header className='bg-gray-500'>
        <h1>Product Container</h1>
      </header>
      <div>
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
