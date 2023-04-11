import React from 'react'
import './footer.css'
import gpt3Logo from  '../../assests/logo.svg'
function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>First Project Completed by Harsh Yadav </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Private Policy</p>
          <p>Contact</p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Harsh Yadav</p>
          <p>93-4029-8751</p>
          <p>orion260204@gmail.com</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
