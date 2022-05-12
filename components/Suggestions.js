import React, {useState,useEffect} from 'react'
import { faker } from '@faker-js/faker';
import Suggestion from "./Suggestion.js"

function Suggestions() {
    const [suggestions,setSuggestions] = useState([]);

    useEffect(() => {
      const suggestions = [...Array(10)].map((_,i) => ({
          ...faker.helpers.contextualCard(),id: i
      }))

      setSuggestions(suggestions)
      console.log(suggestions)
   
    }, [])

    const allSuggestions = suggestions.map((suggestion)=><Suggestion 
    key = {suggestion.id} username = {suggestion.username} image = {suggestion.avatar}
    company ={suggestion.company.name}/>)
    
  return (
    <div className ="mt-4 ml-10">
        <div className = 'flex justify-between text-sm mb-5'>
            <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 font-semibold'> See All</button>
        </div>
        {allSuggestions}
    </div>
  )
}

export default Suggestions