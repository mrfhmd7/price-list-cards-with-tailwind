import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
     const [prices, setPrices] = useState([]);

     useEffect(() => {
          fetch('prices.json')
               .then(res => res.json())
               .then(data => setPrices(data))
     },[])
     return (
          <div>
               <h2 className='text-5xl text-center text-cyan-900 bg-cyan-300 font-bold p-4'>This is Price list.</h2>
               <PriceCard></PriceCard>
          </div>
     );
};

export default PriceList;