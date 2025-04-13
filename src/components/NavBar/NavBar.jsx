import React from 'react';
import Link from './Link';

const navLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Services", url: "/services" },
    { id: 4, name: "Blog", url: "/blog" },
    { id: 5, name: "Contact", url: "/contact" },
  ];
  

const NavBar = () => {
    return (


        <nav>

            <ul className='flex justify-around'>
                {
                    navLinks.map(route=><Link route={route}></Link>)
                }
            </ul>
            {/* <ul className='flex justify-between'>
                {
                    navLinks.map(route=><li><a href={route.url}>{route.name}</a></li>)
                }
            </ul> */}
        </nav>
        // <nav>
        //     <ul className='flex justify-between'>
        //         <li><a href="/about">about</a></li>
        //         <li><a href="/home">home</a></li>
        //         <li><a href="/contact">contact</a></li>
        //     </ul>
        // </nav>
    );
};

export default NavBar;