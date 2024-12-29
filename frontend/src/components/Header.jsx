import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='  fixed w-full'>
      <header className="bg-black text-white px-8  py-4 pt-8 border-b border-b-slate-500">
      <nav className="  mx-10 px-6 flex justify-between">
        <h1 className="text-4xl text-primary text-glow font-bold">Vivek Kumar</h1>
        <ul className="flex text-xl font-medium  gap-12">
           <NavLink to={'/'} ><li className='hover:text-primary focus:shrink hover:font-bold'>Home </li></NavLink>
           <NavLink to={'/about'}><li>About</li></NavLink>
           <NavLink to={'/project'}><li>Projects</li></NavLink>
           <NavLink to={'/service'}><li>Services</li></NavLink>
           <NavLink to={'contact'}><li>Contact</li></NavLink>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
