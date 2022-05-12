import React from 'react'

function Suggestion({username, company, image}) {
  return (
    <div className = "flex items-center mt-3 justify-between">
        <img 
        className='rounded-full border p-[2px] w-10 h-10'
        src = {image} alt = ""/>

        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>
                {username}
            </h2>
            <h3 className='text-xs text-gray-400 truncate'>
                Works at {company}
            </h3>
        </div>

        <button className='text-xs text-blue-400 font-bold'>Follow</button>
    </div>
  )
}

export default Suggestion