import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile.js'
import Suggestions from './Suggestions.js'

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 mt-4 xl:max-w-6xl mx-auto">

        {/* Section
        Stories
        Posts */}
        <section className="col-span-2">
            <Stories />
            <Posts />
        </section>
       
        <section className='hidden xl:inline-grid md:col-span-1'>
            <div className = 'fixed top-20'>
              <MiniProfile />
              <Suggestions />
            </div>
        </section>
    </main>
  )
}

export default Feed
