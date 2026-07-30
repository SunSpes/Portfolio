import { useNavigate } from 'react-router-dom'
import { projects } from './projectsData.js'

const tagColors = {
  Website: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  Branding: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300',
  Packaging: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  Motion: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-200',
  "3D": 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200',
}

const getTagColor = (tag) => tagColors[tag] || 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300'

function MotionDesign() {
  const navigate = useNavigate()

  return (
    <div className="px-8 md:px-14 bg-stone-50 transition-colors duration-300 ease-in-out dark:bg-stone-950">
      <section className="md:pt-40 mb-8">
        <p className="md:text-8xl text-6xl tracking-tight font-bold text-black dark:text-white">Motion Design</p>
      </section>
      <div className="pt-4 text-black dark:text-white font-inter sm:grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-x-4">
        {projects.map((project) => (
          <div key={project.id} className="md:hover:scale-105 md:hover:drop-shadow-lg transition-all duration-300 ease-in-out">
            <div
              className="w-fit flex flex-col items-start pb-6 cursor-pointer"
              onClick={() => navigate(project.path)}
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] rounded-lg object-cover mb-4"
              />
              <h1 className="text-base md:text-4xl font-bold">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.description.split(',').map((tag, i) => {
                  const cleanTag = tag.trim()
                  return (
                    <span key={i} className={`${getTagColor(cleanTag)} transition-colors duration-300 text-xs font-semibold px-3 py-1 rounded-md`}>
                      {cleanTag}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MotionDesign