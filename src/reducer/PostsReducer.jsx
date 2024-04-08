export const init = {
    posts: [],
    title: '',
    content: '',
}

const PostsReducer = (state, action) => {
    switch(action.type) {
        case 'updatetitle': return {
            ...state,
            title: action.payload
        }
        case 'updatecontent': return {
            ...state,
            content: action.payload
        }

        case 'addpost': return {
            ...state,
            posts: [...state.posts, {id: state.posts.length + 1, title: state.title, content: state.content}],
            title: '',
            content: '',
        }

        default: return state
    }
}

export default PostsReducer