import axios from 'axios';

export const getPosts = () => {
    const request = axios.get('https://bloggy-api.herokuapp.com/posts')
        .then(res => res.data)

    return {
        type: 'GET_POSTS',
        payload: request
    }
}

export const getPostById = (id) => {
    const request = axios.get(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`)
        .then(res => res.data)


    return {
        type: 'GET_POST_BY_ID',
        payload: request
    }
}

export const createPost = (data) => {
    console.log(data)
    const request = axios.post('https://bloggy-api.herokuapp.com/posts', data)
        .then(res => true)
        .catch(err => console.log(err))

    return {
        type: 'CREATE_POST',
        payload: request
    }
}

export const updatePost = (id, data) => {
    const request = axios.put(`https://bloggy-api.herokuapp.com/posts/${id}`, data)
        .then(res => true)

    return {
        type: 'UPDATE_POST',
        payload: request
    }
}

export const deletePost = (id) => {
    const request = axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
        .then(res => true)
        .catch(err => console.log(err))

    return {
        type: 'DELETE_POST',
        payload: request
    }
}

export const createComment = (id, data) => {
    const body = {
        postId: parseInt(id),
        body: data
    }
    const request = axios.post('https://bloggy-api.herokuapp.com/comments', body)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err));

    return {
        type: 'CREATE_COMMENT',
        payload: request
    }
}

export const clearPost = () => {
    return {
        type: 'CLEAR_POST'
    }
}