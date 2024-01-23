import React, { useState } from 'react';
import Link from '../Link/Link';

const Navbar = () => {
     const [open, setOpen] = useState(false);

     const routes = [
          { "id": 1, "name": "Home", "path": "/" },
          { "id": 2, "name": "About", "path": "/about" },
          { "id": 3, "name": "Contact", "path": "/contact" },
          { "id": 4, "name": "Services", "path": "/services" },
          { "id": 5, "name": "Blog", "path": "/blog" }
     ];
        

     return (
          <nav>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setOpen(!open)} className="w-6 h-6 cursor-pointer">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>

               <ul className='md:flex'>
                    {
                         routes.map(route => <Link
                              key={route.id}
                              route={route}
                         />)
                    }
               </ul>
          </nav>
     );
};

export default Navbar;