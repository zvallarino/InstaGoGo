import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState,useEffect } from 'react'
import { db } from '../firebase.js';
import Post from './Post.js'

function Posts() {

    const [posts,setPosts] = useState([]);

    useEffect(
        () => 
        { 
            const postsCollectionRef = collection(db,'posts')
            const orderRef = query(postsCollectionRef,orderBy("timestamp","desc"))
            return onSnapshot(orderRef, (snapshot) => {
                setPosts(snapshot.docs)
                })} 

    , [db])

    console.log(posts)

    const allPosts = posts.map(
        (post)=><Post 
    key = {post.id} id ={post.id} username = {post.data().username} 
    userImage = {post.data().profileImg} image = {post.data().image} 
    caption = {post.data().caption}  />)

  return (
    <div>
        {allPosts}
    </div>
  )
}

export default Posts