import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default class PostService {

    static async getAll(limit: number = 10, page: number = 1) {
        const response = await axios.get(url, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id: string | undefined) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }

    static async getCommentsById(id: string | undefined) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}