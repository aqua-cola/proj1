import React, { useState } from "react";
import { PostsType } from "../pages/Posts";
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";

type StatePostType = {
    title: string
    body: string
}

type PostFormType = {
    create: (newPost: PostsType) => void
}

export const PostForm = ({ create }: PostFormType) => {

    const [post, setPost] = useState<StatePostType>({ title: '', body: '' })

    const addNewPosts = (e: any) => {
        e.preventDefault()
        const newPost = { id: Date.now(), ...post }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    const onChangeTitle = (e: any) => {
        setPost({ ...post, title: e.target.value })
    }

    const onChangeBody = (e: any) => {
        setPost({ ...post, body: e.target.value })
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={onChangeTitle}
                type="text"
                placeholder='Название поста' />
            <MyInput
                value={post.body}
                onChange={onChangeBody}
                type="text"
                placeholder='Описание поста' />
            <MyButton onClick={addNewPosts}>Создать пост</MyButton>
        </form>
    )

}