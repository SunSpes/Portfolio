import { useNavigate } from 'react-router'
import video1 from '../assets/motion/caats/box.mp4'
import video2 from '../assets/motion/caats/yuni.mp4'
import video3 from '../assets/motion/caats/Téléphone.mp4'
import box from '../assets/motion/caats/box190.png'

function Caats() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-black dark:text-white font-inter transition-colors duration-300 ease-in-out">
      <div className="px-8 md:px-14 pt-20 md:pt-40">

        {/* Titre */}
        <h1 className="text-4xl md:text-9xl font-bold mb-4 md:mb-20">
          Caats
        </h1>

{/* Video */}
<div className="relative pb-[56.25%] rounded-xl overflow-hidden md:mb-8">
  <iframe
    src="https://player.vimeo.com/video/1214221301?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    className="absolute top-0 left-0 w-full h-full rounded-xl"
    title="BrandSearch"
    allowFullScreen
  />
</div>
<script src="https://player.vimeo.com/api/player.js"></script>

     

        {/* Description */}
        <section className="flex md:flex-row md:justify-between flex-col gap-12 md:gap-0 py-10">
          <section className="flex flex-col gap-8 md:gap-16">
            <section>
              <p className="text-base md:text-xl">Client</p>
              <p className="text-2xl md:text-4xl font-bold">Maatso</p>
            </section>
            <section>
              <p className="text-base md:text-xl">Services</p>
              <p className="text-2xl md:text-4xl font-bold">Motion, Animation 3D, Sound Design</p>
            </section>
          </section>
          <section className="text-base font-semibold md:w-2/5 md:text-2xl">
            <p>
              Caats est une marque de croquettes pour chats qui prend soin de la planète et des chats grâce à des menus personnalisés selon les besoins de chaque chat.
              Nous avons réalisé un motion pour la collaboration commerciale entre le youtubeur maatso et la marque de croquette Caats
            </p>
          </section>
        </section>


{/* Grille médias */}
<div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-6 md:gap-8 py-10">
  <video
    className="w-full h-full rounded-xl object-cover"
    src={video1}
    autoPlay
    loop
    muted
    playsInline
  />

  <video
    className="w-full h-full rounded-xl object-cover"
    src={video2}
    autoPlay
    loop
    muted
    playsInline
  />
  <video
    className="w-full h-full rounded-xl object-cover"
    src={video3}
    autoPlay
    loop
    muted
    playsInline
  />
  <img
    src={box}
    alt="Styleframe 2"
    className="w-full h-full hidden md:block rounded-xl object-cover"
  />
</div>


{/* Retour */}
<section className='w-full flex justify-center py-40'>
  <button onClick={() => navigate('/motion-design')} 
  className=" text-gray-200 dark:text-gray-500 font-bricolage font-bold text-7xl md:dark:hover:text-gray-100 md:transition-colors md:duration-300 md:ease-in-out active:text-stone-900 md:hover:text-stone-900">RETOUR / BACK</button>

</section>

      </div>
    </div>
  )
}



export default Caats