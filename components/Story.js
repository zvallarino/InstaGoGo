import React from 'react'

function Story({profile}) {
  return (
      <div >
        <img className = "h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
            src ={profile.avatar} alt = {profile.name} 
           />
        <p
        className = "text-xs w-14 truncate text-center"
        >{profile.username}</p>
    </div>
  )
}

export default Story