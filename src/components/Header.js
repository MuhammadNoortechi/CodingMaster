import React, { useState } from "react";
import "./css/Header.scss";
import { NavLink } from "react-bootstrap";
import Button from "./button/Button"
const Header = () => {
  const [color, setColor] = useState(false);
  const [isMobile,setIsMobile]=useState(false)
  // scroll color change
  const changeColor = () => {
    if (window.scrollY >= 56) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? " fixed-top navbar-scrolled " : " fixed-top "}>
    <nav className="container d-md-flex align-items-center navbar-container">
      <div className="logo fs-3">Coding Master</div>

    
      <div className="icon" onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ?( <i className="fas fa-times"></i>):( <i className="fas fa-bars"></i>)}
      </div>

      <ul className={isMobile ? "show navbar-container ul-container":"navbar-container ul-container ms-auto pt-3"}>
        <li className="li-container">
          <NavLink className="links " href="#">
            Home
          </NavLink>
        </li>

        <li className="li-container">
          <label for="btn-1" className="show">
            Features+
          </label>
          <NavLink className="links" href="#">
           About
          </NavLink>
          <input type="checkbox" id="btn-1" />
          <ul className="bg-dropdown ul-container">
            <li className="li-container">
              <NavLink className="links" href="#">
                Feature 1
              </NavLink>
            </li>
            <li className="li-container">
              <NavLink className="links" href="#">
                Feature 2
              </NavLink>
            </li>
            <li className="li-container">
              <NavLink className="links" href="#">
                Feature 3
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="li-container">
          <label for="btn-2" className="show ">
            Services+
          </label>
          <NavLink className="links" href="#">
            Services
          </NavLink>
          <input type="checkbox" id="btn-2" />
          <ul className="bg-dropdown ul-container">
            <li className="li-container">
              <NavLink className="links" href="#">
              Custom Software Development
              </NavLink>
            </li>
            <li className="li-container">
              <NavLink className="links" href="#">
              Project Management
              </NavLink>
            </li>
            <li className="li-container">
              <NavLink className="links" href="#">
                Mobile App Development 
              </NavLink>
              
            </li>
            <li className="li-container">
              <NavLink className="links" href="#">
                Search Engine Optimization
              </NavLink>
              
            </li>
            <li className="li-container">
              <label for="btn-3" className="show">
                More+
              </label>
              <NavLink className="links" href="#">
                More <span className="fa fa-plus"></span>
              </NavLink>
              <input type="checkbox" id="btn-3" />
              {/* <ul >
                <li>
                  <NavLink className="links" href="#">Submenu 1</NavLink>
                </li>
                <li>
                  <NavLink className="links" href="#">Submenu 2</NavLink>
                </li>
                <li>
                  <NavLink className="links" href="#">Submenu 3</NavLink>
                </li>
              </ul> */}
            </li>
          </ul>
        </li>

        <li className="li-container">
          <NavLink className="links" href="#">
           Careers
          </NavLink>
        </li>
        <li className="li-container">
          <NavLink className="links" href="#">
            Blog
          </NavLink>
        </li>
        {/* <button className="btn  mt-2 btn-nav-link rounded-0 fw-bold">
         Get In Touch
        </button> */}
        <Button label={"get in touch"} />
      </ul>
    </nav>
  </div>
  );
};

export default Header;
