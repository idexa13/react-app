import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from '../API/PostService'


const PostPage = () => {

    const params = useParams()

    const [data, setData] = useState({})


    const parsePosts = (async () => {
        const response = await PostService.GetPostId(params.id)
        setData(response.data)
    })()




    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>

        </div>

    );
};

export default PostPage;