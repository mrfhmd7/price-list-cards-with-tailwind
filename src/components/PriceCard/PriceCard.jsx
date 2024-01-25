import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
     return (
          <div className='bg-emerald-400 mt-8 rounded-md'>
               <div className='text-center pt-4 pb-4'>
                    <h3 className='text-5xl font-bold text-purple-700'>{price.price}</h3>
                    <h4 className='text-3xl font-bold'>{price.name}</h4>
               </div>
               <div className='p-3 text-xl'>
                    <p className='underline font-bold'>Features:</p>
                    {
                         price.features.map((feature, idx) => <Feature
                              key={idx}
                              feature={feature}
                         ></Feature>)
                    }
               </div>
               <button className='font-bold text-xl text-white bg-green-600 hover:bg-green-700 w-full h-10 rounded-md'>Buy now</button>
          </div>
     );
};

export default PriceCard;