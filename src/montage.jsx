import { useState } from 'react'
import { videos } from './montageData.js'

const tagColors = {
  Gaming: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  Concept: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
  Storytelling: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
  '3D': 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  Motion: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300',
}

const getTagColor = (tag) =>
  tagColors[tag] || 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300'

// Image personnalisée si fournie, sinon la miniature YouTube
const getThumbnail = (v) =>
  v.image || `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`

function Montage() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="bg-stone-50 transition-colors px-8 md:px-14 duration-300 ease-in-out dark:bg-stone-950">
      <section className="mb-8 md:mb-12">
        <p className="md:text-[16rem] text-6xl tracking-tight font-bold text-black dark:text-white">Montage</p>
      </section>

      <div className="pt-4 text-black dark:text-gray-200 font-inter sm:grid grid-cols-2 md:grid-cols-3 gap-x-4">
        {videos.map((v) => (
          <div key={v.youtubeId} className="md:hover:scale-105 md:hover:drop-shadow-lg transition-all duration-300 ease-in-out">
            <div
              className="w-full flex flex-col items-start pb-6 cursor-pointer"
              onClick={() => setSelectedId(v.youtubeId)}
            >
              <img
                src={getThumbnail(v)}
                alt={v.title}
                className="w-full aspect-video rounded-xl object-cover mb-2"
              />
              <h1 className="text-base md:text-xl font-bold">{v.title}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {v.tags.split(',').map((tag, i) => {
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
      </div>

      {/* Modale vidéo plein écran */}
      {selectedId && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-pink-400 transition-colors"
            onClick={() => setSelectedId(null)}
          >
            &times;
          </button>

          <div className="w-full max-w-4xl aspect-video px-4" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedId}?autoplay=1&rel=0`}
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
  )
}

export default Montage