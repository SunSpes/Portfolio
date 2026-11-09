import { useNavigate, useParams } from 'react-router-dom'
import { projects } from './projectsData.js'

const gridCols = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const p = projects.find((x) => x.slug === slug)

  if (!p) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-black dark:text-white p-14">
        <p className="text-2xl font-bold">Projet introuvable.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-black dark:text-white font-inter transition-colors duration-300 ease-in-out">
      <div className="px-8 md:px-14 pt-20 md:pt-40">
        <h1 className="text-4xl md:text-9xl font-bold mb-4 md:mb-20">{p.title}</h1>

        {/* Vidéo principale */}
        <div
          className={`relative rounded-xl overflow-hidden md:mb-8 ${
            p.vertical ? 'aspect-[9/16] md:aspect-video' : 'aspect-video'
          }`}
        >
          <iframe
            src={`https://player.vimeo.com/video/${p.vimeoId}?badge=0&autopause=0`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
            title={p.title}
            allowFullScreen
          />
        </div>

        {/* Description */}
        <section className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0 py-10">
          <section className="flex flex-col gap-8 md:gap-16">
            <div>
              <p className="text-base md:text-xl">Client</p>
              <p className="text-2xl md:text-4xl font-bold">{p.client}</p>
            </div>
            <div>
              <p className="text-base md:text-xl">Services</p>
              <p className="text-2xl md:text-4xl font-bold">{p.services}</p>
            </div>
          </section>
          <p className="text-base font-semibold md:w-2/5 md:text-2xl">{p.description}</p>
        </section>

        {/* Grille médias */}
        <div className={`flex flex-col md:grid ${gridCols[p.columns ?? 2]} gap-6 md:gap-8 py-10`}>
          {p.medias.map((m, i) =>
            m.type === 'video' ? (
              <video
                key={i}
                src={m.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-xl object-cover"
              />
            ) : (
              <img
                key={i}
                src={m.src}
                alt={`${p.title} ${i + 1}`}
                className={`w-full h-full rounded-xl object-cover ${m.desktopOnly ? 'hidden md:block' : ''}`}
              />
            )
          )}
        </div>

        {/* Retour */}
        <section className="w-full flex justify-center py-40">
          <button
            onClick={() => navigate('/motion-design')}
            className="text-gray-200 dark:text-gray-500 font-bricolage font-bold text-7xl md:hover:text-stone-900 md:dark:hover:text-gray-100 active:text-stone-900 transition-colors duration-300 ease-in-out"
          >
            RETOUR / BACK
          </button>
        </section>
      </div>
    </div>
  )
}