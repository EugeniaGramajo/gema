
import React from 'react';
import Navbar from '../Navbar/Navbar';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main className='min-h-screen  bg-bgHome2'>{children}</main>
      {/* Aquí puedes agregar un footer u otros elementos comunes */}
    </div>
  );
};

export default Layout;
