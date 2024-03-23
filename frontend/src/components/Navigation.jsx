import React from "react";
import { Link } from "react-router-dom";
import { VscAccount, VscBook } from "react-icons/vsc";
import { IoMdSearch } from "react-icons/io";

export default function Navigation() {
  return (
    <header className="bg-navigation py-5 px-10 rounded-md">
      <nav className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-5 lg:mb-0">
          <VscBook className="mr-5 icon" />
          <div className="relative flex items-center">
            <IoMdSearch className="absolute left-0 ml-2 text-search" />
            <input
              type="text"
              placeholder="I'm looking for..."
              className="pl-8 pr-2 py-1 text-sm text-search rounded-md border border-gray-100 lg:w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-5 lg:space-x-12">
          <Link to="/" className="text-black">
            Home
          </Link>
          <Link to="/products" className="text-black">
            Shop
          </Link>
          <Link to="/cart" className="text-black">
            Cart
          </Link>
          <Link to="/products" className="text-black">
            <VscAccount className="icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
}