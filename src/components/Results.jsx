import React from 'react'

export default function Results({films}) {
  return (
    <div>
    {films.map(
        (film)=>(
            <div key={film.id}>
                {film.original_title}
            </div>
            )
    )}
    
    </div>
  )
}
// we used ()=>() for map