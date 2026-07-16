import { useState } from 'react'
import bg from './assets/bg/bgnotext.mp4'
import logo from './assets/LOGO.png'
import { Helmet } from 'react-helmet-async'




function App() {
  return (
    <>
{/* Référencement SEO */}
    <Helmet>
        <title>Sunspes studio</title>
        <meta name="description" content="Sunspes, motion designer freelance basé en France. Découvrez mes projets de montage, motion design." />
        <link rel="canonical" href="https://sunspes.fr/" />
      </Helmet>

{/* Contenu principal */}
      <div className="bg-stone-900 overflow-hidden  md:bg-transparent flex items-center justify-center h-screen w-screen">
        <video autoPlay loop muted playsInline preload='auto' className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={bg} type="video/mp4" />
        </video>
        <img src={logo} alt="Logo" className="absolute z-10 w-100 mb-44" />

      </div>
    </>
  );
}

export default App;