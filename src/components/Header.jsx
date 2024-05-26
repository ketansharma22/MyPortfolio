import React from "react";
import "../styling/Header.css";
import { Link } from "react-scroll";
import { useState } from "react";
import dropdown from '../styling/images/dropdown.jpg'
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="header">
      <div id="threemain">
        <div id="menu-icon" onClick={toggleMenu}>
          <img src={dropdown} id="threedot" />
        </div>
        {menuOpen && (
          <div id="dropdown-menu">
            <Link spy={true} smooth={true} offset={-50} duration={500} to="profile">
              Profile
            </Link>
            <Link spy={true} smooth={true} offset={-50} duration={500} to="about">
              About
            </Link>
            <Link spy={true} smooth={true} offset={-50} duration={500} to="expertise">
              Expertise
            </Link>
            <Link spy={true} smooth={true} offset={-50} duration={500} to="work" >
              Work
            </Link>
            <Link spy={true} smooth={true} offset={-50} duration={500} to="achievements">
              Achievements
            </Link>
            <Link spy={true} smooth={true} offset={-50} duration={500} to="contact">
              Contact
            </Link>
          </div>
        )}
      </div>

      <nav>
        <Link spy={true} smooth={true} offset={50} duration={500} to="profile">
          Profile
        </Link>

        <Link spy={true} smooth={true} offset={-50} duration={500} to="about">
          About
        </Link>

        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="expertise"
        >
          Expertise
        </Link>

        <Link spy={true} smooth={true} offset={50} duration={500} to="work">
          Work
        </Link>

        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="achievements"
        >
          Achievements
        </Link>

        <Link spy={true} smooth={true} offset={50} duration={500} to="contact">
          Contact{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Header;
