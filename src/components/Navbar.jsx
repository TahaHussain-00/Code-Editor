import React from 'react'
import Logo from '../assets/logo.png'
function Navbar() {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4">
      <div className="left">
        <div className="logo flex font-bold text-2xl text-white text-center">
          <img className=" w-14 h-14" src={Logo} alt="" />
          <h1 className="px-2 mt-2">Code Editor</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar