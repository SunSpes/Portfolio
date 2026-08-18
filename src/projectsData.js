import BrandSearch from './projet/BrandSearch.jsx'
import Caats from './projet/Caats.jsx'
import Marci from './projet/Marci.jsx'
import Sacha from './projet/Intro.jsx'

import brand from './assets/motion/brandsearch/cover.mp4'
import caats from './assets/motion/caats/cover.mp4'
import marci from './assets/motion/marci/01/Cover.mp4'
import sacha from './assets/motion/sacha/Cover.mp4'


export const projects = [
  {
    id: 1,
    video: brand,
    title: 'BrandSearch',
    description: 'Website',
    path: '/motion-design/brandsearch',
    component: BrandSearch,
  },

    {
    id: 2,
    video: caats,
    title: 'Caats',
    description: 'Ads,3D',
    path: '/motion-design/caats',
    component: Caats,
  },

      {
    id: 3,
    video: marci,
    title: 'Marci',
    description: 'Ads',
    path: '/motion-design/marci',
    component: Marci,
  },

        {
    id: 4,
    video: sacha,
    title: 'Sacha I Cypher',
    description: 'Intro',
    path: '/motion-design/sacha',
    component: Sacha,
  },



]