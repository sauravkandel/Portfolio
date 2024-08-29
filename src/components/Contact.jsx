import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
<div class="container contact" id='contact'>
<h1>CONTACT ME</h1>
<div class="contact-icon"
data-aos="zoom-in"
data-aos-duration="1000"
>
<a href="https://www.instagram.com" target="_blank" class="items">
  <FaInstagram />
</a>
<a href="https://facebook.com" target="_blank" class="items">
  <CiFacebook className="icons"/>
</a>
<a href="https://www.linkedin.com" target="_blank" class="items">
  <CiLinkedin className="icons"/>
</a>
<a href="https://twitter.com" target="_blank" class="items">
  <FaSquareXTwitter className="icons"/>
</a>
<a href="https://github.com" target="_blank" class="items">
  <FaGithubSquare className="icons"/>
</a>
<a href="mailto:sauravkc28@gmail.com" target="_blank" class="items">
  <SiGmail className="icons"/>
</a>
</div>
</div>

    </>
  )
}

export default Contact