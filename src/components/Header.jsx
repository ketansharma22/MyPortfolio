import React from 'react'
import '../styling/Header.css'
import {Link} from 'react-scroll'
function Header() {
  return (
    <div id='header'>
      <nav>
        <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      to='profile' >Profile</Link>

      <Link spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500}
      to='about' >About</Link>

      <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      to='expertise' >Expertise</Link>

      <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      to='work' >Work</Link>

<Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      to='achievements' >Achievements</Link>

      <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      to='contact' >Contact </Link>
      </nav>
    </div>
  )
}

export default Header