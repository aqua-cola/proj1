import { useMemo } from "react"
import { PostsType } from "../pages/Posts"

export const useSortedPosts = (posts: PostsType[], sort: string) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (posts: PostsType[], sort: string, query: string) => {

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}