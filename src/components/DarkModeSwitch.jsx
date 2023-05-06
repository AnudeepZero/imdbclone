"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {BsSun} from 'react-icons/bs'
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function DarkModeSwitch() {

  const {systemTheme, theme, setTheme} = useTheme();
  
  // by below code the switched will render after the page is loaded, if not used their will be conflict because the rendering and theme changing(dark mode) before rendering not matches
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // returns the current theme running
  const currentTheme = theme ==="system" ? systemTheme : theme;

  return (
    // don't use extra div it will change the style, this components will embedded in flex if we use div here it will change
    <>
    {  mounted &&(currentTheme === "dark" ? (
      <BsSun  className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')} />

    ) : (
      <BsFillMoonStarsFill className='text-xl cursor-pointer hover:text-amber-500'  onClick={() => setTheme('dark')}/>

    ))}
    </>
  )
}


// In the onClick event, you need to pass a function to be executed when the element is clicked. 
// When you use setTheme('dark') directly, it will be executed when the component renders, not when the element is clicked.

// By using an arrow function, you're creating a function that will be executed only when the element is clicked. 
// The empty brackets () are used to pass arguments to the function, in case you need them. In this case, you don't need to pass any arguments,
//  so you can use empty brackets.