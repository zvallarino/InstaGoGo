import React from 'react'
import Post from './Post.js'

function Posts() {

    const posts = [
        {
            id: '123', 
            username: 'zvallarino',
            userImg: 'https://i.imgur.com/Jq9qiCm.png',
            image: 'https://i.imgur.com/Jq9qiCm.png',
            caption: 'Bad Self Portraits',
        },
        {
            id: '124', 
            username: 'zvallarino',
            userImg: 'https://i.imgur.com/Jq9qiCm.png',
            image: 'https://i.imgur.com/Jq9qiCm.png',
            caption: 'Bad Self Portraits',
        },
    ]

    const allPosts = posts.map((post)=><Post 
    key = {post.id} id ={post.id} username = {post.username} 
    userImage = {post.userImg} image = {post.image} 
    caption = {post.caption}  />)

  return (
    <div>
        I am all posts
        {allPosts}
    </div>
  )
}

export default Posts