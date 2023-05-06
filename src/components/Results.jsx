import React from 'react'
import Card from './Card'

export default function Results({ films }) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4'>
      {films.map(
        (film) => (
          <Card key={film.id} result={film} />

        )
      )}

    </div>
  )
}
// we used ()=>() for map