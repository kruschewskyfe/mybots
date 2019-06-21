import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
//import UserCrud from "../user/UserCrud";

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home" /> Início
      </Link>
      <Link to="/bots">
        <i className="fa fa-users" /> Bots
      </Link>
      <Link to="/chat">
        <i class="fa fa-comments" /> Chat
      </Link>
    </nav>
  </aside>
);
