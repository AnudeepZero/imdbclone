import React from 'react'
import NavItem from './NavItem'

export default function NavBar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-600 lg:text-lg p-4 ' >
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
