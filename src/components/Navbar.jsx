import React from 'react'

const Navbar = () => {
  return (
    <>
    <div class="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000"
    
    >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
        <a href="#home" class="nav_items">
          Home
        </a>
        <a href="#experience" class="nav_items">
        Experience
        </a>
        <a href="#skills" class="nav_items">
        Skills
        </a>
        <a href="#projects" class="nav_items">
        Project
        </a>
        <a href="#contact" class="nav_items">
        Contact
        </a>
        </div>
    </div>
    </>
  )
}

export default Navbar