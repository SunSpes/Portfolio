import { useState } from 'react'
import bg from './assets/projet/test.avif'

function Card() {
  return (
    <div className="bg-stone-900 text-white w-fit flex flex-col items-start rounded-lg shadow-md p-4">
      <img src={bg} alt="Card Image" className="aspect-video object-cover rounded-lg mb-4" />
      <h1 className="text-xl font-bold">Name</h1>
      <p>This is a simple card component.</p>
    </div>
  );
}

export default Card;