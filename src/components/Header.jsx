import React, { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Header() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => setText(keyword || ''), [keyword]); // keyword가 변경될때마다 검색어도 바뀌도록

  return (
    <header className="w-full flex p-4 border-b border-zinc-300 mb-4">
      <Link to='/' className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold text-3xl ml-2">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input 
          className="w-1/2 px-4 outline-none bg-black text-gray-50 rounded-3xl" 
          type="text" 
          placeholder="검색어를 입력하세요." 
          value={text}
          onChange={handleChange}
        />
        <button className="px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
