import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./styles.scss";

export default function Navigation() {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <Fragment>
      <div class="nav">
        <div class="nav-logo">
          <Link to="/">BUNNY EXPERT</Link>
        </div>
        <div class={navOpen ? "nav-links-mobile" : "nav-links"} onClick={() => setnavOpen(false)}>
          <div class="nav-link">
            <Link to="/food">Food</Link>
          </div>
          <div class="nav-link">
            <Link to="/health">Health</Link>
          </div>
          <div class="nav-link">
            <Link to="/about">About</Link>
          </div>
          <div class="nav-link btn">
            <a href="#donate">Donate</a>
          </div>
        </div>
        <button className="hamburger" onClick={() => setnavOpen(!navOpen)}>
          {navOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
        
        </button>
      </div>
      <Outlet />
      <div className="footer">
        <h2><Link to="/">BUNNY EXPERT</Link></h2>
        <div className="menu">
          <Link to="/food">Food</Link>
          <Link to="/health">Health</Link>
          <Link to="/about">About</Link>
          <a href="#donate">Donate</a>
        </div>
        <div className="social-icons">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-tiktok"></i></a>
          <a href="#"><i class="fa-solid fa-envelope"></i></a>
        </div>
        <p>Copyright &copy; All rights reserved || Made with &hearts; by Trang Ha</p>
      </div>
    </Fragment>
  );
}