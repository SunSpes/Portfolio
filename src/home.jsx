import { useState } from 'react'
import bg from './assets/bgnotext.mp4'
import logo from './assets/LOGO.png'




function App() {
  return (
    <>
      <div className="bg-stone-900 overflow-hidden  md:bg-transparent flex items-center justify-center h-screen w-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={bg}/>
        </video>
        <img src={logo} alt="Logo" className="absolute z-10 w-100 mb-44" />

      </div>
    </>
  );
}

export default App;