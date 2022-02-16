import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdOutlineExplore,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
  MdWatchLater,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

import { Link } from "react-router-dom";

export default function Sidebar({ sidebar, handleSidebarToggle }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleSidebarToggle()}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <MdOutlineExplore size={23} />
          <span>Explore</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscription</span>
        </li>
      </Link>
      <hr />
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <Link to="/playlist">
        <li>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </li>
      </Link>
      <li>
        <MdWatchLater size={23} />
        <span>Watch later</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>

      <hr />
      <li onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
}
