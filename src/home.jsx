import { useState } from 'react'
import bg from './assets/bg/bgnotext.mp4'
import bgwebm from './assets/bg/bgnotext.webm'
import logo from './assets/LOGO.png'




function App() {
  return (
    <>
{/* Référencement SEO
    <Helmet>
        <title>SunSpes Studio</title>
        <meta name="description" content="SunSpes, studio de motion design basé en France. Découvrez nos projets de montage et motion design." />
        <link rel="canonical" href="https://sunspes.fr/" />
      </Helmet> */}

{/* Contenu principal */}
      <div className="bg-stone-900 overflow-hidden  md:bg-transparent flex items-center justify-center h-screen w-screen">
        <video autoPlay loop muted playsInline preload='auto' className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={bgwebm} type="video/webm" />
          <source src={bg} type="video/mp4" />
        </video>
        <img src={logo} alt="Logo" className="absolute z-10 w-100 mb-44" />

      </div>
    </>
  );
}

export default App;