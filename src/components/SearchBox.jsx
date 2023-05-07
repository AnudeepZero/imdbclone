"use client";


import { useRouter } from 'next/navigation';
// router changed next/navigation
import React, { useState } from 'react'

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();


    function handleSubmit (e){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }

  return (
    <div>
    <form className='flex max-w-6xl mx-auto justify-between items-center px-5' onSubmit={handleSubmit} >
    <input className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1 ' type='text' placeholder='Search Keywords..' 
        value={search} onChange={(e)=>setSearch(e.target.value)}
    />
    <button disabled={!search} className='text-amber-600 disabled:text-gray-400 ' type='submit' 
    
    >Submit</button> 
    </form>
    </div>
  )
}
