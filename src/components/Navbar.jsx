import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-xl md:text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4 text-sm md:text-lg">Account</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
