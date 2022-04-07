import React from 'react';
import { Router, useNavigate } from 'react-router-dom';
import { idText } from 'typescript';
import { MyButton } from './UI/button/MyButton';

type PostItemPropsType = {
    remove: (id: number) => void
    post: { id: number, title: string, body: string }
    number: number
}

export const PostItem = ({ remove, post, number }: PostItemPropsType) => {

    const router = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => remove(post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
};

