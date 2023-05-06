import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { FaInfoCircle } from 'react-icons/fa'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
    return (
        <>
            <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
            <div className='flex' >
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/about" Icon={FaInfoCircle} />
            </div>

            <div className="flex text-center space-x-5" >
            <DarkModeSwitch className="text-center" />
                <Link href="/" >
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-emerald-400 py-1 px-2 rounded-lg mr-1 ' >IMDB</span>
                        <span className='text-xl hidden sm:inline ' >Clone</span>
                    </h2>
                </Link>
            </div>
            </div>
        </>
    )
}