import { useState } from 'react'
import bg from './assets/montage/test.avif'
import alucard from './assets/montage/concept.jpg'
import machli from './assets/montage/machli.jpg'
import requin from './assets/montage/requin.jpg'
import kqly from './assets/montage/Kqly.jpg'
import wingman from './assets/montage/wingman.jpg'

const projects = [
  {
    id: 5,
    image: wingman,
    title: '🏆 280€ À GAGNER SUR CE TOURNOI WINGMAN !',
    description: 'Gaming',
    videoUrl: 'https://www.youtube.com/embed/-pJbrAkmReY?si=UgqSyVOCrSgF5amq',
  },
  {
    id: 2,
    image: machli,
    title: 'La tigresse que l\'Inde refusait de perdre',
    description: 'Storytelling,3D,Motion',
    videoUrl: 'https://www.youtube.com/embed/ZXi8MRmBFoM?si=aJA_CRDXhGaNLd7Z',
  },
  {
    id: 3,
    image: kqly,
    title: 'KQLY : L\'Étoile Tombée de Counter-Strike..',
    description: 'Storytelling',
    videoUrl: 'https://www.youtube.com/embed/lpLoDKUrAL4?si=TDX2Wchw2pKsD-fx',
    
  },
  {
    id: 4,
    image: requin,
    title: 'Comment le requin est devenu l\'ennemi public n°1 ?',
    description: 'Storytelling,Motion',
    videoUrl: 'https://www.youtube.com/embed/5ZQUf2Od9bU?si=fjcGswxZliye6u5j',
  },
  {
    id: 1,
    image: alucard,
    title: 'Le dernier survivant gagne 250€ !',
    description: 'Gaming',
    videoUrl: 'https://www.youtube.com/embed/PZmCetpoKgk?si=1vOciYo7YnmhshT2',
  },
]

const tagColors = {
  Gaming: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  Concept: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
  Storytelling: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
  '3D': 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  Motion: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300',
}

const getTagColor = (tag) => tagColors[tag] || 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300'

function Montage() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div className="bg-stone-50 transition-colors px-8 md:px-14 duration-300 ease-in-out dark:bg-stone-950">
      <section className=" mb-8 md:mb-12 ">
        <p className="md:text-[16rem] text-6xl tracking-tight font-bold text-black dark:text-white">Montage</p>
      </section>
    <div className=" pt-4 text-black dark:text-gray-200 font-inter sm:grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-x-4">
      {/* Référencement SEO
      <Helmet>
        <title>Montage Vidéo — SunSpes Studio</title>
        <meta name="description" content="Projets de montage vidéo du studio : storytelling, gaming, projets créatifs. Studio basé en France." />
        <link rel="canonical" href="https://sunspes.fr/montage/" />
      </Helmet> */}

      {/* Contenu principal */}
      {projects.map((project) => (
        <div key={project.id} className="md:hover:scale-105 md:hover:drop-shadow-lg transition-all duration-300 ease-in-out">
          <div
            className="w-fit flex flex-col items-start pb-6 cursor-pointer"
            onClick={() => setSelectedVideo(project.videoUrl)}
          >
            <img src={project.image} alt="Card Image" className="aspect-video rounded-xl object-cover mb-2" />
            <h1 className=" text-base md:text-xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.description.split(',').map((tag, i) => {
                const cleanTag = tag.trim()
                return (
                  <span
                    key={i}
                    className={`${getTagColor(cleanTag)} transition-colors duration-300 text-xs font-semibold px-3 py-1 rounded-md`}
                  >
                    {cleanTag}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      ))}

      {/* Modale vidéo plein écran */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-pink-400 transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            &times;
          </button>

          <div
            className="w-full max-w-4xl aspect-video px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>

    </div>
  )
}

export default Montage