import React from 'react'

import { Footer, Blog, Features, WhatGPT3 , Possibility, Header} from './Container';
import {CTA, Brand, NavBar} from './components';
import './app.css';

function App() {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <NavBar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>  
        <Footer/>  
    </div>
  )
}

export default App
