import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/logo.svg"
import { Star } from "./Star";

export const Nav = () => {
  const path = useLocation();

  // useEffect(() => console.log(path.pathname), []);
  return (
    <header className="outer">
      <Link to="/" className="name-space">
        <img src={Logo} alt="Logo" width={40} height={40} />
        <h2>N.P. Ngcakani</h2>
      </Link>
      {path.pathname === "/" ? null : (
        <div className="nav-bar">
          <Link to="/home" className="link link2" style={path.pathname === "/home"?{background: "#FFB319", color: "#fff"}:null}>
            HOME
          </Link>
          <Link to="/programming" className="link link1" style={path.pathname === "/programming"? {background: "#00A19D", color: "#fff"}:null}>
            PROGRAM
          </Link>
          {/* <Link to="/poetry" className="link link1" style={path.pathname === "/poetry"?{background: "#FFB319", color: "#fff"}:null}>
            POETRY
          </Link> */}
          <Link to="/about" className="link link2" style={path.pathname === "/about"? {background: "#FFB319", color: "#fff"}:null}>
            ABOUT
          </Link>
          <Link to="/contact"className="link link1" style={path.pathname === "/contact"?{background: "#00A19D", color: "#fff"}:null}>
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};
