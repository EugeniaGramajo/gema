
import React from 'react';
import Navbar from '../Navbar/Navbar';


const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar/>
      <main className="h-full bg-red-500 ">{children}</main>
      {/* Aquí puedes agregar un footer u otros elementos comunes */}
    </div>
  );
};

export default Layout;
