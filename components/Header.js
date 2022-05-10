import React from 'react'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon, 
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline"


function Header() {
  return (
      <>

    <div className = "flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">

      {/* left */}

      <div className = 'relative hidden lg:inline-grid w-24 cursor-pointer'>
          <Image
          src = "https://links.papareact.com/ocw"
          layout ="fill"
          objectFit='contain'/>
      </div>

      {/* middle */}
      <div className = 'relative lg:hidden w-10 flex-shrink-0 cursor-pointer'>
          <Image src = "https://links.papareact.com/jjm" layout ="fill" objectFit='contain'/>
      </div>

      <div className = "max-w-xs">
      <div className = "relative mt-1 p-3 rounded-md ">
          <div className = "absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className ="h-5 w-5 text-gray-500"/>
          </div>
          <input 
          className='
          bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-black focus:border-black
            rounded-md'
          type ="text" placeholder='Search'/>
      </div>

     
      </div>

  {/* right */}
  <HomeIcon className = "w-10 h-10"/>


    </div>
    </>
  )
}

export default Header