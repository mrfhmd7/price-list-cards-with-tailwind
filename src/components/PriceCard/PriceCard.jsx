import React from 'react';

const PriceCard = ({ price }) => {
     return (
          <div className='bg-emerald-400 mt-8 rounded-md'>
               <div className='text-center p-4'>
                    <h3 className='text-5xl font-bold text-purple-700'>{price.price}</h3>
                    <h4 className='text-3xl font-bold'>{price.name}</h4>
               </div>
               <div className='p-3 text-xl'>
                    <p>Features:</p>
                    {
                         price.features.map(feature => <li>{feature}</li>)
                    }
               </div>
          </div>
     );
};

export default PriceCard;