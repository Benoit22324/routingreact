export const init = {
    posts: [],
    id: 1,
    title: '',
    content: '',
    errmsg: '',
}

const PostsReducer = (state, action) => {
    switch(action.type) {
        case 'updatetitle': return {
            ...state,
            title: action.payload,
            errmsg: '',
        }
        case 'updatecontent': return {
            ...state,
            content: action.payload,
            errmsg: '',
        }

        case 'addpost': return {
            ...state,
            posts: [...state.posts, {id: state.id, title: state.title, content: state.content}],
            id: state.id + 1,
            title: '',
            content: '',
            errmsg: '',
        }
        case 'delpost': return {
            ...state,
            posts: action.payload,
        }

        case 'adderr': return {
            ...state,
            errmsg: action.payload,
        }

        default: return state
    }
}

export default PostsReducer