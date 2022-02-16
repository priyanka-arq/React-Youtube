import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MdNotifications,
  MdApps,
  MdKeyboardVoice,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header({ handleSidebarToggle }) {
  const [input, setInput] = useState("");
  const { user } = useSelector((state) => state.auth);

  const navigat = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigat(`/search/${input}`);
  };

  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleSidebarToggle()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="Search"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch size={25} />
          </button>
        </form>
      </>

      <div className="header__icons">
        <MdKeyboardVoice size={28} />
        <MdOutlineCreateNewFolder size={28} />
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
}
