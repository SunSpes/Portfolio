import BrandSearch from './projet/BrandSearch.jsx'
import Caats from './projet/Caats.jsx'

import brand from './assets/motion/brandsearch/cover.mp4'
import caats from './assets/motion/caats/cover.mp4'


export const projects = [
  {
    id: 1,
    video: brand,
    title: 'BrandSearch',
    description: 'Website,Motion',
    path: '/motion-design/brandsearch',
    component: BrandSearch,
  },

    {
    id: 2,
    video: caats,
    title: 'Caats',
    description: 'Packaging,Motion,3D',
    path: '/motion-design/caats',
    component: Caats,
  },



]