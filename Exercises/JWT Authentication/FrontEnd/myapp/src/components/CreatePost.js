import { useState } from "react";
import axios from "../api/axios";

function CreatePost({store})
{

    const [post,setPost] = useState();

    const createPost = () => {
        
        let token = "Bearer "+store.token;
        let config = {
            headers:{Authorization:token}
        };

        axios.post('/api/posts',{
           post 
        },config)
        .then(response =>{
            console.log("Response from protected route",response);
        })
        .catch(error=>{
            console.log("Response error",error);
        });

    }

    return(

        <div className="postArea">
            <h2>Create Post</h2>
            <textarea className="postText" name="post" rows="4" cols="50" onChange={(e)=>{setPost(e.target.value)}}/>
            <br/>
            <button onClick={createPost}>Post</button>
        </div>

    );
}

export default CreatePost;