import React from 'react';

const PriceCard = ({ price }) => {
     return (
          <div>
               <h3 className='text-5xl font-bold text-purple-700'>{price.price}</h3>
               <h4 className='text-2xl font-bold'>{price.name}</h4>
          </div>
     );
};

export default PriceCard;