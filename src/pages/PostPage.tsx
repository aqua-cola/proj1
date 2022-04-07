import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../Components/API/PostService";
import { Loader } from "../Components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

type PostPageType = {
    userId?: string
    id?: string
    title?: string
    body?: string
}

type CommentsType = {
    postID: string
    id: string
    name: string
    email: string
    body: string
}

export const PostPage = () => {

    const params = useParams()
    const [post, setPost] = useState<PostPageType>({})
    const [comments, setComments] = useState<CommentsType[]>([])
    const [fetchPostById, isLoading, error] = useFetching(async (id: string) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id: string) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })


    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID {params.id}</h1>
            {isLoading
                ?
                <Loader />
                :
                <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isComLoading
                ?
                <Loader />
                :
                <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}