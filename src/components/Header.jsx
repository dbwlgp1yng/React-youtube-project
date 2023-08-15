import React, { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header() {
  const { keyword } = useParams();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => setText(keyword || ''), [keyword]); 

  return (
    <header className="w-full flex p-4 border-b border-zinc-300 mb-4">
      <Link to='/' className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold text-3xl ml-2">Yutube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input 
          className="w-1/2 px-4 outline-none border bg-transparent rounded-3xl" 
          type="text" 
          placeholder="검색어를 입력하세요." 
          value={text}
          onChange={handleChange}
        />
        <button className="px-4 text-lg">
          <BsSearch />
        </button>
      </form>
      <button onClick={toggleDarkMode} className="text-xl bg-transparent transition-all cursor-pointer">
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
    </header>
  );
}
