import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <div className=' flex justify-evenly p-7 py-5 absolute bg-gray-700 w-full bottom-0 '>
    <div>
      <div><h1>Vivek Kumar</h1></div>
    </div>
    <div>

      <h1>Imortant Link</h1>
      <div>
        <p>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/'}><li>About</li></Link>
          <Link to={'/'}><li>project</li></Link>
          <Link to={'/'}><li>service</li></Link>
          <Link to={'/'}><li>contact us</li></Link>
        </p>
      </div>
    </div>
    <div>
      <h1>Find On</h1>
      <div>
        <div>
           <img src="" alt="" />
        </div>
        <div>
           <img src="" alt="" />
        </div>
        <div>
           <img src="" alt="" />
        </div>
        <div>
           <img src="" alt="" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
