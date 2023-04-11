
import React from 'react'
import { useState } from 'react';
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assests/logo.svg';
//BEM -> Block Element Modifier
const Element = () => (
  <>
     <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open Ai</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>
)

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3_navbar-links_container'>
          <Element/>
        </div>
      </div>
      <div className='gpt3_navbar_sign'>
        <p>Sign in</p>
        <button type='button'>sign up</button>
      </div>
      <div className='gpt3_navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onclick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onclick={() => setToggleMenu(true)}/>
        }
      {toggleMenu &&(
        <div className='gpt3_navbar_menu_container scale-up-center'>
          <div className='gpt3_navbar-menu_container-links'>
            <Element/>
            <div className='gpt3_navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>sign up</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default NavBar;
