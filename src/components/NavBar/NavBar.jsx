import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Blog", url: "/blog" },
  { id: 5, name: "Contact", url: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="flex justify-around mx-10 ">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}

        <ul className={`md:hidden absolute duration-1000 ${open ? 'top-22' : '-top-55'} bg-amber-200`} >{links}</ul>
        <h3 className="ml-2 md:hidden block">My Navbar</h3>
      </span>

      <ul className="md:flex hidden">{links}</ul>

      {/* <ul className='flex justify-between'>
                {
                    navLinks.map(route=><li><a href={route.url}>{route.name}</a></li>)
                }
            </ul> */}
      <button>Sign In</button>
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
