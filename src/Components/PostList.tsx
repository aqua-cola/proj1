import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { PostsType } from "../pages/Posts";
import { PostItem } from "./PostItem";

type PostListType = {
    remove: (id: number) => void
    posts: PostsType[]
    title: string
}

export const PostList = ({ remove, posts, title }: PostListType) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index} post={post} key={post.id} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}