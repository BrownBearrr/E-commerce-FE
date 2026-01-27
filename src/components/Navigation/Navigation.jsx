import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-40">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <NavLink to="/" className="text-3xl text-black gap-8 font-bold ">ShopEase</NavLink>
      </div>

      {/* Nav items */}
      <div className="flex flex-wrap items-center gap-10">
        <ul className="flex gap-14 ">
          <li className="text-gray-600 hover:text-black ">
            <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : '' }>Shop</NavLink>
          </li>
          <li className="text-gray-600 hover:text-black ">
            <NavLink to="/men" className={({isActive}) => isActive ? 'active-link' : '' }>Men</NavLink>
          </li>
          <li className="text-gray-600 hover:text-black ">
            <NavLink to="/women" className={({isActive}) => isActive ? 'active-link' : '' }>Women</NavLink>
          </li>
          <li className="text-gray-600 hover:text-black ">
            <NavLink to="/kid" className={({isActive}) => isActive ? 'active-link' : '' }>Kids</NavLink>
          </li>
        </ul>
      </div>

      {/* Search bar */}
      <div className="flex justify-center">
        <div className="border rounded flex overflow-hidden w-96">
          <div className="flex items-center justify-center px-4 border-1 ">
            <SearchOutlined />
            <input
              type="text"
              className="px-4 py-2 outline-none focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      {/* Action Item - icons */}
      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex items-center gap-12 ">
          <li>
            <Link to="/favorites">
              <HeartOutlined className="text-[20px] text-gray-600 hover:text-black cursor-pointer transition-colors" />
            </Link>
          </li>
          <li>
            <UserOutlined className="text-[20px] text-gray-600 hover:text-black cursor-pointer transition-colors" />
          </li>
          <li>
            <Link to="/cart=-items">
              <ShoppingCartOutlined className="text-[20px] text-gray-600 hover:text-black cursor-pointer transition-colors" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
