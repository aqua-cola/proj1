import React, { useEffect, useMemo, useRef, useState } from 'react';
import "../Styles/App.css"
import axios from 'axios';
import { useFetching } from '../hooks/useFetching';
import PostService from '../Components/API/PostService';
import { getPageCount } from '../utils/pages';
import { usePosts } from '../hooks/usePosts';
import { MyButton } from '../Components/UI/button/MyButton';
import { MyModal } from '../Components/UI/MyModal/MyModal';
import { PostForm } from '../Components/PostForm';
import { PostFilter } from '../Components/PostFilter';
import { Loader } from '../Components/UI/loader/Loader';
import { PostList } from '../Components/PostList';
import { Pagination } from '../Components/UI/pagination/Pagination';

export type FilterType = {
    sort: string
    query: string
}

export type OptionsType = {
    value: string
    name: string
}
export type PostsType = {
    id: number
    title: string
    body: string
}


function Posts() {

    const [posts, setPosts] = useState<PostsType[]>([])
    const [filter, setFilter] = useState<FilterType>({ sort: '', query: '' })
    const [visible, setVisible] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = (Number(response.headers['x-total-count']))
        setTotalPages(getPageCount(totalCount, limit))
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost: PostsType) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }
    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    const changePage = (p: number) => {
        setPage(p)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setVisible(true)}>
                Создать пользователя
            </MyButton>
            <MyModal
                visible={visible}
                setVisible={setVisible}
            >
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    Произошла ошибка ${postError}
                </h1>
            }
            {isPostsLoading
                ?
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Loader />
                </div>
                :
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про языки программирования"} />
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
}

export default Posts;