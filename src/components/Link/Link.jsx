import React from 'react';

const Link = ({ route }) => {
     return (
          <li className='mr-20 rounded font-semibold hover:bg-amber-500'>
               <a href={route.path}>{route.name}</a>
          </li>
     );
};

export default Link;