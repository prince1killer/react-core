import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apibox from './Apibox'

function Api() {
    const [post, setPost] = useState([])
    const [id, setId] = useState("")
    const [clicked, setClicked] = useState("")

    const clickedValue = () => {
        setClicked(id)
    }

    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${clicked}`).then(req=>{console.log(req); setPost(req.data)}).catch(err=>console.log(err + "link is not working"))
    },["",clicked])


  return (
    <div >
        <label>if you want spacific post =</label><input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/><button onClick={clickedValue}>click me</button>
        {/* <div>{post.title}</div> */}
        <Apibox key={clicked?null:1} title={post.title} body={post.body}/>
        {/* {post.map(posts=>(<Apibox key={clicked?'':posts.id} title={posts.title} body={posts.body}/>))} */}
    </div>
  )
}

export default Api