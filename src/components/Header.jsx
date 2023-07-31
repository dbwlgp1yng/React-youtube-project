import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <header className="fixed w-full flex items-center justify-between px-10 py-4">
      <div onClick={handleClick} className="cursor-pointer">
        <img
          className="w-24"
          src="https://logos-world.net/wp-content/uploads/2020/05/YouTube-Logo.jpg"
          alt="youtube logo"
        />
      </div>
      <form className="w-1/3 relative">
        <input 
          className="w-full border-[1px] border-gray-500 rounded-3xl pl-4 pr-14 py-1 focus:outline-none" 
          type="text" 
          placeholder="검색어를 입력하세요." 
        />
        <button className="absolute top-2 right-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
