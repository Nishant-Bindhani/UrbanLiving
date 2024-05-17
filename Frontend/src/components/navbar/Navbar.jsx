<<<<<<< HEAD
import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
=======
import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

>>>>>>> 6585651d25873645494b923273cc5e72f1189dbc
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
<<<<<<< HEAD
          <span>UrbanLiving</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Signup
=======
          <span>Urban Living</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign In</a>
        <a href="" className="register">
          Sign Up
>>>>>>> 6585651d25873645494b923273cc5e72f1189dbc
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
<<<<<<< HEAD
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
=======
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
>>>>>>> 6585651d25873645494b923273cc5e72f1189dbc
        </div>
      </div>
    </nav>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 6585651d25873645494b923273cc5e72f1189dbc

export default Navbar;
